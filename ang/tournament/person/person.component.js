'use strict';

angular.module('tournament').component('person', {
  templateUrl: '~/tournament/person/person.template.html',
  bindings: {id: '<'},
  controller: ['$routeParams', 'person',
    function PersonController($routeParams, person) {
      var self = this;
            
      if ($routeParams.id !== undefined) {
          self.id = $routeParams.id;
      }

      person.getGenders().then(
        // Success
        (result) => {self.setGenders(result);},
        // Failure
        (error)  =>  { CRM.alert(ts('Could not get gender options error = %1', {1: error}),ts('Not Found'),'error'); }
      )

      person.getPrefixes().then(
        // Success
        (result) => {self.setPrefixes(result);},
        // Failure
        (error)  => { CRM.alert(ts('Could not get prefix options error = %1', {1: error}),ts('Not Found'),'error'); }
      )

      person.getSuffixes().then(
        // Success
        (result) => {self.setSuffixes(result);},
        // Failure
        (error) => { CRM.alert(ts('Could not get suffix options error = %1', {1: error}),ts('Not Found'),'error'); }
      )

      person.get(self.id).then(
            // Success
            (result) => { self.setSelectedPerson(result); },
            // Failure
            (error) => { CRM.alert(ts('Could not get person record ID of %1, error = %2', {1: self.id, 2: error}),ts('Not Found'),'error'); }
        );

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
      
      function addDeselectOption(options){
        return options.push({value:"", label:""});
      }  

      self.save = () =>  {
          person.save(self.selectedPerson).then(
            // Success
            (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
            // Failure
            (error)  => { CRM.alert(ts('Could not save person record ID = %1, error = %2', {1: self.selectedPerson.id, 2: error}),ts('Database Error'),'error'); }
          );
      }
    }
  ]
});