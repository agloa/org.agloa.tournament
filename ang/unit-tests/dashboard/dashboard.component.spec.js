'use strict';

describe('Dashboard component', function () {
    let contactId = 1;

    const person = {
        id: contactId,
        display_name: "Display Name",
        modified_date: "2022-01-01"
    };

    const genders = [
        {
            "id": 60,
            "value": "1",
            "label": "Female"
        },
        {
            "id": 61,
            "value": "2",
            "label": "Male"
        },
        {
            "id": 62,
            "value": "3",
            "label": "Other"
        }
    ];

    const prefixes = [
        {
            value: "1",
            label: "Mrs."
        },
        {
            value: "2",
            label: "Ms."
        },
        {
            value: "3",
            label: "Mr."
        },
        {
            value: "4",
            label: "Dr."
        }
    ];

    const suffixes = [
        {
            label: "Jr.",
            value: "1"
        },
        {
            label: "Sr.",
            value: "2"
        },
        {
            label: "II",
            value: "3"
        },
        {
            label: "III",
            value: "4"
        },
        {
            label: "IV",
            value: "5"
        },
        {
            label: "V",
            value: "6"
        },
        {
            label: "VI",
            value: "7"
        },
        {
            label: "VII",
            value: "8"
        }
    ];

    const countries = [
        {
            id: "1101",
            name: "India",
            iso_code: "IN",
            region_id: "4",
            is_province_abbreviated: "0"
        },
        {
            id: "1208",
            name: "Taiwan",
            iso_code: "TW",
            region_id: "4",
            is_province_abbreviated: "0"
        },
        {
            id: "1228",
            name: "United States",
            iso_code: "US",
            region_id: "2",
            is_province_abbreviated: "1"
        }
    ];

    const states_provinces = [
        {
            id: "1000",
            name: "Alabama",
            abbreviation: "AL",
            country_id: "1228"
        },
        {
            id: "1001",
            name: "Alaska",
            abbreviation: "AK",
            country_id: "1228"
        },
        {
            id: "1002",
            name: "Arizona",
            abbreviation: "AZ",
            country_id: "1228"
        },
        {
            id: "1003",
            name: "Arkansas",
            abbreviation: "AR",
            country_id: "1228"
        },
        {
            id: "1004",
            name: "California",
            abbreviation: "CA",
            country_id: "1228"
        },
        {
            id: "1005",
            name: "Colorado",
            abbreviation: "CO",
            country_id: "1228"
        },
        {
            id: "1006",
            name: "Connecticut",
            abbreviation: "CT",
            country_id: "1228"
        },
        {
            id: "1007",
            name: "Delaware",
            abbreviation: "DE",
            country_id: "1228"
        },
        {
            id: "1008",
            name: "Florida",
            abbreviation: "FL",
            country_id: "1228"
        },
        {
            id: "1009",
            name: "Georgia",
            abbreviation: "GA",
            country_id: "1228"
        },
        {
            id: "1010",
            name: "Hawaii",
            abbreviation: "HI",
            country_id: "1228"
        },
        {
            id: "1011",
            name: "Idaho",
            abbreviation: "ID",
            country_id: "1228"
        },
        {
            id: "1012",
            name: "Illinois",
            abbreviation: "IL",
            country_id: "1228"
        },
        {
            id: "1013",
            name: "Indiana",
            abbreviation: "IN",
            country_id: "1228"
        },
        {
            id: "1014",
            name: "Iowa",
            abbreviation: "IA",
            country_id: "1228"
        },
        {
            id: "1015",
            name: "Kansas",
            abbreviation: "KS",
            country_id: "1228"
        },
        {
            id: "1016",
            name: "Kentucky",
            abbreviation: "KY",
            country_id: "1228"
        },
        {
            id: "1017",
            name: "Louisiana",
            abbreviation: "LA",
            country_id: "1228"
        },
        {
            id: "1018",
            name: "Maine",
            abbreviation: "ME",
            country_id: "1228"
        },
        {
            id: "1019",
            name: "Maryland",
            abbreviation: "MD",
            country_id: "1228"
        },
        {
            id: "1020",
            name: "Massachusetts",
            abbreviation: "MA",
            country_id: "1228"
        },
        {
            id: "1021",
            name: "Michigan",
            abbreviation: "MI",
            country_id: "1228"
        },
        {
            id: "1022",
            name: "Minnesota",
            abbreviation: "MN",
            country_id: "1228"
        },
        {
            id: "1023",
            name: "Mississippi",
            abbreviation: "MS",
            country_id: "1228"
        },
        {
            id: "1024",
            name: "Missouri",
            abbreviation: "MO",
            country_id: "1228"
        },
        {
            id: "1025",
            name: "Montana",
            abbreviation: "MT",
            country_id: "1228"
        },
        {
            id: "1026",
            name: "Nebraska",
            abbreviation: "NE",
            country_id: "1228"
        },
        {
            id: "1027",
            name: "Nevada",
            abbreviation: "NV",
            country_id: "1228"
        },
        {
            id: "1028",
            name: "New Hampshire",
            abbreviation: "NH",
            country_id: "1228"
        },
        {
            id: "1029",
            name: "New Jersey",
            abbreviation: "NJ",
            country_id: "1228"
        },
        {
            id: "1030",
            name: "New Mexico",
            abbreviation: "NM",
            country_id: "1228"
        },
        {
            id: "1031",
            name: "New York",
            abbreviation: "NY",
            country_id: "1228"
        },
        {
            id: "1032",
            name: "North Carolina",
            abbreviation: "NC",
            country_id: "1228"
        },
        {
            id: "1033",
            name: "North Dakota",
            abbreviation: "ND",
            country_id: "1228"
        },
        {
            id: "1034",
            name: "Ohio",
            abbreviation: "OH",
            country_id: "1228"
        },
        {
            id: "1035",
            name: "Oklahoma",
            abbreviation: "OK",
            country_id: "1228"
        },
        {
            id: "1036",
            name: "Oregon",
            abbreviation: "OR",
            country_id: "1228"
        },
        {
            id: "1037",
            name: "Pennsylvania",
            abbreviation: "PA",
            country_id: "1228"
        },
        {
            id: "1038",
            name: "Rhode Island",
            abbreviation: "RI",
            country_id: "1228"
        },
        {
            id: "1039",
            name: "South Carolina",
            abbreviation: "SC",
            country_id: "1228"
        },
        {
            id: "1040",
            name: "South Dakota",
            abbreviation: "SD",
            country_id: "1228"
        },
        {
            id: "1041",
            name: "Tennessee",
            abbreviation: "TN",
            country_id: "1228"
        },
        {
            id: "1042",
            name: "Texas",
            abbreviation: "TX",
            country_id: "1228"
        },
        {
            id: "1043",
            name: "Utah",
            abbreviation: "UT",
            country_id: "1228"
        },
        {
            id: "1044",
            name: "Vermont",
            abbreviation: "VT",
            country_id: "1228"
        },
        {
            id: "1045",
            name: "Virginia",
            abbreviation: "VA",
            country_id: "1228"
        },
        {
            id: "1046",
            name: "Washington",
            abbreviation: "WA",
            country_id: "1228"
        },
        {
            id: "1047",
            name: "West Virginia",
            abbreviation: "WV",
            country_id: "1228"
        },
        {
            id: "1048",
            name: "Wisconsin",
            abbreviation: "WI",
            country_id: "1228"
        },
        {
            id: "1049",
            name: "Wyoming",
            abbreviation: "WY",
            country_id: "1228"
        },
        {
            id: "1050",
            name: "District of Columbia",
            abbreviation: "DC",
            country_id: "1228"
        },
        {
            id: "1052",
            name: "American Samoa",
            abbreviation: "AS",
            country_id: "1228"
        },
        {
            id: "1053",
            name: "Guam",
            abbreviation: "GU",
            country_id: "1228"
        },
        {
            id: "1055",
            name: "Northern Mariana Islands",
            abbreviation: "MP",
            country_id: "1228"
        },
        {
            id: "1056",
            name: "Puerto Rico",
            abbreviation: "PR",
            country_id: "1228"
        },
        {
            id: "1057",
            name: "Virgin Islands",
            abbreviation: "VI",
            country_id: "1228"
        },
        {
            id: "1058",
            name: "United States Minor Outlying Islands",
            abbreviation: "UM",
            country_id: "1228"
        },
        {
            id: "1059",
            name: "Armed Forces Europe",
            abbreviation: "AE",
            country_id: "1228"
        },
        {
            id: "1060",
            name: "Armed Forces Americas",
            abbreviation: "AA",
            country_id: "1228"
        },
        {
            id: "1061",
            name: "Armed Forces Pacific",
            abbreviation: "AP",
            country_id: "1228"
        }
    ];

    let $componentController;
    let $routeParams;
    let personService;

    beforeEach(function () {
        // Add a custom equality tester before each test
        jasmine.addCustomEqualityTester(angular.equals);

        module('tournament');

        // This ***MUST*** go before the inject(...) block
        personService = {
            get: async function () {
                return [person];
            },
            getGenders: async function () {
                return genders;
            },
            getPrefixes: async function () {
                return prefixes;
            },
            getSuffixes: async function () {
                return suffixes;
            }
        };

        let addressService = {
            getCountries: async function () {
                return countries;
            },
            getStateProvinces: async function () {
                return states_provinces;
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
        await controller.$onInit();

        // Assert
        expect(controller).toBeDefined();
        expect(controller.contactId).toBe(person.id);
        expect(controller.display_name).toBe(person.display_name);
        expect(controller.modified_date).toBe(person.modified_date);
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

    it('should display registration groups.', async function () {
        // Assemble
        $routeParams.userId = contactId;

        // Act
        var controller = await $componentController('trnDashboard', null);
        expect(controller).toBeDefined();
        controller.registrationGroupsClicked();

        // Assert
        expect(controller.displayRegistrationGroups).toBe(true);
    });

});