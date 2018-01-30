"use strict";

angular.module("MushroomStuff").factory("ShroomFactory", function($q, $http) {
  let getShrooms = () => {
    return $q((resolve, reject) => {
      $http
        .get("https://mushroom-exercise-33fdd.firebaseio.com/mushrooms.json")
        .then(mushrooms => {
          let shroomArr = Object.values(mushrooms.data);
          resolve(shroomArr);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
  return { getShrooms };
});
