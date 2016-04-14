'use strict';
angular.module('flapperNews', []);

(function() {
  var mainCtrl = function($scope) {
    $scope.test = 'Hello world!';
  }

  mainCtrl.$inject = ['$scope'];

  angular.module('flapperNews')
    .controller('MainCtrl', mainCtrl);
})();
