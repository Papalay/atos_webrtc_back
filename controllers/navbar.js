angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth, $http, $cookieStore ) {
    $http.post('/auth').success(function(data){
        $cookieStore.put('authentication', data.isAuthenticated);
        $scope.isAuthenticated = function(){ return  $cookieStore.get('authentication');};
       })
  });