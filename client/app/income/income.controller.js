'use strict';

angular.module('efinanceMongodbApp').factory('incomeFactory',function($resource){
  return $resource('api/incomes/');
})
  .factory('singleIncome',function($resource){
    return $resource('api/incomes/:id',null,
      {
        'update': { method:'PUT' }
      },
      {
        'delete': { method:'DELETE' }
      });
  })
  .controller('IncomeCtrl', function ($scope,$http,incomeFactory,$mdDialog,singleIncome) {
    $scope.newIncome = '';

    /*$scope.selectedId = '1';*/

    $scope.setSelected=function(id){
      // $scope.selectedId = id;
      $scope.income = singleIncome.get({id:id});
    };



    $scope.incomes = incomeFactory.query();

    $scope.addIncome = function() {

      var description = $scope.newIncome.description;
      var category = $scope.newIncome.category;
      var date = $scope.newIncome.date;
      var amount = $scope.newIncome.amount;

      incomeFactory.save($scope.newIncome);
      $mdDialog.hide();
      $scope.newIncome = '';
      $scope.incomes = incomeFactory.query();

    };


    $scope.editIncome = function() {
      singleIncome.update({id:$scope.income._id},$scope.income);
      $mdDialog.hide();
      $scope.incomes = incomeFactory.query();
      $scope.income = '';
    };


//delete expense
    $scope.deleteIncome = function(id) {
      //delete the expense
      singleIncome.delete({id:id});
      //reload the expenses
      $scope.incomes = incomeFactory.query();
    };

//show add modal
    $scope.addIncomeModal = function(ev) {
      $mdDialog.show({
        /*controller: modalController,*/
        //controller: this,
        controller: function(){this.parent = $scope;},
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'components/modal/addincomemodal.html',
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
        templateUrl: 'components/modal/editincomemodal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
    };
  });
