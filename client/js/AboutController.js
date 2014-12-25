angular.module('evancodes.about', [])

.controller('AboutController', function($scope, $rootScope, $location, $stateParams, $mdDialog) {
	$scope.alert = '';
  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'client/templates/about.html',
      targetEvent: ev,
    })
  };
})

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}