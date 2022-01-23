angular.module('tournament').factory('tag', function (crmApi4) {
    return {
        get: (id) => {
            return crmApi4('Tag', 'get', {
                select: ["id", "name", "description"],
                where: (id) ? ["id", "=", id] : undefined
            });
        },
        getByName: (name) => {
            return crmApi4('Tag', 'get', {
                select: ["id", "name", "description"],
                where: (name) ? ["name", "=", name] : undefined
            });
        },
        save: (tag) => {
            if (!tag.is_reserved) {
                tag.is_reserved = true;
            }
            
            if (!tag.used_for) {
                tag.used_for = ["civicrm_contact"];
            }

            return crmApi4('Tag', 'save', {
                records: [{
                    "id": tag.id,
                    "name": tag.name,
                    "description": tag.description,
                    "is_reserved": tag.is_reserved,
                    "used_for": tag.used_for,
                }],
            })
        },
        delete: (id) => {
            return crmApi4('Tag', 'delete', { where: [["id", "=", id]] });
        }
    }
});