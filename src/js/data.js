var Data = (function () {
  var self = {
    films: [
      { id: 1, title: "Who's That Knocking at My Door" },
      { id: 2, title: "Mean Streets" },
      { id: 3, title: "Taxi Driver" },
      { id: 4, title: "New York, New York" },
      { id: 5, title: "Raging Bull" },
      { id: 6, title: "La Valse des pantins" },
      { id: 7, title: "After Hours" },
      { id: 8, title: "Les Affranchis" },
      { id: 9, title: "Le Temps de l'innocence" },
      { id: 10, title: "À tombeau ouvert" },
      { id: 11, title: "Gangs of New York" },
      { id: 12, title: "Les Infiltrés" },
      { id: 13, title: "Le Loup de Wall Street" }
    ],



    places: [
      // 1 - Who's That Knocking at My Door (1967)
      { id: 93, filmId: 1, lat: 40.64403, lng: -74.07219, name: "Staten Island Ferries", videoId: null },
      { id: 94, filmId: 1, lat: 42.10345, lng: -73.54992, name: "Copake", videoId: null },
      { id: 95, filmId: 1, lat: 40.71974, lng: -73.99622, name: "Mott Street", videoId: null },

      // 2 - Mean Streets (1973)
      { id: 1, filmId: 2, lat: 40.72358, lng: -73.99518, name: "Vieille cathédrale Saint-Patrick", videoId: null },
      { id: 2, filmId: 2, lat: 40.72176, lng: -73.99707, name: "Volpe Bar", videoId: 141537816 },
      { id: 3, filmId: 2, lat: 40.71816, lng: -73.99794, name: "Mulberry St and Hester St", videoId: 141537586 },
      { id: 4, filmId: 2, lat: 40.71810, lng: -74.01280, name: "The Bridge", videoId: 141537581 },
      { id: 5, filmId: 2, lat: 40.71930, lng: -73.99732, name: "Mulberry St", videoId: 141537580 },
      { id: 6, filmId: 2, lat: 40.72075, lng: -73.99710, name: "394 Broome St", videoId: 141537582 },
      { id: 7, filmId: 2, lat: 40.73120, lng: -74.00167, name: "323 6th Ave - Waverly Theater", videoId: 141537579 },

      // 3 - Taxi Driver (1976)
      { id: 8, filmId: 3, lat: 40.76987, lng: -73.99031, name: "W57th Street", videoId: 141555221 },
      { id: 9, filmId: 3, lat: 40.76041, lng: -73.98745, name: "8th Ave &amp; W47th St.", videoId: 141556259 },
      { id: 12, filmId: 3, lat: 40.76741, lng: -73.98239, name: "8th Ave &amp; W 58th St", videoId: 141555224 },
      { id: 15, filmId: 3, lat: 40.76381, lng: -73.98294, name: "Ed Sullivan Theater", videoId: 141555216 },
      { id: 17, filmId: 3, lat: 40.73225, lng: -73.98736, name: "204 E 13th St", videoId: 141555225 },
      { id: 20, filmId: 3, lat: 40.76141, lng: -73.97469, name: "The St. Regis, 2 E 55th St", videoId: 141804226 },
      { id: 21, filmId: 3, lat: 40.75847, lng: -73.98469, name: "", videoId: null },
      { id: 22, filmId: 3, lat: 40.75657, lng: -73.99028, name: "", videoId: null },

      // 4 - New York, New York (1977)

      // 5 - Raging Bull (1980)
      { id: 23, filmId: 4, lat: 40.81637, lng: -73.91529, name: "Gleason's Gym, 434 Westchester Ave, Bronx", videoId: null },
      { id: 24, filmId: 4, lat: 40.73399, lng: -73.98891, name: "Gramercy Gym, 116 E 14th St", videoId: null },
      { id: 25, filmId: 4, lat: 40.72958, lng: -74.00547, name: "Tony Dapolito Recreation Center, 1 Clarkson St", videoId: null },
      { id: 26, filmId: 4, lat: 40.73176, lng: -73.98913, name: "Webster Hall, 125 E 11th St", videoId: null },
      { id: 27, filmId: 4, lat: 40.76435, lng: -73.97189, name: "Copacabana, 10 E 60th St", videoId: null },
      { id: 28, filmId: 4, lat: 40.76834, lng: -73.98820, name: "447 W 56th St", videoId: null },
      { id: 29, filmId: 4, lat: 40.76138, lng: -73.98527, name: "225 W 49th St", videoId: null },

      // 6 - La Valse des pantins (1983)
      { id: 30, filmId: 5, lat: 40.75895, lng: -73.98493, name: "Times Square", videoId: null },
      { id: 31, filmId: 5, lat: 40.76207, lng: -73.9846, name: "Paramount Plaza", videoId: null },
      { id: 32, filmId: 5, lat: 40.75614, lng: -73.96571, name: "335 E 53rd St", videoId: null },

      // 7 - After Hours (1985)
      { id: 33, filmId: 6, lat: 40.74168, lng: -73.98695, name: "Metropolitan Life North Building", videoId: null },
      { id: 34, filmId: 6, lat: 40.71953, lng: -74.00064, name: "Crosby St &amp; Howard St", videoId: null },
      { id: 35, filmId: 6, lat: 40.75768, lng: -74.00059, name: "11th Ave &amp; W 37th St", videoId: null },
      { id: 36, filmId: 6, lat: 40.72589, lng: -74.00838, name: "Terminal Bar, Spring St &amp; Renwick St", videoId: null },
      { id: 37, filmId: 6, lat: 40.72806, lng: -74.00720, name: "Hudson St", videoId: null },
      { id: 38, filmId: 6, lat: 40.72230, lng: -73.99714, name: "Spring St", videoId: null },
      { id: 39, filmId: 6, lat: 40.72376, lng: -74.00069, name: "Appartement de Tom, 128 Spring St", videoId: null },
      { id: 40, filmId: 6, lat: 40.72090, lng: -74.00068, name: "Club Berlin, Broadway &amp; Grand St", videoId: null },

      // 8 - Les Affranchis (1990)
      { id: 41, filmId: 7, lat: 40.76768, lng: -73.89987, name: "Airline Diner, 69-35 Astoria Blvd N, East Elmhurst", videoId: null },
      { id: 42, filmId: 7, lat: 40.77276, lng: -73.91525, name: "23-86 31st St, Long Island City", videoId: null },
      { id: 43, filmId: 7, lat: 40.70055, lng: -73.83287, name: "117-11 Hillside Ave, Jamaica", videoId: null },
      { id: 44, filmId: 7, lat: 40.95372, lng: -73.77996, name: "19 Alfred Ln, New Rochelle", videoId: null },
      { id: 45, filmId: 7, lat: 40.72951, lng: -73.88939, name: "73-20 Grand Ave, Maspeth", videoId: null },
      { id: 46, filmId: 7, lat: 40.72126, lng: -73.84248, name: "109-20 71st Rd, Forest Hills", videoId: null },
      { id: 47, filmId: 7, lat: 40.68979, lng: -73.86367, name: "87-48 78th St, Jamaica", videoId: null },
      { id: 48, filmId: 7, lat: 40.72282, lng: -73.91350, name: "Goodfellas Diner, 5626 Maspeth Ave, Maspeth", videoId: null },
      { id: 49, filmId: 7, lat: 40.70079, lng: -73.83235, name: "117-99 Babbage St, Richmond Hill", videoId: null },
      { id: 50, filmId: 7, lat: 40.67473, lng: -73.99777, name: "Brooklyn", videoId: null },
      { id: 90, filmId: 7, lat: 40.77159, lng: -73.91503, name: "", videoId: null },
      { id: 91, filmId: 7, lat: 40.77182, lng: -73.9148, name: "", videoId: null },
      { id: 92, filmId: 7, lat: 40.77276, lng: -73.91525, name: "", videoId: null },
      { id: 93, filmId: 7, lat: 40.76435, lng: -73.97189, name: "10 E 60th St - Copacabana", videoId: null },
      { id: 94, filmId: 7, lat: 40.63063, lng: -74.03916, name: "5 80th St", videoId: null },
      { id: 95, filmId: 7, lat: 40.74024, lng: -74.00791, name: "", videoId: null },

      // 9 - Le Temps de l'innocence (1993)
      { id: 51, filmId: 8, lat: 40.73769, lng: -73.9867, name: "15 Gramercy Park S, New York", videoId: null },
      { id: 52, filmId: 8, lat: 40.86352, lng: -73.88209, name: "Enid A. Haupt Conservatory", videoId: null },
      { id: 53, filmId: 8, lat: 40.71435, lng: -74.00047, name: "Five Points", videoId: null },
      { id: 54, filmId: 8, lat: 40.70608, lng: -73.99686, name: "Brooklyn Bridge", videoId: null },
      { id: 55, filmId: 8, lat: 40.74844, lng: -73.98565, name: "Empire State Building", videoId: null },
      { id: 56, filmId: 8, lat: 40.71902, lng: -73.99649, name: "Mott Street", videoId: null },

      // 10 - À tombeau ouvert (1999)
      { id: 57, filmId: 9, lat: 40.75854, lng: -73.98883, name: "Smith's Bar, 8th Ave & W 44th St", videoId: null },
      { id: 58, filmId: 9, lat: 40.76839, lng: -73.99281, name: "11th Ave & W 54th St", videoId: null },
      { id: 59, filmId: 9, lat: 40.75656, lng: -73.99027, name: "8th Ave & W 41st St", videoId: null },
      { id: 60, filmId: 9, lat: 40.73357, lng: -74.00274, name: "Greenwich Village", videoId: null },
      { id: 61, filmId: 9, lat: 40.76375, lng: -73.99181, name: "Hell's Kitchen", videoId: null },
      { id: 62, filmId: 9, lat: 40.75493, lng: -73.98401, name: "Midtown", videoId: null },
      { id: 63, filmId: 9, lat: 40.71955, lng: -73.98674, name: "Norfolk Street", videoId: null },
      { id: 64, filmId: 9, lat: 40.73855, lng: -73.97540, name: "Bellevue Hospital Center", videoId: null },

      // 11 - Gangs of New York (2002)

      // 12 - Les Infiltrés (2006)
      { id: 65, filmId: 10, lat: 40.73801, lng: -73.99531, name: "Church of St. Francis Xavier", videoId: null },
      { id: 66, filmId: 10, lat: 40.80522, lng: -73.79151, name: "Maritime Industry Museum at Fort Schuyler", videoId: null },
      { id: 67, filmId: 10, lat: 40.65004, lng: -73.99181, name: "Green-Wood Cemetery", videoId: null },
      { id: 68, filmId: 10, lat: 40.64190, lng: -74.01692, name: "Irish Haven Bar", videoId: null },
      { id: 69, filmId: 10, lat: 40.76035, lng: -73.98896, name: "Barbetta", videoId: null },
      { id: 70, filmId: 10, lat: 40.59434, lng: -73.92995, name: "Tamaqua Bar & Marina", videoId: null },
      { id: 71, filmId: 10, lat: 40.68422, lng: -74.00183, name: "Ferdinando's Focacceria", videoId: null },
      { id: 72, filmId: 10, lat: 40.59993, lng: -73.91439, name: "Marine Park Golf Course", videoId: null },

      // 13 - Le Loup de Wall Street (2013)
      { id: 73, filmId: 11, lat: 40.76021, lng: -73.97677, name: "666 5th Ave", videoId: 140303118 },
      { id: 74, filmId: 11, lat: 40.85186, lng: -73.56462, name: "39 Chestnut Hill Drive", videoId: 140303160 },
      { id: 75, filmId: 11, lat: 40.70687, lng: -74.01126, name: "New York Stock Exchange", videoId: 140303182 },
      { id: 76, filmId: 11, lat: 40.75901, lng: -73.98447, name: "Equitable Building, 120 Broadway", videoId: 140303199 },
      { id: 77, filmId: 11, lat: 40.72703, lng: -73.86385, name: "Shalimar Diner, 6368 Austin Street at 63rd Drive", videoId: 140303231 },
      { id: 78, filmId: 11, lat: 41.01093, lng: -73.84652, name: "Frank's Best Auto Body", videoId: 140303241 },
      { id: 79, filmId: 11, lat: 40.97721, lng: -73.74199, name: "500 Mamaroneck Ave", videoId: 140303251 },
      { id: 80, filmId: 11, lat: 40.85176, lng: -73.71874, name: "Hoffstot Lane", videoId: 140303261 },
      { id: 81, filmId: 11, lat: 40.76250, lng: -73.97385, name: "Trump Tower, 725 Fifth Avenue", videoId: 140303280 },
      { id: 82, filmId: 11, lat: 40.75771, lng: -73.96609, name: "Penthouse on the 32nd floor of the Milan Condominium, 300 East 55th Street", videoId: 140303322 },
      { id: 83, filmId: 11, lat: 40.75831, lng: -73.97186, name: "Pool Room of the Four Seasons Restaurant, 99 East 52nd Street ", videoId: 140303352 },
      { id: 84, filmId: 11, lat: 40.90899, lng: -73.54416, name: "333 Bayville Ave, Bayville, north of Oyster Bay, Long Island", videoId: 140303372 },
      { id: 85, filmId: 11, lat: 40.79388, lng: -73.93440, name: "Rao's Restaurant, 455 East 114th Street at Pleasant Avenue, East Harlem", videoId: 140303397 },
      { id: 86, filmId: 11, lat: 40.71215, lng: -74.01700, name: "North Cove Marina, 385 South End Avenue", videoId: 140303409 },
      { id: 87, filmId: 11, lat: 40.96904, lng: -73.95493, name: "Closter Plaza, 71 Vervalen Street, Closter", videoId: 140303426 },
      { id: 88, filmId: 11, lat: 40.98562, lng: -73.70661, name: "Willow Ridge Country Club, 123 North Street, Harrison", videoId: 140303449 },
      { id: 89, filmId: 11, lat: 40.75482, lng: -74.00706, name: "West 30th Street Heliport, West 30th Street at 12th Avenue / Hudson River Greenway, Chelsea", videoId: 140303465 }

    ],
    groups: [ // Each group is shown on a different map
      { id: 1, color: "#993", places: [93, 94, 95] }, // Who's That Knocking at My Door
      { id: 2, color: "#4821d9", places: [1, 2, 3, 4, 5, 6, 7] }, // Mean Streets
      { id: 3, color: "#f2ce18", places: [8, 9, 12, 15, 17, 20, 21, 22] }, // Taxi Driver
      { id: 4, color: "#fff", places: [] }, // New York, New York
      { id: 5, color: "#666669", places: [23, 24, 25, 26, 27, 28, 29] }, // Raging Bull
      { id: 6, color: "#693", places: [30, 31, 32] }, // The King of Comedy
      { id: 7, color: "#93f", places: [33, 34, 35, 36, 37, 38, 39, 40] }, // After Hours
      { id: 8, color: "#f93", places: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 90, 91, 92, 93, 94, 95] }, // Les Affranchis
      { id: 9, color: "#936", places: [51, 52, 53, 54, 55, 56] }, // Le Temps de l'innocence
      { id: 10, color: "#36f", places: [57, 58, 59, 60, 61, 62, 63, 64] }, // À tombeau ouvert
      { id: 12, color: "#f36", places: [65, 66, 67, 68, 69, 70, 71, 72] }, // Les Infiltrés
      { id: 13, color: "#f69", places: [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89] } // Le Loup de Wall Street
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
                  return _.find(self.places, { id: id }); 
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
    groups: self.expand().groups
  };

})();