"use strict";
{
  let survey = {
    template: `
    <div id="survey">
    <p>I Would Use a Podcasts To..</p>
    <input type="checkbox" ng-model="$ctrl.survey" ng-true-value="[67, 93, 94, 95, 147, 149, 187, 111, 127, 125, 107, 125, 163]"><span>Learn</span> <input type="checkbox" ng-model="$ctrl.survey" ng-true-value="[133, 68, 82, 138, 134, 167, 168, 84, 88]"><span>Be Entertained</span>

    <p>Right Now, If I Could I Would..</p>
    <input type="checkbox" ng-model="$ctrl.survey2" ng-true-value="[69, 99, 117, 122, 123]"><span>Take a Trip to Europe</span> <input type="checkbox" ng-model="$ctrl.survey2" ng-true-value="[102, 122, 100, 101, 103, 104, 105, 140]"><span>Have a Fun Staycation</span>
    
    <p>Do You Care More About...</p>
    <input type="checkbox" ng-model="$ctrl.survey3" ng-true-value="[102, 88, 77, 87, 137, 141, 158]"><span>Health</span> <input type="checkbox" ng-model="$ctrl.survey3" ng-true-value="[67, 93, 94, 95, 147, 149, 187, 127, 111]"><span>Money</span>
    <br>
    <br>
    <input type="button" ng-click="$ctrl.surveyAnswer($ctrl.survey, $ctrl.survey2, $ctrl.survey3)" value="SUBMIT YOUR SURVEY">
    </div>`,

    controller: function(podcastService, $location){
      let vm = this;
      vm.survey = "";
      vm.survey2 = "";
      vm.survey3 = "";
      vm.surveyAnswer = function(survey, survey2, survey3){
        console.log(survey);
        console.log(vm.survey);
        let surveys = survey + survey2 + survey3;
        vm.surveyClick = podcastService.genreSearch(surveys);
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
