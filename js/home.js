"use strict";
{
    let home = {
        template: `
        <div class="searchTitle">
        <input ng-model="title" placeholder="Search Titles"/> 
        <button class="button" ng-click="$ctrl.searchBar(title)">GO</button>
        </div>
        <br>
        <div ng-repeat="pc in $ctrl.podcasts">
        <p>{{pc.title}}</p>
        </div>
        `
        ,

        controller: function (podcastService, $location) {
            let vm = this;
            vm.podcasts = "";
            // vm.promise = podcastService.callPodcastAPI();
            // vm.promise.then(function(){
            //     vm.podcasts = podcastService.getPodcast();
            //     console.log(vm.podcasts);
            // });
            vm.searchBar = function(title){
                vm.call = podcastService.search(title);
                vm.call.then(function(){
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