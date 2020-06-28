angular.module('tournament').factory('person', function ($q, crmApi) {
  return{
      // Get an individual contact record
      // @param id Contact id  (per APIv3)
      // @return Promise of Contact (per APIv3)
      get: function get(id) {
          return crmApi('Contact', 'getsingle', {
            "return": ["sort_name","display_name","last_name","first_name","middle_name","prefix_id","suffix_id","gender_id","birth_date","modified_date"],
            "id": id
        });
      },
      // Get values/labels for option groups: gender,individual_prefix,individual_suffix
      // @return Promise of option groups/values (per APIv3)
      getOptions: function getOptions(){
          return crmApi('OptionGroup', 'get', {
            "sequential": 1,
            "return": ["id"],
            "name": {"IN":["gender","individual_prefix","individual_suffix"]},
            "api.OptionValue.get": {"is_active":"1","return":["value","label"]}
        });
      }
  }
});