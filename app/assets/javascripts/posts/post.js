(function() {
  var postFactory = function() {
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
    .factory('Post', postFactory);
})();
