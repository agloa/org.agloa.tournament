angular.module('tournament').factory('billingContact', function ($q, crmApi) {
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
                if (relationshipType.count > 0) {
                    return relationshipType[0];
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
            crmApi('Relationship', 'get', {
                "sequential": 1,
                "return": ["contact_id_b"],
                "contact_id_a": contact_id,
                "relationship_type_id": getRelationshipType()
            }).then(
                (relationships) => {
                    return relationships;
                },
                (error) => {
                    CRM.alert(ts('Could not get Billing organizations for contact id = ' + contact_id +
                        ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        },
        save: (individual_id, organization_id) => {
            crmApi('Relationship', 'create', {
                "contact_id_a": individual_id,
                "contact_id_b": organization_id,
                "relationship_type_id": getRelationshipType()
            }).then(
                (relationship) => {
                    return relationship.id;
                }, (error) => {
                    CRM.alert(ts('Could not create Billing organization relationship for contact id = ' + contact_id +
                        ', organization id =' + organization_id +
                        ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        },
    }
}
});