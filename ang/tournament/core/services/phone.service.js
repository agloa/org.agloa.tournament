angular.module('tournament').factory('phone', function ($q, crmApi) {
    var returnFields = ["id","contact_id","location_type_id","is_primary","is_billing","phone","phone_type_id"];

    return {     
        // Get values/labels for option groups: phone types (mobile, fax, etc.)
        // @return Promise of option groups/values (per APIv3)
        getPhoneTypes: () => {
            return crmApi('OptionValue', 'get', {
                "sequential": 1,
                "return": ["value","label"],
                "option_group_id": "phone_type",
                "is_active": 1
            });
        },

        // Get an contact's phone record
        // @param contact_id  (per APIv3)
        // @return Promise of phone (per APIv3)
        getContactPhone: (contact_id) => {
            return crmApi('Phone', 'get', {
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
            return crmApi('Phone', 'get', {
                "sequential": 1,
                "return": returnFields,
                "id": id
            });
        }, 

        save: (phone) => {
            return crmApi('Phone', 'create', {
                "id": phone.id
                , "contact_id": phone.contact_id
                , "location_type_id": phone.location_type_id
                , "is_primary": phone.is_primary
                , "is_billing": phone.is_billing
                , "phone": phone.phone
                , "phone_type_id": phone.phone_type_id
            });
        }
    }
});