angular.module('tournament').factory('registrationGroup', function (crmApi4) {
    function getRegistrationGroupType() {
        return crmApi4('')
    }

    function createRegistrationGroupType() {
        crmApi4('OptionValue', 'create', {
            values: { "label": "Registration Group", "name": "registrationGroup", "option_group_id": 22 },
            checkPermissions: false // IGNORED: permissions are always enforced from client-side requests
        }).then(function (results) {
            // do something with results array
        }, function (failure) {
            // handle failure
        });
    }
    return {
        get: (id) => {

        },
        save: (registrationGroup) => {

        },

        delete: (id) => {

        }
    }
});