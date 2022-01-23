'use strict';

describe('entityTag', function () {
  var entityTag;
  var CRM;

  // Add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);

    module(function ($provide) {
      $provide.value('crmApi4', CRM);
    });
    module('tournament');

    // This ***HAS*** to go before the beforeEach(inject(...)) block
    CRM = jasmine.createSpy('crmMock')

    module(function ($provide) {
      $provide.value('crmApi4', CRM);
    });

    inject(function (_entityTag_) { entityTag = _entityTag_; });

  });

  it('gets all from CRM', function () {
    entityTag.get();
    expect(CRM).toHaveBeenCalledWith('EntityTag', 'get', {
      select: ["id", "entity_table", "entity_id", "tag_id"],
    });
  });

  it('gets by id from CRM', function () {
    const id = 1;
    entityTag.get(id);
    expect(CRM).toHaveBeenCalledWith('EntityTag', 'get', {
      select: ["id", "entity_table", "entity_id", "tag_id"],
      where: ['id', '=', id]
    });
  });

  it('saves entityTag to CRM.', () => {
    const testEntityTag = {
      "id": 1,
      "entity_table": "Contact",
      "entity_id": 2,
      "tag_id": 6
    };

    entityTag.save(testEntityTag);
    expect(CRM).toHaveBeenCalledWith('EntityTag', 'save', {
      records: [{
        "id": testEntityTag.id,
        "entity_table": testEntityTag.entity_table,
        "entity_id": testEntityTag.entity_id,
        "tag_id": testEntityTag.tag_id,
      }]
    });
  });

  it('deletes entityTag from CRM.', () => {
    const id = 1;
    entityTag.delete(id);
    expect(CRM).toHaveBeenCalledWith('EntityTag', 'delete', { where: [['id', '=', id]] });
  });

});