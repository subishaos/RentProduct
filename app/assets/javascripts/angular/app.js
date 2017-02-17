var app = angular.module('RentProduct', ['ngRoute', 'templates', 'ngResource'])
app.config(['$routeProvider', '$locationProvider', '$resourceProvider', '$httpProvider', function($routeProvider, $locationProvider, $resourceProvider, $httpProvider) {
  $routeProvider
                .when('/login', {
                        templateUrl: 'login.html',
                        controller: 'AuthenticationCntrol',
                        title: 'RentProduct-Login'
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
