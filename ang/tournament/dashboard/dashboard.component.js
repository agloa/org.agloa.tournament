angular.module('tournament').component('dashboard', {
  templateUrl: '~/tournament/dashboard/dashboard.template.html',
  controller: ['$routeParams', //'User',
    function DashboardController($routeParams) { // , User
      var self = this;
      self.personArrowClass = "arrowRight";
      self.userId = 1003; // TODO: logged in user from session
      
      // e.g., dashboard/43
      if ($routeParams.userId !== undefined) self.userId = $routeParams.userId;

      // Don't include 'child' form until user requests it.
      self.includePersonForm = false;

      // User service returns additional data for userId
      // self.user = User.get({userId:self.userId});

      self.togglePersonVisibility = function togglePersonVisibility() {
        this.includePersonForm = !this.includePersonForm;
        if (this.includePersonForm) {
          this.personArrowClass = "arrowDown";
        } else {
          this.personArrowClass = "arrowRight";
        }
      }
    }
  ]
});