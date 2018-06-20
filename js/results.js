"use strict";
{
    let results = {
        template: `
        <div class="links">
            <a class="navBar" href="#!/Home">Home</a>
            <a class="navBar" href="#!/Account">Account</a>
            <a class="navBar" href="#!/yourList">My Podcasts</a>
        </div>
        <h1 class="titleBars">Here's What We Got From Your Search: </h1>
        <input id="filter" ng-model="searchText" placeholder="Filter your results..." />
        <div class="result" ng-repeat="pc in $ctrl.results | filter: searchText track by $index">
            <div class="leftHalf">
                <p>Title: </p>
                <p>{{pc.title_original}}</p>
                <span>Length: {{pc.audio_length}}</span>
                <button id="addBtn" ng-click="$ctrl.listInfo(pc)">+</button>
            </div>
            <div class="rightHalf">
                <p>Description: </p>
                <p>{{pc.description_original}}</p>
            </div>
        </div>
        `
        ,

        controller: function (podcastService, $location) {
            let vm = this;
            vm.podcasts ="";
            vm.results = podcastService.getPodcast();
            vm.listInfo = function(podcasts) {
                let x =
                {
                title: podcasts.title_original,
                length: podcasts.audio_duration,
                genre: podcasts.category,
				img: podcasts.img_url,
				description: podcasts.description_original 
				}

                vm.addPodcast = podcastService.addPodcast(x);
            };

        }
    };

    results.$inject = ["podcastService", "$location"];
    angular
        .module("app")
        .component("results", results);
}
