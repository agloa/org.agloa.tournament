angular.module('tournament').factory('group', function (crmApi) {
    return {
        get: (id) => {
            return crmApi('Group', 'get', {
                "sequential": 1,
                "return": ["title"],
                "id": id
            });
        },
        save: (group) => {
            if (!group.contact_type) {
                group.contact_type = "Access Control";
            }
            // if new (no id) and requestor is not admin, org requires approval
            return crmApi('Contact', 'create', group);
        },
        delete: (id) => {
            return crmApi('Group', 'delete', { id }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not delete group id = ' + id + ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        }
    }
});