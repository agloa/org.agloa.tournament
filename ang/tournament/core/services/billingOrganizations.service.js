angular.module('tournament').factory('billingOrganizations', function (crmApi4) {
    function getContactType() {
        crmApi4('ContactType', 'get', {
            select: ["id"],
            where: [["label", "=", "Billing Organization"], ["parent_id:name", "=", "Organization"], ["is_active", "=", true]],
            limit: 25
        }).then(
            (result) => {
                if (result.count > 0) {
                    return result.id;
                } else {
                    crmApi4('ContactType', 'create', {
                        values: { "name": "billingOrganization", "label": "Billing Organization", "description": "Organization that will pay,  e.g.,  registration fees", "parent_id:name": "Organization", "is_active": true }
                    }).then(
                        (contactType) => {
                            return contactType.id;
                        },
                        (error) => {
                            CRM.alert(ts('Could not create Billing organization contact type , error = ' + error.error_message), ts('Error'), 'error');
                        }
                    );
                }
            },
            (error) => {
                CRM.alert(ts('Could not get Billing Contact type , error = ' + error.error_message), ts('Error'), 'error');
            }
        )
    };

    return {
        get: (id) => {
            let wherClause = (id) ? [
                ["contact_type", "=", "Organization"],
                ["contact_sub_type", "=", "billingOrganization"],
                ["id", "=", id]
            ]
                : [["contact_type", "=", "Organization"], ["contact_sub_type", "=", "billingOrganization"]];

            return crmApi4('Contact', 'get', {
                select: ["id", "contact_sub_type", "organization_name", "modified_date",
                    "email.id", "email.email",
                    "phone.id", "phone.phone",
                    "address.id", "address.street_address", "address.supplemental_address_1", "address.supplemental_address_2", "address.supplemental_address_3", "address.city", "address.state_province_id", "address.country_id", "address.postal_code", "address.postal_code_suffix"
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

            if (!organization.contact_sub_type) {
                organization.contact_sub_type = getContactType();
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