"use strict";
{
	let yourList = {
		template: "{{2+2}}",
		controller: function(podcastService, $location) {

		}
	};

	yourList.$inject = ['podcastService', '$location'];

	angular
	.module('app')
	.component("yourList", yourList);
}