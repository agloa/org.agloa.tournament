'use string';

describe('Registration Group service', function () {
    var registrationGroup;
    var CRM;
    const registrationGroupType = 4;

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);
        module('tournament');

        // This ***HAS*** to go before the beforeEach(inject(...)) block
        CRM = jasmine.createSpy('crmMock').and.returnValue(new Promise(
            function (resolve) {
                resolve(
                    [{ id: registrationGroupType }]
                )
            }));

        module(function ($provide) {
            $provide.value('crmApi4', CRM);
        });

        inject(function (_registrationGroup_) { registrationGroup = _registrationGroup_; });
    });

    it('gets all registration groups from CRM.', function () {
        registrationGroup.get();
        expect(CRM).toHaveBeenCalledOnceWith('Group', 'get', {
            select: ["id", "title", "created_id", "modified_id", "group_contact.group_id:label", "group_contact.contact_id"],
            join: [["GroupContact AS group_contact", "LEFT", ["id", "=", "group_contact.group_id"]]],
            where: [["is_active", "=", true], ["is_hidden", "=", false], ["group_type", "CONTAINS", registrationGroupType]],
            limit: 800
        })
    });

    it('gets a registration group from CRM by id.', function () {
        var groupId = 1;
        registrationGroup.get(groupId);
        expect(CRM).toHaveBeenCalledOnceWith('Group', 'get', {
            select: ["id", "title", "created_id", "modified_id", "group_contact.group_id:label", "group_contact.contact_id"],
            join: [["GroupContact AS group_contact", "LEFT", ["id", "=", "group_contact.group_id"]]],
            where: [["is_active", "=", true], ["is_hidden", "=", false], ["group_type", "CONTAINS", registrationGroupType], ["id.contact_id", "=", groupId]],
            limit: 800
        })
    });

})