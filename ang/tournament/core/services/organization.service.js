angular.module('tournament').factory('organization', function (crmApi) {
    return {
        // Get an organizational contact record
        // @param id Contact id  (per APIv3)
        // @return Promise of Contact (per APIv3)
        get: (id, contact_sub_type) => {
            if (id) {
                return crmApi('Contact', 'getsingle', {
                    //                   "return": ["organization_name"],
                    //                   "return": ["id", "contact_sub_type", "organization_name", "modified_date", "email", "phone", "street_address", "supplemental_address_1", "supplemental_address_2", "supplemental_address_3", "city", "postal_code", "postal_code_suffix", "country_id", "state_province_id"],
                    "id": id
                });
            }
            else {
                return crmApi('Contact', 'get', {
                    "sequential": 1,
                    //                   "return": ["id", "organization_name"],
                    "contact_type": "Organization",
                    "contact_sub_type": contact_sub_type
                });
            }
        },
        save: (organization) => {
            if (!organization.contact_type) {
                organization.contact_type = "Organization";
            }

            return crmApi('Contact', 'create', {
                'id': organization.id,
                'organization_name': organization.organization_name,
                'contact_type': organization.contact_type
            });
        },
        delete: (id) => {
            return crmApi('Contact', 'delete', { id });
        }
    }
});