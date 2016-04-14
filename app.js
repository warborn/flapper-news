'use strict';
angular.module('flapperNews', []);

(function() {
  var mainCtrl = function($scope) {
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 10},
      {title: 'post 4', upvotes: 1},
      {title: 'post 5', upvotes: 8},
      {title: 'post 6', upvotes: 3}
    ];

    $scope.addPost = function(title) {
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        link: $scope.link
      });
      $scope.title = "";
      $scope.link = "";
    }

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }

  mainCtrl.$inject = ['$scope'];

  angular.module('flapperNews')
    .controller('MainCtrl', mainCtrl);
})();
