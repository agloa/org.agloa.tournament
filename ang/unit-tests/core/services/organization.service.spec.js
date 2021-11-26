'use strict';

fdescribe('organization', function () {
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

  it('gets all from CRM', function () {
    organization.get();
    expect(CRM).toHaveBeenCalledWith('Contact', 'get', {
      select: ['id', 'contact_sub_type', 'organization_name', 'modified_date', 'email.id', 'email.email', 'phone.id', 'phone.phone', 'address.id', 'address.street_address', 'address.supplemental_address_1', 'address.supplemental_address_2', 'address.supplemental_address_3', 'address.city', 'address.state_province_id', 'address.country_id', 'address.postal_code', 'address.postal_code_suffix'],
      join: [['Email AS email', false, null], ['Phone AS phone', false, null], ['Address AS address', false, null]],
      where: [[1]]
    });
  });

  it('gets by id from CRM', function () {
    const id = 2;
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
      organization_name: "AGLOA",
      contact_sub_type: "Billing Organization",
      email: "info@agloa.org",
      phone: "(800)555-1212",
      street_address: "PO Box 3142",
      city: "Tequesta",
      postal_code: "33469",
      country_id: 1228,
      state_province_id: 1008,
    };

    const expextedOrganization =
    {
      records: [{ id: testOrganization.id, contact_type: 'Organization', contact_sub_type: 'Billing Organization', organization_name: 'AGLOA' }],
      chain: {
        emailSave: ['Email', 'save', { records: [{ contact_id: testOrganization.id, id: undefined, email: testOrganization.email }] }],
        phoneSave: ['Phone', 'save', { records: [{ contact_id: testOrganization.id, id: undefined, phone: testOrganization.phone }] }],
        addressSave: ['Address', 'save', { records: [{ contact_id: testOrganization.id, id: undefined, street_address: testOrganization.street_address, supplemental_address_1: testOrganization.supplemental_address_1, supplemental_address_2: testOrganization.supplemental_address_2, supplemental_address_3: testOrganization.supplemental_address_3, city: testOrganization.city, state_province_id: testOrganization.state_province_id, country_id: testOrganization.country_id, postal_code: testOrganization.postal_code, postal_code_suffix: testOrganization.postal_code_suffix }] }]
      }
    }

    organization.save(testOrganization);
    expect(CRM).toHaveBeenCalledWith('Contact', 'save', expextedOrganization);
  });

  it('deletes contact from CRM.', () => {
    const id = 1;
    organization.delete(id);
    expect(CRM).toHaveBeenCalledWith('Contact', 'delete', { where: [['id', '=', 1]] });
  });

});