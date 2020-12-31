angular.module('tournament').factory('billingOrganizations', function (crmApi) {
   
    function getContactType() {
        const params = {
            "label": "Billing Organization",
            "parent_id": "Organization",
            "is_active": 1
        };

        crmApi('ContactType', 'get', params).then(
            (result) => {
                if (result.count > 0) {
                    return result.id;
                } else {
                    crmApi('ContactType', 'create', {
                        "name": "billingOrganization",
                        "label": "Billing Organization",
                        "description": "Organization that will pay, e.g., registration fees",
                        "parent_id": "Organization",
                        "is_active": 1
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
        getAll: () => {
            return crmApi('Contact', 'get', {
                "sequential": 1,
                "return": ["id", "organization_name"],
                "contact_sub_type": "billingOrganization"
            });
        },
        save: (organizationName) => {
            ('Contact', 'create', {
                "contact_type": "Organization",
                "contact_sub_type": getContactType(),
                "organization_name": organizationName
            }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not save Billing Organization ' + organizationName +
                        ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        },
        delete: (id) => {
            crmApi('Contact', 'delete', { id }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not delete Billing Organization id = ' + id +
                        ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        }
    }
});