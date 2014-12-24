angular.module('evancodes.posts', [])

.controller('PostController', function($scope, $rootScope, $location, $window) {
	var url = window.location.href;
	var postUrl = url.toString().split("#/posts/")[1]
	var getSinglePost = function() {
		var ref = new Firebase("https://brilliant-torch-8757.firebaseio.com/posts/" + postUrl);
		ref.on("value", function(snapshot) {
			if (snapshot.val() === null) { $scope.notFound = true; }
			else {
				var currentPost = snapshot.val();
				$scope.post = currentPost;
				console.log($scope.post);
				$('.snippetTitle').text($scope.post.title);
				$('.snippetBody').html($scope.post.content);
			}
		})
	}
	getSinglePost();
})