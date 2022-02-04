'use strict';

const billingRelationshipTemplateUrl = `${location.search.includes("?page=CiviCRM") ? "~" : location.origin}/tournament/billingRelationships/billingRelationships.template.html`;
angular.module('tournament').component('trnBillingrelationships', {
    templateUrl: billingRelationshipTemplateUrl,
    bindings: { contactId: '@' },
    controller: ['$routeParams', 'billingRelationship',
        function ($routeParams, billingRelationship) {
            var self = this;

            if ($routeParams.contactId) {
                self.contactId = $routeParams.contactId;
            }

            self.setRelationships = (relationships) => {
                self.relationships = relationships.map((relationship) => {
                    return {
                        relationshipId: relationship.id,
                        organizationId: relationship.contact_id_b,
                        organizationName: relationship["contact_b.display_name"],
                    };
                });
            }

            self.setDisplayOrganizations = (relationships) => {
                self.displayOrganizations = [];
                relationships.forEach(relationship => {
                    self.displayOrganizations[relationship.contact_id_b] = false;
                });
            }

            self.$onInit = () => {
                billingRelationship.get(self.contactId).then(
                    (relationships) => {
                        self.setRelationships(relationships);
                        self.setDisplayOrganizations(relationships);
                    },
                    (error) => {
                        CRM.alert(ts(`Could not get billing relationships for contact : ${self.contactId}, error = ${error.error_message}`), ts('Not Found'), 'error');
                    }
                )
            }

            self.organizationClicked = (organizationId) => {
                self.displayOrganizations[organizationId] = !self.displayOrganizations[organizationId];
            }
        }
    ]
})