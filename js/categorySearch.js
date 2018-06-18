"use strict";
{
    let categorySearch = {
        template: `
        <button ng-model="art" ng-click="$ctrl.categoryButtons('art')">Arts</button>
        <button ng-model="book" ng-click="$ctrl.categoryButtons('book')">Books</button>
        <button ng-model="business" ng-click="$ctrl.categoryButtons('business')">Business</button>
        `
        ,

        controller: function (podcastService, $location) {
            let vm = this;
            vm.category = "";
            vm.categoryButtons = function(category){
                vm.categoryClick = podcastService.category(category);
                vm.categoryClick.then(function(){
                    $location.path("/results");
                });

            }
        }
    };

    categorySearch.$inject = ["podcastService", "$location"];
    angular
        .module("app")
        .component("categorySearch", categorySearch);
}