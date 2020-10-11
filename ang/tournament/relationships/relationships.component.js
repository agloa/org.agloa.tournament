'use strict';

const relationshipsTemplateUrl = locationRoot() + '/tournament/relationships/relationships.template.html';
angular.module('tournament').component('trnRelationships', {
    templateUrl: relationshipsTemplateUrl,
    bindings: { id: '@' },
    controller: ['$routeParams', 'billingRelationships', 'billingOrganizations', '$scope',
        ($routeParams, relationships, organizations, $scope) => {
            var self = this;
            self.userId = "user_contact_id";
            self.showNewOrganizationGroupForm = true;
            $scope.newOrganizationValue = "newOrganization";

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

            $scope.requestAccess = (requestedOrganization) => {
                if (requestedOrganization === $scope.newOrganizationValue) {
                    self.showNewOrganizationGroupForm = true;
                }
            }
        }
    ]
});