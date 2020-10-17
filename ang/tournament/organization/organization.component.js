'use strict';

const organizationTemplateUrl = locationRoot() + '/tournament/organization/organization.template.html';
angular.module('tournament').component('trnOrganization', {
  templateUrl: organizationTemplateUrl,
  bindings: {id: '@'},
  bindings: {relationshipId: '@'},
  controller: ['$routeParams', 'organization', 
    function ($routeParams, organization) {
      var self = this;

      if ($routeParams.organizationId !== undefined) {
        self.id = $routeParams.organizationId;
      }

      organization.get(self.id).then(
        // Success
        (result) => { self.setSelectedOrganization(result); },
        // Failure
        (error) => { CRM.alert(ts('Could not get organization record ID = ' + self.id + ', error = ' + error.error_message), ts('Not Found'), 'error'); }
      );

      self.setSelectedOrganization = (organization) => {
        self.selectedOrganization = organization;
        self.selectedOrganization.birth_date = new Date(self.selectedOrganization.birth_date);
      };

      self.save = () => {
        organization.save(self.selectedOrganization).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save organization record ID = ' + self.id + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        );
      }
    }
  ]
});