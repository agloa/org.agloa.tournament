'use strict';

describe('person component', function () {
    const personMock = jasmine.createSpy('personMock').and.returnValue(Promise.resolve({}));
    let personService;

    let genders = [
        {
            value: 'M',
            label: 'Male'
        },
        {
            value: 'F',
            label: 'Female'
        },
    ]
        ;

    let prefixes = [
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
        ;

    let suffixes = [
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
        ;

    let person = [{
        "contact_id": "2",
        "contact_type": "Individual",
        "sort_name": "Steigerwald, Michael",
        "display_name": "Mr. Michael Steigerwald",
        "first_name": "Michael",
        "middle_name": "Francis",
        "last_name": "Steigerwald",
        "prefix_id": "3",
        "suffix_id": "",
        "formal_title": "",
        "gender_id": "2",
        "birth_date": "1961-02-04",
        "address_id": "10",
        "street_address": "1870 Shady Beach Ave.",
        "supplemental_address_1": "",
        "supplemental_address_2": "",
        "supplemental_address_3": "",
        "city": "Roseville",
        "postal_code_suffix": "6900",
        "postal_code": "55113",
        "state_province_id": "1022",
        "country_id": "1228",
        "phone_id": "1",
        "phone_type_id": "2",
        "phone": "(612) 875-1888",
        "email_id": "2",
        "email": "cio@agloa.org",
        "individual_prefix": "Mr.",
        "individual_suffix": "",
        "communication_style": "Formal",
        "gender": "Male",
        "state_province_name": "Minnesota",
        "state_province": "MN",
        "country": "United States",
        "id": "2"
    }]

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
    ]

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
    ]

    let $componentController;
    let $routeParams;

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);

        module('tournament');

        // This ***MUST*** go before the inject(...) block
        personService = {
            get: function () {
                return Promise.resolve(person);
            },
            getGenders: function () {
                return Promise.resolve(genders);
            },
            getPrefixes: function () {
                return Promise.resolve(prefixes);
            },
            getSuffixes: function () {
                return Promise.resolve(suffixes);
            },
            save: personMock,
            delete: personMock
        };

        let address = {
            getCountries: function () {
                return Promise.resolve(countries);
            },
            getStateProvinces: function () {
                return Promise.resolve(states_provinces);
            }
        };

        module(function ($provide) {
            $provide.value('person', personService);
            $provide.value('address', address);
        });

        inject(function (_$componentController_, _$routeParams_) {
            $componentController = _$componentController_;
            $routeParams = _$routeParams_;
        });
    });

    it('Binds contact id.', async function () {
        // Assemble
        let contactId = 1;
        var bindings = { contactId: 1 };

        // Act
        var controller = await $componentController('trnPerson', null, bindings);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(contactId);
    });

    it('Gets contact id from routeParams.', async function () {
        // Assemble
        let contactId = 1;
        $routeParams.contactId = contactId;

        // Act
        var controller = await $componentController('trnPerson', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(contactId);
    });

    it('Saves by calling person service save.', async function () {
        // Assemble
        let contactId = 1;
        var bindings = { contactId: 1 };

        var controller = await $componentController('trnPerson', null, bindings);
        expect(controller).toBeDefined();
        await controller.$onInit();
        expect(controller.id).toBe(contactId);

        // Act
        await controller.save();
        expect(personMock).toHaveBeenCalled();
    });

    it('Deletes by calling person service delete.', async function () {
        // Assemble
        let contactId = 1;
        var bindings = { contactId: 1 };

        var controller = await $componentController('trnPerson', null, bindings);
        expect(controller).toBeDefined();
        await controller.$onInit();
        expect(controller.id).toBe(contactId);

        // Act
        await controller.delete();
        expect(personMock).toHaveBeenCalled();
    });

});