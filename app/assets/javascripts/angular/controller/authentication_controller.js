app.controller('AuthenticationCntrol', ['$scope', '$rootScope', 'Auth', '$location', function($scope, $rootScope, Auth, $location){

  $scope.signIn = function() {
    Auth.login($scope.signin).then(function(user) {
        $location.path( "/profile" )
    }, function(error) {
        alert(error.message)
    });
  }

  $scope.register = function(){
    Auth.register($scope.signup).then(function(response) {
      $location.path( "/profile" )
    }, function(error) {
      errors = []
      $.each(error.data.errors,function(k, v){
        concat = []
        $.each(v, function(i, v){concat.push(k + ' '+ v)})
        errors.push(concat)
      })
      alert(errors)
    });
  }

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function(response) {
        User.social_auth({token: response.access_token, provider:  provider}, function(response){
          $location.path('/profile');
        })
      })
      .catch(function(error) {
        if (error.message) {
          // Satellizer promise reject error.
          console.log(error.message);
        } else if (error.data) {
          // HTTP response error from server
          console.log(error.data.message, error.status);
        } else {
          console.log(error);
        }
      });
  };


}])
