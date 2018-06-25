"use strict";
{
    let results = {
        template: `
        <div class="overlay">
            <div class="links">
                <a class="navBar" href="#!/Home">Home</a>
                <a class="navBar" href="#!/Account">Account</a>
                <a class="navBar" href="#!/yourList">My Podcasts</a>
            </div>




            <h1 class="titleBars">Here's What We Got From Your Search: </h1>
            <input id="filter" ng-model="searchText" placeholder="Filter your results..." />
            <div class="result" ng-repeat="pc in $ctrl.results | filter: searchText track by $index">

                <div class="leftHalf">
                    <p>{{pc.title_original}}</p>
                    <div class="podChoices">
                        <audio src="{{pc.audio}}" controls></audio>
                        <div class="addBtn" ng-click="$ctrl.listInfo(pc)" ng-hide="pc.saved">
                            <p>+</p>
                        </div>
                    </div>
                </div>

                <div class="rightHalf">
                    <p>Description: </p>
                    <textarea readonly rows="5" cols="70" class="description">{{pc.description_original}}</textarea>
                </div>
            </div>
        </div>
        `
        ,

        controller: function (podcastService, $location) {
            let vm = this;
            vm.podcasts ="";
            vm.results = podcastService.getPodcast();
            vm.listInfo = function(podcast) {
                podcast.saved = true;

                vm.addPodcast = podcastService.addPodcast(podcast);
            };
        }
    };

    results.$inject = ["podcastService", "$location"];
    angular
        .module("app")
        .component("results", results);
}
