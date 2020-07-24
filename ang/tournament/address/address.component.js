'use strict';

angular.module('tournament').component('address', {    
  templateUrl: '~/tournament/address/address.template.html',
  bindings: {addressId: '@', personId: '@'},
  controller: ['$routeParams', 'address',
    function addressController($routeParams, address) {
      var self = this;

      if ($routeParams.addressId !== undefined) {
        self.addressId = $routeParams.addressId;
      }
            
      if ($routeParams.personId !== undefined) {
        self.personId = $routeParams.personId;
      }

      address.getCountries().then(
        // Success
        (result) => {self.setCountries(result);},
        // Failure
        (error)  =>  { CRM.alert(ts('Could not get countries, error = ' + error.error_message),ts('Not Found'),'error'); }
      )

      address.getStateProvinces().then(
        // Success
        (result) => {self.setRegions(result);},
        // Failure
        (error)  => { CRM.alert(ts('Could not get states/provinces, error = ' + error.error_message),ts('Not Found'),'error'); }
      )

      if (self.personId !== undefined) {
        address.getContactAddress(self.personId).then(
        // Success
        (result) => { self.setSelectedAddress(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get address record for person ID = ' + self.personId + ' error = ' + error.error_message), ts('Error'), 'error'); }
        );     
      }

      else if (self.addressId !== undefined) {
        address.get(self.addressId).then(
        // Success
        (result) => { self.setSelectedAddress(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get address record ID = ' + self.addressId + ' error = ' + error.error_message), ts('Error'), 'error'); }
        );     
      }
     
      self.setSelectedAddress = (address) => {
        self.selectedAddress = address;
      };

      self.setCountries = (options) => {
        self.countries = options;
      };

      self.setRegions = (options) => {
        self.regions = options;
      };

      self.save = () =>  {
        address.save(self.selectedAddress).then(
        // Success
        (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
        // Failure
        (error)  => { CRM.alert(ts('Could not save address record ID = ' + self.selectedAddress.id + ' error = ' + error.error_message), ts('Database error'), 'error'); }
        );
      }
    }
  ]
});