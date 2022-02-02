'use strict';

const personTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/person/person.template.html';

angular.module('tournament').component('trnPerson', {
  templateUrl: personTemplateUrl,
  bindings: { contactId: '@' },
  controller: ['$routeParams', 'person', 'address',
    function ($routeParams, person, address) {
      var self = this;

      if ($routeParams.contactId) {
        self.contactId = $routeParams.contactId;
      }

      self.setSelectedPerson = (person) => {
        const selectedPerson = person[0];

        self.last_name = selectedPerson.last_name;
        self.first_name = selectedPerson.first_name;
        self.middle_name = selectedPerson.middle_name;

        self.prefix = selectedPerson.prefix_id?.toString();
        self.suffix = selectedPerson.suffix_id?.toString();
        self.gender = selectedPerson.gender_id?.toString();

        self.birth_date = new Date(selectedPerson.birth_date);

        self.contact_type = selectedPerson.contact_type;
        self.contact_sub_type = selectedPerson.contact_sub_type;
        self.modified_date = selectedPerson.modified_date;

        self.emailId = selectedPerson["email.id"];
        self.email = selectedPerson["email.email"];
        self.phoneId = selectedPerson["phone.id"];
        self.phone = selectedPerson["phone.phone"];

        self.addressId = selectedPerson["address.id"];
        self.street_address = selectedPerson["address.street_address"];
        self.supplemental_address_1 = selectedPerson["address.supplemental_address_1"];
        self.supplemental_address_2 = selectedPerson["address.supplemental_address_2"];
        self.supplemental_address_3 = selectedPerson["address.supplemental_address_3"];
        self.city = selectedPerson["address.city"];
        self.postal_code = selectedPerson["address.postal_code"];
        self.postal_code_suffix = selectedPerson["address.postal_code_suffix"];
        self.country_id = selectedPerson["address.country_id"];
        self.state_province_id = selectedPerson["address.state_province_id"];
      };

      self.setGenders = (options) => {
        self.genders = options;
        self.genders.push({ value: "", label: "" });
      };

      self.setPrefixes = (options) => {
        self.prefixes = options;
        self.prefixes.push({ value: "", label: "" });
      };

      self.setSuffixes = (options) => {
        self.suffixes = options;
        self.suffixes.push({ value: "", label: "" });
      };

      self.setCountries = (options) => {
        self.countries = options;
      };

      self.setRegions = (options) => {
        self.regions = options;
      };

      self.save = () => {
        var personRecord =
        {
          id: self.contactId,
          contact_type: self.contact_type,
          contact_sub_type: self.contact_sub_type,
          modified_date: self.modified_date,

          last_name: self.last_name,
          first_name: self.first_name,
          middle_name: self.middle_name,
          prefix_id: self.prefix,
          suffix_id: self.suffix,
          gender_id: self.gender,
          birth_date: new Date(self.birth_date),

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

        person.save(personRecord).then(
          // Success
          () => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts(`Could not save person record ID = ' + self.contactId + ', error = ${error.error_message}`), ts('Database Error'), 'error'); }
        );
      };

      self.delete = () => {
        person.delete(self.contactId).then(
          // Success
          () => { CRM.alert(ts("Deleted"), ts("Deleted"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts(`Could not delete person record ID = ' + self.contactId + ', error = ${error.error_message}`), ts('Database Error'), 'error'); }
        )
      };

      self.$onInit = function () {
        self.id = self.contactId;

        person.get(self.contactId).then(
          (selectedPerson) => {
            self.setSelectedPerson(selectedPerson);
          },
          (error) => {
            CRM.alert(ts(`Could not get person record ID = ${self.contactId}, error = ${error.error_message}`), ts('Not Found'), 'error');
          }
        );

        person.getGenders().then(
          // Success
          (result) => {
            self.setGenders(result);
          },
          // Failure
          (error) => { CRM.alert(ts(`Could not get gender options, error = ${error.error_message}`), ts('Not Found'), 'error'); }
        );

        person.getPrefixes().then(
          // Success
          (result) => {
            self.setPrefixes(result);
          },
          // Failure
          (error) => { CRM.alert(ts(`Could not get prefix options, error = ${error.error_message}`), ts('Not Found'), 'error'); }
        );

        person.getSuffixes().then(
          // Success
          (result) => {
            self.setSuffixes(result);
          },
          // Failure
          (error) => { CRM.alert(ts(`Could not get suffix options error = ${error.error_message}`), ts('Not Found'), 'error'); }
        );

        address.getCountries().then(
          // Success
          (countries) => {
            self.setCountries(countries);
          },
          // Failure
          (error) => { CRM.alert(ts(`Could not get countries, error = ${error.error_message}`), ts('Not Found'), 'error'); }
        );

        address.getStateProvinces().then(
          // Success
          (result) => {
            self.setRegions(result);
          },
          // Failure
          (error) => { CRM.alert(ts(`Could not get states/provinces, error = ${error.error_message}`), ts('Not Found'), 'error'); }
        );
      };
    }
  ]
});
