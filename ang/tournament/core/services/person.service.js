angular.module('tournament').factory('person', function (crmApi, crmApi4) {
  return {
    // Get an individual contact record
    get: (id) => {
        return crmApi4('Contact', 'get', {
          select: ["display_name", "first_name", "last_name", "middle_name", "prefix_id", "suffix_id", "gender_id", "birth_date", "modified_date",
            "email.email",
            "phone.phone",
            "address.street_address", "address.supplemental_address_1", "address.supplemental_address_2", "address.supplemental_address_3", "address.city", "address.state_province_id", "address.country_id", "address.postal_code", "address.postal_code_suffix"
          ],
          join: [
              ["Email AS email", false, null],          
          ["Phone AS phone", false, null],
          ["Address AS address", false, null]
          ],
          where: [["id", "=", id]]
        });
      return crmApi('Contact', 'get', {
        "return": ["id", "contact_sub_type", "display_name", "first_name", "middle_name", "last_name", "prefix_id", "suffix_id", "gender_id", "birth_date", "modified_date", "email", "phone", "street_address", "supplemental_address_1", "supplemental_address_2", "supplemental_address_3", "city", "postal_code", "postal_code_suffix", "country_id", "state_province_id"],
        "contact_type": "Individual",
      });
    },
    // Get values/labels for option groups: gender
    // @return Promise of option groups/values (per APIv3)
    getGenders: () => {
      return crmApi4('OptionValue', 'get', {
        select: ["value", "label"],
        where: [["option_group_id:name", "=", "gender"], ["is_active", "=", true]]
        //return crmApi('OptionValue', 'get', {
        //"sequential": 1,
        //"return": ["value", "label"],
        //"option_group_id": "gender",
        //"is_active": 1
      })
    },
    // Get values/labels for option groups: prefix
    // @return Promise of option groups/values (per APIv3)
    getPrefixes: () => {
      return crmApi4('OptionValue', 'get', {
        select: ["value", "label"],
        where: [["option_group_id:name", "=", "individual_prefix"], ["is_active", "=", true]],
        // return crmApi('OptionValue', 'get', {
        //   "sequential": 1,
        //   "return": ["value", "label"],
        //   "option_group_id": "individual_prefix",
        //   "is_active": 1
      })
    },
    // Get values/labels for option groups: prefix
    // @return Promise of option groups/values (per APIv3)
    getSuffixes: () => {
      return crmApi4('OptionValue', 'get', {
        select: ["value", "label"],
        where: [["option_group_id:name", "=", "individual_suffix"], ["is_active", "=", true]],
        // return crmApi('OptionValue', 'get', {
        //   "sequential": 1,
        //   "return": ["value", "label"],
        //   "option_group_id": "individual_suffix",
        //   "is_active": 1
      })
    },

    save: (person) => {
      if (person.contact_type == undefined) {
        person.contact_type = "Individual";
      }

      return crmApi('Contact', 'create', {
        id: person.id,
        contact_type: person.contact_type,
        contact_sub_type: person.contact_sub_type,
        first_name: person.first_name,
        middle_name: person.middle_name,
        last_name: person.last_name,
        prefix_id: person.prefix_id,
        suffix_id: person.suffix_id,
        gender_id: person.gender_id,
        birth_date: person.birth_date,
        modified_date: person.modified_date,
        "api.Email.create": { email: person.email },
        "api.Phone.create": { phone: person.phone },
        "api.Address.create": {
          street_address: person.street_address,
          supplemental_address_1: person.supplemental_address_1,
          supplemental_address_2: person.supplemental_address_2,
          supplemental_address_3: person.supplemental_address_3,
          city: person.city,
          postal_code: person.postal_code,
          postal_code_suffix: person.postal_code_suffix,
          country_id: person.country_id,
          state_province_id: person.state_province_id
        }
      });
    },

    delete: (id) => {
      return crmApi('Contact', 'delete', { id });
    }
  }
});