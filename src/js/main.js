




$(function () {
  var $body = $("body");


  var mapView = new MapView(
    { groups: Data.groups },
    _.map($("section[data-id]").find(".mapContainer:first"), function (elem) { // Add hoc function to get the containers array
      return $(elem).attr("data-id", $(elem).closest("section").data("id")).eq(0);
    })
  );

  mapView.init();
  // mapView.insert(1);
  // mapView.drawMarkers(1);


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
      // map.insertMap($(sections[j].elemSection).data("id"));

      var mapId = $(sections[j].elemMapContainer).data("id");
      mapView.insert(mapId);
      mapView.drawMarkers(mapId);


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
