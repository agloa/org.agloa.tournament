'use strict';

describe('phone', function () {
  var phone;
  var crmApi;

  // Add a custom equality tester before each test
  beforeEach(function () {
    // Add a custom equality tester before each test
    jasmine.addCustomEqualityTester(angular.equals);
    module('tournament');

    // This ***HAS*** to go before the beforeEach(inject(...)) block
    crmApi = jasmine.createSpy('crmApiMock')

    module(function ($provide) {
      $provide.value('crmApi', crmApi);
    });

    inject(function (_phone_) { phone = _phone_; });
  });

  it('should get from crmApi', function () {
    phone.get();
    expect(crmApi).toHaveBeenCalledWith('Phone', 'get', {
      "sequential": 1,
      "return": ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "phone", "phone_type_id"]
    });
  });

  it('should get by contact_id from crmApi', function () {
    const contact_id = 1;
    phone.get(contact_id);
    expect(crmApi).toHaveBeenCalledWith('Phone', 'get', {
      "sequential": 1,
      "return": ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "phone", "phone_type_id"],
      "contact_id": contact_id,
      "is_primary": 1
    });
  });

  it('should get by id from crmApi', function () {
    const id = 1;
    phone.get(undefined, id);
    expect(crmApi).toHaveBeenCalledWith('Phone', 'get', {
      "sequential": 1,
      "return": ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "phone", "phone_type_id"],
      "id": id,
      "is_primary": 1
    });
  });

  it('save should create phone in crmApi', () => {
    const testPhone = {      
      id: 1
      , contact_id: 1
      , location_type_id: 1
      , is_primary: 1
      , is_billing: 1
      , phone: "1234567890"
      , phone_type_id: 1
    };

    const expectedPhone = testPhone;

    phone.save(testPhone);
    
    expect(crmApi).toHaveBeenCalledWith('Phone', 'create', {
      "id": expectedPhone.id
      , "contact_id": expectedPhone.contact_id
      , "location_type_id": expectedPhone.location_type_id
      , "is_primary": expectedPhone.is_primary
      , "is_billing": expectedPhone.is_billing
      , "phone": expectedPhone.phone
      , "phone_type_id": expectedPhone.phone_type_id
    });
  });

});