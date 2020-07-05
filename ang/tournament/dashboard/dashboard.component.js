angular.module('tournament').component('dashboard', {
  templateUrl: '~/tournament/dashboard/dashboard.template.html',
  controller: ['$routeParams', 'crmApi', 'personService',
    function DashboardController($routeParams, crmApi, person) {
      var self = this;
      self.personArrowClass = "arrowRight";
      self.userId = "user_contact_id";
      
      // e.g., dashboard/43
      if ($routeParams.userId !== undefined) {
          self.userId = $routeParams.userId;
      }

      // Don't include 'child' form until user requests it.
      self.includePersonForm = false;

      self.togglePersonVisibility = function togglePersonVisibility() {
        this.includePersonForm = !this.includePersonForm;
        if (this.includePersonForm) {
          this.personArrowClass = "arrowDown";
        } else {
          this.personArrowClass = "arrowRight";
        }
      }

      self.user = person.get(self.userId).then(
            // Success
            function(result) { 
                self.user = result;
            },
            // Failure
            function (error) { 
                CRM.alert(ts('Could not get user record ID of %1, error = %2', {1: userId, 2: error}),ts('Not Found'),'error'); 
            }
        );
    }
  ]
});