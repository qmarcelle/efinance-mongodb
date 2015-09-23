'use strict';

describe('Directive: expenseCard', function () {

  // load the directive's module and view
  beforeEach(module('efinanceMongodbApp'));
  beforeEach(module('app/directives/expenseCard/expenseCard.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<expense-card></expense-card>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the expenseCard directive');
  }));
});