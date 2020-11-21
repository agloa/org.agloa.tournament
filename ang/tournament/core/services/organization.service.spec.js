'use strict';

describe('organization', function () {
  var organization;

  // Add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('tournament'));

  beforeEach(
    inject(function (_organization_) { organization = _organization_; }
    )
  );

  it('should get an organization by id', inject(function () {
    expect(organization.get("1")).toEqual({
      organization_name: "AGLOA.org",
      modified_date: "2020-09-21 17:52:19",
      id: 1
    });
  }));

  it('should get all organizations', inject(function () {
    expect(organization.get()).toEqual({
      organization_name: "AGLOA.org",
      modified_date: "2020-09-21 17:52:19",
      id: 1
    });
  }));

});