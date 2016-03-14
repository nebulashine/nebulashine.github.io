'use strict';

var myApp = angular.module('myApp');

myApp.config(function($stateProvider) {
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "app/components/home/home.html",
      controller: 'HomeController'
    });
});