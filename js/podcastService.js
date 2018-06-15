"use strict";
{
    function podcastService($http, $location) {
        let podcasts = [{
            title: "Epi. 36 | Success For Life Podcast Interview with Car Sales King Chris Martinez, achieve maximum sales growth",
            audio_duration: "234",
            category: "cars",
            img_url: "https://cdn.zencast.fm/download/Podcast/artworks/782/large/3da6ee6699da1eb52d358aa59b8e1cf6b5d77db224b4cec0faaa540610fb3b2e/success%20%26%20learning.png",
            description: "This week, Coach Schuman talks with Chris Martinez about how to grow your sales massively and how to use amazing tools like autominer"
        }];

        const getPodcast = function () {
            return podcasts;
        };

        const setPets = function (newPodcasts) {
            podcasts = newPodcasts;
        };

        const callAPI = function () {
         
        };


        const searchTitle = function (title) {
            let url = `https://api.ottoradio.com/v1/podcasts?query=${title}&type=trending&count=10`;
            console.log(url);
            return $http.get(url);
            }

            return {

                getPodcast,
                setPodcast,
                searchTitle
            }
        
    }
    angular
        .module("app", ["ngRoute"])
        .service("podcastService", podcastService);
}