angular.module('tournament').factory('organization', function (crmApi, crmApi4) {
    return {
        // Get an organizational contact record
        get: (id, contact_sub_type) => {
            wherClause = id ? [["id", "=", id]] : [[1]];
            return crmApi4('Contact', 'get', {
                select: ["id", "contact_sub_type", "organization_name", "modified_date",
                    "email.email",
                    "phone.phone",
                    "address.street_address", "address.supplemental_address_1", "address.supplemental_address_2", "address.supplemental_address_3", "address.city", "address.state_province_id", "address.country_id", "address.postal_code", "address.postal_code_suffix"
                ],
                join: [
                    ["Email AS email", false, null],
                    ["Phone AS phone", false, null],
                    ["Address AS address", false, null]
                ],
                where: wherClause
            });
        },
        save: (organization) => {
            if (!organization.contact_type) {
                organization.contact_type = "Organization";
            }

            return crmApi4('Contact', 'save', {
                records: [{
                    "id": organization.id,
                    "contact_type": organization.contact_type,
                    "contact_sub_type": organization.contact_sub_type,
                    "organization_name": organization.organization_name,
                }],
                chain: {
                    "emailSave": ["Email", "save", { "records": [{ "contact_id": organization.id, "id": organization.emailId, "email": organization.email }] }],
                    "phoneSave": ["Phone", "save", { "records": [{ "contact_id": organization.id, "id": organization.phoneId, "phone": organization.phone }] }],
                    "addressSave": ["Address", "save", {
                        "records": [{
                            "contact_id": organization.id, "id": organization.addressId,
                            "street_address": organization.street_address,
                            "supplemental_address_1": organization.supplemental_address_1, "supplemental_address_2": organization.supplemental_address_2, "supplemental_address_3": organization.supplemental_address_3,
                            "city": organization.city, "state_province_id": organization.state_province_id, "country_id": organization.country_id,
                            "postal_code": organization.postal_code, "postal_code_suffix": organization.postal_code_suffix
                        }]
                    }]

                }
            })
        },

        delete: (id) => {
            return crmApi4('Contact', 'delete', { where: [["id", "=", id]] });
        }
    }
});