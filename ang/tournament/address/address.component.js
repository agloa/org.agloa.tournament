'use strict';

angular.module('tournament').component('address', {    
  templateUrl: '~/tournament/address/address.template.html',
  bindings: {addressId: '<'},
  controller: ['$routeParams', 'address',
    function addressController($routeParams, address) {
      var self = this;
            
      if ($routeParams.addressId !== undefined) {
        self.id = $routeParams.addressId;
      }

      address.getCountries().then(
        // Success
        (result) => {self.setCountries(result);},
        // Failure
        (error)  =>  { CRM.alert(ts('Could not get countries, error = %1', {1: error}),ts('Not Found'),'error'); }
      )

      address.getStateProvinces().then(
        // Success
        (result) => {self.setStateProvinces(result);},
        // Failure
        (error)  => { CRM.alert(ts('Could not get states/provinces, error = %1', {1: error}),ts('Not Found'),'error'); }
      )

      address.get(self.id).then(
        // Success
        (result) => { self.setSelectedAddress(result.values[0]); },
        // Failure
        (error) => { CRM.alert(ts('Could not get address record ID = ' + self.id + ' error = ' + error), ts('Error'), 'error'); }
        );     
     
      self.setSelectedAddress = (address) => {
        self.selectedAddress = address;
      };

      self.setCountries = (options) => {
        self.countries = options;
        addDeselectOption(self.countries);
      };

      self.setStateProvinces = (options) => {
        self.stateProvinces = options;
        addDeselectOption(self.stateProvinces);
      };
      
      function addDeselectOption(options){
        return options.push({value:"", label:""});
      }  

      self.save = () =>  {
        address.save(self.selectedAddress).then(
        // Success
        (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
        // Failure
        (error)  => { CRM.alert(ts('Could not save address record ID = ' + self.id + ' error = ' + error), ts('Database error'), 'error'); }
        );
      }
    }
  ]
});