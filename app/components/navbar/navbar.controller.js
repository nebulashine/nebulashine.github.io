myApp.controller('NavbarCtrl', ['$scope', function($scope) {
    //------------------------------------------
    // variable defitions
    //------------------------------------------
    $scope.name = 'Huang Song';
    $scope.greeting = 'Good morning!';
    
    // keep track of current time
    $scope.curTime = ""; 
    var now = new Date();
    
    
    //------------------------------------------
    // funcion calls
    //------------------------------------------
    updateTime();
    // Update time every second
    setInterval(updateTime, 1000);
    
    
    //------------------------------------------
    // funcion implementations
    //------------------------------------------
    function updateGreeting(hour) {
        if ( (hour >= 0) && (hour < 12) ) {
            $scope.greeting = 'Good morning!';
        } else if ( (hour >= 12) && (hour < 19) ){
            $scope.greeting = 'Good afternoon!';
        } else {
            $scope.greeting = 'Good evening!';
        }
    }
    
    function updateTime() {
        now = new Date(now.getTime() + 1000);
        
        if(!$scope.$$phase) {
            //$digest or $apply:
            // setInterval call of updateTime() is NOT in digest loop
            $scope.$apply(function() {
                $scope.curTime = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();              
            });
            
            // Update greeting
            updateGreeting(now.getHours());
        } else {
            // Direct call of updateTime() is already in digest loop
            $scope.curTime = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();

            // Update greeting
            updateGreeting(now.getHours());
        }
    }
    

}]);