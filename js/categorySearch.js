"use strict";
{
    let categorySearch = {
        templateUrl: "categorySearch.html",
        
        controller: function (podcastService, $location) {
            let vm = this;
            vm.genre = "";
            vm.length = "";
            vm.move = false;
            vm.categoryButtons = function (genre) {
              vm.move = true;
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
