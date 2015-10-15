// Map

var MapView = function (data, containers) {
  _.assign(this, {
    data: data,
    containers: containers,
    elemMap: null,
    map: null,
    mapOptions: {
      center: new google.maps.LatLng(40.766300, -73.977734), // TODO: remove + set center on init
      disableDefaultUI: true,
      scrollwheel: false,
      styles: [
        {"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}, // https://snazzymaps.com/style/1/pale-dawn
        {"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]}, {"featureType":"transit","stylers":[{"visibility":"off"}]}, {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]}, {"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#848fa4"}]}, {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#e4d7c6"}]}, {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]}, {"featureType":"road.highway.controlled_access","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#666666"}]}
      ],
      zoom: 13,
      zoomControl: true
    },
    infoWindowOptions: {
      maxWidth: 480
    },
    baseIcons: {
      pin: {
        path: "m0.05195,-0.07428c-0.63931,-3.138 -1.76633,-5.74954 -3.13148,-8.16974c-1.01259,-1.79526 -2.18562,-3.4523 -3.271,-5.19333c-0.36232,-0.58109 -0.675,-1.19516 -1.02315,-1.79822c-0.69614,-1.20605 -1.26054,-2.60439 -1.22469,-4.41824c0.03505,-1.77219 0.54759,-3.19382 1.28671,-4.35614c1.21562,-1.91174 3.25182,-3.47919 5.9839,-3.89108c2.23387,-0.33679 4.32825,0.23218 5.81332,1.10065c1.21365,0.70972 2.15358,1.65768 2.86792,2.7749c0.74567,1.16614 1.25917,2.54376 1.3022,4.34067c0.02211,0.92065 -0.12862,1.77319 -0.341,2.48038c-0.21486,0.71582 -0.5605,1.31423 -0.86803,1.95333c-0.6004,1.24765 -1.353,2.39072 -2.1084,3.53445c-2.24988,3.40698 -4.36157,6.88141 -5.28631,11.64237z",
        // path: "M0,0l-2.585-7.227H-10v-15.122h20v15.122H2.585L0,0z",
        fillColor: "#fff",
        fillOpacity: 1,
        scale: 1,
        strokeOpacity: 0.5,
        strokeColor: "#000",
        strokeWeight: 1
      },
      dot: {
        path: "M-6,0a6,6 0 1,0 12,0a6,6 0 1,0 -12,0",
        fillColor: "#ddd",
        fillOpacity: 0.75,
        scale: 0.75,
        strokeOpacity: 0.5,
        strokeColor: "#000",
        strokeWeight: 1
      }
    },
    markers: [],
    _infoWindow: null
  });
};

MapView.prototype.init = function () {
  var self = this;
  this.elemMap = $("<div id='map'></div>")[0];
  this.map = new google.maps.Map(this.elemMap, this.mapOptions);
  $(this.elemMap).appendTo(this.containers[0]); // Insert the map in the first container

  // Instantiate (singleton) InfoWindow
  this._infoWindow = new google.maps.InfoWindow(this.infoWindowOptions);
  google.maps.event.addListener(this.map, "click", function () {
    self.infoWindow().close();
  });



  // Extend data with google.maps objects
  _.forEach(this.data.groups, function (group) {
    _.forEach(group.places, function (place) { // Place-wise assignments
      _.assign(place, { position: new google.maps.LatLng(place.lat, place.lng) }); // Add LatLng object to each place
    });
    _.assign(group, { // Group-wise assignments
      latLngBounds: _.reduce(
        group.places,
        function (bnds, place) {
          return bnds.extend(place.position); // = google.maps.LatLngBounds.extend method
        },
        new google.maps.LatLngBounds()
      ),
      icons: {
        pin: _.assign({}, self.baseIcons.pin, { fillColor: group.color }),
        dot: _.assign({}, self.baseIcons.dot, { fillColor: group.color })
      }
    });
    _.forEach(group.places, function (place) { // Create markers collection
      self.markers.push({
        group: group,
        place: place,
        id: place.id, // TODO: remove?
        marker: new google.maps.Marker({
          map: self.map,
          position: place.position,
          icon: group.icons.pin,
          visible: false
        })
      });
    });
  });

};

MapView.prototype.insert = function (id) { // Insert (move) map into container (id)
  var elemMapContainer = _.find(this.containers, function (cont) {
    return $(cont).data("id") === id;
  });
  if (elemMapContainer) {
    $(this.elemMap).detach().appendTo(elemMapContainer);
  }
};

MapView.prototype.drawMarkers = function (id) { // Draw markers for group (id)
  var map = this.map;
  var group = _.find(this.data.groups, { id: id });
  var z;
  _.forEach(this.markers, function (mrk) {
    mrk.marker.setIcon(mrk.group.id === id ? mrk.group.icons.pin : mrk.group.icons.dot);
    mrk.marker.setVisible(true);
  });
  map.fitBounds(group.latLngBounds);
  z = map.getZoom();
  map.setZoom(z - 1);
  _.delay(function () { map.setZoom(Math.min(z, 14)); }, 1000); // Force repaint (?) + enforce max zoom level
};


MapView.prototype.getMarkers = function () {
  return this.markers;
};

MapView.prototype.bounce = function (marker) {
  marker.setAnimation(google.maps.Animation.BOUNCE);
  marker.setAnimation(null);
};

MapView.prototype.infoWindow = function () {
  var self = this;
  return {
    open: function (marker, content) {
      self._infoWindow.close(); // Close before opening
      self._infoWindow.setContent(content);
      self._infoWindow.open(self.map, marker);
    },
    close: function () {
      self._infoWindow.setContent(null); // NB: Make sure that the content is removed (?)
      self._infoWindow.close();
    }
    /*
    ,
    isOpen: function () { // http://stackoverflow.com/questions/12410062/check-if-infowindow-is-opened-google-maps-v3
      var map = self._infoWindow.getMap();
      return (map !== null && typeof map !== "undefined");
    }
    */


  };
};
