angular.module('tournament').factory('organization', function (crmApi) {
    return {
        // Get an organizational contact record
        // @param id Contact id  (per APIv3)
        // @return Promise of Contact (per APIv3)
        get: (id, contact_sub_type) => {
            if (id) {
                return crmApi('Contact', 'getsingle', {
                    "return": ["organization_name"],
                    "id": id
                });
            }
            else {                
                return crmApi('Contact', 'getsingle', {
                    "sequential": 1,
                    "return": ["id", "organization_name"],
                    "contact_type": "Organization",
                    "contact_sub_type": contact_sub_type
                });
            }
        },
        save: (organization_name, contact_sub_type) => {
            return crmApi ('Contact', 'create', {
                "contact_type": "Organization",
                "organization_name": organization_name,
                "contact_sub_type": contact_sub_type
            }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not save Organization ' + organization_name + ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        },
        delete: (id) => {
            return crmApi('Contact', 'delete', { id }).then(
                (result) => {
                    return result.id;
                }, (error) => {
                    CRM.alert(ts('Could not delete Organization id = ' + id + ' , error = ' + error.error_message), ts('Error'), 'error');
                });
        }
    }
});