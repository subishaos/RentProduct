var app = angular.module('RentProduct', ['ngRoute', 'templates', 'ngResource', 'Devise'])
app.config(['$routeProvider', '$locationProvider', '$resourceProvider', '$httpProvider', 'AuthProvider', function($routeProvider, $locationProvider, $resourceProvider, $httpProvider, AuthProvider) {
  $routeProvider
                .when('/login', {
                        templateUrl: 'login.html',
                        controller: 'AuthenticationCntrol',
                        title: 'RentProduct-Login'
                      })
                .when('/signup', {
                        templateUrl: 'signup.html',
                        controller: 'AuthenticationCntrol',
                        title: 'RentProduct-signup'
                      })
                .when('/profile', {
                        templateUrl: 'profile.html',
                        controller: 'ProfileCntrol',
                        title: 'RentProduct-UserProfile'
                      })

  $locationProvider.html5Mode(true)
  $resourceProvider.defaults.stripTrailingSlashes = false
}])
app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
        window.scrollTo(0, 0);
    });
}]);
