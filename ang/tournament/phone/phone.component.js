'use strict';

angular.module('tournament').component('phone', {    
  templateUrl: '~/tournament/phone/phone.template.html',
  bindings: {person: '@', id: '@'},
  controller: ['$routeParams', 'phone',
    function phoneController($routeParams, phone) {
      var self = this;

      if ($routeParams.phoneId !== undefined) {
        self.phoneId = $routeParams.phoneId;
      }
            
      if ($routeParams.personId !== undefined) {
        self.person = $routeParams.personId;
      }

      phone.getPhoneTypes().then(
        // Success
        (result) => {self.setPhoneTypes(result);},
        // Failure
        (error)  =>  { CRM.alert(ts('Could not get phone types, error = ' + error.error_message),ts('Not Found'),'error'); }
      )

      if (self.person !== undefined) {
        phone.getContactPhone(self.person).then(
        // Success
        (result) => { self.setSelectedPhone(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get phone record for person ID = ' + self.person + ' error = ' + error.error_message), ts('Error'), 'error'); }
        );     
      }

      else if (self.phoneId !== undefined) {
        phone.get(self.phoneId).then(
        // Success
        (result) => { self.setSelectedPhone(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get phone record ID = ' + self.phoneId + ' error = ' + error.error_message), ts('Error'), 'error'); }
        );     
      }
     
      self.setSelectedPhone = (phone) => {
        self.selectedPhone = phone;
      };

      self.setPhoneTypes = (options) => {
        self.phoneTypes = options;
      };

      self.save = () =>  {
        phone.save(self.selectedPhone).then(
        // Success
        (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
        // Failure
        (error)  => { CRM.alert(ts('Could not save phone record ID = ' + self.selectedPhone.id + ' error = ' + error.error_message), ts('Database error'), 'error'); }
        );
      }
    }
  ]
});