"use strict";
{
    let categorySearch = {
        template: `
        <button ng-model="art">Art</button>
        `
        ,

        controller: function (podcastService, $location) {
            let vm = this;
            vm.categoryButtons = function(category){
                vm.categoryClick = podcastService.search(category);
                vm.categoryClick.then(function(){
                    vm.podcasts = podcastService.getPodcast();
                    $location.path("/results");
                    
                console.log(vm.podcasts);
                });

            }
        }
    };

    categorySearch.$inject = ["podcastService", "$location"];
    angular
        .module("app")
        .component("categorySearch", categorySearch);
}