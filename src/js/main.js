$(function() {

  map.init(data);


  var ctrl = new ScrollMagic.Controller();

  var sections = _($("section")).map(function (section, i) {
    return {
      id: $(section).data("id"),
      elemSection: section,
      elemSplash: section.querySelector(".splash"),
      elemOverlay: section.querySelector(".overlay"),
      elemQuote: section.querySelector(".quote"),
      elemTitle: section.querySelector(".title"),
      elemText: section.querySelector(".text"),
      elemMapContainer: section.querySelector(".mapContainer")
    };
  }).value();

  _.forEach(sections, function (section, i) {

    var tween = new TimelineMax().add([
      TweenMax.to(section.elemSplash, 1, { backgroundPosition: "0% 100%", ease: Linear.easeNone }),
      TweenMax.to(section.elemOverlay, 1, { opacity: 0, ease: Power1.easeIn }),
      TweenMax.to(section.elemQuote, 1, { opacity: 0, top: 0, ease: Linear.easeNone }),
      TweenMax.to(section.elemTitle, 1, { opacity: 1, ease: Linear.easeNone })
    ]);

    new ScrollMagic.Scene({
      triggerElement: section.elemSplash,
      triggerHook: 0,
      duration: "100%"
    })
    .setPin(section.elemSplash)
    .setTween(tween)
    .addTo(ctrl)
    .on("start", function (e) {

      // Make title visible (NB: because of fixed position and z-index, all (following) splash-titles must be hidden to allow for correct map interactions)
      $(".splash .title").css({ display: (e.scrollDirection === "FORWARD" ? "block" : "none") });

      // Place the map in the section we're entering (downwards i, upwards i - 1)
      var j = (e.scrollDirection === "FORWARD" ? i : Math.max(i - 1, 0));
      map.insertMap($(sections[j].elemSection).data("id"));

    });

    new ScrollMagic.Scene({ // Hide all splash titles when entering text (from top), show when leaving (from bottom)
      triggerElement: section.elemText,
      triggerHook: 0,
    })
    .addTo(ctrl)
    .on("start", function (e) {
      $(".splash .title").css({ display: (e.scrollDirection === "FORWARD" ? "none" : "block") });
    });

    if (sections[i + 1]) {
      new ScrollMagic.Scene({ // When the next splash is about to enter from the bottom, we pin the text so the splash slides on top of it.
        triggerElement: sections[i + 1].elemSplash,
        triggerHook: 1,
        duration: "100%"
      })
      .setPin(section.elemSection, { pushFollowers: false })
      .addTo(ctrl);
    }

    if (section.elemMapContainer) {
      $(section.elemMapContainer).sticky(); // NB: use sticky.js to avoid issues with nested Magic Scroll pins
    }
  });



});


var map = (function (data, containers) {
  var m; // Map instance
  var gm = google.maps;
  var elemMap;
  var places, maps; // Extended data objects

  var options = {
    center: new gm.LatLng(40.766300, -73.977734),
    disableDefaultUI: true,
    scrollwheel: false,
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}], // https://snazzymaps.com/style/1/pale-dawn
    zoom: 13,
    zoomControl: true
  };

  var pin = {
    path: "m0.05195,-0.07428c-0.63931,-3.138 -1.76633,-5.74954 -3.13148,-8.16974c-1.01259,-1.79526 -2.18562,-3.4523 -3.271,-5.19333c-0.36232,-0.58109 -0.675,-1.19516 -1.02315,-1.79822c-0.69614,-1.20605 -1.26054,-2.60439 -1.22469,-4.41824c0.03505,-1.77219 0.54759,-3.19382 1.28671,-4.35614c1.21562,-1.91174 3.25182,-3.47919 5.9839,-3.89108c2.23387,-0.33679 4.32825,0.23218 5.81332,1.10065c1.21365,0.70972 2.15358,1.65768 2.86792,2.7749c0.74567,1.16614 1.25917,2.54376 1.3022,4.34067c0.02211,0.92065 -0.12862,1.77319 -0.341,2.48038c-0.21486,0.71582 -0.5605,1.31423 -0.86803,1.95333c-0.6004,1.24765 -1.353,2.39072 -2.1084,3.53445c-2.24988,3.40698 -4.36157,6.88141 -5.28631,11.64237z",
    fillColor: "#fff",
    fillOpacity: 1,
    scale: 1,
    strokeOpacity: 1,
    strokeColor: "#000",
    strokeWeight: 1.5
  };

  var dot = {
    path: "M-6,0a6,6 0 1,0 12,0a6,6 0 1,0 -12,0",
    fillColor: "#eee",
    fillOpacity: 1,
    scale: 0.75,
    strokeOpacity: 1,
    strokeColor: "#666",
    strokeWeight: 1
  }

  // Initialization: instantiate map + process data
  var init = function () {
    elemMap = $("<div id='map'></div>")[0];
    m = new gm.Map(elemMap, options);
    $(elemMap).appendTo(containers[0].elem);

    places = _.map(data.places, function (place) {
      var position = new gm.LatLng(place.lat, place.lng);
      var markerOff = new gm.Marker({ map: m, position: position, icon: dot });
      var markerOn = new gm.Marker({ map: m, position: position, icon: pin });
      return _.assign(place, {
        markerOff: markerOff,
        markerOn: markerOn,
        position: position
      });
    });

    maps = _.map(data.maps, function (map) {
      var latLngBounds = _.reduce(
        map.places,
        function (bnds, id) {
          return bnds.extend(_.find(places, { id: id }).position);
        },
        new gm.LatLngBounds()
      );
      return _.assign(map, {
        latLngBounds: latLngBounds
      });
    });


  };

  var insertMap = function (id) { // Move map to the given map container + update
    var elemMapContainer = _.find(containers, { id: id }).elem;

    if (elemMapContainer) {
      $(elemMap).detach().appendTo(elemMapContainer);
    }

    var thisMapData = _.find(maps, { id: id });

    var part = _.partition(places, function (place) { // Splits places in 2 groups: belonging/not belonging to the map
      return _.indexOf(thisMapData.places, place.id) > -1;
    });

    _.forEach(part[0], function (place) {
      place.markerOn.setVisible(true);
      place.markerOff.setVisible(false);
    });

    _.forEach(part[1], function (place) {
      place.markerOn.setVisible(false);
      place.markerOff.setVisible(true);
    });

    m.fitBounds(thisMapData.latLngBounds); // Fit bounds for this map





  };

  return {
    init: init,
    insertMap: insertMap
  };

})(
  data,
  _.map($("section[data-id]").find(".mapContainer:first"), function (elem) { // Ad hoc function to build the containers collection
    return {
      id: $(elem).closest("section").data("id"),
      elem: elem
    };
  })
);

