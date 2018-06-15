"use strict";
{
    let home = {
        template: `<div ng-repeat="pc in $ctrl.podcasts">
        <p>{{pc.title}}</p>
        </div>
        <p>hello</p>
        `
        ,

        controller: function (podcastService, $location) {
            let vm = this;
            vm.podcasts = "";
            vm.promise = podcastService.callPodcastAPI();
            vm.promise.then(function(){
                vm.podcasts = podcastService.getPodcast();
                console.log(vm.podcasts);
            });
        }
    };

    home.$inject = ["podcastService", "$location"];
    angular
        .module("app")
        .component("home", home);
}