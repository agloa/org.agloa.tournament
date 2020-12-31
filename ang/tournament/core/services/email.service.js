angular.module('tournament').factory('email', function (crmApi) {
    return {
        // Get an email record
        // @param id Contact id (per APIv3)
        // @param id (per APIv3)
        // @return Promise of email (per APIv3)
        get: (contact_id, id) => {
            if (contact_id) {
                return crmApi('Email', 'get', {
                    "sequential": 1,
                    "return": ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "email"],
                    "contact_id": contact_id,
                    "is_primary": 1
                });
            }

            if (id) {
                return crmApi('Email', 'get', {
                    "sequential": 1,
                    "return": ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "email"],
                    "id": id
                });
            }

            return crmApi('Email', 'get', {
                "sequential": 1,
                "return": ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "email"]
            });
        },

        save: (email) => {
            return crmApi('Email', 'create', {
                "id": email.id
                , "contact_id": email.contact_id
                , "location_type_id": email.location_type_id
                , "is_primary": email.is_primary
                , "is_billing": email.is_billing
                , "email": email.email
            });
        }
    }
});