'use strict';

angular.module('efinanceMongodbApp')
  .directive('expenseCard', function () {
    return {
      templateUrl: 'app/directives/expenseCard/expenseCard.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      },
      controller: function($scope){

      }
    };
  });
