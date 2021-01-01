'use strict';

xdescribe('organization', function () {
  var organization;
  var crmApi;

  beforeEach(function () {
    // Add a custom equality tester before each test
    jasmine.addCustomEqualityTester(angular.equals);
    module('tournament');

    // This ***HAS*** to go before the beforeEach(inject(...)) block
    crmApi = jasmine.createSpy('crmApiMock')

    module(function ($provide) {
      $provide.value('crmApi', crmApi);
    });

    inject(function (_organization_) { organization = _organization_; });
  });

  it('should get from crmApi', function () {
    var contact_sub_type;
    organization.get();
    expect(crmApi).toHaveBeenCalledWith('Contact', 'get', {
      "sequential": 1,
      "return": ["id", "organization_name"],
      "contact_type": "Organization",
      "contact_sub_type": contact_sub_type,
    });
  });

  it('should get(id) from crmApi', function () {
    const id = 2;
    organization.get(id);
    expect(crmApi).toHaveBeenCalledWith('Contact', 'getsingle', {
      "return": ["organization_name"],
      "id": id
    });
  });

  it('save should create organization in crmApi', () => {
    const testOrganization = {
      first_name: "test",
      contact_type: "test",
    };
    const expectedPerson = testPerson;
    person.save(testPerson);
    expect(crmApi).toHaveBeenCalledWith('Contact', 'create', expectedPerson);
  });

});