'use strict';

describe('personService', function() {
  var personData = [
    {id:2, last: 'Steigerwald', first:'Michael'},
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('tournament'));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    
  // Instantiate the service and "train" `$personService` before each test
  beforeEach(inject(function(_personService_) {
    $personService.expectGET('2').respond(personData);
    personService = _personService_;
  }));

  it('should fetch person data', function() {
    var person = personService.get(2);
    expect(person).toEqual(personData);
  });

});