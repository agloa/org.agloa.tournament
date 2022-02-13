angular.module('tournament').factory('accessControl',
    function (crmApi4) {
        return {
            get: (contact_id) => {
                let where = [["deny", "=", false], ["is_active", "=", true], ["role.is_active", "=", true], ["access_group.is_active", "=", true], ["contacts_group.is_active", "=", true], ["contacts.status", "=", "Added"]];
                if (contact_id) {
                    where.push(["contacts.contact_id", "=", contact_id]);
                }
                return crmApi4('ACL', 'get', {
                    select: ["operation", "access_group.id", "access_group.title", "contacts_group.id", "contacts_group.title", "contacts.contact_id"],
                    join: [["ACLEntityRole AS role", "INNER", ["entity_id", "=", "role.acl_role_id"]], ["Group AS access_group", "INNER", ["role.entity_id", "=", "access_group.id"]], ["Group AS contacts_group", "INNER", ["object_id", "=", "contacts_group.id"]], ["GroupContact AS contacts", "INNER", ["access_group.id", "=", "contacts.group_id"]]],
                    where: where
                });
            }
        }
    }
);