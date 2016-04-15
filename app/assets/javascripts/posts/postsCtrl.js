(function() {
  var postsCtrl = function($scope, $stateParams, Post) {
    $scope.post = Post.posts[$stateParams.id];

    $scope.addComment = function() {
      if(!$scope.body || $scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    }

    $scope.incrementUpvotes = function(record) {
      record.upvotes += 1;
    }
  }

  postsCtrl.$inject = ['$scope', '$stateParams', 'Post'];

  angular.module('flapperNews')
    .controller('PostsCtrl', postsCtrl);
})();
