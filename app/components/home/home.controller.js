var myApp = angular.module('myApp');

myApp.controller('HomeController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.nameInit = 'S.H.';
    
    $scope.msg_1 = 'This is Home Page!';
    $scope.msg_2 = 'Hello!';
    $scope.msg_3 = 'Big HELLO!';
    
}]);
