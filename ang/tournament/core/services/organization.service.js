angular.module('tournament').factory('organization', function ($q, crmApi) {
    return {
        // Get an organizational contact record
        // @param id Contact id  (per APIv3)
        // @return Promise of Contact (per APIv3)
        get: (id) => {
            return crmApi('Contact', 'getsingle', {
                "return": ["organization_name"],
                "id": id
            });
        },
        save: (organization_name, contact_sub_type) => {
            ('Contact', 'create', {
                "contact_type": "Organization",
                "contact_sub_type": contact_sub_type,
                "organization_name": organization_name
            }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not save Organization ' + organization_name + ' , error = ' + error.error_message), ts('Error'), 'error');
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