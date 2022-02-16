'use strict';

const registrationGroupsTemplateUrl =
    `${location.search.includes("?page=CiviCrm") ? "~" : location.origin}/tournament/registrationGroups/registrationGroups.template.html`;

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
                self.groups = groups;
            }

            self.setDisplayGroups = (groups) => {
                self.displayGroups = [];
                groups.forEach((group) => {
                    self.displayGroups[group.id] = false;
                });
            }

            self.$onInit = () => {
                accessControl.get(self.contactId).then(
                    (groups) => {
                        self.setGroups(groups);
                        self.setDisplayGroups(groups);
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