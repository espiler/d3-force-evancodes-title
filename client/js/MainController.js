angular.module('evancodes.main', [])


.controller('MainController', function(Main, $http, $scope) {
	$scope.data = "SOMETHING"
	$scope.posts = []

	$scope.update = function() {
		console.log('updating.......')
		console.log($('.snippetBody').text());
	}

	$scope.getAllPosts = function() {
		var ref = new Firebase("https://brilliant-torch-8757.firebaseio.com/posts");
		ref.on("value", function(snapshot) {
			var posts = snapshot.val();
			for (var post in posts) {
				$scope.posts.push(posts[post]);
			}
			$scope.posts.sort(function(a,b) { return b.datePosted - a.datePosted; })
			console.log($scope.posts);
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
	}

	$scope.getAllPosts();

})