'use strict';

const dashboardTemplateUrl = locationRoot() + '/tournament/dashboard/dashboard.template.html';
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

      self.user = person.get(self.contactId).then(
        // Success
        (result) => {
          self.contactId = result.id;
          self.display_name = result.display_name;
          self.modified_date = result.modified_date;
        },
        // Failure
        (error) => {
          CRM.alert(ts('Could not get user record ID of ' + self.contactId + ', error = ' + error.error_message), ts('Not Found'), 'error');
        }
      );

    }
  ]
});