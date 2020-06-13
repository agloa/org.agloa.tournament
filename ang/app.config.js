'use strict';

angular.module('tournament').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  // Configure the module route(s)
  // Use this method to configure services by injecting their providers, e.g. for adding routes to the $routeProvider.
  $routeProvider.when('/dashboard/:userId?', {
    template: '<dashboard></dashboard>'
  })
  .when('/person/:personId', {
    template: '<person></person>'
  })
  .when('/address/:addressId', {
    template: '<address></address>'
  })
  .when('/phone/:phoneId', {
    template: '<phone></phone>'
  })

  .otherwise({redirectTo: '/'});
}]);