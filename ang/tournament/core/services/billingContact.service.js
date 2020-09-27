angular.module('tournament').factory('billingContact', function ($q, crmApi) {
    function createBillingOrganizationContactType() {
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

    function getRelationshipType() {
        var params = {
            "sequential": 1,
            "return": ["id"],
            "contact_type_a": "Individual",
            "contact_type_b": "Organization",
            "is_active": 1,
            "description": { "LIKE": "%Billing contact relationship%" }
        };

        crmApi('RelationshipType', 'get', params).then(
            (relationshipType) => {
                if (relationshipType.values.length > 0) {
                    return relationshipType.values[0];
                } else {
                    crmApi('RelationshipType', 'create', {
                        "name_a_b": "Billing contact for",
                        "name_b_a": "Billing contact is",
                        "label_a_b": "Billing contact for",
                        "label_b_a": "Billing contact is",
                        "description": "Billing contact relationship",
                        "contact_type_a": "Individual",
                        "contact_type_b": "Organization",
                        "is_active": 1
                    }).then(
                        (relationshipType) => {
                            return relationshipType.id;
                        },
                        (error) => {
                            CRM.alert(ts('Could not create Billing contact relationship , error = ' + error.error_message), ts('Error'), 'error');
                        }
                    );
                };
            },
            (error) => {
                CRM.alert(ts('Could not get Billing contact relationship , error = ' + error.error_message), ts('Error'), 'error');
            }
        )
    };

    function getContactType() {
        crmApi('ContactType', 'get', {
            "sequential": 1,
            "name": {"LIKE":"%billing%"},
            "parent_id": "Organization",
            "is_active": 1
          }).then((result) => { return result.values[0];}, 
            (error) => {
                CRM.alert(ts('Could not get Billing contact relationship , error = ' + error.error_message), ts('Error'), 'error');
          });

        crmApi('RelationshipType', 'get', params).then(
            (relationshipType) => {
                if (relationshipType.values.length > 0) {
                    return relationshipType.values[0];
                } else {
                    crmApi('RelationshipType', 'create', {
                        "name_a_b": "Billing contact for",
                        "name_b_a": "Billing contact is",
                        "label_a_b": "Billing contact for",
                        "label_b_a": "Billing contact is",
                        "description": "Billing contact relationship",
                        "contact_type_a": "Individual",
                        "contact_type_b": "Organization",
                        "is_active": 1
                    }).then(
                        (relationshipType) => {
                            return relationshipType.id;
                        },
                        (error) => {
                            CRM.alert(ts('Could not create Billing contact relationship , error = ' + error.error_message), ts('Error'), 'error');
                        }
                    );
                };
            },
            (error) => {
                CRM.alert(ts('Could not get Billing contact relationship , error = ' + error.error_message), ts('Error'), 'error');
            }
        )
    };

    return {
        get: (contact_id) => {
            return crmApi('Relationship', 'get', {
                "sequential": 1,
                "return": ["contact_id_b.id", "contact_id_b.modified_date", "contact_id_b.organization_name"],
                "contact_id_a": contact_id,
                "relationship_type_id": getRelationshipType()
            });
        },
        save: (individual_id, organization_id) => {
            crmApi('Relationship', 'create', {
                "contact_id_a": individual_id,
                "contact_id_b": organization_id,
                "relationship_type_id": getRelationshipType()
            }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not create Billing organization relationship for contact id = ' + contact_id +
                        ', organization id =' + organization_id +
                        ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        },
        delete: (individual_id, organization_id) => {
            crmApi('Relationship', 'delete', {
                "contact_id_a": individual_id,
                "contact_id_b": organization_id,
                "relationship_type_id": getRelationshipType()
            }).then(
                (relationship) => {
                    return relationship.id;
                }, (error) => {
                    CRM.alert(ts('Could not delete Billing organization relationship for contact id = ' + contact_id +
                        ', organization id =' + organization_id +
                        ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        },
        getBillingOrganizations: () => {
            crmApi('Contact', 'get', {
                "sequential": 1,
                "return": ["id", "organization_name"],
                "contact_sub_type": "billingOrganization"
            }).then(
                (result) => {
                    return result.values;
                }, (error) => {
                    CRM.alert(ts('Could not get billing organizations, error = ' + error.error_message), ts('Error'), 'error');
                });
        },
        createBillingOrganization: (organizationName) => {
            ('Contact', 'create', {
                "contact_type": "Organization",
                "contact_sub_type": "billingOrganization",
                "organization_name": "Test Billing Organization"
            }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not create Billing organization ' + organizationName +
                        ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        }
    }
});