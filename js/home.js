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

      <div class="searchTitle" ng-hide="$ctrl.move">
        <h1 class="titleBars">Cool Name</h1>
        <span><input class="searchBar" ng-model="title" placeholder="Search Titles"/>
        <button class="goBtn" ng-click="$ctrl.searchBar(title)"; ng-click="$ctrl.wow()">GO</button></span>
        <a href="#!/survey"><button class="searchBtns" ng-click="$ctrl.wow()">Survey</button></a>
        <a href=#!/categorySearch><button class="searchBtns" ng-click="$ctrl.wow()">Search by Category</button></a>
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
