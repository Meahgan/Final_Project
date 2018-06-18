"use strict";
{
    let results = {
        template: `
        <input ng-model="searchText" placeholder="Filter your results..." />
        <div ng-repeat="pc in $ctrl.results | filter: searchText track by $index">
        <p>{{pc.title_original
}}</p>
        </div>
        `
        ,

        controller: function (podcastService, $location) {
            let vm = this;
            vm.results = podcastService.getPodcast();
        }
    };

    results.$inject = ["podcastService", "$location"];
    angular
        .module("app")
        .component("results", results);
}