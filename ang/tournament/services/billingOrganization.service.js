angular.module('tournament').factory('billingOrganization', function (crmApi4) {
    function getContactType() {
        const label = "Billing Organization";
        return crmApi4('ContactType', 'get', {
            select: ["id"],
            where: [["label", "=", label], ["parent_id:name", "=", "Organization"], ["is_active", "=", true]],
        }).then(
            (result) => {
                if (result.length > 0) {
                    return result[0].id;
                } else {
                    crmApi4('ContactType', 'create', {
                        values: { "name": "billingOrganization", "label": label, "description": "Organization that will pay, e.g.,  registration fees", "parent_id:name": "Organization", "is_active": true }
                    }).then(
                        (contactType) => {
                            return contactType.id;
                        }
                    );
                }
            }
        )
    };

    function save(crmApi4, organization) {
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
    }

    return {
        get: (id) => {
            return getContactType().then(
                (contactType) => {
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
                        where: (id) ? [["id", "=", id]] : [["contact_type", "=", contactType]]
                    });
                },
                (error) => {
                    CRM.alert(
                        ts(`Could not get relationshipe type. Error message: = ${error.error_message}`),
                        ts("Database error"),
                        "error"
                    );
                }
            );
        },
        save: (organization) => {
            if (!organization.contact_type) {
                getContactType().then(
                    (contactType) => {
                        organization.contact_type = contactType;
                        return save(crmApi4, organization);
                    },
                    (error) => {
                        CRM.alert(
                            ts(`Could not get relationshipe type. Error message: = ${error.error_message}`),
                            ts("Database error"),
                            "error"
                        );
                    });
            }

            return save(crmApi4, organization);
        },
        delete: (id) => {
            return crmApi4('Contact', 'delete', { where: [["id", "=", id]] });
        }
    }
});