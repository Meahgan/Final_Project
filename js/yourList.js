"use strict";
{

    let yourList = {
        template: `<p>MY PODCAST LIST</p>`
        ,
        controller: function (podcastService) {
            let vm = this;
            vm.list = podcastService.searchBar();
            vm.remove = function(index){
                vm.remove = podcastService.remove(index);
            }
            console.log(vm.list);
        }
    }
    yourList.$inject = ["podcastService", "$location"];
    angular
        .module("app")
        .component("yourList", yourList);
}