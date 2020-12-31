'use strict';

describe('person', function () {
  var person;
  var crmApi;

  beforeEach(function () {
    // Add a custom equality tester before each test
    jasmine.addCustomEqualityTester(angular.equals);
    module('tournament');
  });

  // This ***HAS*** to go before the beforeEach(inject(...)) block
  beforeEach(function () {
    crmApi = jasmine.createSpy('crmApiMock')

    module(function ($provide) {
      $provide.value('crmApi', crmApi);
    });
  });

  beforeEach(function () {
    inject(function (_person_) { person = _person_; });
  });

  it('should get from crmApi', function () {
    const id = 2;
    person.get(id);
    expect(crmApi).toHaveBeenCalledWith('Contact', 'getsingle', {
      "return": ["id","contact_sub_type","display_name","first_name","middle_name","last_name","prefix_id","suffix_id","gender_id","birth_date","modified_date","email","phone","street_address","supplemental_address_1","supplemental_address_2","supplemental_address_3","city","postal_code","postal_code_suffix","country_id","state_province_id"],
      "id": id
    });
  });

  xit('should get gender values', () => {
    expect(person.getGenders()).toEqual({
      values: [
        { label: "Female", value: 1 },
        { label: "Male", value: 2 },
        { label: "Other", value: 3 }
      ]
    });
  });

  xit('should get prefixes', () => {
    expect(person.getPrefixes()).toEqual({
      values: [
        {
          value: 1,
          label: "Mrs."
        },
        {
          value: 2,
          label: "Ms."
        },
        {
          value: 3,
          label: "Mr."
        },
        {
          value: 4,
          label: "Dr."
        }
      ]
    })
  });

  xit('should get suffixes', () => {
    expect(person.getSuffixes()).toEqual({
      values: [
        {
          label: "Jr.",
          value: 1
        },
        {
          label: "Sr.",
          value: 2
        },
        {
          label: "II",
          value: 3
        },
        {
          label: "III",
          value: 4
        },
        {
          label: "IV",
          value: 5
        },
        {
          label: "V",
          value: 6
        },
        {
          label: "VI",
          value: 7
        },
        {
          label: "VII",
          value: 8
        }
      ]
    })
  });

  xit('save should send id to crmApi', () => {
    var mockFactory = jasmine.createSpy('crmApiSpy', crmApi).and.callThrough();
    person.save({});
    expect(mockFactory).toHaveBeenCalled();
  });

});