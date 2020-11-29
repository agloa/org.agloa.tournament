angular.module('tournament').factory('group', function (crmApi) {
    return {
        get: (id, title) => {
            if (title) {
                return crmApi('Group', 'get', {
                    "sequential": 1,
                    "return": ["title"],
                    "title": title
                });
            }
            if (id) {
                return crmApi('Group', 'get', {
                    "sequential": 1,
                    "return": ["title"],
                    "id": id
                });
            }
            return crmApi('Group', 'get', {
                "sequential": 1,
                "return": ["title"]
            });
        },
        save: (group) => {
            return crmApi('Group', 'create', group);
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