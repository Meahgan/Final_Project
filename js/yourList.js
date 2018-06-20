"use strict";
{
	let yourList = {
		template: `
		<div id="podcasts">
		<h1>My Podcast List</h1>
		<div class="homeLink"><a href="index.html">Hunt for Podcasts!</a></div>
		<p>{{}}
		
		
		
		</div>
		{{2+2}}`,
		controller: function(podcastService, $location) {

		}
	};

	yourList.$inject = ['podcastService', '$location'];

	angular
	.module('app')
	.component("yourList", yourList);
}