'use strict';

(function() {
  var authCtrl = function($scope, $state, Auth) {
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
        });
    };
  };

  authCtrl.$inject = ['$scope', '$state', 'Auth'];

  angular.module('flapperNews')
    .controller('AuthCtrl', authCtrl);
})();
