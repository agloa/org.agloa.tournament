'use strict';

xdescribe('entityTag', function () {
  var entityTag;

  // Add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('tournament'));

  beforeEach(
    inject(function (_entityTag_) { entityTag = _entityTag_; }
    )
  );

  it('should get entityTag data', inject(function () {
    expect(entityTag.get("Requires Approval")).toEqual({
      "values": [
        {
          "id": "1",
          "entity_id.id": "13",
          "entity_id.display_name": "test12345678901234567890"
        }
      ]
    });
  }));
});