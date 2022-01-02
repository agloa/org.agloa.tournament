'use strict';

describe('groupMember', function () {
  var groupMember;

  // Add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('tournament'));

  beforeEach(
    inject(function (_groupMember_) { groupMember = _groupMember_; }
    )
  );

  it('should get all groupMembers', inject(function () {
    expect(groupMember.get()).toBeFalsy();
  }));

});