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


  // var elemIntro = document.querySelector(".intro");
  // var elemIntroQuote = elemIntro.querySelector(".quote");
  // var elemIntroTitle = elemIntro.querySelector("h1");

  // Intro screen
  // new ScrollMagic.Scene({
  //   triggerElement: elemIntro,
  //   triggerHook: 0,
  //   duration: "200%"
  // })
  // .setPin(elemIntro)
  // .setTween(new TimelineMax().add([
  //   TweenMax.to(elemIntroQuote, 1, { top: 0, ease: Linear.easeNone }),
  //   TweenMax.to(elemIntroQuote, 1, { opacity: 0, ease: Power1.easeIn }),
  //   TweenMax.to(elemIntro, 1, { backgroundColor: "#999", ease: Power1.easeIn }),
  //   TweenMax.to(elemIntroTitle, 1, { opacity: 1, ease: Linear.easeNone })
  // ]))
  // .addIndicators()
  // .addTo(ctrl);


  sections = _.map($("section"), function (section, i) {
    return {
      id: $(section).data("id"),
      type: _.find(["intro", "chapter", "outro"], function (t) { return $(section).hasClass(t); }),
      elemSection: section,
      elemSplash: section.querySelector(".splash"),
      elemOverlay: section.querySelector(".overlay"),
      elemQuote: section.querySelector(".quote"),
      elemTitle: section.querySelector(".title"),
      elemText: section.querySelector(".text"),
      elemMapContainer: section.querySelector(".mapContainer")
    };
  });

  _.forEach(sections, function (section, i) {

    var elemSection = section.elemSection;


    if (section.type === "intro") {

      new ScrollMagic.Scene({
        triggerElement: section.elemSplash,
        triggerHook: 0,
        duration: "100%"
      })
      // .addIndicators()
      .setPin(section.elemSplash)
      .setTween(new TimelineMax().add([
        TweenMax.fromTo(section.elemOverlay, 1, { opacity: 1 }, { opacity: 0, ease: Power1.easeIn }),
        TweenMax.fromTo(elemSection.querySelector(".introBackground"), 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeIn }),
        TweenMax.fromTo(elemSection.querySelector("h1"), 1, { top: "85vh", opacity: 0 }, { top: "50vh", opacity: 1, ease: Power1.easeIn }),
        TweenMax.fromTo(elemSection.querySelector(".introText"), 1, { opacity: 1 }, { opacity: 0, ease: Power1.easeOut })
      ]))
      .addTo(ctrl);



    }


    if (section.type === "chapter") {

      $(section.elemMapContainer).sticky(); // Map containers are sticky (sticky.js is used to avoid issues with nested Magic Scroll pins)

      new ScrollMagic.Scene({
        triggerElement: section.elemSplash,
        triggerHook: 0,
        duration: "100%"
      })
      .setPin(section.elemSplash)
      .setTween(new TimelineMax().add([
        TweenMax.fromTo(section.elemSplash, 1, { backgroundPosition: "50% -50%" }, { backgroundPosition: "50% 100%", ease: Linear.easeNone } ),
        TweenMax.fromTo(section.elemOverlay, 1, { opacity: 1 }, { opacity: 0, ease: Power1.easeIn }),
        TweenMax.fromTo(section.elemQuote, 1, { opacity: 1, top: "50%" }, { opacity: 0, top: 0, ease: Linear.easeNone }),
        TweenMax.fromTo(section.elemTitle, 1, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone })
      ]))
      // .addIndicators()
      .addTo(ctrl)
      .on("start", function (e) {
        var mapId;
        var newSection = sections[e.scrollDirection === "FORWARD" || e.scrollDirection === "PAUSED" ? i : Math.max(i - 1, 0)]; // The section we are entering

        if (newSection.type === "chapter") {
          $("section.chapter .title").hide(); 
          $(newSection.elemTitle).show(); // Set splash title visibility (solves issue with `position: fixed` of the following section titles and map interaction)

          mapId = $(newSection.elemMapContainer).data("id"); // Move the map to the new chapter and update it
          mapView.insert(mapId);
          mapView.drawMarkers(mapId);
          mapView.infoWindow().close();
        }
      });

    }


  });


});
