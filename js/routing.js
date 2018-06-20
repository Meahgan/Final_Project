"use strict";
{
  angular
    .module("app")
    .config(($routeProvider) => {
      $routeProvider
        .when("/home", {
          template: "<home></home>"
        })
        .when("/categorySearch", {
          template: "<category-search></category-search>"
        })
        .when("/results", {
          template: "<results></results>"
        })
        .when("/yourList", {
          template: "<your-list></your-list>"
        })
        .when("/survey", {
          template: "<survey></survey>"
        })
        .otherwise({ redirectTo: "/home" });



    });
}
