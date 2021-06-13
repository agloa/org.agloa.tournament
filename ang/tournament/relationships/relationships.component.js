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

            // e.g., relationships/43
            if ($routeParams.contactId !== undefined) {
                self.contactId = $routeParams.contactId;
            }

            self.setRelationships = (relationships) => {
                self.relationships = relationships;
                relationships.forEach((relationship, index) => {
                    const relationshipId = relationship.id;
                    self.relationshipId = {show: false};
                });
            };

            self.organizationClicked = (id) => {
                this.showOrganization = !this.showOrganization;
            };
            
            self.$onInit = function () {
                relationships.get(self.contactId).then(
                    // Success
                    (result) => {
                        self.setRelationships(result.map((item) => {
                            return {
                                id: item["contact_id_b"],
                                modified_date: item["contact_b.modified_date"],
                                organization_name: item["contact_b.display_name"]
                            };
                        }
                        ));
                    },
                    // Failure
                    (error) => {
                        CRM.alert(ts('Could not get relationships for contact ID: ' + self.contactId + ', error = ' + error.error_message), ts('Not Found'), 'error');
                    }
                );
            };
        }
    ]
});