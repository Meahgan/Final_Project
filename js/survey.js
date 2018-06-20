"use strict";
{
  let survey = {
    template: `
    <p>I Would Use a Podcasts To..</p>
    <button>Learn</button> <button>Be Entertained</button>
    <p>Right Now, If I Could I Would..</p>
    <button>Go on a Trip</button> <button>Have Fun Staycation</button>
    <p>Do You Care More About...</p>
    <button>Health</button> <button>Money</button>
    <br>
    <br>
    <input type="button" ng-click="surveyAnswer()" value="SUBMIT YOUR SURVEY">`,
    controller: function(){

    }

  }
  angular
    .module("app")
    .component("survey", survey);
}
