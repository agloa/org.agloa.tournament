angular.module('tournament').factory('address', function (crmApi) {
    //
    // Get the IDs of countries limited to this domain.
    //
    // returns an array of (id,name) pairs for each available country.
    //
    function getAvailableCountries() {
        return crmApi('Setting', 'get', { "sequential": 1, "return": ["countryLimit"] }).then(
            // Success
            function (result) { return result.values; },
            // Failure
            function (error) { CRM.alert(ts('Unable to load available countries. Error = ', error.error_message), ts('Not Found'), 'error'); }
        );
    }

    return {
        // Get values/labels for option groups: countries
        // @return Promise of option groups/values (per APIv3)
        getCountries: () => {
            return getAvailableCountries().then(
                // Success
                function (result) {
                    return crmApi('Country', 'get', {
                        "sequential": 1,
                        "id": { "IN": result[0].countryLimit },
                        "options": { "limit": 0 }
                    })
                        .then(
                            // Success
                            function (result) { return result.values; },
                            // Failure
                            function (result) { CRM.alert(ts('Unable to get country options.'), ts('Not Found'), 'error'); },
                        );
                },

                // Failure
                function (result) { CRM.alert(ts('Unable to get available countries.'), ts('Not Found'), 'error'); },
            );
        },

        // Get values/labels for option groups: countries
        // @return Promise of option groups/values (per APIv3)
        getStateProvinces: (country_id) => {
            return getAvailableCountries().then(
                // Success
                function (result) {
                    return crmApi('StateProvince', 'get', {
                        "sequential": 1,
                        "country_id": { "IN": result[0].countryLimit },
                        "options": { "limit": 0 }
                    })
                        .then(
                            // Success
                            function (result) { return result.values; },
                            // Failure
                            function (error) { CRM.alert(ts('Unable to get states/provinces. Error:' + error.error_message), ts('Not Found'), 'error'); },
                        );
                },

                // Failure
                function (result) { CRM.alert(ts('Unable to get available countries.'), ts('Not Found'), 'error'); },
            );
        },
    }
});