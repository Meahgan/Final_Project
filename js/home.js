"use strict";
{
  let home = {
    templateUrl: "home.html"
    ,
    //this will call the search title & length function
    controller: function (podcastService, $location) {
      let vm = this;
      vm.podcasts = "";
      vm.length = "";
      vm.move = false;
      vm.searchBar = function (title) {
        vm.move = true;
        console.log(title);
        let min = vm.length[0];
        let max = vm.length[1];
        vm.call = podcastService.search(title, min, max);
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
