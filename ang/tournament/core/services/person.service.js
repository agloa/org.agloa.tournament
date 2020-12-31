angular.module('tournament').factory('person', function (crmApi) {
  return {
    // Get an individual contact record
    // @param id Contact id  (per APIv3)
    // @return Promise of Contact (per APIv3)
    get: (id) => {
      if (id) {
        return crmApi('Contact', 'getsingle', {
          "return": ["id","contact_sub_type","display_name","first_name","middle_name","last_name","prefix_id","suffix_id","gender_id","birth_date","modified_date","email","phone","street_address","supplemental_address_1","supplemental_address_2","supplemental_address_3","city","postal_code","postal_code_suffix","country_id","state_province_id"],
          "id": id
        });
      }
      return crmApi('Contact', 'get', {
        "return": ["id","contact_sub_type","display_name","first_name","middle_name","last_name","prefix_id","suffix_id","gender_id","birth_date","modified_date","email","phone","street_address","supplemental_address_1","supplemental_address_2","supplemental_address_3","city","postal_code","postal_code_suffix","country_id","state_province_id"],
        "contact_type": "Individual",
      });
    },
    // Get values/labels for option groups: gender
    // @return Promise of option groups/values (per APIv3)
    getGenders: () => {
      return crmApi('OptionValue', 'get', {
        "sequential": 1,
        "return": ["value", "label"],
        "option_group_id": "gender",
        "is_active": 1
      })
    },
    // Get values/labels for option groups: prefix
    // @return Promise of option groups/values (per APIv3)
    getPrefixes: () => {
      return crmApi('OptionValue', 'get', {
        "sequential": 1,
        "return": ["value", "label"],
        "option_group_id": "individual_prefix",
        "is_active": 1
      })
    },
    // Get values/labels for option groups: prefix
    // @return Promise of option groups/values (per APIv3)
    getSuffixes: () => {
      return crmApi('OptionValue', 'get', {
        "sequential": 1,
        "return": ["value", "label"],
        "option_group_id": "individual_suffix",
        "is_active": 1
      })
    },

    save: (person) => {
      if (!person.contact_type) {
        person.contact_type = "person";
      }
      return crmApi('Contact', 'create', person);
    },

    delete: (id) => {
      return crmApi('Contact', 'delete', { id }).then(
        (result) => {
          return result.id;
        }, (error) => {
          CRM.alert(ts('Could not delete Person id = ' + id + ' , error = ' + error.error_message), ts('Error'), 'error');
        });
    }
  }
});