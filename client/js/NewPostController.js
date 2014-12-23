angular.module('evancodes.newPost', [])


.controller('NewPostController', function($scope, $rootScope, $location, $stateParams) {

	$scope.newPost = function() {
		console.log("posting............")
		var ref = new Firebase("https://brilliant-torch-8757.firebaseio.com/posts");
		var postsRef = ref.child($scope.title.toLowerCase().split(' ').join("-"));
		postsRef.push({
		  title: $scope.title,
		  content: $scope.content,
		  datePosted: Date.now()
		});
	}

})