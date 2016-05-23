angular.module('WebrtcApp', ['ngResource', 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer', 'ngCookies'])
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('logout', {
        url: '/logout',
        templateUrl: '/views/login.html',
        controller: 'LogoutCtrl'
      });

    $urlRouterProvider.otherwise('/');
    $authProvider.loginUrl = '/login';

    $authProvider.facebook({
      clientId: '657854390977827'
    });
    $authProvider.google({
        url : '/auth/google',
        redirectUri: window.location.origin+'/home' || window.location.protocol + '//' + window.location.host+'/home',
        clientId: '293876046234-5pqvvnu5a8nof25jf60jsq3rhqf6kkbq.apps.googleusercontent.com',
        display: 'popup',
        type: '2.0',
        popupOptions: { width: 452, height: 633 }
    });
    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }
    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }
  });
