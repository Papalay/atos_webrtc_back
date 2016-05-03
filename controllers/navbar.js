angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth, $http, $cookieStore ) {
    $http.get('/auth').success(function(data){
        console.log(data.isAuthenticated);
        $cookieStore.put('authentication', data.isAuthenticated);
        $scope.isAuthenticated = function(){ return  $cookieStore.get('authentication');};
       })
  });