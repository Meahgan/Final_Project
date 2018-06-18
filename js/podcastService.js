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
            // console.log(podcasts);
            return podcasts;
        }

        const setPodcast = function (newPodcast) {
            podcasts = newPodcast;
        }

          //this is the search function
          //calls function when you type a title and click GO
          const search = function(title, length){
            length = length * 60;
            let url = `https://api.ottoradio.com/v1/podcasts?query=${title}%20${length}&type=trending&count=50`;
            console.log(length);
            return $http.get(url).then(function (response) {
                setPodcast(response.data);
                return podcasts;
                console.log(podcasts);
            });
          }

          //this will look for the category
          const category = function(category){
            let url = `https://api.ottoradio.com/v1/podcasts?query=${category}&type=recent&count=20`;
            console.log(url);
            return $http.get(url).then(function (response){
                setPodcast(response.data);
                return podcasts;
            })
        }



          return {
            getPodcast,
            setPodcast,
            search,
            category


        }
      }

        angular
        .module("app")
        .factory("podcastService", podcastService);
       }
