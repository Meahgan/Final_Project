"use strict";
{
  let survey = {
    templateUrl: "survey.html",

    controller: function(podcastService, $location){
      let vm = this;
      vm.survey = "";
      vm.survey2 = "";
      vm.survey3 = "";
      vm.move = false;
      vm.surveyAnswer = function(survey, survey2, survey3){
        vm.move = true;
        console.log(survey);
        console.log(vm.survey);
        let surveys = survey + survey2 + survey3;
        vm.surveyClick = podcastService.surveySearch(surveys);
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