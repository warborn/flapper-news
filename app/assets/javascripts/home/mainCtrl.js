(function() {
  var mainCtrl = function($scope, Post) {
    $scope.posts = Post.posts;

    $scope.addPost = function(title) {
      if(!$scope.title || $scope.title === '') { return; }
      Post.create({
        title: $scope.title,
        link: $scope.link
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
