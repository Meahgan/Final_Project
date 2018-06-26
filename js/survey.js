"use strict";
{
  let survey = {
    templateUrl: "survey.html",

    controller: function(podcastService, $location){
      let vm = this;
      vm.survey = "";
      vm.survey2 = "";
      vm.survey3 = "";
      vm.length = "";
      vm.move = false;
      vm.surveyAnswer = function(survey, survey2, survey3){
        vm.move = true;
        console.log(survey);
        console.log(vm.survey);
        let min = vm.length[0];
        let max = vm.length[1];
        let surveys = survey + survey2 + survey3;
        vm.surveyClick = podcastService.surveySearch(surveys, min, max);
        vm.surveyClick.then(function () {
          console.log(surveys);
          $location.path("/results");
        })
      }

    }


  }
  survey.$inject = ["podcastService", "$location"];

  angular
    .module("app")
    .component("survey", survey);
}