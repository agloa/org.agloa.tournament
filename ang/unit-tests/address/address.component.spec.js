'use strict';

describe('address component', function () {
    const addressMock = jasmine.createSpy('addressMock').and.returnValue(Promise.resolve({}));
    let address = {
        values: [{
            id: "3",
            contact_id: "1",
            location_type_id: "3",
            is_primary: "1",
            is_billing: "0",
            street_address: "P. O. Box 3142",
            city: "Tequesta",
            state_province_id: "1008",
            postal_code: "33469",
            country_id: "1228"
        }]
    };

    const addressId = address.values[0].id;

    let countries = [
        {
            id: "1101",
            name: "India",
            iso_code: "IN",
            region_id: "4",
            is_province_abbreviated: "0"
        },
        {
            id: "1208",
            name: "Taiwan",
            iso_code: "TW",
            region_id: "4",
            is_province_abbreviated: "0"
        },
        {
            id: "1228",
            name: "United States",
            iso_code: "US",
            region_id: "2",
            is_province_abbreviated: "1"
        }
    ];

    let states_provinces = [
        {
            id: "1005",
            name: "Colorado",
            abbreviation: "CO",
            country_id: "1228"
        },
        {
            id: "1008",
            name: "Florida",
            abbreviation: "FL",
            country_id: "1228"
        },
        {
            id: "1009",
            name: "Georgia",
            abbreviation: "GA",
            country_id: "1228"
        },
        {
            id: "1017",
            name: "Louisiana",
            abbreviation: "LA",
            country_id: "1228"
        },
        {
            id: "1021",
            name: "Michigan",
            abbreviation: "MI",
            country_id: "1228"
        },
        {
            id: "1022",
            name: "Minnesota",
            abbreviation: "MN",
            country_id: "1228"
        },
        {
            id: "1032",
            name: "North Carolina",
            abbreviation: "NC",
            country_id: "1228"
        },
        {
            id: "1037",
            name: "Pennsylvania",
            abbreviation: "PA",
            country_id: "1228"
        },
        {
            id: "1047",
            name: "West Virginia",
            abbreviation: "WV",
            country_id: "1228"
        },
    ];

    let $componentController;
    let $routeParams;
    let addressService;

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);

        module('tournament');

        // This ***MUST*** go before the inject(...) block
        addressService = {
            get: function () {
                return Promise.resolve(address);
            },
            getCountries: function () {
                return Promise.resolve(countries);
            },
            getStateProvinces: function () {
                return Promise.resolve(states_provinces);
            },
            save: addressMock,
            delete: addressMock
        };

        module(function ($provide) {
            $provide.value('address', addressService);
        });

        inject(function (_$componentController_, _$routeParams_) {
            $componentController = _$componentController_;
            $routeParams = _$routeParams_;
        });
    });

    it('should bind address id', async function () {
        // Assemble
        var bindings = { id: addressId };

        // Act
        var controller = await $componentController('trnAddress', null, bindings);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(addressId);
    });

    it('should get address id from routeParams', async function () {
        // Assemble
        $routeParams.addressId = addressId;

        // Act
        var controller = await $componentController('trnAddress', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(addressId);
    });

    it('should get contact id from routeParams', async function () {
        // Assemble
        $routeParams.contactId = 1;

        // Act
        var controller = await $componentController('trnAddress', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(addressId);
    });

    it('should save by calling address service save', async function () {
        // Assemble
        var bindings = { id: addressId };

        var controller = await $componentController('trnAddress', null, bindings);
        expect(controller).toBeDefined();
        await controller.$onInit();

        // Act
        await controller.save();
        expect(addressMock).toHaveBeenCalled();
    });

    it('should delete by calling person service delete', async function () {
        // Assemble
        var bindings = { id: addressId };

        var controller = await $componentController('trnAddress', null, bindings);
        expect(controller).toBeDefined();
        await controller.$onInit();

        // Act
        await controller.delete();
        expect(addressMock).toHaveBeenCalled();
    });
});