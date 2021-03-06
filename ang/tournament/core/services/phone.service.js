angular.module('tournament').factory('phone', function (crmApi) {
    return {
        // Get an address record
        // @param contact_id  (per APIv3)
        // @param id (per APIv3)
        // @return Promise of address (per APIv3)
        get: (contact_id, id) => {
            if (contact_id) {
                return crmApi('Phone', 'get', {
                    "sequential": 1,
                    "return":  ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "phone", "phone_type_id"],
                    "contact_id": contact_id,
                    "is_primary": 1
                });
            }
            if (id) {
                return crmApi('Phone', 'get', {
                    "sequential": 1,
                    "return":  ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "phone", "phone_type_id"],
                    "id": id,
                    "is_primary": 1
                });
            }
            return crmApi('Phone', 'get', {
                "sequential": 1,
                "return":  ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "phone", "phone_type_id"]
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