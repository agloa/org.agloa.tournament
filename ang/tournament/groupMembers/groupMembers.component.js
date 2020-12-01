'use strict';

const groupMembersTemplateUrl = locationRoot() + '/tournament/groupMembers/groupMembers.template.html';
angular.module('tournament').component('trnGroupMembers', {
    templateUrl: groupMembersTemplateUrl,
    bindings: {
        id: '@',
        groupId: '@',
        personId: '@'
    },
    controller: ['$routeParams', 'groupMember',
        function ($routeParams, groupMember) {
            var self = this;

            if ($routeParams.id) {
                self.id = $routeParams.id;
            }

            if ($routeParams.groupId) {
                self.groupId = $routeParams.groupId;
            }

            if ($routeParams.contactId) {
                self.personId = $routeParams.personId;
            }

            groupMember.get(self.id, self.groupId, self.personId).then(
                // Success
                (result) => {
                    self.setGroupMembers(result.values);
                },
                // Failure
                (error) => {
                    CRM.alert(ts('Could not get groupMembers, error = ' + error.error_message), ts('Not Found'), 'error');
                }
            );

            self.setgroupMembers = (groupMembers) => {
                self.groupMembers = groupMembers;
            };
        }
    ]
});