'use strict';

fdescribe('Person service', function () {
  var person;
  var CRM;

  beforeEach(function () {
    // Add a custom equality tester before each test
    jasmine.addCustomEqualityTester(angular.equals);
    module('tournament');

    // This ***HAS*** to go before the beforeEach(inject(...)) block
    CRM = jasmine.createSpy('crmMock')

    module(function ($provide) {
      $provide.value('crmApi4', CRM);
    });

    inject(function (_person_) { person = _person_; });
  });

  it('gets from CRM.', function () {
    person.get();
    expect(CRM).toHaveBeenCalledWith('Contact', 'get', {
      select: ['display_name', 'first_name', 'last_name', 'middle_name', 'prefix_id', 'suffix_id', 'gender_id', 'birth_date', 'modified_date', 'email.id', 'email.email', 'phone.id', 'phone.phone', 'address.id', 'address.street_address', 'address.supplemental_address_1', 'address.supplemental_address_2', 'address.supplemental_address_3', 'address.city', 'address.state_province_id', 'address.country_id', 'address.postal_code', 'address.postal_code_suffix'],
      join: [['Email AS email', false, null], ['Phone AS phone', false, null], ['Address AS address', false, null]],
      where: [[1]]
    }
    );
  });

  it('gets id from CRM.', function () {
    const id = 2;
    person.get(id);
    expect(CRM).toHaveBeenCalledWith('Contact', 'get', {
      select: ['display_name', 'first_name', 'last_name', 'middle_name', 'prefix_id', 'suffix_id', 'gender_id', 'birth_date', 'modified_date', 'email.id', 'email.email', 'phone.id', 'phone.phone', 'address.id', 'address.street_address', 'address.supplemental_address_1', 'address.supplemental_address_2', 'address.supplemental_address_3', 'address.city', 'address.state_province_id', 'address.country_id', 'address.postal_code', 'address.postal_code_suffix'],
      join: [['Email AS email', false, null], ['Phone AS phone', false, null], ['Address AS address', false, null]],
      where: [['id', '=', 2]]
    });
  });

  it('gets gender values.', () => {
    person.getGenders();
    expect(CRM).toHaveBeenCalledWith('OptionValue', 'get', {
      select: ['value', 'label'],
      where: [['option_group_id:name', '=', 'gender'], ['is_active', '=', true]]
    });
  });

  it('gets prefixes.', () => {
    person.getPrefixes();
    expect(CRM).toHaveBeenCalledWith('OptionValue', 'get', {
      select: ['value', 'label'],
      where: [['option_group_id:name', '=', 'individual_prefix'], ['is_active', '=', true]]
    });
  });

  it('gets suffixes.', () => {
    person.getSuffixes();
    expect(CRM).toHaveBeenCalledWith('OptionValue', 'get', {
      select: ['value', 'label'],
      where: [['option_group_id:name', '=', 'individual_suffix'], ['is_active', '=', true]]
    });
  });

  it('saves contact to CRM.', () => {
    const testPerson = {
      id: 1,
      first_name: "Michael",
      middle_name: "F.",
      last_name: "Steigerwald",
      prefix_id: 3,
      suffix_id: undefined,
      gender_id: 2,
      birth_date: "1961-02-04",
      modified_date: "2021-11-26",
      email: "CIO@AGLOA.org",
      phone: "(800)555-1212",
      street_address: "1870 Shady Beach Ave.",
      supplemental_address_1: undefined,
      supplemental_address_2: undefined,
      supplemental_address_3: undefined,
      city: "Roseville",
      postal_code: "55113",
      postal_code_suffix: "6900",
      country_id: 1228,
      state_province_id: 1022,
    };

    person.save(testPerson);

    let expectedPerson = {
      records: [{
        id: 1,
        first_name: "Michael", last_name: "Steigerwald", middle_name: "F.",
        prefix_id: 3, suffix_id: undefined, gender_id: 2, birth_date: "1961-02-04",
        contact_type: "Individual", contact_sub_type: undefined
      }],
      chain: {
        "emailSave": ["Email", "save", { records: [{ contact_id: 1, id: undefined, email: "CIO@AGLOA.org" }] }],
        "phoneSave": ["Phone", "save", { records: [{ contact_id: 1, id: undefined, phone: "(800)555-1212" }] }],
        "addressSave": ["Address", "save", {
          records: [{
            contact_id: 1, id: undefined,
            street_address: "1870 Shady Beach Ave.",
            supplemental_address_1: undefined, supplemental_address_2: undefined, supplemental_address_3: undefined,
            city: "Roseville", state_province_id: 1022, country_id: 1228,
            postal_code: "55113", postal_code_suffix: "6900"
          }]
        }]
      }
    }

    expect(CRM).toHaveBeenCalledWith('Contact', 'save', expectedPerson);
  });

  it('deletes contact from CRM.', () => {
    const id = 1;
    person.delete(id);
    expect(CRM).toHaveBeenCalledWith('Contact', 'delete', { where: [['id', '=', 1]] });
  });

});