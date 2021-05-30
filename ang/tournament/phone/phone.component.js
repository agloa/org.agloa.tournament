'use strict';

const phoneTemplateUrl = (location.search.includes("?page=CiviCRM") ? "~" : location.origin) + '/tournament/phone/phone.template.html';

angular.module('tournament').component('trnPhone', {
  templateUrl: phoneTemplateUrl,
  bindings: { contactId: '@', id: '@' },
  controller: ['$routeParams', 'phone',
    function ($routeParams, phone) {
      var self = this;

      if ($routeParams.phoneId !== undefined) {
        self.id = $routeParams.phoneId;
      }

      if ($routeParams.contactId !== undefined) {
        self.contactId = $routeParams.contactId;
      }

      self.setSelectedPhone = (phone) => {
        self.id = phone.id;
        self.location_type_id = phone.location_type_id;
        self.is_primary = phone.is_primary;
        self.is_billing = phone.is_billing;
        self.phone = phone.phone;
      };

      self.save = () => {
        self.contact_id = self.contactId;
        phone.save(self).then(
          // Success
          (result) => { CRM.alert(ts("Saved"), ts("Saved"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not save phone record ID = ' + self.selectedPhone.id + ' error = ' + error.error_message), ts('Database error'), 'error'); }
        );
      };

      self.delete = () => {
        phone.delete(self.id).then(
          // Success
          () => { CRM.alert(ts("Deleted"), ts("Deleted"), 'info'); },
          // Failure
          (error) => { CRM.alert(ts('Could not phone email record ID = ' + self.id + ', error = ' + error.error_message), ts('Database Error'), 'error'); }
        )
      };

      self.$onInit = function () {
        self.id = self.contactId;

        phone.get(self.contactId, self.id).then(
          // Success
          (result) => { self.setSelectedPhone(result.values[0]); },
          // Failure
          (error) => { CRM.alert(ts('Could not get phone record, error = ' + error.error_message), ts('Error'), 'error'); }
        );
      };
    }
  ]
});