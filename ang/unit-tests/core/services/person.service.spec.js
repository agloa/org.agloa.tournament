'use strict';

describe('person', function () {
  var person;
  var crmApi;

  beforeEach(function () {
    // Add a custom equality tester before each test
    jasmine.addCustomEqualityTester(angular.equals);
    module('tournament');

    // This ***HAS*** to go before the beforeEach(inject(...)) block
    crmApi = jasmine.createSpy('crmApiMock')

    module(function ($provide) {
      $provide.value('crmApi', crmApi);
    });

    inject(function (_person_) { person = _person_; });
  });

  it('should get from crmApi', function () {
    person.get();
    expect(crmApi).toHaveBeenCalledWith('Contact', 'get', {
      // TODO: put this back after CRM correctly accepts return with country_id and state_province_id
      // "return": ["id","contact_sub_type","display_name","first_name","middle_name","last_name","prefix_id","suffix_id","gender_id","birth_date","modified_date","email","phone","street_address","supplemental_address_1","supplemental_address_2","supplemental_address_3","city","postal_code","postal_code_suffix","country_id","state_province_id"],
      "contact_type": "Individual",
    });
  });

  it('should get(id) from crmApi', function () {
    const id = 2;
    person.get(id);
    expect(crmApi).toHaveBeenCalledWith('Contact', 'getsingle', {
      // TODO: put this back after CRM correctly accepts return with country_id and state_province_id
      //"return": ["id","contact_sub_type","display_name","first_name","middle_name","last_name","prefix_id","suffix_id","gender_id","birth_date","modified_date","email","phone","street_address","supplemental_address_1","supplemental_address_2","supplemental_address_3","city","postal_code","postal_code_suffix","country_id","state_province_id"],
      "id": id
    });
  });

  it('should get gender values', () => {
    person.getGenders();
    expect(crmApi).toHaveBeenCalledWith('OptionValue', 'get', {
      "sequential": 1,
      "return": ["value", "label"],
      "option_group_id": "gender",
      "is_active": 1
    });
  });

  it('should get prefixes', () => {
    person.getPrefixes();
    expect(crmApi).toHaveBeenCalledWith('OptionValue', 'get', {
      "sequential": 1,
      "return": ["value", "label"],
      "option_group_id": "individual_prefix",
      "is_active": 1
    });
  });

  it('should get suffixes', () => {
    person.getSuffixes();
    expect(crmApi).toHaveBeenCalledWith('OptionValue', 'get', {
      "sequential": 1,
      "return": ["value", "label"],
      "option_group_id": "individual_suffix",
      "is_active": 1
    });
  });

  it('s save should create person in crmApi', () => {
    const testPerson = {
      id: 1,
      contact_sub_type: "person.contact_sub_type",
      first_name: "person.first_name",
      middle_name: "person.middle_name",
      last_name: "person.last_name",
      prefix_id: "person.prefix_id",
      suffix_id: "person.suffix_id",
      gender_id: "person.gender_id",
      birth_date: "person.birth_date",
      modified_date: "person.modified_date",
      email: "person.email",
      phone: "person.phone",
      street_address: "person.street_address",
      supplemental_address_1: "person.supplemental_address_1",
      supplemental_address_2: "person.supplemental_address_2",
      supplemental_address_3: "person.supplemental_address_3",
      city: "person.city",
      postal_code: "person.postal_code",
      postal_code_suffix: "person.postal_code_suffix",
      country_id: "person.country_id",
      state_province_id: "person.state_province_id",
    };

    person.save(testPerson);

    let expectedPerson = testPerson;
    expectedPerson.contact_type = "Individual";

    expect(crmApi).toHaveBeenCalledWith('Contact', 'create', expectedPerson);
  });

  it('should delete Contact in crmApi', () => {
    const id = 1;
    person.delete(id);
    expect(crmApi).toHaveBeenCalledWith('Contact', 'delete', { id });
  });

});