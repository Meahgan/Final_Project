"use strict";
{
  let survey = {
    template: `
    <p>I Would Use a Podcasts To..</p>
    <input type="checkbox" ng-model="$ctrl.survey" ng-true-value=[]><span>Learn</span> <input type="checkbox" ng-model="$ctrl.survey" ng-true-value=[]><span>Be Entertained</span>
    <p>Right Now, If I Could I Would..</p>
    <input type="checkbox" ng-model="$ctrl.survey" ng-true-value=[]><span>Go on a Trip</span> <input type="checkbox" ng-model="$ctrl.survey" ng-true-value=[]><span>Have Fun Staycation</span>
    <p>Do You Care More About...</p>
    <input type="checkbox" ng-model="$ctrl.survey" ng-true-value=[]><span>Health</span> <input type="checkbox" ng-model="$ctrl.survey" ng-true-value=[]><span>Money</span>
    <br>
    <br>
    <input type="button" ng-click="surveyAnswer()" value="SUBMIT YOUR SURVEY">`,

    controller: function(podcastService, $location){
      let vm = this;
      vm.survey = "";
      vm.surveyAnswer = function(survey){
        console.log(survey);
      }


    }

  }
  survey.$inject = ["podcastService", "$location"];

  angular
    .module("app")
    .component("survey", survey);
}
