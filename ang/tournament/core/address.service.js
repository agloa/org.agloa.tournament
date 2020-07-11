angular.module('tournament').factory('address', function ($q, crmApi) {
    var returnFields = ["street_address","supplemental_address_1","supplemental_address_2","supplemental_address_3","city","postal_code","postal_code_suffix","country_id","state_province_id"];

    //
    // Get the IDs of countries limited to this domain.
    //
    // returns an array of (id,name) pairs for each available country.
    //
    function getCountryLimit() {
        return crmApi('Setting', 'get', {"sequential": 1,"return": ["countryLimit"]}).then(
            // Success
            function(result){  return result.values; },
            // Failure
            function(result) { CRM.alert(ts('Unable to load available countries.'), ts('Not Found'),'error'); }
        );
    }

    return {
        // Get an contact's address record
        // @param id Contact id  (per APIv3)
        // @return Promise of address (per APIv3)
        getContactAddress: (contact_id) => {
            return crmApi('Address', 'get', {
                "sequential": 1,
                "return": returnFields,
                "contact_id": contact_id,
                "is_primary": 1
            });
        },      
        // Get an address record
        // @param id (per APIv3)
        // @return Promise of address (per APIv3)
        get: (id) => {
            return crmApi('Address', 'get', {
                "sequential": 1,
                "return": returnFields,
                "id": id
            });
        },
        // Get values/labels for option groups: countries
        // @return Promise of option groups/values (per APIv3)
        getCountries: () => {
            return getCountryLimit().then( 
                    // Success
                    function(result) {
                        return crmApi('Country', 'get', {
                                "sequential": 1,
                                "id": {"IN":result[0].countryLimit},
                                "options": {"limit":0}
                                })
                        .then(
                            // Success
                            function(result) { return result.values;},
                            // Failure
                            function(result) { CRM.alert(ts('Unable to get country options.'), ts('Not Found'),'error');},
                        );
                    },

                // Failure
                function(result) { CRM.alert(ts('Unable to get available countries.'), ts('Not Found'),'error');},
            );
        },
        // Get values/labels for option groups: countries
        // @return Promise of option groups/values (per APIv3)
        getStateProvinces: () => {
            return getCountryLimit().then( 
                    // Success
                    function(result) {
                        return crmApi('StateProvince', 'get', {
                                "sequential": 1,
                                "id": {"IN":result[0].countryLimit},
                                "options": {"limit":0}
                                })
                        .then(
                            // Success
                            function(result) { return result.values;},
                            // Failure
                            function(result) { CRM.alert(ts('Unable to get state/province options.'), ts('Not Found'),'error');},
                        );
                    },

                // Failure
                function(result) { CRM.alert(ts('Unable to get available countries.'), ts('Not Found'),'error');},
            );
        }
    }
});