var Data = (function () {
  var self = {
    films: [
      { id: 1, title: "Who's That Knocking at My Door" },
      { id: 2, title: "Mean Streets" },
      { id: 3, title: "Taxi Driver" },
      { id: 5, title: "Raging Bull" },
      { id: 6, title: "La Valse des pantins" },
      { id: 7, title: "After Hours" },
      { id: 8, title: "Les Affranchis" },
      { id: 9, title: "Le Temps de l'innocence" },
      { id: 10, title: "À tombeau ouvert" },
      { id: 11, title: "Gangs of New York" },
      { id: 13, title: "Le Loup de Wall Street" },
      { id: 14, title: "Apprentissages (New York Stories)" }
    ],



    places: [
      // 1 - Who's That Knocking at My Door (1967)
      { id: 104, filmId: 1, lat: 40.64403, lng: -74.07219, name: "JR séduit «&nbsp;the Girl&nbsp;» sur les quais de Staten Island", videoId: 142512156 },
      { id: 106, filmId: 1, lat: 40.71974, lng: -73.99622, name: "Rixe entre bandes rivales dans les rues de Little Italy", videoId: 142512229 },
      { id: 115, filmId: 1, lat: 40.72326, lng: -73.99426, name: "Scènes de la vie quotidienne dans Elizabeth Street, qui a vu grandir Martin Scorsese", videoId: 142512291 },

      // 2 - Mean Streets (1973)
      { id: 1, filmId: 2, lat: 40.72358, lng: -73.99518, name: "Charlie prie dans la cathédrale Saint-Patrick", videoId: 141537578 },
      { id: 2, filmId: 2, lat: 40.72176, lng: -73.99707, name: "Le Volpe Bar, lieu de rendez-vous de Charlie et de sa bande", videoId: 141537816 },
      { id: 3, filmId: 2, lat: 40.71816, lng: -73.99794, name: "Les Fêtes de San Gennaro dans Mulberry Street", videoId: 141537586 },
      { id: 4, filmId: 2, lat: 40.71810, lng: -74.01280, name: "Petits trafics sur les bords de l'Hudson", videoId: 141537581 },
      { id: 5, filmId: 2, lat: 40.71930, lng: -73.99732, name: "Charlie dans les rues de Little Italy", videoId: 141537580 },
      { id: 6, filmId: 2, lat: 40.72075, lng: -73.99710, name: "Menus larcins dans les rues de Little Italy", videoId: 141537582 },
      { id: 7, filmId: 2, lat: 40.73120, lng: -74.00167, name: "Charlie s'aventure dans Greenwich Village", videoId: 141537579 },

      // // 3 - Taxi Driver (1976)
      { id: 8, filmId: 3, lat: 40.76987, lng: -73.99031, name: "Travis sort du dépot de taxis situé sur la 57e rue, en plein Hell's Kitchen", videoId: 141555221 },
      { id: 9, filmId: 3, lat: 40.76041, lng: -73.98745, name: "Travis va dans un cinéma porno du quartier de Times Square", videoId: 141556259 },
      { id: 12, filmId: 3, lat: 40.75890, lng: -73.98513, name: "Errances de Travis à bord de son taxi dans le quartier de Times Square", videoId: 141555224 },
      // { id: 15, filmId: 3, lat: 40.74335, lng: -73.98413, name: "Park Ave S &amp; E 28th St", videoId: 141555216 },
      { id: 17, filmId: 3, lat: 40.73202, lng: -73.98668, name: "Près d'Union Square, Travis rencontre le souteneur Sport et sa prostituée, Iris", videoId: 141555225 },
      { id: 20, filmId: 3, lat: 40.76741, lng: -73.98239, name: "Betsy et Travis se retrouvent dans un café de Colombus Circle", videoId: 141804226 },

      // 4 - New York, New York (1977)

      // 5 - Raging Bull (1980)
      { id: 24, filmId: 5, lat: 40.73399, lng: -73.98891, name: "Jake LaMotta s'entraîne avec son frère Joey au Gramercy Gym près d'Union Square", videoId: 142231219 },
      { id: 25, filmId: 5, lat: 40.72958, lng: -74.00547, name: "Première rencontre de Jake et Vickie dans une piscine à ciel ouvert de Greenwich Village", videoId: 142231257 },
      { id: 26, filmId: 5, lat: 40.73176, lng: -73.98913, name: "Jake LaMotta et son frère s'encanaillent au Webster Hall", videoId: 142231279 },
      { id: 27, filmId: 5, lat: 40.76435, lng: -73.97189, name: "Joey fait le coup de poing au Copacabana, mythique club de Manhattan", videoId: 142231304 },
      { id: 28, filmId: 5, lat: 40.76834, lng: -73.98820, name: "Jake LaMotta quitte son premier appartement, sis dans Hell's Kitchen", videoId: 142231323 },
      { id: 29, filmId: 5, lat: 40.76138, lng: -73.98527, name: "Intérieurs du second appartement de Jake La Motta, dans Pelham Parkway", videoId: 142231342 },
      { id: 103, filmId: 5, lat: 40.72307, lng: -73.99385, name: "Home movie du mariage, sur les toits d'un immeuble d'Elizabeth Street", videoId: 142257454 },

      // 6 - La Valse des pantins (1983)
      { id: 30, filmId: 6, lat: 40.75895, lng: -73.98493, name: "Au milieu de Times Square, Rupert monopolise une cabine téléphonique", videoId: 142231363 },
      { id: 31, filmId: 6, lat: 40.76207, lng: -73.9846, name: "Dans le quartier animé du Theatre District se situe le building où Jerry travaille, le Paramount Plaza", videoId: 142231373 },
      { id: 32, filmId: 6, lat: 40.75614, lng: -73.96571, name: "Rupert raccompagne Jerry chez lui, dans Midtown East, sur la 53e rue", videoId: 142231386 },

      // 7 - After Hours (1985)
      { id: 33, filmId: 7, lat: 40.74168, lng: -73.98695, name: "Paul quitte le Metropolitan Life North Building, où se trouve son bureau", videoId: 142231397 },
      { id: 36, filmId: 7, lat: 40.72589, lng: -74.00838, name: "Paul se réfugie au Terminal Bar sur Spring Street", videoId: 142231427 },
      { id: 37, filmId: 7, lat: 40.72806, lng: -74.00720, name: "Remontant Hudson St, la 8ème avenue jusqu'à Madison Avenue, Paul quitte enfin SoHo", videoId: 142231454 },
      { id: 38, filmId: 7, lat: 40.72230, lng: -73.99714, name: "Dans la station de métro Spring Street, au cœur de SoHo", videoId: 142231471 },
      { id: 40, filmId: 7, lat: 40.72090, lng: -74.00068, name: "Entre Broadway et Grand Street, le Club Berlin, lieu undreground de SoHo", videoId: 142231483 },

      // 14 - New York Stories - Apprentissages (1989)
      { id: 112, filmId: 14, lat: 40.75203, lng: -74.00502, name: "Performance théâtrale de Gregory Stark au Tunnel, célèbre club de SoHo", videoId: 142625571 },
      { id: 113, filmId: 14, lat: 40.71697, lng: -74.00784, name: "The Odeon, lieu de rendez-vous des artistes bohèmes de SoHo", videoId: 142625689 },
      { id: 114, filmId: 14, lat: 40.72554, lng: -73.98947, name: "Scène dans l'atelier de Lionel (censément située à SoHo mais tournée dans l'East Village)", videoId: 142625733 },

      // 8 - Les Affranchis (1990)
      { id: 42, filmId: 8, lat: 40.77276, lng: -73.91525, name: "Scène d'intimidation devant le bureau de poste du quartier", videoId: 142231530 },
      { id: 43, filmId: 8, lat: 40.70055, lng: -73.83287, name: "Un rendez-vous amoureux avorté dans un restaurant de Jamaica, un quartier du Queens", videoId: 142231575 },
      { id: 45, filmId: 8, lat: 40.72951, lng: -73.88939, name: "Tommy DeVito rejoint ses amis au Suite Lounge, entre Brooklyn et le Queens", videoId: 142231616 },
      { id: 46, filmId: 8, lat: 40.72126, lng: -73.84248, name: "Henry Hill et sa maîtresse Janice passent la nuit dans l'appartement de cette dernière, dans le Queens", videoId: 142231632 },
      { id: 49, filmId: 8, lat: 40.70079, lng: -73.83235, name: "Découverte de deux cadavres dans une Cadillac rose à Kew Gardens dans le Queens", videoId: 142231676 },
      { id: 50, filmId: 8, lat: 40.67473, lng: -73.99777, name: "Jimmie Conway et Karen Hill se retrouvent à Red Hook", videoId: 142231686 },
      { id: 90, filmId: 8, lat: 40.77159, lng: -73.91503, name: "Henry Hill grandit dans un quartier mafieux à l'extrême nord de Brooklyn", videoId: 142231912 },
      { id: 91, filmId: 8, lat: 40.77182, lng: -73.9148, name: "Les premiers petits boulots de Henry Hill à deux rues de chez lui", videoId: 142231927 },
      { id: 92, filmId: 8, lat: 40.77276, lng: -73.91525, name: "Dans le quartier qui l'a vu grandir, Henry Hill aide un mafieux blessé", videoId: 142231937 },
      { id: 93, filmId: 8, lat: 40.76435, lng: -73.97189, name: "Henry Hill invite sa fiancée au prestigieux Copacabana, dans Manhattan", videoId: 142231946 },
      { id: 94, filmId: 8, lat: 40.63063, lng: -74.03916, name: "Le piège tendu à Tommy dans South Brooklyn", videoId: 142231968 },
      { id: 95, filmId: 8, lat: 40.74024, lng: -74.00791, name: "Le corps de Frankie Carbone est retrouvé dans Meatpacking District", videoId: 142231982 },

      // 9 - Le Temps de l'innocence (1993)
      { id: 51, filmId: 9, lat: 40.73769, lng: -73.9867, name: "Newland retrouve May à Gramercy Park", videoId: 142364730 },
      { id: 52, filmId: 9, lat: 40.86352, lng: -73.88209, name: "Newland et May se promènent dans le jardin botanique, situé dans le Bronx", videoId: 142364864 },
      { id: 53, filmId: 9, lat: 40.73428, lng: -73.98828, name: "L'Académie de musique de Broadway (la séquence a été tournée à Philadelphie)", videoId: 142364896 },
      { id: 107, filmId: 9, lat: 40.76301, lng: -73.97290, name: "L'aristocratie locale est reçue dans la maison de Mrs. Mingott, «&nbsp;dans un désert inacessible près de Central Park&nbsp;»", videoId: 142364924 },

      // 10 - À tombeau ouvert (1999)
      { id: 61, filmId: 10, lat: 40.76375, lng: -73.99181, name: "L'ambulance de Frank sillonne les rue de Hell's Kitchen, où règnent prostitution, violence, drogue et mort", videoId: 142364269 },
      { id: 64, filmId: 10, lat: 40.73855, lng: -73.97540, name: "L'hôpital (fictif) Our Lady of Perpetual Mercy. La scène a été tournée au Bellevue Hospital Center, dans l'East Side", videoId: 142262401 },
      { id: 108, filmId: 10, lat: 40.76607, lng: -73.99751, name: "Frank et Larry font une pause entre deux missions sur un quai au bord de l'Hudson", videoId: 142258382 },
      { id: 109, filmId: 10, lat: 40.76402, lng: -73.99215, name: "Frank rentre chez lui. Le jour se lève sur la 49e rue", videoId: 142260878 },

      // 11 - Gangs of New York (2002)
      { id: 100, filmId: 11, lat: 40.715024, lng: -74.001820, name: "Amsterdam Vallon découvre le quartier de Five Points des années après l'avoir quitté", videoId: 142272316 },
      { id: 101, filmId: 11, lat: 40.70423, lng: -73.99276, name: "150 ans d'histoire new-yorkaise résumés en un plan final", videoId: 142272381 },
      { id: 110, filmId: 11, lat: 40.7154, lng: -74.00002, name: "La guerre des gangs à New York en 1846", videoId: 142272489 },

      // 13 - Le Loup de Wall Street (2013)
      { id: 73, filmId: 13, lat: 40.76021, lng: -73.97677, name: "Mark Hann apprend les ficelles du métier à Jordan Belfort dans le restaurant de la banque Rotschild", videoId: 140303118 },
      { id: 74, filmId: 13, lat: 40.85186, lng: -73.56462, name: "Jordan Belfort acquiert un manoir dans les quartiers huppés de Long Island", videoId: 140303160 },
      { id: 75, filmId: 13, lat: 40.70687, lng: -74.01126, name: "Jordan Belfort débarque à Wall Street", videoId: 140303182 },
      { id: 77, filmId: 13, lat: 40.72703, lng: -73.86385, name: "Jordan Belfort rencontre Donnie Azoff dans le Queens", videoId: 140303231 },  
      { id: 78, filmId: 13, lat: 41.01093, lng: -73.84652, name: "Jordan Belfort et Donnie Azoff cherchent un local pour leur entreprise dans la banlieue nord de New York", videoId: 140303241 },
      { id: 80, filmId: 13, lat: 40.85176, lng: -73.71874, name: "Jordan Belfort célèbre son succès dans une villa cossue sur la côte nord de Long Island", videoId: 140303261 },
      { id: 81, filmId: 13, lat: 40.76250, lng: -73.97385, name: "La double vie de Jordan Belfort, révélée au pied de la Trump Tower, 725 Fifth Avenue", videoId: 140303280 },
      { id: 82, filmId: 13, lat: 40.75771, lng: -73.96609, name: "Jordan s'installe dans un luxueux appartement au cœur de Manhattan", videoId: 140303322 },
      { id: 83, filmId: 13, lat: 40.75831, lng: -73.97186, name: "Jordan demande Naomi en mariage dans la «&nbsp;Pool Room&nbsp;» du restaurant Four Seasons", videoId: 140303352 },
      { id: 84, filmId: 13, lat: 40.90899, lng: -73.54416, name: "Mariage de Naomi et Jordan Belfort à Oyster Bay", videoId: 140303372 },
      { id: 86, filmId: 13, lat: 40.71215, lng: -74.01700, name: "Le FBI rend visite à Jordan Belfort sur son yacht, arrimé dans la North Cove Marina", videoId: 140303409 },
      { id: 88, filmId: 13, lat: 40.98562, lng: -73.70661, name: "Jordan se rend dans un country club, censément à quelques kilomètres de sa maison de Long Island (mais la scène est tournée près de Port Chester, au Nord de New York)", videoId: 140303449 },
      { id: 89, filmId: 13, lat: 40.75482, lng: -74.00706, name: "Jordan Belfort est appréhendé par le FBI sur le tarmac de l'héliport de Chelsea", videoId: 140303465 }
    ],
    groups: [ // Each group is shown on a different map
      { id: 1, color: "#999933", places: [104, 106, 115] }, // Who's That Knocking at My Door
      { id: 2, color: "#4821d9", places: [1, 2, 3, 4, 5, 6, 7] }, // Mean Streets
      { id: 3, color: "#f2ce18", places: [8, 9, 12, 17, 20] }, // Taxi Driver
      { id: 5, color: "#e51300", places: [24, 25, 26, 27, 28, 29, 103] }, // Raging Bull
      { id: 6, color: "#74b336", places: [30, 31, 32] }, // The King of Comedy
      { id: 7, color: "#9933ff", places: [33, 36, 37, 38, 40] }, // After Hours
      { id: 14, color: "#ffffff", places: [112, 113, 114] }, // Apprentissages
      { id: 8, color: "#b35995", places: [42, 43, 45, 46, 49, 50, 90, 91, 92, 93, 94, 95] }, // Les Affranchis
      { id: 9, color: "#bf8f4c", places: [51, 52, 53, 107] }, // Le Temps de l'innocence
      { id: 10, color: "#3366ff", places: [61, 64, 108, 109] }, // À tombeau ouvert
      { id: 11, color: "#ff3366", places: [100, 101, 110] }, // Gangs of New York
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