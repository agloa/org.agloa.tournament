'use strict';

describe('Tag service', function () {
    var tag;
    var CRM;

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);
        module('tournament');

        // This ***HAS*** to go before the beforeEach(inject(...)) block
        CRM = jasmine.createSpy('crmMock')

        module(function ($provide) {
            $provide.value('crmApi4', CRM);
        });

        inject(function (_tag_) { tag = _tag_; });
    });

    it('gets all from CRM', function () {
        tag.get();
        expect(CRM).toHaveBeenCalledWith('Tag', 'get', {
            select: ["id", "name", "description"]
        });
    });

    it('gets by id from CRM', function () {
        const id = 6;
        tag.get(id);
        expect(CRM).toHaveBeenCalledWith('Tag', 'get', {
            select: ["id", "name", "description"],
            where: ['id', '=', id]
        });
    });

    it('gets all from CRM', function () {
        tag.getByName();
        expect(CRM).toHaveBeenCalledWith('Tag', 'get', {
            select: ["id", "name", "description"]
        });
    });

    it('gets by name from CRM', function () {
        const name = "Requires Approval";
        tag.getByName(name);
        expect(CRM).toHaveBeenCalledWith('Tag', 'get', {
            select: ["id", "name", "description"],
            where: ['name', '=', name]
        });
    });

    it('saves tag to CRM.', () => {
        const testTag = {
            "id": 6,
            "name": "Requires Approval",
            "description": "Contact requires approval from administrator",
            "parent_id": null,
            "is_selectable": true,
            "is_reserved": true,
            "is_tagset": false,
            "used_for": [
                "civicrm_contact"
            ],
            "created_id": 2,
            "color": null,
            "created_date": "2020-11-24 18:05:10"
        };

        testTag.save(testTag);
        expect(CRM).toHaveBeenCalledWith('Tag', 'save', {
            records: [{
                "id": testTag.id,
                "name": testTag.name,
                "description": testTag.description,
                "is_reserved": testTag.is_reserved,
                "used_for": testTag.used_for,
            }]
        });
    });

    it('deletes tag from CRM.', () => {
        const id = 1;
        tag.delete(id);
        expect(CRM).toHaveBeenCalledWith('Tag', 'delete', { where: [['id', '=', id]] });
    });

});