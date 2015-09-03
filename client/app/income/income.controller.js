'use strict';

angular.module('efinanceMongodbApp')
  .controller('IncomeCtrl', function ($scope,$http) {
    $scope.message = 'Hello';



    $scope.incomes = [{
      id: 1,
      description: 'Simple title1',
      category: 'Sample content...',
      permalink: 'simple-title1',
      amount: '25000',
      dateOfTransact: '2012-04-04'
    }, {
      id: 2,
      description: 'Simple title1',
      category: 'Sample content...',
      permalink: 'simple-title1',
      amount: '25000',
      dateOfTransact: '2012-04-04'
    }, {
      id: 3,
      description: 'Simple title1',
      category: 'Sample content...',
      permalink: 'simple-title1',
      amount: '25000',
      dateOfTransact: '2012-04-04'
    }, {
      id: 4,
      description: 'Simple title1',
      category: 'Sample content...',
      permalink: 'simple-title1',
      amount: '25000',
      dateOfTransact: '2012-04-04'
    },
      {
        id: 5,
        description: 'Simple title1',
        category: 'Sample content...',
        permalink: 'simple-title1',
        amount: '25000',
        dateOfTransact: '2012-04-04'
      },
      {
        id: 6,
        description: 'Simple title1',
        category: 'Sample content...',
        permalink: 'simple-title1',
        amount: '25000',
        dateOfTransact: '2012-04-04'
      }
    ];



    $http.get('/api/incomes').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/incomes', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/incomes/' + thing._id);
    };


  });
