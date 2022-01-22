'use strict';

describe('Address service', function () {
    var address;
    var CRM;
    const availableCountries = ["1228", "1101", "1208"];
    const availableCountryResult = [
        {
            "name": "countryLimit",
            "value": availableCountries,
            "domain_id": 1
        }
    ];

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);
        module('tournament');

        // This ***HAS*** to go before the beforeEach(inject(...)) block
        CRM = jasmine.createSpy('crmMock').and.returnValue(
            new Promise(function (resolve) {
                resolve(availableCountryResult);
            })
        );

        module(function ($provide) {
            $provide.value('crmApi4', CRM);
        });

        inject(function (_address_) { address = _address_; });
    });

    it('gets countries from CRM.', async function () {
        await address.getCountries();
        expect(CRM).toHaveBeenCalledWith('Setting', 'get', { select: ['countryLimit'] });
        expect(CRM).toHaveBeenCalledWith('Country', 'get', { select: ['id', 'name'], where: [['id', 'IN', availableCountries]] });
    });

    it('gets all states/provinces from CRM.', async function () {
        await address.getStateProvinces();
        expect(CRM).toHaveBeenCalledWith('Setting', 'get', Object({ select: ['countryLimit'] }));
        expect(CRM).toHaveBeenCalledWith('StateProvince', 'get', {
            select: ["id", "name", "country_id"],
            where: [["country_id", "IN", availableCountries]]
        });
    });

    it("gets a single country's states/provinces from CRM.", async function () {
        const country_id = 1028;
        await address.getStateProvinces(country_id);
        expect(CRM).toHaveBeenCalledWith('StateProvince', 'get', {
            select: ["id", "name", "country_id"],
            where: [["country_id", "=", country_id]]
        });
    });

});