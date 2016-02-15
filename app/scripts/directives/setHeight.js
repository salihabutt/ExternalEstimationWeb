'use strict';

angular.module('externalEstimationWebApp')
	.directive('setHeight', function () {
		return {
			restrict: 'A',
			link: function (scope, iElement) {
				var totalHeight = $(window).height();
				totalHeight = totalHeight - 50;
				$(iElement).height(totalHeight);
			}
		};
});