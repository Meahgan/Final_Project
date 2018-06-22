"use strict";
{
    let results = {
        templateUrl: "results.html",

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
