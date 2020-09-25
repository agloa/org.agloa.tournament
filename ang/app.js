(function (angular) {
    // Declare a list of dependencies.
    angular.module('tournament', ['ngRoute']);
    angular.module('tournament').value('version', '0.1');

    angular.module('tournament').config(['$routeProvider', ($routeProvider) => {

        // Configure the module route(s)
        // Use this method to configure services by injecting their providers, e.g. for adding routes to the $routeProvider.
        $routeProvider
            .when('/tournament/dashboard/:userId?', {
                template: '<trn-dashboard></trn-dashboard>'
            })
            .when('/tournament/billingOrganizations/:userId?', {
                template: '<trn-billingorganizations></trn-billingorganizations>'
            })
            .when('/tournament/person/:personId', {
                template: '<trn-person></trn-person>'
            })
            .when('/tournament/address/:addressId', {
                template: '<trn-address></trn-address>'
            })
            .when('/tournament/person/address/:personId', {
                template: '<trn-address></trn-address>'
            })
            .when('/tournament/phone/:phoneId', {
                template: '<trn-phone></trn-phone>'
            })
            .when('/tournament/person/phone/:personId', {
                template: '<trn-phone></trn-phone>'
            })
            .when('/tournament/email/:emailId', {
                template: '<trn-email></trn-email>'
            })
            .when('/tournament/person/email/:personId', {
                template: '<trn-email></trn-email>'
            })
            .when('/tournament', {
                template: '<trn-dashboard></trn-dashboard>'
            })
            .otherwise({
                template: '<trn-dashboard></trn-dashboard>'
            })
    }]);

})(angular);