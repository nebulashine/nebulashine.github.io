'use strict';

var myApp = angular.module('myApp');

myApp.config(['$stateProvider', 'uiGmapGoogleMapApiProvider', function($stateProvider, uiGmapGoogleMapApi) {
//myApp.config(['$stateProvider', function($stateProvider) {
  //
  // Now set up the states
  $stateProvider
    .state('about', {
      url: "/about",
      templateUrl: "app/components/about/about.html",
      controller: 'AboutController'
    });
    
    uiGmapGoogleMapApi.configure({
        //key: 'my-api-key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
    
}]);