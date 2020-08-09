
angular.module('tournament').factory('crmApi', function($q) {
    var crmApi = function(entity, action, params, message) {
      // JSON serialization in CRM.api3 is not aware of Angular metadata like $$hash, so use angular.toJson()
      var deferred = $q.defer();
      var p;
      
      if (params && params.body_html) {
        // CRM-18474 - remove Unicode Character 'LINE SEPARATOR' (U+2028)
        // and 'PARAGRAPH SEPARATOR' (U+2029) from the html if present.
        params.body_html = params.body_html.replace(/([\u2028]|[\u2029])/g, '\n');
      }

      p = new Promise(function(resolve, reject) {
        if (typeof entity === 'string') {
          $.post(CRM.url('civicrm/ajax/api4/' + entity + '/' + action), {
            params: JSON.stringify(params),
            index: index
          })
            .done(function (data) {
              resolve(arrayObject(data));
            })
            .fail(function (data) {
              reject(data.responseJSON);
            });
        } else {
          $.post(CRM.url('civicrm/ajax/api4'), {
            calls: JSON.stringify(entity)
          })
            .done(function(data) {
              _.each(data, function(item, key) {
                data[key] = arrayObject(item);
              });
              resolve(data);
            })
            .fail(function (data) {
              reject(data.responseJSON);
            });
        }
      });      
        
      // CRM.api3 returns a promise, but the promise doesn't really represent errors as errors, so we
      // convert them
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

    crmApi.backend = null;
    crmApi.val = function(value) {
        var d = $.Deferred();
        d.resolve(value);
        return d.promise();
    };

    return crmApi;
});