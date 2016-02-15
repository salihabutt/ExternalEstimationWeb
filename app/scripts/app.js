'use strict';

/**
 * @ngdoc overview
 * @name externalEstimationWebApp
 * @description
 * # externalEstimationWebApp
 *
 * Main module of the application.
 */
angular
  .module('externalEstimationWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
	  $stateProvider
	  .state('main', {
		    url: '/',
		    templateUrl: 'views/main.html',
		    abstract: true
		  })
		  .state('home', {
		        url: '/home',
		        templateUrl:'views/home.html'
		  })
		  .state('questions', {
			  url: 'questions',
			  parent: 'main',
			  views: {
				  'content': {
					templateUrl: 'views/questions.html'
				  }
			  }
		  });
	  $urlRouterProvider.otherwise('home');
  });
