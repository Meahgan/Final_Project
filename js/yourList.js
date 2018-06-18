"use strict";
{
<<<<<<< HEAD

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
=======
	let yourList = {
		template: "{{2+2}}",
		controller: function(podcastService, $location) {

		}
	};

	yourList.$inject = ['podcastService', '$location'];

	angular
	.module('app')
	.component("yourList", yourList);
>>>>>>> c21861f3f717b9bbc0a1173e5831a7cd55099e35
}