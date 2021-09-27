angular.module('tournament').factory('billingRelationships', function (crmApi4) {
    function getRelationshipType() {
        crmApi4('RelationshipType', 'get', {
            select: ["id"],
            where: [["contact_type_a", "=", "Individual"], ["contact_type_b", "=", "Organization"], ["is_active", "=", true], ["description", "LIKE", "%Billing contact relationship%"]],
        }).then(
            (relationshipType) => {
                if (relationshipType.length > 0) {
                    return relationshipType[0];
                } else {
                    crmApi4('RelationshipType', 'create', {
                        values: { "name_a_b": "Billing contact for", "name_b_a": "Billing contact is", "label_a_b": "Billing contact for", "label_b_a": "Billing contact is", "description": "Billing contact relationship", "contact_type_a": "Individual", "contact_type_b": "Organization", "is_active": true }
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
            let where = (contact_id) ? [
                ["contact_id_a", "=", contact_id],
                ["is_permission_a_b", "=", 1],
                ["contact_b.contact_type", "=", "Organization"],
                ["relationship_type_id", "=", getRelationshipType()]
            ]
                : ["relationship_type_id", "=", getRelationshipType()];

            return crmApi4('Relationship', 'get', {
                select: ["contact_id_b", "contact_b.modified_date", "contact_b.display_name"],
                where: where,
                limit: 25,
                checkPermissions: false, // IGNORED: permissions are always enforced from client-side requests
                current: true
            });
        },
        save: (individual_id, organization_id) => {
            crmApi4('Relationship', 'create', {
                values: { "contact_id_a": individual_id, "contact_id_b": organization_id, "relationship_type_id": getRelationshipType() }
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
            crmApi4('Relationship', 'delete', {
                where: [
                    ["contact_id_a", "=", 2],
                    ["contact_id_b", "=", 15],
                    ["relationship_type_id", "=", getRelationshipType()]
                ],
            }).then(
                (relationship) => {
                    return relationship.id;
                }, (error) => {
                    CRM.alert(ts('Could not delete Billing organization relationship for contact id = ' + contact_id +
                        ', organization id =' + organization_id +
                        ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        }
    }
});