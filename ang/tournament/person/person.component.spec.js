'use strict';

describe('person component', function () {
    var $componentController;
    var $routeParams;
    var person;

    beforeEach(function () {
        module('tournament');

        // This ***HAS*** to go before the beforeEach(inject(...)) block
        person = jasmine.createSpy('personServiceMock')

        module(function ($provide) {
            $provide.value('person', person);
        });

        inject(function (_$componentController_, _$routeParams_) {
            $componentController = _$componentController_;
            $routeParams = _$routeParams_;
        });
    });

    it('should call the `onDelete` binding, when deleting the hero', function () {
        var onDeleteSpy = jasmine.createSpy('getGenders');
        var bindings = { contactId: 1 };
        var ctrl = $componentController('trnPerson', null, bindings);

        ctrl.delete();
        expect(onDeleteSpy).toHaveBeenCalledWith({ hero: ctrl.hero });
    });

});