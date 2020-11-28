'use strict';

const organizationTemplateUrl = locationRoot() + '/tournament/organization/organization.template.html';
angular.module('tournament').component('trnOrganization', {
  templateUrl: organizationTemplateUrl,
  bindings: { 
    id: '@' ,
    requiresApproval: '@',
    requestorId: '@'
  },
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

      // Don't display 'child' component until user requests it.
      self.displayAddress = false;
      self.addressClicked = () => {
        this.displayAddress = !this.displayAddress;
      }

      // Don't display 'child' component until user requests it.
      self.displayPhone = false;
      self.phoneClicked = () => {
        this.displayPhone = !this.displayPhone;
      }

      // Don't display 'child' component until user requests it.
      self.displayEmail = false;
      self.emailClicked = () => {
        this.displayEmail = !this.displayEmail;
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