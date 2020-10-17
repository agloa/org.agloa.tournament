'use strict';

const personTemplateUrl = locationRoot() + '/tournament/person/person.template.html';
angular.module('tournament').component('trnPerson', {
  templateUrl: personTemplateUrl,
  bindings: {id: '@'},
  controller: ['$routeParams', 'person',
    function PersonController($routeParams, person) {
      var self = this;

      if ($routeParams.personId !== undefined) {
        self.id = $routeParams.personId;
      }
      
      // Don't include 'child' component until user requests it.
      self.includeAddress = false;

      self.addressClicked = () => {
        this.includeAddress = !this.includeAddress;
      }

      // Don't include 'child' component until user requests it.
      self.includePhone = false;

      self.phoneClicked = () => {
        this.includePhone = !this.includePhone;
      }

      // Don't include 'child' component until user requests it.
      self.includeEmail = false;

      self.emailClicked = () => {
        this.includeEmail = !this.includeEmail;
      }

      person.get(self.id).then(
        // Success
        (result) => { self.setSelectedPerson(result); },
        // Failure
        (error) => { CRM.alert(ts('Could not get person record ID = ' + self.id + ', error = ' + error.error_message), ts('Not Found'), 'error'); }
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
        self.selectedPerson = person;
        self.selectedPerson.birth_date = new Date(self.selectedPerson.birth_date);
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
        person.save(self.selectedPerson).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save person record ID = ' + self.id + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        );
      }
    }
  ]
});