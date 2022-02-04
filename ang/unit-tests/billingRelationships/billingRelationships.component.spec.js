'use strict';

describe('Billing relationhships compnent ', function () {
    let $componentController;
    let $routeParams;

    const contactId = 1;
    const relationships = [
        {
            "id": 2,
            "contact_id_b": 1,
            "relationship_type_id": 13,
            "contact_b.display_name": "agloa.org",
            "start_date": "2020-09-01",
            "end_date": null,
            "description": "",
            "relationship_type.name_a_b": "Billing contact for",
            "contact_b.modified_date": "2021-04-25 17:31:59"
        },
        {
            "id": 4,
            "contact_id_b": 15,
            "relationship_type_id": 13,
            "contact_b.display_name": "North Texas League of Academic Games",
            "start_date": null,
            "end_date": null,
            "description": "",
            "relationship_type.name_a_b": "Billing contact for",
            "contact_b.modified_date": "2021-05-08 15:03:35"
        }
    ];
    const mappedRelationships = [
        {
            "relationshipId": 2,
            "organizationId": 1,
            "organizationName": "agloa.org"
        },
        {
            "relationshipId": 4,
            "organizationId": 15,
            "organizationName": "North Texas League of Academic Games"
        }
    ];

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);

        module('tournament');

        // This ***MUST*** go before the inject(...) block
        const billingRelationshipService = {
            get: async function () {
                return relationships;
            },
        };

        module(function ($provide) {
            $provide.value('billingRelationship', billingRelationshipService);
        });

        inject(function (_$componentController_, _$routeParams_) {
            $componentController = _$componentController_;
            $routeParams = _$routeParams_;
        });
    });

    it('binds contact id.', async function () {
        // Assemble
        let contactId = 1;
        var bindings = { contactId: 1 };

        // Act
        var controller = await $componentController('trnBillingrelationships', null, bindings);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.contactId).toBe(contactId);
    });

    it('gets relationships for contact id from routeParams', async function () {
        // Assemble
        $routeParams.contactId = contactId;

        // Act
        var controller = await $componentController('trnBillingrelationships', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.contactId).toBe(contactId);
        expect(controller.relationships).toEqual(mappedRelationships);
        expect(controller.displayOrganizations[1]).toBe(false);
        expect(controller.displayOrganizations[15]).toBe(false);
    });

    it('displays organizations when clicked', async function () {
        // Assemble
        $routeParams.contactId = contactId;

        // Act
        var controller = await $componentController('trnBillingrelationships', null);
        await controller.$onInit();

        await controller.organizationClicked(1);
        await controller.organizationClicked(15);

        // Assert
        expect(controller).toBeDefined();
        expect(controller.displayOrganizations[1]).toBe(true);
        expect(controller.displayOrganizations[15]).toBe(true);
    });

});