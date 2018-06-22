"use strict";
{
	let yourList = {
		templateUrl: "yourList.html",
		controller: function(podcastService, $location) {
			let vm = this;
			vm.list = podcastService.getList();
			vm.remove = function (index) {
				podcastService.removePodcast(index);
			}
		}
	};

	yourList.$inject = ['podcastService', '$location'];

	angular
	.module('app')
	.component("yourList", yourList);
}