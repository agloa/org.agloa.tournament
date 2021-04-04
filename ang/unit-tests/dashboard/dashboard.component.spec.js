'use strict';

describe('dashboard component', function () {
    let contactId = 1;

    let person = {
        id: contactId
    };

    let $componentController;
    let $routeParams;
    let personService;

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);

        module('tournament');

        // This ***MUST*** go before the inject(...) block
        personService = {
            get: function () {
                return Promise.resolve(person);
            },
            getGenders: function () {
                return Promise.resolve(genders);
            },
            getPrefixes: function () {
                return Promise.resolve(prefixes);
            },
            getSuffixes: function () {
                return Promise.resolve(suffixes);
            }
        };

        let addressService = {
            getCountries: function () {
                return Promise.resolve(countries);
            },
            getStateProvinces: function () {
                return Promise.resolve(states_provinces);
            }
        };

        module(function ($provide) {
            $provide.value('person', personService);
            $provide.value('address', addressService);
        });

        inject(function (_$componentController_, _$routeParams_) {
            $componentController = _$componentController_;
            $routeParams = _$routeParams_;
        });
    });

    it('should get contact id from routeParams', async function () {
        // Assemble
        $routeParams.userId = contactId;

        // Act
        var controller = await $componentController('trnDashboard', null);

        // Assert
        expect(controller).toBeDefined();
        expect(controller.contactId).toBe(contactId);
    });

    it('should display Person', async function () {
        // Assemble
        $routeParams.userId = contactId;

        // Act
        var controller = await $componentController('trnDashboard', null);
        expect(controller).toBeDefined();
        controller.personClicked();

        // Assert
        expect(controller.displayPerson).toBe(true);
    });

    it('should display Organizations', async function () {
        // Assemble
        $routeParams.userId = contactId;

        // Act
        var controller = await $componentController('trnDashboard', null);
        expect(controller).toBeDefined();
        controller.organizationsClicked();

        // Assert
        expect(controller.displayOrganizations).toBe(true);
    });

});