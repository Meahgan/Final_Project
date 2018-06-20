"use strict";
{
  let home = {
    template: `
      <div id="home">
        <div class="searchTitle">
          <input ng-model="title" placeholder="Search Titles"/>
          <button class="button" ng-click="$ctrl.searchBar(title)">GO</button>
          <br>
         <a href=#!/categorySearch><button>Search by Category</button></a>
        </div>
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

    }
  };

  home.$inject = ["podcastService", "$location"];

  angular
    .module("app")
    .component("home", home);
}
