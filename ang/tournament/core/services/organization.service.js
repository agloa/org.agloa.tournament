angular.module('tournament').factory('organization', function ($q, crmApi) {
    return {
        getAll: () => {
            return crmApi('Contact', 'get', {
                "sequential": 1,
                "return": ["id", "organization_name"],
            });
        },
        save: (organizationName, contact_sub_type) => {
            ('Contact', 'create', {
                "contact_type": "Organization",
                "contact_sub_type": contact_sub_type,
                "organization_name": organizationName
            }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not save Organization ' + organizationName + ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        },
        delete: (id) => {
            crmApi('Contact', 'delete', { id }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not delete Organization id = ' + id + ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        }
    }
});