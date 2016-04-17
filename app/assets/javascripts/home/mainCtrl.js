(function() {
  var mainCtrl = function($scope, Post, allPosts) {
    $scope.posts = allPosts;

    $scope.addPost = function(title) {
      if(!$scope.title || $scope.title === '') { return; }
      Post.create({
        title: $scope.title,
        link: $scope.link
      }).then(function(data) {
        $scope.posts.push(data);
        $scope.title = "";
        $scope.link = "";
      });
    }

    $scope.incrementUpvotes = function(post) {
      Post.upvote(post);
    }
  }

  mainCtrl.$inject = ['$scope', 'Post', 'allPosts'];

  angular.module('flapperNews')
    .controller('MainCtrl', mainCtrl)
})();
