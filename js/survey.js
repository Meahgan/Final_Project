"use strict";
{
  let survey = {
    template: `
    <div class="loader" ng-show="$ctrl.move"></div>

    <div class="overlay">
    <div class="links">
      <a class="navBar" href="#!/Home">Home</a>
      <a class="navBar" href="#!/Account">Account</a>
      <a class="navBar" href="#!/yourList">My Podcasts</a>
    </div>
    <h1 class="titleBars" ng-hide="$ctrl.move">Let's choose you a podcast</h1>
    <div id="survey" ng-hide="$ctrl.move">
      <div>
        <h3 class="container">I Would Use a Podcasts To..</h3>
        <label class="container">Be Entertained
          <input type ="checkbox" checked="checked" ng-model="$ctrl.survey" ng-true-value="[67, 93, 94, 95, 147, 149, 187, 111, 127, 125, 107, 125, 163]">
          <span class="checkmark"></span>
        </label>
        <label class="container">Learn
          <input type ="checkbox" checked="checked" ng-model="$ctrl.survey" ng-true-value="[133, 68, 82, 138, 134, 167, 168, 84, 88]">
          <span class="checkmark"></span>
        </label>
      </div>
      <div>
        <h3 class="question">Right Now, If I Could I Would..</h3>
        <label class="container">Take a Trip to Europe
          <input type ="checkbox" checked="checked" ng-model="$ctrl.survey2" ng-true-value="[69, 99, 117, 122, 123]">
          <span class="checkmark"></span>
        </label>
        <label class="container">Have a Fun Staycation
          <input type ="checkbox" checked="checked" ng-model="$ctrl.survey2" ng-true-value="[102, 122, 100, 101, 103, 104, 105, 140]">
          <span class="checkmark"></span>
        </label>
      </div>
      <div>
        <h3 class="question">Do You Care More About...</h3>
        <label class="container">Health
          <input type ="checkbox" checked="checked" ng-model="$ctrl.survey3" ng-true-value="[102, 88, 77, 87, 137, 141, 158]">
          <span class="checkmark"></span>
        </label>
        <label class="container">Money
          <input type ="checkbox" checked="checked" ng-model="$ctrl.survey3" ng-true-value="[67, 93, 94, 95, 147, 149, 187, 127, 111]">
          <span class="checkmark"></span>
        </label>
      </div>
      <input type="button" class="surveyBtn" ng-click="$ctrl.surveyAnswer($ctrl.survey, $ctrl.survey2, $ctrl.survey3)" value="SUBMIT YOUR ANSWERS">
    </div>
    </div>
`,

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
