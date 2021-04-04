'use strict';

const emailTemplateUrl = locationRoot() + '/tournament/email/email.template.html';
angular.module('tournament').component('trnEmail', {
  templateUrl: emailTemplateUrl,
  bindings: { contactId: '@', id: '@' },
  controller: ['$routeParams', 'email',
    function ($routeParams, email) {
      var self = this;

      if ($routeParams.emailId !== undefined) {
        self.id = $routeParams.emailId;
      }

      if ($routeParams.contactId !== undefined) {
        self.contactId = $routeParams.contactId;
      }

      self.setSelectedEmail = (email) => {
        self.id = email.id;
        self.location_type_id = email.location_type_id;
        self.is_primary = email.is_primary;
        self.is_billing = email.is_billing;
        self.email = email.email;
      };

      self.save = () => {
        self.contact_id = self.contactId;
        email.save(self).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save email record ID = ' + self.selectedEmail.id + ' error = ' + error.error_message), ts('Database error'), 'error'); }
        );
      }

      self.delete = () => {
        email.delete(self.id).then(
          // Success
          () => { CRM.alert(ts("Deleted"), ts("Deleted"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not delete email record ID = ' + self.id + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        )
      };

      self.$onInit = function () {
        self.id = self.contactId;

        email.get(self.contactId, self.id).then(
          // Success
          (result) => { self.setSelectedEmail(result.values[0]); },
          // Failure
          (error) => { CRM.alert(ts('Could not get email record, error = ' + error.error_message), ts('Error'), 'error'); }
        );
      };
    }
  ]
});