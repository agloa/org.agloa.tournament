'use strict';

const organizationTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/organization/organization.template.html';

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

      if ($routeParams.organizationId) {
        self.contactId = $routeParams.organizationId;
      }

      self.setSelectedOrganization = (organization) => {
        self.organization_name = organization.organization_name;

        self.contact_type = organization.contact_type;
        self.contact_sub_type = organization.contact_sub_type;
        self.modified_date = organization.modified_date;

        self.email = organization["email.email"];
        self.emailId = organization["email.id"];

        self.phone = organization["phone.phone"];
        self.phoneId = organization["phone.id"];

        self.addressId = organization["address.id"];
        self.street_address = organization["address.street_address"];
        self.supplemental_address_1 = organization["address.supplemental_address_1"];
        self.supplemental_address_2 = organization["address.supplemental_address_2"];
        self.supplemental_address_3 = organization["address.supplemental_address_3"];
        self.city = organization["address.city"];
        self.postal_code = organization["address.postal_code"];
        self.postal_code_suffix = organization["address.postal_code_suffix"];

        self.country_id = organization["address.country_id"];
        self.state_province_id = organization["address.state_province_id"];
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
          emailId: self.emailId,

          phone: self.phone,
          phoneId: self.phoneId,

          addressId: self.addressId,

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
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          (error) => { CRM.alert(ts(`Could not save organization record ID = ${self.id} , error = ${error.error_message}`), ts('Database Error'), 'error'); }
        );
      }

      self.delete = () => {
        organization.delete(self.id).then(
          () => { CRM.alert(ts("Deleted"), ts("Deleted"), 'info'); },
          (error) => { CRM.alert(ts(`Could not delete organization record ID = ${self.id} , error = ${error.error_message}`), ts('Database Error'), 'error'); }
        )
      }

      self.$onInit = function () {
        if (self.id == undefined && self.contactId != undefined) {
          self.id = self.contactId;
        }

        organization.get(self.id).then(
          (result) => {
            self.setSelectedOrganization(result[0]);
          },
          (error) => {
            CRM.alert(ts(`Could not get organization record ID = ${self.id} , error = ${error.error_message}`), ts('Not Found'), 'error');
          }
        );
      };

      address.getCountries().then(
        (result) => {
          self.setCountries(result);
        },
        (error) => { CRM.alert(ts(`Could not get countries, error = ${error.error_message}`), ts('Not Found'), 'error'); }
      )

      address.getStateProvinces().then(
        (result) => {
          self.setRegions(result);
        },
        (error) => { CRM.alert(ts('Could not get states/provinces, error = ' + error.error_message), ts('Not Found'), 'error'); }
      )
    }
  ]
});