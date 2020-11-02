'use strict';

describe('person', function () {
  beforeEach(module('tournament'));
  var expectedPerson = [
    { id: 2, last: 'Steigerwald', first: 'Michael' },
  ];
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

  it('should get person data', inject(function ($rootScope) {
    var expectedPerson = [
      { id: 2, last: 'Steigerwald', first: 'Michael' },
    ];    

    var resolvedPerson;

    person.get(2).then(
      // Success
      (result) => { 
        resolvedPerson = result; 
      },
      // Failure
      (error) => { 
        CRM.alert(ts('Could not get person record ID = 2 error = ' + error.error_message), ts('Not Found'), 'error'); 
      }
    );

    $rootScope.$apply();
    expect(resolvedPerson).toEqual(expectedPerson);
  }));

  xit('should get gender values', () => {
    var expectedValues = {
      values: [
        { label: "Female", value: 11 },
        { label: "Male", value: 2 },
        { label: "Other", value: 3 }
      ]
    };

    person.getGenders().then(
      // Success
      (genders) => {
        expect(genders).toEqual(expectedValues);
      },
      // Failure
      (error) => {
        CRM.alert(ts('Could not get gender options error = ' + error), ts('Not Found'), 'error');
      }
    );

    expect(genders).toEqual(expectedValues);

  });

});