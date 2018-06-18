"use strict";
{
    let results = {
        template: `
        <div ng-repeat="pc in $ctrl.results">
        <p>{{pc.title}}</p>
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