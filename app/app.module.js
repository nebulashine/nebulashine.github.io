'use strict';

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

});


myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.greet_message = 'BIG HELLO FROM HUANG!';
    
    $timeout(function() {
        
        $scope.greet_message = '';
        
    }, 3000);
    
}]);




