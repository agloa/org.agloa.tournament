
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
            .when('/tournament/person/:contactId', {
                template: '<trn-person></trn-person>'
            })
            .when('/tournament/organization/:contactId', {
                template: '<trn-organization></trn-organization>'
            })
            .when('/tournament/person/relationships/:contactId?', {
                template: '<trn-relationships></trn-relationships>'
            })
            .when('/tournament', {
                template: '<trn-dashboard></trn-dashboard>'
            })
            .when('/tournament/groupMembers/:id?', {
                template: '<trn-group-members></trn-group-members>'
            })
            .when('/tournament/groupMembers/group/:groupId?', {
                template: '<trn-group-members></trn-group-members>'
            })
            .when('/tournament/groupMembers/person/:personId?', {
                template: '<trn-group-members></trn-group-members>'
            })
            .otherwise({
                template: '<trn-dashboard></trn-dashboard>'
            })
    }]);

})(angular);