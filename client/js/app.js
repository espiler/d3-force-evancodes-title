angular.module('evancodes', [
  'evancodes.post',
  'evancodes.about',
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');
  
  $httpProvider.interceptors.push('httpRequestInterceptor');

  $stateProvider
    .state('home', {
      templateUrl: '../templates/main.html',
      controller: 'MainController',
      url: '/index.html'
    })

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

})