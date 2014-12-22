angular.module('evancodes', [
	'evancodes.main',
	'ui.router'
])

.config(function($urlRouterProvider, $stateProvider) {  
  $urlRouterProvider.otherwise('/main');
  $stateProvider
    .state('main', {
      templateUrl: 'client/templates/main.html',
      controller: 'MainController',
      url: '/main'
    })
})

// .factory('httpRequestInterceptor', ['$q', '$location', '$rootScope', function($q, $location) {
//   return {
//     'responseError': function(rejection) {
//       if (rejection.status === 403) {
//         $location.path('/');
//         return $q.reject(rejection);
//       }
//   	}
//   }
// }]);



    // .state('edit', {
    //   templateUrl: 'app/edit/edit.html',
    //   controller: 'EditController',
    //   url: '/edit'
    // })

    // .state('home', {
    // 	templateUrl: 'app/dashboard/dashboard.html',
    // 	controller: 'DashboardController',
    // 	url: '/dashboard'
    // })