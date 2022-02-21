angular.module('tournament').factory('billingRelationship', function (crmApi4) {
    function getRelationshipType() {
        return crmApi4('RelationshipType', 'get', {
            select: ["id"],
            where: [["contact_type_a", "=", "Individual"], ["contact_type_b", "=", "Organization"], ["is_active", "=", true], ["description", "LIKE", "%Billing contact relationship%"]],
        }).then(
            (result) => {
                if (result.length > 0) {
                    return result[0].id;
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

    function save(crmApi4, relationship) {
        crmApi4("Relationship", "save", {
            records: [
                {
                    id: relationship.id,
                    contact_id_a: relationship.contact_id_a,
                    contact_id_b: relationship.contact_id_b,
                    relationship_type_id: relationship.relationship_type_id,
                    start_date: relationship.start_date,
                    end_date: relationship.end_date,
                    is_active: relationship.is_active,
                    description: relationship.description,
                    is_permission_a_b: relationship.is_permission_a_b,
                    is_permission_b_a: relationship.is_permission_b_a,
                },
            ],
        }).then((result) => {
            return result.id;
        });
    }

    return {
        get: (contact_id) => {
            if (contact_id) {
                return crmApi4('Relationship', 'get', {
                    select: ["id", "contact_id_b", "contact_b.modified_date", "contact_b.display_name", "start_date", "end_date", "description"],
                    where: [
                        ["contact_id_a", "=", contact_id],
                        ["is_permission_a_b", "=", true],
                        ["is_active", "=", true],
                        ["contact_b.contact_type", "=", "Organization"],
                    ]
                });
            }

            return getRelationshipType().then(
                (relationship_type_id) => {
                    return crmApi4('Relationship', 'get', {
                        select: ["id", "contact_id_b", "contact_b.modified_date", "contact_b.display_name", "start_date", "end_date", "description"],
                        where: [["is_active", "=", true],
                        ["contact_b.contact_type", "=", "Organization"],
                        ["relationship_type_id", "=", relationship_type_id]]
                    });
                },
                (error) => {
                    CRM.alert(
                        ts(`Could not get relationshipe type. Error message = ${error.error_message}`),
                        ts("Database error"),
                        "error"
                    );
                }
            )

        },
        save: (relationship) => {
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
                relationship.description = `Person id = ${relationship.contact_id_a} is the contact for billing organization with id = ${relationship.contact_id_b}`;
            }

            if (!relationship.relationship_type_id) {
                return getRelationshipType().then(
                    (result) => {
                        relationship.relationship_type_id = result;
                        return save(crmApi4, relationship);
                    },
                    (error) => {
                        CRM.alert(
                            ts(`Could not get relationshipe type. Error message = ${error.error_message}`),
                            ts("Database error"),
                            "error"
                        );
                    }
                );
            } else {
                return save(crmApi4, relationship);
            }
        },
        delete: (id) => {
            return crmApi4('Relationship', 'delete', { where: [["id", "=", id]] });
        }
    }
});