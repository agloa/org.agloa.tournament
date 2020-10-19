'use strict';

const emailTemplateUrl = locationRoot() + '/tournament/email/email.template.html';
angular.module('tournament').component('trnEmail', {
  templateUrl: emailTemplateUrl,
  bindings: { contactId: '@', id: '@' },
  controller: ['$routeParams', 'email',
    function ($routeParams, email) {
      var self = this;

      if ($routeParams.id !== undefined) {
        self.id = $routeParams.id;
      }

      if ($routeParams.contactId !== undefined) {
        self.contactId = $routeParams.contactId;
      }

      email.get(self.contactId, self.id).then(
        // Success
        (result) => { self.setSelectedEmail(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get email record, error = ' + error.error_message), ts('Error'), 'error'); }
      );

      self.setSelectedEmail = (email) => {
        self.selectedEmail = email;
      };

      self.save = () => {
        email.save(self.selectedEmail).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save email record ID = ' + self.selectedEmail.id + ' error = ' + error.error_message), ts('Database error'), 'error'); }
        );
      }
    }
  ]
});