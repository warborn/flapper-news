(function() {

  var postFactory = function($http) {

    var factory = {};

    factory.getAll = function() {
      return $http.get('/posts')
        .then(function(response) {
          return response.data.posts;
      });
    };

    factory.get = function(id) {
      return $http.get('/posts/' + id)
        .then(function(response) {
          return response.data.post;
        });
    };

    factory.create = function(post) {
      return $http.post('/posts', post)
        .then(function(response) {
          return response.data.post;
      });
    };

    factory.upvote = function(post) {
      $http.put('/posts/' + post.id + '/upvote')
        .then(function() {
          post.upvotes += 1;
      });
    };

    factory.createComment = function(post, comment) {
      return $http.post('/posts/' + post.id + '/comments', comment)
        .then(function(response) {
          return response.data.comment;
        });
    };

    factory.upvoteComment = function(post, comment) {
      return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote')
        .then(function() {
          comment.upvotes += 1;
      });
    }

    return factory;
  };

  postFactory.$inject = ['$http'];

  angular.module('flapperNews')
    .factory('Post', postFactory);
})();
