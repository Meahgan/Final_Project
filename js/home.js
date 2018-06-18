"use strict";
{
    let home = {
        template: `
        <div class="searchTitle">
          <input ng-model="title" placeholder="Search Titles"/>
          <input ng-model="length" placeholder="search length"/>
          <button class="button" ng-click="$ctrl.searchBar(title, length)">GO</button>
        </div>
        <br>
        <div ng-repeat="pc in $ctrl.podcasts">
          <p>{{pc.title}}</p>
          <p>{{pc.audio_duration}}</p>
        </div>

        `
        ,
        //this will call the search title & length function
        controller: function (podcastService, $location) {
            let vm = this;
            vm.podcasts = "";
            vm.searchBar = function(title, length){
              console.log(length);
              vm.call = podcastService.search(title, length);
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
