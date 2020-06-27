angular.module('tournament').component('dashboard', {
  templateUrl: '~/tournament/dashboard/dashboard.template.html',
  controller: ['$routeParams', 'crmApi', 'person',
    function DashboardController($routeParams, crmApi, person) {
      var self = this;
      self.personArrowClass = "arrowRight";
      self.userId = 2; // TODO: logged in user from session
      
      // e.g., dashboard/43
      if ($routeParams.userId !== undefined) self.userId = $routeParams.userId;

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

      // User service returns additional data for userId
      self.user = crmApi('Contact', 'getsingle', {
        "sequential": 1,
        "return": ["display_name","modified_date"],
        "id": self.userId
        }).then(
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

angular.module('tournament').factory('person', function ($q, crmApi) {
  return{
      // Get an individual contact record
      // @param id Contact id  (per APIv3)
      // @return Promise Contact (per APIv3)
      get: function get(id) {
          return crmApi('Contact', 'getsingle', {
            "return": ["sort_name","display_name","last_name","first_name","middle_name","prefix_id","suffix_id","gender_id","birth_date"],
            "id": id
        });
      }
    };
  });