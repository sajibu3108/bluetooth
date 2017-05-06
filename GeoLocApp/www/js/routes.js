angular.module('preparatec.routes', [])

	.config(function($stateProvider, $urlRouterProvider){
	  $stateProvider
		.state('home', {
			url: '/home',
			controller: 'HomeCtrl',
			templateUrl: 'templates/home.html'
		})
		.state('practice', {
			url: '/practice',
			controller: 'PracticeCtrl',
			templateUrl: 'templates/practice.html'
		})
		.state('challenge', {
			url: '/challenge',
			controller: 'ChallengeCtrl',
			templateUrl: 'templates/challenge.html'
		})

		.state('content', {
			url: '/content',
			controller: 'ContentCtrl',
			templateUrl: 'templates/content.html'
		})


		.state('about', {
			url: '/about',
			controller: 'AboutCtrl',
			templateUrl: 'templates/about.html'
		});
	  $urlRouterProvider.otherwise('/home');

	});
