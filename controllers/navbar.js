angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth, $http, $cookieStore ) {
    $http.get('/login').success(function(data){
        $cookieStore.put('authentication', data.isAuthenticated);
        $scope.isAuthenticated = function(){ return  $cookieStore.get('authentication');};
       })
  });