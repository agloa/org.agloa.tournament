'use strict';

describe('billingOrganization', function () {
  var organization;
  var crmApi;

  beforeEach(function () {
    // Add a custom equality tester before each test
    jasmine.addCustomEqualityTester(angular.equals);
    module('tournament');

    // This ***HAS*** to go before the beforeEach(inject(...)) block
    crmApi = jasmine.createSpy('crmApiMock')

    module(function ($provide) {
      $provide.value('crmApi4', crmApi);
    });

    inject(function (_organization_) { organization = _organization_; });
  });

  it('should get from crmApi', function () {
    var contact_sub_type;
    organization.get();
    expect(crmApi).toHaveBeenCalledWith('Contact', 'get', {
      select: ["id", "contact_sub_type", "organization_name", "modified_date",
        "email.id", "email.email",
        "phone.id", "phone.phone",
        "address.id", "address.street_address", "address.supplemental_address_1", "address.supplemental_address_2", "address.supplemental_address_3", "address.city", "address.state_province_id", "address.country_id", "address.postal_code", "address.postal_code_suffix"
      ],
      join: [
        ["Email AS email", false, null],
        ["Phone AS phone", false, null],
        ["Address AS address", false, null]
      ],
      where: [["contact_type", "=", "Organization"], ["contact_sub_type", "=", "billingOrganization"]]
    });
  });

  it('should get(id) from crmApi', function () {
    const id = 6;
    organization.get(id);
    expect(crmApi).toHaveBeenCalledWith('Contact', 'get', {
      select: ["id", "contact_sub_type", "organization_name", "modified_date",
        "email.id", "email.email",
        "phone.id", "phone.phone",
        "address.id", "address.street_address", "address.supplemental_address_1", "address.supplemental_address_2", "address.supplemental_address_3", "address.city", "address.state_province_id", "address.country_id", "address.postal_code", "address.postal_code_suffix"
      ],
      join: [
        ["Email AS email", false, null],
        ["Phone AS phone", false, null],
        ["Address AS address", false, null]
      ],
      where: [
        ["contact_type", "=", "Organization"],
        ["contact_sub_type", "=", "billingOrganization"],
        ["id", "=", id]
      ]
    });
  });

  it('save should create organization in crmApi', () => {
    const testOrganization = {
      id: 1,
      organization_name: "organization_name",
    };

    const expextedOrganization = testOrganization;
    expextedOrganization.contact_type = "Organization";

    organization.save(testOrganization);
    expect(crmApi).toHaveBeenCalledWith('Contact', 'save', {
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

  it('should delete organization in crmApi', () => {
    const id = 6;
    organization.delete(id);
    expect(crmApi).toHaveBeenCalledWith('Contact', 'delete', { where: [["id", "=", id]] });
  });

});