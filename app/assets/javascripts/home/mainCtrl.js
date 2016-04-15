(function() {
  var mainCtrl = function($scope, Post) {
    $scope.posts = Post.posts;

    $scope.addPost = function(title) {
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      $scope.title = "";
      $scope.link = "";
    }

    $scope.incrementUpvotes = function(record) {
      record.upvotes += 1;
    }
  }

  mainCtrl.$inject = ['$scope', 'Post'];

  angular.module('flapperNews')
    .controller('MainCtrl', mainCtrl)
})();
