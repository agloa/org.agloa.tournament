(function(angular) {
  // Declare a list of dependencies.
  angular.module('tournament', ['ngRoute']);

  angular.module('tournament').config(['$routeProvider', function($routeProvider) {

  // Configure the module route(s)
  // Use this method to configure services by injecting their providers, e.g. for adding routes to the $routeProvider.
  $routeProvider.when('/tournament', {
    template: '<dashboard></dashboard>'
  })
  .when('/tournament/dashboard/:userId?', {
    template: '<dashboard></dashboard>'
  })
  .when('/tournament/person/:personId', {
    template: '<person></person>'
  })
  .when('/tournament/address/:addressId', {
    template: '<address></address>'
  })
  .when('/tournament/person/address/:personId', {
    template: '<address></address>'
  })
  .when('/tournament/phone/:phoneId', {
    template: '<phone></phone>'
  })
}]);

})(angular);
