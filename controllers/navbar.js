angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth, $http, $cookieStore ) {
    $http.get('/auth').success(function(data){
        $cookieStore.put('authentication', data.isAuthenticated);console.log($cookieStore.get('authentication'));
           $scope.isAuthenticated = function(){ return  $cookieStore.get('authentication');};
       })
  });