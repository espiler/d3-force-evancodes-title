angular.module('evancodes.newPost', [])


.controller('NewPostController', function($scope, $rootScope, $location, $stateParams) {
	$scope.url = window.location.href
	$scope.data = 'datahere'
	$scope.newPost = function() {
		console.log("posting............")
		var ref = new Firebase("https://brilliant-torch-8757.firebaseio.com/posts");
		var url = $scope.title.toLowerCase().split(' ').join("-")
		var postsRef = ref.child(url);
		postsRef.push({
		  title: $scope.title,
		  content: $scope.content,
		  datePosted: Date.now(),
		  url: url
		});
	}

})