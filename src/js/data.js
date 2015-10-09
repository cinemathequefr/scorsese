var Data = (function () {
  var self = {
    films: [
      { id: 1, title: "Who's That Knocking at My Door" },
      { id: 2, title: "Mean Streets" },
      { id: 3, title: "Taxi Driver" },
      { id: 4, title: "Raging Bull" },
      { id: 5, title: "La Valse des pantins" },
      { id: 6, title: "After Hours" },
      { id: 7, title: "Les Affranchis" },
      { id: 8, title: "Le Temps de l'innocence" },
      { id: 9, title: "À tombeau ouvert" },
      { id: 10, title: "Les Infiltrés" },
      { id: 11, title: "Le Loup de Wall Street" }
    ],
    places: [
      // Who's That Knocking at My Door
      { id: 93, filmId: 1, lat: 40.64403, lng: -74.07219, name: "Staten Island Ferries" },
      { id: 94, filmId: 1, lat: 42.10345, lng: -73.54992, name: "Copake" },
      { id: 95, filmId: 1, lat: 40.71974, lng: -73.99622, name: "Mott Street" },
      // Mean Streets
      { id: 1, filmId: 2, lat: 40.72358, lng: -73.99518, name: "Vieille cathédrale Saint-Patrick", videoId: 141537578 },
      { id: 2, filmId: 2, lat: 40.72176, lng: -73.99707, name: "Volpe Bar" },
      { id: 3, filmId: 2, lat: 40.71816, lng: -73.99794, name: "Mulberry St and Hester St" },
      { id: 4, filmId: 2, lat: 40.71810, lng: -74.01280, name: "The Bridge" },
      { id: 5, filmId: 2, lat: 40.71930, lng: -73.99732, name: "Mulberry St" },
      { id: 6, filmId: 2, lat: 40.72075, lng: -73.99710, name: "394 Broome St" },
      { id: 7, filmId: 2, lat: 40.73120, lng: -74.00167, name: "323 6th Ave - Waverly Theater" },

      // Taxi Driver
      { id: 8, filmId: 3, lat: 40.76987, lng: -73.99031, name: "W57th Street" },
      { id: 9, filmId: 3, lat: 40.76041, lng: -73.98745, name: "8th Ave &amp; W47th St." },
      { id: 12, filmId: 3, lat: 40.76741, lng: -73.98239, name: "8th Ave &amp; W 58th St" },
      { id: 15, filmId: 3, lat: 40.76381, lng: -73.98294, name: "Ed Sullivan Theater" },
      { id: 17, filmId: 3, lat: 40.73225, lng: -73.98736, name: "204 E 13th St" },
      { id: 20, filmId: 3, lat: 40.76141, lng: -73.97469, name: "The St. Regis, 2 E 55th St" },
      { id: 21, filmId: 3, lat: 40.75847, lng: -73.98469, name: "" },
      { id: 22, filmId: 3, lat: 40.75657, lng: -73.99028, name: "" },

      // Raging Bull
      { id: 23, filmId: 4, lat: 40.81637, lng: -73.91529, name: "Gleason's Gym, 434 Westchester Ave, Bronx" },
      { id: 24, filmId: 4, lat: 40.73399, lng: -73.98891, name: "Gramercy Gym, 116 E 14th St" },
      { id: 25, filmId: 4, lat: 40.72958, lng: -74.00547, name: "Tony Dapolito Recreation Center, 1 Clarkson St" },
      { id: 26, filmId: 4, lat: 40.73176, lng: -73.98913, name: "Webster Hall, 125 E 11th St" },
      { id: 27, filmId: 4, lat: 40.76435, lng: -73.97189, name: "Copacabana, 10 E 60th St" },
      { id: 28, filmId: 4, lat: 40.76834, lng: -73.98820, name: "447 W 56th St" },
      { id: 29, filmId: 4, lat: 40.76138, lng: -73.98527, name: "225 W 49th St" },

      // La Valse des pantins
      { id: 30, filmId: 5, lat: 40.75895, lng: -73.98493, name: "Times Square" },
      { id: 31, filmId: 5, lat: 40.76207, lng: -73.9846, name: "Paramount Plaza" },
      { id: 32, filmId: 5, lat: 40.75614, lng: -73.96571, name: "335 E 53rd St" },

      // After Hours
      { id: 33, filmId: 6, lat: 40.74168, lng: -73.98695, name: "Metropolitan Life North Building" },
      { id: 34, filmId: 6, lat: 40.71953, lng: -74.00064, name: "Crosby St &amp; Howard St" },
      { id: 35, filmId: 6, lat: 40.75768, lng: -74.00059, name: "11th Ave &amp; W 37th St" },
      { id: 36, filmId: 6, lat: 40.72589, lng: -74.00838, name: "Terminal Bar, Spring St &amp; Renwick St" },
      { id: 37, filmId: 6, lat: 40.72806, lng: -74.00720, name: "Hudson St" },
      { id: 38, filmId: 6, lat: 40.72230, lng: -73.99714, name: "Spring St" },
      { id: 39, filmId: 6, lat: 40.72376, lng: -74.00069, name: "Appartement de Tom, 128 Spring St" },
      { id: 40, filmId: 6, lat: 40.72090, lng: -74.00068, name: "Club Berlin, Broadway &amp; Grand St" },

      // Goodfellas
      { id: 41, filmId: 7, lat: 40.76768, lng: -73.89987, name: "Airline Diner, 69-35 Astoria Blvd N, East Elmhurst" },
      { id: 42, filmId: 7, lat: 40.77276, lng: -73.91525, name: "23-86 31st St, Long Island City" },
      { id: 43, filmId: 7, lat: 40.70055, lng: -73.83287, name: "117-11 Hillside Ave, Jamaica" },
      { id: 44, filmId: 7, lat: 40.95372, lng: -73.77996, name: "19 Alfred Ln, New Rochelle" },
      { id: 45, filmId: 7, lat: 40.72951, lng: -73.88939, name: "73-20 Grand Ave, Maspeth" },
      { id: 46, filmId: 7, lat: 40.72126, lng: -73.84248, name: "109-20 71st Rd, Forest Hills" },
      { id: 47, filmId: 7, lat: 40.68979, lng: -73.86367, name: "87-48 78th St, Jamaica" },
      { id: 48, filmId: 7, lat: 40.72282, lng: -73.91350, name: "Goodfellas Diner, 5626 Maspeth Ave, Maspeth" },
      { id: 49, filmId: 7, lat: 40.70079, lng: -73.83235, name: "117-99 Babbage St, Richmond Hill" },
      { id: 50, filmId: 7, lat: 40.67473, lng: -73.99777, name: "Brooklyn" },
      { id: 90, filmId: 7, lat: 40.77159, lng: -73.91503, name: "" },
      { id: 91, filmId: 7, lat: 40.77182, lng: -73.9148, name: "" },
      { id: 92, filmId: 7, lat: 40.77276, lng: -73.91525, name: "" },
      { id: 93, filmId: 7, lat: 40.76435, lng: -73.97189, name: "10 E 60th St - Copacabana" },
      { id: 94, filmId: 7, lat: 40.63063, lng: -74.03916, name: "5 80th St" },
      { id: 95, filmId: 7, lat: 40.74024, lng: -74.00791, name: "" },



      // The Age of Innocence
      { id: 51, filmId: 8, lat: 40.73769, lng: -73.9867, name: "15 Gramercy Park S, New York" },
      { id: 52, filmId: 8, lat: 40.86352, lng: -73.88209, name: "Enid A. Haupt Conservatory" },
      { id: 53, filmId: 8, lat: 40.71435, lng: -74.00047, name: "Five Points" },
      { id: 54, filmId: 8, lat: 40.70608, lng: -73.99686, name: "Brooklyn Bridge" },
      { id: 55, filmId: 8, lat: 40.74844, lng: -73.98565, name: "Empire State Building" },
      { id: 56, filmId: 8, lat: 40.71902, lng: -73.99649, name: "Mott Street" },
      // À tombeau ouvert
      { id: 57, filmId: 9, lat: 40.75854, lng: -73.98883, name: "Smith's Bar, 8th Ave & W 44th St" },
      { id: 58, filmId: 9, lat: 40.76839, lng: -73.99281, name: "11th Ave & W 54th St" },
      { id: 59, filmId: 9, lat: 40.75656, lng: -73.99027, name: "8th Ave & W 41st St" },
      { id: 60, filmId: 9, lat: 40.73357, lng: -74.00274, name: "Greenwich Village" },
      { id: 61, filmId: 9, lat: 40.76375, lng: -73.99181, name: "Hell's Kitchen" },
      { id: 62, filmId: 9, lat: 40.75493, lng: -73.98401, name: "Midtown" },
      { id: 63, filmId: 9, lat: 40.71955, lng: -73.98674, name: "Norfolk Street" },
      { id: 64, filmId: 9, lat: 40.73855, lng: -73.97540, name: "Bellevue Hospital Center" },
      // Les Infiltrés
      { id: 65, filmId: 10, lat: 40.73801, lng: -73.99531, name: "Church of St. Francis Xavier" },
      { id: 66, filmId: 10, lat: 40.80522, lng: -73.79151, name: "Maritime Industry Museum at Fort Schuyler" },
      { id: 67, filmId: 10, lat: 40.65004, lng: -73.99181, name: "Green-Wood Cemetery" },
      { id: 68, filmId: 10, lat: 40.64190, lng: -74.01692, name: "Irish Haven Bar" },
      { id: 69, filmId: 10, lat: 40.76035, lng: -73.98896, name: "Barbetta" },
      { id: 70, filmId: 10, lat: 40.59434, lng: -73.92995, name: "Tamaqua Bar & Marina" },
      { id: 71, filmId: 10, lat: 40.68422, lng: -74.00183, name: "Ferdinando's Focacceria" },
      { id: 72, filmId: 10, lat: 40.59993, lng: -73.91439, name: "Marine Park Golf Course" },
      // Le Loup de Wall Street
      { id: 73, filmId: 11, lat: 40.76021, lng: -73.97677, name: "666 5th Ave" },
      { id: 74, filmId: 11, lat: 40.85186, lng: -73.56462, name: "39 Chestnut Hill Drive" },
      { id: 75, filmId: 11, lat: 40.70687, lng: -74.01126, name: "New York Stock Exchange" },
      { id: 76, filmId: 11, lat: 40.75901, lng: -73.98447, name: "Equitable Building, 120 Broadway" },
      { id: 77, filmId: 11, lat: 40.72703, lng: -73.86385, name: "Shalimar Diner, 6368 Austin Street at 63rd Drive" },
      { id: 78, filmId: 11, lat: 41.01093, lng: -73.84652, name: "Frank's Best Auto Body" },
      { id: 79, filmId: 11, lat: 40.97721, lng: -73.74199, name: "500 Mamaroneck Ave" },
      { id: 80, filmId: 11, lat: 40.85176, lng: -73.71874, name: "Hoffstot Lane" },
      { id: 81, filmId: 11, lat: 40.76250, lng: -73.97385, name: "Trump Tower, 725 Fifth Avenue" },
      { id: 82, filmId: 11, lat: 40.75771, lng: -73.96609, name: "Penthouse on the 32nd floor of the Milan Condominium, 300 East 55th Street" },
      { id: 83, filmId: 11, lat: 40.75831, lng: -73.97186, name: "Pool Room of the Four Seasons Restaurant, 99 East 52nd Street " },
      { id: 84, filmId: 11, lat: 40.90899, lng: -73.54416, name: "333 Bayville Ave, Bayville, north of Oyster Bay, Long Island" },
      { id: 85, filmId: 11, lat: 40.79388, lng: -73.93440, name: "Rao's Restaurant, 455 East 114th Street at Pleasant Avenue, East Harlem" },
      { id: 86, filmId: 11, lat: 40.71215, lng: -74.01700, name: "North Cove Marina, 385 South End Avenue" },
      { id: 87, filmId: 11, lat: 40.96904, lng: -73.95493, name: "Closter Plaza, 71 Vervalen Street, Closter" },
      { id: 88, filmId: 11, lat: 40.98562, lng: -73.70661, name: "Willow Ridge Country Club, 123 North Street, Harrison" },
      { id: 89, filmId: 11, lat: 40.75482, lng: -74.00706, name: "West 30th Street Heliport, West 30th Street at 12th Avenue / Hudson River Greenway, Chelsea" }
    ],
    groups: [ // Each group is shown on a different map
      { id: 1, color: "#993", places: [93, 94, 95] },
      { id: 2, /*color: "#369",*/ color: "#4821d9", places: [1, 2, 3, 4, 5, 6, 7] },
      { id: 3, /*color: "#69f",*/ color: "#f2ce18", places: [8, 9, 12, 15, 17, 20, 21, 22] },
      { id: 4, /*color: "#f36",*/ color: "#666669", places: [23, 24, 25, 26, 27, 28, 29] },
      { id: 5, color: "#693", places: [30, 31, 32] },
      { id: 6, color: "#93f", places: [33, 34, 35, 36, 37, 38, 39, 40] },
      { id: 7, color: "#f93", places: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 90, 91, 92, 93, 94, 95] },
      { id: 8, color: "#936", places: [51, 52, 53, 54, 55, 56] },
      { id: 9, color: "#36f", places: [57, 58, 59, 60, 61, 62, 63, 64] },
      { id: 10, color: "#f36", places: [65, 66, 67, 68, 69, 70, 71, 72] },
      { id: 11, color: "#f69", places: [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89] }
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