angular.module('tournament').factory('crmApi', function() {
    var crmApi = function(entity, action, params, message) { };
    crmApi.backend = null;
    crmApi.val = function(value) {
        var d = $.Deferred();
        d.resolve(value);
        return d.promise();
    };
    return crmApi;
});