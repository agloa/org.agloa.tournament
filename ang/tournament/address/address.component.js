'use strict';

const addressTemplateUrl = locationRoot() + '/tournament/address/address.template.html';
angular.module('tournament').component('trnAddress', {
  templateUrl: addressTemplateUrl,
  bindings: { contactId: '@', id: '@' },
  controller: ['$routeParams', 'address',
    function ($routeParams, address) {
      var self = this;

      if ($routeParams.addressId !== undefined) {
        self.id = $routeParams.addressId;
      }

      if ($routeParams.contactId !== undefined) {
        self.contactId = $routeParams.contactId;
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

      address.get(self.contactId, self.id).then(
        // Success
        (result) => { self.setSelectedAddress(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get address record, error = ' + error.error_message), ts('Error'), 'error'); }
      );

      self.setSelectedAddress = (address) => {
        self.street_address = address.street_address;
        self.supplemental_address_1 = address.supplemental_address_1;
        self.supplemental_address_2 = address.supplemental_address_2;
        self.supplemental_address_3 = address.supplemental_address_3;
        self.city = address.city;
        self.country = address.country_id;
        self.state_province = address.state_province_id;
        self.postal_code = address.postal_code;
        self.postal_code_suffix = address.postal_code_suffix;
      };

      self.setCountries = (options) => {
        self.countries = options;
      };

      self.setRegions = (options) => {
        self.regions = options;
      };

      self.save = () => {
        self.contact_id = self.contactId;
        address.save(self).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save address record ID = ' + self.id + ' error = ' + error.error_message), ts('Database error'), 'error'); }
        );
      }
    }
  ]
});