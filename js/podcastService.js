"use strict";
{
    function podcastService($http, $location) {
        let podcasts = [];

        const getPodcast = function () {
            return podcasts;
        }

        const setPodcast = function (newPodcast) {
            for(let i=0; i<newPodcast.length; i++){
                let temp = newPodcast[i];
                let entry = {
                    title_original: temp.title_original,
                    audio: temp.audio,
                    description_original: temp.description_original,
                    catIcons: []
                };
                for(let j=0; j<temp.genres.length; j++){
                    let iconEntry = iconKey[temp.genres[i]];
                    if(!!(entry.catIcons.indexOf(iconEntry)+1)){
                        entry.catIcons.push(iconEntry);
                    }
                }
                console.log(entry);
                podcasts.unshift(entry);
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

      let iconKey = {
          "67": 'icons/biz.svg',
          "93": 'icons/biz.svg',
          "94": 'icons/biz.svg',
          "95": 'icons/biz.svg',
          "147": 'icons/biz.svg',
          "149": 'icons/biz.svg',
          "187": 'icons/biz.svg',
          "127": 'icons/tech.svg',
          "111": 'icons/education.svg',
          "102": 'icons/food.svg',
          "122": 'icons/society.svg',
          "100": 'icons/art.svg',
          "101": 'icons/art.svg',
          "103": 'icons/art.svg',
          "104": 'icons/art.svg',
          "105": 'icons/art.svg',
          "140": 'icons/art.svg',
          "133": 'icons/comedy.svg',
          "68": 'icons/movieCam.svg',
          "82": 'icons/movieCam.svg',
          "138": 'icons/movieCam.svg',
          "134": 'icons/music-note.svg',
          "167": 'icons/music-note.svg',
          "168": 'icons/music-note.svg',
          "84": 'icons/car.svg',
          "82": 'icons/hobbies.svg',
           "88": 'icons/hobbies.svg',
           "88": 'icons/fitness.svg',
            "77": 'icons/sports.svg',
            "87": 'icons/sports.svg',
            "137": 'icons/sports.svg',
            "141": 'icons/sports.svg',
            "158": 'icons/sports.svg',
            "125": 'icons/history.svg',
            "125": 'icons/science.svg',
             "107": 'icons/science.svg',
              "163": 'icons/science.svg',
              "69": 'icons/religion.svg',
              "99": 'icons/politics.svg',
              "117": 'icons/politics.svg',
              "122": 'icons/travel.svg',
              "123": 'icons/travel.svg'

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
