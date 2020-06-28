

angular.module('tournament').factory('person', function ($q, crmApi) {
  return{
      // Get an individual contact record
      // @param id Contact id  (per APIv3)
      // @return Promise Contact (per APIv3)
      get: function get(id) {
          return crmApi('Contact', 'getsingle', {
            "return": ["sort_name","display_name","last_name","first_name","middle_name","prefix_id","suffix_id","gender_id","birth_date","modified_date"],
            "id": id
        });
      }
    };
  });