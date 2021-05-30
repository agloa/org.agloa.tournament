'use strict';

const organizationRequestTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/organization/organizationRequest.template.html';

angular.module('tournament').component('trnOrganizationRequest', {
  templateUrl: organizationRequestTemplateUrl,
  bindings: { 
    requestorId: '@',
    onCancel: '&'
  },

  controller: ['organization','address',
    function (organization, address) {
      var self = this;      

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

      self.setCountries = (options) => {
        self.countries = options;
      };

      self.setRegions = (options) => {
        self.regions = options;
      };

      self.save = function()  {
        organization.request({
          organization_name: self.organization_name,
          group_name: self.group_name,
          email: self.email,
          street_address: self.street_address,
          supplemental_address_1: self.supplemental_address_1,
          supplemental_address_2: self.supplemental_address_2,
          supplemental_address_3: self.supplemental_address_3,
          city: self.city,
          supplemental_address_3: self.supplemental_address_3,
          supplemental_address_3: self.supplemental_address_3,
          supplemental_address_3: self.supplemental_address_3,
          supplemental_address_3: self.supplemental_address_3,
          phone: self.phone,
          requestorId: self.requestorId
        }).then(
          // Success
          () => { 
            CRM.alert(ts("Saved"), ts("Saved"), 'info');
          },
          // Failure
          (error) => { CRM.alert(ts('Could not request organization record for ' + self.organization_name + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        );
      }

      self.cancel = function() {
        self.onCancel();
      };
    }
  ]
});