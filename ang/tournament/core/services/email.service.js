angular.module('tournament').factory('email', function ($q, crmApi) {
    var returnFields = ["id","contact_id","location_type_id","is_primary","is_billing","email"];

    return {     
        // Get an contact's email record
        // @param contact_id  (per APIv3)
        // @return Promise of email (per APIv3)
        getContactEmail: (contact_id) => {
            return crmApi('Email', 'get', {
                "sequential": 1,
                "return": returnFields,
                "contact_id": contact_id,
                "is_primary": 1
            });
        },      

        // Get an email record
        // @param id (per APIv3)
        // @return Promise of email (per APIv3)
        get: (id) => {
            return crmApi('Email', 'get', {
                "sequential": 1,
                "return": returnFields,
                "id": id
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