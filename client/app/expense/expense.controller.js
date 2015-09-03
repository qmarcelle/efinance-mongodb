'use strict';

angular.module('efinanceMongodbApp')
  .factory('expenseFactory',function($resource){
    return $resource('api/expenses');
  })
 /* .factory('singleExpense',function($resource){
    return $resource('api/expense/:id',null,
      {
        'update': { method:'PUT' }
      });
  })*/
  .controller('ExpenseCtrl', function ($scope,$http,expenseFactory,$mdDialog) {
    $scope.newExpense = '';



    $scope.expenses = expenseFactory.query();

    $scope.addExpense = function() {

      var description = $scope.newExpense.description;
      var category = $scope.newExpense.category;
      var date = $scope.newExpense.date;
      var amount = $scope.newExpense.amount;

      expenseFactory.save($scope.newExpense);
      $mdDialog.hide();
      $scope.expenses = expenseFactory.query();

    };

    $scope.editExpense = function(/*description,category,date,amount*/) {

      var description = $scope.newExpense.description;
      var category = $scope.newExpense.category;
      var date = $scope.newExpense.date;
      var amount = $scope.newExpense.amount;

      expenseFactory.save($scope.newExpense);
      $mdDialog.hide();
      $scope.expenses = expenseFactory.query();

    };



    $scope.deleteExpense = function(id) {
      //expenseFactory.remove('/api/expenses/' + id);
      $http.delete('/api/expenses/' + id);

      $scope.expenses = expenseFactory.query();

    };


    $scope.showAdd = function(ev) {
      $mdDialog.show({
        /*controller: modalController,*/
        //controller: this,
        controller: function(){this.parent = $scope;},
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'components/modal/addexpensemodal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
       clickOutsideToClose:true
      })
        .then(function() {


          /*$scope.status = 'You said the information was "' + answer + '".';*/
        });
    };
    $scope.showEdit = function(ev) {
      $mdDialog.show({
        controller: function(){this.parent = $scope;},
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'components/modal/addexpensemodal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
        .then(function() {


          /*$scope.status = 'You said the information was "' + answer + '".';*/
        });
    };


  })
  /*modalController*/
  .controller('AppCtrl', function($scope, $mdDialog) {
    $scope.status = '  ';
    $scope.showAlert = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('This is an alert title')
          .content('You can specify some description text in here.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };
    $scope.showConfirm = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('Would you like to delete your debt?')
        .content('All of the banks have agreed to forgive you your debts.')
        .ariaLabel('Lucky day')
        .ok('Please do it!')
        .cancel('Sounds like a scam')
        .targetEvent(ev);
      $mdDialog.show(confirm).then(function() {
        $scope.status = 'You decided to get rid of your debt.';
      }, function() {
        $scope.status = 'You decided to keep your debt.';
      });
    };
    /*$scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: modalController,
        templateUrl: 'components/modal/addexpensemodal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };*/
  });
