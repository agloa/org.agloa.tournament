describe('DashboardController', function() {

    beforeEach(module('tournament'));
  
    it('should create a `phones` model with 3 phones', inject(function($controller) {
      var scope = {};
    //   var ctrl = $controller('DashboardController', {$scope: scope});
  
      expect(scope.phones.length).toBe(3);
    }));
  
  });