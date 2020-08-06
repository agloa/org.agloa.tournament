'use strict';

angular.module('tournament').component('email', {    
  templateUrl: '~/tournament/email/email.template.html',
  bindings: {person: '@', id: '@'},
  controller: ['$routeParams', 'email',
    function emailController($routeParams, email) {
      var self = this;

      if ($routeParams.emailId !== undefined) {
        self.emailId = $routeParams.emailId;
      }
            
      if ($routeParams.personId !== undefined) {
        self.person = $routeParams.personId;
      }

      if (self.person !== undefined) {
        email.getContactEmail(self.person).then(
        // Success
        (result) => { self.setSelectedEmail(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get email record for person ID = ' + self.person + ' error = ' + error.error_message), ts('Error'), 'error'); }
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