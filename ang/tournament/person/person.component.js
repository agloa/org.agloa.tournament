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

      // person service get options for dropdowns
      person.getOptions().then(
        // Success
        function(result){
            self.setOptions(result);
        },
        // Failure
        function (error) { 
            CRM.alert(ts('Could not get person dropdown options error = %1', {1: error}),ts('Not Found'),'error'); 
        }
      )

      // person service get returns data for person id
      person.get(self.id)
        .then(
            // Success
            function(result) { 
                self.setSelectedPerson(result);
            },
            // Failure
            function (error) { 
                CRM.alert(ts('Could not get person record ID of %1, error = %2', {1: self.id, 2: error}),ts('Not Found'),'error'); 
            }
        );

      self.setSelectedPerson = function setSelectedPerson(person) {
        self.selectedPerson = person;
        self.selectedPerson.birth_date = new Date(self.selectedPerson.birth_date);
      };

      self.setOptions = function setOptions(options) {
        // ng-options="option.value as option.label for option in $ctrl.people.prefixes"
        self.people = {
            genders : options.values[0]["api.OptionValue.get"].values,
            prefixes: options.values[1]["api.OptionValue.get"].values,
            suffixes: options.values[2]["api.OptionValue.get"].values
        };
      };

      self.save = function save() {
        alert('Saving...' + JSON.stringify(self.selectedPerson));
      }
    }
  ]
});