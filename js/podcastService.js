"use strict";
{
    function podcastService($http, $location) {
        let podcasts = [{
            title_original: "Epi. 36 | Success For Life Podcast Interview with Car Sales King Chris Martinez, achieve maximum sales growth",
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


        // Temp Search FAKE API Function - so as to not go over API request Limit
        // const search = function(title, length) {
        //     let url = `https://api.ottoradio.com/v1/podcasts?query=&type=${title}&%20${length}recent&count=20`;
        //     console.log(title);
        //     // console.log(length);
        //     return $http.get(url).then(function (response){
        //
        //             setPodcast(dataFile.results);
        //             $location.path("/results");
        //         return podcasts;
        //     })


        /////////////////////////////
        // THIS IS WHAT WE WILL USE
        ///////////////////////////
        const search = function(title) {
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
                console.log(response);
                //setPodcast(dataFile.results);
                //console.log(dataFile.results);
                $location.path("/results");
                return podcasts;
            });
        };

        const genreSearch = function(genre) {
            let exampleUrl = `https://listennotes.p.mashape.com/api/v1/search?genre_ids=68%2C82&language=English&len_max=100&len_min=2&offset=5&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=star+wars&sort_by_date=0&type=episode`;
            let req = {
                method: 'GET',
                url: `https://listennotes.p.mashape.com/api/v1/search?genre_ids=${genre}&language=English&len_max=100&len_min=2&offset=5&only_in=Only+search+in+these+fields&published_after=1390190241000&published_before=1490190241000&q=star+wars&sort_by_date=0&type=episode`,
                headers: {
                    'X-Mashape-Key': '8bIXPUSY6Hmsh48N9SIRuhp89hoTp1Lqks5jsnps4Q3gYSWt1u',
                    'Accept': 'application/json'
                    }
                };
            return $http(req).then(function (response) {
                setPodcast(response.data.results);
                console.log(response);
                //setPodcast(dataFile.results);
                //console.log(dataFile.results);
                $location.path("/results");
                return podcasts;
            });
        };

        const category = function(category){
            let url = `https://api.ottoradio.com/v1/podcasts?query=${category}&type=recent&count=20`;
            console.log(url);
            return $http.get(url).then(function (response){
                setPodcast(response.data);
                return podcasts;
            })
        }
        const secondsToMinutes = function(sec) {

            // 36 = 1236 %60
            let remainder = sec%60;
            // 20 = (1236 - 36) = 1200/60 = 20
            let minute = (sec-remainder)/60

            //Input: 1236 seconds
            //Output: 20minutes 36 seconds
            return [minute, remainder];
        }
        const minutesToSeconds = function(minute) {
            // User searches for podcast with minutes
            return minute*60;
        }



          return {
            getPodcast,
            setPodcast,
            search,
            genreSearch,
            category
        }
      }
        angular
        .module("app")
        .factory("podcastService", podcastService);
}
