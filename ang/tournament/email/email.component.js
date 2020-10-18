'use strict';

const emailTemplateUrl = locationRoot() + '/tournament/email/email.template.html';
angular.module('tournament').component('trnEmail', {    
  templateUrl: emailTemplateUrl,
  bindings: {contactId: '@', id: '@'},
  controller: ['$routeParams', 'email',
    function ($routeParams, email) {
      var self = this;

      if ($routeParams.emailId !== undefined) {
        self.emailId = $routeParams.emailId;
      }
            
      if ($routeParams.contactId !== undefined) {
        self.contactId = $routeParams.contactId;
      }

      if (self.contactId !== undefined) {
        email.getContactEmail(self.contactId).then(
        // Success
        (result) => { self.setSelectedEmail(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get email record for contact ID = ' + self.contactId + ' error = ' + error.error_message), ts('Error'), 'error'); }
        );     
      }

      else if (self.emailId !== undefined) {
        email.get(self.emailId).then(
        // Success
        (result) => { self.setSelectedEmail(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get email record ID = ' + self.emailId + ' error = ' + error.error_message), ts('Error'), 'error'); }
        );     
      }
     
      self.setSelectedEmail = (email) => {
        self.selectedEmail = email;
      };

      self.save = () =>  {
        email.save(self.selectedEmail).then(
        // Success
        (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
        // Failure
        (error)  => { CRM.alert(ts('Could not save email record ID = ' + self.selectedEmail.id + ' error = ' + error.error_message), ts('Database error'), 'error'); }
        );
      }
    }
  ]
});