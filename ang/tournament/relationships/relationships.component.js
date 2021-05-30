'use strict';

const relationshipsTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/relationships/relationships.template.html';

angular.module('tournament').component('trnRelationships', {
    templateUrl: relationshipsTemplateUrl,
    bindings: {
        id: '@',
        contactId: '@'
    },
    controller: ['$routeParams', 'billingRelationships',
        function ($routeParams, relationships) {
            var self = this;
            self.showOrganization = false;

            // e.g., relationships/43
            if ($routeParams.contactId !== undefined) {
                self.contactId = $routeParams.contactId;
            }

            relationships.get(self.contactId).then(
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
                    CRM.alert(ts('Could not get relationships for contact ID: ' + self.contactId + ', error = ' + error.error_message), ts('Not Found'), 'error');
                }
            );

            self.setRelationships = (relationships) => {
                self.relationships = relationships;
            };

            self.organizationClicked = () => {
                this.showOrganization = !this.showOrganization;
            }
        }
    ]
});