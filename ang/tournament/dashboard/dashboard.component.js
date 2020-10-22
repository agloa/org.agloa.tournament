'use strict';

const dashboardTemplateUrl = locationRoot() + '/tournament/dashboard/dashboard.template.html';
angular.module('tournament').component('trnDashboard', {
  templateUrl: dashboardTemplateUrl,
  controller: ['$routeParams', 'person',
    function ($routeParams, person) {
      var self = this;
      self.contact_id = "user_contact_id";
      
      // e.g., dashboard/43
      if ($routeParams.userId !== undefined) {
          self.contact_id = $routeParams.userId;
      }

      // Don't include 'child' form until user requests it.
      self.includePerson = false;
      self.includeOrganizations = false;

      self.personClicked = () => {
        this.includePerson = !this.includePerson;
      }

      self.organizationsClicked = () => {
        this.includeOrganizations = !this.includeOrganizations;
      }

      self.user = person.get(self.contact_id).then(
          // Success
          (result) => { 
              self.user = result;
              self.display_name = result.display_name;
          },
          // Failure
          (error) => { 
              CRM.alert(ts('Could not get user record ID of ' + self.contact_id + ', error = ' + error.error_message),ts('Not Found'),'error'); 
          }
      );
    }
  ]
});