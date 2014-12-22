angular.module('evancodes.main', [])


.controller('MainController', function($http, $scope, $rootScope, $location, $stateParams) {
	$scope.data = "SOMETHING"
	$scope.getPosts = function() {
		console.log('TESTINGSF((((((((((((((()*)(**(*)*()*()')
		return $http({
		  method: 'GET',
		  //TODO: Dynamically update username, and display at top of dashboard page
		  url: 'https://brilliant-torch-8757.firebaseio.com'
		})
		.then(function(res, err) {
			if (err) {
				console.log('ERROR', err)
			}
			console.log('RESULTS', res.data)
		})
	}


	$scope.getPosts();
})