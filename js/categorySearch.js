"use strict";
{
    let categorySearch = {
        template: `
        <button ng-click="$ctrl.categoryButtons('67,103,101,105')">Art & Design</button>
        <button ng-click="$ctrl.categoryButtons('104')">Literature</button>
        <button ng-click="$ctrl.categoryButtons('67,93,157')">Business</button>
        <button ng-click="$ctrl.categoryButtons('133')">Comedy</button>
        <button ng-click="$ctrl.categoryButtons('122')">Society & Culture</button>
        <button ng-click="$ctrl.categoryButtons('111,112,113,114,115,116,142')">Education</button>
        <button ng-click="$ctrl.categoryButtons('106')">Fashion & Beauty</button>
        <button ng-click="$ctrl.categoryButtons('88,89,90,91')">Fitness & Nutrition</button>
        <button ng-click="$ctrl.categoryButtons('102')">Food</button>
        <button ng-click="$ctrl.categoryButtons('117')">Government & Organizations</button>
        <button ng-click="$ctrl.categoryButtons('151')">Local</button>
        <button ng-click="$ctrl.categoryButtons('138,68')">Movies</button>
        <button ng-click="$ctrl.categoryButtons('134')">Music</button>
        <button ng-click="$ctrl.categoryButtons('99')">News & Politics</button>
        <button ng-click="$ctrl.categoryButtons('107,108,108,110')">Natural Sciences</button>
        <button ng-click="$ctrl.categoryButtons('77,141,158,')">Sports & Recreation</button>
        <button ng-click="$ctrl.categoryButtons('112,127,128,130,131,139,140,143,163')">Technology</button>
        <button ng-click="$ctrl.categoryButtons('123')">Places & Travel</button>
        <button ng-click="$ctrl.categoryButtons('148,150')">American History</button>
        <button ng-click="$ctrl.categoryButtons('84')">Cars</button>
        <button ng-click="$ctrl.categoryButtons('69,70,71,72,73,74,75,76')">Religion</button>
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