'use strict';

angular.module('efinanceMongodbApp')
  .controller('MainCtrl', function ($scope, $http, expenseFactory,incomeFactory) {
    $scope.awesomeThings = [];

    $scope.expenses = expenseFactory.query(function (incomes) {
      // console.log(incomes); //here you should see the data
      //$scope.income = _.where(income, {id: $stateParams._id});
      $scope.projects =0;
      $scope.travel = 0;
      $scope.resources = 0;
      $scope.utilities = 0;
      $scope.marketing = 0;
      $scope.other = 0;




      for(var i=0; i<$scope.expenses.length;i++){

        switch ($scope.expenses[i].category) {
          case "Projects":
            // $scope.incomes[i].category = "Consultation";
            // incomeData[0].value+=$scope.incomes[i].amount;
            $scope.projects+=$scope.expenses[i].amount;
            //console.log("consultation");
            break;
          case "Travel":
            // $scope.incomes.category = "Intensive Session";
            // incomeData[1].value+=$scope.incomes[i].amount;
            $scope.travel+=$scope.expenses[i].amount;
            //console.log("intensive "+$scope.incomes[i].amount);
            // console.log("intensive scope is " + $scope.intensives);
            break;
          case "Resources":
            //$scope.incomes.category = "Media Sales";
            //incomeData[2].value+=$scope.incomes[i].amount;
            $scope.resources+=$scope.expenses[i].amount;
            //console.log("media "+$scope.incomes[i].amount);
            break;
          case "Utilities":
            //$scope.incomes.category = "Seminars";
            // incomeData[3].value+=$scope.incomes[i].amount;
            $scope.utilities+=$scope.expenses[i].amount;
            //console.log("seminar");
            break;
          case "Marketing":
            //$scope.incomes.category = "Seminars";
            // incomeData[3].value+=$scope.incomes[i].amount;
            $scope.marketing+=$scope.expenses[i].amount;
            //console.log("seminar");
            break;
          case "Other":
            //$scope.incomes.category = "Seminars";
            // incomeData[3].value+=$scope.incomes[i].amount;
            $scope.other+=$scope.expenses[i].amount;
            //console.log("seminar");
            break;
        }
      }

//after calculation has been done to querry the data, display it!
      $scope.expenseData = [
        {
          value:  $scope.projects,
          color: '#F7464A',
          highlight: '#FF5A5E',
          label: 'Projects'
        },
        {
          value: $scope.travel,
          color: '#FDB45C',
          highlight: '#FFC870',
          label: 'Travel'
        },
        {
          value: $scope.resources,
          color: '#46BFBD',
          highlight: '#5AD3D1',
          label: 'Resources'
        },
        {
          value: $scope.utilities,
          color: '#527ACC',
          highlight: '#6387D1',
          label: 'Utilities'
        },
        {
          value: $scope.marketing,
          color: '#794BA9',
          highlight: '#865DB2',
          label: 'Marketing'
        },
        {
          value:  $scope.other,
          color: '#479F47',
          highlight: '#59A959',
          label: 'Other'
        }
      ];
    });






    $scope.incomes = incomeFactory.query(function (incomes) {
     // console.log(incomes); //here you should see the data
      //$scope.income = _.where(income, {id: $stateParams._id});
      $scope.intensives =0;
      $scope.media = 0;
      $scope.consultations = 0;
      $scope.seminars = 0;




      for(var i=0; i<$scope.incomes.length;i++){

        switch ($scope.incomes[i].category) {
          case "Consultation":
            // $scope.incomes[i].category = "Consultation";
           // incomeData[0].value+=$scope.incomes[i].amount;
            $scope.consultations+=$scope.incomes[i].amount;
            //console.log("consultation");
            break;
          case "Intensive Session":
            // $scope.incomes.category = "Intensive Session";
           // incomeData[1].value+=$scope.incomes[i].amount;
            $scope.intensives+=$scope.incomes[i].amount;
            //console.log("intensive "+$scope.incomes[i].amount);
           // console.log("intensive scope is " + $scope.intensives);
            break;
          case "Media Sales":
            //$scope.incomes.category = "Media Sales";
            //incomeData[2].value+=$scope.incomes[i].amount;
            $scope.media+=$scope.incomes[i].amount;
            //console.log("media "+$scope.incomes[i].amount);
            break;
          case "Seminars":
            //$scope.incomes.category = "Seminars";
           // incomeData[3].value+=$scope.incomes[i].amount;
            $scope.seminars+=$scope.incomes[i].amount;
            //console.log("seminar");
            break;
        }
      }
//after calculation has been done to querry the data, display it!
      $scope.incomeData = [
        {
          value: $scope.consultations,
          color: '#F7464A',
          highlight: '#FF5A5E',
          label: 'Consultation'
        },
        {
          value: $scope.intensives,
          color: '#FDB45C',
          highlight: '#FFC870',
          label: 'Intensive Sessions'
        },
        {
          value: $scope.media,
          color: '#46BFBD',
          highlight: '#5AD3D1',
          label: 'Media Sales'
        },
        {
          value:  $scope.seminars,
          color: '#794BA9',
          highlight: '#865DB2',
          label: 'Seminars'
        }

      ];
    });


  }

);
