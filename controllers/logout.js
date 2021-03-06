angular.module('WebrtcApp')
  .controller('LogoutCtrl', function($location, $auth, toastr, $cookieStore, $scope) {
         $cookieStore.put('authentication', false);
         $scope.isAuthenticated = $cookieStore.get('authentication');
       //if (!$auth.isAuthenticated) { return; }
    $auth.logout()
      .then(function() {
        //toastr.info('You have been logged out');
        $location.path('/login');
      });
  });