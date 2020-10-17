'use strict';

const accessRequestTemplateUrl = locationRoot() + '/tournament/accessRequest/accessRequest.template.html';
angular.module('tournament').component('trnAccessRequest', {
    templateUrl: accessRequestTemplateUrl,
    controller: ['billingOrganizations', '$scope',
        function AccessRequestController(organizations, $scope) {
            var self = this;
            self.showOrganization = false;
            $scope.newOrganizationValue = "newOrganization";

            organizations.getAll().then(
                // Success
                (result) => {
                    self.setOrganizations(result.values);
                },
                // Failure
                (error) => {
                    CRM.alert(ts('Could not get organizations, error = ' + error.error_message), ts('Not Found'), 'error');
                }
            );

            self.setOrganizations = (values) => {
                self.organizations = values;
            };

            self.requestAccess = (requestedOrganization) => {
                if (requestedOrganization === $scope.newOrganizationValue) {
                    self.showOrganization = true;
                }
            }; 
        }
    ]
});