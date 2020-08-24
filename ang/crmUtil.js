
function ts(english) {
  return english;
}

CRM.alert = (message, title, severity) => {
  alert(message);
}

angular.module('tournament').factory('crmApi', function ($q) {
  return function (entity, action, params, message) {
    if (typeof entity === 'string') {
      entityType = entity;
    } else {
      entityType = JSON.stringify(entity);
    }

    var deferred = $q.defer();
    var p = new Promise(function (resolve, reject) {
      switch (entityType) {
        case "Contact":
          switch (action) {
            default:
              resolve({
                sort_name: "Steigerwald, Michael",
                display_name: "Mr. Michael Steigerwald",
                last_name: "Steigerwald",
                first_name: "Michael",
                middle_name: "Francis",
                birth_date: new Date(1961, 1, 4),
                modified_date: new Date(),
                gender_id: 2,
                prefix_id: 3,
                contact_id: 2,
                id: 2
              })
          }
        case "Address":
          switch (action) {
            default:
              resolve({
                values: [{
                  id: "1",
                  contact_id: "2",
                  location_type_id: "3",
                  is_primary: "1",
                  is_billing: "0",
                  street_address: "1870 Shady Beach Ave.",
                  city: "Minneapolis",
                  state_province_id: "1022",
                  postal_code_suffix: "6900",
                  postal_code: "55113",
                  country_id: "1228",
                  id: params.id
                }]
              })
          }
        case "OptionValue":
          switch (action) {
            default:
              switch (params.option_group_id) {
                case "gender":
                  resolve({
                    values: [
                      { label: "Female", value: 1 },
                      { label: "Male", value: 2 },
                      { label: "Other", value: 3 }
                    ]
                  })
                case "individual_prefix":
                  resolve({
                    values: [
                      {
                        value: 1,
                        label: "Mrs."
                      },
                      {
                        value: 2,
                        label: "Ms."
                      },
                      {
                        value: 3,
                        label: "Mr."
                      },
                      {
                        value: 4,
                        label: "Dr."
                      }
                    ]
                  })
                case "individual_suffix":
                  resolve({
                    values: [
                      {
                        label: "Jr.",
                        value: 1
                      },
                      {
                        label: "Sr.",
                        value: 2
                      },
                      {
                        label: "II",
                        value: 3
                      },
                      {
                        label: "III",
                        value: 4
                      },
                      {
                        label: "IV",
                        value: 5
                      },
                      {
                        label: "V",
                        value: 6
                      },
                      {
                        label: "VI",
                        value: 7
                      },
                      {
                        label: "VII",
                        value: 8
                      }
                    ]
                  })
              }
          }

        case "Setting":
          switch (action) {
            default:
              switch (params.return[0]) {
                case "countryLimit":
                  resolve({ values: [{ countryLimit: ["1228", "1101", "1208"] }] })
              }
          }

        case "Country":
          switch (action) {
            default:
              resolve({
                values: [
                  {
                    id: "1101",
                    name: "India",
                    iso_code: "IN",
                    region_id: "4",
                    is_province_abbreviated: "0"
                  },
                  {
                    id: "1208",
                    name: "Taiwan",
                    iso_code: "TW",
                    region_id: "4",
                    is_province_abbreviated: "0"
                  },
                  {
                    id: "1228",
                    name: "United States",
                    iso_code: "US",
                    region_id: "2",
                    is_province_abbreviated: "1"
                  }
                ]
              })
          }
      }
    });

    p.then(
      function (result) {
        if (result.is_error) {
          deferred.reject(result);
        } else {
          deferred.resolve(result);
        }
      },
      function (error) {
        deferred.reject(error);
      }
    );

    return deferred.promise;
  };
});