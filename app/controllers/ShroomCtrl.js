"use strict";

angular
  .module("MushroomStuff")
  .controller("ShroomCtrl", function($scope, ShroomFactory) {
    ShroomFactory.getShrooms().then(shroomData => {
      $scope.shroomList = shroomData;
      console.log("got data???", shroomData);
    });
  });
