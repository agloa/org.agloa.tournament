
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
        case "Setting":
          switch (action) {
            default:
              switch (params.return[0]) {
                case "countryLimit":
                  resolve({values: [{countryLimit: ["1228","1101","1208"]}]})
              }
          }
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
                id: params.id
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