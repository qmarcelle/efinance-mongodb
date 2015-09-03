'use strict';

angular.module('efinanceMongodbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('expense', {
        url: '/expense',
        templateUrl: 'app/expense/expense.html',
        controller: 'ExpenseCtrl'
      });
  });