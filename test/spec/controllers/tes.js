'use strict';

describe('Controller: TesCtrl', function () {

  // load the controller's module
  beforeEach(module('belajarAngularApp'));

  var TesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TesCtrl = $controller('TesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
