(function() {
  var postsCtrl = function($scope, Post, currentPost) {
    $scope.post = currentPost;

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

  postsCtrl.$inject = ['$scope', 'Post', 'currentPost'];

  angular.module('flapperNews')
    .controller('PostsCtrl', postsCtrl);
})();
