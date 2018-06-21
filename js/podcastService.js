"use strict";
{
    function podcastService($http, $location) {
        let podcasts = [{
            title_original: "Epi. 36 | Success For Life Podcast Interview with Car Sales King Chris Martinez, achieve maximum sales growth",
            audio_length: "234",
            category: "cars",
            img_url: "https://cdn.zencast.fm/download/Podcast/artworks/782/large/3da6ee6699da1eb52d358aa59b8e1cf6b5d77db224b4cec0faaa540610fb3b2e/success%20%26%20learning.png",
            description_original: "This week, Coach Schuman talks with Chris Martinez about how to grow your sales massively and how to use amazing tools like autominer"
        }]

        const getPodcast = function () {
            // console.log(podcasts);
            return podcasts;
        }

        const setPodcast = function (newPodcast) {
            podcasts = newPodcast;
        }

        let podList = [];

        const getList = function() {
            return podList;
        }
        const addPodcast = function (newPod) {
            podList.push(newPod);
            console.log(podList);
        }
        const removePodcast = function (index){
            podList.splice(index,1);
        }

        const search = function (title) {
            let exampleUrl = `https://listennotes.p.mashape.com/api/v1/search?genre_ids=68%2C82&language=English&len_max=100&len_min=2&offset=5&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=star+wars&sort_by_date=0&type=episode`;
            let req = {
                method: 'GET',
                url: `https://listennotes.p.mashape.com/api/v1/search?genre_ids=68%2C82&language=English&len_max=100&len_min=2&offset=5&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=${title}&sort_by_date=0&type=episode`,
                headers: {
                    'X-Mashape-Key': '8bIXPUSY6Hmsh48N9SIRuhp89hoTp1Lqks5jsnps4Q3gYSWt1u',
                    'Accept': 'application/json'
                }
            };
            return $http(req).then(function (response) {
                setPodcast(response.data.results);
                console.log(response.data.results);
                //setPodcast(dataFile.results);
                //console.log(dataFile.results);
                $location.path("/results");
                return podcasts;
            });
        };
        const genreSearch = function (genre, min, max) {
            let exampleUrl = `https://listennotes.p.mashape.com/api/v1/search?genre_ids=68%2C82&language=English&len_max=100&len_min=2&offset=5&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=star+wars&sort_by_date=0&type=episode`;
            let req = {
                method: 'GET',
                url: `https://listennotes.p.mashape.com/api/v1/search?genre_ids=${genre}&language=English&len_max=${max}&len_min=${min}&offset=5&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=the&sort_by_date=0&type=episode`,
                headers: {
                    'X-Mashape-Key': '8bIXPUSY6Hmsh48N9SIRuhp89hoTp1Lqks5jsnps4Q3gYSWt1u',
                    'Accept': 'application/json'
                }
            };
            return $http(req).then(function (response) {
                setPodcast(response.data.results);
                console.log(response.data.results);
                //setPodcast(dataFile.results);
                //console.log(dataFile.results);
                $location.path("/results");
                return podcasts;
            });
        };

        const surveySearch = function(genre, min, max){
          let req = {
            method: 'GET',
            url: `https://listennotes.p.mashape.com/api/v1/search?genre_ids=${genre}&language=English&len_max=${max}&len_min=${min}&offset=5&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=the&sort_by_date=0&type=episode`,
            headers: {
                'X-Mashape-Key': '8bIXPUSY6Hmsh48N9SIRuhp89hoTp1Lqks5jsnps4Q3gYSWt1u',
                'Accept': 'application/json'
            }
          };
          return $http(req).then(function (response) {
              setPodcast(response.data.results);
              console.log(response.data.results);
              //setPodcast(dataFile.results);
              //console.log(dataFile.results);
              $location.path("/results");
              return podcasts;
          });
      };

            return {
                getPodcast,
                setPodcast,
                getList,
                addPodcast,
                removePodcast,
                search,
                genreSearch,
                surveySearch
            }
        }
        angular
            .module("app")
            .factory("podcastService", podcastService);
    }
