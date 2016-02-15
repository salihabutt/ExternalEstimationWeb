'use strict';

angular.module('externalEstimationWebApp')
	.factory('questionService', function ($http, $q) {
		
		var questionServiceFactory = {};
		var _getQuestions = function () {
			var deferred = $q.defer();
			var request = {
				method: 'GET',
				url:'http://localhost:8080/ExternalEstimationServer/external-estimation/questions'
			};

	    	$http(request).success( function(response){
	    		deferred.resolve(response);
		  	}).error(function(err){
		  		deferred.reject(err);
		  	});
			

		  	return deferred.promise;
		};

		questionServiceFactory.getQuestions = _getQuestions;
		return questionServiceFactory;
	});