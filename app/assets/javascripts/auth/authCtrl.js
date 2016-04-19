'use strict';

(function() {
  var authCtrl = function($scope, $state, Auth) {
    if($state.error) {
      console.log($state.error);
      $state.error = null;
    }
    $scope.login = function() {
      Auth.login($scope.user)
        .then(function() {
          $state.go('home');
      }).catch(function(response) {
        console.log(response.data.error);
      });
    };

    $scope.register = function() {
      Auth.register($scope.user)
        .then(function() {
          $state.go('home');
      }).catch(function(response) {
        console.log(response.data)
      });
    };
  };

  authCtrl.$inject = ['$scope', '$state', 'Auth'];

  angular.module('flapperNews')
    .controller('AuthCtrl', authCtrl);
})();
