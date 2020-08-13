
function ts(english) {
  return english;
}

CRM.alert = (message, title, severity) => {
  alert(message);
}

angular.module('tournament').factory('crmApi', function($q) {
    return function(entity, action, params, message) {
      if (typeof entity === 'string') {
        entityType = entity;
      } else {
        entityType = JSON.stringify(entity);
      }

      var deferred = $q.defer();
      var p;

      p = new Promise(function(resolve, reject) {
        switch(entityType) {
          default:
            switch(action) {
              default:                
                resolve( {
                  sort_name: "Steigerwald, Michael",
                  display_name:"Mr. Michael Steigerwald",
                  last_name:"Steigerwald",
                  first_name:"Michael",
                  middle_name:"Francis",
                  birth_date: new Date(1961, 2, 4),
                  modified_date: new Date(),
                  id: params.id
              })
            }
        }

      });

      p.then(
        function(result) {
          if (result.is_error) {
            deferred.reject(result);
          } else {
            deferred.resolve(result);
          }
        },
        function(error) {
          deferred.reject(error);
        }
      );

      return deferred.promise;        
    };
});