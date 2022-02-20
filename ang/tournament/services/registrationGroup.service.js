angular.module('tournament').factory('registrationGroup', function (crmApi4) {
    const registrationGroupType = 4;
    return {
        get: (groupId) => {
            let where = [["is_active", "=", true], ["is_hidden", "=", false], ["group_type", "CONTAINS", registrationGroupType]];
            if (groupId) {
                where.push(["id.contact_id", "=", groupId]);
            }
            crmApi4('Group', 'get', {
                select: ["id", "title", "created_id", "modified_id", "group_contact.group_id:label", "group_contact.contact_id"],
                join: [["GroupContact AS group_contact", "LEFT", ["id", "=", "group_contact.group_id"]]],
                where: where,
                limit: 800
            });
        }
    }
});