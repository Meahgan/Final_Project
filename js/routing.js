"use strict";
{
  angular
    .module("app")
    .config(($routeProvider) => {
      $routeProvider
        .when("/home", {
          template: "<home></home>"
        })
        .otherwise({ redirectTo: "/home" });
       
        
        
    });
}