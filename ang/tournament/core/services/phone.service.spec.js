'use strict';

describe('phone', function () {
  var phone;

  // Add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('tournament'));

  beforeEach(
    inject(function (_phone_) { phone = _phone_; }
    )
  );

  it('should get phone data', inject(function () {
    expect(phone.get("2")).toEqual({
      values: [
        {
          id: 1,
          contact_id: 2,
          location_type_id: 3,
          is_primary: 1,
          is_billing: 0,
          phone: "612.875.1888",
          phone_numeric: "6128751888",
          phone_type_id: 2
        }
      ]
    });
  }));

});