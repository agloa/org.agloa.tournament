'use strict';

describe('email component', function () {
    const emailMock = jasmine.createSpy('emailMock').and.returnValue(Promise.resolve({}));
    let email = {
        values: [{
            id: 1,
            contact_id: 1,
            location_type_id: 3,
            email: "info@agloa.org",
            is_primary: 1,
            is_billing: 0,
            on_hold: 0,
            is_bulkmail: 0
        }]
    };

    const emailId = email.values[0].id;

    let $componentController;
    let $routeParams;
    let emailService;

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);

        module('tournament');

        // This ***MUST*** go before the inject(...) block
        emailService = {
            get: function () {
                return Promise.resolve(email);
            },
            save: emailMock,
            delete: emailMock
        };

        module(function ($provide) {
            $provide.value('email', emailService);
        });

        inject(function (_$componentController_, _$routeParams_) {
            $componentController = _$componentController_;
            $routeParams = _$routeParams_;
        });
    });

    it('should bind email id', async function () {
        // Assemble
        var bindings = { id: emailId };

        // Act
        var controller = await $componentController('trnEmail', null, bindings);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(emailId);
    });

    it('should get email id from routeParams', async function () {
        // Assemble
        $routeParams.emailId = emailId;

        // Act
        var controller = await $componentController('trnEmail', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(emailId);
    });

    it('should get contact id from routeParams', async function () {
        // Assemble
        $routeParams.contactId = 1;

        // Act
        var controller = await $componentController('trnEmail', null);
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.id).toBe(emailId);
    });

    it('should save by calling email service save', async function () {
        // Assemble
        var bindings = { id: emailId };

        var controller = await $componentController('trnEmail', null, bindings);
        expect(controller).toBeDefined();
        await controller.$onInit();

        // Act
        await controller.save();
        expect(emailMock).toHaveBeenCalled();
    });

    it('should delete by calling email service delete', async function () {
        // Assemble
        var bindings = { id: emailId };

        var controller = await $componentController('trnEmail', null, bindings);
        expect(controller).toBeDefined();
        await controller.$onInit();

        // Act
        await controller.delete();
        expect(emailMock).toHaveBeenCalled();
    });
});