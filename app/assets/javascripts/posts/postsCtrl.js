(function() {
  var postsCtrl = function($scope, $stateParams, posts) {
    $scope.post = posts.posts[$stateParams.id];

    $scope.addComment = function() {
      if(!$scope.body || $scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    }
  }

  postsCtrl.$inject = ['$scope', '$stateParams', 'posts'];

  angular.module('flapperNews')
    .controller('PostsCtrl', postsCtrl);
})();
