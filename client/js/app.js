angular.module('evancodes', [
	'evancodes.main',
	'evancodes.posts',
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
    .state('posts', {
      templateUrl: 'client/templates/post.html',
      controller: 'PostController',
      url: '/posts/:id',
      // animation: {
      //   enter: 'shrink-in',
      //   leave: 'grow-out',
      //   ease: 'back',
      //   speed: 400
      // }
    })
    .state('makeNewPostShindig', {
      templateUrl: 'client/templates/newPost.html',
      controller: 'NewPostController',
      url: '/makeNewPostShindig'
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