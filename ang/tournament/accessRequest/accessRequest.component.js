'use strict';

const accessRequestTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/accessRequest/accessRequest.template.html';

angular.module('tournament').component('trnAccessRequest', {
    templateUrl: accessRequestTemplateUrl,
    bindings: {
        requestorId: '@',
    },
    controller: ['billingOrganizations', '$scope',
        function (organizations, $scope) {
            var self = this;
            self.showOrganizationRequest = false;
            $scope.newOrganizationValue = "newOrganization";

            organizations.get().then(
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
                    self.showOrganizationRequest = true;
                }
            };
        }
    ]
});