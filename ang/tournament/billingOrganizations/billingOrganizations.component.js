'use strict';

const billingOrganizationsTemplateUrl = locationRoot() + '/tournament/billingOrganizations/billingOrganizations.template.html';
angular.module('tournament').component('trnBillingOrganizations', {
    templateUrl: billingOrganizationsTemplateUrl,
    bindings: { id: '@' },
    controller: ['$routeParams', 'billingContact',
        function BillingOrganizationsController($routeParams, billingOrganizations) {
            var self = this;
            self.userId = "user_contact_id";

            // e.g., billingOrganizations/43
            if ($routeParams.userId !== undefined) {
                self.id = $routeParams.userId;
            }

            self.billingOrganizations = billingOrganizations.get(self.id).then(
                // Success
                (result) => {
                    self.setOrganizations(result.values.map((item) => {
                        return {
                            id: item["contact_id_b.id"],
                            modified_date: item["contact_id_b.modified_date"],
                            organization_name: item["contact_id_b.organization_name"]
                        };
                    }
                    ));
                },
                // Failure
                (error) => {
                    CRM.alert(ts('Could not get billingOrganizations for contact ID: ' + self.id + ', error = ' + error.error_message), ts('Not Found'), 'error');
                }
            );

            self.setOrganizations = (organizations) => {
                self.billingOrganizations = organizations;
            };
        }
    ]
});