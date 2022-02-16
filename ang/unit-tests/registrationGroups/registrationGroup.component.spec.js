'use strict';

describe('Registration groups component', function () {
    let $componentController;
    let $routeParams;

    const contactId = 1;
    const groups = [{ id: 1 }, { id: 2 }];

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);

        module('tournament');

        // This ***MUST*** go before the inject(...) block
        const accessControlService = { get: async function () { return groups; } };

        module(function ($provide) { $provide.value('accessControl', accessControlService); });

        inject(function (_$componentController_, _$routeParams_) {
            $componentController = _$componentController_;
            $routeParams = _$routeParams_;
        })
    });

    it('binds contact id.', async function () {
        // Assemble
        let contactId = 1;
        var bindings = { contactId: contactId };

        // Act
        var controller = await $componentController('trnRegistrationgroups', null, bindings);
        await controller.$onInit();

        // Assert
        expect(controller.contactId).toBe(contactId);
    });

    it('gets groups for contact id from routeParams', async function () {
        // Assemble
        $routeParams.contactId = contactId;

        // Act
        var controller = await $componentController('trnRegistrationgroups', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.contactId).toBe(contactId);
        expect(controller.groups).toEqual(groups);
        expect(controller.displayGroups[1]).toBe(false);
        expect(controller.displayGroups[2]).toBe(false);
    });

    it('displays groups when clicked', async function () {
        // Assemble
        $routeParams.contactId = contactId;

        // Act
        var controller = await $componentController('trnRegistrationgroups', null);
        await controller.$onInit();

        await controller.groupClicked(contactId);

        // Assert
        expect(controller).toBeDefined();
        expect(controller.displayGroups[contactId]).toBe(true);
    });
});