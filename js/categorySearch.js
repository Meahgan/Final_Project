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
        <div id="categories">

            <div class="icons" ng-click="$ctrl.categoryButtons('67,103,101,105')">
            <img src="art.svg" alt="art"><p>Art & Design</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('67,93,157')">
            <img src="biz.svg" alt="biz"><p>Business</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('84')">
            <img src="car.svg" alt="cars">
            <p>Cars</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('133')">
            <img src="comedy.svg" alt="comedy">
            <p>Comedy</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('111')">
            <img src="education.svg" alt="education">
            <p>Education</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('88,89,90,91')">
            <img src="fitness.svg" alt="fitness">
            <p>Fitness & Nutrition</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('102')">
            <img src="food.svg" alt="food">
            <p>Food</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('148, 150')">
            <img src="history.svg" alt="history">
            <p>History</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('82, 88')">
            <img src="hobbies.svg" alt="hobbies">
            <p>Hobbies</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('138,68')">
            <img src="movieCam.svg" alt="movie">
            <p>Movies</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('134')">
            <img src="music-note.svg" alt="music">
            <p>Music</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('123')">
            <img src="travel.svg" alt="travel">
            <p>Places & Travel</p>
            </div>
            
            <div class="icons" ng-click="$ctrl.categoryButtons('99,117,151')">
            <img src="politics.svg" alt="politics">
            <p>News & Politics</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('107,108,108,110')">
            <img src="science.svg" alt="science">
            <p>Science</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('69,70,71,72,73,74,75,76')">
            <img src="religion.svg" alt="religion">
            <p>Religion</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('122,104')">
            <img src="society.svg" alt="society">
            <p>Society & Culture</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('77,141,158,')">
            <img src="sports.svg" alt="sports">
            <p>Sports & Recreation</p>
            </div>

            <div class="icons" ng-click="$ctrl.categoryButtons('112,127,128,130,131,139,140,143,163')">
            <img src="tech.svg" alt="tech">
            <p>Technology</p>
            </div>

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
