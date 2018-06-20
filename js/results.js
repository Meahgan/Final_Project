"use strict";
{
    let results = {
        template: `
        <input ng-model="searchText" placeholder="Filter your results..." />
        <div ng-repeat="pc in $ctrl.results | filter: searchText track by $index">
        <p>{{pc.title_original}}</p>
        <p>{{pc.audio_length}}</p>
        <p>{{pc.description_original}}</p>
        <button ng-click="$ctrl.listInfo(pc)">ADD</button>
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
