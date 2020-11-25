angular.module('tournament').factory('entityTag', function (crmApi) {
  return {
    get: (name) => {
      // Get an array of entity id/name pairs matching a tag name
      // @param name (per APIv3)
      // @return Promise of Entity Array (per APIv3)
      return crmApi('EntityTag', 'get', {
        "sequential": 1,
        "return": ["entity_id.id", "entity_id.display_name"],
        "tag_id.name": name
      });
    },
  }
});