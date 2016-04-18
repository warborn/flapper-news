'use strict';

(function() {
  var navCtrl = function($scope, Auth, $state) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = function() {
      Auth.logout()
        .then(function() {
            $state.go('login');
      });
    }

    Auth.currentUser().then(function(user) {
      $scope.user = user;
    });

    $scope.$on('devise:new-registration', function(e, user) {
      $scope.user = user;
    });

    $scope.$on('devise:login', function(e, user) {
      $scope.user = user;
    });

    $scope.$on('devise-logout', function(e, user) {
      $scope.user = {};
    });

  };

  navCtrl.$inject = ['$scope', 'Auth', '$state'];

  angular.module('flapperNews')
    .controller('NavCtrl', navCtrl);
})();
