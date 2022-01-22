'use strict';

describe('person component', function () {
    const personMock = jasmine.createSpy('personMock').and.returnValue(Promise.resolve({}));
    let personService;

    const genders = [
        {
            value: 'M',
            label: 'Male'
        },
        {
            value: 'F',
            label: 'Female'
        },
    ];

    const prefixes = [
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
    ];

    const suffixes = [
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
    ];

    const person = [{
        "contact_id": 2,
        "contact_type": "Individual",
        "sort_name": "Steigerwald, Michael",
        "display_name": "Mr. Michael Steigerwald",
        "first_name": "Michael",
        "middle_name": "Francis",
        "last_name": "Steigerwald",
        "prefix_id": 3,
        "suffix_id": "",
        "formal_title": "",
        "gender_id": "2",
        "birth_date": "1961-02-04",
        "address_id": "10",
        "address.street_address": "1870 Shady Beach Ave.",
        "address.supplemental_address_1": "",
        "address.supplemental_address_2": "",
        "address.supplemental_address_3": "",
        "address.city": "Roseville",
        "address.postal_code_suffix": "6900",
        "address.postal_code": "55113",
        "address.address.state_province_id": "1022",
        "address.country_id": "1228",
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

    const countries = [
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

    const states_provinces = [
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
            get: async function () {
                return person;
            },
            getGenders: async function () {
                return genders;
            },
            getPrefixes: async function () {
                return prefixes;
            },
            getSuffixes: async function () {
                return suffixes;
            },
            save: personMock,
            delete: personMock
        };

        let address = {
            getCountries: async function () {
                return countries;
            },
            getStateProvinces: async function () {
                return states_provinces;
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

    it('Gets contact from routeParams.', async function () {
        // Assemble
        const selectedPerson = person[0];
        $routeParams.contactId = selectedPerson.contact_id;

        // Act
        var controller = await $componentController('trnPerson', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(selectedPerson.contact_id);
        expect(controller.first_name).toBe(selectedPerson.first_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.middle_name).toBe(selectedPerson.middle_name);

        expect(controller.prefix).toBe(selectedPerson.prefix_id.toString());
        expect(controller.suffix).toBe(selectedPerson.suffix_id.toString());
        expect(controller.gender).toBe(selectedPerson.gender_id.toString());

        expect(controller.birth_date).toEqual(new Date(selectedPerson.birth_date));

        expect(controller.contact_type).toBe(selectedPerson.contact_type);
        expect(controller.contact_sub_type).toBe(selectedPerson.contact_sub_type);
        expect(controller.modified_date).toEqual(selectedPerson.modified_date);

        expect(controller.emailId).toBe(selectedPerson.email.id);
        expect(controller.email).toBe(selectedPerson.email.email);

        expect(controller.phoneId).toBe(selectedPerson.phone.id);
        expect(controller.phone).toBe(selectedPerson.phone.phone);

        expect(controller.addressId).toBe(selectedPerson.address.id);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
        expect(controller.last_name).toBe(selectedPerson.last_name);
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