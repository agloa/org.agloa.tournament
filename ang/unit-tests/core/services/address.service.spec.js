'use strict';

describe('address', function () {
  var address;
  var crmApi;

  var returnFields = ["id"
    , "contact_id"
    , "location_type_id"
    , "is_primary"
    , "is_billing"
    , "street_address"
    , "supplemental_address_1"
    , "supplemental_address_2"
    , "supplemental_address_3"
    , "city", "postal_code"
    , "postal_code_suffix"
    , "country_id"
    , "state_province_id"
  ];

  beforeEach(function () {
    // Add a custom equality tester before each test
    jasmine.addCustomEqualityTester(angular.equals);
    module('tournament');

    // This ***MUST*** go before the beforeEach(inject(...)) block
    crmApi = jasmine.createSpy('crmApiMock').and.returnValue(Promise.resolve(
      {
        values:[{
          countryLimit: ["1228", "1101", "1208"]
        }]
      }
      ));

    module(function ($provide) {
      $provide.value('crmApi', crmApi);
    });
    inject(function (_address_) { address = _address_; });
  });

  it('should get from crmApi', function () {
    address.get();
    expect(crmApi).toHaveBeenCalledWith('Address', 'get', {
      "sequential": 1,
      "return": returnFields
    });
  });

  it('should get by contact_id from crmApi', function () {
    const contact_id = 1;
    address.get(contact_id);
    expect(crmApi).toHaveBeenCalledWith('Address', 'get', {
      "sequential": 1,
      "return": returnFields,
      "contact_id": contact_id,
      "is_primary": 1
    });
  });

  it('should get by id from crmApi', function () {
    const id = 1;
    address.get(undefined, id);
    expect(crmApi).toHaveBeenCalledWith('Address', 'get', {
      "sequential": 1,
      "return": returnFields,
      "id": id,
      "is_primary": 1
    });
  });

  it('should get countries', async function () {
    await address.getCountries();
    expect(crmApi).toHaveBeenCalledWith('Country', 'get', {
      "sequential": 1,
      "id": { "IN": [ '1228', '1101', '1208' ] },
      "options": { "limit": 0 }
    });
    expect(crmApi).toHaveBeenCalledWith('Setting', 'get', {
      "sequential": 1,
      return: [ 'countryLimit' ]
    });
  });

  it('should get states and provinces', async function () {
    await address.getStateProvinces();
    expect(crmApi).toHaveBeenCalledWith('StateProvince', 'get', {
      "sequential": 1,
      "country_id": { "IN": [ '1228', '1101', '1208' ] },
      "options": { "limit": 0 }
    });
    expect(crmApi).toHaveBeenCalledWith('Setting', 'get', {
      "sequential": 1,
      return: [ 'countryLimit' ]
    });
  });

  it('save should create address in crmApi', () => {
    const testAddress = {
      id: 1
      , contact_id: 1
      , location_type_id: 1
      , is_primary: 1
      , is_billing: 1,
      street_address: "expectedAddress.street_address",
      supplemental_address_1: "expectedAddress.supplemental_address_1",
      supplemental_address_2: "expectedAddress.supplemental_address_2",
      supplemental_address_3: "expectedAddress.supplemental_address_3",
      city: "expectedAddress.city",
      state_province_id: 1,
      postal_code: "expectedAddress.postal_code",
      postal_code_suffix: "expectedAddress.postal_code_suffix",
      country_id: 1
    };

    const expectedAddress = testAddress;

    address.save(testAddress);

    expect(crmApi).toHaveBeenCalledWith('Address', 'create', {
      "id": expectedAddress.id
      , "contact_id": expectedAddress.contact_id
      , "location_type_id": expectedAddress.location_type_id
      , "is_primary": expectedAddress.is_primary
      , "is_billing": expectedAddress.is_billing,
      "street_address": expectedAddress.street_address,
      "supplemental_address_1": expectedAddress.supplemental_address_1,
      "supplemental_address_2": expectedAddress.supplemental_address_2,
      "supplemental_address_3": expectedAddress.supplemental_address_3,
      "city": expectedAddress.city,
      "state_province_id": expectedAddress.state_province_id,
      "postal_code": expectedAddress.postal_code,
      "postal_code_suffix": expectedAddress.postal_code_suffix,
      "country_id": expectedAddress.country_id
    });
  });
});