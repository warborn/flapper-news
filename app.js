'use strict';
angular.module('flapperNews', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    }).
    state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);

(function() {
  var mainCtrl = function($scope, posts) {
    $scope.posts = posts.posts;

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

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }

  mainCtrl.$inject = ['$scope', 'posts'];

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

  var postsFactory = function() {
    return {
      posts: [{
        title: "Angular Rails",
        link: "https://thinkster.io/angular-rails",
        upvotes: 0,
        comments: []
      }]
    };
  }

  angular.module('flapperNews')
    .controller('MainCtrl', mainCtrl)
    .controller('PostsCtrl', postsCtrl)
    .factory('posts', postsFactory)
})();
