'use strict';

fdescribe('organization component', function () {
    const organizationMock = jasmine.createSpy('organizationMock').and.returnValue(Promise.resolve({}));
    let organizationService;

    const organization = [{
        organization_name: "AGLOA.org",
        modified_date: "2020-09-21 17:52:19",
        id: 1,
        "contact_id": "1",
        "contact_type": "Organization",
        "contact_sub_type": "",
        "sort_name": "AGLOA.org",
        "display_name": "AGLOA.org",
        "do_not_email": "0",
        "do_not_phone": "0",
        "do_not_mail": "0",
        "do_not_sms": "0",
        "do_not_trade": "0",
        "is_opt_out": "0",
        "legal_identifier": "",
        "external_identifier": "",
        "nick_name": "",
        "legal_name": "agloa.org",
        "image_URL": "",
        "preferred_communication_method": "",
        "preferred_language": "en_US",
        "preferred_mail_format": "Both",
        "first_name": "",
        "middle_name": "",
        "last_name": "",
        "prefix_id": "",
        "suffix_id": "",
        "formal_title": "",
        "communication_style_id": "1",
        "job_title": "",
        "gender_id": "",
        "birth_date": "",
        "is_deceased": "0",
        "deceased_date": "",
        "household_name": "",
        "organization_name": "AGLOA.org",
        "sic_code": "",
        "contact_is_deleted": "0",
        "current_employer": "",
        "address_id": "11",
        "street_address": "PO Box 3142",
        "supplemental_address_1": "",
        "supplemental_address_2": "",
        "supplemental_address_3": "",
        "city": "Tequesta",
        "postal_code_suffix": "",
        "postal_code": "33469",
        "geo_code_1": "",
        "geo_code_2": "",
        "state_province_id": "",
        "country_id": "",
        "phone_id": "2",
        "phone_type_id": "",
        "phone": "(313) 595-7560",
        "email_id": 1,
        "email": "cio@agloa.org",
        "on_hold": "0",
        "im_id": "",
        "provider_id": "",
        "im": "",
        "worldregion_id": "",
        "world_region": "",
        "languages": "English (United States)",
        "individual_prefix": "",
        "individual_suffix": "",
        "communication_style": "Formal",
        "gender": "",
        "state_province_name": "",
        "state_province": "",
        "country": "",
        "id": 1
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
        organizationService = {
            get: async function () {
                return organization;
            },
            save: organizationMock,
            delete: organizationMock
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
            $provide.value('organization', organizationService);
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
        var controller = await $componentController('trnOrganization', null, bindings);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(contactId);
    });

    it('Gets id from routeParam.', async function () {
        // Assemble
        const organizationId = 1;
        $routeParams.organizationId = organizationId;

        // Act
        var controller = await $componentController('trnOrganization', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(organizationId);
    });

    it('Saves by calling organization service save.', async function () {
        // Assemble
        let contactId = 1;
        var bindings = { contactId: 1 };

        var controller = await $componentController('trnOrganization', null, bindings);
        expect(controller).toBeDefined();
        await controller.$onInit();
        expect(controller.id).toBe(contactId);

        // Act
        await controller.save();
        expect(organizationMock).toHaveBeenCalled();
    });

    it('Deletes by calling organization service delete.', async function () {
        // Assemble
        let contactId = 1;
        var bindings = { contactId: 1 };

        var controller = await $componentController('trnOrganization', null, bindings);
        expect(controller).toBeDefined();
        await controller.$onInit();
        expect(controller.id).toBe(contactId);

        // Act
        await controller.delete();
        expect(organizationMock).toHaveBeenCalled();
    });

});