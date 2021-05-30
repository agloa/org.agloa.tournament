'use strict';

const dashboardTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/dashboard/dashboard.template.html';

angular.module('tournament').component('trnDashboard', {
  templateUrl: dashboardTemplateUrl,
  controller: ['$routeParams', 'person',
    function ($routeParams, person) {
      var self = this;
      self.contactId = "user_contact_id";

      // e.g., dashboard/43
      if ($routeParams.userId !== undefined) {
        self.contactId = $routeParams.userId;
      }

      // Don't include 'child' form until user requests it.
      self.includePerson = false;
      self.includeOrganizations = false;

      self.personClicked = () => {
        this.displayPerson = !this.displayPerson;
      }

      self.organizationsClicked = () => {
        this.displayOrganizations = !this.displayOrganizations;
      }      

      self.setContact = (contact) => {
          self.contactId = contact.id;
          self.display_name = contact.display_name;
          self.modified_date = contact.modified_date;
      };

      self.$onInit = function () {
      self.user = person.get(self.contactId).then(
        // Success
        (result) => {
            self.setContact(result[0]);
        },
        // Failure
        (error) => {
          CRM.alert(ts('Could not get user record ID of ' + self.contactId + ', error = ' + error.error_message), ts('Not Found'), 'error');
        }
      );
      };

    }
  ]
});