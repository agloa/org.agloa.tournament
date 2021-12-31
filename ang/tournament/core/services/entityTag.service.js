angular.module('tournament').factory('entityTag', function (crmApi4) {
  return {
    get: (id) => {
      return crmApi4('EntityTag', 'get', {
        select: ["id", "entity_table", "entity_id", "tag_id"],
        where: (id) ? ["id", "=", id] : undefined
      });
    },
    save: (entityTag) => {
      return crmApi4('EntityTag', 'save', {
        records: [{
          "id": entityTag.id,
          "entity_table": entityTag.entity_table,
          "entity_id": entityTag.entity_id,
          "tag_id": entityTag.tag_id,
        }],
      })
    },
    delete: (id) => {
      return crmApi4('EntityTag', 'delete', { where: [["id", "=", id]] });
    }
  }
});