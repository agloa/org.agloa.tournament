angular.module('tournament').factory('address', function ($q, crmApi) {
    var returnFields = ["id"
    , "contact_id"
    , "location_type_id"
    , "is_primary"
    , "is_billing"
    ,"street_address"
    ,"supplemental_address_1"
    ,"supplemental_address_2"
    ,"supplemental_address_3"
    ,"city","postal_code"
    ,"postal_code_suffix"
    ,"country_id"
    ,"state_province_id"];

    //
    // Get the IDs of countries limited to this domain.
    //
    // returns an array of (id,name) pairs for each available country.
    //
    function getAvailableCountries() {
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
            return getAvailableCountries().then( 
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
        getStateProvinces: (country_id) => {
            return getAvailableCountries().then( 
                    // Success
                    function(result) {
                        return crmApi('StateProvince', 'get', {
                                "sequential": 1,
                                "country_id": {"IN":result[0].countryLimit},
                                "options": {"limit":0}
                            })
                        .then(
                            // Success
                            function(result) { return result.values;},
                            // Failure
                            function(result) { CRM.alert(ts('Unable to get states/provinces.'), ts('Not Found'),'error');},
                        );
                    },

                // Failure
                function(result) { CRM.alert(ts('Unable to get available countries.'), ts('Not Found'),'error');},
            );
        },

        save: (address) => {
            return crmApi('Address', 'create', {
                "id": address.id
                , "contact_id": address.contact_id
                , "location_type_id": address.location_type_id
                , "is_primary": address.is_primary
                , "is_billing": address.is_billing,
                "street_address": address.street_address,
                "supplemental_address_1": address.supplemental_address_1,
                "supplemental_address_2": address.supplemental_address_2,
                "supplemental_address_3": address.supplemental_address_3,
                "city": address.city,
                "state_province_id": address.state_province_id,
                "postal_code": address.postal_code,
                "postal_code_suffix": address.postal_code_suffix,
                "country_id": address.country_id
            });
        }
    }
});