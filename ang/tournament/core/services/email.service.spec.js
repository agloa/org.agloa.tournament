'use strict';

describe('email', function () {
  var email;
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

    inject(function (_email_) { email = _email_; });
  });

  it('should get from crmApi', function () {
    email.get();
    expect(crmApi).toHaveBeenCalledWith('Email', 'get', {
      "sequential": 1,
      "return": ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "email"]
    });
  });

  it('should get by contact_id from crmApi', function () {
    const contact_id = 1;
    email.get(contact_id);
    expect(crmApi).toHaveBeenCalledWith('Email', 'get', {
      "sequential": 1,
      "return": ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "email"],
      "contact_id": contact_id,
      "is_primary": 1
    });
  });

  it('should get by id from crmApi', function () {
    const id = 1;
    email.get(undefined, id);
    expect(crmApi).toHaveBeenCalledWith('Email', 'get', {
      "sequential": 1,
      "return": ["id", "contact_id", "location_type_id", "is_primary", "is_billing", "email"],
      "id": id
    });
  });

});