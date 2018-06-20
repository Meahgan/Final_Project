"use strict";
{
	let yourList = {
		template: `
		<div id="podcasts">
		<h1>My Podcast List</h1>
		<div class="homeLink"><a href="index.html">Hunt for Podcasts!</a></div>
		<div ng-repeat="pods in $ctrl.list">
		<p>{{pods.title}}</p>
		<p>{{pods.length}}</p>
		<button ng-click="$ctrl.remove($index)">Remove</button>
		</div>
		</div>
		`,
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