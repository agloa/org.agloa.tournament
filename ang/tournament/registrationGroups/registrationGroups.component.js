'use strict';

const registrationGroupsTemplateUrl =
    `${location.search.includes("?page=CiviCRM") ? "~" : location.origin}/tournament/registrationGroups/registrationGroups.template.html`;

angular.module('tournament').component('trnRegistrationgroups', {
    templateUrl: registrationGroupsTemplateUrl,
    bindings: { contactId: '@' },
    controller: ['$routeParams', 'accessControl',
        function ($routeParams, accessControl) {
            var self = this;

            if ($routeParams.contactId) {
                self.contactId = $routeParams.contactId;
            }

            self.setGroups = (groups) => {
                self.groups = groups.map((group) => {
                    return {
                        groupId: group["contacts_group.id"],
                        groupName: group["contacts_group.title"]
                    }
                });
            }

            self.setDisplayGroups = (groups) => {
                self.displayGroups = [];
                groups.forEach((group) => {
                    self.displayGroups[group.groupId] = false;
                });
            }

            self.$onInit = () => {
                accessControl.get(self.contactId).then(
                    (groups) => {
                        self.setGroups(groups);
                        self.setDisplayGroups(self.groups);
                    },
                    (error) => {
                        CRM.alert(ts(`Could not get registration groups for contact: ${self.contactId}, error = ${error.error_message}`), ts('Not Found'), 'error');
                    }
                )
            }

            self.groupClicked = (groupId) => {
                self.displayGroups[groupId] = !self.displayGroups[groupId];
            }
        }
    ]
})