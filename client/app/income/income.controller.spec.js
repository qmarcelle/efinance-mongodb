'use strict';

describe('Controller: IncomeCtrl', function () {

  // load the controller's module
  beforeEach(module('efinanceMongodbApp'));

  var IncomeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IncomeCtrl = $controller('IncomeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
