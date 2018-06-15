"use strict";
{
  angular
    .module("app")
    .config(($routeProvider) => {
      $routeProvider
        .when("/home", {
          template: "<home></home>"
        })
        .when("/categories", {
          template: "<categories></categories>"
        })
        .when("/podcastLength", {
          template: "<podcastLength></postcastLength>"
        })
        .otherwise({ redirectTo: "/home" });
    });
}