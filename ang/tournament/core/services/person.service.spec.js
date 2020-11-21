'use strict';

describe('person', function () {
  var person;

  // Add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('tournament'));

  beforeEach(
    inject(function (_person_) { person = _person_; }
    )
  );

  it('should get person data', inject(function () {
    expect(person.get("2")).toEqual({
      sort_name: "Steigerwald, Michael",
      display_name: "Mr. Michael Steigerwald",
      last_name: "Steigerwald",
      first_name: "Michael",
      middle_name: "Francis",
      birth_date: new Date(1961, 1, 4),
      modified_date: "2020-03-21 17:52:19",
      gender_id: 2,
      prefix_id: 3,
      contact_id: 2,
      id: 2
    });
  }));

  it('should get gender values', () => {
    expect(person.getGenders()).toEqual({
      values: [
        { label: "Female", value: 1 },
        { label: "Male", value: 2 },
        { label: "Other", value: 3 }
      ]
    });
  });

  it('should get prefixes', () => {
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

  it('should get suffixes', () => {
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

});