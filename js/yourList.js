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
			let vm = this;
			vm.list = podcastService.getPodcast();
            vm.listinfo = function(podcasts) {
                let x =
                {title: title_original,
                length: audio_duration,
                genre: category,
				img: img_url,
				description: description_original 
				}

                vm.addPodcast = podcastService.addList(x);
            };

		}
	};

	yourList.$inject = ['podcastService', '$location'];

	angular
	.module('app')
	.component("yourList", yourList);
}