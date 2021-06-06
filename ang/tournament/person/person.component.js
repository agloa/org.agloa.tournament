'use strict';

const personTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/person/person.template.html';

angular.module('tournament').component('trnPerson', {
  templateUrl: personTemplateUrl,
  bindings: { contactId: '@' },
  controller: ['$routeParams', 'person', 'address',
    function ($routeParams, person, address) {
      var self = this;

      if ($routeParams.contactId !== undefined) {
        self.contactId = $routeParams.contactId;
      }

      self.setSelectedPerson = (person) => {
        self.last_name = person[0].last_name;
        self.first_name = person[0].first_name;
        self.middle_name = person[0].middle_name;
        if (person[0].prefix_id != null) {
        self.prefix = person[0].prefix_id.toString();
        }
        if (person[0].suffix_id != null) {
            self.suffix = person[0].suffix_id.toString();
        }
        if (person[0].gender_id != null) {
        self.gender = person[0].gender_id.toString();
        }
        self.birth_date = new Date(person[0].birth_date);

        self.contact_type = person[0].contact_type;
        self.contact_sub_type = person[0].contact_sub_type;
        self.modified_date = person[0].modified_date;
        self.email = person[0]["email.email"];
        self.phone = person[0]["phone.phone"];
        self.street_address = person[0]["address.street_address"];
        self.supplemental_address_1 = person[0]["address.supplemental_address_1"];
        self.supplemental_address_2 = person[0]["address.supplemental_address_2"];
        self.supplemental_address_3 = person[0]["address.supplemental_address_3"];
        self.city = person[0]["address.city"];
        self.postal_code = person[0]["address.postal_code"];
        self.postal_code_suffix = person[0]["address.postal_code_suffix"];
        if (person[0]["address.country_id"] != null) {
        self.country_id = person[0]["address.country_id"].toString();
        }
        if (person[0]["address.state_province_id"] != null) {
        self.state_province_id = person[0]["address.state_province_id"].toString();
        }
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
          prefix: self.prefix_id,
          suffix: self.suffix_id,
          gender: self.gender_id,
          birth_date: new Date(self.birth_date),

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

        person.save(personRecord).then(
          // Success
          () => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save person record ID = ' + self.contactId + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        );
      };

      self.delete = () => {
        person.delete(self.contactId).then(
          // Success
          () => { CRM.alert(ts("Deleted"), ts("Deleted"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not delete person record ID = ' + self.contactId + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        )
      };

      self.$onInit = function () {
        self.id = self.contactId;

        person.get(self.contactId).then(
          // Success
          (result) => {
            self.setSelectedPerson(result);
          },
          // Failure
          (error) => {
            CRM.alert(ts('Could not get person record ID = ' + self.contactId + ', error = ' + error.error_message), ts('Not Found'), 'error');
          }
        );

      person.getGenders().then(
        // Success
        (result) => {
          self.setGenders(result);
        },
        // Failure
        (error) => { CRM.alert(ts('Could not get gender options error = ' + error), ts('Not Found'), 'error'); }
      );

      person.getPrefixes().then(
        // Success
        (result) => {
          self.setPrefixes(result);
        },
        // Failure
        (error) => { CRM.alert(ts('Could not get prefix options error = ' + error), ts('Not Found'), 'error'); }
      );

      person.getSuffixes().then(
        // Success
        (result) => {
          self.setSuffixes(result);
        },
        // Failure
        (error) => { CRM.alert(ts('Could not get suffix options error = ' + error.error_message), ts('Not Found'), 'error'); }
      );

      address.getCountries().then(
        // Success
        (result) => {
          self.setCountries(result);
        },
        // Failure
        (error) => { CRM.alert(ts('Could not get countries, error = ' + error.error_message), ts('Not Found'), 'error'); }
      );

      address.getStateProvinces().then(
        // Success
        (result) => {
          self.setRegions(result);
        },
        // Failure
        (error) => { CRM.alert(ts('Could not get states/provinces, error = ' + error.error_message), ts('Not Found'), 'error'); }
      );
      };
    }
  ]
});