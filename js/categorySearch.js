"use strict";
{
    let categorySearch = {
        template: `
        <div class="links">
          <a class="navBar" href="#!/Home">Home</a>
          <a class="navBar" href="#!/Account">Account</a>
          <a class="navBar" href="#!/yourList">My Podcasts</a>
        </div>
        <h1 class="categoryTitles">Minutes</h1>
        <div class="minuteBoxHolder">
            <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[0,15]> <span>0-15</span></span>
            <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[16,30]> <span>15-30</span></span>
            <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[31,45]> <span>30-45</span></span>
            <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[46,60]> <span>45-60</span></span>
            <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[61,300]> <span>60+</span></span>
        </div>
        <h1 class="categoryTitles">Categories</h1>
        <div>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('67,103,101,105')">Art & Design</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('67,93,157')">Business</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('84')">Cars</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('133')">Comedy</button>
            <button class="categoryBtns"ng-click="$ctrl.categoryButtons('111,112,113,114,115,116,142')">Education</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('88,89,90,91')">Fitness & Nutrition</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('102')">Food</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('148, 150')">History</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('82, 88')">Hobbies</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('138,68')">Movies</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('134')">Music</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('123')">Places & Travel</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('99,117,151')">News & Politics</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('107,108,108,110')">Natural Sciences</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('69,70,71,72,73,74,75,76')">Religion</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('122,104')">Society & Culture</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('77,141,158,')">Sports & Recreation</button>
            <button class="categoryBtns" ng-click="$ctrl.categoryButtons('112,127,128,130,131,139,140,143,163')">Technology</button>
        </div>
        `
        ,
        controller: function (podcastService, $location) {
            let vm = this;
            vm.genre = "";
            vm.length = "";
            vm.categoryButtons = function (genre) {
                let min = vm.length[0];
                let max = vm.length[1];
                vm.categoryClick = podcastService.genreSearch(genre, min, max);
                vm.categoryClick.then(function () {
                    console.log(genre, min, max);
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
