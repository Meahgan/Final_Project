"use strict";
{
  let home = {
    template: `
      <div class="links">
        <a class="navBar" href="#!/Home">Home</a>
        <a class="navBar" href="#!/Account">Account</a>
        <a class="navBar" href="#!/yourList">My Podcasts</a>
      </div>
      
      <div class="searchTitle">
        <h1 class="titleBars">Cool Name</h1>
        <span><input class="searchBar" ng-model="title" placeholder="Search Titles"/>
        <button class="goBtn" ng-click="$ctrl.searchBar(title); $ctrl.wow()">GO</button></span>
        <a href="#!/survey"><button class="searchBtns" ng-click="$ctrl.wow()">Survey</button></a>
        <a href=#!/categorySearch><button class="searchBtns" ng-click="$ctrl.wow()">Search by Category</button></a>
      </div>      
        `
    ,
    //this will call the search title & length function
    controller: function (podcastService, $location) {
      let vm = this;
      vm.podcasts = "";
      vm.searchBar = function (title) {
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
