'use strict';

const organizationTemplateUrl = locationRoot() + '/tournament/organization/organization.template.html';
angular.module('tournament').component('trnOrganization', {
  templateUrl: organizationTemplateUrl,
  bindings: { id: '@' },
  controller: ['$routeParams', 'organization',
    function ($routeParams, organization) {
      var self = this;

      if ($routeParams.organizationId !== undefined) {
        self.id = $routeParams.organizationId;
      }

      if (self.id) {
        organization.get(self.id).then(
          // Success
          (result) => { self.setSelectedOrganization(result); },
          // Failure
          (error) => { CRM.alert(ts('Could not get organization record ID = ' + self.id + ', error = ' + error.error_message), ts('Not Found'), 'error'); }
        );
      }

      self.setSelectedOrganization = (organization) => {
        self.organization_name = organization.organization_name;
      };

      self.save = () => {
        organization.save(self).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save organization record ID = ' + self.id + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        );
      }
    }
  ]
});