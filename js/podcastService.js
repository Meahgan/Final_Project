"use strict";
{
    function podcastService($http, $location) {
        let podcasts = [{
            title: "Epi. 36 | Success For Life Podcast Interview with Car Sales King Chris Martinez, achieve maximum sales growth",
            audio_duration: "234",
            category: "cars",
            img_url: "https://cdn.zencast.fm/download/Podcast/artworks/782/large/3da6ee6699da1eb52d358aa59b8e1cf6b5d77db224b4cec0faaa540610fb3b2e/success%20%26%20learning.png",
            description: "This week, Coach Schuman talks with Chris Martinez about how to grow your sales massively and how to use amazing tools like autominer"
        }]

        const getPodcast = function () {
            console.log(podcasts);
            return podcasts;
        }

        const setPodcast = function (newPodcast) {
            podcasts = newPodcast;
        }

        const callPodcastAPI = function () {
            let url = `https://api.ottoradio.com/v1/podcasts?query=car&type=trending&count=10`;
            return $http.get(url).then(function (response) {
                console.log(response);
                console.log("test");
                setPodcast(response.data);
                return podcasts;
            });
            const search = function (title){
                let url = `https://api.ottoradio.com/v1/podcasts?query=${title}&type=trending&count=10`;
                console.log(url);
                 $http.get(url).then(function (response) {
                    setData(response.data.results);
                  });
                };


            }

    
        
          callPodcastAPI();
          search();
          return {
            getPodcast,
            setPodcast,
            callPodcastAPI,
            search
            
        }
    }
        angular
        .module("app")
        .factory("podcastService", podcastService);
       }