angular.module('tournament').factory('groupMember', function (crmApi) {
    return {
        get: (id) => {
            if (id) {
                return crmApi('GroupContact', 'get', {
                    "sequential": 1,
                    "return": ["group_id", "contact_id", "status"],
                    "id": id
                });
            }
            return crmApi('GroupContact', 'get', {
                "sequential": 1,
                "return": ["group_id", "contact_id", "status"]
            });
        },
        save: (groupMember) => {
            if (!groupMember.status) {
                groupMember.status = "Pending";
            }
            return crmApi('GroupContact', 'create', groupMember);
        },
        delete: (id) => {
            return crmApi('GroupContact', 'delete', { id }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not delete groupMember id = ' + id + ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        },
        getStatuses: () => {
            return {
                values: [
                    { label: "Pending", value: "Pending" },
                    { label: "Added", value: "Added" },
                    { label: "Removed", value: "Removed" }
                ]
            };
        },
    }
});