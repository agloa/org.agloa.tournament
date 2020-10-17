'use strict';

const addressTemplateUrl = locationRoot() + '/tournament/address/address.template.html';
angular.module('tournament').component('trnAddress', {
  templateUrl: addressTemplateUrl,
  bindings: { personId: '@', addressId: '@' },
  controller: ['$routeParams', 'address',
    function AddressController($routeParams, address) {
      var self = this;

      self.contact_id = self.personId;
      self.id = self.addressId;

      if ($routeParams.addressId !== undefined) {
        self.id = $routeParams.addressId;
      }

      if ($routeParams.personId !== undefined) {
        self.contact_id = $routeParams.personId;
      }

      address.getCountries().then(
        // Success
        (result) => { self.setCountries(result); },
        // Failure
        (error) => { CRM.alert(ts('Could not get countries, error = ' + error.error_message), ts('Not Found'), 'error'); }
      )

      address.getStateProvinces().then(
        // Success
        (result) => { self.setRegions(result); },
        // Failure
        (error) => { CRM.alert(ts('Could not get states/provinces, error = ' + error.error_message), ts('Not Found'), 'error'); }
      )

      address.get(self.contact_id, self.id).then(
        // Success
        (result) => { self.setSelectedAddress(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get address record , error = ' + error.error_message), ts('Error'), 'error'); }
      );

      self.setSelectedAddress = (address) => {
        self.selectedAddress = address;
      };

      self.setCountries = (options) => {
        self.countries = options;
      };

      self.setRegions = (options) => {
        self.regions = options;
      };

      self.save = () => {
        address.save(self.selectedAddress).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save address record ID = ' + self.selectedAddress.id + ' error = ' + error.error_message), ts('Database error'), 'error'); }
        );
      }
    }
  ]
});