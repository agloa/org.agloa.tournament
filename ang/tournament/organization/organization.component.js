'use strict';

const organizationTemplateUrl = locationRoot() + '/tournament/organization/organization.template.html';
angular.module('tournament').component('trnOrganization', {
  templateUrl: organizationTemplateUrl,
  bindings: {
    id: '@',
    requiresApproval: '@',
    requestorId: '@'
  },
  controller: ['$routeParams', 'organization', 'address',
    function ($routeParams, organization, address) {
      var self = this;

      if ($routeParams.organizationId !== undefined) {
        self.contactId = $routeParams.organizationId;
      }

      self.setSelectedOrganization = (organization) => {
        self.organization_name = organization.organization_name;

        self.contact_type = organization.contact_type;
        self.contact_sub_type = organization.contact_sub_type;
        self.modified_date = organization.modified_date;
        self.email = organization.email;
        self.phone = organization.phone;
        self.street_address = organization.street_address;
        self.supplemental_address_1 = organization.supplemental_address_1;
        self.supplemental_address_2 = organization.supplemental_address_2;
        self.supplemental_address_3 = organization.supplemental_address_3;
        self.city = organization.city;
        self.postal_code = organization.postal_code;
        self.postal_code_suffix = organization.postal_code_suffix;
        self.country_id = organization.country_id;
        self.state_province_id = organization.state_province_id;
      };

      self.setCountries = (options) => {
        self.countries = options;
      };

      self.setRegions = (options) => {
        self.regions = options;
      };

      self.save = () => {
        var organizationRecord =
        {
          id: self.id,
          contact_type: self.contact_type,
          contact_sub_type: self.contact_sub_type,
          modified_date: self.modified_date,
          requiresApproval: self.requiresApproval,
          requestorId: self.requestorId,

          organization_name: self.organization_name,

          email: self.email,
          phone: self.phone,

          street_address: self.street_address,
          supplemental_address_1: self.supplemental_address_1,
          supplemental_address_2: self.supplemental_address_2,
          supplemental_address_3: self.supplemental_address_3,
          city: self.city,
          postal_code: self.postal_code,
          postal_code_suffix: self.postal_code_suffix,
          country_id: self.country_id,
          state_province_id: self.state_province_id
        }

        organization.save(organizationRecord).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save organization record ID = ' + self.id + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        );
      }

      self.delete = () => {
        organization.delete(self.id).then(
          // Success
          () => { CRM.alert(ts("Deleted"), ts("Deleted"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not delete organization record ID = ' + self.id + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        )
      }

      self.$onInit = function () {
        if (self.id == undefined && self.contactId != undefined) {
          self.id = self.contactId;
        }

        organization.get(self.id).then(
          // Success
          (result) => {
            self.setSelectedOrganization(result);
          },
          // Failure
          (error) => {
            CRM.alert(ts('Could not get organization record ID = ' + self.id + ', error = ' + error.error_message), ts('Not Found'), 'error');
          }
        );
      };

      address.getCountries().then(
        // Success
        (result) => {
          self.setCountries(result);
        },
        // Failure
        (error) => { CRM.alert(ts('Could not get countries, error = ' + error.error_message), ts('Not Found'), 'error'); }
      )

      address.getStateProvinces().then(
        // Success
        (result) => {
          self.setRegions(result);
        },
        // Failure
        (error) => { CRM.alert(ts('Could not get states/provinces, error = ' + error.error_message), ts('Not Found'), 'error'); }
      )
    }
  ]
});