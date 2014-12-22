angular.module('evancodes.newPost', [])


.controller('NewPostController', function($scope, $rootScope, $location, $stateParams) {

	$scope.newPost = function(title, content) {
		var postsRef = new Firebase("https://brilliant-torch-8757.firebaseio.com/posts");
		// var postsRef = ref.child("posts");
		postsRef.push({
		  title: title,
		  content: content,
		  url: title.toLowerCase().split(' ').join("-")
		});
	}
	
})