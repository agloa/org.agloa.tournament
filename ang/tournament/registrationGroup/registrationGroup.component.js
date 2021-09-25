'use strict';

const registrationGroupTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/registrationGroup/registrationGroup.template.html';

angular.module('tournament').component('trnRegistrationGroup', {
  templateUrl: registrationGroupTemplateUrl,
  bindings: {
    id: '@',
  },
  controller: ['$routeParams', 'registrationGroup',
    function ($routeParams, registrationGroup) {
      var self = this;

      if ($routeParams.registrationGroupId !== undefined) {
        self.contactId = $routeParams.registrationGroupId;
      }

      self.setSelectedregistrationGroup = (registrationGroup) => {
        self.registrationGroup_name = registrationGroup.registrationGroup_name;

        self.contact_type = registrationGroup.contact_type;
        self.contact_sub_type = registrationGroup.contact_sub_type;
        self.modified_date = registrationGroup.modified_date;

        self.email = registrationGroup["email.email"];
        self.emailId = registrationGroup["email.id"];

        self.phone = registrationGroup["phone.phone"];
        self.phoneId = registrationGroup["phone.id"];

        self.addressId = registrationGroup["address.id"];
        self.street_address = registrationGroup["address.street_address"];
        self.supplemental_address_1 = registrationGroup["address.supplemental_address_1"];
        self.supplemental_address_2 = registrationGroup["address.supplemental_address_2"];
        self.supplemental_address_3 = registrationGroup["address.supplemental_address_3"];
        self.city = registrationGroup["address.city"];
        self.postal_code = registrationGroup["address.postal_code"];
        self.postal_code_suffix = registrationGroup["address.postal_code_suffix"];

        if (registrationGroup["address.country_id"] != null) {
          self.country_id = registrationGroup["address.country_id"].toString();
        }

        if (registrationGroup["address.state_province_id"] != null) {
          self.state_province_id = registrationGroup["address.state_province_id"].toString();
        }
      };

      self.setCountries = (options) => {
        self.countries = options;
      };

      self.setRegions = (options) => {
        self.regions = options;
      };

      self.save = () => {
        var registrationGroupRecord =
        {
          id: self.id,
          contact_type: self.contact_type,
          contact_sub_type: self.contact_sub_type,
          modified_date: self.modified_date,
          requiresApproval: self.requiresApproval,
          requestorId: self.requestorId,

          registrationGroup_name: self.registrationGroup_name,

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

        registrationGroup.save(registrationGroupRecord).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save registrationGroup record ID = ' + self.id + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        );
      }

      self.delete = () => {
        registrationGroup.delete(self.id).then(
          // Success
          () => { CRM.alert(ts("Deleted"), ts("Deleted"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not delete registrationGroup record ID = ' + self.id + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        )
      }

      self.$onInit = function () {
        if (self.id == undefined && self.contactId != undefined) {
          self.id = self.contactId;
        }

        registrationGroup.get(self.id).then(
          // Success
          (result) => {
            self.setSelectedregistrationGroup(result[0]);
          },
          // Failure
          (error) => {
            CRM.alert(ts('Could not get registrationGroup record ID = ' + self.id + ', error = ' + error.error_message), ts('Not Found'), 'error');
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