var Data = (function () {
  var self = {
    films: [
      { id: 1, title: "Who's That Knocking at My Door" },
      { id: 2, title: "Mean Streets" },
      { id: 3, title: "Taxi Driver" },
      // { id: 4, title: "New York, New York" },
      { id: 5, title: "Raging Bull" },
      { id: 6, title: "La Valse des pantins" },
      { id: 7, title: "After Hours" },
      { id: 8, title: "Les Affranchis" },
      { id: 9, title: "Le Temps de l'innocence" },
      { id: 10, title: "À tombeau ouvert" },
      { id: 11, title: "Gangs of New York" },
      { id: 13, title: "Le Loup de Wall Street" }
    ],



    places: [
      // 1 - Who's That Knocking at My Door (1967)
      { id: 104, filmId: 1, lat: 40.64403, lng: -74.07219, name: "Staten Island Ferries", videoId: 142512156 },
      { id: 106, filmId: 1, lat: 40.71974, lng: -73.99622, name: "Mott Street", videoId: 142512229 },
      { id: 115, filmId: 1, lat: 40.72326, lng: -73.99426, name: "Mario le boucher", videoId: 142512291 },

      // 2 - Mean Streets (1973)
      { id: 1, filmId: 2, lat: 40.72358, lng: -73.99518, name: "Vieille cathédrale Saint-Patrick", videoId: 141537578 },
      { id: 2, filmId: 2, lat: 40.72176, lng: -73.99707, name: "Volpe Bar", videoId: 141537816 },
      { id: 3, filmId: 2, lat: 40.71816, lng: -73.99794, name: "Mulberry St and Hester St", videoId: 141537586 },
      { id: 4, filmId: 2, lat: 40.71810, lng: -74.01280, name: "The Bridge", videoId: 141537581 },
      { id: 5, filmId: 2, lat: 40.71930, lng: -73.99732, name: "Mulberry St", videoId: 141537580 },
      { id: 6, filmId: 2, lat: 40.72075, lng: -73.99710, name: "394 Broome St", videoId: 141537582 },
      { id: 7, filmId: 2, lat: 40.73120, lng: -74.00167, name: "323 6th Ave - Waverly Theater", videoId: 141537579 },

      // // 3 - Taxi Driver (1976)
      { id: 8, filmId: 3, lat: 40.76987, lng: -73.99031, name: "W57th Street", videoId: 141555221 },
      { id: 9, filmId: 3, lat: 40.76041, lng: -73.98745, name: "8th Ave &amp; W47th St.", videoId: 141556259 },
      { id: 12, filmId: 3, lat: 40.75890, lng: -73.98513, name: "Times Square", videoId: 141555224 },
      // { id: 15, filmId: 3, lat: 40.74335, lng: -73.98413, name: "Park Ave S &amp; E 28th St", videoId: 141555216 },
      { id: 17, filmId: 3, lat: 40.73202, lng: -73.98668, name: "", videoId: 141555225 },
      { id: 20, filmId: 3, lat: 40.76741, lng: -73.98239, name: "Betsy et Travis boivent un café", videoId: 141804226 },

      // 4 - New York, New York (1977)

      // 5 - Raging Bull (1980)
      { id: 24, filmId: 5, lat: 40.73399, lng: -73.98891, name: "Gramercy Gym, 116 E 14th St", videoId: 142231219 },
      { id: 25, filmId: 5, lat: 40.72958, lng: -74.00547, name: "Tony Dapolito Recreation Center, 1 Clarkson St", videoId: 142231257 },
      { id: 26, filmId: 5, lat: 40.73176, lng: -73.98913, name: "Webster Hall, 125 E 11th St", videoId: 142231279 },
      { id: 27, filmId: 5, lat: 40.76435, lng: -73.97189, name: "Copacabana, 10 E 60th St", videoId: 142231304 },
      { id: 28, filmId: 5, lat: 40.76834, lng: -73.98820, name: "447 W 56th St", videoId: 142231323 },
      { id: 29, filmId: 5, lat: 40.76138, lng: -73.98527, name: "225 W 49th St", videoId: 142231342 },
      { id: 103, filmId: 5, lat: 40.72307, lng: -73.99385, name: "232 Elizabeth St - Scène du mariage", videoId: 142257454 },

      // 6 - La Valse des pantins (1983)
      { id: 30, filmId: 6, lat: 40.75895, lng: -73.98493, name: "Times Square", videoId: 142231363 },
      { id: 31, filmId: 6, lat: 40.76207, lng: -73.9846, name: "Paramount Plaza", videoId: 142231373 },
      { id: 32, filmId: 6, lat: 40.75614, lng: -73.96571, name: "335 E 53rd St", videoId: 142231386 },

      // 7 - After Hours (1985)
      { id: 33, filmId: 7, lat: 40.74168, lng: -73.98695, name: "Metropolitan Life North Building", videoId: 142231397 },
      { id: 36, filmId: 7, lat: 40.72589, lng: -74.00838, name: "Terminal Bar, Spring St &amp; Renwick St", videoId: 142231427 },
      { id: 37, filmId: 7, lat: 40.72806, lng: -74.00720, name: "Hudson St", videoId: 142231454 },
      { id: 38, filmId: 7, lat: 40.72230, lng: -73.99714, name: "Spring St", videoId: 142231471 },
      { id: 40, filmId: 7, lat: 40.72090, lng: -74.00068, name: "Club Berlin, Broadway &amp; Grand St", videoId: 142231483 },

      // 8 - Les Affranchis (1990)
      { id: 41, filmId: 8, lat: 40.76768, lng: -73.89987, name: "Airline Diner, 69-35 Astoria Blvd N, East Elmhurst", videoId: 142231514 },
      { id: 42, filmId: 8, lat: 40.77276, lng: -73.91525, name: "23-86 31st St, Long Island City", videoId: 142231530 },
      { id: 43, filmId: 8, lat: 40.70055, lng: -73.83287, name: "117-11 Hillside Ave, Jamaica", videoId: 142231575 },
      { id: 44, filmId: 8, lat: 40.95372, lng: -73.77996, name: "19 Alfred Ln, New Rochelle", videoId: 142231586 },
      { id: 45, filmId: 8, lat: 40.72951, lng: -73.88939, name: "73-20 Grand Ave, Maspeth", videoId: 142231616 },
      { id: 46, filmId: 8, lat: 40.72126, lng: -73.84248, name: "109-20 71st Rd, Forest Hills", videoId: 142231632 },
      { id: 47, filmId: 8, lat: 40.68979, lng: -73.86367, name: "87-48 78th St, Jamaica", videoId: 142231645 },
      { id: 48, filmId: 8, lat: 40.72282, lng: -73.91350, name: "Goodfellas Diner, 5626 Maspeth Ave, Maspeth", videoId: 142231662 },
      { id: 49, filmId: 8, lat: 40.70079, lng: -73.83235, name: "117-99 Babbage St, Richmond Hill", videoId: 142231676 },
      { id: 50, filmId: 8, lat: 40.67473, lng: -73.99777, name: "Brooklyn", videoId: 142231686 },
      { id: 90, filmId: 8, lat: 40.77159, lng: -73.91503, name: "", videoId: 142231912 },
      { id: 91, filmId: 8, lat: 40.77182, lng: -73.9148, name: "", videoId: 142231927 },
      { id: 92, filmId: 8, lat: 40.77276, lng: -73.91525, name: "", videoId: 142231937 },
      { id: 93, filmId: 8, lat: 40.76435, lng: -73.97189, name: "10 E 60th St - Copacabana", videoId: 142231946 },
      { id: 94, filmId: 8, lat: 40.63063, lng: -74.03916, name: "5 80th St", videoId: 142231968 },
      { id: 95, filmId: 8, lat: 40.74024, lng: -74.00791, name: "", videoId: 142231982 },

      // 9 - Le Temps de l'innocence (1993)
      { id: 51, filmId: 9, lat: 40.73769, lng: -73.9867, name: "Gramercy Park", videoId: 142364730 },
      { id: 52, filmId: 9, lat: 40.86352, lng: -73.88209, name: "Enid A. Haupt Conservatory", videoId: 142364864 },
      { id: 53, filmId: 9, lat: 40.71435, lng: -74.00047, name: "Five Points", videoId: 142364896 },
      { id: 107, filmId: 9, lat: 40.78122, lng: -73.96665, name: "Central Park - Mrs. Mingott's House", videoId: 142364924 },

      // 10 - À tombeau ouvert (1999)
      { id: 61, filmId: 10, lat: 40.76375, lng: -73.99181, name: "Hell's Kitchen", videoId: 142364269 },
      { id: 64, filmId: 10, lat: 40.73855, lng: -73.97540, name: "Bellevue Hospital Center", videoId: 142262401 },
      { id: 108, filmId: 10, lat: 40.76607, lng: -73.99751, name: "", videoId: 142258382 },
      { id: 109, filmId: 10, lat: 40.76402, lng: -73.99215, name: "", videoId: 142260878 },

      // 11 - Gangs of New York (2002)
      { id: 100, filmId: 11, lat: 40.71435, lng: -74.00047, name: "", videoId: 142272316 },
      { id: 101, filmId: 11, lat: 40.70423, lng: -73.99276, name: "", videoId: 142272381 },
      { id: 102, filmId: 11, lat: 40.71968, lng: -73.99717, name: "", videoId: 142272454 },
      { id: 110, filmId: 11, lat: 40.7154, lng: -74.00002, name: "", videoId: 142272489 },

      // 13 - Le Loup de Wall Street (2013)
      { id: 73, filmId: 13, lat: 40.76021, lng: -73.97677, name: "666 5th Ave", videoId: 140303118 },
      { id: 74, filmId: 13, lat: 40.85186, lng: -73.56462, name: "39 Chestnut Hill Drive", videoId: 140303160 },
      { id: 75, filmId: 13, lat: 40.70687, lng: -74.01126, name: "New York Stock Exchange", videoId: 140303182 },
      // { id: 76, filmId: 13, lat: 40.75901, lng: -73.98447, name: "Equitable Building, 120 Broadway", videoId: 140303199 },
      { id: 77, filmId: 13, lat: 40.72703, lng: -73.86385, name: "Shalimar Diner, 6368 Austin Street at 63rd Drive", videoId: 140303231 },
      { id: 78, filmId: 13, lat: 41.01093, lng: -73.84652, name: "Frank's Best Auto Body", videoId: 140303241 },
      // { id: 79, filmId: 13, lat: 40.97721, lng: -73.74199, name: "500 Mamaroneck Ave", videoId: 140303251 },
      { id: 80, filmId: 13, lat: 40.85176, lng: -73.71874, name: "Hoffstot Lane", videoId: 140303261 },
      { id: 81, filmId: 13, lat: 40.76250, lng: -73.97385, name: "Trump Tower, 725 Fifth Avenue", videoId: 140303280 },
      { id: 82, filmId: 13, lat: 40.75771, lng: -73.96609, name: "Penthouse on the 32nd floor of the Milan Condominium, 300 East 55th Street", videoId: 140303322 },
      { id: 83, filmId: 13, lat: 40.75831, lng: -73.97186, name: "Pool Room of the Four Seasons Restaurant, 99 East 52nd Street ", videoId: 140303352 },
      { id: 84, filmId: 13, lat: 40.90899, lng: -73.54416, name: "333 Bayville Ave, Bayville, north of Oyster Bay, Long Island", videoId: 140303372 },
      // { id: 85, filmId: 13, lat: 40.79388, lng: -73.93440, name: "Rao's Restaurant, 455 East 114th Street at Pleasant Avenue, East Harlem", videoId: 140303397 },
      { id: 86, filmId: 13, lat: 40.71215, lng: -74.01700, name: "North Cove Marina, 385 South End Avenue", videoId: 140303409 },
      // { id: 87, filmId: 13, lat: 40.96904, lng: -73.95493, name: "Closter Plaza, 71 Vervalen Street, Closter", videoId: 140303426 },
      { id: 88, filmId: 13, lat: 40.98562, lng: -73.70661, name: "Willow Ridge Country Club, 123 North Street, Harrison", videoId: 140303449 },
      { id: 89, filmId: 13, lat: 40.75482, lng: -74.00706, name: "West 30th Street Heliport, West 30th Street at 12th Avenue / Hudson River Greenway, Chelsea", videoId: 140303465 }
    ],
    groups: [ // Each group is shown on a different map
      { id: 1, color: "#999933", places: [104, 106, 115] }, // Who's That Knocking at My Door
      { id: 2, color: "#4821d9", places: [1, 2, 3, 4, 5, 6, 7] }, // Mean Streets
      { id: 3, color: "#f2ce18", places: [8, 9, 12, 17, 20] }, // Taxi Driver
      // { id: 4, color: "#ffffff", places: [] }, // New York, New York
      { id: 5, color: "#e51300", places: [24, 25, 26, 27, 28, 29, 103] }, // Raging Bull
      { id: 6, color: "#74b336", places: [30, 31, 32] }, // The King of Comedy
      { id: 7, color: "#9933ff", places: [33, 36, 37, 38, 40] }, // After Hours
      { id: 8, color: "#b35995", places: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 90, 91, 92, 93, 94, 95] }, // Les Affranchis
      { id: 9, color: "#bf8f4c", places: [51, 52, 53, 107] }, // Le Temps de l'innocence
      { id: 10, color: "#3366ff", places: [61, 64, 108, 109] }, // À tombeau ouvert
      { id: 11, color: "#ff3366", places: [100, 101, 102, 110] }, // Gangs of New York
      { id: 13, color: "#3366cc", places: [73, 74, 75, 77, 78, 80, 81, 82, 83, 84, 86, 88, 89] } // Le Loup de Wall Street
    ],

    expand: function () {
      return {
        groups: _.map( // Returns a groups object with place objects instead of place ids
          _.assign({}, self.groups),
          function (group) {
            return _.assign(
              {}, group,
              {
                places: _.map(group.places, function (id) {
                  var place = _.find(self.places, { id: id });
                  return _.assign(place, { filmTitle: _.find(self.films, { id: place.filmId }).title }); // Also adds place.filmTitle
                })
              }
            );
          }
        )
        // , places: {} // TODO if needed
      };
    }
  };

  return {
    // places: self.expand().places,
    groups: self.expand().groups,
    films: self.films
  };

})();