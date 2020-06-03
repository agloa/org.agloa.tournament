(function(angular, $, _) {

  angular.module('tournament').config(function($routeProvider) {
      $routeProvider.when('/tournament', {
        controller: 'TournamentCtrl',
        templateUrl: '~/tournament/dashboard.template.html',

        // If you need to look up data when opening the page, list it out under "resolve".
        resolve: {
          $ctrl: function(crmApi) {
            return crmApi('Contact', 'getsingle', {
              id: 'user_contact_id',
              return: ['first_name', 'last_name', 'middle_name', 'prefix_id', 'suffix_id', 'gender_id', 'display_name', 'birth_date', 'email', 'modified_date']
            });
          }
        }
      });
    }
  );

  // The controller uses *injection*. This default injects a few things:
  //   $scope -- This is the set of variables shared between JS and HTML.
  //   crmApi, crmStatus, crmUiHelp -- These are services provided by civicrm-core.
  //   $ctrl -- The current contact, defined above in config().
  angular.module('tournament').controller('TournamentCtrl', function($scope, crmApi, crmStatus, crmUiHelp, $ctrl) {
    // The ts() and hs() functions help load strings for this module.
    var ts = $scope.ts = CRM.ts('tournament');
    var hs = $scope.hs = crmUiHelp({file: 'CRM/tournament/Dashboard'}); // See: templates/CRM/tournament/Ctrl.hlp

    // We have $ctrl available in JS. We also want to reference it in HTML.
    $scope.$ctrl = $ctrl;

    $scope.save = function save() {
      return crmStatus(
        // Status messages. For defaults, just use "{}"
        {start: ts('Saving...'), success: ts('Saved')},
        // The save action. Note that crmApi() returns a promise.
        crmApi('Contact', 'create', {
          id: $ctrl.id,
          first_name: $ctrl.first_name,
          last_name: $ctrl.last_name
        })
      );
    };
  });

})(angular, CRM.$, CRM._);
