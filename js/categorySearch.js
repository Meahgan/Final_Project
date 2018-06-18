"use strict";
{
    let categorySearch = {
        template: `
        <button ng-click="$ctrl.categoryButtons('art')">Arts</button>
        <button ng-click="$ctrl.categoryButtons('book')">Books</button>
        <button ng-click="$ctrl.categoryButtons('business')">Business</button>
        <button ng-click="$ctrl.categoryButtons('cars')">Cars</button>
        <button ng-click="$ctrl.categoryButtons('comedy')">Comedy</button>
        <button ng-click="$ctrl.categoryButtons('culture')">Culture</button>
        <button ng-click="$ctrl.categoryButtons('education')">Education</button>
        <button ng-click="$ctrl.categoryButtons('fashion')">Fashion</button>
        <button ng-click="$ctrl.categoryButtons('fitness')">Fitness</button>
        <button ng-click="$ctrl.categoryButtons('food')">Food</button>
        <button ng-click="$ctrl.categoryButtons('healthcare')">Healthcare</button>
        <button ng-click="$ctrl.categoryButtons('lifestyle')">Lifestyle</button>
        <button ng-click="$ctrl.categoryButtons('movies')">Movies</button>
        <button ng-click="$ctrl.categoryButtons('music')">Music</button>
        <button ng-click="$ctrl.categoryButtons('politics')">Politics</button>
        <button ng-click="$ctrl.categoryButtons('science')">Science</button>
        <button ng-click="$ctrl.categoryButtons('sports')">Sports</button>
        <button ng-click="$ctrl.categoryButtons('technology')">Technology</button>
        <button ng-click="$ctrl.categoryButtons('travel')">Travel</button>
        <button ng-click="$ctrl.categoryButtons('us')">U.S.</button>
        <button ng-click="$ctrl.categoryButtons('world')">World</button>
        `
        ,

        //this will call the ng-cick and redirect you to the category you clicked
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
