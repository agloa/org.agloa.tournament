'use strict';

const dashboardTemplateUrl = locationRoot() + '/tournament/dashboard/dashboard.template.html';
angular.module('tournament').component('trnDashboard', {
  templateUrl: dashboardTemplateUrl,
  controller: ['$routeParams', 'personService',
    function DashboardController($routeParams, person) {
      var self = this;
      self.personVisibilityClass = "hiddenBranch";
      self.userId = "user_contact_id";
      
      // e.g., dashboard/43
      if ($routeParams.userId !== undefined) {
          self.userId = $routeParams.userId;
      }

      // Don't include 'child' form until user requests it.
      self.includePersonForm = false;

      self.togglePersonVisibility = () => {
        this.includePersonForm = !this.includePersonForm;
        if (this.includePersonForm) {
          this.personVisibilityClass = "visibleBranch";
        } else {
          this.personVisibilityClass = "hiddenBranch";
        }
      }

      self.user = person.get(self.userId).then(
          // Success
          (result) => { 
              self.user = result;
          },
          // Failure
          (error) => { 
              CRM.alert(ts('Could not get user record ID of ' + self.userId + ', error = ' + error.error_message),ts('Not Found'),'error'); 
          }
      );
    }
  ]
});