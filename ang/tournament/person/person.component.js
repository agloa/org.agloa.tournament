'use strict';

const personTemplateUrl = locationRoot() + '/tournament/person/person.template.html';
angular.module('tournament').component('trnPerson', {
  templateUrl: personTemplateUrl,
  bindings: { contactId: '@' },
  controller: ['$routeParams', 'person',
    function ($routeParams, person) {
      var self = this;

      if ($routeParams.contactId !== undefined) {
        self.contactId = $routeParams.contactId;
      }

      // Don't display 'child' component until user requests it.
      self.displayAddress = false;

      self.addressClicked = () => {
        this.displayAddress = !this.displayAddress;
      }

      // Don't display 'child' component until user requests it.
      self.displayPhone = false;

      self.phoneClicked = () => {
        this.displayPhone = !this.displayPhone;
      }

      // Don't display 'child' component until user requests it.
      self.displayEmail = false;

      self.emailClicked = () => {
        this.displayEmail = !this.displayEmail;
      }

      person.get(self.contactId).then(
        // Success
        (result) => { self.setSelectedPerson(result); },
        // Failure
        (error) => { CRM.alert(ts('Could not get person record ID = ' + self.contactId + ', error = ' + error.error_message), ts('Not Found'), 'error'); }
      );

      person.getGenders().then(
        // Success
        (result) => { self.setGenders(result); },
        // Failure
        (error) => { CRM.alert(ts('Could not get gender options error = ' + error), ts('Not Found'), 'error'); }
      )

      person.getPrefixes().then(
        // Success
        (result) => { self.setPrefixes(result); },
        // Failure
        (error) => { CRM.alert(ts('Could not get prefix options error = ' + error), ts('Not Found'), 'error'); }
      )

      person.getSuffixes().then(
        // Success
        (result) => { self.setSuffixes(result); },
        // Failure
        (error) => { CRM.alert(ts('Could not get suffix options error = ' + error.error_message), ts('Not Found'), 'error'); }
      )

      self.setSelectedPerson = (person) => {
        self.last_name = person.last_name;
        self.first_name = person.first_name;
        self.middle_name = person.middle_name;
        self.prefix = person.prefix_id;
        self.suffix = person.suffix_id;
        self.gender = person.gender_id;
        self.birth_date = new Date(person.birth_date);
      };

      self.setGenders = (options) => {
        self.genders = options.values;
        addDeselectOption(self.genders);
      };

      self.setPrefixes = (options) => {
        self.prefixes = options.values;
        addDeselectOption(self.prefixes);
      };

      self.setSuffixes = (options) => {
        self.suffixes = options.values;
        addDeselectOption(self.suffixes);
      };

      function addDeselectOption(options) {
        return options.push({ value: "", label: "" });
      }

      self.save = () => {
        var personRecord =
        {
          "id": self.contactId,
          "contact_type": "Individual",
          "last_name": self.last_name,
          "first_name": self.first_name,
          "middle_name": self.middle_name,
          "prefix_id": self.prefix,
          "suffix_id": self.suffix,
          "gender_id": self.gender,
          "birth_date": self.birth_date
        }

        person.save(personRecord).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save person record ID = ' + self.contactId + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        );
      }
    }
  ]
});