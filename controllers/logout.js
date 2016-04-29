angular.module('MyApp')
  .controller('LogoutCtrl', function($location, $auth, toastr, $cookieStore, $scope) {
         $cookieStore.put('authentication', false);
         $scope.isAuthenticated = function() {return $cookieStore.get('authentication');}
     
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        toastr.info('You have been logged out');
        $location.path('/');
      });
  });