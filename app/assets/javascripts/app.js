'use strict';
angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        security: ['$q', 'Auth', function($q, Auth) {
          return Auth.currentUser()
            .catch(function() {
              return $q.reject("Not Authorized");
          });
        }],
        allPosts: ['Post', function(Post) {
          return Post.getAll();
        }]
      }
    }).
    state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser()
          .then(function() {
            $state.go('home');
        });
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser()
          .then(function() {
            $state.go('home');
        });
      }]
    })
    .state('posts', {
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
}])
.run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error){
    console.log(error);
    if(error === 'Not Authorized'){
        $state.go('login');
    }
  });
});
