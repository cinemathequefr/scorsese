$(function () {
  var markers;
  var sections;
  var ctrl;

  var mapView = new MapView(
    { groups: Data.groups },
    _.map($("section[data-id]").find(".mapContainer:first"), function (elem) { // Add hoc function to get the containers array
      return $(elem).attr("data-id", $(elem).closest("section").data("id")).eq(0);
    })
  );

  mapView.init();
  markers = mapView.getMarkers();

  _.forEach(markers, function (mrk) { // Event binding on markers
    google.maps.event.addListener(mrk.marker, "click", function (e) {
      var content;
      var id = mrk.place.id;
      var name = mrk.place.name;  
      var filmTitle = mrk.place.filmTitle;
      var videoId = mrk.place.videoId;
      var color = mrk.group.color.replace(/#/gi, "");
      mapView.bounce(mrk.marker);
      if (videoId) {
        content = "<iframe src='//player.vimeo.com/video/" + videoId + "?title=0&amp;byline=0&amp;portrait=0&amp;color=" + color + "&amp;autoplay=1' width='480' height='270' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div>" + id + " - " + filmTitle + " - " + name + "</div>";
          mapView.infoWindow().open(mrk.marker, content);
      }
    });
  });

  $("body").on("click", "span.place", function (e) {
    var placeId = parseInt($(e.target).data("place"));
    if (!!placeId) {
      google.maps.event.trigger(_.find(markers, { id: placeId }).marker, "click"); // http://stackoverflow.com/questions/2730929/
    }
  });

  ctrl = new ScrollMagic.Controller();


  var elemIntro = document.querySelector(".intro");
  var elemIntroQuote = elemIntro.querySelector(".quote");
  var elemIntroTitle = elemIntro.querySelector("h1");

  // Intro screen
  new ScrollMagic.Scene({
    triggerElement: elemIntro,
    triggerHook: 0,
    duration: "200%"
  })
  .setPin(elemIntro)
  .setTween(new TimelineMax().add([
    TweenMax.to(elemIntroQuote, 1, { top: 0, ease: Linear.easeNone }),
    TweenMax.to(elemIntroQuote, 1, { opacity: 0, ease: Power1.easeIn }),
    TweenMax.to(elemIntro, 1, { backgroundColor: "#999", ease: Power1.easeIn }),
    TweenMax.to(elemIntroTitle, 1, { opacity: 1, ease: Linear.easeNone })
  ]))
  // .addIndicators()
  .addTo(ctrl);





  sections = _($("section")).map(function (section, i) {
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
      var mapId, j;

      // Set splash title visibility (solves issue with position: fixed of the following section titles and map interaction)
      $(".splash .title")
      .css({ display: "none"})
      .eq(e.scrollDirection === "FORWARD" || e.scrollDirection === "PAUSED" ? i : Math.max(i - 1, 0))
      .css({ display: "block"});

      // Place the map in the section we're entering (downwards i, upwards i - 1)
      j = (e.scrollDirection === "FORWARD" ? i : Math.max(i - 1, 0));
      mapId = $(sections[j].elemMapContainer).data("id");
      mapView.insert(mapId);
      mapView.drawMarkers(mapId);
      mapView.infoWindow().close();
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
      $(section.elemMapContainer).sticky(); // Pin the map (sticky.js is used to avoid issues with nested Magic Scroll pins)
    }
    
  });

});
