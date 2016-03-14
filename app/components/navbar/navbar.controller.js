myApp.controller('NavbarCtrl', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.name = 'Huang Song';
    
    // keep track of current time
    var now = new Date();
    $scope.curTime = "";    //now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
    
    function updateTime() {
        now = new Date(now.getTime() + 1000);
        
        if(!$scope.$$phase) {
            //$digest or $apply:
            // setInterval call of updateTime() is NOT in digest loop
            $scope.$apply(function() {
                $scope.curTime = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();              
            });
        } else {
            // Direct call of updateTime() is already in digest loop
            $scope.curTime = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
        }
    }
    
    updateTime();
    // Update time every second
    setInterval(updateTime, 1000);
    
    /*
    $scope.$watch('curTime', function(newValue, oldValue) {   
        console.log('old: ' + oldValue);
        console.log('new: ' + newValue);
    });
    */
}]);