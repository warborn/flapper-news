(function() {

  var postFactory = function($http) {

    var factory = {};
    factory.posts = [];

    factory.getAll = function() {
      return $http.get('/posts')
        .then(function(response) {
          angular.copy(response.data.posts, factory.posts);
          // factory.posts = response.data.posts;
      });
    };

    factory.create = function(post) {
      return $http.post('/posts', post)
        .then(function(response) {
          factory.posts.push(response.data.post);
      });
    };

    return factory;
  };

  postFactory.$inject = ['$http'];

  angular.module('flapperNews')
    .factory('Post', postFactory);
})();
