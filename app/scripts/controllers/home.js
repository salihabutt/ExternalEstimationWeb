'use strict';

/**
 * @ngdoc function
 * @name externalEstimationWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the externalEstimationWebApp
 */
angular.module('externalEstimationWebApp')
  .controller('HomeCtrl', function ($state, questionService) {
  
  	var self = this,
  	init = function () {
  		questionService.getQuestions().then(function(response){
  			cosole.log(response);
  		});
  	};

  	self.gotoMain = function () {
  		$state.go('questions');
  	};
init();
  	
  });
