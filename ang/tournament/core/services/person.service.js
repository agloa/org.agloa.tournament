angular.module('tournament').factory('person', function (crmApi, crmApi4) {
  return {
    // Get an individual contact record
    get: (id) => {
        return crmApi4('Contact', 'get', {
          select: ["display_name", "first_name", "last_name", "middle_name", "prefix_id", "suffix_id", "gender_id", "birth_date", "modified_date",
            "email.email",
            "phone.phone",
            "address.street_address", "address.supplemental_address_1", "address.supplemental_address_2", "address.supplemental_address_3", 
            "address.city", "address.state_province_id", "address.country_id", "address.postal_code", "address.postal_code_suffix"
          ],
          join: [
              ["Email AS email", false, null],          
          ["Phone AS phone", false, null],
          ["Address AS address", false, null]
          ],
          where: [["id", "=", id]]
        });
    },
    // Get values/labels for option groups: gender
    getGenders: () => {
      return crmApi4('OptionValue', 'get', {
        select: ["value", "label"],
        where: [["option_group_id:name", "=", "gender"], ["is_active", "=", true]]
      })
    },
    // Get values/labels for option groups: prefix
    getPrefixes: () => {
      return crmApi4('OptionValue', 'get', {
        select: ["value", "label"],
        where: [["option_group_id:name", "=", "individual_prefix"], ["is_active", "=", true]],
      })
    },
    // Get values/labels for option groups: suffix
    getSuffixes: () => {
      return crmApi4('OptionValue', 'get', {
        select: ["value", "label"],
        where: [["option_group_id:name", "=", "individual_suffix"], ["is_active", "=", true]],
      })
    },

    save: (person) => {
      if (person.contact_type == undefined) {
        person.contact_type = "Individual";
      }

      return crmApi4({results: ['Contact', 'save', {records: [{"id":person.id, 
      "first_name":person.first_name, "last_name":person.last_name, "middle_name":person.middle_name, 
      "prefix_id":person.prefix_id, "suffix_id":person.suffix_id, "gender_id":person.gender_id, "birth_date":person.birth_date, 
      "address.street_address":person.street_address, 
      "address.supplemental_address_1":person.supplemental_address_1,  "address.supplemental_address_2":person.supplemental_address_2, "address.supplemental_address_3":person.supplemental_address_3, 
      "address.city":person.city, "address.state_province_id":person.state_province_id, "address.country_id":person.country_id, 
      "address.postal_code":person.postal_code, "address.postal_code_suffix":person.postal_code_suffix, 
      "email.email":person.email, "phone.phone":person.phone}],
      }]});
    },

    delete: (id) => {
        return crmApi4('Contact', 'delete', {where: [["id", "=", id]]});
    }
  }
});