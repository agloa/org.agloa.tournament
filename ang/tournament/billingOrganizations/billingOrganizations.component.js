'use strict';

const billingOrganizationsTemplateUrl = locationRoot() + '/tournament/billingOrganizations/billingOrganizations.template.html';
angular.module('tournament').component('trnBillingorganizations', {
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
                    self.billingOrganizations = result;
                },
                // Failure
                (error) => { 
                    CRM.alert(ts('Could not get billingOrganizations for contact ID: ' + self.id + ', error = ' + error.error_message),ts('Not Found'),'error'); 
                }
            );
        }
    ]
});