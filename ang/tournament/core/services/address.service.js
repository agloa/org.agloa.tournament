angular.module('tournament').factory('address', function (crmApi4) {
    //
    // Get the IDs of countries limited to this domain.
    //
    // returns an array of (id,name) pairs for each available country.
    //
    function getAvailableCountries() {
        return crmApi4('Setting', 'get', {
            select: ["countryLimit"]
        }).then(
            function (result) { return result[0].value; },
            function (error) { CRM.alert(ts(`Unable to load available countries. Error = [error.error_message]`), ts('Not Found'), 'error'); }
        );
    }

    return {
        // Get values/labels for option groups: countries
        // @return Promise of option groups/values (per APIv3)
        getCountries: () => {
            return getAvailableCountries().then(
                (availableCountries) => {
                    return crmApi4('Country', 'get', {
                        select: ["id", "name"],
                        where: [["id", "IN", availableCountries]]
                    }).then(
                        function (countries) { return countries; },
                        function (error) { CRM.alert(ts(`Unable to get countries. Error = {error.error_message}`), ts('Not Found'), 'error'); }
                    );
                },

                function (error) { CRM.alert(ts(`Unable to get available countries. Error = {error.error_message}`), ts('Not Found'), 'error'); },
            );
        },

        // Get values/labels for option groups: countries
        // @return Promise of option groups/values (per APIv3)
        getStateProvinces: (country_id) => {
            if (country_id) {
                return crmApi4('StateProvince', 'get', {
                    select: ["id", "name", "country_id"],
                    where: [["country_id", "=", country_id]]
                }).then(
                    function (stateProvinces) { return stateProvinces; },
                    function (error) { CRM.alert(ts(`Unable to get states/provinces. Error= {error.error_message}`), ts('Not Found'), 'error'); },
                );
            }
            return getAvailableCountries().then(
                function (availableCountries) {
                    return crmApi4('StateProvince', 'get', {
                        select: ["id", "name", "country_id"],
                        where: [["country_id", "IN", availableCountries]]
                    }).then(
                        function (stateProvinces) { return stateProvinces; },
                        function (error) { CRM.alert(ts('Unable to get states/provinces. Error:' + error.error_message), ts('Not Found'), 'error'); },
                    );
                },

                function (error) { CRM.alert(ts(`Unable to get available countries. Error = {error.error_message}`), ts('Not Found'), 'error'); },
            );
        },
    }
});