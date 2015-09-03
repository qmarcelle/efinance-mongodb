'use strict';

angular.module('efinanceMongodbApp')
  .factory('expenseFactory',function($resource){
    return $resource('api/expenses/');
  })
  .factory('singleExpense',function($resource){
    return $resource('api/expenses/:id',null,
      {
        'update': { method:'PUT' }
      },
      {
        'delete': { method:'DELETE' }
      });
  })
  .controller('ExpenseCtrl', function ($scope,$http,expenseFactory,$mdDialog,singleExpense) {
    $scope.newExpense = '';

    /*$scope.selectedId = '1';*/

    $scope.setSelected=function(id){
      // $scope.selectedId = id;
      $scope.expense = singleExpense.get({id:id});
    };



    $scope.expenses = expenseFactory.query();

    $scope.addExpense = function() {

      var description = $scope.newExpense.description;
      var category = $scope.newExpense.category;
      var date = $scope.newExpense.date;
      var amount = $scope.newExpense.amount;

      expenseFactory.save($scope.newExpense);
      $mdDialog.hide();
      $scope.newExpense = '';
      $scope.expenses = expenseFactory.query();

    };


    $scope.editExpense = function() {
      singleExpense.update({id:$scope.expense._id},$scope.expense);
      $mdDialog.hide();
      $scope.expenses = expenseFactory.query();
      $scope.expense = '';
    };


//delete expense
    $scope.deleteExpense = function(id) {
      //delete the expense
      singleExpense.delete({id:id});
      //reload the expenses
      $scope.expenses = expenseFactory.query();
    };

//show add modal
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
    };
    $scope.showEdit = function(ev) {
      $mdDialog.show({
        controller: function(){this.parent = $scope;},
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'components/modal/editexpensemodal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
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
    //change below to delete confirm
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
  });
