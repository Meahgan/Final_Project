"use strict";
{
	let yourList = {
		template: `
		<div class="overlay">
			<div class="links">
	        	<a class="navBar" href="#!/Home">Home</a>
	        	<a class="navBar" href="#!/Account">Account</a>
	        	<a class="navBar" href="#!/yourList">My Podcasts</a>
	      	</div>

        	<h1 class="titleBars">My Podcast List</h1>
        	<input id="filter" ng-model="searchText" placeholder="Filter your results..." />

	        <div class="result" ng-repeat="pods in $ctrl.list | filter: searchText track by $index">
	            <div class="leftHalf">
	                <p>{{pods.title_original}}</p>
	                <div class="podChoices">
	                	<audio src="{{pods.audio}}" controls></audio>
	                	<div class="removeBtn" ng-click="$ctrl.remove($index)">
	                		<p>-</p>
	                	</div>
	            	</div>
	        	</div>
	            <div class="rightHalf">
	                <p>Description: </p>
	                <textarea readonly rows="5" cols="70" class="description">{{pods.description_original}}</textarea>
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