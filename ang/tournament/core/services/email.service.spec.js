'use strict';

describe('email', function () {
  var email;

  // Add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('tournament'));

  beforeEach(
    inject(function (_email_) { email = _email_; }
    )
  );

  it('should get email data', inject(function () {
    expect(email.get("1")).toEqual({
      values: [{
        id: 1,
        contact_id: 1,
        location_type_id: 3,
        email: "info@agloa.org",
        is_primary: 1,
        is_billing: 0,
        on_hold: 0,
        is_bulkmail: 0
      }]
    });
  }));

});