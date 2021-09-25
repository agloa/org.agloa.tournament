'use strict';

const registrationGroupsTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/registrationGroups/registrationGroups.template.html';

angular.module('tournament').component('trnregistrationGroups', {
  templateUrl: registrationGroupsTemplateUrl,
  bindings: {
    id: '@',
    contactId: '@'
  },

  controller: ['$routeParams', 'registrationGroups',
    function ($routeParams, registrationGroups) {
      var self = this;

      // e.g., registrationGroups/43
      if ($routeParams.contactId !== undefined) {
        self.contactId = $routeParams.contactId;
      }

      self.setRegistrationGroups = (registrationGroups) => {
        self.registrationGroups = registrationGroups;
        registrationGroups.forEach((registrationGroup) => {
          self[`show_${registrationGroup.id}`] = false;
        });
      };

      self.registrationGroupClicked = (registrationGroupId) => {
        self[`show_${registrationGroupId}`] = !self[`show_${registrationGroupId}`];
      };

      self.showregistrationGroup = (registrationGroupId) => {
        return self[`show_${registrationGroupId}`];
      }

      self.$onInit = function () {
        registrationGroups.get(self.contactId).then(
          // Success
          (result) => {
            self.setRegistrationGroups(result.map((item) => {
              return {
                id: item["contact_id_b"],
                modified_date: item["contact_b.modified_date"],
                registrationGroup_name: item["contact_b.display_name"]
              };
            }
            ));
          },
          // Failure
          (error) => {
            CRM.alert(ts('Could not get registrationGroups for contact ID: ' + self.contactId + ', error = ' + error.error_message), ts('Not Found'), 'error');
          }
        );
      };
    }
  ]
});