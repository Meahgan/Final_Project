"use strict";
{
    function podcastService($http, $location) {
        let podcasts = [];

        const getPodcast = function () {
            return podcasts;
        }

        const setPodcast = function (newPodcast) {
            for(let i=0; i<newPodcast.length; i++){
                podcasts.unshift(newPodcast[i]);
            }

        }

        let podList = [];

        const getList = function() {
            return podList;
        }
        const addPodcast = function (newPod) {
            podList.push(newPod);
        }
        const removePodcast = function (index){
            podList.splice(index,1);
        }

<<<<<<< HEAD
=======

>>>>>>> 1407afa83d31d890be42636fb4d94aacf5f2df84

        /////////////////////////////
        // THIS IS WHAT WE WILL USE
        /////////////////////////////
        const search = function (title, min, max) {
            let offset = Math.floor(Math.random() * 500);
            let exampleUrl = `https://listennotes.p.mashape.com/api/v1/search?genre_ids=68%2C82&language=English&len_max=100&len_min=2&offset=5&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=star+wars&sort_by_date=0&type=episode`;
            let req = {
                method: 'GET',
                url: `https://listennotes.p.mashape.com/api/v1/search?genre_ids=68%2C82&language=English&len_max=${max}&len_min=${min}&offset=${offset}&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=${title}&sort_by_date=0&type=episode`,
                headers: {
                    'X-Mashape-Key': '8bIXPUSY6Hmsh48N9SIRuhp89hoTp1Lqks5jsnps4Q3gYSWt1u',
                    'Accept': 'application/json'
                }
            };
            return $http(req).then(function (response) {
                setPodcast(response.data.results);
                console.log(response.data.results);
                $location.path("/results");
                return podcasts;
            });
        };
        
        const genreSearch = function (genre, min, max) {
            let offset = Math.floor(Math.random() * 500);
            let exampleUrl = `https://listennotes.p.mashape.com/api/v1/search?genre_ids=68%2C82&language=English&len_max=100&len_min=2&offset=5&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=star+wars&sort_by_date=0&type=episode`;
            let req = {
                method: 'GET',
                url: `https://listennotes.p.mashape.com/api/v1/search?genre_ids=${genre}&language=English&len_max=${max}&len_min=${min}&offset=${offset}&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=the&sort_by_date=0&type=episode`,
                headers: {
                    'X-Mashape-Key': '8bIXPUSY6Hmsh48N9SIRuhp89hoTp1Lqks5jsnps4Q3gYSWt1u',
                    'Accept': 'application/json'
                }
            };
            return $http(req).then(function (response) {
                setPodcast(response.data.results);
                $location.path("/results");
                return podcasts;
            });
        };

        const surveySearch = function(genre, min, max){
        let offset = Math.floor(Math.random() * 500);
        let req = {
            method: 'GET',
            url: `https://listennotes.p.mashape.com/api/v1/search?genre_ids=${genre}&language=English&len_max=${max}&len_min=${min}&offset=${offset}&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=the&sort_by_date=0&type=episode`,
            headers: {
                'X-Mashape-Key': '8bIXPUSY6Hmsh48N9SIRuhp89hoTp1Lqks5jsnps4Q3gYSWt1u',
                'Accept': 'application/json'
            }
        };
        return $http(req).then(function (response) {
            setPodcast(response.data.results);
            console.log(response.data.results);
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