'use strict';

const billingRelationshipsTemplateUrl = locationRoot() + '/tournament/billingRelationships/billingRelationships.template.html';
angular.module('tournament').component('trnBillingRelationships', {
    templateUrl: billingRelationshipsTemplateUrl,
    bindings: { id: '@' },
    controller: ['$routeParams', 'billingRelationships', 'billingOrganizations',
        ($routeParams, billingRelationships, billingOrganizations) => {
            var self = this;
            self.userId = "user_contact_id";

            // e.g., billingRelationships/43
            if ($routeParams.userId !== undefined) {
                self.id = $routeParams.userId;
            }

            billingRelationships.get(self.id).then(
                // Success
                (result) => {
                    self.setRelationships(result.values.map((item) => {
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
                    CRM.alert(ts('Could not get billing relationships for contact ID: ' + self.id + ', error = ' + error.error_message), ts('Not Found'), 'error');
                }
            );

            self.setRelationships = (relationships) => {
                self.billingRelationships = relationships;
            };            

            billingOrganizations.getAll().then(
                // Success
                (result) => {
                    self.setBillingOrganizations(result.values);
                },
                // Failure
                (error) => {
                    CRM.alert(ts('Could not get billing organizations, error = ' + error.error_message), ts('Not Found'), 'error');
                }
            );

            self.setBillingOrganizations = (values) => {
                self.billingOrganizations = values;
            };

            self.requestAccess = () => {
                alert("Request Submitted");
            }
        }
    ]
});