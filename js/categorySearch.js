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

            <div id="art">
            <img src="art.svg" alt="art">
            <button class="artBtn" ng-click="$ctrl.categoryButtons('67,103,101,105')">Art & Design</button>
            </div>

            <div id="biz">
            <div id="biz"><img src="biz.svg" alt="biz"></div>
            <button class="bizBtn" ng-click="$ctrl.categoryButtons('67,93,157')">Business</button>
            </div>

            <div id="cars">
            <div id="cars"><img src="car.svg" alt="cars"></div>
            <button class="carsBtn" ng-click="$ctrl.categoryButtons('84')">Cars</button>
            </div>

            <div id="comedy">
            <div id="comedy"><img src="comedy.svg" alt="comedy"></div>
            <button class="comedyBtn" ng-click="$ctrl.categoryButtons('133')">Comedy</button>
            </div>

            <div id="education">
            <div id="education"><img src="education.svg" alt="education"></div>
            <button class="educationBtn"ng-click="$ctrl.categoryButtons('111,112,113,114,115,116,142')">Education</button>
            </div>

            <div id="fitness">
            <div id="fitness"><img src="fitness.svg" alt="fitness"></div>
            <button class="fitnessBtn" ng-click="$ctrl.categoryButtons('88,89,90,91')">Fitness & Nutrition</button>
            </div>

            <div id="food">
            <div id="food"><img src="food.svg" alt="food"></div>
            <button class="foodBtn" ng-click="$ctrl.categoryButtons('102')">Food</button>
            </div>

            <div id="history">
            <div id="history"><img src="history.svg" alt="history"></div>
            <button class="historyBtn" ng-click="$ctrl.categoryButtons('148, 150')">History</button>
            </div>

            <div id="hobbies">
            <div id="hobbies"><img src="hobbies.svg" alt="hobbies"></div>
            <button class="hobbiesBtn" ng-click="$ctrl.categoryButtons('82, 88')">Hobbies</button>
            </div>

            <div id="movies">
            <div id="movies"><img src="movieCam.svg" alt="movie"></div>
            <button class="movieBtn" ng-click="$ctrl.categoryButtons('138,68')">Movies</button>
            </div>

            <div id="music">
            <div id="music"><img src="music-note.svg" alt="music"></div>
            <button class="musicBtn" ng-click="$ctrl.categoryButtons('134')">Music</button>
            </div>

            <div id="travel">
            <div id="travel"><img src="travel.svg" alt="travel"></div>
            <button class="travelBtn" ng-click="$ctrl.categoryButtons('123')">Places & Travel</button>
            </div>
            
            <div id="politics">
            <div id="politics"><img src="politics.svg" alt="politics"></div>
            <button class="politicsBtn" ng-click="$ctrl.categoryButtons('99,117,151')">News & Politics</button>
            </div>

            <div id="science">
            <div id="science"><img src="science.svg" alt="science"></div>
            <button class="scienceBtn" ng-click="$ctrl.categoryButtons('107,108,108,110')">Science</button>
            </div>

            <div id="religion">
            <div id="religion"><img src="religion.svg" alt="religion"></div>
            <button class="religionBtn" ng-click="$ctrl.categoryButtons('69,70,71,72,73,74,75,76')">Religion</button>
            </div>

            <div id="society">
            <div id="society"><img src="society.svg" alt="society"></div>
            <button class="societyBtn" ng-click="$ctrl.categoryButtons('122,104')">Society & Culture</button>
            </div>

            <div id="sports">
            <div id="sports"><img src="sports.svg" alt="sports"></div>
            <button class="sportsBtn" ng-click="$ctrl.categoryButtons('77,141,158,')">Sports & Recreation</button>
            </div>

            <div id="tech">
            <div id="tech"><img src="tech.svg" alt="tech"></div>
            <button class="techBtn" ng-click="$ctrl.categoryButtons('112,127,128,130,131,139,140,143,163')">Technology</button>
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
