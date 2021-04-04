'use strict';

describe('phone component', function () {
    const phoneMock = jasmine.createSpy('phoneMock').and.returnValue(Promise.resolve({}));
    let phone = {
        values: [
            {
                id: 1,
                contact_id: 2,
                location_type_id: 3,
                is_primary: 1,
                is_billing: 0,
                phone: "612.875.1888",
                phone_numeric: "6128751888",
                phone_type_id: 2
            }
        ]
    };

    const phoneId = phone.values[0].id;

    let $componentController;
    let $routeParams;
    let phoneService;

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);

        module('tournament');

        // This ***MUST*** go before the inject(...) block
        phoneService = {
            get: function () {
                return Promise.resolve(phone);
            },
            save: phoneMock,
            delete: phoneMock
        };

        module(function ($provide) {
            $provide.value('phone', phoneService);
        });

        inject(function (_$componentController_, _$routeParams_) {
            $componentController = _$componentController_;
            $routeParams = _$routeParams_;
        });
    });

    it('should bind phone id', async function () {
        // Assemble
        var bindings = { id: phoneId };

        // Act
        var controller = await $componentController('trnPhone', null, bindings);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(phoneId);
    });

    it('should get phone id from routeParams', async function () {
        // Assemble
        $routeParams.phoneId = phoneId;

        // Act
        var controller = await $componentController('trnPhone', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(phoneId);
    });

    it('should get contact id from routeParams', async function () {
        // Assemble
        $routeParams.contactId = 1;

        // Act
        var controller = await $componentController('trnPhone', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(phoneId);
    });

    it('should save by calling service save', async function () {
        // Assemble
        var bindings = { id: phoneId };

        var controller = await $componentController('trnPhone', null, bindings);
        expect(controller).toBeDefined();
        await controller.$onInit();

        // Act
        await controller.save();
        expect(phoneMock).toHaveBeenCalled();
    });

    it('should delete by calling service delete', async function () {
        // Assemble
        var bindings = { id: phoneId };

        var controller = await $componentController('trnPhone', null, bindings);
        expect(controller).toBeDefined();
        await controller.$onInit();

        // Act
        await controller.delete();
        expect(phoneMock).toHaveBeenCalled();
    });
});