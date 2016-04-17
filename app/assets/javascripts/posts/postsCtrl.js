(function() {
  var postsCtrl = function($scope, Post, currentPost) {
    $scope.post = currentPost;

    $scope.addComment = function() {
      if(!$scope.body || $scope.body === '') { return; }

      Post.createComment($scope.post, {
        body: $scope.body,
        author: 'user'
      }).then(function(data) {
        $scope.post.comments.push(data);
        $scope.body = '';
      });
    };

    $scope.incrementUpvotes = function(comment) {
      Post.upvoteComment($scope.post, comment);
    }
  }

  postsCtrl.$inject = ['$scope', 'Post', 'currentPost'];

  angular.module('flapperNews')
    .controller('PostsCtrl', postsCtrl);
})();
