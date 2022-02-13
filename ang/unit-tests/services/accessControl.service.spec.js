'use strict';

describe('Access control service ', function () {
    var accessControl;
    var CRM;

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);

        module('tournament');

        // This ***HAS*** to go before the beforeEach(inject(...)) block
        CRM = jasmine.createSpy('crmMock');

        module(function ($provide) {
            $provide.value('crmApi4', CRM);
        });

        inject(function (_accessControl_) { accessControl = _accessControl_; });
    });

    it('gets all people with access to any group in CRM.', function () {
        accessControl.get();

        expect(CRM).toHaveBeenCalledOnceWith('ACL', 'get', {
            select: ["operation", "access_group.id", "access_group.title", "contacts_group.id", "contacts_group.title", "contacts.contact_id"],
            join: [["ACLEntityRole AS role", "INNER", ["entity_id", "=", "role.acl_role_id"]], ["Group AS access_group", "INNER", ["role.entity_id", "=", "access_group.id"]], ["Group AS contacts_group", "INNER", ["object_id", "=", "contacts_group.id"]], ["GroupContact AS contacts", "INNER", ["access_group.id", "=", "contacts.group_id"]]],
            where: [["deny", "=", false], ["is_active", "=", true], ["role.is_active", "=", true], ["access_group.is_active", "=", true], ["contacts_group.is_active", "=", true], ["contacts.status", "=", "Added"]]
        });
    });

    it('gets all groups a contact can access from CRM.', function () {
        const contact_id = 1;
        accessControl.get(contact_id);

        expect(CRM).toHaveBeenCalledOnceWith('ACL', 'get', {
            select: ["operation", "access_group.id", "access_group.title", "contacts_group.id", "contacts_group.title", "contacts.contact_id"],
            join: [["ACLEntityRole AS role", "INNER", ["entity_id", "=", "role.acl_role_id"]], ["Group AS access_group", "INNER", ["role.entity_id", "=", "access_group.id"]], ["Group AS contacts_group", "INNER", ["object_id", "=", "contacts_group.id"]], ["GroupContact AS contacts", "INNER", ["access_group.id", "=", "contacts.group_id"]]],
            where: [
                ["deny", "=", false],
                ["is_active", "=", true],
                ["role.is_active", "=", true],
                ["access_group.is_active", "=", true],
                ["contacts_group.is_active", "=", true],
                ["contacts.status", "=", "Added"],
                ["contacts.contact_id", "=", contact_id]
            ]
        });
    });

})