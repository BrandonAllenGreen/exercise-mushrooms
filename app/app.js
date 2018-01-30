"use strict";

angular.module("MushroomStuff", ["ngRoute"])
.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: "partials/shrooms.html",
    controller: "ShroomCtrl"
  });
});
