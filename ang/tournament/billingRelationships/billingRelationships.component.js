'use strict';

const billingRelationshipTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/billingRelationships/billingRelationships.template.html';
angular.module('tournament').component('trnBillingrelationships', {
    templateUrl: billingRelationshipTemplateUrl,
    bindings: { contactId: '@' },
    controller: ['$routeParams', 'billingRelationship',
        function ($routeParams, billingRelationship) {
            var self = this;

            if ($routeParams.contactId) {
                self.contactId = $routeParams.contactId;
            }
        }
    ]
})