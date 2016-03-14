'use strict';

var myApp = angular.module('myApp');

myApp.config(function($stateProvider) {
  //
  // Now set up the states
  $stateProvider
    .state('blog', {
      url: "/blog",
      templateUrl: "app/components/blog/blog.html",
      controller: 'BlogController'
    });
});