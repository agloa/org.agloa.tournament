'use strict';

const relationshipsTemplateUrl = locationRoot() + '/tournament/relationships/relationships.template.html';
angular.module('tournament').component('trnRelationships', {
    templateUrl: relationshipsTemplateUrl,
    bindings: { id: '@' },
    controller: ['$routeParams', 'billingRelationships',
        function RelationshipsController($routeParams, relationships) {
            var self = this;
            self.userId = "user_contact_id";

            // e.g., relationships/43
            if ($routeParams.userId !== undefined) {
                self.userId = $routeParams.userId;
            }

            relationships.get(self.userId).then(
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
                    CRM.alert(ts('Could not get relationships for contact ID: ' + self.id + ', error = ' + error.error_message), ts('Not Found'), 'error');
                }
            );

            self.setRelationships = (relationships) => {
                self.relationships = relationships;
            };       
        }
    ]
});