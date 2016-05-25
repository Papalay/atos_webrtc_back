angular.module('WebrtcApp')
  .controller('NavbarCtrl', function($scope, $auth, $http, $cookieStore, $location ) {
    $http.get('/login').success(function(data){
        $cookieStore.put('authentication', data.isAuthenticated);
        $scope.isAuthenticated = function(){ return  $cookieStore.get('authentication');};
        if( $scope.isAuthenticated()){
            $location.url('/home');
        }
       })
  });