'use strict';

fdescribe('Billing Organization service', function () {
  var organization;
  var CRM;

  beforeEach(function () {
    // Add a custom equality tester before each test
    jasmine.addCustomEqualityTester(angular.equals);
    module('tournament');

    // This ***HAS*** to go before the beforeEach(inject(...)) block
    CRM = jasmine.createSpy('crmMock')

    module(function ($provide) {
      $provide.value('crmApi4', CRM);
    });

    inject(function (_organization_) { organization = _organization_; });
  });

  it('gets all contacts from CRM.', function () {
    organization.get();
    expect(CRM).toHaveBeenCalledWith('Contact', 'get', {
      select: ['id', 'contact_sub_type', 'organization_name', 'modified_date', 'email.id', 'email.email', 'phone.id', 'phone.phone', 'address.id', 'address.street_address', 'address.supplemental_address_1', 'address.supplemental_address_2', 'address.supplemental_address_3', 'address.city', 'address.state_province_id', 'address.country_id', 'address.postal_code', 'address.postal_code_suffix'],
      join: [['Email AS email', false, null], ['Phone AS phone', false, null], ['Address AS address', false, null]],
      where: [[1]]
    });
  });

  it('gets contact by id from CRM.', function () {
    const id = 6;
    organization.get(id);
    expect(CRM).toHaveBeenCalledWith('Contact', 'get', {
      select: ['id', 'contact_sub_type', 'organization_name', 'modified_date', 'email.id', 'email.email', 'phone.id', 'phone.phone', 'address.id', 'address.street_address', 'address.supplemental_address_1', 'address.supplemental_address_2', 'address.supplemental_address_3', 'address.city', 'address.state_province_id', 'address.country_id', 'address.postal_code', 'address.postal_code_suffix'],
      join: [['Email AS email', false, null], ['Phone AS phone', false, null], ['Address AS address', false, null]],
      where: [['id', '=', id]]
    });
  });

  it('saves contact to CRM.', () => {
    const testOrganization = {
      id: 1,
      organization_name: "organization_name",
    };

    organization.save(testOrganization);
    expect(CRM).toHaveBeenCalledWith('Contact', 'save', {
      records: [{
        "id": testOrganization.id,
        "contact_type": testOrganization.contact_type,
        "contact_sub_type": testOrganization.contact_sub_type,
        "organization_name": testOrganization.organization_name,
      }],
      chain: {
        "emailSave": ["Email", "save", { "records": [{ "contact_id": testOrganization.id, "id": testOrganization.emailId, "email": testOrganization.email }] }],
        "phoneSave": ["Phone", "save", { "records": [{ "contact_id": testOrganization.id, "id": testOrganization.phoneId, "phone": testOrganization.phone }] }],
        "addressSave": ["Address", "save", {
          "records": [{
            "contact_id": testOrganization.id, "id": testOrganization.addressId,
            "street_address": testOrganization.street_address,
            "supplemental_address_1": testOrganization.supplemental_address_1, "supplemental_address_2": testOrganization.supplemental_address_2, "supplemental_address_3": testOrganization.supplemental_address_3,
            "city": testOrganization.city, "state_province_id": testOrganization.state_province_id, "country_id": testOrganization.country_id,
            "postal_code": testOrganization.postal_code, "postal_code_suffix": testOrganization.postal_code_suffix
          }]
        }]

      }
    });
  });

  it('deletes organization from CRM.', () => {
    const id = 6;
    organization.delete(id);
    expect(CRM).toHaveBeenCalledWith('Contact', 'delete', { where: [["id", "=", id]] });
  });

});