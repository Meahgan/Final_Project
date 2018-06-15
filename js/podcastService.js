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
          };
          callPodcastAPI();
          return {
            getPodcast,
            setPodcast,
            callPodcastAPI
        }
        }

        //podcast list array
        // vm.list = {};

        // vm.setData = function (newData) {
        //     vm.podcasts = [];
        //     let podcastEntry = {};

        //     for(let i=0; i = newData.length; i++){
        //         let podcast = newData[i];  //adding into the array 
        //         console.log(podcasts);
        //         podcastEntry = {
        //             title: podcast.title,
        //             audio_duration: podcast.audio_duration,
        //             category: podcast.category,
        //             img_url: podcast.img_url,
        //             description: podcast.description
        //         };
        //         vm.podcasts.push(podcastEntry);
        //     }
        // };

        // vm.search = function(title, length, category){
        //     console.log("working!");
        //     let url = `https://api.ottoradio.com/v1/podcasts?query=${title}&type=${category}&count=10&length=${audio_duration}`;

        //     $http.get(url).then(function(response){
        //         vm.setData(response.data.results);

        //         // $location.path("/");
        //     })

        // }

            
        
    angular
        .module("app")
        .factory("podcastService", podcastService);

        }