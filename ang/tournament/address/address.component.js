'use strict';

angular.module('tournament').component('address', {    
  templateUrl: '~/tournament/address/address.template.html',
  bindings: {addressId: '<', contact_id: '<'},
  controller: ['$routeParams', 'address',
    function addressController($routeParams, address) {
      var self = this;
            
      if ($routeParams.addressId !== undefined) {
        self.address_id = $routeParams.addressId;
      }
            
      if ($routeParams.contact_id !== undefined) {
        self.contact_id = $routeParams.contact_id;
      }

      address.getCountries().then(
        // Success
        (result) => {self.setCountries(result);},
        // Failure
        (error)  =>  { CRM.alert(ts('Could not get countries, error = %1', {1: error}),ts('Not Found'),'error'); }
      )

      address.getStateProvinces().then(
        // Success
        (result) => {self.setRegions(result);},
        // Failure
        (error)  => { CRM.alert(ts('Could not get states/provinces, error = %1', {1: error}),ts('Not Found'),'error'); }
      )

      if (self.contact_id !== undefined) {
        address.getContactAddress(self.contact_id).then(
        // Success
        (result) => { self.setSelectedAddress(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get address record ID = ' + self.contact_id + ' error = ' + error), ts('Error'), 'error'); }
        );     
      }

      else if (self.address_id !== undefined) {
        address.get(self.address_id).then(
        // Success
        (result) => { self.setSelectedAddress(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get address record ID = ' + self.address_id + ' error = ' + error), ts('Error'), 'error'); }
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
        (error)  => { CRM.alert(ts('Could not save address record ID = ' + self.selectedAddress.id + ' error = ' + error), ts('Database error'), 'error'); }
        );
      }
    }
  ]
});