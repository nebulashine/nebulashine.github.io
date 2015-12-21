var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.greet_message = 'BIG HELLO FROM HUANG!';
    
    $timeout(function() {
        
        $scope.greet_message = '';
        
    }, 3000);
    
}]);




