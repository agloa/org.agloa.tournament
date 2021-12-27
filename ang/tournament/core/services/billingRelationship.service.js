angular.module('tournament').factory('billingRelationship', function (crmApi4) {
    function getRelationshipType() {
        crmApi4('RelationshipType', 'get', {
            select: ["id"],
            where: [["contact_type_a", "=", "Individual"], ["contact_type_b", "=", "Organization"], ["is_active", "=", true], ["description", "LIKE", "%Billing contact relationship%"]],
        }).then(
            (relationshipType) => {
                if (relationshipType.count > 0) {
                    return relationshipType.id;
                } else {
                    crmApi4('RelationshipType', 'create', {
                        values: { "name_a_b": "billingContactFor", "name_b_a": "billingContactIs", "label_a_b": "Billing contact for", "label_b_a": "Billing contact is", "description": "Billing contact relationship", "contact_type_a": "Individual", "contact_type_b": "Organization", "is_active": true }
                    }).then(
                        (relationshipType) => {
                            return relationshipType.id;
                        }
                    );
                };
            }
        )
    };

    return {
        get: (contact_id) => {
            let where = (contact_id) ? [
                ["contact_id_a", "=", contact_id],
                ["is_permission_a_b", "=", true],
                ["contact_b.contact_type", "=", "Organization"],
                ["relationship_type_id", "=", "billingContactFor"]
            ]
                : ["relationship_type_id", "=", "billingContactFor"];

            return crmApi4('Relationship', 'get', {
                select: ["contact_id_b", "contact_b.modified_date", "contact_b.display_name", "start_date", "end_date", "description"],
                where: where
            });
        },
        save: (relationship) => {
            if (!relationship.relationship_type_id) {
                relationship.relationship_type_id = getRelationshipType();
            }

            if (!relationship.start_date) {
                relationship.start_date = Date.now();
            }

            if (!relationship.is_active) {
                relationship.is_active = true;
            }

            if (!relationship.is_permission_a_b) {
                relationship.is_permission_a_b = true;
            }

            if (!relationship.is_permission_b_a) {
                relationship.is_permission_b_a = false;
            }

            if (!relationship.description) {
                relationship.description =
                    "Person id = " +
                    relationship.contact_id_a +
                    " is the contact for billing organization with id = " +
                    relationship.contact_id_b;
            }

            crmApi4('Relationship', 'save', {
                records: [{
                    "id": relationship.id,
                    "contact_id_a": relationship.contact_id_a,
                    "contact_id_b": relationship.contact_id_b,
                    "relationship_type_id": relationship.relationship_type_id,
                    "start_date": relationship.start_date,
                    "end_date": relationship.end_date,
                    "is_active": relationship.is_active,
                    "description": relationship.description,
                    "is_permission_a_b": relationship.is_permission_a_b,
                    "is_permission_b_a": relationship.is_permission_b_a
                }]
            }).then(
                (result) => {
                    return result.id;
                });
        },
        delete: (id) => {
            return crmApi4('Relationship', 'delete', { where: [["id", "=", id]] });
        }
    }
});