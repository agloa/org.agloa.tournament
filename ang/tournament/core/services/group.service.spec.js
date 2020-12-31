'use strict';

xdescribe('group', function () {
  var group;

  // Add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('tournament'));

  beforeEach(
    inject(function (_group_) { group = _group_; }
    )
  );

  it('should get an group by title', inject(function () {
    expect(group.get("Administrators")).toEqual({
      "values": [
          {
              "id": "1",
              "name": "Administrators",
              "title": "Administrators",
              "description": "Contacts in this group are assigned Administrator role permissions.",
              "is_active": "1",
              "visibility": "User and User Admin Only",
              "group_type": [
                  "1"
              ],
              "is_hidden": "0",
              "is_reserved": "0"
          }
      ]
  });
  }));

  it('should get all groups', inject(function () {
    expect(group.get()).toEqual({
      "values": [
          {
              "id": "1",
              "name": "Administrators",
              "title": "Administrators",
              "description": "Contacts in this group are assigned Administrator role permissions.",
              "is_active": "1",
              "visibility": "User and User Admin Only",
              "group_type": [
                  "1"
              ],
              "is_hidden": "0",
              "is_reserved": "0"
          }
      ]
  });
  }));

});