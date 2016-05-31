angular.module('WebrtcApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr, $state,$cookieStore, $http,$rootScope) {
    $scope.identifiants = {};
    $rootScope.isAuthenticated = false;
    $scope.auth = function(){
        $.post("/login", $scope.identifiants).done(function(data){
            var d = JSON.parse(data);
             $cookieStore.put('authentication', d.isAuthenticated);
             $rootScope.isAuthenticated = $cookieStore.get('authentication');
                if( $scope.isAuthenticated){ 
                    console.log($scope.isAuthenticated);
                    $location.path('/home'); 
                    //toastr.info('You have been login');
            }
    })
    }
});