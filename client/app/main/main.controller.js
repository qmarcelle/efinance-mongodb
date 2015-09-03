'use strict';

angular.module('efinanceMongodbApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];



    //charts
    $scope.expenseData = [
      {
        value: 300,
        color: '#F7464A',
        highlight: '#FF5A5E',
        label: 'Download Sales'
      },
      {
        value: 500,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'In-Store Sales'
      },
      {
        value: 100,
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'Mail-Order Sales'
      }

    ];

    $scope.incomeData = [
      {
        value: 300,
        color: '#F7464A',
        highlight: '#FF5A5E',
        label: 'Consultations'
      },
      {
        value: 500,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'Intensives'
      },
      {
        value: 100,
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'Media Sales'
      },
      {
        value: 250,
        color: '#F7464A',
        highlight: '#FF5A5E',
        label: 'Seminars'
      }

    ];


    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
