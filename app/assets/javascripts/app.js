'use strict';
angular.module('flapperNews', ['ui.router', 'templates'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        allPosts: ['Post', function(Post) {
          return Post.getAll();
        }]
      }
    }).
    state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl',
      resolve: {
        currentPost: ['$stateParams', 'Post', function($stateParams, Post) {
          return Post.get($stateParams.id);
        }]
      }
    });

  $urlRouterProvider.otherwise('home');
}]);
