'use strict';

var myApp = angular.module('myApp');

myApp.config(function($stateProvider) {
  //
  // Now set up the states
  $stateProvider
    .state('about', {
      url: "/about",
      templateUrl: "app/components/about/about.html",
      controller: 'AboutController'
    });
});