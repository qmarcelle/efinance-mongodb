'use strict';

angular.module('efinanceMongodbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('income', {
        url: '/income',
        templateUrl: 'app/income/income.html',
        controller: 'IncomeCtrl'
      });
  });