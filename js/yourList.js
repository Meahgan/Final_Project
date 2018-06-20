"use strict";
{
	let yourList = {
		template: `
		<div class="links">
          <a class="navBar" href="#!/Home">Home</a>
          <a class="navBar" href="#!/Account">Account</a>
          <a class="navBar" href="#!/yourList">My Podcasts</a>
      	</div>
		<div id="podcasts">
		<h1 class="titleBars">My Podcast List</h1>
		<div class="result" ng-repeat="pods in $ctrl.list">
			<div class="leftHalf">
				<p>Title: </p><p>{{pods.title}}</p>
				<span>Length: {{pods.length}}</span>
				<button id="removeBtn" ng-click="$ctrl.remove($index)">-</button>
			</div>
			<div class="rightHalf">
				<p>Description: </p>
				<p>{{pods.description}}</p>
            </div>
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