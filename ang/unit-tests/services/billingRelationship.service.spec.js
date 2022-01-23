'use strict';

describe('Billing Relationship service', function () {
  var billingRelationship;
  var CRM;
  const billingRelationshipType = 13;

  beforeEach(function () {
    // Add a custom equality tester before each test
    jasmine.addCustomEqualityTester(angular.equals);
    module('tournament');

    // This ***HAS*** to go before the beforeEach(inject(...)) block
    CRM = jasmine.createSpy("crmMock").and.returnValue(
      new Promise(function (resolve) {
        resolve([
          {
            id: billingRelationshipType,
          },
        ]);
      })
    );

    module(function ($provide) {
      $provide.value('crmApi4', CRM);
    });

    inject(function (_billingRelationship_) { billingRelationship = _billingRelationship_; });
  });

  it('gets all relationships from CRM.', function () {
    billingRelationship.get();

    expect(CRM).toHaveBeenCalledWith(
      "Relationship",
      "get",
      {
        select: [
          "contact_id_b",
          "contact_b.modified_date",
          "contact_b.display_name",
          "start_date",
          "end_date",
          "description",
        ],
        where: ["relationship_type_id", "=", "billingContactFor"]
      },
    );
  });

  it('gets relationships by contact id from CRM.', function () {
    const contact_id = 1;
    billingRelationship.get(contact_id);
    expect(CRM).toHaveBeenCalledWith(
      "Relationship",
      "get",
      {
        select: [
          "contact_id_b",
          "contact_b.modified_date",
          "contact_b.display_name",
          "start_date",
          "end_date",
          "description",
        ],
        where: [["contact_id_a", "=", contact_id],
        ["is_permission_a_b", "=", true],
        ["contact_b.contact_type", "=", "Organization"],
        ["relationship_type_id", "=", "billingContactFor"]]
      },
    );
  });

  it('saves relationship to CRM.', () => {
    const relationship = {
      id: 1,
      contact_id_a: 1,
      contact_id_b: 2,
      start_date: Date.now(),
      relationship_type_id: billingRelationshipType
    };

    billingRelationship.save(relationship);

    expect(CRM).toHaveBeenCalledWith('Relationship', 'save', {
      records: [{
        "id": relationship.id,
        "contact_id_a": relationship.contact_id_a,
        "contact_id_b": relationship.contact_id_b,
        "relationship_type_id": billingRelationshipType,
        "start_date": relationship.start_date,
        "is_active": true,
        "description": "Person id = " +
          relationship.contact_id_a +
          " is the contact for billing organization with id = " +
          relationship.contact_id_b,
        "is_permission_a_b": true,
        "is_permission_b_a": false
      }]
    });
  });

  it('creates relationship_type in CRM.', async () => {
    const relationship = {
      id: 1,
      contact_id_a: 1,
      contact_id_b: 2,
      start_date: Date.now()
    };

    await billingRelationship.save(relationship);

    expect(CRM).toHaveBeenCalledWith('Relationship', 'save', {
      records: [{
        "id": relationship.id,
        "contact_id_a": relationship.contact_id_a,
        "contact_id_b": relationship.contact_id_b,
        "relationship_type_id": billingRelationshipType,
        "start_date": relationship.start_date,
        "end_date": undefined,
        "is_active": true,
        "description": "Person id = " +
          relationship.contact_id_a +
          " is the contact for billing organization with id = " +
          relationship.contact_id_b,
        "is_permission_a_b": true,
        "is_permission_b_a": false
      }]
    });
  });

  it('deletes relationship from CRM.', () => {
    const id = 6;
    billingRelationship.delete(id);
    expect(CRM).toHaveBeenCalledWith('Relationship', 'delete', { where: [["id", "=", id]] });
  });

});