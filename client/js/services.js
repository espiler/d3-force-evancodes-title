angular.module('evancodes.services', [])

.factory('Main', function ($http, $location, $window) {
  //getPost() if post exists, else if new post, don't
  var getAllPosts = function (successCallback) {
    var ref = new Firebase("https://brilliant-torch-8757.firebaseio.com/posts");
    ref.on("value", function(snapshot) {
      return(successCallback(snapshot.val()))
      return(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

  return {
    getAllPosts: getAllPosts
  };

})
