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

  // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
  // This allows us to inject a service and assign it to a variable with the same name
  // as the service while avoiding a name conflict.

  // Instantiate the service and "train" `$personService` before each test
  beforeEach(inject(function (_person_) {
    // $personService.expectGET('2').respond(personData);
    person = _person_;
  }));

  it('should fetch person data', function () {
    person.get(2).finally(
      (actuactualPersonalData) => {
        expect(actualPerson).toEqual(expectedPerson);
      }
    );
  });

});