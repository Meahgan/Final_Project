"use strict";
{
  let home = {
    template: `
    <div class="loader" ng-show="$ctrl.move"></div>

      <div class="links">
        <a class="navBar" href="#!/Home">Home</a>
        <a class="navBar" href="#!/Account">Account</a>
        <a class="navBar" href="#!/yourList">My Podcasts</a>
      </div>

      <h1><em>SIFT</em></h1>
      <div class="tagline"><p>A better way to search for your next podcast</p></div>
      
      <div id="homeContainer">
      <div id="home">
      <div class="timeTable"><p>How much time do you have?</p></div>
      <div class="minuteBoxHolder">
            <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[0,15]> <span>0-15</span></span>
            <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[16,30]> <span>15-30</span></span>
            <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[31,45]> <span>30-45</span></span>
            <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[46,60]> <span>45-60</span></span>
            <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[61,300]> <span>60+</span></span>
        </div>
      
      <div class="searchTitle">
        
        <span><input class="searchBar" ng-model="title" placeholder="Search Titles"/>
      
        <button class="goBtn" ng-click="$ctrl.searchBar(title); $ctrl.wow()">GO</button></span>
        <div id="searchBtn">
        <a href="#!/survey"><button class="surveyBtn" ng-click="$ctrl.wow()">SURVEY</button></a>
        <a href=#!/categorySearch><button class="searchBtn" ng-click="$ctrl.wow()">SEARCH CATEGORIES</button></a>
        </div>
        </div>
        </div>
      </div>      
        `
    ,
    //this will call the search title & length function
    controller: function (podcastService, $location) {
      let vm = this;
      vm.podcasts = "";
      vm.move = false;
      vm.searchBar = function (title) {
        vm.move = true;
        console.log(title);
        vm.call = podcastService.search(title);
        vm.call.then(function () {
          vm.podcasts = podcastService.getPodcast();

          console.log(vm.podcasts);
        });
      }
      vm.wow = function(){
        podcastService.play();
      }

    }
  };

  home.$inject = ["podcastService", "$location"];

  angular
    .module("app")
    .component("home", home);
}
