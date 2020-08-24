
function ts(english) {
  return english;
}

CRM.alert = (message, title, severity) => {
  alert(message);
}

angular.module('tournament').factory('crmApi', function ($q) {
  return function (entity, action, params, message) {
    if (typeof entity === 'string') {
      entityType = entity;
    } else {
      entityType = JSON.stringify(entity);
    }

    var deferred = $q.defer();
    var p = new Promise(function (resolve, reject) {
      switch (entityType) {
        case "Contact":
          switch (action) {
            default:
              resolve({
                sort_name: "Steigerwald, Michael",
                display_name: "Mr. Michael Steigerwald",
                last_name: "Steigerwald",
                first_name: "Michael",
                middle_name: "Francis",
                birth_date: new Date(1961, 1, 4),
                modified_date: new Date(),
                gender_id: 2,
                prefix_id: 3,
                contact_id: 2,
                id: 2
              })
          }
        case "Address":
          switch (action) {
            default:
              resolve({
                values: [{
                  id: "1",
                  contact_id: "2",
                  location_type_id: "3",
                  is_primary: "1",
                  is_billing: "0",
                  street_address: "1870 Shady Beach Ave.",
                  city: "Minneapolis",
                  state_province_id: "1022",
                  postal_code_suffix: "6900",
                  postal_code: "55113",
                  country_id: "1228",
                  id: params.id
                }]
              })
          }
        case "OptionValue":
          switch (action) {
            default:
              switch (params.option_group_id) {
                case "gender":
                  resolve({
                    values: [
                      { label: "Female", value: 1 },
                      { label: "Male", value: 2 },
                      { label: "Other", value: 3 }
                    ]
                  })
                case "individual_prefix":
                  resolve({
                    values: [
                      {
                        value: 1,
                        label: "Mrs."
                      },
                      {
                        value: 2,
                        label: "Ms."
                      },
                      {
                        value: 3,
                        label: "Mr."
                      },
                      {
                        value: 4,
                        label: "Dr."
                      }
                    ]
                  })
                case "individual_suffix":
                  resolve({
                    values: [
                      {
                        label: "Jr.",
                        value: 1
                      },
                      {
                        label: "Sr.",
                        value: 2
                      },
                      {
                        label: "II",
                        value: 3
                      },
                      {
                        label: "III",
                        value: 4
                      },
                      {
                        label: "IV",
                        value: 5
                      },
                      {
                        label: "V",
                        value: 6
                      },
                      {
                        label: "VI",
                        value: 7
                      },
                      {
                        label: "VII",
                        value: 8
                      }
                    ]
                  })
              }
          }

        case "Setting":
          switch (action) {
            default:
              switch (params.return[0]) {
                case "countryLimit":
                  resolve({ values: [{ countryLimit: ["1228", "1101", "1208"] }] })
              }
          }

        case "Country":
          switch (action) {
            default:
              resolve({
                values: [
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
                ]
              })
          }

        case "StateProvince":
          switch (action) {
            default:
              resolve({
                values: [
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
                  },
                  {
                      id: "1100",
                      name: "Alberta",
                      abbreviation: "AB",
                      country_id: "1039"
                  },
                  {
                      id: "1101",
                      name: "British Columbia",
                      abbreviation: "BC",
                      country_id: "1039"
                  },
                  {
                      id: "1102",
                      name: "Manitoba",
                      abbreviation: "MB",
                      country_id: "1039"
                  },
                  {
                      id: "1103",
                      name: "New Brunswick",
                      abbreviation: "NB",
                      country_id: "1039"
                  },
                  {
                      id: "1104",
                      name: "Newfoundland and Labrador",
                      abbreviation: "NL",
                      country_id: "1039"
                  },
                  {
                      id: "1105",
                      name: "Northwest Territories",
                      abbreviation: "NT",
                      country_id: "1039"
                  },
                  {
                      id: "1106",
                      name: "Nova Scotia",
                      abbreviation: "NS",
                      country_id: "1039"
                  },
                  {
                      id: "1107",
                      name: "Nunavut",
                      abbreviation: "NU",
                      country_id: "1039"
                  },
                  {
                      id: "1108",
                      name: "Ontario",
                      abbreviation: "ON",
                      country_id: "1039"
                  },
                  {
                      id: "1109",
                      name: "Prince Edward Island",
                      abbreviation: "PE",
                      country_id: "1039"
                  },
                  {
                      id: "1110",
                      name: "Quebec",
                      abbreviation: "QC",
                      country_id: "1039"
                  },
                  {
                      id: "1111",
                      name: "Saskatchewan",
                      abbreviation: "SK",
                      country_id: "1039"
                  },
                  {
                      id: "1112",
                      name: "Yukon Territory",
                      abbreviation: "YT",
                      country_id: "1039"
                  },
                  {
                      id: "1200",
                      name: "Maharashtra",
                      abbreviation: "MM",
                      country_id: "1101"
                  },
                  {
                      id: "1201",
                      name: "Karnataka",
                      abbreviation: "KA",
                      country_id: "1101"
                  },
                  {
                      id: "1202",
                      name: "Andhra Pradesh",
                      abbreviation: "AP",
                      country_id: "1101"
                  },
                  {
                      id: "1203",
                      name: "Arunachal Pradesh",
                      abbreviation: "AR",
                      country_id: "1101"
                  },
                  {
                      id: "1204",
                      name: "Assam",
                      abbreviation: "AS",
                      country_id: "1101"
                  },
                  {
                      id: "1205",
                      name: "Bihar",
                      abbreviation: "BR",
                      country_id: "1101"
                  },
                  {
                      id: "1206",
                      name: "Chhattisgarh",
                      abbreviation: "CH",
                      country_id: "1101"
                  },
                  {
                      id: "1207",
                      name: "Goa",
                      abbreviation: "GA",
                      country_id: "1101"
                  },
                  {
                      id: "1208",
                      name: "Gujarat",
                      abbreviation: "GJ",
                      country_id: "1101"
                  },
                  {
                      id: "1209",
                      name: "Haryana",
                      abbreviation: "HR",
                      country_id: "1101"
                  },
                  {
                      id: "1210",
                      name: "Himachal Pradesh",
                      abbreviation: "HP",
                      country_id: "1101"
                  },
                  {
                      id: "1211",
                      name: "Jammu and Kashmir",
                      abbreviation: "JK",
                      country_id: "1101"
                  },
                  {
                      id: "1212",
                      name: "Jharkhand",
                      abbreviation: "JH",
                      country_id: "1101"
                  },
                  {
                      id: "1213",
                      name: "Kerala",
                      abbreviation: "KL",
                      country_id: "1101"
                  },
                  {
                      id: "1214",
                      name: "Madhya Pradesh",
                      abbreviation: "MP",
                      country_id: "1101"
                  },
                  {
                      id: "1215",
                      name: "Manipur",
                      abbreviation: "MN",
                      country_id: "1101"
                  },
                  {
                      id: "1216",
                      name: "Meghalaya",
                      abbreviation: "ML",
                      country_id: "1101"
                  },
                  {
                      id: "1217",
                      name: "Mizoram",
                      abbreviation: "MZ",
                      country_id: "1101"
                  },
                  {
                      id: "1218",
                      name: "Nagaland",
                      abbreviation: "NL",
                      country_id: "1101"
                  },
                  {
                      id: "1219",
                      name: "Orissa",
                      abbreviation: "OR",
                      country_id: "1101"
                  },
                  {
                      id: "1220",
                      name: "Punjab",
                      abbreviation: "PB",
                      country_id: "1101"
                  },
                  {
                      id: "1221",
                      name: "Rajasthan",
                      abbreviation: "RJ",
                      country_id: "1101"
                  },
                  {
                      id: "1222",
                      name: "Sikkim",
                      abbreviation: "SK",
                      country_id: "1101"
                  },
                  {
                      id: "1223",
                      name: "Tamil Nadu",
                      abbreviation: "TN",
                      country_id: "1101"
                  },
                  {
                      id: "1224",
                      name: "Tripura",
                      abbreviation: "TR",
                      country_id: "1101"
                  },
                  {
                      id: "1225",
                      name: "Uttarakhand",
                      abbreviation: "UT",
                      country_id: "1101"
                  },
                  {
                      id: "1226",
                      name: "Uttar Pradesh",
                      abbreviation: "UP",
                      country_id: "1101"
                  },
                  {
                      id: "1227",
                      name: "West Bengal",
                      abbreviation: "WB",
                      country_id: "1101"
                  },
                  {
                      id: "1228",
                      name: "Andaman and Nicobar Islands",
                      abbreviation: "AN",
                      country_id: "1101"
                  },
                  {
                      id: "1229",
                      name: "Dadra and Nagar Haveli",
                      abbreviation: "DN",
                      country_id: "1101"
                  },
                  {
                      id: "1230",
                      name: "Daman and Diu",
                      abbreviation: "DD",
                      country_id: "1101"
                  },
                  {
                      id: "1231",
                      name: "Delhi",
                      abbreviation: "DL",
                      country_id: "1101"
                  },
                  {
                      id: "1232",
                      name: "Lakshadweep",
                      abbreviation: "LD",
                      country_id: "1101"
                  },
                  {
                      id: "1233",
                      name: "Pondicherry",
                      abbreviation: "PY",
                      country_id: "1101"
                  },
                  {
                      id: "1300",
                      name: "mazowieckie",
                      abbreviation: "MZ",
                      country_id: "1172"
                  },
                  {
                      id: "1301",
                      name: "pomorskie",
                      abbreviation: "PM",
                      country_id: "1172"
                  },
                  {
                      id: "1302",
                      name: "dolnośląskie",
                      abbreviation: "DS",
                      country_id: "1172"
                  },
                  {
                      id: "1303",
                      name: "kujawsko-pomorskie",
                      abbreviation: "KP",
                      country_id: "1172"
                  },
                  {
                      id: "1304",
                      name: "lubelskie",
                      abbreviation: "LU",
                      country_id: "1172"
                  },
                  {
                      id: "1305",
                      name: "lubuskie",
                      abbreviation: "LB",
                      country_id: "1172"
                  },
                  {
                      id: "1306",
                      name: "łódzkie",
                      abbreviation: "LD",
                      country_id: "1172"
                  },
                  {
                      id: "1307",
                      name: "małopolskie",
                      abbreviation: "MA",
                      country_id: "1172"
                  },
                  {
                      id: "1308",
                      name: "opolskie",
                      abbreviation: "OP",
                      country_id: "1172"
                  },
                  {
                      id: "1309",
                      name: "podkarpackie",
                      abbreviation: "PK",
                      country_id: "1172"
                  },
                  {
                      id: "1310",
                      name: "podlaskie",
                      abbreviation: "PD",
                      country_id: "1172"
                  },
                  {
                      id: "1311",
                      name: "śląskie",
                      abbreviation: "SL",
                      country_id: "1172"
                  },
                  {
                      id: "1312",
                      name: "świętokrzyskie",
                      abbreviation: "SK",
                      country_id: "1172"
                  },
                  {
                      id: "1313",
                      name: "warmińsko-mazurskie",
                      abbreviation: "WN",
                      country_id: "1172"
                  },
                  {
                      id: "1314",
                      name: "wielkopolskie",
                      abbreviation: "WP",
                      country_id: "1172"
                  },
                  {
                      id: "1315",
                      name: "zachodniopomorskie",
                      abbreviation: "ZP",
                      country_id: "1172"
                  },
                  {
                      id: "1500",
                      name: "Abu Zaby",
                      abbreviation: "AZ",
                      country_id: "1225"
                  },
                  {
                      id: "1501",
                      name: "'Ajman",
                      abbreviation: "AJ",
                      country_id: "1225"
                  },
                  {
                      id: "1502",
                      name: "Al Fujayrah",
                      abbreviation: "FU",
                      country_id: "1225"
                  },
                  {
                      id: "1503",
                      name: "Ash Shariqah",
                      abbreviation: "SH",
                      country_id: "1225"
                  },
                  {
                      id: "1504",
                      name: "Dubayy",
                      abbreviation: "DU",
                      country_id: "1225"
                  },
                  {
                      id: "1505",
                      name: "Ra's al Khaymah",
                      abbreviation: "RK",
                      country_id: "1225"
                  },
                  {
                      id: "1506",
                      name: "Dac Lac",
                      abbreviation: "33",
                      country_id: "1233"
                  },
                  {
                      id: "1507",
                      name: "Umm al Qaywayn",
                      abbreviation: "UQ",
                      country_id: "1225"
                  },
                  {
                      id: "1508",
                      name: "Badakhshan",
                      abbreviation: "BDS",
                      country_id: "1001"
                  },
                  {
                      id: "1509",
                      name: "Badghis",
                      abbreviation: "BDG",
                      country_id: "1001"
                  },
                  {
                      id: "1510",
                      name: "Baghlan",
                      abbreviation: "BGL",
                      country_id: "1001"
                  },
                  {
                      id: "1511",
                      name: "Balkh",
                      abbreviation: "BAL",
                      country_id: "1001"
                  },
                  {
                      id: "1512",
                      name: "Bamian",
                      abbreviation: "BAM",
                      country_id: "1001"
                  },
                  {
                      id: "1513",
                      name: "Farah",
                      abbreviation: "FRA",
                      country_id: "1001"
                  },
                  {
                      id: "1514",
                      name: "Faryab",
                      abbreviation: "FYB",
                      country_id: "1001"
                  },
                  {
                      id: "1515",
                      name: "Ghazni",
                      abbreviation: "GHA",
                      country_id: "1001"
                  },
                  {
                      id: "1516",
                      name: "Ghowr",
                      abbreviation: "GHO",
                      country_id: "1001"
                  },
                  {
                      id: "1517",
                      name: "Helmand",
                      abbreviation: "HEL",
                      country_id: "1001"
                  },
                  {
                      id: "1518",
                      name: "Herat",
                      abbreviation: "HER",
                      country_id: "1001"
                  },
                  {
                      id: "1519",
                      name: "Jowzjan",
                      abbreviation: "JOW",
                      country_id: "1001"
                  },
                  {
                      id: "1520",
                      name: "Kabul",
                      abbreviation: "KAB",
                      country_id: "1001"
                  },
                  {
                      id: "1521",
                      name: "Kandahar",
                      abbreviation: "KAN",
                      country_id: "1001"
                  },
                  {
                      id: "1522",
                      name: "Kapisa",
                      abbreviation: "KAP",
                      country_id: "1001"
                  },
                  {
                      id: "1523",
                      name: "Khowst",
                      abbreviation: "KHO",
                      country_id: "1001"
                  },
                  {
                      id: "1524",
                      name: "Konar",
                      abbreviation: "KNR",
                      country_id: "1001"
                  },
                  {
                      id: "1525",
                      name: "Kondoz",
                      abbreviation: "KDZ",
                      country_id: "1001"
                  },
                  {
                      id: "1526",
                      name: "Laghman",
                      abbreviation: "LAG",
                      country_id: "1001"
                  },
                  {
                      id: "1527",
                      name: "Lowgar",
                      abbreviation: "LOW",
                      country_id: "1001"
                  },
                  {
                      id: "1528",
                      name: "Nangrahar",
                      abbreviation: "NAN",
                      country_id: "1001"
                  },
                  {
                      id: "1529",
                      name: "Nimruz",
                      abbreviation: "NIM",
                      country_id: "1001"
                  },
                  {
                      id: "1530",
                      name: "Nurestan",
                      abbreviation: "NUR",
                      country_id: "1001"
                  },
                  {
                      id: "1531",
                      name: "Oruzgan",
                      abbreviation: "ORU",
                      country_id: "1001"
                  },
                  {
                      id: "1532",
                      name: "Paktia",
                      abbreviation: "PIA",
                      country_id: "1001"
                  },
                  {
                      id: "1533",
                      name: "Paktika",
                      abbreviation: "PKA",
                      country_id: "1001"
                  },
                  {
                      id: "1534",
                      name: "Parwan",
                      abbreviation: "PAR",
                      country_id: "1001"
                  },
                  {
                      id: "1535",
                      name: "Samangan",
                      abbreviation: "SAM",
                      country_id: "1001"
                  },
                  {
                      id: "1536",
                      name: "Sar-e Pol",
                      abbreviation: "SAR",
                      country_id: "1001"
                  },
                  {
                      id: "1537",
                      name: "Takhar",
                      abbreviation: "TAK",
                      country_id: "1001"
                  },
                  {
                      id: "1538",
                      name: "Wardak",
                      abbreviation: "WAR",
                      country_id: "1001"
                  },
                  {
                      id: "1539",
                      name: "Zabol",
                      abbreviation: "ZAB",
                      country_id: "1001"
                  },
                  {
                      id: "1540",
                      name: "Berat",
                      abbreviation: "BR",
                      country_id: "1002"
                  },
                  {
                      id: "1541",
                      name: "Bulqizë",
                      abbreviation: "BU",
                      country_id: "1002"
                  },
                  {
                      id: "1542",
                      name: "Delvinë",
                      abbreviation: "DL",
                      country_id: "1002"
                  },
                  {
                      id: "1543",
                      name: "Devoll",
                      abbreviation: "DV",
                      country_id: "1002"
                  },
                  {
                      id: "1544",
                      name: "Dibër",
                      abbreviation: "DI",
                      country_id: "1002"
                  },
                  {
                      id: "1545",
                      name: "Durrës",
                      abbreviation: "DR",
                      country_id: "1002"
                  },
                  {
                      id: "1546",
                      name: "Elbasan",
                      abbreviation: "EL",
                      country_id: "1002"
                  },
                  {
                      id: "1547",
                      name: "Fier",
                      abbreviation: "FR",
                      country_id: "1002"
                  },
                  {
                      id: "1548",
                      name: "Gramsh",
                      abbreviation: "GR",
                      country_id: "1002"
                  },
                  {
                      id: "1549",
                      name: "Gjirokastër",
                      abbreviation: "GJ",
                      country_id: "1002"
                  },
                  {
                      id: "1550",
                      name: "Has",
                      abbreviation: "HA",
                      country_id: "1002"
                  },
                  {
                      id: "1551",
                      name: "Kavajë",
                      abbreviation: "KA",
                      country_id: "1002"
                  },
                  {
                      id: "1552",
                      name: "Kolonjë",
                      abbreviation: "ER",
                      country_id: "1002"
                  },
                  {
                      id: "1553",
                      name: "Korçë",
                      abbreviation: "KO",
                      country_id: "1002"
                  },
                  {
                      id: "1554",
                      name: "Krujë",
                      abbreviation: "KR",
                      country_id: "1002"
                  },
                  {
                      id: "1555",
                      name: "Kuçovë",
                      abbreviation: "KC",
                      country_id: "1002"
                  },
                  {
                      id: "1556",
                      name: "Kukës",
                      abbreviation: "KU",
                      country_id: "1002"
                  },
                  {
                      id: "1557",
                      name: "Kurbin",
                      abbreviation: "KB",
                      country_id: "1002"
                  },
                  {
                      id: "1558",
                      name: "Lezhë",
                      abbreviation: "LE",
                      country_id: "1002"
                  },
                  {
                      id: "1559",
                      name: "Librazhd",
                      abbreviation: "LB",
                      country_id: "1002"
                  },
                  {
                      id: "1560",
                      name: "Lushnjë",
                      abbreviation: "LU",
                      country_id: "1002"
                  },
                  {
                      id: "1561",
                      name: "Malësi e Madhe",
                      abbreviation: "MM",
                      country_id: "1002"
                  },
                  {
                      id: "1562",
                      name: "Mallakastër",
                      abbreviation: "MK",
                      country_id: "1002"
                  },
                  {
                      id: "1563",
                      name: "Mat",
                      abbreviation: "MT",
                      country_id: "1002"
                  },
                  {
                      id: "1564",
                      name: "Mirditë",
                      abbreviation: "MR",
                      country_id: "1002"
                  },
                  {
                      id: "1565",
                      name: "Peqin",
                      abbreviation: "PQ",
                      country_id: "1002"
                  },
                  {
                      id: "1566",
                      name: "Përmet",
                      abbreviation: "PR",
                      country_id: "1002"
                  },
                  {
                      id: "1567",
                      name: "Pogradec",
                      abbreviation: "PG",
                      country_id: "1002"
                  },
                  {
                      id: "1568",
                      name: "Pukë",
                      abbreviation: "PU",
                      country_id: "1002"
                  },
                  {
                      id: "1569",
                      name: "Sarandë",
                      abbreviation: "SR",
                      country_id: "1002"
                  },
                  {
                      id: "1570",
                      name: "Skrapar",
                      abbreviation: "SK",
                      country_id: "1002"
                  },
                  {
                      id: "1571",
                      name: "Shkodër",
                      abbreviation: "SH",
                      country_id: "1002"
                  },
                  {
                      id: "1572",
                      name: "Tepelenë",
                      abbreviation: "TE",
                      country_id: "1002"
                  },
                  {
                      id: "1573",
                      name: "Tiranë",
                      abbreviation: "TR",
                      country_id: "1002"
                  },
                  {
                      id: "1574",
                      name: "Tropojë",
                      abbreviation: "TP",
                      country_id: "1002"
                  },
                  {
                      id: "1575",
                      name: "Vlorë",
                      abbreviation: "VL",
                      country_id: "1002"
                  },
                  {
                      id: "1576",
                      name: "Erevan",
                      abbreviation: "ER",
                      country_id: "1011"
                  },
                  {
                      id: "1577",
                      name: "Aragacotn",
                      abbreviation: "AG",
                      country_id: "1011"
                  },
                  {
                      id: "1578",
                      name: "Ararat",
                      abbreviation: "AR",
                      country_id: "1011"
                  },
                  {
                      id: "1579",
                      name: "Armavir",
                      abbreviation: "AV",
                      country_id: "1011"
                  },
                  {
                      id: "1580",
                      name: "Gegarkunik'",
                      abbreviation: "GR",
                      country_id: "1011"
                  },
                  {
                      id: "1581",
                      name: "Kotayk'",
                      abbreviation: "KT",
                      country_id: "1011"
                  },
                  {
                      id: "1582",
                      name: "Lory",
                      abbreviation: "LO",
                      country_id: "1011"
                  },
                  {
                      id: "1583",
                      name: "Sirak",
                      abbreviation: "SH",
                      country_id: "1011"
                  },
                  {
                      id: "1584",
                      name: "Syunik'",
                      abbreviation: "SU",
                      country_id: "1011"
                  },
                  {
                      id: "1585",
                      name: "Tavus",
                      abbreviation: "TV",
                      country_id: "1011"
                  },
                  {
                      id: "1586",
                      name: "Vayoc Jor",
                      abbreviation: "VD",
                      country_id: "1011"
                  },
                  {
                      id: "1587",
                      name: "Bengo",
                      abbreviation: "BGO",
                      country_id: "1006"
                  },
                  {
                      id: "1588",
                      name: "Benguela",
                      abbreviation: "BGU",
                      country_id: "1006"
                  },
                  {
                      id: "1589",
                      name: "Bie",
                      abbreviation: "BIE",
                      country_id: "1006"
                  },
                  {
                      id: "1590",
                      name: "Cabinda",
                      abbreviation: "CAB",
                      country_id: "1006"
                  },
                  {
                      id: "1591",
                      name: "Cuando-Cubango",
                      abbreviation: "CCU",
                      country_id: "1006"
                  },
                  {
                      id: "1592",
                      name: "Cuanza Norte",
                      abbreviation: "CNO",
                      country_id: "1006"
                  },
                  {
                      id: "1593",
                      name: "Cuanza Sul",
                      abbreviation: "CUS",
                      country_id: "1006"
                  },
                  {
                      id: "1594",
                      name: "Cunene",
                      abbreviation: "CNN",
                      country_id: "1006"
                  },
                  {
                      id: "1595",
                      name: "Huambo",
                      abbreviation: "HUA",
                      country_id: "1006"
                  },
                  {
                      id: "1596",
                      name: "Huila",
                      abbreviation: "HUI",
                      country_id: "1006"
                  },
                  {
                      id: "1597",
                      name: "Luanda",
                      abbreviation: "LUA",
                      country_id: "1006"
                  },
                  {
                      id: "1598",
                      name: "Lunda Norte",
                      abbreviation: "LNO",
                      country_id: "1006"
                  },
                  {
                      id: "1599",
                      name: "Lunda Sul",
                      abbreviation: "LSU",
                      country_id: "1006"
                  },
                  {
                      id: "1600",
                      name: "Malange",
                      abbreviation: "MAL",
                      country_id: "1006"
                  },
                  {
                      id: "1601",
                      name: "Moxico",
                      abbreviation: "MOX",
                      country_id: "1006"
                  },
                  {
                      id: "1602",
                      name: "Namibe",
                      abbreviation: "NAM",
                      country_id: "1006"
                  },
                  {
                      id: "1603",
                      name: "Uige",
                      abbreviation: "UIG",
                      country_id: "1006"
                  },
                  {
                      id: "1604",
                      name: "Zaire",
                      abbreviation: "ZAI",
                      country_id: "1006"
                  },
                  {
                      id: "1605",
                      name: "Capital federal",
                      abbreviation: "C",
                      country_id: "1010"
                  },
                  {
                      id: "1606",
                      name: "Buenos Aires",
                      abbreviation: "B",
                      country_id: "1010"
                  },
                  {
                      id: "1607",
                      name: "Catamarca",
                      abbreviation: "K",
                      country_id: "1010"
                  },
                  {
                      id: "1608",
                      name: "Cordoba",
                      abbreviation: "X",
                      country_id: "1010"
                  },
                  {
                      id: "1609",
                      name: "Corrientes",
                      abbreviation: "W",
                      country_id: "1010"
                  },
                  {
                      id: "1610",
                      name: "Chaco",
                      abbreviation: "H",
                      country_id: "1010"
                  },
                  {
                      id: "1611",
                      name: "Chubut",
                      abbreviation: "U",
                      country_id: "1010"
                  },
                  {
                      id: "1612",
                      name: "Entre Rios",
                      abbreviation: "E",
                      country_id: "1010"
                  },
                  {
                      id: "1613",
                      name: "Formosa",
                      abbreviation: "P",
                      country_id: "1010"
                  },
                  {
                      id: "1614",
                      name: "Jujuy",
                      abbreviation: "Y",
                      country_id: "1010"
                  },
                  {
                      id: "1615",
                      name: "La Pampa",
                      abbreviation: "L",
                      country_id: "1010"
                  },
                  {
                      id: "1616",
                      name: "Mendoza",
                      abbreviation: "M",
                      country_id: "1010"
                  },
                  {
                      id: "1617",
                      name: "Misiones",
                      abbreviation: "N",
                      country_id: "1010"
                  },
                  {
                      id: "1618",
                      name: "Neuquen",
                      abbreviation: "Q",
                      country_id: "1010"
                  },
                  {
                      id: "1619",
                      name: "Rio Negro",
                      abbreviation: "R",
                      country_id: "1010"
                  },
                  {
                      id: "1620",
                      name: "Salta",
                      abbreviation: "A",
                      country_id: "1010"
                  },
                  {
                      id: "1621",
                      name: "San Juan",
                      abbreviation: "J",
                      country_id: "1010"
                  },
                  {
                      id: "1622",
                      name: "San Luis",
                      abbreviation: "D",
                      country_id: "1010"
                  },
                  {
                      id: "1623",
                      name: "Santa Cruz",
                      abbreviation: "Z",
                      country_id: "1010"
                  },
                  {
                      id: "1624",
                      name: "Santa Fe",
                      abbreviation: "S",
                      country_id: "1010"
                  },
                  {
                      id: "1625",
                      name: "Santiago del Estero",
                      abbreviation: "G",
                      country_id: "1010"
                  },
                  {
                      id: "1626",
                      name: "Tierra del Fuego",
                      abbreviation: "V",
                      country_id: "1010"
                  },
                  {
                      id: "1627",
                      name: "Tucuman",
                      abbreviation: "T",
                      country_id: "1010"
                  },
                  {
                      id: "1628",
                      name: "Burgenland",
                      abbreviation: "1",
                      country_id: "1014"
                  },
                  {
                      id: "1629",
                      name: "Kärnten",
                      abbreviation: "2",
                      country_id: "1014"
                  },
                  {
                      id: "1630",
                      name: "Niederösterreich",
                      abbreviation: "3",
                      country_id: "1014"
                  },
                  {
                      id: "1631",
                      name: "Oberösterreich",
                      abbreviation: "4",
                      country_id: "1014"
                  },
                  {
                      id: "1632",
                      name: "Salzburg",
                      abbreviation: "5",
                      country_id: "1014"
                  },
                  {
                      id: "1633",
                      name: "Steiermark",
                      abbreviation: "6",
                      country_id: "1014"
                  },
                  {
                      id: "1634",
                      name: "Tirol",
                      abbreviation: "7",
                      country_id: "1014"
                  },
                  {
                      id: "1635",
                      name: "Vorarlberg",
                      abbreviation: "8",
                      country_id: "1014"
                  },
                  {
                      id: "1636",
                      name: "Wien",
                      abbreviation: "9",
                      country_id: "1014"
                  },
                  {
                      id: "1637",
                      name: "Australian Antarctic Territory",
                      abbreviation: "AAT",
                      country_id: "1008"
                  },
                  {
                      id: "1638",
                      name: "Australian Capital Territory",
                      abbreviation: "ACT",
                      country_id: "1013"
                  },
                  {
                      id: "1639",
                      name: "Northern Territory",
                      abbreviation: "NT",
                      country_id: "1013"
                  },
                  {
                      id: "1640",
                      name: "New South Wales",
                      abbreviation: "NSW",
                      country_id: "1013"
                  },
                  {
                      id: "1641",
                      name: "Queensland",
                      abbreviation: "QLD",
                      country_id: "1013"
                  },
                  {
                      id: "1642",
                      name: "South Australia",
                      abbreviation: "SA",
                      country_id: "1013"
                  },
                  {
                      id: "1643",
                      name: "Tasmania",
                      abbreviation: "TAS",
                      country_id: "1013"
                  },
                  {
                      id: "1644",
                      name: "Victoria",
                      abbreviation: "VIC",
                      country_id: "1013"
                  },
                  {
                      id: "1645",
                      name: "Western Australia",
                      abbreviation: "WA",
                      country_id: "1013"
                  },
                  {
                      id: "1646",
                      name: "Naxcivan",
                      abbreviation: "NX",
                      country_id: "1015"
                  },
                  {
                      id: "1647",
                      name: "Ali Bayramli",
                      abbreviation: "AB",
                      country_id: "1015"
                  },
                  {
                      id: "1648",
                      name: "Baki",
                      abbreviation: "BA",
                      country_id: "1015"
                  },
                  {
                      id: "1649",
                      name: "Ganca",
                      abbreviation: "GA",
                      country_id: "1015"
                  },
                  {
                      id: "1650",
                      name: "Lankaran",
                      abbreviation: "LA",
                      country_id: "1015"
                  },
                  {
                      id: "1651",
                      name: "Mingacevir",
                      abbreviation: "MI",
                      country_id: "1015"
                  },
                  {
                      id: "1652",
                      name: "Naftalan",
                      abbreviation: "NA",
                      country_id: "1015"
                  },
                  {
                      id: "1653",
                      name: "Saki",
                      abbreviation: "SA",
                      country_id: "1015"
                  },
                  {
                      id: "1654",
                      name: "Sumqayit",
                      abbreviation: "SM",
                      country_id: "1015"
                  },
                  {
                      id: "1655",
                      name: "Susa",
                      abbreviation: "SS",
                      country_id: "1015"
                  },
                  {
                      id: "1656",
                      name: "Xankandi",
                      abbreviation: "XA",
                      country_id: "1015"
                  },
                  {
                      id: "1657",
                      name: "Yevlax",
                      abbreviation: "YE",
                      country_id: "1015"
                  },
                  {
                      id: "1658",
                      name: "Abseron",
                      abbreviation: "ABS",
                      country_id: "1015"
                  },
                  {
                      id: "1659",
                      name: "Agcabadi",
                      abbreviation: "AGC",
                      country_id: "1015"
                  },
                  {
                      id: "1660",
                      name: "Agdam",
                      abbreviation: "AGM",
                      country_id: "1015"
                  },
                  {
                      id: "1661",
                      name: "Agdas",
                      abbreviation: "AGS",
                      country_id: "1015"
                  },
                  {
                      id: "1662",
                      name: "Agstafa",
                      abbreviation: "AGA",
                      country_id: "1015"
                  },
                  {
                      id: "1663",
                      name: "Agsu",
                      abbreviation: "AGU",
                      country_id: "1015"
                  },
                  {
                      id: "1664",
                      name: "Astara",
                      abbreviation: "AST",
                      country_id: "1015"
                  },
                  {
                      id: "1665",
                      name: "Babak",
                      abbreviation: "BAB",
                      country_id: "1015"
                  },
                  {
                      id: "1666",
                      name: "Balakan",
                      abbreviation: "BAL",
                      country_id: "1015"
                  },
                  {
                      id: "1667",
                      name: "Barda",
                      abbreviation: "BAR",
                      country_id: "1015"
                  },
                  {
                      id: "1668",
                      name: "Beylagan",
                      abbreviation: "BEY",
                      country_id: "1015"
                  },
                  {
                      id: "1669",
                      name: "Bilasuvar",
                      abbreviation: "BIL",
                      country_id: "1015"
                  },
                  {
                      id: "1670",
                      name: "Cabrayll",
                      abbreviation: "CAB",
                      country_id: "1015"
                  },
                  {
                      id: "1671",
                      name: "Calilabad",
                      abbreviation: "CAL",
                      country_id: "1015"
                  },
                  {
                      id: "1672",
                      name: "Culfa",
                      abbreviation: "CUL",
                      country_id: "1015"
                  },
                  {
                      id: "1673",
                      name: "Daskasan",
                      abbreviation: "DAS",
                      country_id: "1015"
                  },
                  {
                      id: "1674",
                      name: "Davaci",
                      abbreviation: "DAV",
                      country_id: "1015"
                  },
                  {
                      id: "1675",
                      name: "Fuzuli",
                      abbreviation: "FUZ",
                      country_id: "1015"
                  },
                  {
                      id: "1676",
                      name: "Gadabay",
                      abbreviation: "GAD",
                      country_id: "1015"
                  },
                  {
                      id: "1677",
                      name: "Goranboy",
                      abbreviation: "GOR",
                      country_id: "1015"
                  },
                  {
                      id: "1678",
                      name: "Goycay",
                      abbreviation: "GOY",
                      country_id: "1015"
                  },
                  {
                      id: "1679",
                      name: "Haciqabul",
                      abbreviation: "HAC",
                      country_id: "1015"
                  },
                  {
                      id: "1680",
                      name: "Imisli",
                      abbreviation: "IMI",
                      country_id: "1015"
                  },
                  {
                      id: "1681",
                      name: "Ismayilli",
                      abbreviation: "ISM",
                      country_id: "1015"
                  },
                  {
                      id: "1682",
                      name: "Kalbacar",
                      abbreviation: "KAL",
                      country_id: "1015"
                  },
                  {
                      id: "1683",
                      name: "Kurdamir",
                      abbreviation: "KUR",
                      country_id: "1015"
                  },
                  {
                      id: "1684",
                      name: "Lacin",
                      abbreviation: "LAC",
                      country_id: "1015"
                  },
                  {
                      id: "1685",
                      name: "Lerik",
                      abbreviation: "LER",
                      country_id: "1015"
                  },
                  {
                      id: "1686",
                      name: "Masalli",
                      abbreviation: "MAS",
                      country_id: "1015"
                  },
                  {
                      id: "1687",
                      name: "Neftcala",
                      abbreviation: "NEF",
                      country_id: "1015"
                  },
                  {
                      id: "1688",
                      name: "Oguz",
                      abbreviation: "OGU",
                      country_id: "1015"
                  },
                  {
                      id: "1689",
                      name: "Ordubad",
                      abbreviation: "ORD",
                      country_id: "1015"
                  },
                  {
                      id: "1690",
                      name: "Qabala",
                      abbreviation: "QAB",
                      country_id: "1015"
                  },
                  {
                      id: "1691",
                      name: "Qax",
                      abbreviation: "QAX",
                      country_id: "1015"
                  },
                  {
                      id: "1692",
                      name: "Qazax",
                      abbreviation: "QAZ",
                      country_id: "1015"
                  },
                  {
                      id: "1693",
                      name: "Qobustan",
                      abbreviation: "QOB",
                      country_id: "1015"
                  },
                  {
                      id: "1694",
                      name: "Quba",
                      abbreviation: "QBA",
                      country_id: "1015"
                  },
                  {
                      id: "1695",
                      name: "Qubadli",
                      abbreviation: "QBI",
                      country_id: "1015"
                  },
                  {
                      id: "1696",
                      name: "Qusar",
                      abbreviation: "QUS",
                      country_id: "1015"
                  },
                  {
                      id: "1697",
                      name: "Saatli",
                      abbreviation: "SAT",
                      country_id: "1015"
                  },
                  {
                      id: "1698",
                      name: "Sabirabad",
                      abbreviation: "SAB",
                      country_id: "1015"
                  },
                  {
                      id: "1699",
                      name: "Sadarak",
                      abbreviation: "SAD",
                      country_id: "1015"
                  },
                  {
                      id: "1700",
                      name: "Sahbuz",
                      abbreviation: "SAH",
                      country_id: "1015"
                  },
                  {
                      id: "1701",
                      name: "Salyan",
                      abbreviation: "SAL",
                      country_id: "1015"
                  },
                  {
                      id: "1702",
                      name: "Samaxi",
                      abbreviation: "SMI",
                      country_id: "1015"
                  },
                  {
                      id: "1703",
                      name: "Samkir",
                      abbreviation: "SKR",
                      country_id: "1015"
                  },
                  {
                      id: "1704",
                      name: "Samux",
                      abbreviation: "SMX",
                      country_id: "1015"
                  },
                  {
                      id: "1705",
                      name: "Sarur",
                      abbreviation: "SAR",
                      country_id: "1015"
                  },
                  {
                      id: "1706",
                      name: "Siyazan",
                      abbreviation: "SIY",
                      country_id: "1015"
                  },
                  {
                      id: "1707",
                      name: "Tartar",
                      abbreviation: "TAR",
                      country_id: "1015"
                  },
                  {
                      id: "1708",
                      name: "Tovuz",
                      abbreviation: "TOV",
                      country_id: "1015"
                  },
                  {
                      id: "1709",
                      name: "Ucar",
                      abbreviation: "UCA",
                      country_id: "1015"
                  },
                  {
                      id: "1710",
                      name: "Xacmaz",
                      abbreviation: "XAC",
                      country_id: "1015"
                  },
                  {
                      id: "1711",
                      name: "Xanlar",
                      abbreviation: "XAN",
                      country_id: "1015"
                  },
                  {
                      id: "1712",
                      name: "Xizi",
                      abbreviation: "XIZ",
                      country_id: "1015"
                  },
                  {
                      id: "1713",
                      name: "Xocali",
                      abbreviation: "XCI",
                      country_id: "1015"
                  },
                  {
                      id: "1714",
                      name: "Xocavand",
                      abbreviation: "XVD",
                      country_id: "1015"
                  },
                  {
                      id: "1715",
                      name: "Yardimli",
                      abbreviation: "YAR",
                      country_id: "1015"
                  },
                  {
                      id: "1716",
                      name: "Zangilan",
                      abbreviation: "ZAN",
                      country_id: "1015"
                  },
                  {
                      id: "1717",
                      name: "Zaqatala",
                      abbreviation: "ZAQ",
                      country_id: "1015"
                  },
                  {
                      id: "1718",
                      name: "Zardab",
                      abbreviation: "ZAR",
                      country_id: "1015"
                  },
                  {
                      id: "1719",
                      name: "Federacija Bosna i Hercegovina",
                      abbreviation: "BIH",
                      country_id: "1026"
                  },
                  {
                      id: "1720",
                      name: "Republika Srpska",
                      abbreviation: "SRP",
                      country_id: "1026"
                  },
                  {
                      id: "1721",
                      name: "Bagerhat zila",
                      abbreviation: "05",
                      country_id: "1017"
                  },
                  {
                      id: "1722",
                      name: "Bandarban zila",
                      abbreviation: "01",
                      country_id: "1017"
                  },
                  {
                      id: "1723",
                      name: "Barguna zila",
                      abbreviation: "02",
                      country_id: "1017"
                  },
                  {
                      id: "1724",
                      name: "Barisal zila",
                      abbreviation: "06",
                      country_id: "1017"
                  },
                  {
                      id: "1725",
                      name: "Bhola zila",
                      abbreviation: "07",
                      country_id: "1017"
                  },
                  {
                      id: "1726",
                      name: "Bogra zila",
                      abbreviation: "03",
                      country_id: "1017"
                  },
                  {
                      id: "1727",
                      name: "Brahmanbaria zila",
                      abbreviation: "04",
                      country_id: "1017"
                  },
                  {
                      id: "1728",
                      name: "Chandpur zila",
                      abbreviation: "09",
                      country_id: "1017"
                  },
                  {
                      id: "1729",
                      name: "Chittagong zila",
                      abbreviation: "10",
                      country_id: "1017"
                  },
                  {
                      id: "1730",
                      name: "Chuadanga zila",
                      abbreviation: "12",
                      country_id: "1017"
                  },
                  {
                      id: "1731",
                      name: "Comilla zila",
                      abbreviation: "08",
                      country_id: "1017"
                  },
                  {
                      id: "1732",
                      name: "Cox's Bazar zila",
                      abbreviation: "11",
                      country_id: "1017"
                  },
                  {
                      id: "1733",
                      name: "Dhaka zila",
                      abbreviation: "13",
                      country_id: "1017"
                  },
                  {
                      id: "1734",
                      name: "Dinajpur zila",
                      abbreviation: "14",
                      country_id: "1017"
                  },
                  {
                      id: "1735",
                      name: "Faridpur zila",
                      abbreviation: "15",
                      country_id: "1017"
                  },
                  {
                      id: "1736",
                      name: "Feni zila",
                      abbreviation: "16",
                      country_id: "1017"
                  },
                  {
                      id: "1737",
                      name: "Gaibandha zila",
                      abbreviation: "19",
                      country_id: "1017"
                  },
                  {
                      id: "1738",
                      name: "Gazipur zila",
                      abbreviation: "18",
                      country_id: "1017"
                  },
                  {
                      id: "1739",
                      name: "Gopalganj zila",
                      abbreviation: "17",
                      country_id: "1017"
                  },
                  {
                      id: "1740",
                      name: "Habiganj zila",
                      abbreviation: "20",
                      country_id: "1017"
                  },
                  {
                      id: "1741",
                      name: "Jaipurhat zila",
                      abbreviation: "24",
                      country_id: "1017"
                  },
                  {
                      id: "1742",
                      name: "Jamalpur zila",
                      abbreviation: "21",
                      country_id: "1017"
                  },
                  {
                      id: "1743",
                      name: "Jessore zila",
                      abbreviation: "22",
                      country_id: "1017"
                  },
                  {
                      id: "1744",
                      name: "Jhalakati zila",
                      abbreviation: "25",
                      country_id: "1017"
                  },
                  {
                      id: "1745",
                      name: "Jhenaidah zila",
                      abbreviation: "23",
                      country_id: "1017"
                  },
                  {
                      id: "1746",
                      name: "Khagrachari zila",
                      abbreviation: "29",
                      country_id: "1017"
                  },
                  {
                      id: "1747",
                      name: "Khulna zila",
                      abbreviation: "27",
                      country_id: "1017"
                  },
                  {
                      id: "1748",
                      name: "Kishorganj zila",
                      abbreviation: "26",
                      country_id: "1017"
                  },
                  {
                      id: "1749",
                      name: "Kurigram zila",
                      abbreviation: "28",
                      country_id: "1017"
                  },
                  {
                      id: "1750",
                      name: "Kushtia zila",
                      abbreviation: "30",
                      country_id: "1017"
                  },
                  {
                      id: "1751",
                      name: "Lakshmipur zila",
                      abbreviation: "31",
                      country_id: "1017"
                  },
                  {
                      id: "1752",
                      name: "Lalmonirhat zila",
                      abbreviation: "32",
                      country_id: "1017"
                  },
                  {
                      id: "1753",
                      name: "Madaripur zila",
                      abbreviation: "36",
                      country_id: "1017"
                  },
                  {
                      id: "1754",
                      name: "Magura zila",
                      abbreviation: "37",
                      country_id: "1017"
                  },
                  {
                      id: "1755",
                      name: "Manikganj zila",
                      abbreviation: "33",
                      country_id: "1017"
                  },
                  {
                      id: "1756",
                      name: "Meherpur zila",
                      abbreviation: "39",
                      country_id: "1017"
                  },
                  {
                      id: "1757",
                      name: "Moulvibazar zila",
                      abbreviation: "38",
                      country_id: "1017"
                  },
                  {
                      id: "1758",
                      name: "Munshiganj zila",
                      abbreviation: "35",
                      country_id: "1017"
                  },
                  {
                      id: "1759",
                      name: "Mymensingh zila",
                      abbreviation: "34",
                      country_id: "1017"
                  },
                  {
                      id: "1760",
                      name: "Naogaon zila",
                      abbreviation: "48",
                      country_id: "1017"
                  },
                  {
                      id: "1761",
                      name: "Narail zila",
                      abbreviation: "43",
                      country_id: "1017"
                  },
                  {
                      id: "1762",
                      name: "Narayanganj zila",
                      abbreviation: "40",
                      country_id: "1017"
                  },
                  {
                      id: "1763",
                      name: "Narsingdi zila",
                      abbreviation: "42",
                      country_id: "1017"
                  },
                  {
                      id: "1764",
                      name: "Natore zila",
                      abbreviation: "44",
                      country_id: "1017"
                  },
                  {
                      id: "1765",
                      name: "Nawabganj zila",
                      abbreviation: "45",
                      country_id: "1017"
                  },
                  {
                      id: "1766",
                      name: "Netrakona zila",
                      abbreviation: "41",
                      country_id: "1017"
                  },
                  {
                      id: "1767",
                      name: "Nilphamari zila",
                      abbreviation: "46",
                      country_id: "1017"
                  },
                  {
                      id: "1768",
                      name: "Noakhali zila",
                      abbreviation: "47",
                      country_id: "1017"
                  },
                  {
                      id: "1769",
                      name: "Pabna zila",
                      abbreviation: "49",
                      country_id: "1017"
                  },
                  {
                      id: "1770",
                      name: "Panchagarh zila",
                      abbreviation: "52",
                      country_id: "1017"
                  },
                  {
                      id: "1771",
                      name: "Patuakhali zila",
                      abbreviation: "51",
                      country_id: "1017"
                  },
                  {
                      id: "1772",
                      name: "Pirojpur zila",
                      abbreviation: "50",
                      country_id: "1017"
                  },
                  {
                      id: "1773",
                      name: "Rajbari zila",
                      abbreviation: "53",
                      country_id: "1017"
                  },
                  {
                      id: "1774",
                      name: "Rajshahi zila",
                      abbreviation: "54",
                      country_id: "1017"
                  },
                  {
                      id: "1775",
                      name: "Rangamati zila",
                      abbreviation: "56",
                      country_id: "1017"
                  },
                  {
                      id: "1776",
                      name: "Rangpur zila",
                      abbreviation: "55",
                      country_id: "1017"
                  },
                  {
                      id: "1777",
                      name: "Satkhira zila",
                      abbreviation: "58",
                      country_id: "1017"
                  },
                  {
                      id: "1778",
                      name: "Shariatpur zila",
                      abbreviation: "62",
                      country_id: "1017"
                  },
                  {
                      id: "1779",
                      name: "Sherpur zila",
                      abbreviation: "57",
                      country_id: "1017"
                  },
                  {
                      id: "1780",
                      name: "Sirajganj zila",
                      abbreviation: "59",
                      country_id: "1017"
                  },
                  {
                      id: "1781",
                      name: "Sunamganj zila",
                      abbreviation: "61",
                      country_id: "1017"
                  },
                  {
                      id: "1782",
                      name: "Sylhet zila",
                      abbreviation: "60",
                      country_id: "1017"
                  },
                  {
                      id: "1783",
                      name: "Tangail zila",
                      abbreviation: "63",
                      country_id: "1017"
                  },
                  {
                      id: "1784",
                      name: "Thakurgaon zila",
                      abbreviation: "64",
                      country_id: "1017"
                  },
                  {
                      id: "1785",
                      name: "Antwerpen",
                      abbreviation: "VAN",
                      country_id: "1020"
                  },
                  {
                      id: "1786",
                      name: "Brabant Wallon",
                      abbreviation: "WBR",
                      country_id: "1020"
                  },
                  {
                      id: "1787",
                      name: "Hainaut",
                      abbreviation: "WHT",
                      country_id: "1020"
                  },
                  {
                      id: "1788",
                      name: "Liege",
                      abbreviation: "WLG",
                      country_id: "1020"
                  },
                  {
                      id: "1789",
                      name: "Limburg",
                      abbreviation: "VLI",
                      country_id: "1020"
                  },
                  {
                      id: "1790",
                      name: "Luxembourg",
                      abbreviation: "WLX",
                      country_id: "1020"
                  },
                  {
                      id: "1791",
                      name: "Namur",
                      abbreviation: "WNA",
                      country_id: "1020"
                  },
                  {
                      id: "1792",
                      name: "Oost-Vlaanderen",
                      abbreviation: "VOV",
                      country_id: "1020"
                  },
                  {
                      id: "1793",
                      name: "Vlaams-Brabant",
                      abbreviation: "VBR",
                      country_id: "1020"
                  },
                  {
                      id: "1794",
                      name: "West-Vlaanderen",
                      abbreviation: "VWV",
                      country_id: "1020"
                  },
                  {
                      id: "1795",
                      name: "Bale",
                      abbreviation: "BAL",
                      country_id: "1034"
                  },
                  {
                      id: "1796",
                      name: "Bam",
                      abbreviation: "BAM",
                      country_id: "1034"
                  },
                  {
                      id: "1797",
                      name: "Banwa",
                      abbreviation: "BAN",
                      country_id: "1034"
                  },
                  {
                      id: "1798",
                      name: "Bazega",
                      abbreviation: "BAZ",
                      country_id: "1034"
                  },
                  {
                      id: "1799",
                      name: "Bougouriba",
                      abbreviation: "BGR",
                      country_id: "1034"
                  },
                  {
                      id: "1800",
                      name: "Boulgou",
                      abbreviation: "BLG",
                      country_id: "1034"
                  },
                  {
                      id: "1801",
                      name: "Boulkiemde",
                      abbreviation: "BLK",
                      country_id: "1034"
                  },
                  {
                      id: "1802",
                      name: "Comoe",
                      abbreviation: "COM",
                      country_id: "1034"
                  },
                  {
                      id: "1803",
                      name: "Ganzourgou",
                      abbreviation: "GAN",
                      country_id: "1034"
                  },
                  {
                      id: "1804",
                      name: "Gnagna",
                      abbreviation: "GNA",
                      country_id: "1034"
                  },
                  {
                      id: "1805",
                      name: "Gourma",
                      abbreviation: "GOU",
                      country_id: "1034"
                  },
                  {
                      id: "1806",
                      name: "Houet",
                      abbreviation: "HOU",
                      country_id: "1034"
                  },
                  {
                      id: "1807",
                      name: "Ioba",
                      abbreviation: "IOB",
                      country_id: "1034"
                  },
                  {
                      id: "1808",
                      name: "Kadiogo",
                      abbreviation: "KAD",
                      country_id: "1034"
                  },
                  {
                      id: "1809",
                      name: "Kenedougou",
                      abbreviation: "KEN",
                      country_id: "1034"
                  },
                  {
                      id: "1810",
                      name: "Komondjari",
                      abbreviation: "KMD",
                      country_id: "1034"
                  },
                  {
                      id: "1811",
                      name: "Kompienga",
                      abbreviation: "KMP",
                      country_id: "1034"
                  },
                  {
                      id: "1812",
                      name: "Kossi",
                      abbreviation: "KOS",
                      country_id: "1034"
                  },
                  {
                      id: "1813",
                      name: "Koulpulogo",
                      abbreviation: "KOP",
                      country_id: "1034"
                  },
                  {
                      id: "1814",
                      name: "Kouritenga",
                      abbreviation: "KOT",
                      country_id: "1034"
                  },
                  {
                      id: "1815",
                      name: "Kourweogo",
                      abbreviation: "KOW",
                      country_id: "1034"
                  },
                  {
                      id: "1816",
                      name: "Leraba",
                      abbreviation: "LER",
                      country_id: "1034"
                  },
                  {
                      id: "1817",
                      name: "Loroum",
                      abbreviation: "LOR",
                      country_id: "1034"
                  },
                  {
                      id: "1818",
                      name: "Mouhoun",
                      abbreviation: "MOU",
                      country_id: "1034"
                  },
                  {
                      id: "1819",
                      name: "Nahouri",
                      abbreviation: "NAO",
                      country_id: "1034"
                  },
                  {
                      id: "1820",
                      name: "Namentenga",
                      abbreviation: "NAM",
                      country_id: "1034"
                  },
                  {
                      id: "1821",
                      name: "Nayala",
                      abbreviation: "NAY",
                      country_id: "1034"
                  },
                  {
                      id: "1822",
                      name: "Noumbiel",
                      abbreviation: "NOU",
                      country_id: "1034"
                  },
                  {
                      id: "1823",
                      name: "Oubritenga",
                      abbreviation: "OUB",
                      country_id: "1034"
                  },
                  {
                      id: "1824",
                      name: "Oudalan",
                      abbreviation: "OUD",
                      country_id: "1034"
                  },
                  {
                      id: "1825",
                      name: "Passore",
                      abbreviation: "PAS",
                      country_id: "1034"
                  },
                  {
                      id: "1826",
                      name: "Poni",
                      abbreviation: "PON",
                      country_id: "1034"
                  },
                  {
                      id: "1827",
                      name: "Sanguie",
                      abbreviation: "SNG",
                      country_id: "1034"
                  },
                  {
                      id: "1828",
                      name: "Sanmatenga",
                      abbreviation: "SMT",
                      country_id: "1034"
                  },
                  {
                      id: "1829",
                      name: "Seno",
                      abbreviation: "SEN",
                      country_id: "1034"
                  },
                  {
                      id: "1830",
                      name: "Siasili",
                      abbreviation: "SIS",
                      country_id: "1034"
                  },
                  {
                      id: "1831",
                      name: "Soum",
                      abbreviation: "SOM",
                      country_id: "1034"
                  },
                  {
                      id: "1832",
                      name: "Sourou",
                      abbreviation: "SOR",
                      country_id: "1034"
                  },
                  {
                      id: "1833",
                      name: "Tapoa",
                      abbreviation: "TAP",
                      country_id: "1034"
                  },
                  {
                      id: "1834",
                      name: "Tui",
                      abbreviation: "TUI",
                      country_id: "1034"
                  },
                  {
                      id: "1835",
                      name: "Yagha",
                      abbreviation: "YAG",
                      country_id: "1034"
                  },
                  {
                      id: "1836",
                      name: "Yatenga",
                      abbreviation: "YAT",
                      country_id: "1034"
                  },
                  {
                      id: "1837",
                      name: "Ziro",
                      abbreviation: "ZIR",
                      country_id: "1034"
                  },
                  {
                      id: "1838",
                      name: "Zondoma",
                      abbreviation: "ZON",
                      country_id: "1034"
                  },
                  {
                      id: "1839",
                      name: "Zoundweogo",
                      abbreviation: "ZOU",
                      country_id: "1034"
                  },
                  {
                      id: "1840",
                      name: "Blagoevgrad",
                      abbreviation: "01",
                      country_id: "1033"
                  },
                  {
                      id: "1841",
                      name: "Burgas",
                      abbreviation: "02",
                      country_id: "1033"
                  },
                  {
                      id: "1842",
                      name: "Dobrich",
                      abbreviation: "08",
                      country_id: "1033"
                  },
                  {
                      id: "1843",
                      name: "Gabrovo",
                      abbreviation: "07",
                      country_id: "1033"
                  },
                  {
                      id: "1844",
                      name: "Haskovo",
                      abbreviation: "26",
                      country_id: "1033"
                  },
                  {
                      id: "1845",
                      name: "Yambol",
                      abbreviation: "28",
                      country_id: "1033"
                  },
                  {
                      id: "1846",
                      name: "Kardzhali",
                      abbreviation: "09",
                      country_id: "1033"
                  },
                  {
                      id: "1847",
                      name: "Kyustendil",
                      abbreviation: "10",
                      country_id: "1033"
                  },
                  {
                      id: "1848",
                      name: "Lovech",
                      abbreviation: "11",
                      country_id: "1033"
                  },
                  {
                      id: "1849",
                      name: "Montana",
                      abbreviation: "12",
                      country_id: "1033"
                  },
                  {
                      id: "1850",
                      name: "Pazardzhik",
                      abbreviation: "13",
                      country_id: "1033"
                  },
                  {
                      id: "1851",
                      name: "Pernik",
                      abbreviation: "14",
                      country_id: "1033"
                  },
                  {
                      id: "1852",
                      name: "Pleven",
                      abbreviation: "15",
                      country_id: "1033"
                  },
                  {
                      id: "1853",
                      name: "Plovdiv",
                      abbreviation: "16",
                      country_id: "1033"
                  },
                  {
                      id: "1854",
                      name: "Razgrad",
                      abbreviation: "17",
                      country_id: "1033"
                  },
                  {
                      id: "1855",
                      name: "Ruse",
                      abbreviation: "18",
                      country_id: "1033"
                  },
                  {
                      id: "1856",
                      name: "Silistra",
                      abbreviation: "19",
                      country_id: "1033"
                  },
                  {
                      id: "1857",
                      name: "Sliven",
                      abbreviation: "20",
                      country_id: "1033"
                  },
                  {
                      id: "1858",
                      name: "Smolyan",
                      abbreviation: "21",
                      country_id: "1033"
                  },
                  {
                      id: "1859",
                      name: "Sofia",
                      abbreviation: "23",
                      country_id: "1033"
                  },
                  {
                      id: "1860",
                      name: "Stara Zagora",
                      abbreviation: "24",
                      country_id: "1033"
                  },
                  {
                      id: "1861",
                      name: "Shumen",
                      abbreviation: "27",
                      country_id: "1033"
                  },
                  {
                      id: "1862",
                      name: "Targovishte",
                      abbreviation: "25",
                      country_id: "1033"
                  },
                  {
                      id: "1863",
                      name: "Varna",
                      abbreviation: "03",
                      country_id: "1033"
                  },
                  {
                      id: "1864",
                      name: "Veliko Tarnovo",
                      abbreviation: "04",
                      country_id: "1033"
                  },
                  {
                      id: "1865",
                      name: "Vidin",
                      abbreviation: "05",
                      country_id: "1033"
                  },
                  {
                      id: "1866",
                      name: "Vratsa",
                      abbreviation: "06",
                      country_id: "1033"
                  },
                  {
                      id: "1867",
                      name: "Al Hadd",
                      abbreviation: "01",
                      country_id: "1016"
                  },
                  {
                      id: "1868",
                      name: "Al Manamah",
                      abbreviation: "03",
                      country_id: "1016"
                  },
                  {
                      id: "1869",
                      name: "Al Mintaqah al Gharbiyah",
                      abbreviation: "10",
                      country_id: "1016"
                  },
                  {
                      id: "1870",
                      name: "Al Mintagah al Wusta",
                      abbreviation: "07",
                      country_id: "1016"
                  },
                  {
                      id: "1871",
                      name: "Al Mintaqah ash Shamaliyah",
                      abbreviation: "05",
                      country_id: "1016"
                  },
                  {
                      id: "1872",
                      name: "Al Muharraq",
                      abbreviation: "02",
                      country_id: "1016"
                  },
                  {
                      id: "1873",
                      name: "Ar Rifa",
                      abbreviation: "09",
                      country_id: "1016"
                  },
                  {
                      id: "1874",
                      name: "Jidd Hafs",
                      abbreviation: "04",
                      country_id: "1016"
                  },
                  {
                      id: "1875",
                      name: "Madluat Jamad",
                      abbreviation: "12",
                      country_id: "1016"
                  },
                  {
                      id: "1876",
                      name: "Madluat Isa",
                      abbreviation: "08",
                      country_id: "1016"
                  },
                  {
                      id: "1877",
                      name: "Mintaqat Juzur tawar",
                      abbreviation: "11",
                      country_id: "1016"
                  },
                  {
                      id: "1878",
                      name: "Sitrah",
                      abbreviation: "06",
                      country_id: "1016"
                  },
                  {
                      id: "1879",
                      name: "Bubanza",
                      abbreviation: "BB",
                      country_id: "1036"
                  },
                  {
                      id: "1880",
                      name: "Bujumbura",
                      abbreviation: "BJ",
                      country_id: "1036"
                  },
                  {
                      id: "1881",
                      name: "Bururi",
                      abbreviation: "BR",
                      country_id: "1036"
                  },
                  {
                      id: "1882",
                      name: "Cankuzo",
                      abbreviation: "CA",
                      country_id: "1036"
                  },
                  {
                      id: "1883",
                      name: "Cibitoke",
                      abbreviation: "CI",
                      country_id: "1036"
                  },
                  {
                      id: "1884",
                      name: "Gitega",
                      abbreviation: "GI",
                      country_id: "1036"
                  },
                  {
                      id: "1885",
                      name: "Karuzi",
                      abbreviation: "KR",
                      country_id: "1036"
                  },
                  {
                      id: "1886",
                      name: "Kayanza",
                      abbreviation: "KY",
                      country_id: "1036"
                  },
                  {
                      id: "1887",
                      name: "Makamba",
                      abbreviation: "MA",
                      country_id: "1036"
                  },
                  {
                      id: "1888",
                      name: "Muramvya",
                      abbreviation: "MU",
                      country_id: "1036"
                  },
                  {
                      id: "1889",
                      name: "Mwaro",
                      abbreviation: "MW",
                      country_id: "1036"
                  },
                  {
                      id: "1890",
                      name: "Ngozi",
                      abbreviation: "NG",
                      country_id: "1036"
                  },
                  {
                      id: "1891",
                      name: "Rutana",
                      abbreviation: "RT",
                      country_id: "1036"
                  },
                  {
                      id: "1892",
                      name: "Ruyigi",
                      abbreviation: "RY",
                      country_id: "1036"
                  },
                  {
                      id: "1893",
                      name: "Alibori",
                      abbreviation: "AL",
                      country_id: "1022"
                  },
                  {
                      id: "1894",
                      name: "Atakora",
                      abbreviation: "AK",
                      country_id: "1022"
                  },
                  {
                      id: "1895",
                      name: "Atlantique",
                      abbreviation: "AQ",
                      country_id: "1022"
                  },
                  {
                      id: "1896",
                      name: "Borgou",
                      abbreviation: "BO",
                      country_id: "1022"
                  },
                  {
                      id: "1897",
                      name: "Collines",
                      abbreviation: "CO",
                      country_id: "1022"
                  },
                  {
                      id: "1898",
                      name: "Donga",
                      abbreviation: "DO",
                      country_id: "1022"
                  },
                  {
                      id: "1899",
                      name: "Kouffo",
                      abbreviation: "KO",
                      country_id: "1022"
                  },
                  {
                      id: "1900",
                      name: "Littoral",
                      abbreviation: "LI",
                      country_id: "1022"
                  },
                  {
                      id: "1901",
                      name: "Mono",
                      abbreviation: "MO",
                      country_id: "1022"
                  },
                  {
                      id: "1902",
                      name: "Oueme",
                      abbreviation: "OU",
                      country_id: "1022"
                  },
                  {
                      id: "1903",
                      name: "Plateau",
                      abbreviation: "PL",
                      country_id: "1022"
                  },
                  {
                      id: "1904",
                      name: "Zou",
                      abbreviation: "ZO",
                      country_id: "1022"
                  },
                  {
                      id: "1905",
                      name: "Belait",
                      abbreviation: "BE",
                      country_id: "1032"
                  },
                  {
                      id: "1906",
                      name: "Brunei-Muara",
                      abbreviation: "BM",
                      country_id: "1032"
                  },
                  {
                      id: "1907",
                      name: "Temburong",
                      abbreviation: "TE",
                      country_id: "1032"
                  },
                  {
                      id: "1908",
                      name: "Tutong",
                      abbreviation: "TU",
                      country_id: "1032"
                  },
                  {
                      id: "1909",
                      name: "Cochabamba",
                      abbreviation: "C",
                      country_id: "1025"
                  },
                  {
                      id: "1910",
                      name: "Chuquisaca",
                      abbreviation: "H",
                      country_id: "1025"
                  },
                  {
                      id: "1911",
                      name: "El Beni",
                      abbreviation: "B",
                      country_id: "1025"
                  },
                  {
                      id: "1912",
                      name: "La Paz",
                      abbreviation: "L",
                      country_id: "1025"
                  },
                  {
                      id: "1913",
                      name: "Oruro",
                      abbreviation: "O",
                      country_id: "1025"
                  },
                  {
                      id: "1914",
                      name: "Pando",
                      abbreviation: "N",
                      country_id: "1025"
                  },
                  {
                      id: "1915",
                      name: "Potosi",
                      abbreviation: "P",
                      country_id: "1025"
                  },
                  {
                      id: "1916",
                      name: "Tarija",
                      abbreviation: "T",
                      country_id: "1025"
                  },
                  {
                      id: "1917",
                      name: "Acre",
                      abbreviation: "AC",
                      country_id: "1029"
                  },
                  {
                      id: "1918",
                      name: "Alagoas",
                      abbreviation: "AL",
                      country_id: "1029"
                  },
                  {
                      id: "1919",
                      name: "Amazonas",
                      abbreviation: "AM",
                      country_id: "1029"
                  },
                  {
                      id: "1920",
                      name: "Amapa",
                      abbreviation: "AP",
                      country_id: "1029"
                  },
                  {
                      id: "1921",
                      name: "Bahia",
                      abbreviation: "BA",
                      country_id: "1029"
                  },
                  {
                      id: "1922",
                      name: "Ceara",
                      abbreviation: "CE",
                      country_id: "1029"
                  },
                  {
                      id: "1923",
                      name: "Distrito Federal",
                      abbreviation: "DF",
                      country_id: "1029"
                  },
                  {
                      id: "1924",
                      name: "Espirito Santo",
                      abbreviation: "ES",
                      country_id: "1029"
                  },
                  {
                      id: "1926",
                      name: "Goias",
                      abbreviation: "GO",
                      country_id: "1029"
                  },
                  {
                      id: "1927",
                      name: "Maranhao",
                      abbreviation: "MA",
                      country_id: "1029"
                  },
                  {
                      id: "1928",
                      name: "Minas Gerais",
                      abbreviation: "MG",
                      country_id: "1029"
                  },
                  {
                      id: "1929",
                      name: "Mato Grosso do Sul",
                      abbreviation: "MS",
                      country_id: "1029"
                  },
                  {
                      id: "1930",
                      name: "Mato Grosso",
                      abbreviation: "MT",
                      country_id: "1029"
                  },
                  {
                      id: "1931",
                      name: "Para",
                      abbreviation: "PA",
                      country_id: "1029"
                  },
                  {
                      id: "1932",
                      name: "Paraiba",
                      abbreviation: "PB",
                      country_id: "1029"
                  },
                  {
                      id: "1933",
                      name: "Pernambuco",
                      abbreviation: "PE",
                      country_id: "1029"
                  },
                  {
                      id: "1934",
                      name: "Piaui",
                      abbreviation: "PI",
                      country_id: "1029"
                  },
                  {
                      id: "1935",
                      name: "Parana",
                      abbreviation: "PR",
                      country_id: "1029"
                  },
                  {
                      id: "1936",
                      name: "Rio de Janeiro",
                      abbreviation: "RJ",
                      country_id: "1029"
                  },
                  {
                      id: "1937",
                      name: "Rio Grande do Norte",
                      abbreviation: "RN",
                      country_id: "1029"
                  },
                  {
                      id: "1938",
                      name: "Rondonia",
                      abbreviation: "RO",
                      country_id: "1029"
                  },
                  {
                      id: "1939",
                      name: "Roraima",
                      abbreviation: "RR",
                      country_id: "1029"
                  },
                  {
                      id: "1940",
                      name: "Rio Grande do Sul",
                      abbreviation: "RS",
                      country_id: "1029"
                  },
                  {
                      id: "1941",
                      name: "Santa Catarina",
                      abbreviation: "SC",
                      country_id: "1029"
                  },
                  {
                      id: "1942",
                      name: "Sergipe",
                      abbreviation: "SE",
                      country_id: "1029"
                  },
                  {
                      id: "1943",
                      name: "Sao Paulo",
                      abbreviation: "SP",
                      country_id: "1029"
                  },
                  {
                      id: "1944",
                      name: "Tocantins",
                      abbreviation: "TO",
                      country_id: "1029"
                  },
                  {
                      id: "1945",
                      name: "Acklins and Crooked Islands",
                      abbreviation: "AC",
                      country_id: "1212"
                  },
                  {
                      id: "1946",
                      name: "Bimini",
                      abbreviation: "BI",
                      country_id: "1212"
                  },
                  {
                      id: "1947",
                      name: "Cat Island",
                      abbreviation: "CI",
                      country_id: "1212"
                  },
                  {
                      id: "1948",
                      name: "Exuma",
                      abbreviation: "EX",
                      country_id: "1212"
                  },
                  {
                      id: "1955",
                      name: "Inagua",
                      abbreviation: "IN",
                      country_id: "1212"
                  },
                  {
                      id: "1957",
                      name: "Long Island",
                      abbreviation: "LI",
                      country_id: "1212"
                  },
                  {
                      id: "1959",
                      name: "Mayaguana",
                      abbreviation: "MG",
                      country_id: "1212"
                  },
                  {
                      id: "1960",
                      name: "New Providence",
                      abbreviation: "NP",
                      country_id: "1212"
                  },
                  {
                      id: "1962",
                      name: "Ragged Island",
                      abbreviation: "RI",
                      country_id: "1212"
                  },
                  {
                      id: "1966",
                      name: "Bumthang",
                      abbreviation: "33",
                      country_id: "1024"
                  },
                  {
                      id: "1967",
                      name: "Chhukha",
                      abbreviation: "12",
                      country_id: "1024"
                  },
                  {
                      id: "1968",
                      name: "Dagana",
                      abbreviation: "22",
                      country_id: "1024"
                  },
                  {
                      id: "1969",
                      name: "Gasa",
                      abbreviation: "GA",
                      country_id: "1024"
                  },
                  {
                      id: "1970",
                      name: "Ha",
                      abbreviation: "13",
                      country_id: "1024"
                  },
                  {
                      id: "1971",
                      name: "Lhuentse",
                      abbreviation: "44",
                      country_id: "1024"
                  },
                  {
                      id: "1972",
                      name: "Monggar",
                      abbreviation: "42",
                      country_id: "1024"
                  },
                  {
                      id: "1973",
                      name: "Paro",
                      abbreviation: "11",
                      country_id: "1024"
                  },
                  {
                      id: "1974",
                      name: "Pemagatshel",
                      abbreviation: "43",
                      country_id: "1024"
                  },
                  {
                      id: "1975",
                      name: "Punakha",
                      abbreviation: "23",
                      country_id: "1024"
                  },
                  {
                      id: "1976",
                      name: "Samdrup Jongkha",
                      abbreviation: "45",
                      country_id: "1024"
                  },
                  {
                      id: "1977",
                      name: "Samtee",
                      abbreviation: "14",
                      country_id: "1024"
                  },
                  {
                      id: "1978",
                      name: "Sarpang",
                      abbreviation: "31",
                      country_id: "1024"
                  },
                  {
                      id: "1979",
                      name: "Thimphu",
                      abbreviation: "15",
                      country_id: "1024"
                  },
                  {
                      id: "1980",
                      name: "Trashigang",
                      abbreviation: "41",
                      country_id: "1024"
                  },
                  {
                      id: "1981",
                      name: "Trashi Yangtse",
                      abbreviation: "TY",
                      country_id: "1024"
                  },
                  {
                      id: "1982",
                      name: "Trongsa",
                      abbreviation: "32",
                      country_id: "1024"
                  },
                  {
                      id: "1983",
                      name: "Tsirang",
                      abbreviation: "21",
                      country_id: "1024"
                  },
                  {
                      id: "1984",
                      name: "Wangdue Phodrang",
                      abbreviation: "24",
                      country_id: "1024"
                  },
                  {
                      id: "1985",
                      name: "Zhemgang",
                      abbreviation: "34",
                      country_id: "1024"
                  },
                  {
                      id: "1986",
                      name: "Central",
                      abbreviation: "CE",
                      country_id: "1027"
                  },
                  {
                      id: "1987",
                      name: "Ghanzi",
                      abbreviation: "GH",
                      country_id: "1027"
                  },
                  {
                      id: "1988",
                      name: "Kgalagadi",
                      abbreviation: "KG",
                      country_id: "1027"
                  },
                  {
                      id: "1989",
                      name: "Kgatleng",
                      abbreviation: "KL",
                      country_id: "1027"
                  },
                  {
                      id: "1990",
                      name: "Kweneng",
                      abbreviation: "KW",
                      country_id: "1027"
                  },
                  {
                      id: "1991",
                      name: "Ngamiland",
                      abbreviation: "NG",
                      country_id: "1027"
                  },
                  {
                      id: "1992",
                      name: "North-East",
                      abbreviation: "NE",
                      country_id: "1027"
                  },
                  {
                      id: "1993",
                      name: "North-West",
                      abbreviation: "NW",
                      country_id: "1027"
                  },
                  {
                      id: "1994",
                      name: "South-East",
                      abbreviation: "SE",
                      country_id: "1027"
                  },
                  {
                      id: "1995",
                      name: "Southern",
                      abbreviation: "SO",
                      country_id: "1027"
                  },
                  {
                      id: "1996",
                      name: "Brèsckaja voblasc'",
                      abbreviation: "BR",
                      country_id: "1019"
                  },
                  {
                      id: "1997",
                      name: "Homel'skaja voblasc'",
                      abbreviation: "HO",
                      country_id: "1019"
                  },
                  {
                      id: "1998",
                      name: "Hrodzenskaja voblasc'",
                      abbreviation: "HR",
                      country_id: "1019"
                  },
                  {
                      id: "1999",
                      name: "Mahilëuskaja voblasc'",
                      abbreviation: "MA",
                      country_id: "1019"
                  },
                  {
                      id: "2000",
                      name: "Minskaja voblasc'",
                      abbreviation: "MI",
                      country_id: "1019"
                  },
                  {
                      id: "2001",
                      name: "Vicebskaja voblasc'",
                      abbreviation: "VI",
                      country_id: "1019"
                  },
                  {
                      id: "2002",
                      name: "Belize",
                      abbreviation: "BZ",
                      country_id: "1021"
                  },
                  {
                      id: "2003",
                      name: "Cayo",
                      abbreviation: "CY",
                      country_id: "1021"
                  },
                  {
                      id: "2004",
                      name: "Corozal",
                      abbreviation: "CZL",
                      country_id: "1021"
                  },
                  {
                      id: "2005",
                      name: "Orange Walk",
                      abbreviation: "OW",
                      country_id: "1021"
                  },
                  {
                      id: "2006",
                      name: "Stann Creek",
                      abbreviation: "SC",
                      country_id: "1021"
                  },
                  {
                      id: "2007",
                      name: "Toledo",
                      abbreviation: "TOL",
                      country_id: "1021"
                  },
                  {
                      id: "2008",
                      name: "Kinshasa",
                      abbreviation: "KN",
                      country_id: "1050"
                  },
                  {
                      id: "2011",
                      name: "Equateur",
                      abbreviation: "EQ",
                      country_id: "1050"
                  },
                  {
                      id: "2014",
                      name: "Kasai-Oriental",
                      abbreviation: "KE",
                      country_id: "1050"
                  },
                  {
                      id: "2016",
                      name: "Maniema",
                      abbreviation: "MA",
                      country_id: "1050"
                  },
                  {
                      id: "2017",
                      name: "Nord-Kivu",
                      abbreviation: "NK",
                      country_id: "1050"
                  },
                  {
                      id: "2019",
                      name: "Sud-Kivu",
                      abbreviation: "SK",
                      country_id: "1050"
                  },
                  {
                      id: "2020",
                      name: "Bangui",
                      abbreviation: "BGF",
                      country_id: "1042"
                  },
                  {
                      id: "2021",
                      name: "Bamingui-Bangoran",
                      abbreviation: "BB",
                      country_id: "1042"
                  },
                  {
                      id: "2022",
                      name: "Basse-Kotto",
                      abbreviation: "BK",
                      country_id: "1042"
                  },
                  {
                      id: "2023",
                      name: "Haute-Kotto",
                      abbreviation: "HK",
                      country_id: "1042"
                  },
                  {
                      id: "2024",
                      name: "Haut-Mbomou",
                      abbreviation: "HM",
                      country_id: "1042"
                  },
                  {
                      id: "2025",
                      name: "Kemo",
                      abbreviation: "KG",
                      country_id: "1042"
                  },
                  {
                      id: "2026",
                      name: "Lobaye",
                      abbreviation: "LB",
                      country_id: "1042"
                  },
                  {
                      id: "2027",
                      name: "Mambere-Kadei",
                      abbreviation: "HS",
                      country_id: "1042"
                  },
                  {
                      id: "2028",
                      name: "Mbomou",
                      abbreviation: "MB",
                      country_id: "1042"
                  },
                  {
                      id: "2029",
                      name: "Nana-Grebizi",
                      abbreviation: "KB",
                      country_id: "1042"
                  },
                  {
                      id: "2030",
                      name: "Nana-Mambere",
                      abbreviation: "NM",
                      country_id: "1042"
                  },
                  {
                      id: "2031",
                      name: "Ombella-Mpoko",
                      abbreviation: "MP",
                      country_id: "1042"
                  },
                  {
                      id: "2032",
                      name: "Ouaka",
                      abbreviation: "UK",
                      country_id: "1042"
                  },
                  {
                      id: "2033",
                      name: "Ouham",
                      abbreviation: "AC",
                      country_id: "1042"
                  },
                  {
                      id: "2034",
                      name: "Ouham-Pende",
                      abbreviation: "OP",
                      country_id: "1042"
                  },
                  {
                      id: "2035",
                      name: "Sangha-Mbaere",
                      abbreviation: "SE",
                      country_id: "1042"
                  },
                  {
                      id: "2036",
                      name: "Vakaga",
                      abbreviation: "VR",
                      country_id: "1042"
                  },
                  {
                      id: "2037",
                      name: "Brazzaville",
                      abbreviation: "BZV",
                      country_id: "1051"
                  },
                  {
                      id: "2038",
                      name: "Bouenza",
                      abbreviation: "11",
                      country_id: "1051"
                  },
                  {
                      id: "2039",
                      name: "Cuvette",
                      abbreviation: "8",
                      country_id: "1051"
                  },
                  {
                      id: "2040",
                      name: "Cuvette-Ouest",
                      abbreviation: "15",
                      country_id: "1051"
                  },
                  {
                      id: "2041",
                      name: "Kouilou",
                      abbreviation: "5",
                      country_id: "1051"
                  },
                  {
                      id: "2042",
                      name: "Lekoumou",
                      abbreviation: "2",
                      country_id: "1051"
                  },
                  {
                      id: "2043",
                      name: "Likouala",
                      abbreviation: "7",
                      country_id: "1051"
                  },
                  {
                      id: "2044",
                      name: "Niari",
                      abbreviation: "9",
                      country_id: "1051"
                  },
                  {
                      id: "2045",
                      name: "Plateaux",
                      abbreviation: "14",
                      country_id: "1051"
                  },
                  {
                      id: "2046",
                      name: "Pool",
                      abbreviation: "12",
                      country_id: "1051"
                  },
                  {
                      id: "2047",
                      name: "Sangha",
                      abbreviation: "13",
                      country_id: "1051"
                  },
                  {
                      id: "2048",
                      name: "Aargau",
                      abbreviation: "AG",
                      country_id: "1205"
                  },
                  {
                      id: "2049",
                      name: "Appenzell Innerrhoden",
                      abbreviation: "AI",
                      country_id: "1205"
                  },
                  {
                      id: "2050",
                      name: "Appenzell Ausserrhoden",
                      abbreviation: "AR",
                      country_id: "1205"
                  },
                  {
                      id: "2051",
                      name: "Bern",
                      abbreviation: "BE",
                      country_id: "1205"
                  },
                  {
                      id: "2052",
                      name: "Basel-Landschaft",
                      abbreviation: "BL",
                      country_id: "1205"
                  },
                  {
                      id: "2053",
                      name: "Basel-Stadt",
                      abbreviation: "BS",
                      country_id: "1205"
                  },
                  {
                      id: "2054",
                      name: "Fribourg",
                      abbreviation: "FR",
                      country_id: "1205"
                  },
                  {
                      id: "2055",
                      name: "Geneva",
                      abbreviation: "GE",
                      country_id: "1205"
                  },
                  {
                      id: "2056",
                      name: "Glarus",
                      abbreviation: "GL",
                      country_id: "1205"
                  },
                  {
                      id: "2057",
                      name: "Graubunden",
                      abbreviation: "GR",
                      country_id: "1205"
                  },
                  {
                      id: "2058",
                      name: "Jura",
                      abbreviation: "JU",
                      country_id: "1205"
                  },
                  {
                      id: "2059",
                      name: "Luzern",
                      abbreviation: "LU",
                      country_id: "1205"
                  },
                  {
                      id: "2060",
                      name: "Neuchatel",
                      abbreviation: "NE",
                      country_id: "1205"
                  },
                  {
                      id: "2061",
                      name: "Nidwalden",
                      abbreviation: "NW",
                      country_id: "1205"
                  },
                  {
                      id: "2062",
                      name: "Obwalden",
                      abbreviation: "OW",
                      country_id: "1205"
                  },
                  {
                      id: "2063",
                      name: "Sankt Gallen",
                      abbreviation: "SG",
                      country_id: "1205"
                  },
                  {
                      id: "2064",
                      name: "Schaffhausen",
                      abbreviation: "SH",
                      country_id: "1205"
                  },
                  {
                      id: "2065",
                      name: "Solothurn",
                      abbreviation: "SO",
                      country_id: "1205"
                  },
                  {
                      id: "2066",
                      name: "Schwyz",
                      abbreviation: "SZ",
                      country_id: "1205"
                  },
                  {
                      id: "2067",
                      name: "Thurgau",
                      abbreviation: "TG",
                      country_id: "1205"
                  },
                  {
                      id: "2068",
                      name: "Ticino",
                      abbreviation: "TI",
                      country_id: "1205"
                  },
                  {
                      id: "2069",
                      name: "Uri",
                      abbreviation: "UR",
                      country_id: "1205"
                  },
                  {
                      id: "2070",
                      name: "Vaud",
                      abbreviation: "VD",
                      country_id: "1205"
                  },
                  {
                      id: "2071",
                      name: "Valais",
                      abbreviation: "VS",
                      country_id: "1205"
                  },
                  {
                      id: "2072",
                      name: "Zug",
                      abbreviation: "ZG",
                      country_id: "1205"
                  },
                  {
                      id: "2073",
                      name: "Zurich",
                      abbreviation: "ZH",
                      country_id: "1205"
                  },
                  {
                      id: "2074",
                      name: "18 Montagnes",
                      abbreviation: "06",
                      country_id: "1054"
                  },
                  {
                      id: "2075",
                      name: "Agnebi",
                      abbreviation: "16",
                      country_id: "1054"
                  },
                  {
                      id: "2076",
                      name: "Bas-Sassandra",
                      abbreviation: "09",
                      country_id: "1054"
                  },
                  {
                      id: "2077",
                      name: "Denguele",
                      abbreviation: "10",
                      country_id: "1054"
                  },
                  {
                      id: "2078",
                      name: "Haut-Sassandra",
                      abbreviation: "02",
                      country_id: "1054"
                  },
                  {
                      id: "2079",
                      name: "Lacs",
                      abbreviation: "07",
                      country_id: "1054"
                  },
                  {
                      id: "2080",
                      name: "Lagunes",
                      abbreviation: "01",
                      country_id: "1054"
                  },
                  {
                      id: "2081",
                      name: "Marahoue",
                      abbreviation: "12",
                      country_id: "1054"
                  },
                  {
                      id: "2082",
                      name: "Moyen-Comoe",
                      abbreviation: "05",
                      country_id: "1054"
                  },
                  {
                      id: "2083",
                      name: "Nzi-Comoe",
                      abbreviation: "11",
                      country_id: "1054"
                  },
                  {
                      id: "2084",
                      name: "Savanes",
                      abbreviation: "03",
                      country_id: "1054"
                  },
                  {
                      id: "2085",
                      name: "Sud-Bandama",
                      abbreviation: "15",
                      country_id: "1054"
                  },
                  {
                      id: "2086",
                      name: "Sud-Comoe",
                      abbreviation: "13",
                      country_id: "1054"
                  },
                  {
                      id: "2087",
                      name: "Vallee du Bandama",
                      abbreviation: "04",
                      country_id: "1054"
                  },
                  {
                      id: "2088",
                      name: "Worodouqou",
                      abbreviation: "14",
                      country_id: "1054"
                  },
                  {
                      id: "2089",
                      name: "Zanzan",
                      abbreviation: "08",
                      country_id: "1054"
                  },
                  {
                      id: "2090",
                      name: "Aisen del General Carlos Ibanez del Campo",
                      abbreviation: "AI",
                      country_id: "1044"
                  },
                  {
                      id: "2091",
                      name: "Antofagasta",
                      abbreviation: "AN",
                      country_id: "1044"
                  },
                  {
                      id: "2092",
                      name: "Araucania",
                      abbreviation: "AR",
                      country_id: "1044"
                  },
                  {
                      id: "2093",
                      name: "Atacama",
                      abbreviation: "AT",
                      country_id: "1044"
                  },
                  {
                      id: "2094",
                      name: "Bio-Bio",
                      abbreviation: "BI",
                      country_id: "1044"
                  },
                  {
                      id: "2095",
                      name: "Coquimbo",
                      abbreviation: "CO",
                      country_id: "1044"
                  },
                  {
                      id: "2096",
                      name: "Libertador General Bernardo O'Higgins",
                      abbreviation: "LI",
                      country_id: "1044"
                  },
                  {
                      id: "2097",
                      name: "Los Lagos",
                      abbreviation: "LL",
                      country_id: "1044"
                  },
                  {
                      id: "2098",
                      name: "Magallanes",
                      abbreviation: "MA",
                      country_id: "1044"
                  },
                  {
                      id: "2099",
                      name: "Maule",
                      abbreviation: "ML",
                      country_id: "1044"
                  },
                  {
                      id: "2100",
                      name: "Santiago Metropolitan",
                      abbreviation: "SM",
                      country_id: "1044"
                  },
                  {
                      id: "2101",
                      name: "Tarapaca",
                      abbreviation: "TA",
                      country_id: "1044"
                  },
                  {
                      id: "2102",
                      name: "Valparaiso",
                      abbreviation: "VS",
                      country_id: "1044"
                  },
                  {
                      id: "2103",
                      name: "Adamaoua",
                      abbreviation: "AD",
                      country_id: "1038"
                  },
                  {
                      id: "2104",
                      name: "Centre",
                      abbreviation: "CE",
                      country_id: "1038"
                  },
                  {
                      id: "2105",
                      name: "East",
                      abbreviation: "ES",
                      country_id: "1038"
                  },
                  {
                      id: "2106",
                      name: "Far North",
                      abbreviation: "EN",
                      country_id: "1038"
                  },
                  {
                      id: "2107",
                      name: "North",
                      abbreviation: "NO",
                      country_id: "1038"
                  },
                  {
                      id: "2108",
                      name: "South",
                      abbreviation: "SW",
                      country_id: "1038"
                  },
                  {
                      id: "2109",
                      name: "South-West",
                      abbreviation: "SW",
                      country_id: "1038"
                  },
                  {
                      id: "2110",
                      name: "West",
                      abbreviation: "OU",
                      country_id: "1038"
                  },
                  {
                      id: "2111",
                      name: "Beijing",
                      abbreviation: "11",
                      country_id: "1045"
                  },
                  {
                      id: "2112",
                      name: "Chongqing",
                      abbreviation: "50",
                      country_id: "1045"
                  },
                  {
                      id: "2113",
                      name: "Shanghai",
                      abbreviation: "31",
                      country_id: "1045"
                  },
                  {
                      id: "2114",
                      name: "Tianjin",
                      abbreviation: "12",
                      country_id: "1045"
                  },
                  {
                      id: "2115",
                      name: "Anhui",
                      abbreviation: "34",
                      country_id: "1045"
                  },
                  {
                      id: "2116",
                      name: "Fujian",
                      abbreviation: "35",
                      country_id: "1045"
                  },
                  {
                      id: "2117",
                      name: "Gansu",
                      abbreviation: "62",
                      country_id: "1045"
                  },
                  {
                      id: "2118",
                      name: "Guangdong",
                      abbreviation: "44",
                      country_id: "1045"
                  },
                  {
                      id: "2119",
                      name: "Guizhou",
                      abbreviation: "52",
                      country_id: "1045"
                  },
                  {
                      id: "2120",
                      name: "Hainan",
                      abbreviation: "46",
                      country_id: "1045"
                  },
                  {
                      id: "2121",
                      name: "Hebei",
                      abbreviation: "13",
                      country_id: "1045"
                  },
                  {
                      id: "2122",
                      name: "Heilongjiang",
                      abbreviation: "23",
                      country_id: "1045"
                  },
                  {
                      id: "2123",
                      name: "Henan",
                      abbreviation: "41",
                      country_id: "1045"
                  },
                  {
                      id: "2124",
                      name: "Hubei",
                      abbreviation: "42",
                      country_id: "1045"
                  },
                  {
                      id: "2125",
                      name: "Hunan",
                      abbreviation: "43",
                      country_id: "1045"
                  },
                  {
                      id: "2126",
                      name: "Jiangsu",
                      abbreviation: "32",
                      country_id: "1045"
                  },
                  {
                      id: "2127",
                      name: "Jiangxi",
                      abbreviation: "36",
                      country_id: "1045"
                  },
                  {
                      id: "2128",
                      name: "Jilin",
                      abbreviation: "22",
                      country_id: "1045"
                  },
                  {
                      id: "2129",
                      name: "Liaoning",
                      abbreviation: "21",
                      country_id: "1045"
                  },
                  {
                      id: "2130",
                      name: "Qinghai",
                      abbreviation: "63",
                      country_id: "1045"
                  },
                  {
                      id: "2131",
                      name: "Shaanxi",
                      abbreviation: "61",
                      country_id: "1045"
                  },
                  {
                      id: "2132",
                      name: "Shandong",
                      abbreviation: "37",
                      country_id: "1045"
                  },
                  {
                      id: "2133",
                      name: "Shanxi",
                      abbreviation: "14",
                      country_id: "1045"
                  },
                  {
                      id: "2134",
                      name: "Sichuan",
                      abbreviation: "51",
                      country_id: "1045"
                  },
                  {
                      id: "2135",
                      name: "Taiwan",
                      abbreviation: "71",
                      country_id: "1045"
                  },
                  {
                      id: "2136",
                      name: "Yunnan",
                      abbreviation: "53",
                      country_id: "1045"
                  },
                  {
                      id: "2137",
                      name: "Zhejiang",
                      abbreviation: "33",
                      country_id: "1045"
                  },
                  {
                      id: "2138",
                      name: "Guangxi",
                      abbreviation: "45",
                      country_id: "1045"
                  },
                  {
                      id: "2139",
                      name: "Neia Mongol (mn)",
                      abbreviation: "15",
                      country_id: "1045"
                  },
                  {
                      id: "2140",
                      name: "Xinjiang",
                      abbreviation: "65",
                      country_id: "1045"
                  },
                  {
                      id: "2141",
                      name: "Xizang",
                      abbreviation: "54",
                      country_id: "1045"
                  },
                  {
                      id: "2142",
                      name: "Hong Kong",
                      abbreviation: "91",
                      country_id: "1045"
                  },
                  {
                      id: "2143",
                      name: "Macau",
                      abbreviation: "92",
                      country_id: "1045"
                  },
                  {
                      id: "2144",
                      name: "Distrito Capital de Bogotá",
                      abbreviation: "DC",
                      country_id: "1048"
                  },
                  {
                      id: "2145",
                      name: "Amazonea",
                      abbreviation: "AMA",
                      country_id: "1048"
                  },
                  {
                      id: "2146",
                      name: "Antioquia",
                      abbreviation: "ANT",
                      country_id: "1048"
                  },
                  {
                      id: "2147",
                      name: "Arauca",
                      abbreviation: "ARA",
                      country_id: "1048"
                  },
                  {
                      id: "2148",
                      name: "Atlántico",
                      abbreviation: "ATL",
                      country_id: "1048"
                  },
                  {
                      id: "2149",
                      name: "Bolívar",
                      abbreviation: "BOL",
                      country_id: "1048"
                  },
                  {
                      id: "2150",
                      name: "Boyacá",
                      abbreviation: "BOY",
                      country_id: "1048"
                  },
                  {
                      id: "2151",
                      name: "Caldea",
                      abbreviation: "CAL",
                      country_id: "1048"
                  },
                  {
                      id: "2152",
                      name: "Caquetá",
                      abbreviation: "CAQ",
                      country_id: "1048"
                  },
                  {
                      id: "2153",
                      name: "Casanare",
                      abbreviation: "CAS",
                      country_id: "1048"
                  },
                  {
                      id: "2154",
                      name: "Cauca",
                      abbreviation: "CAU",
                      country_id: "1048"
                  },
                  {
                      id: "2155",
                      name: "Cesar",
                      abbreviation: "CES",
                      country_id: "1048"
                  },
                  {
                      id: "2156",
                      name: "Córdoba",
                      abbreviation: "COR",
                      country_id: "1048"
                  },
                  {
                      id: "2157",
                      name: "Cundinamarca",
                      abbreviation: "CUN",
                      country_id: "1048"
                  },
                  {
                      id: "2158",
                      name: "Chocó",
                      abbreviation: "CHO",
                      country_id: "1048"
                  },
                  {
                      id: "2159",
                      name: "Guainía",
                      abbreviation: "GUA",
                      country_id: "1048"
                  },
                  {
                      id: "2160",
                      name: "Guaviare",
                      abbreviation: "GUV",
                      country_id: "1048"
                  },
                  {
                      id: "2161",
                      name: "La Guajira",
                      abbreviation: "LAG",
                      country_id: "1048"
                  },
                  {
                      id: "2162",
                      name: "Magdalena",
                      abbreviation: "MAG",
                      country_id: "1048"
                  },
                  {
                      id: "2163",
                      name: "Meta",
                      abbreviation: "MET",
                      country_id: "1048"
                  },
                  {
                      id: "2164",
                      name: "Nariño",
                      abbreviation: "NAR",
                      country_id: "1048"
                  },
                  {
                      id: "2165",
                      name: "Norte de Santander",
                      abbreviation: "NSA",
                      country_id: "1048"
                  },
                  {
                      id: "2166",
                      name: "Putumayo",
                      abbreviation: "PUT",
                      country_id: "1048"
                  },
                  {
                      id: "2167",
                      name: "Quindio",
                      abbreviation: "QUI",
                      country_id: "1048"
                  },
                  {
                      id: "2168",
                      name: "Risaralda",
                      abbreviation: "RIS",
                      country_id: "1048"
                  },
                  {
                      id: "2169",
                      name: "San Andrés, Providencia y Santa Catalina",
                      abbreviation: "SAP",
                      country_id: "1048"
                  },
                  {
                      id: "2170",
                      name: "Santander",
                      abbreviation: "SAN",
                      country_id: "1048"
                  },
                  {
                      id: "2171",
                      name: "Sucre",
                      abbreviation: "SUC",
                      country_id: "1048"
                  },
                  {
                      id: "2172",
                      name: "Tolima",
                      abbreviation: "TOL",
                      country_id: "1048"
                  },
                  {
                      id: "2173",
                      name: "Valle del Cauca",
                      abbreviation: "VAC",
                      country_id: "1048"
                  },
                  {
                      id: "2174",
                      name: "Vaupés",
                      abbreviation: "VAU",
                      country_id: "1048"
                  },
                  {
                      id: "2175",
                      name: "Vichada",
                      abbreviation: "VID",
                      country_id: "1048"
                  },
                  {
                      id: "2176",
                      name: "Alajuela",
                      abbreviation: "A",
                      country_id: "1053"
                  },
                  {
                      id: "2177",
                      name: "Cartago",
                      abbreviation: "C",
                      country_id: "1053"
                  },
                  {
                      id: "2178",
                      name: "Guanacaste",
                      abbreviation: "G",
                      country_id: "1053"
                  },
                  {
                      id: "2179",
                      name: "Heredia",
                      abbreviation: "H",
                      country_id: "1053"
                  },
                  {
                      id: "2180",
                      name: "Limon",
                      abbreviation: "L",
                      country_id: "1053"
                  },
                  {
                      id: "2181",
                      name: "Puntarenas",
                      abbreviation: "P",
                      country_id: "1053"
                  },
                  {
                      id: "2182",
                      name: "San Jose",
                      abbreviation: "SJ",
                      country_id: "1053"
                  },
                  {
                      id: "2183",
                      name: "Camagey",
                      abbreviation: "09",
                      country_id: "1056"
                  },
                  {
                      id: "2184",
                      name: "Ciego de `vila",
                      abbreviation: "08",
                      country_id: "1056"
                  },
                  {
                      id: "2185",
                      name: "Cienfuegos",
                      abbreviation: "06",
                      country_id: "1056"
                  },
                  {
                      id: "2186",
                      name: "Ciudad de La Habana",
                      abbreviation: "03",
                      country_id: "1056"
                  },
                  {
                      id: "2187",
                      name: "Granma",
                      abbreviation: "12",
                      country_id: "1056"
                  },
                  {
                      id: "2188",
                      name: "Guantanamo",
                      abbreviation: "14",
                      country_id: "1056"
                  },
                  {
                      id: "2189",
                      name: "Holquin",
                      abbreviation: "11",
                      country_id: "1056"
                  },
                  {
                      id: "2190",
                      name: "La Habana",
                      abbreviation: "02",
                      country_id: "1056"
                  },
                  {
                      id: "2191",
                      name: "Las Tunas",
                      abbreviation: "10",
                      country_id: "1056"
                  },
                  {
                      id: "2192",
                      name: "Matanzas",
                      abbreviation: "04",
                      country_id: "1056"
                  },
                  {
                      id: "2193",
                      name: "Pinar del Rio",
                      abbreviation: "01",
                      country_id: "1056"
                  },
                  {
                      id: "2194",
                      name: "Sancti Spiritus",
                      abbreviation: "07",
                      country_id: "1056"
                  },
                  {
                      id: "2195",
                      name: "Santiago de Cuba",
                      abbreviation: "13",
                      country_id: "1056"
                  },
                  {
                      id: "2196",
                      name: "Villa Clara",
                      abbreviation: "05",
                      country_id: "1056"
                  },
                  {
                      id: "2197",
                      name: "Isla de la Juventud",
                      abbreviation: "99",
                      country_id: "1056"
                  },
                  {
                      id: "2198",
                      name: "Pinar del Roo",
                      abbreviation: "PR",
                      country_id: "1056"
                  },
                  {
                      id: "2199",
                      name: "Ciego de Avila",
                      abbreviation: "CA",
                      country_id: "1056"
                  },
                  {
                      id: "2200",
                      name: "Camagoey",
                      abbreviation: "CG",
                      country_id: "1056"
                  },
                  {
                      id: "2201",
                      name: "Holgun",
                      abbreviation: "HO",
                      country_id: "1056"
                  },
                  {
                      id: "2202",
                      name: "Sancti Spritus",
                      abbreviation: "SS",
                      country_id: "1056"
                  },
                  {
                      id: "2203",
                      name: "Municipio Especial Isla de la Juventud",
                      abbreviation: "IJ",
                      country_id: "1056"
                  },
                  {
                      id: "2204",
                      name: "Boa Vista",
                      abbreviation: "BV",
                      country_id: "1040"
                  },
                  {
                      id: "2205",
                      name: "Brava",
                      abbreviation: "BR",
                      country_id: "1040"
                  },
                  {
                      id: "2206",
                      name: "Calheta de Sao Miguel",
                      abbreviation: "CS",
                      country_id: "1040"
                  },
                  {
                      id: "2207",
                      name: "Fogo",
                      abbreviation: "FO",
                      country_id: "1040"
                  },
                  {
                      id: "2208",
                      name: "Maio",
                      abbreviation: "MA",
                      country_id: "1040"
                  },
                  {
                      id: "2209",
                      name: "Mosteiros",
                      abbreviation: "MO",
                      country_id: "1040"
                  },
                  {
                      id: "2210",
                      name: "Paul",
                      abbreviation: "PA",
                      country_id: "1040"
                  },
                  {
                      id: "2211",
                      name: "Porto Novo",
                      abbreviation: "PN",
                      country_id: "1040"
                  },
                  {
                      id: "2212",
                      name: "Praia",
                      abbreviation: "PR",
                      country_id: "1040"
                  },
                  {
                      id: "2213",
                      name: "Ribeira Grande",
                      abbreviation: "RG",
                      country_id: "1040"
                  },
                  {
                      id: "2214",
                      name: "Sal",
                      abbreviation: "SL",
                      country_id: "1040"
                  },
                  {
                      id: "2215",
                      name: "Sao Domingos",
                      abbreviation: "SD",
                      country_id: "1040"
                  },
                  {
                      id: "2216",
                      name: "Sao Filipe",
                      abbreviation: "SF",
                      country_id: "1040"
                  },
                  {
                      id: "2217",
                      name: "Sao Nicolau",
                      abbreviation: "SN",
                      country_id: "1040"
                  },
                  {
                      id: "2218",
                      name: "Sao Vicente",
                      abbreviation: "SV",
                      country_id: "1040"
                  },
                  {
                      id: "2219",
                      name: "Tarrafal",
                      abbreviation: "TA",
                      country_id: "1040"
                  },
                  {
                      id: "2220",
                      name: "Ammochostos Magusa",
                      abbreviation: "04",
                      country_id: "1057"
                  },
                  {
                      id: "2221",
                      name: "Keryneia",
                      abbreviation: "06",
                      country_id: "1057"
                  },
                  {
                      id: "2222",
                      name: "Larnaka",
                      abbreviation: "03",
                      country_id: "1057"
                  },
                  {
                      id: "2223",
                      name: "Lefkosia",
                      abbreviation: "01",
                      country_id: "1057"
                  },
                  {
                      id: "2224",
                      name: "Lemesos",
                      abbreviation: "02",
                      country_id: "1057"
                  },
                  {
                      id: "2225",
                      name: "Pafos",
                      abbreviation: "05",
                      country_id: "1057"
                  },
                  {
                      id: "2226",
                      name: "Jihočeský kraj",
                      abbreviation: "JC",
                      country_id: "1058"
                  },
                  {
                      id: "2227",
                      name: "Jihomoravský kraj",
                      abbreviation: "JM",
                      country_id: "1058"
                  },
                  {
                      id: "2228",
                      name: "Karlovarský kraj",
                      abbreviation: "KA",
                      country_id: "1058"
                  },
                  {
                      id: "2229",
                      name: "Královéhradecký kraj",
                      abbreviation: "KR",
                      country_id: "1058"
                  },
                  {
                      id: "2230",
                      name: "Liberecký kraj",
                      abbreviation: "LI",
                      country_id: "1058"
                  },
                  {
                      id: "2231",
                      name: "Moravskoslezský kraj",
                      abbreviation: "MO",
                      country_id: "1058"
                  },
                  {
                      id: "2232",
                      name: "Olomoucký kraj",
                      abbreviation: "OL",
                      country_id: "1058"
                  },
                  {
                      id: "2233",
                      name: "Pardubický kraj",
                      abbreviation: "PA",
                      country_id: "1058"
                  },
                  {
                      id: "2234",
                      name: "Plzeňský kraj",
                      abbreviation: "PL",
                      country_id: "1058"
                  },
                  {
                      id: "2235",
                      name: "Praha, hlavní město",
                      abbreviation: "PR",
                      country_id: "1058"
                  },
                  {
                      id: "2236",
                      name: "Středočeský kraj",
                      abbreviation: "ST",
                      country_id: "1058"
                  },
                  {
                      id: "2237",
                      name: "Ústecký kraj",
                      abbreviation: "US",
                      country_id: "1058"
                  },
                  {
                      id: "2238",
                      name: "Vysočina",
                      abbreviation: "VY",
                      country_id: "1058"
                  },
                  {
                      id: "2239",
                      name: "Zlínský kraj",
                      abbreviation: "ZL",
                      country_id: "1058"
                  },
                  {
                      id: "2240",
                      name: "Baden-Württemberg",
                      abbreviation: "BW",
                      country_id: "1082"
                  },
                  {
                      id: "2241",
                      name: "Bayern",
                      abbreviation: "BY",
                      country_id: "1082"
                  },
                  {
                      id: "2242",
                      name: "Bremen",
                      abbreviation: "HB",
                      country_id: "1082"
                  },
                  {
                      id: "2243",
                      name: "Hamburg",
                      abbreviation: "HH",
                      country_id: "1082"
                  },
                  {
                      id: "2244",
                      name: "Hessen",
                      abbreviation: "HE",
                      country_id: "1082"
                  },
                  {
                      id: "2245",
                      name: "Niedersachsen",
                      abbreviation: "NI",
                      country_id: "1082"
                  },
                  {
                      id: "2246",
                      name: "Nordrhein-Westfalen",
                      abbreviation: "NW",
                      country_id: "1082"
                  },
                  {
                      id: "2247",
                      name: "Rheinland-Pfalz",
                      abbreviation: "RP",
                      country_id: "1082"
                  },
                  {
                      id: "2248",
                      name: "Saarland",
                      abbreviation: "SL",
                      country_id: "1082"
                  },
                  {
                      id: "2249",
                      name: "Schleswig-Holstein",
                      abbreviation: "SH",
                      country_id: "1082"
                  },
                  {
                      id: "2250",
                      name: "Berlin",
                      abbreviation: "BE",
                      country_id: "1082"
                  },
                  {
                      id: "2251",
                      name: "Brandenburg",
                      abbreviation: "BB",
                      country_id: "1082"
                  },
                  {
                      id: "2252",
                      name: "Mecklenburg-Vorpommern",
                      abbreviation: "MV",
                      country_id: "1082"
                  },
                  {
                      id: "2253",
                      name: "Sachsen",
                      abbreviation: "SN",
                      country_id: "1082"
                  },
                  {
                      id: "2254",
                      name: "Sachsen-Anhalt",
                      abbreviation: "ST",
                      country_id: "1082"
                  },
                  {
                      id: "2255",
                      name: "Thüringen",
                      abbreviation: "TH",
                      country_id: "1082"
                  },
                  {
                      id: "2256",
                      name: "Ali Sabiah",
                      abbreviation: "AS",
                      country_id: "1060"
                  },
                  {
                      id: "2257",
                      name: "Dikhil",
                      abbreviation: "DI",
                      country_id: "1060"
                  },
                  {
                      id: "2258",
                      name: "Djibouti",
                      abbreviation: "DJ",
                      country_id: "1060"
                  },
                  {
                      id: "2259",
                      name: "Obock",
                      abbreviation: "OB",
                      country_id: "1060"
                  },
                  {
                      id: "2260",
                      name: "Tadjoura",
                      abbreviation: "TA",
                      country_id: "1060"
                  },
                  {
                      id: "2261",
                      name: "Frederiksberg",
                      abbreviation: "147",
                      country_id: "1059"
                  },
                  {
                      id: "2262",
                      name: "Copenhagen City",
                      abbreviation: "101",
                      country_id: "1059"
                  },
                  {
                      id: "2263",
                      name: "Copenhagen",
                      abbreviation: "015",
                      country_id: "1059"
                  },
                  {
                      id: "2264",
                      name: "Frederiksborg",
                      abbreviation: "020",
                      country_id: "1059"
                  },
                  {
                      id: "2265",
                      name: "Roskilde",
                      abbreviation: "025",
                      country_id: "1059"
                  },
                  {
                      id: "2266",
                      name: "Vestsjælland",
                      abbreviation: "030",
                      country_id: "1059"
                  },
                  {
                      id: "2267",
                      name: "Storstrøm",
                      abbreviation: "035",
                      country_id: "1059"
                  },
                  {
                      id: "2268",
                      name: "Bornholm",
                      abbreviation: "040",
                      country_id: "1059"
                  },
                  {
                      id: "2269",
                      name: "Fyn",
                      abbreviation: "042",
                      country_id: "1059"
                  },
                  {
                      id: "2270",
                      name: "South Jutland",
                      abbreviation: "050",
                      country_id: "1059"
                  },
                  {
                      id: "2271",
                      name: "Ribe",
                      abbreviation: "055",
                      country_id: "1059"
                  },
                  {
                      id: "2272",
                      name: "Vejle",
                      abbreviation: "060",
                      country_id: "1059"
                  },
                  {
                      id: "2273",
                      name: "Ringkjøbing",
                      abbreviation: "065",
                      country_id: "1059"
                  },
                  {
                      id: "2274",
                      name: "Århus",
                      abbreviation: "070",
                      country_id: "1059"
                  },
                  {
                      id: "2275",
                      name: "Viborg",
                      abbreviation: "076",
                      country_id: "1059"
                  },
                  {
                      id: "2276",
                      name: "North Jutland",
                      abbreviation: "080",
                      country_id: "1059"
                  },
                  {
                      id: "2277",
                      name: "Distrito Nacional (Santo Domingo)",
                      abbreviation: "01",
                      country_id: "1062"
                  },
                  {
                      id: "2278",
                      name: "Azua",
                      abbreviation: "02",
                      country_id: "1062"
                  },
                  {
                      id: "2279",
                      name: "Bahoruco",
                      abbreviation: "03",
                      country_id: "1062"
                  },
                  {
                      id: "2280",
                      name: "Barahona",
                      abbreviation: "04",
                      country_id: "1062"
                  },
                  {
                      id: "2281",
                      name: "Dajabón",
                      abbreviation: "05",
                      country_id: "1062"
                  },
                  {
                      id: "2282",
                      name: "Duarte",
                      abbreviation: "06",
                      country_id: "1062"
                  },
                  {
                      id: "2283",
                      name: "El Seybo [El Seibo]",
                      abbreviation: "08",
                      country_id: "1062"
                  },
                  {
                      id: "2284",
                      name: "Espaillat",
                      abbreviation: "09",
                      country_id: "1062"
                  },
                  {
                      id: "2285",
                      name: "Hato Mayor",
                      abbreviation: "30",
                      country_id: "1062"
                  },
                  {
                      id: "2286",
                      name: "Independencia",
                      abbreviation: "10",
                      country_id: "1062"
                  },
                  {
                      id: "2287",
                      name: "La Altagracia",
                      abbreviation: "11",
                      country_id: "1062"
                  },
                  {
                      id: "2288",
                      name: "La Estrelleta [Elias Pina]",
                      abbreviation: "07",
                      country_id: "1062"
                  },
                  {
                      id: "2289",
                      name: "La Romana",
                      abbreviation: "12",
                      country_id: "1062"
                  },
                  {
                      id: "2290",
                      name: "La Vega",
                      abbreviation: "13",
                      country_id: "1062"
                  },
                  {
                      id: "2291",
                      name: "Maroia Trinidad Sánchez",
                      abbreviation: "14",
                      country_id: "1062"
                  },
                  {
                      id: "2292",
                      name: "Monseñor Nouel",
                      abbreviation: "28",
                      country_id: "1062"
                  },
                  {
                      id: "2293",
                      name: "Monte Cristi",
                      abbreviation: "15",
                      country_id: "1062"
                  },
                  {
                      id: "2294",
                      name: "Monte Plata",
                      abbreviation: "29",
                      country_id: "1062"
                  },
                  {
                      id: "2295",
                      name: "Pedernales",
                      abbreviation: "16",
                      country_id: "1062"
                  },
                  {
                      id: "2296",
                      name: "Peravia",
                      abbreviation: "17",
                      country_id: "1062"
                  },
                  {
                      id: "2297",
                      name: "Puerto Plata",
                      abbreviation: "18",
                      country_id: "1062"
                  },
                  {
                      id: "2298",
                      name: "Salcedo",
                      abbreviation: "19",
                      country_id: "1062"
                  },
                  {
                      id: "2299",
                      name: "Samaná",
                      abbreviation: "20",
                      country_id: "1062"
                  },
                  {
                      id: "2300",
                      name: "San Cristóbal",
                      abbreviation: "21",
                      country_id: "1062"
                  },
                  {
                      id: "2301",
                      name: "San Pedro de Macorís",
                      abbreviation: "23",
                      country_id: "1062"
                  },
                  {
                      id: "2302",
                      name: "Sánchez Ramírez",
                      abbreviation: "24",
                      country_id: "1062"
                  },
                  {
                      id: "2303",
                      name: "Santiago",
                      abbreviation: "25",
                      country_id: "1062"
                  },
                  {
                      id: "2304",
                      name: "Santiago Rodríguez",
                      abbreviation: "26",
                      country_id: "1062"
                  },
                  {
                      id: "2305",
                      name: "Valverde",
                      abbreviation: "27",
                      country_id: "1062"
                  },
                  {
                      id: "2306",
                      name: "Adrar",
                      abbreviation: "01",
                      country_id: "1003"
                  },
                  {
                      id: "2307",
                      name: "Ain Defla",
                      abbreviation: "44",
                      country_id: "1003"
                  },
                  {
                      id: "2308",
                      name: "Ain Tmouchent",
                      abbreviation: "46",
                      country_id: "1003"
                  },
                  {
                      id: "2309",
                      name: "Alger",
                      abbreviation: "16",
                      country_id: "1003"
                  },
                  {
                      id: "2310",
                      name: "Annaba",
                      abbreviation: "23",
                      country_id: "1003"
                  },
                  {
                      id: "2311",
                      name: "Batna",
                      abbreviation: "05",
                      country_id: "1003"
                  },
                  {
                      id: "2312",
                      name: "Bechar",
                      abbreviation: "08",
                      country_id: "1003"
                  },
                  {
                      id: "2313",
                      name: "Bejaia",
                      abbreviation: "06",
                      country_id: "1003"
                  },
                  {
                      id: "2314",
                      name: "Biskra",
                      abbreviation: "07",
                      country_id: "1003"
                  },
                  {
                      id: "2315",
                      name: "Blida",
                      abbreviation: "09",
                      country_id: "1003"
                  },
                  {
                      id: "2316",
                      name: "Bordj Bou Arreridj",
                      abbreviation: "34",
                      country_id: "1003"
                  },
                  {
                      id: "2317",
                      name: "Bouira",
                      abbreviation: "10",
                      country_id: "1003"
                  },
                  {
                      id: "2318",
                      name: "Boumerdes",
                      abbreviation: "35",
                      country_id: "1003"
                  },
                  {
                      id: "2319",
                      name: "Chlef",
                      abbreviation: "02",
                      country_id: "1003"
                  },
                  {
                      id: "2320",
                      name: "Constantine",
                      abbreviation: "25",
                      country_id: "1003"
                  },
                  {
                      id: "2321",
                      name: "Djelfa",
                      abbreviation: "17",
                      country_id: "1003"
                  },
                  {
                      id: "2322",
                      name: "El Bayadh",
                      abbreviation: "32",
                      country_id: "1003"
                  },
                  {
                      id: "2323",
                      name: "El Oued",
                      abbreviation: "39",
                      country_id: "1003"
                  },
                  {
                      id: "2324",
                      name: "El Tarf",
                      abbreviation: "36",
                      country_id: "1003"
                  },
                  {
                      id: "2325",
                      name: "Ghardaia",
                      abbreviation: "47",
                      country_id: "1003"
                  },
                  {
                      id: "2326",
                      name: "Guelma",
                      abbreviation: "24",
                      country_id: "1003"
                  },
                  {
                      id: "2327",
                      name: "Illizi",
                      abbreviation: "33",
                      country_id: "1003"
                  },
                  {
                      id: "2328",
                      name: "Jijel",
                      abbreviation: "18",
                      country_id: "1003"
                  },
                  {
                      id: "2329",
                      name: "Khenchela",
                      abbreviation: "40",
                      country_id: "1003"
                  },
                  {
                      id: "2330",
                      name: "Laghouat",
                      abbreviation: "03",
                      country_id: "1003"
                  },
                  {
                      id: "2331",
                      name: "Mascara",
                      abbreviation: "29",
                      country_id: "1003"
                  },
                  {
                      id: "2332",
                      name: "Medea",
                      abbreviation: "26",
                      country_id: "1003"
                  },
                  {
                      id: "2333",
                      name: "Mila",
                      abbreviation: "43",
                      country_id: "1003"
                  },
                  {
                      id: "2334",
                      name: "Mostaganem",
                      abbreviation: "27",
                      country_id: "1003"
                  },
                  {
                      id: "2335",
                      name: "Msila",
                      abbreviation: "28",
                      country_id: "1003"
                  },
                  {
                      id: "2336",
                      name: "Naama",
                      abbreviation: "45",
                      country_id: "1003"
                  },
                  {
                      id: "2337",
                      name: "Oran",
                      abbreviation: "31",
                      country_id: "1003"
                  },
                  {
                      id: "2338",
                      name: "Ouargla",
                      abbreviation: "30",
                      country_id: "1003"
                  },
                  {
                      id: "2339",
                      name: "Oum el Bouaghi",
                      abbreviation: "04",
                      country_id: "1003"
                  },
                  {
                      id: "2340",
                      name: "Relizane",
                      abbreviation: "48",
                      country_id: "1003"
                  },
                  {
                      id: "2341",
                      name: "Saida",
                      abbreviation: "20",
                      country_id: "1003"
                  },
                  {
                      id: "2342",
                      name: "Setif",
                      abbreviation: "19",
                      country_id: "1003"
                  },
                  {
                      id: "2343",
                      name: "Sidi Bel Abbes",
                      abbreviation: "22",
                      country_id: "1003"
                  },
                  {
                      id: "2344",
                      name: "Skikda",
                      abbreviation: "21",
                      country_id: "1003"
                  },
                  {
                      id: "2345",
                      name: "Souk Ahras",
                      abbreviation: "41",
                      country_id: "1003"
                  },
                  {
                      id: "2346",
                      name: "Tamanghasset",
                      abbreviation: "11",
                      country_id: "1003"
                  },
                  {
                      id: "2347",
                      name: "Tebessa",
                      abbreviation: "12",
                      country_id: "1003"
                  },
                  {
                      id: "2348",
                      name: "Tiaret",
                      abbreviation: "14",
                      country_id: "1003"
                  },
                  {
                      id: "2349",
                      name: "Tindouf",
                      abbreviation: "37",
                      country_id: "1003"
                  },
                  {
                      id: "2350",
                      name: "Tipaza",
                      abbreviation: "42",
                      country_id: "1003"
                  },
                  {
                      id: "2351",
                      name: "Tissemsilt",
                      abbreviation: "38",
                      country_id: "1003"
                  },
                  {
                      id: "2352",
                      name: "Tizi Ouzou",
                      abbreviation: "15",
                      country_id: "1003"
                  },
                  {
                      id: "2353",
                      name: "Tlemcen",
                      abbreviation: "13",
                      country_id: "1003"
                  },
                  {
                      id: "2354",
                      name: "Azuay",
                      abbreviation: "A",
                      country_id: "1064"
                  },
                  {
                      id: "2355",
                      name: "Bolivar",
                      abbreviation: "B",
                      country_id: "1064"
                  },
                  {
                      id: "2356",
                      name: "Canar",
                      abbreviation: "F",
                      country_id: "1064"
                  },
                  {
                      id: "2357",
                      name: "Carchi",
                      abbreviation: "C",
                      country_id: "1064"
                  },
                  {
                      id: "2358",
                      name: "Cotopaxi",
                      abbreviation: "X",
                      country_id: "1064"
                  },
                  {
                      id: "2359",
                      name: "Chimborazo",
                      abbreviation: "H",
                      country_id: "1064"
                  },
                  {
                      id: "2360",
                      name: "El Oro",
                      abbreviation: "O",
                      country_id: "1064"
                  },
                  {
                      id: "2361",
                      name: "Esmeraldas",
                      abbreviation: "E",
                      country_id: "1064"
                  },
                  {
                      id: "2362",
                      name: "Galapagos",
                      abbreviation: "W",
                      country_id: "1064"
                  },
                  {
                      id: "2363",
                      name: "Guayas",
                      abbreviation: "G",
                      country_id: "1064"
                  },
                  {
                      id: "2364",
                      name: "Imbabura",
                      abbreviation: "I",
                      country_id: "1064"
                  },
                  {
                      id: "2365",
                      name: "Loja",
                      abbreviation: "L",
                      country_id: "1064"
                  },
                  {
                      id: "2366",
                      name: "Los Rios",
                      abbreviation: "R",
                      country_id: "1064"
                  },
                  {
                      id: "2367",
                      name: "Manabi",
                      abbreviation: "M",
                      country_id: "1064"
                  },
                  {
                      id: "2368",
                      name: "Morona-Santiago",
                      abbreviation: "S",
                      country_id: "1064"
                  },
                  {
                      id: "2369",
                      name: "Napo",
                      abbreviation: "N",
                      country_id: "1064"
                  },
                  {
                      id: "2370",
                      name: "Orellana",
                      abbreviation: "D",
                      country_id: "1064"
                  },
                  {
                      id: "2371",
                      name: "Pastaza",
                      abbreviation: "Y",
                      country_id: "1064"
                  },
                  {
                      id: "2372",
                      name: "Pichincha",
                      abbreviation: "P",
                      country_id: "1064"
                  },
                  {
                      id: "2373",
                      name: "Sucumbios",
                      abbreviation: "U",
                      country_id: "1064"
                  },
                  {
                      id: "2374",
                      name: "Tungurahua",
                      abbreviation: "T",
                      country_id: "1064"
                  },
                  {
                      id: "2375",
                      name: "Zamora-Chinchipe",
                      abbreviation: "Z",
                      country_id: "1064"
                  },
                  {
                      id: "2376",
                      name: "Harjumaa",
                      abbreviation: "37",
                      country_id: "1069"
                  },
                  {
                      id: "2377",
                      name: "Hiiumaa",
                      abbreviation: "39",
                      country_id: "1069"
                  },
                  {
                      id: "2378",
                      name: "Ida-Virumaa",
                      abbreviation: "44",
                      country_id: "1069"
                  },
                  {
                      id: "2379",
                      name: "Jõgevamaa",
                      abbreviation: "49",
                      country_id: "1069"
                  },
                  {
                      id: "2380",
                      name: "Järvamaa",
                      abbreviation: "51",
                      country_id: "1069"
                  },
                  {
                      id: "2381",
                      name: "Läänemaa",
                      abbreviation: "57",
                      country_id: "1069"
                  },
                  {
                      id: "2382",
                      name: "Lääne-Virumaa",
                      abbreviation: "59",
                      country_id: "1069"
                  },
                  {
                      id: "2383",
                      name: "Põlvamaa",
                      abbreviation: "65",
                      country_id: "1069"
                  },
                  {
                      id: "2384",
                      name: "Pärnumaa",
                      abbreviation: "67",
                      country_id: "1069"
                  },
                  {
                      id: "2385",
                      name: "Raplamaa",
                      abbreviation: "70",
                      country_id: "1069"
                  },
                  {
                      id: "2386",
                      name: "Saaremaa",
                      abbreviation: "74",
                      country_id: "1069"
                  },
                  {
                      id: "2387",
                      name: "Tartumaa",
                      abbreviation: "7B",
                      country_id: "1069"
                  },
                  {
                      id: "2388",
                      name: "Valgamaa",
                      abbreviation: "82",
                      country_id: "1069"
                  },
                  {
                      id: "2389",
                      name: "Viljandimaa",
                      abbreviation: "84",
                      country_id: "1069"
                  },
                  {
                      id: "2390",
                      name: "Võrumaa",
                      abbreviation: "86",
                      country_id: "1069"
                  },
                  {
                      id: "2391",
                      name: "Ad Daqahllyah",
                      abbreviation: "DK",
                      country_id: "1065"
                  },
                  {
                      id: "2392",
                      name: "Al Bahr al Ahmar",
                      abbreviation: "BA",
                      country_id: "1065"
                  },
                  {
                      id: "2393",
                      name: "Al Buhayrah",
                      abbreviation: "BH",
                      country_id: "1065"
                  },
                  {
                      id: "2394",
                      name: "Al Fayym",
                      abbreviation: "FYM",
                      country_id: "1065"
                  },
                  {
                      id: "2395",
                      name: "Al Gharbiyah",
                      abbreviation: "GH",
                      country_id: "1065"
                  },
                  {
                      id: "2396",
                      name: "Al Iskandarlyah",
                      abbreviation: "ALX",
                      country_id: "1065"
                  },
                  {
                      id: "2397",
                      name: "Al Isma illyah",
                      abbreviation: "IS",
                      country_id: "1065"
                  },
                  {
                      id: "2398",
                      name: "Al Jizah",
                      abbreviation: "GZ",
                      country_id: "1065"
                  },
                  {
                      id: "2399",
                      name: "Al Minuflyah",
                      abbreviation: "MNF",
                      country_id: "1065"
                  },
                  {
                      id: "2400",
                      name: "Al Minya",
                      abbreviation: "MN",
                      country_id: "1065"
                  },
                  {
                      id: "2401",
                      name: "Al Qahirah",
                      abbreviation: "C",
                      country_id: "1065"
                  },
                  {
                      id: "2402",
                      name: "Al Qalyublyah",
                      abbreviation: "KB",
                      country_id: "1065"
                  },
                  {
                      id: "2403",
                      name: "Al Wadi al Jadid",
                      abbreviation: "WAD",
                      country_id: "1065"
                  },
                  {
                      id: "2404",
                      name: "Ash Sharqiyah",
                      abbreviation: "SHR",
                      country_id: "1065"
                  },
                  {
                      id: "2405",
                      name: "As Suways",
                      abbreviation: "SUZ",
                      country_id: "1065"
                  },
                  {
                      id: "2406",
                      name: "Aswan",
                      abbreviation: "ASN",
                      country_id: "1065"
                  },
                  {
                      id: "2407",
                      name: "Asyut",
                      abbreviation: "AST",
                      country_id: "1065"
                  },
                  {
                      id: "2408",
                      name: "Bani Suwayf",
                      abbreviation: "BNS",
                      country_id: "1065"
                  },
                  {
                      id: "2409",
                      name: "Bur Sa'id",
                      abbreviation: "PTS",
                      country_id: "1065"
                  },
                  {
                      id: "2410",
                      name: "Dumyat",
                      abbreviation: "DT",
                      country_id: "1065"
                  },
                  {
                      id: "2411",
                      name: "Janub Sina'",
                      abbreviation: "JS",
                      country_id: "1065"
                  },
                  {
                      id: "2412",
                      name: "Kafr ash Shaykh",
                      abbreviation: "KFS",
                      country_id: "1065"
                  },
                  {
                      id: "2413",
                      name: "Matruh",
                      abbreviation: "MT",
                      country_id: "1065"
                  },
                  {
                      id: "2414",
                      name: "Qina",
                      abbreviation: "KN",
                      country_id: "1065"
                  },
                  {
                      id: "2415",
                      name: "Shamal Sina'",
                      abbreviation: "SIN",
                      country_id: "1065"
                  },
                  {
                      id: "2416",
                      name: "Suhaj",
                      abbreviation: "SHG",
                      country_id: "1065"
                  },
                  {
                      id: "2417",
                      name: "Anseba",
                      abbreviation: "AN",
                      country_id: "1068"
                  },
                  {
                      id: "2418",
                      name: "Debub",
                      abbreviation: "DU",
                      country_id: "1068"
                  },
                  {
                      id: "2419",
                      name: "Debubawi Keyih Bahri [Debub-Keih-Bahri]",
                      abbreviation: "DK",
                      country_id: "1068"
                  },
                  {
                      id: "2420",
                      name: "Gash-Barka",
                      abbreviation: "GB",
                      country_id: "1068"
                  },
                  {
                      id: "2421",
                      name: "Maakel [Maekel]",
                      abbreviation: "MA",
                      country_id: "1068"
                  },
                  {
                      id: "2422",
                      name: "Semenawi Keyih Bahri [Semien-Keih-Bahri]",
                      abbreviation: "SK",
                      country_id: "1068"
                  },
                  {
                      id: "2423",
                      name: "Álava",
                      abbreviation: "VI",
                      country_id: "1198"
                  },
                  {
                      id: "2424",
                      name: "Albacete",
                      abbreviation: "AB",
                      country_id: "1198"
                  },
                  {
                      id: "2425",
                      name: "Alicante",
                      abbreviation: "A",
                      country_id: "1198"
                  },
                  {
                      id: "2426",
                      name: "Almería",
                      abbreviation: "AL",
                      country_id: "1198"
                  },
                  {
                      id: "2427",
                      name: "Asturias",
                      abbreviation: "O",
                      country_id: "1198"
                  },
                  {
                      id: "2428",
                      name: "Ávila",
                      abbreviation: "AV",
                      country_id: "1198"
                  },
                  {
                      id: "2429",
                      name: "Badajoz",
                      abbreviation: "BA",
                      country_id: "1198"
                  },
                  {
                      id: "2430",
                      name: "Baleares",
                      abbreviation: "PM",
                      country_id: "1198"
                  },
                  {
                      id: "2431",
                      name: "Barcelona",
                      abbreviation: "B",
                      country_id: "1198"
                  },
                  {
                      id: "2432",
                      name: "Burgos",
                      abbreviation: "BU",
                      country_id: "1198"
                  },
                  {
                      id: "2433",
                      name: "Cáceres",
                      abbreviation: "CC",
                      country_id: "1198"
                  },
                  {
                      id: "2434",
                      name: "Cádiz",
                      abbreviation: "CA",
                      country_id: "1198"
                  },
                  {
                      id: "2435",
                      name: "Cantabria",
                      abbreviation: "S",
                      country_id: "1198"
                  },
                  {
                      id: "2436",
                      name: "Castellón",
                      abbreviation: "CS",
                      country_id: "1198"
                  },
                  {
                      id: "2437",
                      name: "Ciudad Real",
                      abbreviation: "CR",
                      country_id: "1198"
                  },
                  {
                      id: "2438",
                      name: "Cuenca",
                      abbreviation: "CU",
                      country_id: "1198"
                  },
                  {
                      id: "2439",
                      name: "Girona [Gerona]",
                      abbreviation: "GE",
                      country_id: "1198"
                  },
                  {
                      id: "2440",
                      name: "Granada",
                      abbreviation: "GR",
                      country_id: "1198"
                  },
                  {
                      id: "2441",
                      name: "Guadalajara",
                      abbreviation: "GU",
                      country_id: "1198"
                  },
                  {
                      id: "2442",
                      name: "Guipúzcoa",
                      abbreviation: "SS",
                      country_id: "1198"
                  },
                  {
                      id: "2443",
                      name: "Huelva",
                      abbreviation: "H",
                      country_id: "1198"
                  },
                  {
                      id: "2444",
                      name: "Huesca",
                      abbreviation: "HU",
                      country_id: "1198"
                  },
                  {
                      id: "2445",
                      name: "Jaén",
                      abbreviation: "J",
                      country_id: "1198"
                  },
                  {
                      id: "2446",
                      name: "La Coruña",
                      abbreviation: "C",
                      country_id: "1198"
                  },
                  {
                      id: "2447",
                      name: "La Rioja",
                      abbreviation: "LO",
                      country_id: "1198"
                  },
                  {
                      id: "2448",
                      name: "Las Palmas",
                      abbreviation: "GC",
                      country_id: "1198"
                  },
                  {
                      id: "2449",
                      name: "León",
                      abbreviation: "LE",
                      country_id: "1198"
                  },
                  {
                      id: "2450",
                      name: "Lleida [Lérida]",
                      abbreviation: "L",
                      country_id: "1198"
                  },
                  {
                      id: "2451",
                      name: "Lugo",
                      abbreviation: "LU",
                      country_id: "1198"
                  },
                  {
                      id: "2452",
                      name: "Madrid",
                      abbreviation: "M",
                      country_id: "1198"
                  },
                  {
                      id: "2453",
                      name: "Málaga",
                      abbreviation: "MA",
                      country_id: "1198"
                  },
                  {
                      id: "2454",
                      name: "Murcia",
                      abbreviation: "MU",
                      country_id: "1198"
                  },
                  {
                      id: "2455",
                      name: "Navarra",
                      abbreviation: "NA",
                      country_id: "1198"
                  },
                  {
                      id: "2456",
                      name: "Ourense",
                      abbreviation: "OR",
                      country_id: "1198"
                  },
                  {
                      id: "2457",
                      name: "Palencia",
                      abbreviation: "P",
                      country_id: "1198"
                  },
                  {
                      id: "2458",
                      name: "Pontevedra",
                      abbreviation: "PO",
                      country_id: "1198"
                  },
                  {
                      id: "2459",
                      name: "Salamanca",
                      abbreviation: "SA",
                      country_id: "1198"
                  },
                  {
                      id: "2460",
                      name: "Santa Cruz de Tenerife",
                      abbreviation: "TF",
                      country_id: "1198"
                  },
                  {
                      id: "2461",
                      name: "Segovia",
                      abbreviation: "SG",
                      country_id: "1198"
                  },
                  {
                      id: "2462",
                      name: "Sevilla",
                      abbreviation: "SE",
                      country_id: "1198"
                  },
                  {
                      id: "2463",
                      name: "Soria",
                      abbreviation: "SO",
                      country_id: "1198"
                  },
                  {
                      id: "2464",
                      name: "Tarragona",
                      abbreviation: "T",
                      country_id: "1198"
                  },
                  {
                      id: "2465",
                      name: "Teruel",
                      abbreviation: "TE",
                      country_id: "1198"
                  },
                  {
                      id: "2466",
                      name: "Valencia",
                      abbreviation: "V",
                      country_id: "1198"
                  },
                  {
                      id: "2467",
                      name: "Valladolid",
                      abbreviation: "VA",
                      country_id: "1198"
                  },
                  {
                      id: "2468",
                      name: "Vizcaya",
                      abbreviation: "BI",
                      country_id: "1198"
                  },
                  {
                      id: "2469",
                      name: "Zamora",
                      abbreviation: "ZA",
                      country_id: "1198"
                  },
                  {
                      id: "2470",
                      name: "Zaragoza",
                      abbreviation: "Z",
                      country_id: "1198"
                  },
                  {
                      id: "2471",
                      name: "Ceuta",
                      abbreviation: "CE",
                      country_id: "1198"
                  },
                  {
                      id: "2472",
                      name: "Melilla",
                      abbreviation: "ML",
                      country_id: "1198"
                  },
                  {
                      id: "2473",
                      name: "Addis Ababa",
                      abbreviation: "AA",
                      country_id: "1070"
                  },
                  {
                      id: "2474",
                      name: "Dire Dawa",
                      abbreviation: "DD",
                      country_id: "1070"
                  },
                  {
                      id: "2475",
                      name: "Afar",
                      abbreviation: "AF",
                      country_id: "1070"
                  },
                  {
                      id: "2476",
                      name: "Amara",
                      abbreviation: "AM",
                      country_id: "1070"
                  },
                  {
                      id: "2477",
                      name: "Benshangul-Gumaz",
                      abbreviation: "BE",
                      country_id: "1070"
                  },
                  {
                      id: "2478",
                      name: "Gambela Peoples",
                      abbreviation: "GA",
                      country_id: "1070"
                  },
                  {
                      id: "2479",
                      name: "Harari People",
                      abbreviation: "HA",
                      country_id: "1070"
                  },
                  {
                      id: "2480",
                      name: "Oromia",
                      abbreviation: "OR",
                      country_id: "1070"
                  },
                  {
                      id: "2481",
                      name: "Somali",
                      abbreviation: "SO",
                      country_id: "1070"
                  },
                  {
                      id: "2482",
                      name: "Southern Nations, Nationalities and Peoples",
                      abbreviation: "SN",
                      country_id: "1070"
                  },
                  {
                      id: "2483",
                      name: "Tigrai",
                      abbreviation: "TI",
                      country_id: "1070"
                  },
                  {
                      id: "2490",
                      name: "Eastern",
                      abbreviation: "E",
                      country_id: "1074"
                  },
                  {
                      id: "2491",
                      name: "Northern",
                      abbreviation: "N",
                      country_id: "1074"
                  },
                  {
                      id: "2492",
                      name: "Western",
                      abbreviation: "W",
                      country_id: "1074"
                  },
                  {
                      id: "2493",
                      name: "Rotuma",
                      abbreviation: "R",
                      country_id: "1074"
                  },
                  {
                      id: "2494",
                      name: "Chuuk",
                      abbreviation: "TRK",
                      country_id: "1141"
                  },
                  {
                      id: "2495",
                      name: "Kosrae",
                      abbreviation: "KSA",
                      country_id: "1141"
                  },
                  {
                      id: "2496",
                      name: "Pohnpei",
                      abbreviation: "PNI",
                      country_id: "1141"
                  },
                  {
                      id: "2497",
                      name: "Yap",
                      abbreviation: "YAP",
                      country_id: "1141"
                  },
                  {
                      id: "2498",
                      name: "Ain",
                      abbreviation: "01",
                      country_id: "1076"
                  },
                  {
                      id: "2499",
                      name: "Aisne",
                      abbreviation: "02",
                      country_id: "1076"
                  },
                  {
                      id: "2500",
                      name: "Allier",
                      abbreviation: "03",
                      country_id: "1076"
                  },
                  {
                      id: "2501",
                      name: "Alpes-de-Haute-Provence",
                      abbreviation: "04",
                      country_id: "1076"
                  },
                  {
                      id: "2502",
                      name: "Alpes-Maritimes",
                      abbreviation: "06",
                      country_id: "1076"
                  },
                  {
                      id: "2503",
                      name: "Ardèche",
                      abbreviation: "07",
                      country_id: "1076"
                  },
                  {
                      id: "2504",
                      name: "Ardennes",
                      abbreviation: "08",
                      country_id: "1076"
                  },
                  {
                      id: "2505",
                      name: "Ariège",
                      abbreviation: "09",
                      country_id: "1076"
                  },
                  {
                      id: "2506",
                      name: "Aube",
                      abbreviation: "10",
                      country_id: "1076"
                  },
                  {
                      id: "2507",
                      name: "Aude",
                      abbreviation: "11",
                      country_id: "1076"
                  },
                  {
                      id: "2508",
                      name: "Aveyron",
                      abbreviation: "12",
                      country_id: "1076"
                  },
                  {
                      id: "2509",
                      name: "Bas-Rhin",
                      abbreviation: "67",
                      country_id: "1076"
                  },
                  {
                      id: "2510",
                      name: "Bouches-du-Rhône",
                      abbreviation: "13",
                      country_id: "1076"
                  },
                  {
                      id: "2511",
                      name: "Calvados",
                      abbreviation: "14",
                      country_id: "1076"
                  },
                  {
                      id: "2512",
                      name: "Cantal",
                      abbreviation: "15",
                      country_id: "1076"
                  },
                  {
                      id: "2513",
                      name: "Charente",
                      abbreviation: "16",
                      country_id: "1076"
                  },
                  {
                      id: "2514",
                      name: "Charente-Maritime",
                      abbreviation: "17",
                      country_id: "1076"
                  },
                  {
                      id: "2515",
                      name: "Cher",
                      abbreviation: "18",
                      country_id: "1076"
                  },
                  {
                      id: "2516",
                      name: "Corrèze",
                      abbreviation: "19",
                      country_id: "1076"
                  },
                  {
                      id: "2517",
                      name: "Corse-du-Sud",
                      abbreviation: "20A",
                      country_id: "1076"
                  },
                  {
                      id: "2518",
                      name: "Côte-d'Or",
                      abbreviation: "21",
                      country_id: "1076"
                  },
                  {
                      id: "2519",
                      name: "Côtes-d'Armor",
                      abbreviation: "22",
                      country_id: "1076"
                  },
                  {
                      id: "2520",
                      name: "Creuse",
                      abbreviation: "23",
                      country_id: "1076"
                  },
                  {
                      id: "2521",
                      name: "Deux-Sèvres",
                      abbreviation: "79",
                      country_id: "1076"
                  },
                  {
                      id: "2522",
                      name: "Dordogne",
                      abbreviation: "24",
                      country_id: "1076"
                  },
                  {
                      id: "2523",
                      name: "Doubs",
                      abbreviation: "25",
                      country_id: "1076"
                  },
                  {
                      id: "2524",
                      name: "Drôme",
                      abbreviation: "26",
                      country_id: "1076"
                  },
                  {
                      id: "2525",
                      name: "Essonne",
                      abbreviation: "91",
                      country_id: "1076"
                  },
                  {
                      id: "2526",
                      name: "Eure",
                      abbreviation: "27",
                      country_id: "1076"
                  },
                  {
                      id: "2527",
                      name: "Eure-et-Loir",
                      abbreviation: "28",
                      country_id: "1076"
                  },
                  {
                      id: "2528",
                      name: "Finistère",
                      abbreviation: "29",
                      country_id: "1076"
                  },
                  {
                      id: "2529",
                      name: "Gard",
                      abbreviation: "30",
                      country_id: "1076"
                  },
                  {
                      id: "2530",
                      name: "Gers",
                      abbreviation: "32",
                      country_id: "1076"
                  },
                  {
                      id: "2531",
                      name: "Gironde",
                      abbreviation: "33",
                      country_id: "1076"
                  },
                  {
                      id: "2532",
                      name: "Haut-Rhin",
                      abbreviation: "68",
                      country_id: "1076"
                  },
                  {
                      id: "2533",
                      name: "Haute-Corse",
                      abbreviation: "20B",
                      country_id: "1076"
                  },
                  {
                      id: "2534",
                      name: "Haute-Garonne",
                      abbreviation: "31",
                      country_id: "1076"
                  },
                  {
                      id: "2535",
                      name: "Haute-Loire",
                      abbreviation: "43",
                      country_id: "1076"
                  },
                  {
                      id: "2536",
                      name: "Haute-Saône",
                      abbreviation: "70",
                      country_id: "1076"
                  },
                  {
                      id: "2537",
                      name: "Haute-Savoie",
                      abbreviation: "74",
                      country_id: "1076"
                  },
                  {
                      id: "2538",
                      name: "Haute-Vienne",
                      abbreviation: "87",
                      country_id: "1076"
                  },
                  {
                      id: "2539",
                      name: "Hautes-Alpes",
                      abbreviation: "05",
                      country_id: "1076"
                  },
                  {
                      id: "2540",
                      name: "Hautes-Pyrénées",
                      abbreviation: "65",
                      country_id: "1076"
                  },
                  {
                      id: "2541",
                      name: "Hauts-de-Seine",
                      abbreviation: "92",
                      country_id: "1076"
                  },
                  {
                      id: "2542",
                      name: "Hérault",
                      abbreviation: "34",
                      country_id: "1076"
                  },
                  {
                      id: "2543",
                      name: "Indre",
                      abbreviation: "36",
                      country_id: "1076"
                  },
                  {
                      id: "2544",
                      name: "Ille-et-Vilaine",
                      abbreviation: "35",
                      country_id: "1076"
                  },
                  {
                      id: "2545",
                      name: "Indre-et-Loire",
                      abbreviation: "37",
                      country_id: "1076"
                  },
                  {
                      id: "2546",
                      name: "Isère",
                      abbreviation: "38",
                      country_id: "1076"
                  },
                  {
                      id: "2547",
                      name: "Landes",
                      abbreviation: "40",
                      country_id: "1076"
                  },
                  {
                      id: "2548",
                      name: "Loir-et-Cher",
                      abbreviation: "41",
                      country_id: "1076"
                  },
                  {
                      id: "2549",
                      name: "Loire",
                      abbreviation: "42",
                      country_id: "1076"
                  },
                  {
                      id: "2550",
                      name: "Loire-Atlantique",
                      abbreviation: "44",
                      country_id: "1076"
                  },
                  {
                      id: "2551",
                      name: "Loiret",
                      abbreviation: "45",
                      country_id: "1076"
                  },
                  {
                      id: "2552",
                      name: "Lot",
                      abbreviation: "46",
                      country_id: "1076"
                  },
                  {
                      id: "2553",
                      name: "Lot-et-Garonne",
                      abbreviation: "47",
                      country_id: "1076"
                  },
                  {
                      id: "2554",
                      name: "Lozère",
                      abbreviation: "48",
                      country_id: "1076"
                  },
                  {
                      id: "2555",
                      name: "Maine-et-Loire",
                      abbreviation: "49",
                      country_id: "1076"
                  },
                  {
                      id: "2556",
                      name: "Manche",
                      abbreviation: "50",
                      country_id: "1076"
                  },
                  {
                      id: "2557",
                      name: "Marne",
                      abbreviation: "51",
                      country_id: "1076"
                  },
                  {
                      id: "2558",
                      name: "Mayenne",
                      abbreviation: "53",
                      country_id: "1076"
                  },
                  {
                      id: "2559",
                      name: "Meurthe-et-Moselle",
                      abbreviation: "54",
                      country_id: "1076"
                  },
                  {
                      id: "2560",
                      name: "Meuse",
                      abbreviation: "55",
                      country_id: "1076"
                  },
                  {
                      id: "2561",
                      name: "Morbihan",
                      abbreviation: "56",
                      country_id: "1076"
                  },
                  {
                      id: "2562",
                      name: "Moselle",
                      abbreviation: "57",
                      country_id: "1076"
                  },
                  {
                      id: "2563",
                      name: "Nièvre",
                      abbreviation: "58",
                      country_id: "1076"
                  },
                  {
                      id: "2564",
                      name: "Nord",
                      abbreviation: "59",
                      country_id: "1076"
                  },
                  {
                      id: "2565",
                      name: "Oise",
                      abbreviation: "60",
                      country_id: "1076"
                  },
                  {
                      id: "2566",
                      name: "Orne",
                      abbreviation: "61",
                      country_id: "1076"
                  },
                  {
                      id: "2567",
                      name: "Paris",
                      abbreviation: "75",
                      country_id: "1076"
                  },
                  {
                      id: "2568",
                      name: "Pas-de-Calais",
                      abbreviation: "62",
                      country_id: "1076"
                  },
                  {
                      id: "2569",
                      name: "Puy-de-Dôme",
                      abbreviation: "63",
                      country_id: "1076"
                  },
                  {
                      id: "2570",
                      name: "Pyrénées-Atlantiques",
                      abbreviation: "64",
                      country_id: "1076"
                  },
                  {
                      id: "2571",
                      name: "Pyrénées-Orientales",
                      abbreviation: "66",
                      country_id: "1076"
                  },
                  {
                      id: "2572",
                      name: "Rhône",
                      abbreviation: "69",
                      country_id: "1076"
                  },
                  {
                      id: "2573",
                      name: "Saône-et-Loire",
                      abbreviation: "71",
                      country_id: "1076"
                  },
                  {
                      id: "2574",
                      name: "Sarthe",
                      abbreviation: "72",
                      country_id: "1076"
                  },
                  {
                      id: "2575",
                      name: "Savoie",
                      abbreviation: "73",
                      country_id: "1076"
                  },
                  {
                      id: "2576",
                      name: "Seine-et-Marne",
                      abbreviation: "77",
                      country_id: "1076"
                  },
                  {
                      id: "2577",
                      name: "Seine-Maritime",
                      abbreviation: "76",
                      country_id: "1076"
                  },
                  {
                      id: "2578",
                      name: "Seine-Saint-Denis",
                      abbreviation: "93",
                      country_id: "1076"
                  },
                  {
                      id: "2579",
                      name: "Somme",
                      abbreviation: "80",
                      country_id: "1076"
                  },
                  {
                      id: "2580",
                      name: "Tarn",
                      abbreviation: "81",
                      country_id: "1076"
                  },
                  {
                      id: "2581",
                      name: "Tarn-et-Garonne",
                      abbreviation: "82",
                      country_id: "1076"
                  },
                  {
                      id: "2582",
                      name: "Val d'Oise",
                      abbreviation: "95",
                      country_id: "1076"
                  },
                  {
                      id: "2583",
                      name: "Territoire de Belfort",
                      abbreviation: "90",
                      country_id: "1076"
                  },
                  {
                      id: "2584",
                      name: "Val-de-Marne",
                      abbreviation: "94",
                      country_id: "1076"
                  },
                  {
                      id: "2585",
                      name: "Var",
                      abbreviation: "83",
                      country_id: "1076"
                  },
                  {
                      id: "2586",
                      name: "Vaucluse",
                      abbreviation: "84",
                      country_id: "1076"
                  },
                  {
                      id: "2587",
                      name: "Vendée",
                      abbreviation: "85",
                      country_id: "1076"
                  },
                  {
                      id: "2588",
                      name: "Vienne",
                      abbreviation: "86",
                      country_id: "1076"
                  },
                  {
                      id: "2589",
                      name: "Vosges",
                      abbreviation: "88",
                      country_id: "1076"
                  },
                  {
                      id: "2590",
                      name: "Yonne",
                      abbreviation: "89",
                      country_id: "1076"
                  },
                  {
                      id: "2591",
                      name: "Yvelines",
                      abbreviation: "78",
                      country_id: "1076"
                  },
                  {
                      id: "2592",
                      name: "Aberdeen City",
                      abbreviation: "ABE",
                      country_id: "1226"
                  },
                  {
                      id: "2593",
                      name: "Aberdeenshire",
                      abbreviation: "ABD",
                      country_id: "1226"
                  },
                  {
                      id: "2594",
                      name: "Angus",
                      abbreviation: "ANS",
                      country_id: "1226"
                  },
                  {
                      id: "2595",
                      name: "Co Antrim",
                      abbreviation: "ANT",
                      country_id: "1226"
                  },
                  {
                      id: "2597",
                      name: "Argyll and Bute",
                      abbreviation: "AGB",
                      country_id: "1226"
                  },
                  {
                      id: "2598",
                      name: "Co Armagh",
                      abbreviation: "ARM",
                      country_id: "1226"
                  },
                  {
                      id: "2606",
                      name: "Bedfordshire",
                      abbreviation: "BDF",
                      country_id: "1226"
                  },
                  {
                      id: "2612",
                      name: "Gwent",
                      abbreviation: "BGW",
                      country_id: "1226"
                  },
                  {
                      id: "2620",
                      name: "Bristol, City of",
                      abbreviation: "BST",
                      country_id: "1226"
                  },
                  {
                      id: "2622",
                      name: "Buckinghamshire",
                      abbreviation: "BKM",
                      country_id: "1226"
                  },
                  {
                      id: "2626",
                      name: "Cambridgeshire",
                      abbreviation: "CAM",
                      country_id: "1226"
                  },
                  {
                      id: "2634",
                      name: "Cheshire",
                      abbreviation: "CHS",
                      country_id: "1226"
                  },
                  {
                      id: "2635",
                      name: "Clackmannanshire",
                      abbreviation: "CLK",
                      country_id: "1226"
                  },
                  {
                      id: "2639",
                      name: "Cornwall",
                      abbreviation: "CON",
                      country_id: "1226"
                  },
                  {
                      id: "2643",
                      name: "Cumbria",
                      abbreviation: "CMA",
                      country_id: "1226"
                  },
                  {
                      id: "2647",
                      name: "Derbyshire",
                      abbreviation: "DBY",
                      country_id: "1226"
                  },
                  {
                      id: "2648",
                      name: "Co Londonderry",
                      abbreviation: "DRY",
                      country_id: "1226"
                  },
                  {
                      id: "2649",
                      name: "Devon",
                      abbreviation: "DEV",
                      country_id: "1226"
                  },
                  {
                      id: "2651",
                      name: "Dorset",
                      abbreviation: "DOR",
                      country_id: "1226"
                  },
                  {
                      id: "2652",
                      name: "Co Down",
                      abbreviation: "DOW",
                      country_id: "1226"
                  },
                  {
                      id: "2654",
                      name: "Dumfries and Galloway",
                      abbreviation: "DGY",
                      country_id: "1226"
                  },
                  {
                      id: "2655",
                      name: "Dundee City",
                      abbreviation: "DND",
                      country_id: "1226"
                  },
                  {
                      id: "2657",
                      name: "County Durham",
                      abbreviation: "DUR",
                      country_id: "1226"
                  },
                  {
                      id: "2659",
                      name: "East Ayrshire",
                      abbreviation: "EAY",
                      country_id: "1226"
                  },
                  {
                      id: "2660",
                      name: "East Dunbartonshire",
                      abbreviation: "EDU",
                      country_id: "1226"
                  },
                  {
                      id: "2661",
                      name: "East Lothian",
                      abbreviation: "ELN",
                      country_id: "1226"
                  },
                  {
                      id: "2662",
                      name: "East Renfrewshire",
                      abbreviation: "ERW",
                      country_id: "1226"
                  },
                  {
                      id: "2663",
                      name: "East Riding of Yorkshire",
                      abbreviation: "ERY",
                      country_id: "1226"
                  },
                  {
                      id: "2664",
                      name: "East Sussex",
                      abbreviation: "ESX",
                      country_id: "1226"
                  },
                  {
                      id: "2665",
                      name: "Edinburgh, City of",
                      abbreviation: "EDH",
                      country_id: "1226"
                  },
                  {
                      id: "2666",
                      name: "Na h-Eileanan Siar",
                      abbreviation: "ELS",
                      country_id: "1226"
                  },
                  {
                      id: "2668",
                      name: "Essex",
                      abbreviation: "ESS",
                      country_id: "1226"
                  },
                  {
                      id: "2669",
                      name: "Falkirk",
                      abbreviation: "FAL",
                      country_id: "1226"
                  },
                  {
                      id: "2670",
                      name: "Co Fermanagh",
                      abbreviation: "FER",
                      country_id: "1226"
                  },
                  {
                      id: "2671",
                      name: "Fife",
                      abbreviation: "FIF",
                      country_id: "1226"
                  },
                  {
                      id: "2674",
                      name: "Glasgow City",
                      abbreviation: "GLG",
                      country_id: "1226"
                  },
                  {
                      id: "2675",
                      name: "Gloucestershire",
                      abbreviation: "GLS",
                      country_id: "1226"
                  },
                  {
                      id: "2678",
                      name: "Gwynedd",
                      abbreviation: "GWN",
                      country_id: "1226"
                  },
                  {
                      id: "2682",
                      name: "Hampshire",
                      abbreviation: "HAM",
                      country_id: "1226"
                  },
                  {
                      id: "2687",
                      name: "Herefordshire",
                      abbreviation: "HEF",
                      country_id: "1226"
                  },
                  {
                      id: "2688",
                      name: "Hertfordshire",
                      abbreviation: "HRT",
                      country_id: "1226"
                  },
                  {
                      id: "2689",
                      name: "Highland",
                      abbreviation: "HED",
                      country_id: "1226"
                  },
                  {
                      id: "2692",
                      name: "Inverclyde",
                      abbreviation: "IVC",
                      country_id: "1226"
                  },
                  {
                      id: "2694",
                      name: "Isle of Wight",
                      abbreviation: "IOW",
                      country_id: "1226"
                  },
                  {
                      id: "2699",
                      name: "Kent",
                      abbreviation: "KEN",
                      country_id: "1226"
                  },
                  {
                      id: "2705",
                      name: "Lancashire",
                      abbreviation: "LAN",
                      country_id: "1226"
                  },
                  {
                      id: "2709",
                      name: "Leicestershire",
                      abbreviation: "LEC",
                      country_id: "1226"
                  },
                  {
                      id: "2712",
                      name: "Lincolnshire",
                      abbreviation: "LIN",
                      country_id: "1226"
                  },
                  {
                      id: "2723",
                      name: "Midlothian",
                      abbreviation: "MLN",
                      country_id: "1226"
                  },
                  {
                      id: "2726",
                      name: "Moray",
                      abbreviation: "MRY",
                      country_id: "1226"
                  },
                  {
                      id: "2734",
                      name: "Norfolk",
                      abbreviation: "NFK",
                      country_id: "1226"
                  },
                  {
                      id: "2735",
                      name: "North Ayrshire",
                      abbreviation: "NAY",
                      country_id: "1226"
                  },
                  {
                      id: "2738",
                      name: "North Lanarkshire",
                      abbreviation: "NLK",
                      country_id: "1226"
                  },
                  {
                      id: "2742",
                      name: "North Yorkshire",
                      abbreviation: "NYK",
                      country_id: "1226"
                  },
                  {
                      id: "2743",
                      name: "Northamptonshire",
                      abbreviation: "NTH",
                      country_id: "1226"
                  },
                  {
                      id: "2744",
                      name: "Northumberland",
                      abbreviation: "NBL",
                      country_id: "1226"
                  },
                  {
                      id: "2746",
                      name: "Nottinghamshire",
                      abbreviation: "NTT",
                      country_id: "1226"
                  },
                  {
                      id: "2747",
                      name: "Oldham",
                      abbreviation: "OLD",
                      country_id: "1226"
                  },
                  {
                      id: "2748",
                      name: "Omagh",
                      abbreviation: "OMH",
                      country_id: "1226"
                  },
                  {
                      id: "2749",
                      name: "Orkney Islands",
                      abbreviation: "ORR",
                      country_id: "1226"
                  },
                  {
                      id: "2750",
                      name: "Oxfordshire",
                      abbreviation: "OXF",
                      country_id: "1226"
                  },
                  {
                      id: "2752",
                      name: "Perth and Kinross",
                      abbreviation: "PKN",
                      country_id: "1226"
                  },
                  {
                      id: "2757",
                      name: "Powys",
                      abbreviation: "POW",
                      country_id: "1226"
                  },
                  {
                      id: "2761",
                      name: "Renfrewshire",
                      abbreviation: "RFW",
                      country_id: "1226"
                  },
                  {
                      id: "2766",
                      name: "Rutland",
                      abbreviation: "RUT",
                      country_id: "1226"
                  },
                  {
                      id: "2770",
                      name: "Scottish Borders",
                      abbreviation: "SCB",
                      country_id: "1226"
                  },
                  {
                      id: "2773",
                      name: "Shetland Islands",
                      abbreviation: "ZET",
                      country_id: "1226"
                  },
                  {
                      id: "2774",
                      name: "Shropshire",
                      abbreviation: "SHR",
                      country_id: "1226"
                  },
                  {
                      id: "2777",
                      name: "Somerset",
                      abbreviation: "SOM",
                      country_id: "1226"
                  },
                  {
                      id: "2778",
                      name: "South Ayrshire",
                      abbreviation: "SAY",
                      country_id: "1226"
                  },
                  {
                      id: "2779",
                      name: "South Gloucestershire",
                      abbreviation: "SGC",
                      country_id: "1226"
                  },
                  {
                      id: "2780",
                      name: "South Lanarkshire",
                      abbreviation: "SLK",
                      country_id: "1226"
                  },
                  {
                      id: "2785",
                      name: "Staffordshire",
                      abbreviation: "STS",
                      country_id: "1226"
                  },
                  {
                      id: "2786",
                      name: "Stirling",
                      abbreviation: "STG",
                      country_id: "1226"
                  },
                  {
                      id: "2791",
                      name: "Suffolk",
                      abbreviation: "SFK",
                      country_id: "1226"
                  },
                  {
                      id: "2793",
                      name: "Surrey",
                      abbreviation: "SRY",
                      country_id: "1226"
                  },
                  {
                      id: "2804",
                      name: "Mid Glamorgan",
                      abbreviation: "VGL",
                      country_id: "1226"
                  },
                  {
                      id: "2811",
                      name: "Warwickshire",
                      abbreviation: "WAR",
                      country_id: "1226"
                  },
                  {
                      id: "2813",
                      name: "West Dunbartonshire",
                      abbreviation: "WDU",
                      country_id: "1226"
                  },
                  {
                      id: "2814",
                      name: "West Lothian",
                      abbreviation: "WLN",
                      country_id: "1226"
                  },
                  {
                      id: "2815",
                      name: "West Sussex",
                      abbreviation: "WSX",
                      country_id: "1226"
                  },
                  {
                      id: "2818",
                      name: "Wiltshire",
                      abbreviation: "WIL",
                      country_id: "1226"
                  },
                  {
                      id: "2823",
                      name: "Worcestershire",
                      abbreviation: "WOR",
                      country_id: "1226"
                  },
                  {
                      id: "2826",
                      name: "Ashanti",
                      abbreviation: "AH",
                      country_id: "1083"
                  },
                  {
                      id: "2827",
                      name: "Brong-Ahafo",
                      abbreviation: "BA",
                      country_id: "1083"
                  },
                  {
                      id: "2828",
                      name: "Greater Accra",
                      abbreviation: "AA",
                      country_id: "1083"
                  },
                  {
                      id: "2829",
                      name: "Upper East",
                      abbreviation: "UE",
                      country_id: "1083"
                  },
                  {
                      id: "2830",
                      name: "Upper West",
                      abbreviation: "UW",
                      country_id: "1083"
                  },
                  {
                      id: "2831",
                      name: "Volta",
                      abbreviation: "TV",
                      country_id: "1083"
                  },
                  {
                      id: "2832",
                      name: "Banjul",
                      abbreviation: "B",
                      country_id: "1213"
                  },
                  {
                      id: "2833",
                      name: "Lower River",
                      abbreviation: "L",
                      country_id: "1213"
                  },
                  {
                      id: "2834",
                      name: "MacCarthy Island",
                      abbreviation: "M",
                      country_id: "1213"
                  },
                  {
                      id: "2835",
                      name: "North Bank",
                      abbreviation: "N",
                      country_id: "1213"
                  },
                  {
                      id: "2836",
                      name: "Upper River",
                      abbreviation: "U",
                      country_id: "1213"
                  },
                  {
                      id: "2837",
                      name: "Beyla",
                      abbreviation: "BE",
                      country_id: "1091"
                  },
                  {
                      id: "2838",
                      name: "Boffa",
                      abbreviation: "BF",
                      country_id: "1091"
                  },
                  {
                      id: "2839",
                      name: "Boke",
                      abbreviation: "BK",
                      country_id: "1091"
                  },
                  {
                      id: "2840",
                      name: "Coyah",
                      abbreviation: "CO",
                      country_id: "1091"
                  },
                  {
                      id: "2841",
                      name: "Dabola",
                      abbreviation: "DB",
                      country_id: "1091"
                  },
                  {
                      id: "2842",
                      name: "Dalaba",
                      abbreviation: "DL",
                      country_id: "1091"
                  },
                  {
                      id: "2843",
                      name: "Dinguiraye",
                      abbreviation: "DI",
                      country_id: "1091"
                  },
                  {
                      id: "2844",
                      name: "Dubreka",
                      abbreviation: "DU",
                      country_id: "1091"
                  },
                  {
                      id: "2845",
                      name: "Faranah",
                      abbreviation: "FA",
                      country_id: "1091"
                  },
                  {
                      id: "2846",
                      name: "Forecariah",
                      abbreviation: "FO",
                      country_id: "1091"
                  },
                  {
                      id: "2847",
                      name: "Fria",
                      abbreviation: "FR",
                      country_id: "1091"
                  },
                  {
                      id: "2848",
                      name: "Gaoual",
                      abbreviation: "GA",
                      country_id: "1091"
                  },
                  {
                      id: "2849",
                      name: "Guekedou",
                      abbreviation: "GU",
                      country_id: "1091"
                  },
                  {
                      id: "2850",
                      name: "Kankan",
                      abbreviation: "KA",
                      country_id: "1091"
                  },
                  {
                      id: "2851",
                      name: "Kerouane",
                      abbreviation: "KE",
                      country_id: "1091"
                  },
                  {
                      id: "2852",
                      name: "Kindia",
                      abbreviation: "KD",
                      country_id: "1091"
                  },
                  {
                      id: "2853",
                      name: "Kissidougou",
                      abbreviation: "KS",
                      country_id: "1091"
                  },
                  {
                      id: "2854",
                      name: "Koubia",
                      abbreviation: "KB",
                      country_id: "1091"
                  },
                  {
                      id: "2855",
                      name: "Koundara",
                      abbreviation: "KN",
                      country_id: "1091"
                  },
                  {
                      id: "2856",
                      name: "Kouroussa",
                      abbreviation: "KO",
                      country_id: "1091"
                  },
                  {
                      id: "2857",
                      name: "Labe",
                      abbreviation: "LA",
                      country_id: "1091"
                  },
                  {
                      id: "2858",
                      name: "Lelouma",
                      abbreviation: "LE",
                      country_id: "1091"
                  },
                  {
                      id: "2859",
                      name: "Lola",
                      abbreviation: "LO",
                      country_id: "1091"
                  },
                  {
                      id: "2860",
                      name: "Macenta",
                      abbreviation: "MC",
                      country_id: "1091"
                  },
                  {
                      id: "2861",
                      name: "Mali",
                      abbreviation: "ML",
                      country_id: "1091"
                  },
                  {
                      id: "2862",
                      name: "Mamou",
                      abbreviation: "MM",
                      country_id: "1091"
                  },
                  {
                      id: "2863",
                      name: "Mandiana",
                      abbreviation: "MD",
                      country_id: "1091"
                  },
                  {
                      id: "2864",
                      name: "Nzerekore",
                      abbreviation: "NZ",
                      country_id: "1091"
                  },
                  {
                      id: "2865",
                      name: "Pita",
                      abbreviation: "PI",
                      country_id: "1091"
                  },
                  {
                      id: "2866",
                      name: "Siguiri",
                      abbreviation: "SI",
                      country_id: "1091"
                  },
                  {
                      id: "2867",
                      name: "Telimele",
                      abbreviation: "TE",
                      country_id: "1091"
                  },
                  {
                      id: "2868",
                      name: "Tougue",
                      abbreviation: "TO",
                      country_id: "1091"
                  },
                  {
                      id: "2869",
                      name: "Yomou",
                      abbreviation: "YO",
                      country_id: "1091"
                  },
                  {
                      id: "2870",
                      name: "Region Continental",
                      abbreviation: "C",
                      country_id: "1067"
                  },
                  {
                      id: "2871",
                      name: "Region Insular",
                      abbreviation: "I",
                      country_id: "1067"
                  },
                  {
                      id: "2872",
                      name: "Annobon",
                      abbreviation: "AN",
                      country_id: "1067"
                  },
                  {
                      id: "2873",
                      name: "Bioko Norte",
                      abbreviation: "BN",
                      country_id: "1067"
                  },
                  {
                      id: "2874",
                      name: "Bioko Sur",
                      abbreviation: "BS",
                      country_id: "1067"
                  },
                  {
                      id: "2875",
                      name: "Centro Sur",
                      abbreviation: "CS",
                      country_id: "1067"
                  },
                  {
                      id: "2876",
                      name: "Kie-Ntem",
                      abbreviation: "KN",
                      country_id: "1067"
                  },
                  {
                      id: "2877",
                      name: "Litoral",
                      abbreviation: "LI",
                      country_id: "1067"
                  },
                  {
                      id: "2878",
                      name: "Wele-Nzas",
                      abbreviation: "WN",
                      country_id: "1067"
                  },
                  {
                      id: "2879",
                      name: "Achaïa",
                      abbreviation: "13",
                      country_id: "1085"
                  },
                  {
                      id: "2880",
                      name: "Aitolia-Akarnania",
                      abbreviation: "01",
                      country_id: "1085"
                  },
                  {
                      id: "2881",
                      name: "Argolis",
                      abbreviation: "11",
                      country_id: "1085"
                  },
                  {
                      id: "2882",
                      name: "Arkadia",
                      abbreviation: "12",
                      country_id: "1085"
                  },
                  {
                      id: "2883",
                      name: "Arta",
                      abbreviation: "31",
                      country_id: "1085"
                  },
                  {
                      id: "2884",
                      name: "Attiki",
                      abbreviation: "A1",
                      country_id: "1085"
                  },
                  {
                      id: "2885",
                      name: "Chalkidiki",
                      abbreviation: "64",
                      country_id: "1085"
                  },
                  {
                      id: "2886",
                      name: "Chania",
                      abbreviation: "94",
                      country_id: "1085"
                  },
                  {
                      id: "2887",
                      name: "Chios",
                      abbreviation: "85",
                      country_id: "1085"
                  },
                  {
                      id: "2888",
                      name: "Dodekanisos",
                      abbreviation: "81",
                      country_id: "1085"
                  },
                  {
                      id: "2889",
                      name: "Drama",
                      abbreviation: "52",
                      country_id: "1085"
                  },
                  {
                      id: "2890",
                      name: "Evros",
                      abbreviation: "71",
                      country_id: "1085"
                  },
                  {
                      id: "2891",
                      name: "Evrytania",
                      abbreviation: "05",
                      country_id: "1085"
                  },
                  {
                      id: "2892",
                      name: "Evvoia",
                      abbreviation: "04",
                      country_id: "1085"
                  },
                  {
                      id: "2893",
                      name: "Florina",
                      abbreviation: "63",
                      country_id: "1085"
                  },
                  {
                      id: "2894",
                      name: "Fokis",
                      abbreviation: "07",
                      country_id: "1085"
                  },
                  {
                      id: "2895",
                      name: "Fthiotis",
                      abbreviation: "06",
                      country_id: "1085"
                  },
                  {
                      id: "2896",
                      name: "Grevena",
                      abbreviation: "51",
                      country_id: "1085"
                  },
                  {
                      id: "2897",
                      name: "Ileia",
                      abbreviation: "14",
                      country_id: "1085"
                  },
                  {
                      id: "2898",
                      name: "Imathia",
                      abbreviation: "53",
                      country_id: "1085"
                  },
                  {
                      id: "2899",
                      name: "Ioannina",
                      abbreviation: "33",
                      country_id: "1085"
                  },
                  {
                      id: "2900",
                      name: "Irakleion",
                      abbreviation: "91",
                      country_id: "1085"
                  },
                  {
                      id: "2901",
                      name: "Karditsa",
                      abbreviation: "41",
                      country_id: "1085"
                  },
                  {
                      id: "2902",
                      name: "Kastoria",
                      abbreviation: "56",
                      country_id: "1085"
                  },
                  {
                      id: "2903",
                      name: "Kavalla",
                      abbreviation: "55",
                      country_id: "1085"
                  },
                  {
                      id: "2904",
                      name: "Kefallinia",
                      abbreviation: "23",
                      country_id: "1085"
                  },
                  {
                      id: "2905",
                      name: "Kerkyra",
                      abbreviation: "22",
                      country_id: "1085"
                  },
                  {
                      id: "2906",
                      name: "Kilkis",
                      abbreviation: "57",
                      country_id: "1085"
                  },
                  {
                      id: "2907",
                      name: "Korinthia",
                      abbreviation: "15",
                      country_id: "1085"
                  },
                  {
                      id: "2908",
                      name: "Kozani",
                      abbreviation: "58",
                      country_id: "1085"
                  },
                  {
                      id: "2909",
                      name: "Kyklades",
                      abbreviation: "82",
                      country_id: "1085"
                  },
                  {
                      id: "2910",
                      name: "Lakonia",
                      abbreviation: "16",
                      country_id: "1085"
                  },
                  {
                      id: "2911",
                      name: "Larisa",
                      abbreviation: "42",
                      country_id: "1085"
                  },
                  {
                      id: "2912",
                      name: "Lasithion",
                      abbreviation: "92",
                      country_id: "1085"
                  },
                  {
                      id: "2913",
                      name: "Lefkas",
                      abbreviation: "24",
                      country_id: "1085"
                  },
                  {
                      id: "2914",
                      name: "Lesvos",
                      abbreviation: "83",
                      country_id: "1085"
                  },
                  {
                      id: "2915",
                      name: "Magnisia",
                      abbreviation: "43",
                      country_id: "1085"
                  },
                  {
                      id: "2916",
                      name: "Messinia",
                      abbreviation: "17",
                      country_id: "1085"
                  },
                  {
                      id: "2917",
                      name: "Pella",
                      abbreviation: "59",
                      country_id: "1085"
                  },
                  {
                      id: "2918",
                      name: "Preveza",
                      abbreviation: "34",
                      country_id: "1085"
                  },
                  {
                      id: "2919",
                      name: "Rethymnon",
                      abbreviation: "93",
                      country_id: "1085"
                  },
                  {
                      id: "2920",
                      name: "Rodopi",
                      abbreviation: "73",
                      country_id: "1085"
                  },
                  {
                      id: "2921",
                      name: "Samos",
                      abbreviation: "84",
                      country_id: "1085"
                  },
                  {
                      id: "2922",
                      name: "Serrai",
                      abbreviation: "62",
                      country_id: "1085"
                  },
                  {
                      id: "2923",
                      name: "Thesprotia",
                      abbreviation: "32",
                      country_id: "1085"
                  },
                  {
                      id: "2924",
                      name: "Thessaloniki",
                      abbreviation: "54",
                      country_id: "1085"
                  },
                  {
                      id: "2925",
                      name: "Trikala",
                      abbreviation: "44",
                      country_id: "1085"
                  },
                  {
                      id: "2926",
                      name: "Voiotia",
                      abbreviation: "03",
                      country_id: "1085"
                  },
                  {
                      id: "2927",
                      name: "Xanthi",
                      abbreviation: "72",
                      country_id: "1085"
                  },
                  {
                      id: "2928",
                      name: "Zakynthos",
                      abbreviation: "21",
                      country_id: "1085"
                  },
                  {
                      id: "2929",
                      name: "Agio Oros",
                      abbreviation: "69",
                      country_id: "1085"
                  },
                  {
                      id: "2930",
                      name: "Alta Verapaz",
                      abbreviation: "AV",
                      country_id: "1090"
                  },
                  {
                      id: "2931",
                      name: "Baja Verapaz",
                      abbreviation: "BV",
                      country_id: "1090"
                  },
                  {
                      id: "2932",
                      name: "Chimaltenango",
                      abbreviation: "CM",
                      country_id: "1090"
                  },
                  {
                      id: "2933",
                      name: "Chiquimula",
                      abbreviation: "CQ",
                      country_id: "1090"
                  },
                  {
                      id: "2934",
                      name: "El Progreso",
                      abbreviation: "PR",
                      country_id: "1090"
                  },
                  {
                      id: "2935",
                      name: "Escuintla",
                      abbreviation: "ES",
                      country_id: "1090"
                  },
                  {
                      id: "2936",
                      name: "Guatemala",
                      abbreviation: "GU",
                      country_id: "1090"
                  },
                  {
                      id: "2937",
                      name: "Huehuetenango",
                      abbreviation: "HU",
                      country_id: "1090"
                  },
                  {
                      id: "2938",
                      name: "Izabal",
                      abbreviation: "IZ",
                      country_id: "1090"
                  },
                  {
                      id: "2939",
                      name: "Jalapa",
                      abbreviation: "JA",
                      country_id: "1090"
                  },
                  {
                      id: "2940",
                      name: "Jutiapa",
                      abbreviation: "JU",
                      country_id: "1090"
                  },
                  {
                      id: "2941",
                      name: "Peten",
                      abbreviation: "PE",
                      country_id: "1090"
                  },
                  {
                      id: "2942",
                      name: "Quetzaltenango",
                      abbreviation: "QZ",
                      country_id: "1090"
                  },
                  {
                      id: "2943",
                      name: "Quiche",
                      abbreviation: "QC",
                      country_id: "1090"
                  },
                  {
                      id: "2944",
                      name: "Retalhuleu",
                      abbreviation: "RE",
                      country_id: "1090"
                  },
                  {
                      id: "2945",
                      name: "Sacatepequez",
                      abbreviation: "SA",
                      country_id: "1090"
                  },
                  {
                      id: "2946",
                      name: "San Marcos",
                      abbreviation: "SM",
                      country_id: "1090"
                  },
                  {
                      id: "2947",
                      name: "Santa Rosa",
                      abbreviation: "SR",
                      country_id: "1090"
                  },
                  {
                      id: "2948",
                      name: "Sololá",
                      abbreviation: "SO",
                      country_id: "1090"
                  },
                  {
                      id: "2949",
                      name: "Suchitepequez",
                      abbreviation: "SU",
                      country_id: "1090"
                  },
                  {
                      id: "2950",
                      name: "Totonicapan",
                      abbreviation: "TO",
                      country_id: "1090"
                  },
                  {
                      id: "2951",
                      name: "Zacapa",
                      abbreviation: "ZA",
                      country_id: "1090"
                  },
                  {
                      id: "2952",
                      name: "Bissau",
                      abbreviation: "BS",
                      country_id: "1092"
                  },
                  {
                      id: "2953",
                      name: "Bafata",
                      abbreviation: "BA",
                      country_id: "1092"
                  },
                  {
                      id: "2954",
                      name: "Biombo",
                      abbreviation: "BM",
                      country_id: "1092"
                  },
                  {
                      id: "2955",
                      name: "Bolama",
                      abbreviation: "BL",
                      country_id: "1092"
                  },
                  {
                      id: "2956",
                      name: "Cacheu",
                      abbreviation: "CA",
                      country_id: "1092"
                  },
                  {
                      id: "2957",
                      name: "Gabu",
                      abbreviation: "GA",
                      country_id: "1092"
                  },
                  {
                      id: "2958",
                      name: "Oio",
                      abbreviation: "OI",
                      country_id: "1092"
                  },
                  {
                      id: "2959",
                      name: "Quloara",
                      abbreviation: "QU",
                      country_id: "1092"
                  },
                  {
                      id: "2960",
                      name: "Tombali S",
                      abbreviation: "TO",
                      country_id: "1092"
                  },
                  {
                      id: "2961",
                      name: "Barima-Waini",
                      abbreviation: "BA",
                      country_id: "1093"
                  },
                  {
                      id: "2962",
                      name: "Cuyuni-Mazaruni",
                      abbreviation: "CU",
                      country_id: "1093"
                  },
                  {
                      id: "2963",
                      name: "Demerara-Mahaica",
                      abbreviation: "DE",
                      country_id: "1093"
                  },
                  {
                      id: "2964",
                      name: "East Berbice-Corentyne",
                      abbreviation: "EB",
                      country_id: "1093"
                  },
                  {
                      id: "2965",
                      name: "Essequibo Islands-West Demerara",
                      abbreviation: "ES",
                      country_id: "1093"
                  },
                  {
                      id: "2966",
                      name: "Mahaica-Berbice",
                      abbreviation: "MA",
                      country_id: "1093"
                  },
                  {
                      id: "2967",
                      name: "Pomeroon-Supenaam",
                      abbreviation: "PM",
                      country_id: "1093"
                  },
                  {
                      id: "2968",
                      name: "Potaro-Siparuni",
                      abbreviation: "PT",
                      country_id: "1093"
                  },
                  {
                      id: "2969",
                      name: "Upper Demerara-Berbice",
                      abbreviation: "UD",
                      country_id: "1093"
                  },
                  {
                      id: "2970",
                      name: "Upper Takutu-Upper Essequibo",
                      abbreviation: "UT",
                      country_id: "1093"
                  },
                  {
                      id: "2971",
                      name: "Atlantida",
                      abbreviation: "AT",
                      country_id: "1097"
                  },
                  {
                      id: "2972",
                      name: "Colon",
                      abbreviation: "CL",
                      country_id: "1097"
                  },
                  {
                      id: "2973",
                      name: "Comayagua",
                      abbreviation: "CM",
                      country_id: "1097"
                  },
                  {
                      id: "2974",
                      name: "Copan",
                      abbreviation: "CP",
                      country_id: "1097"
                  },
                  {
                      id: "2975",
                      name: "Cortes",
                      abbreviation: "CR",
                      country_id: "1097"
                  },
                  {
                      id: "2976",
                      name: "Choluteca",
                      abbreviation: "CH",
                      country_id: "1097"
                  },
                  {
                      id: "2977",
                      name: "El Paraiso",
                      abbreviation: "EP",
                      country_id: "1097"
                  },
                  {
                      id: "2978",
                      name: "Francisco Morazan",
                      abbreviation: "FM",
                      country_id: "1097"
                  },
                  {
                      id: "2979",
                      name: "Gracias a Dios",
                      abbreviation: "GD",
                      country_id: "1097"
                  },
                  {
                      id: "2980",
                      name: "Intibuca",
                      abbreviation: "IN",
                      country_id: "1097"
                  },
                  {
                      id: "2981",
                      name: "Islas de la Bahia",
                      abbreviation: "IB",
                      country_id: "1097"
                  },
                  {
                      id: "2982",
                      name: "Lempira",
                      abbreviation: "LE",
                      country_id: "1097"
                  },
                  {
                      id: "2983",
                      name: "Ocotepeque",
                      abbreviation: "OC",
                      country_id: "1097"
                  },
                  {
                      id: "2984",
                      name: "Olancho",
                      abbreviation: "OL",
                      country_id: "1097"
                  },
                  {
                      id: "2985",
                      name: "Santa Barbara",
                      abbreviation: "SB",
                      country_id: "1097"
                  },
                  {
                      id: "2986",
                      name: "Valle",
                      abbreviation: "VA",
                      country_id: "1097"
                  },
                  {
                      id: "2987",
                      name: "Yoro",
                      abbreviation: "YO",
                      country_id: "1097"
                  },
                  {
                      id: "2988",
                      name: "Bjelovarsko-bilogorska zupanija",
                      abbreviation: "07",
                      country_id: "1055"
                  },
                  {
                      id: "2989",
                      name: "Brodsko-posavska zupanija",
                      abbreviation: "12",
                      country_id: "1055"
                  },
                  {
                      id: "2990",
                      name: "Dubrovacko-neretvanska zupanija",
                      abbreviation: "19",
                      country_id: "1055"
                  },
                  {
                      id: "2991",
                      name: "Istarska zupanija",
                      abbreviation: "18",
                      country_id: "1055"
                  },
                  {
                      id: "2992",
                      name: "Karlovacka zupanija",
                      abbreviation: "04",
                      country_id: "1055"
                  },
                  {
                      id: "2993",
                      name: "Koprivnickco-krizevacka zupanija",
                      abbreviation: "06",
                      country_id: "1055"
                  },
                  {
                      id: "2994",
                      name: "Krapinako-zagorska zupanija",
                      abbreviation: "02",
                      country_id: "1055"
                  },
                  {
                      id: "2995",
                      name: "Licko-senjska zupanija",
                      abbreviation: "09",
                      country_id: "1055"
                  },
                  {
                      id: "2996",
                      name: "Medimurska zupanija",
                      abbreviation: "20",
                      country_id: "1055"
                  },
                  {
                      id: "2997",
                      name: "Osjecko-baranjska zupanija",
                      abbreviation: "14",
                      country_id: "1055"
                  },
                  {
                      id: "2998",
                      name: "Pozesko-slavonska zupanija",
                      abbreviation: "11",
                      country_id: "1055"
                  },
                  {
                      id: "2999",
                      name: "Primorsko-goranska zupanija",
                      abbreviation: "08",
                      country_id: "1055"
                  },
                  {
                      id: "3000",
                      name: "Sisacko-moelavacka Iupanija",
                      abbreviation: "03",
                      country_id: "1055"
                  },
                  {
                      id: "3001",
                      name: "Splitako-dalmatinska zupanija",
                      abbreviation: "17",
                      country_id: "1055"
                  },
                  {
                      id: "3002",
                      name: "Sibenako-kninska zupanija",
                      abbreviation: "15",
                      country_id: "1055"
                  },
                  {
                      id: "3003",
                      name: "Varaidinska zupanija",
                      abbreviation: "05",
                      country_id: "1055"
                  },
                  {
                      id: "3004",
                      name: "VirovitiEko-podravska zupanija",
                      abbreviation: "10",
                      country_id: "1055"
                  },
                  {
                      id: "3005",
                      name: "VuRovarako-srijemska zupanija",
                      abbreviation: "16",
                      country_id: "1055"
                  },
                  {
                      id: "3006",
                      name: "Zadaraka",
                      abbreviation: "13",
                      country_id: "1055"
                  },
                  {
                      id: "3007",
                      name: "Zagrebacka zupanija",
                      abbreviation: "01",
                      country_id: "1055"
                  },
                  {
                      id: "3008",
                      name: "Grande-Anse",
                      abbreviation: "GA",
                      country_id: "1094"
                  },
                  {
                      id: "3009",
                      name: "Nord-Est",
                      abbreviation: "NE",
                      country_id: "1094"
                  },
                  {
                      id: "3010",
                      name: "Nord-Ouest",
                      abbreviation: "NO",
                      country_id: "1094"
                  },
                  {
                      id: "3011",
                      name: "Ouest",
                      abbreviation: "OU",
                      country_id: "1094"
                  },
                  {
                      id: "3012",
                      name: "Sud",
                      abbreviation: "SD",
                      country_id: "1094"
                  },
                  {
                      id: "3013",
                      name: "Sud-Est",
                      abbreviation: "SE",
                      country_id: "1094"
                  },
                  {
                      id: "3014",
                      name: "Budapest",
                      abbreviation: "BU",
                      country_id: "1099"
                  },
                  {
                      id: "3015",
                      name: "Bács-Kiskun",
                      abbreviation: "BK",
                      country_id: "1099"
                  },
                  {
                      id: "3016",
                      name: "Baranya",
                      abbreviation: "BA",
                      country_id: "1099"
                  },
                  {
                      id: "3017",
                      name: "Békés",
                      abbreviation: "BE",
                      country_id: "1099"
                  },
                  {
                      id: "3018",
                      name: "Borsod-Abaúj-Zemplén",
                      abbreviation: "BZ",
                      country_id: "1099"
                  },
                  {
                      id: "3019",
                      name: "Csongrád",
                      abbreviation: "CS",
                      country_id: "1099"
                  },
                  {
                      id: "3020",
                      name: "Fejér",
                      abbreviation: "FE",
                      country_id: "1099"
                  },
                  {
                      id: "3021",
                      name: "Győr-Moson-Sopron",
                      abbreviation: "GS",
                      country_id: "1099"
                  },
                  {
                      id: "3022",
                      name: "Hajdu-Bihar",
                      abbreviation: "HB",
                      country_id: "1099"
                  },
                  {
                      id: "3023",
                      name: "Heves",
                      abbreviation: "HE",
                      country_id: "1099"
                  },
                  {
                      id: "3024",
                      name: "Jász-Nagykun-Szolnok",
                      abbreviation: "JN",
                      country_id: "1099"
                  },
                  {
                      id: "3025",
                      name: "Komárom-Esztergom",
                      abbreviation: "KE",
                      country_id: "1099"
                  },
                  {
                      id: "3026",
                      name: "Nográd",
                      abbreviation: "NO",
                      country_id: "1099"
                  },
                  {
                      id: "3027",
                      name: "Pest",
                      abbreviation: "PE",
                      country_id: "1099"
                  },
                  {
                      id: "3028",
                      name: "Somogy",
                      abbreviation: "SO",
                      country_id: "1099"
                  },
                  {
                      id: "3029",
                      name: "Szabolcs-Szatmár-Bereg",
                      abbreviation: "SZ",
                      country_id: "1099"
                  },
                  {
                      id: "3030",
                      name: "Tolna",
                      abbreviation: "TO",
                      country_id: "1099"
                  },
                  {
                      id: "3031",
                      name: "Vas",
                      abbreviation: "VA",
                      country_id: "1099"
                  },
                  {
                      id: "3032",
                      name: "Veszprém",
                      abbreviation: "VE",
                      country_id: "1099"
                  },
                  {
                      id: "3033",
                      name: "Zala",
                      abbreviation: "ZA",
                      country_id: "1099"
                  },
                  {
                      id: "3034",
                      name: "Békéscsaba",
                      abbreviation: "BC",
                      country_id: "1099"
                  },
                  {
                      id: "3035",
                      name: "Debrecen",
                      abbreviation: "DE",
                      country_id: "1099"
                  },
                  {
                      id: "3036",
                      name: "Dunaújváros",
                      abbreviation: "DU",
                      country_id: "1099"
                  },
                  {
                      id: "3037",
                      name: "Eger",
                      abbreviation: "EG",
                      country_id: "1099"
                  },
                  {
                      id: "3038",
                      name: "Győr",
                      abbreviation: "GY",
                      country_id: "1099"
                  },
                  {
                      id: "3039",
                      name: "Hódmezővásárhely",
                      abbreviation: "HV",
                      country_id: "1099"
                  },
                  {
                      id: "3040",
                      name: "Kaposvár",
                      abbreviation: "KV",
                      country_id: "1099"
                  },
                  {
                      id: "3041",
                      name: "Kecskemét",
                      abbreviation: "KM",
                      country_id: "1099"
                  },
                  {
                      id: "3042",
                      name: "Miskolc",
                      abbreviation: "MI",
                      country_id: "1099"
                  },
                  {
                      id: "3043",
                      name: "Nagykanizsa",
                      abbreviation: "NK",
                      country_id: "1099"
                  },
                  {
                      id: "3044",
                      name: "Nyiregyháza",
                      abbreviation: "NY",
                      country_id: "1099"
                  },
                  {
                      id: "3045",
                      name: "Pécs",
                      abbreviation: "PS",
                      country_id: "1099"
                  },
                  {
                      id: "3046",
                      name: "Salgótarján",
                      abbreviation: "ST",
                      country_id: "1099"
                  },
                  {
                      id: "3047",
                      name: "Sopron",
                      abbreviation: "SN",
                      country_id: "1099"
                  },
                  {
                      id: "3048",
                      name: "Szeged",
                      abbreviation: "SD",
                      country_id: "1099"
                  },
                  {
                      id: "3049",
                      name: "Székesfehérvár",
                      abbreviation: "SF",
                      country_id: "1099"
                  },
                  {
                      id: "3050",
                      name: "Szekszárd",
                      abbreviation: "SS",
                      country_id: "1099"
                  },
                  {
                      id: "3051",
                      name: "Szolnok",
                      abbreviation: "SK",
                      country_id: "1099"
                  },
                  {
                      id: "3052",
                      name: "Szombathely",
                      abbreviation: "SH",
                      country_id: "1099"
                  },
                  {
                      id: "3053",
                      name: "Tatabánya",
                      abbreviation: "TB",
                      country_id: "1099"
                  },
                  {
                      id: "3054",
                      name: "Zalaegerszeg",
                      abbreviation: "ZE",
                      country_id: "1099"
                  },
                  {
                      id: "3055",
                      name: "Bali",
                      abbreviation: "BA",
                      country_id: "1102"
                  },
                  {
                      id: "3056",
                      name: "Kepulauan Bangka Belitung",
                      abbreviation: "BB",
                      country_id: "1102"
                  },
                  {
                      id: "3057",
                      name: "Banten",
                      abbreviation: "BT",
                      country_id: "1102"
                  },
                  {
                      id: "3058",
                      name: "Bengkulu",
                      abbreviation: "BE",
                      country_id: "1102"
                  },
                  {
                      id: "3059",
                      name: "Gorontalo",
                      abbreviation: "GO",
                      country_id: "1102"
                  },
                  {
                      id: "3060",
                      name: "Papua Barat",
                      abbreviation: "PB",
                      country_id: "1102"
                  },
                  {
                      id: "3061",
                      name: "Jambi",
                      abbreviation: "JA",
                      country_id: "1102"
                  },
                  {
                      id: "3062",
                      name: "Jawa Barat",
                      abbreviation: "JB",
                      country_id: "1102"
                  },
                  {
                      id: "3063",
                      name: "Jawa Tengah",
                      abbreviation: "JT",
                      country_id: "1102"
                  },
                  {
                      id: "3064",
                      name: "Jawa Timur",
                      abbreviation: "JI",
                      country_id: "1102"
                  },
                  {
                      id: "3065",
                      name: "Kalimantan Barat",
                      abbreviation: "KB",
                      country_id: "1102"
                  },
                  {
                      id: "3066",
                      name: "Kalimantan Timur",
                      abbreviation: "KI",
                      country_id: "1102"
                  },
                  {
                      id: "3067",
                      name: "Kalimantan Selatan",
                      abbreviation: "KS",
                      country_id: "1102"
                  },
                  {
                      id: "3068",
                      name: "Kepulauan Riau",
                      abbreviation: "KR",
                      country_id: "1102"
                  },
                  {
                      id: "3069",
                      name: "Lampung",
                      abbreviation: "LA",
                      country_id: "1102"
                  },
                  {
                      id: "3070",
                      name: "Maluku",
                      abbreviation: "MA",
                      country_id: "1102"
                  },
                  {
                      id: "3071",
                      name: "Maluku Utara",
                      abbreviation: "MU",
                      country_id: "1102"
                  },
                  {
                      id: "3072",
                      name: "Nusa Tenggara Barat",
                      abbreviation: "NB",
                      country_id: "1102"
                  },
                  {
                      id: "3073",
                      name: "Nusa Tenggara Timur",
                      abbreviation: "NT",
                      country_id: "1102"
                  },
                  {
                      id: "3074",
                      name: "Papua",
                      abbreviation: "PA",
                      country_id: "1102"
                  },
                  {
                      id: "3075",
                      name: "Riau",
                      abbreviation: "RI",
                      country_id: "1102"
                  },
                  {
                      id: "3076",
                      name: "Sulawesi Selatan",
                      abbreviation: "SN",
                      country_id: "1102"
                  },
                  {
                      id: "3077",
                      name: "Sulawesi Tengah",
                      abbreviation: "ST",
                      country_id: "1102"
                  },
                  {
                      id: "3078",
                      name: "Sulawesi Tenggara",
                      abbreviation: "SG",
                      country_id: "1102"
                  },
                  {
                      id: "3079",
                      name: "Sulawesi Utara",
                      abbreviation: "SA",
                      country_id: "1102"
                  },
                  {
                      id: "3080",
                      name: "Sumatra Barat",
                      abbreviation: "SB",
                      country_id: "1102"
                  },
                  {
                      id: "3081",
                      name: "Sumatra Selatan",
                      abbreviation: "SS",
                      country_id: "1102"
                  },
                  {
                      id: "3082",
                      name: "Sumatera Utara",
                      abbreviation: "SU",
                      country_id: "1102"
                  },
                  {
                      id: "3083",
                      name: "DKI Jakarta",
                      abbreviation: "JK",
                      country_id: "1102"
                  },
                  {
                      id: "3084",
                      name: "Aceh",
                      abbreviation: "AC",
                      country_id: "1102"
                  },
                  {
                      id: "3085",
                      name: "DI Yogyakarta",
                      abbreviation: "YO",
                      country_id: "1102"
                  },
                  {
                      id: "3086",
                      name: "Cork",
                      abbreviation: "C",
                      country_id: "1105"
                  },
                  {
                      id: "3087",
                      name: "Clare",
                      abbreviation: "CE",
                      country_id: "1105"
                  },
                  {
                      id: "3088",
                      name: "Cavan",
                      abbreviation: "CN",
                      country_id: "1105"
                  },
                  {
                      id: "3089",
                      name: "Carlow",
                      abbreviation: "CW",
                      country_id: "1105"
                  },
                  {
                      id: "3090",
                      name: "Dublin",
                      abbreviation: "D",
                      country_id: "1105"
                  },
                  {
                      id: "3091",
                      name: "Donegal",
                      abbreviation: "DL",
                      country_id: "1105"
                  },
                  {
                      id: "3092",
                      name: "Galway",
                      abbreviation: "G",
                      country_id: "1105"
                  },
                  {
                      id: "3093",
                      name: "Kildare",
                      abbreviation: "KE",
                      country_id: "1105"
                  },
                  {
                      id: "3094",
                      name: "Kilkenny",
                      abbreviation: "KK",
                      country_id: "1105"
                  },
                  {
                      id: "3095",
                      name: "Kerry",
                      abbreviation: "KY",
                      country_id: "1105"
                  },
                  {
                      id: "3096",
                      name: "Longford",
                      abbreviation: "LD",
                      country_id: "1105"
                  },
                  {
                      id: "3097",
                      name: "Louth",
                      abbreviation: "LH",
                      country_id: "1105"
                  },
                  {
                      id: "3098",
                      name: "Limerick",
                      abbreviation: "LK",
                      country_id: "1105"
                  },
                  {
                      id: "3099",
                      name: "Leitrim",
                      abbreviation: "LM",
                      country_id: "1105"
                  },
                  {
                      id: "3100",
                      name: "Laois",
                      abbreviation: "LS",
                      country_id: "1105"
                  },
                  {
                      id: "3101",
                      name: "Meath",
                      abbreviation: "MH",
                      country_id: "1105"
                  },
                  {
                      id: "3102",
                      name: "Monaghan",
                      abbreviation: "MN",
                      country_id: "1105"
                  },
                  {
                      id: "3103",
                      name: "Mayo",
                      abbreviation: "MO",
                      country_id: "1105"
                  },
                  {
                      id: "3104",
                      name: "Offaly",
                      abbreviation: "OY",
                      country_id: "1105"
                  },
                  {
                      id: "3105",
                      name: "Roscommon",
                      abbreviation: "RN",
                      country_id: "1105"
                  },
                  {
                      id: "3106",
                      name: "Sligo",
                      abbreviation: "SO",
                      country_id: "1105"
                  },
                  {
                      id: "3107",
                      name: "Tipperary",
                      abbreviation: "TA",
                      country_id: "1105"
                  },
                  {
                      id: "3108",
                      name: "Waterford",
                      abbreviation: "WD",
                      country_id: "1105"
                  },
                  {
                      id: "3109",
                      name: "Westmeath",
                      abbreviation: "WH",
                      country_id: "1105"
                  },
                  {
                      id: "3110",
                      name: "Wicklow",
                      abbreviation: "WW",
                      country_id: "1105"
                  },
                  {
                      id: "3111",
                      name: "Wexford",
                      abbreviation: "WX",
                      country_id: "1105"
                  },
                  {
                      id: "3112",
                      name: "HaDarom",
                      abbreviation: "D",
                      country_id: "1106"
                  },
                  {
                      id: "3113",
                      name: "HaMerkaz",
                      abbreviation: "M",
                      country_id: "1106"
                  },
                  {
                      id: "3114",
                      name: "HaZafon",
                      abbreviation: "Z",
                      country_id: "1106"
                  },
                  {
                      id: "3115",
                      name: "Haifa",
                      abbreviation: "HA",
                      country_id: "1106"
                  },
                  {
                      id: "3116",
                      name: "Tel-Aviv",
                      abbreviation: "TA",
                      country_id: "1106"
                  },
                  {
                      id: "3117",
                      name: "Jerusalem",
                      abbreviation: "JM",
                      country_id: "1106"
                  },
                  {
                      id: "3118",
                      name: "Al Anbar",
                      abbreviation: "AN",
                      country_id: "1104"
                  },
                  {
                      id: "3119",
                      name: "Al Ba,rah",
                      abbreviation: "BA",
                      country_id: "1104"
                  },
                  {
                      id: "3120",
                      name: "Al Muthanna",
                      abbreviation: "MU",
                      country_id: "1104"
                  },
                  {
                      id: "3121",
                      name: "Al Qadisiyah",
                      abbreviation: "QA",
                      country_id: "1104"
                  },
                  {
                      id: "3122",
                      name: "An Najef",
                      abbreviation: "NA",
                      country_id: "1104"
                  },
                  {
                      id: "3123",
                      name: "Arbil",
                      abbreviation: "AR",
                      country_id: "1104"
                  },
                  {
                      id: "3124",
                      name: "As Sulaymaniyah",
                      abbreviation: "SW",
                      country_id: "1104"
                  },
                  {
                      id: "3125",
                      name: "At Ta'mim",
                      abbreviation: "TS",
                      country_id: "1104"
                  },
                  {
                      id: "3126",
                      name: "Babil",
                      abbreviation: "BB",
                      country_id: "1104"
                  },
                  {
                      id: "3127",
                      name: "Baghdad",
                      abbreviation: "BG",
                      country_id: "1104"
                  },
                  {
                      id: "3128",
                      name: "Dahuk",
                      abbreviation: "DA",
                      country_id: "1104"
                  },
                  {
                      id: "3129",
                      name: "Dhi Qar",
                      abbreviation: "DQ",
                      country_id: "1104"
                  },
                  {
                      id: "3130",
                      name: "Diyala",
                      abbreviation: "DI",
                      country_id: "1104"
                  },
                  {
                      id: "3131",
                      name: "Karbala'",
                      abbreviation: "KA",
                      country_id: "1104"
                  },
                  {
                      id: "3132",
                      name: "Maysan",
                      abbreviation: "MA",
                      country_id: "1104"
                  },
                  {
                      id: "3133",
                      name: "Ninawa",
                      abbreviation: "NI",
                      country_id: "1104"
                  },
                  {
                      id: "3134",
                      name: "Salah ad Din",
                      abbreviation: "SD",
                      country_id: "1104"
                  },
                  {
                      id: "3135",
                      name: "Wasit",
                      abbreviation: "WA",
                      country_id: "1104"
                  },
                  {
                      id: "3136",
                      name: "Ardabil",
                      abbreviation: "03",
                      country_id: "1103"
                  },
                  {
                      id: "3137",
                      name: "Azarbayjan-e Gharbi",
                      abbreviation: "02",
                      country_id: "1103"
                  },
                  {
                      id: "3138",
                      name: "Azarbayjan-e Sharqi",
                      abbreviation: "01",
                      country_id: "1103"
                  },
                  {
                      id: "3139",
                      name: "Bushehr",
                      abbreviation: "06",
                      country_id: "1103"
                  },
                  {
                      id: "3140",
                      name: "Chahar Mahall va Bakhtiari",
                      abbreviation: "08",
                      country_id: "1103"
                  },
                  {
                      id: "3141",
                      name: "Esfahan",
                      abbreviation: "04",
                      country_id: "1103"
                  },
                  {
                      id: "3142",
                      name: "Fars",
                      abbreviation: "14",
                      country_id: "1103"
                  },
                  {
                      id: "3143",
                      name: "Gilan",
                      abbreviation: "19",
                      country_id: "1103"
                  },
                  {
                      id: "3144",
                      name: "Golestan",
                      abbreviation: "27",
                      country_id: "1103"
                  },
                  {
                      id: "3145",
                      name: "Hamadan",
                      abbreviation: "24",
                      country_id: "1103"
                  },
                  {
                      id: "3146",
                      name: "Hormozgan",
                      abbreviation: "23",
                      country_id: "1103"
                  },
                  {
                      id: "3147",
                      name: "Iiam",
                      abbreviation: "05",
                      country_id: "1103"
                  },
                  {
                      id: "3148",
                      name: "Kerman",
                      abbreviation: "15",
                      country_id: "1103"
                  },
                  {
                      id: "3149",
                      name: "Kermanshah",
                      abbreviation: "17",
                      country_id: "1103"
                  },
                  {
                      id: "3150",
                      name: "Khorasan",
                      abbreviation: "09",
                      country_id: "1103"
                  },
                  {
                      id: "3151",
                      name: "Khuzestan",
                      abbreviation: "10",
                      country_id: "1103"
                  },
                  {
                      id: "3152",
                      name: "Kohjiluyeh va Buyer Ahmad",
                      abbreviation: "18",
                      country_id: "1103"
                  },
                  {
                      id: "3153",
                      name: "Kordestan",
                      abbreviation: "16",
                      country_id: "1103"
                  },
                  {
                      id: "3154",
                      name: "Lorestan",
                      abbreviation: "20",
                      country_id: "1103"
                  },
                  {
                      id: "3155",
                      name: "Markazi",
                      abbreviation: "22",
                      country_id: "1103"
                  },
                  {
                      id: "3156",
                      name: "Mazandaran",
                      abbreviation: "21",
                      country_id: "1103"
                  },
                  {
                      id: "3157",
                      name: "Qazvin",
                      abbreviation: "28",
                      country_id: "1103"
                  },
                  {
                      id: "3158",
                      name: "Qom",
                      abbreviation: "26",
                      country_id: "1103"
                  },
                  {
                      id: "3159",
                      name: "Semnan",
                      abbreviation: "12",
                      country_id: "1103"
                  },
                  {
                      id: "3160",
                      name: "Sistan va Baluchestan",
                      abbreviation: "13",
                      country_id: "1103"
                  },
                  {
                      id: "3161",
                      name: "Tehran",
                      abbreviation: "07",
                      country_id: "1103"
                  },
                  {
                      id: "3162",
                      name: "Yazd",
                      abbreviation: "25",
                      country_id: "1103"
                  },
                  {
                      id: "3163",
                      name: "Zanjan",
                      abbreviation: "11",
                      country_id: "1103"
                  },
                  {
                      id: "3164",
                      name: "Austurland",
                      abbreviation: "7",
                      country_id: "1100"
                  },
                  {
                      id: "3165",
                      name: "Hofuoborgarsvaeoi utan Reykjavikur",
                      abbreviation: "1",
                      country_id: "1100"
                  },
                  {
                      id: "3166",
                      name: "Norourland eystra",
                      abbreviation: "6",
                      country_id: "1100"
                  },
                  {
                      id: "3167",
                      name: "Norourland vestra",
                      abbreviation: "5",
                      country_id: "1100"
                  },
                  {
                      id: "3168",
                      name: "Reykjavik",
                      abbreviation: "0",
                      country_id: "1100"
                  },
                  {
                      id: "3169",
                      name: "Suourland",
                      abbreviation: "8",
                      country_id: "1100"
                  },
                  {
                      id: "3170",
                      name: "Suournes",
                      abbreviation: "2",
                      country_id: "1100"
                  },
                  {
                      id: "3171",
                      name: "Vestfirolr",
                      abbreviation: "4",
                      country_id: "1100"
                  },
                  {
                      id: "3172",
                      name: "Vesturland",
                      abbreviation: "3",
                      country_id: "1100"
                  },
                  {
                      id: "3173",
                      name: "Agrigento",
                      abbreviation: "AG",
                      country_id: "1107"
                  },
                  {
                      id: "3174",
                      name: "Alessandria",
                      abbreviation: "AL",
                      country_id: "1107"
                  },
                  {
                      id: "3175",
                      name: "Ancona",
                      abbreviation: "AN",
                      country_id: "1107"
                  },
                  {
                      id: "3176",
                      name: "Aosta",
                      abbreviation: "AO",
                      country_id: "1107"
                  },
                  {
                      id: "3177",
                      name: "Arezzo",
                      abbreviation: "AR",
                      country_id: "1107"
                  },
                  {
                      id: "3178",
                      name: "Ascoli Piceno",
                      abbreviation: "AP",
                      country_id: "1107"
                  },
                  {
                      id: "3179",
                      name: "Asti",
                      abbreviation: "AT",
                      country_id: "1107"
                  },
                  {
                      id: "3180",
                      name: "Avellino",
                      abbreviation: "AV",
                      country_id: "1107"
                  },
                  {
                      id: "3181",
                      name: "Bari",
                      abbreviation: "BA",
                      country_id: "1107"
                  },
                  {
                      id: "3182",
                      name: "Belluno",
                      abbreviation: "BL",
                      country_id: "1107"
                  },
                  {
                      id: "3183",
                      name: "Benevento",
                      abbreviation: "BN",
                      country_id: "1107"
                  },
                  {
                      id: "3184",
                      name: "Bergamo",
                      abbreviation: "BG",
                      country_id: "1107"
                  },
                  {
                      id: "3185",
                      name: "Biella",
                      abbreviation: "BI",
                      country_id: "1107"
                  },
                  {
                      id: "3186",
                      name: "Bologna",
                      abbreviation: "BO",
                      country_id: "1107"
                  },
                  {
                      id: "3187",
                      name: "Bolzano",
                      abbreviation: "BZ",
                      country_id: "1107"
                  },
                  {
                      id: "3188",
                      name: "Brescia",
                      abbreviation: "BS",
                      country_id: "1107"
                  },
                  {
                      id: "3189",
                      name: "Brindisi",
                      abbreviation: "BR",
                      country_id: "1107"
                  },
                  {
                      id: "3190",
                      name: "Cagliari",
                      abbreviation: "CA",
                      country_id: "1107"
                  },
                  {
                      id: "3191",
                      name: "Caltanissetta",
                      abbreviation: "CL",
                      country_id: "1107"
                  },
                  {
                      id: "3192",
                      name: "Campobasso",
                      abbreviation: "CB",
                      country_id: "1107"
                  },
                  {
                      id: "3193",
                      name: "Caserta",
                      abbreviation: "CE",
                      country_id: "1107"
                  },
                  {
                      id: "3194",
                      name: "Catania",
                      abbreviation: "CT",
                      country_id: "1107"
                  },
                  {
                      id: "3195",
                      name: "Catanzaro",
                      abbreviation: "CZ",
                      country_id: "1107"
                  },
                  {
                      id: "3196",
                      name: "Chieti",
                      abbreviation: "CH",
                      country_id: "1107"
                  },
                  {
                      id: "3197",
                      name: "Como",
                      abbreviation: "CO",
                      country_id: "1107"
                  },
                  {
                      id: "3198",
                      name: "Cosenza",
                      abbreviation: "CS",
                      country_id: "1107"
                  },
                  {
                      id: "3199",
                      name: "Cremona",
                      abbreviation: "CR",
                      country_id: "1107"
                  },
                  {
                      id: "3200",
                      name: "Crotone",
                      abbreviation: "KR",
                      country_id: "1107"
                  },
                  {
                      id: "3201",
                      name: "Cuneo",
                      abbreviation: "CN",
                      country_id: "1107"
                  },
                  {
                      id: "3202",
                      name: "Enna",
                      abbreviation: "EN",
                      country_id: "1107"
                  },
                  {
                      id: "3203",
                      name: "Ferrara",
                      abbreviation: "FE",
                      country_id: "1107"
                  },
                  {
                      id: "3204",
                      name: "Firenze",
                      abbreviation: "FI",
                      country_id: "1107"
                  },
                  {
                      id: "3205",
                      name: "Foggia",
                      abbreviation: "FG",
                      country_id: "1107"
                  },
                  {
                      id: "3206",
                      name: "Forlì-Cesena",
                      abbreviation: "FC",
                      country_id: "1107"
                  },
                  {
                      id: "3207",
                      name: "Frosinone",
                      abbreviation: "FR",
                      country_id: "1107"
                  },
                  {
                      id: "3208",
                      name: "Genova",
                      abbreviation: "GE",
                      country_id: "1107"
                  },
                  {
                      id: "3209",
                      name: "Gorizia",
                      abbreviation: "GO",
                      country_id: "1107"
                  },
                  {
                      id: "3210",
                      name: "Grosseto",
                      abbreviation: "GR",
                      country_id: "1107"
                  },
                  {
                      id: "3211",
                      name: "Imperia",
                      abbreviation: "IM",
                      country_id: "1107"
                  },
                  {
                      id: "3212",
                      name: "Isernia",
                      abbreviation: "IS",
                      country_id: "1107"
                  },
                  {
                      id: "3213",
                      name: "L'Aquila",
                      abbreviation: "AQ",
                      country_id: "1107"
                  },
                  {
                      id: "3214",
                      name: "La Spezia",
                      abbreviation: "SP",
                      country_id: "1107"
                  },
                  {
                      id: "3215",
                      name: "Latina",
                      abbreviation: "LT",
                      country_id: "1107"
                  },
                  {
                      id: "3216",
                      name: "Lecce",
                      abbreviation: "LE",
                      country_id: "1107"
                  },
                  {
                      id: "3217",
                      name: "Lecco",
                      abbreviation: "LC",
                      country_id: "1107"
                  },
                  {
                      id: "3218",
                      name: "Livorno",
                      abbreviation: "LI",
                      country_id: "1107"
                  },
                  {
                      id: "3219",
                      name: "Lodi",
                      abbreviation: "LO",
                      country_id: "1107"
                  },
                  {
                      id: "3220",
                      name: "Lucca",
                      abbreviation: "LU",
                      country_id: "1107"
                  },
                  {
                      id: "3221",
                      name: "Macerata",
                      abbreviation: "MC",
                      country_id: "1107"
                  },
                  {
                      id: "3222",
                      name: "Mantova",
                      abbreviation: "MN",
                      country_id: "1107"
                  },
                  {
                      id: "3223",
                      name: "Massa-Carrara",
                      abbreviation: "MS",
                      country_id: "1107"
                  },
                  {
                      id: "3224",
                      name: "Matera",
                      abbreviation: "MT",
                      country_id: "1107"
                  },
                  {
                      id: "3225",
                      name: "Messina",
                      abbreviation: "ME",
                      country_id: "1107"
                  },
                  {
                      id: "3226",
                      name: "Milano",
                      abbreviation: "MI",
                      country_id: "1107"
                  },
                  {
                      id: "3227",
                      name: "Modena",
                      abbreviation: "MO",
                      country_id: "1107"
                  },
                  {
                      id: "3228",
                      name: "Napoli",
                      abbreviation: "NA",
                      country_id: "1107"
                  },
                  {
                      id: "3229",
                      name: "Novara",
                      abbreviation: "NO",
                      country_id: "1107"
                  },
                  {
                      id: "3230",
                      name: "Nuoro",
                      abbreviation: "NU",
                      country_id: "1107"
                  },
                  {
                      id: "3231",
                      name: "Oristano",
                      abbreviation: "OR",
                      country_id: "1107"
                  },
                  {
                      id: "3232",
                      name: "Padova",
                      abbreviation: "PD",
                      country_id: "1107"
                  },
                  {
                      id: "3233",
                      name: "Palermo",
                      abbreviation: "PA",
                      country_id: "1107"
                  },
                  {
                      id: "3234",
                      name: "Parma",
                      abbreviation: "PR",
                      country_id: "1107"
                  },
                  {
                      id: "3235",
                      name: "Pavia",
                      abbreviation: "PV",
                      country_id: "1107"
                  },
                  {
                      id: "3236",
                      name: "Perugia",
                      abbreviation: "PG",
                      country_id: "1107"
                  },
                  {
                      id: "3237",
                      name: "Pesaro e Urbino",
                      abbreviation: "PU",
                      country_id: "1107"
                  },
                  {
                      id: "3238",
                      name: "Pescara",
                      abbreviation: "PE",
                      country_id: "1107"
                  },
                  {
                      id: "3239",
                      name: "Piacenza",
                      abbreviation: "PC",
                      country_id: "1107"
                  },
                  {
                      id: "3240",
                      name: "Pisa",
                      abbreviation: "PI",
                      country_id: "1107"
                  },
                  {
                      id: "3241",
                      name: "Pistoia",
                      abbreviation: "PT",
                      country_id: "1107"
                  },
                  {
                      id: "3242",
                      name: "Pordenone",
                      abbreviation: "PN",
                      country_id: "1107"
                  },
                  {
                      id: "3243",
                      name: "Potenza",
                      abbreviation: "PZ",
                      country_id: "1107"
                  },
                  {
                      id: "3244",
                      name: "Prato",
                      abbreviation: "PO",
                      country_id: "1107"
                  },
                  {
                      id: "3245",
                      name: "Ragusa",
                      abbreviation: "RG",
                      country_id: "1107"
                  },
                  {
                      id: "3246",
                      name: "Ravenna",
                      abbreviation: "RA",
                      country_id: "1107"
                  },
                  {
                      id: "3247",
                      name: "Reggio Calabria",
                      abbreviation: "RC",
                      country_id: "1107"
                  },
                  {
                      id: "3248",
                      name: "Reggio Emilia",
                      abbreviation: "RE",
                      country_id: "1107"
                  },
                  {
                      id: "3249",
                      name: "Rieti",
                      abbreviation: "RI",
                      country_id: "1107"
                  },
                  {
                      id: "3250",
                      name: "Rimini",
                      abbreviation: "RN",
                      country_id: "1107"
                  },
                  {
                      id: "3251",
                      name: "Roma",
                      abbreviation: "RM",
                      country_id: "1107"
                  },
                  {
                      id: "3252",
                      name: "Rovigo",
                      abbreviation: "RO",
                      country_id: "1107"
                  },
                  {
                      id: "3253",
                      name: "Salerno",
                      abbreviation: "SA",
                      country_id: "1107"
                  },
                  {
                      id: "3254",
                      name: "Sassari",
                      abbreviation: "SS",
                      country_id: "1107"
                  },
                  {
                      id: "3255",
                      name: "Savona",
                      abbreviation: "SV",
                      country_id: "1107"
                  },
                  {
                      id: "3256",
                      name: "Siena",
                      abbreviation: "SI",
                      country_id: "1107"
                  },
                  {
                      id: "3257",
                      name: "Siracusa",
                      abbreviation: "SR",
                      country_id: "1107"
                  },
                  {
                      id: "3258",
                      name: "Sondrio",
                      abbreviation: "SO",
                      country_id: "1107"
                  },
                  {
                      id: "3259",
                      name: "Taranto",
                      abbreviation: "TA",
                      country_id: "1107"
                  },
                  {
                      id: "3260",
                      name: "Teramo",
                      abbreviation: "TE",
                      country_id: "1107"
                  },
                  {
                      id: "3261",
                      name: "Terni",
                      abbreviation: "TR",
                      country_id: "1107"
                  },
                  {
                      id: "3262",
                      name: "Torino",
                      abbreviation: "TO",
                      country_id: "1107"
                  },
                  {
                      id: "3263",
                      name: "Trapani",
                      abbreviation: "TP",
                      country_id: "1107"
                  },
                  {
                      id: "3264",
                      name: "Trento",
                      abbreviation: "TN",
                      country_id: "1107"
                  },
                  {
                      id: "3265",
                      name: "Treviso",
                      abbreviation: "TV",
                      country_id: "1107"
                  },
                  {
                      id: "3266",
                      name: "Trieste",
                      abbreviation: "TS",
                      country_id: "1107"
                  },
                  {
                      id: "3267",
                      name: "Udine",
                      abbreviation: "UD",
                      country_id: "1107"
                  },
                  {
                      id: "3268",
                      name: "Varese",
                      abbreviation: "VA",
                      country_id: "1107"
                  },
                  {
                      id: "3269",
                      name: "Venezia",
                      abbreviation: "VE",
                      country_id: "1107"
                  },
                  {
                      id: "3270",
                      name: "Verbano-Cusio-Ossola",
                      abbreviation: "VB",
                      country_id: "1107"
                  },
                  {
                      id: "3271",
                      name: "Vercelli",
                      abbreviation: "VC",
                      country_id: "1107"
                  },
                  {
                      id: "3272",
                      name: "Verona",
                      abbreviation: "VR",
                      country_id: "1107"
                  },
                  {
                      id: "3273",
                      name: "Vibo Valentia",
                      abbreviation: "VV",
                      country_id: "1107"
                  },
                  {
                      id: "3274",
                      name: "Vicenza",
                      abbreviation: "VI",
                      country_id: "1107"
                  },
                  {
                      id: "3275",
                      name: "Viterbo",
                      abbreviation: "VT",
                      country_id: "1107"
                  },
                  {
                      id: "3276",
                      name: "Aichi",
                      abbreviation: "23",
                      country_id: "1109"
                  },
                  {
                      id: "3277",
                      name: "Akita",
                      abbreviation: "05",
                      country_id: "1109"
                  },
                  {
                      id: "3278",
                      name: "Aomori",
                      abbreviation: "02",
                      country_id: "1109"
                  },
                  {
                      id: "3279",
                      name: "Chiba",
                      abbreviation: "12",
                      country_id: "1109"
                  },
                  {
                      id: "3280",
                      name: "Ehime",
                      abbreviation: "38",
                      country_id: "1109"
                  },
                  {
                      id: "3281",
                      name: "Fukui",
                      abbreviation: "18",
                      country_id: "1109"
                  },
                  {
                      id: "3282",
                      name: "Fukuoka",
                      abbreviation: "40",
                      country_id: "1109"
                  },
                  {
                      id: "3283",
                      name: "Fukusima",
                      abbreviation: "07",
                      country_id: "1109"
                  },
                  {
                      id: "3284",
                      name: "Gifu",
                      abbreviation: "21",
                      country_id: "1109"
                  },
                  {
                      id: "3285",
                      name: "Gunma",
                      abbreviation: "10",
                      country_id: "1109"
                  },
                  {
                      id: "3286",
                      name: "Hiroshima",
                      abbreviation: "34",
                      country_id: "1109"
                  },
                  {
                      id: "3287",
                      name: "Hokkaido",
                      abbreviation: "01",
                      country_id: "1109"
                  },
                  {
                      id: "3288",
                      name: "Hyogo",
                      abbreviation: "28",
                      country_id: "1109"
                  },
                  {
                      id: "3289",
                      name: "Ibaraki",
                      abbreviation: "08",
                      country_id: "1109"
                  },
                  {
                      id: "3290",
                      name: "Ishikawa",
                      abbreviation: "17",
                      country_id: "1109"
                  },
                  {
                      id: "3291",
                      name: "Iwate",
                      abbreviation: "03",
                      country_id: "1109"
                  },
                  {
                      id: "3292",
                      name: "Kagawa",
                      abbreviation: "37",
                      country_id: "1109"
                  },
                  {
                      id: "3293",
                      name: "Kagoshima",
                      abbreviation: "46",
                      country_id: "1109"
                  },
                  {
                      id: "3294",
                      name: "Kanagawa",
                      abbreviation: "14",
                      country_id: "1109"
                  },
                  {
                      id: "3295",
                      name: "Kochi",
                      abbreviation: "39",
                      country_id: "1109"
                  },
                  {
                      id: "3296",
                      name: "Kumamoto",
                      abbreviation: "43",
                      country_id: "1109"
                  },
                  {
                      id: "3297",
                      name: "Kyoto",
                      abbreviation: "26",
                      country_id: "1109"
                  },
                  {
                      id: "3298",
                      name: "Mie",
                      abbreviation: "24",
                      country_id: "1109"
                  },
                  {
                      id: "3299",
                      name: "Miyagi",
                      abbreviation: "04",
                      country_id: "1109"
                  },
                  {
                      id: "3300",
                      name: "Miyazaki",
                      abbreviation: "45",
                      country_id: "1109"
                  },
                  {
                      id: "3301",
                      name: "Nagano",
                      abbreviation: "20",
                      country_id: "1109"
                  },
                  {
                      id: "3302",
                      name: "Nagasaki",
                      abbreviation: "42",
                      country_id: "1109"
                  },
                  {
                      id: "3303",
                      name: "Nara",
                      abbreviation: "29",
                      country_id: "1109"
                  },
                  {
                      id: "3304",
                      name: "Niigata",
                      abbreviation: "15",
                      country_id: "1109"
                  },
                  {
                      id: "3305",
                      name: "Oita",
                      abbreviation: "44",
                      country_id: "1109"
                  },
                  {
                      id: "3306",
                      name: "Okayama",
                      abbreviation: "33",
                      country_id: "1109"
                  },
                  {
                      id: "3307",
                      name: "Okinawa",
                      abbreviation: "47",
                      country_id: "1109"
                  },
                  {
                      id: "3308",
                      name: "Osaka",
                      abbreviation: "27",
                      country_id: "1109"
                  },
                  {
                      id: "3309",
                      name: "Saga",
                      abbreviation: "41",
                      country_id: "1109"
                  },
                  {
                      id: "3310",
                      name: "Saitama",
                      abbreviation: "11",
                      country_id: "1109"
                  },
                  {
                      id: "3311",
                      name: "Shiga",
                      abbreviation: "25",
                      country_id: "1109"
                  },
                  {
                      id: "3312",
                      name: "Shimane",
                      abbreviation: "32",
                      country_id: "1109"
                  },
                  {
                      id: "3313",
                      name: "Shizuoka",
                      abbreviation: "22",
                      country_id: "1109"
                  },
                  {
                      id: "3314",
                      name: "Tochigi",
                      abbreviation: "09",
                      country_id: "1109"
                  },
                  {
                      id: "3315",
                      name: "Tokushima",
                      abbreviation: "36",
                      country_id: "1109"
                  },
                  {
                      id: "3316",
                      name: "Tokyo",
                      abbreviation: "13",
                      country_id: "1109"
                  },
                  {
                      id: "3317",
                      name: "Tottori",
                      abbreviation: "31",
                      country_id: "1109"
                  },
                  {
                      id: "3318",
                      name: "Toyama",
                      abbreviation: "16",
                      country_id: "1109"
                  },
                  {
                      id: "3319",
                      name: "Wakayama",
                      abbreviation: "30",
                      country_id: "1109"
                  },
                  {
                      id: "3320",
                      name: "Yamagata",
                      abbreviation: "06",
                      country_id: "1109"
                  },
                  {
                      id: "3321",
                      name: "Yamaguchi",
                      abbreviation: "35",
                      country_id: "1109"
                  },
                  {
                      id: "3322",
                      name: "Yamanashi",
                      abbreviation: "19",
                      country_id: "1109"
                  },
                  {
                      id: "3323",
                      name: "Clarendon",
                      abbreviation: "CN",
                      country_id: "1108"
                  },
                  {
                      id: "3324",
                      name: "Hanover",
                      abbreviation: "HR",
                      country_id: "1108"
                  },
                  {
                      id: "3325",
                      name: "Kingston",
                      abbreviation: "KN",
                      country_id: "1108"
                  },
                  {
                      id: "3326",
                      name: "Portland",
                      abbreviation: "PD",
                      country_id: "1108"
                  },
                  {
                      id: "3327",
                      name: "Saint Andrew",
                      abbreviation: "AW",
                      country_id: "1108"
                  },
                  {
                      id: "3328",
                      name: "Saint Ann",
                      abbreviation: "AN",
                      country_id: "1108"
                  },
                  {
                      id: "3329",
                      name: "Saint Catherine",
                      abbreviation: "CE",
                      country_id: "1108"
                  },
                  {
                      id: "3330",
                      name: "Saint Elizabeth",
                      abbreviation: "EH",
                      country_id: "1108"
                  },
                  {
                      id: "3331",
                      name: "Saint James",
                      abbreviation: "JS",
                      country_id: "1108"
                  },
                  {
                      id: "3332",
                      name: "Saint Mary",
                      abbreviation: "MY",
                      country_id: "1108"
                  },
                  {
                      id: "3333",
                      name: "Saint Thomas",
                      abbreviation: "TS",
                      country_id: "1108"
                  },
                  {
                      id: "3334",
                      name: "Trelawny",
                      abbreviation: "TY",
                      country_id: "1108"
                  },
                  {
                      id: "3335",
                      name: "Westmoreland",
                      abbreviation: "WD",
                      country_id: "1108"
                  },
                  {
                      id: "3336",
                      name: "Ajln",
                      abbreviation: "AJ",
                      country_id: "1110"
                  },
                  {
                      id: "3337",
                      name: "Al 'Aqaba",
                      abbreviation: "AQ",
                      country_id: "1110"
                  },
                  {
                      id: "3338",
                      name: "Al Balqa'",
                      abbreviation: "BA",
                      country_id: "1110"
                  },
                  {
                      id: "3339",
                      name: "Al Karak",
                      abbreviation: "KA",
                      country_id: "1110"
                  },
                  {
                      id: "3340",
                      name: "Al Mafraq",
                      abbreviation: "MA",
                      country_id: "1110"
                  },
                  {
                      id: "3341",
                      name: "Amman",
                      abbreviation: "AM",
                      country_id: "1110"
                  },
                  {
                      id: "3342",
                      name: "At Tafilah",
                      abbreviation: "AT",
                      country_id: "1110"
                  },
                  {
                      id: "3343",
                      name: "Az Zarga",
                      abbreviation: "AZ",
                      country_id: "1110"
                  },
                  {
                      id: "3344",
                      name: "Irbid",
                      abbreviation: "JR",
                      country_id: "1110"
                  },
                  {
                      id: "3345",
                      name: "Jarash",
                      abbreviation: "JA",
                      country_id: "1110"
                  },
                  {
                      id: "3346",
                      name: "Ma'an",
                      abbreviation: "MN",
                      country_id: "1110"
                  },
                  {
                      id: "3347",
                      name: "Madaba",
                      abbreviation: "MD",
                      country_id: "1110"
                  },
                  {
                      id: "3353",
                      name: "Bishkek",
                      abbreviation: "GB",
                      country_id: "1117"
                  },
                  {
                      id: "3354",
                      name: "Batken",
                      abbreviation: "B",
                      country_id: "1117"
                  },
                  {
                      id: "3355",
                      name: "Chu",
                      abbreviation: "C",
                      country_id: "1117"
                  },
                  {
                      id: "3356",
                      name: "Jalal-Abad",
                      abbreviation: "J",
                      country_id: "1117"
                  },
                  {
                      id: "3357",
                      name: "Naryn",
                      abbreviation: "N",
                      country_id: "1117"
                  },
                  {
                      id: "3358",
                      name: "Osh",
                      abbreviation: "O",
                      country_id: "1117"
                  },
                  {
                      id: "3359",
                      name: "Talas",
                      abbreviation: "T",
                      country_id: "1117"
                  },
                  {
                      id: "3360",
                      name: "Ysyk-Kol",
                      abbreviation: "Y",
                      country_id: "1117"
                  },
                  {
                      id: "3361",
                      name: "Krong Kaeb",
                      abbreviation: "23",
                      country_id: "1037"
                  },
                  {
                      id: "3362",
                      name: "Krong Pailin",
                      abbreviation: "24",
                      country_id: "1037"
                  },
                  {
                      id: "3363",
                      name: "Xrong Preah Sihanouk",
                      abbreviation: "18",
                      country_id: "1037"
                  },
                  {
                      id: "3364",
                      name: "Phnom Penh",
                      abbreviation: "12",
                      country_id: "1037"
                  },
                  {
                      id: "3365",
                      name: "Baat Dambang",
                      abbreviation: "2",
                      country_id: "1037"
                  },
                  {
                      id: "3366",
                      name: "Banteay Mean Chey",
                      abbreviation: "1",
                      country_id: "1037"
                  },
                  {
                      id: "3367",
                      name: "Rampong Chaam",
                      abbreviation: "3",
                      country_id: "1037"
                  },
                  {
                      id: "3368",
                      name: "Kampong Chhnang",
                      abbreviation: "4",
                      country_id: "1037"
                  },
                  {
                      id: "3369",
                      name: "Kampong Spueu",
                      abbreviation: "5",
                      country_id: "1037"
                  },
                  {
                      id: "3370",
                      name: "Kampong Thum",
                      abbreviation: "6",
                      country_id: "1037"
                  },
                  {
                      id: "3371",
                      name: "Kampot",
                      abbreviation: "7",
                      country_id: "1037"
                  },
                  {
                      id: "3372",
                      name: "Kandaal",
                      abbreviation: "8",
                      country_id: "1037"
                  },
                  {
                      id: "3373",
                      name: "Kach Kong",
                      abbreviation: "9",
                      country_id: "1037"
                  },
                  {
                      id: "3374",
                      name: "Krachoh",
                      abbreviation: "10",
                      country_id: "1037"
                  },
                  {
                      id: "3375",
                      name: "Mondol Kiri",
                      abbreviation: "11",
                      country_id: "1037"
                  },
                  {
                      id: "3376",
                      name: "Otdar Mean Chey",
                      abbreviation: "22",
                      country_id: "1037"
                  },
                  {
                      id: "3377",
                      name: "Pousaat",
                      abbreviation: "15",
                      country_id: "1037"
                  },
                  {
                      id: "3378",
                      name: "Preah Vihear",
                      abbreviation: "13",
                      country_id: "1037"
                  },
                  {
                      id: "3379",
                      name: "Prey Veaeng",
                      abbreviation: "14",
                      country_id: "1037"
                  },
                  {
                      id: "3380",
                      name: "Rotanak Kiri",
                      abbreviation: "16",
                      country_id: "1037"
                  },
                  {
                      id: "3381",
                      name: "Siem Reab",
                      abbreviation: "17",
                      country_id: "1037"
                  },
                  {
                      id: "3382",
                      name: "Stueng Traeng",
                      abbreviation: "19",
                      country_id: "1037"
                  },
                  {
                      id: "3383",
                      name: "Svaay Rieng",
                      abbreviation: "20",
                      country_id: "1037"
                  },
                  {
                      id: "3384",
                      name: "Taakaev",
                      abbreviation: "21",
                      country_id: "1037"
                  },
                  {
                      id: "3385",
                      name: "Gilbert Islands",
                      abbreviation: "G",
                      country_id: "1113"
                  },
                  {
                      id: "3386",
                      name: "Line Islands",
                      abbreviation: "L",
                      country_id: "1113"
                  },
                  {
                      id: "3387",
                      name: "Phoenix Islands",
                      abbreviation: "P",
                      country_id: "1113"
                  },
                  {
                      id: "3388",
                      name: "Anjouan Ndzouani",
                      abbreviation: "A",
                      country_id: "1049"
                  },
                  {
                      id: "3389",
                      name: "Grande Comore Ngazidja",
                      abbreviation: "G",
                      country_id: "1049"
                  },
                  {
                      id: "3390",
                      name: "Moheli Moili",
                      abbreviation: "M",
                      country_id: "1049"
                  },
                  {
                      id: "3391",
                      name: "Kaesong-si",
                      abbreviation: "KAE",
                      country_id: "1114"
                  },
                  {
                      id: "3392",
                      name: "Nampo-si",
                      abbreviation: "NAM",
                      country_id: "1114"
                  },
                  {
                      id: "3393",
                      name: "Pyongyang-ai",
                      abbreviation: "PYO",
                      country_id: "1114"
                  },
                  {
                      id: "3394",
                      name: "Chagang-do",
                      abbreviation: "CHA",
                      country_id: "1114"
                  },
                  {
                      id: "3395",
                      name: "Hamgyongbuk-do",
                      abbreviation: "HAB",
                      country_id: "1114"
                  },
                  {
                      id: "3396",
                      name: "Hamgyongnam-do",
                      abbreviation: "HAN",
                      country_id: "1114"
                  },
                  {
                      id: "3397",
                      name: "Hwanghaebuk-do",
                      abbreviation: "HWB",
                      country_id: "1114"
                  },
                  {
                      id: "3398",
                      name: "Hwanghaenam-do",
                      abbreviation: "HWN",
                      country_id: "1114"
                  },
                  {
                      id: "3399",
                      name: "Kangwon-do",
                      abbreviation: "KAN",
                      country_id: "1114"
                  },
                  {
                      id: "3400",
                      name: "Pyonganbuk-do",
                      abbreviation: "PYB",
                      country_id: "1114"
                  },
                  {
                      id: "3401",
                      name: "Pyongannam-do",
                      abbreviation: "PYN",
                      country_id: "1114"
                  },
                  {
                      id: "3402",
                      name: "Yanggang-do",
                      abbreviation: "YAN",
                      country_id: "1114"
                  },
                  {
                      id: "3403",
                      name: "Najin Sonbong-si",
                      abbreviation: "NAJ",
                      country_id: "1114"
                  },
                  {
                      id: "3404",
                      name: "Seoul Teugbyeolsi",
                      abbreviation: "11",
                      country_id: "1115"
                  },
                  {
                      id: "3405",
                      name: "Busan Gwang'yeogsi",
                      abbreviation: "26",
                      country_id: "1115"
                  },
                  {
                      id: "3406",
                      name: "Daegu Gwang'yeogsi",
                      abbreviation: "27",
                      country_id: "1115"
                  },
                  {
                      id: "3407",
                      name: "Daejeon Gwang'yeogsi",
                      abbreviation: "30",
                      country_id: "1115"
                  },
                  {
                      id: "3408",
                      name: "Gwangju Gwang'yeogsi",
                      abbreviation: "29",
                      country_id: "1115"
                  },
                  {
                      id: "3409",
                      name: "Incheon Gwang'yeogsi",
                      abbreviation: "28",
                      country_id: "1115"
                  },
                  {
                      id: "3410",
                      name: "Ulsan Gwang'yeogsi",
                      abbreviation: "31",
                      country_id: "1115"
                  },
                  {
                      id: "3411",
                      name: "Chungcheongbugdo",
                      abbreviation: "43",
                      country_id: "1115"
                  },
                  {
                      id: "3412",
                      name: "Chungcheongnamdo",
                      abbreviation: "44",
                      country_id: "1115"
                  },
                  {
                      id: "3413",
                      name: "Gang'weondo",
                      abbreviation: "42",
                      country_id: "1115"
                  },
                  {
                      id: "3414",
                      name: "Gyeonggido",
                      abbreviation: "41",
                      country_id: "1115"
                  },
                  {
                      id: "3415",
                      name: "Gyeongsangbugdo",
                      abbreviation: "47",
                      country_id: "1115"
                  },
                  {
                      id: "3416",
                      name: "Gyeongsangnamdo",
                      abbreviation: "48",
                      country_id: "1115"
                  },
                  {
                      id: "3417",
                      name: "Jejudo",
                      abbreviation: "49",
                      country_id: "1115"
                  },
                  {
                      id: "3418",
                      name: "Jeonrabugdo",
                      abbreviation: "45",
                      country_id: "1115"
                  },
                  {
                      id: "3419",
                      name: "Jeonranamdo",
                      abbreviation: "46",
                      country_id: "1115"
                  },
                  {
                      id: "3420",
                      name: "Al Ahmadi",
                      abbreviation: "AH",
                      country_id: "1116"
                  },
                  {
                      id: "3421",
                      name: "Al Farwanlyah",
                      abbreviation: "FA",
                      country_id: "1116"
                  },
                  {
                      id: "3422",
                      name: "Al Jahrah",
                      abbreviation: "JA",
                      country_id: "1116"
                  },
                  {
                      id: "3423",
                      name: "Al Kuwayt",
                      abbreviation: "KU",
                      country_id: "1116"
                  },
                  {
                      id: "3424",
                      name: "Hawalli",
                      abbreviation: "HA",
                      country_id: "1116"
                  },
                  {
                      id: "3425",
                      name: "Almaty",
                      abbreviation: "ALA",
                      country_id: "1111"
                  },
                  {
                      id: "3426",
                      name: "Astana",
                      abbreviation: "AST",
                      country_id: "1111"
                  },
                  {
                      id: "3427",
                      name: "Almaty oblysy",
                      abbreviation: "ALM",
                      country_id: "1111"
                  },
                  {
                      id: "3428",
                      name: "Aqmola oblysy",
                      abbreviation: "AKM",
                      country_id: "1111"
                  },
                  {
                      id: "3429",
                      name: "Aqtobe oblysy",
                      abbreviation: "AKT",
                      country_id: "1111"
                  },
                  {
                      id: "3430",
                      name: "Atyrau oblyfiy",
                      abbreviation: "ATY",
                      country_id: "1111"
                  },
                  {
                      id: "3431",
                      name: "Batys Quzaqstan oblysy",
                      abbreviation: "ZAP",
                      country_id: "1111"
                  },
                  {
                      id: "3432",
                      name: "Mangghystau oblysy",
                      abbreviation: "MAN",
                      country_id: "1111"
                  },
                  {
                      id: "3433",
                      name: "Ongtustik Quzaqstan oblysy",
                      abbreviation: "YUZ",
                      country_id: "1111"
                  },
                  {
                      id: "3434",
                      name: "Pavlodar oblysy",
                      abbreviation: "PAV",
                      country_id: "1111"
                  },
                  {
                      id: "3435",
                      name: "Qaraghandy oblysy",
                      abbreviation: "KAR",
                      country_id: "1111"
                  },
                  {
                      id: "3436",
                      name: "Qostanay oblysy",
                      abbreviation: "KUS",
                      country_id: "1111"
                  },
                  {
                      id: "3437",
                      name: "Qyzylorda oblysy",
                      abbreviation: "KZY",
                      country_id: "1111"
                  },
                  {
                      id: "3438",
                      name: "Shyghys Quzaqstan oblysy",
                      abbreviation: "VOS",
                      country_id: "1111"
                  },
                  {
                      id: "3439",
                      name: "Soltustik Quzaqstan oblysy",
                      abbreviation: "SEV",
                      country_id: "1111"
                  },
                  {
                      id: "3440",
                      name: "Zhambyl oblysy Zhambylskaya oblast'",
                      abbreviation: "ZHA",
                      country_id: "1111"
                  },
                  {
                      id: "3441",
                      name: "Vientiane",
                      abbreviation: "VT",
                      country_id: "1118"
                  },
                  {
                      id: "3442",
                      name: "Attapu",
                      abbreviation: "AT",
                      country_id: "1118"
                  },
                  {
                      id: "3443",
                      name: "Bokeo",
                      abbreviation: "BK",
                      country_id: "1118"
                  },
                  {
                      id: "3444",
                      name: "Bolikhamxai",
                      abbreviation: "BL",
                      country_id: "1118"
                  },
                  {
                      id: "3445",
                      name: "Champasak",
                      abbreviation: "CH",
                      country_id: "1118"
                  },
                  {
                      id: "3446",
                      name: "Houaphan",
                      abbreviation: "HO",
                      country_id: "1118"
                  },
                  {
                      id: "3447",
                      name: "Khammouan",
                      abbreviation: "KH",
                      country_id: "1118"
                  },
                  {
                      id: "3448",
                      name: "Louang Namtha",
                      abbreviation: "LM",
                      country_id: "1118"
                  },
                  {
                      id: "3449",
                      name: "Louangphabang",
                      abbreviation: "LP",
                      country_id: "1118"
                  },
                  {
                      id: "3450",
                      name: "Oudomxai",
                      abbreviation: "OU",
                      country_id: "1118"
                  },
                  {
                      id: "3451",
                      name: "Phongsali",
                      abbreviation: "PH",
                      country_id: "1118"
                  },
                  {
                      id: "3452",
                      name: "Salavan",
                      abbreviation: "SL",
                      country_id: "1118"
                  },
                  {
                      id: "3453",
                      name: "Savannakhet",
                      abbreviation: "SV",
                      country_id: "1118"
                  },
                  {
                      id: "3454",
                      name: "Xaignabouli",
                      abbreviation: "XA",
                      country_id: "1118"
                  },
                  {
                      id: "3455",
                      name: "Xiasomboun",
                      abbreviation: "XN",
                      country_id: "1118"
                  },
                  {
                      id: "3456",
                      name: "Xekong",
                      abbreviation: "XE",
                      country_id: "1118"
                  },
                  {
                      id: "3457",
                      name: "Xiangkhoang",
                      abbreviation: "XI",
                      country_id: "1118"
                  },
                  {
                      id: "3458",
                      name: "Beirut",
                      abbreviation: "BA",
                      country_id: "1120"
                  },
                  {
                      id: "3459",
                      name: "Beqaa",
                      abbreviation: "BI",
                      country_id: "1120"
                  },
                  {
                      id: "3460",
                      name: "Mount Lebanon",
                      abbreviation: "JL",
                      country_id: "1120"
                  },
                  {
                      id: "3461",
                      name: "North Lebanon",
                      abbreviation: "AS",
                      country_id: "1120"
                  },
                  {
                      id: "3462",
                      name: "South Lebanon",
                      abbreviation: "JA",
                      country_id: "1120"
                  },
                  {
                      id: "3463",
                      name: "Nabatieh",
                      abbreviation: "NA",
                      country_id: "1120"
                  },
                  {
                      id: "3464",
                      name: "Ampara",
                      abbreviation: "52",
                      country_id: "1199"
                  },
                  {
                      id: "3465",
                      name: "Anuradhapura",
                      abbreviation: "71",
                      country_id: "1199"
                  },
                  {
                      id: "3466",
                      name: "Badulla",
                      abbreviation: "81",
                      country_id: "1199"
                  },
                  {
                      id: "3467",
                      name: "Batticaloa",
                      abbreviation: "51",
                      country_id: "1199"
                  },
                  {
                      id: "3468",
                      name: "Colombo",
                      abbreviation: "11",
                      country_id: "1199"
                  },
                  {
                      id: "3469",
                      name: "Galle",
                      abbreviation: "31",
                      country_id: "1199"
                  },
                  {
                      id: "3470",
                      name: "Gampaha",
                      abbreviation: "12",
                      country_id: "1199"
                  },
                  {
                      id: "3471",
                      name: "Hambantota",
                      abbreviation: "33",
                      country_id: "1199"
                  },
                  {
                      id: "3472",
                      name: "Jaffna",
                      abbreviation: "41",
                      country_id: "1199"
                  },
                  {
                      id: "3473",
                      name: "Kalutara",
                      abbreviation: "13",
                      country_id: "1199"
                  },
                  {
                      id: "3474",
                      name: "Kandy",
                      abbreviation: "21",
                      country_id: "1199"
                  },
                  {
                      id: "3475",
                      name: "Kegalla",
                      abbreviation: "92",
                      country_id: "1199"
                  },
                  {
                      id: "3476",
                      name: "Kilinochchi",
                      abbreviation: "42",
                      country_id: "1199"
                  },
                  {
                      id: "3477",
                      name: "Kurunegala",
                      abbreviation: "61",
                      country_id: "1199"
                  },
                  {
                      id: "3478",
                      name: "Mannar",
                      abbreviation: "43",
                      country_id: "1199"
                  },
                  {
                      id: "3479",
                      name: "Matale",
                      abbreviation: "22",
                      country_id: "1199"
                  },
                  {
                      id: "3480",
                      name: "Matara",
                      abbreviation: "32",
                      country_id: "1199"
                  },
                  {
                      id: "3481",
                      name: "Monaragala",
                      abbreviation: "82",
                      country_id: "1199"
                  },
                  {
                      id: "3482",
                      name: "Mullaittivu",
                      abbreviation: "45",
                      country_id: "1199"
                  },
                  {
                      id: "3483",
                      name: "Nuwara Eliya",
                      abbreviation: "23",
                      country_id: "1199"
                  },
                  {
                      id: "3484",
                      name: "Polonnaruwa",
                      abbreviation: "72",
                      country_id: "1199"
                  },
                  {
                      id: "3485",
                      name: "Puttalum",
                      abbreviation: "62",
                      country_id: "1199"
                  },
                  {
                      id: "3486",
                      name: "Ratnapura",
                      abbreviation: "91",
                      country_id: "1199"
                  },
                  {
                      id: "3487",
                      name: "Trincomalee",
                      abbreviation: "53",
                      country_id: "1199"
                  },
                  {
                      id: "3488",
                      name: "VavunLya",
                      abbreviation: "44",
                      country_id: "1199"
                  },
                  {
                      id: "3489",
                      name: "Bomi",
                      abbreviation: "BM",
                      country_id: "1122"
                  },
                  {
                      id: "3490",
                      name: "Bong",
                      abbreviation: "BG",
                      country_id: "1122"
                  },
                  {
                      id: "3491",
                      name: "Grand Basaa",
                      abbreviation: "GB",
                      country_id: "1122"
                  },
                  {
                      id: "3492",
                      name: "Grand Cape Mount",
                      abbreviation: "CM",
                      country_id: "1122"
                  },
                  {
                      id: "3493",
                      name: "Grand Gedeh",
                      abbreviation: "GG",
                      country_id: "1122"
                  },
                  {
                      id: "3494",
                      name: "Grand Kru",
                      abbreviation: "GK",
                      country_id: "1122"
                  },
                  {
                      id: "3495",
                      name: "Lofa",
                      abbreviation: "LO",
                      country_id: "1122"
                  },
                  {
                      id: "3496",
                      name: "Margibi",
                      abbreviation: "MG",
                      country_id: "1122"
                  },
                  {
                      id: "3497",
                      name: "Maryland",
                      abbreviation: "MY",
                      country_id: "1122"
                  },
                  {
                      id: "3498",
                      name: "Montserrado",
                      abbreviation: "MO",
                      country_id: "1122"
                  },
                  {
                      id: "3499",
                      name: "Nimba",
                      abbreviation: "NI",
                      country_id: "1122"
                  },
                  {
                      id: "3500",
                      name: "Rivercess",
                      abbreviation: "RI",
                      country_id: "1122"
                  },
                  {
                      id: "3501",
                      name: "Sinoe",
                      abbreviation: "SI",
                      country_id: "1122"
                  },
                  {
                      id: "3502",
                      name: "Berea",
                      abbreviation: "D",
                      country_id: "1121"
                  },
                  {
                      id: "3503",
                      name: "Butha-Buthe",
                      abbreviation: "B",
                      country_id: "1121"
                  },
                  {
                      id: "3504",
                      name: "Leribe",
                      abbreviation: "C",
                      country_id: "1121"
                  },
                  {
                      id: "3505",
                      name: "Mafeteng",
                      abbreviation: "E",
                      country_id: "1121"
                  },
                  {
                      id: "3506",
                      name: "Maseru",
                      abbreviation: "A",
                      country_id: "1121"
                  },
                  {
                      id: "3507",
                      name: "Mohale's Hoek",
                      abbreviation: "F",
                      country_id: "1121"
                  },
                  {
                      id: "3508",
                      name: "Mokhotlong",
                      abbreviation: "J",
                      country_id: "1121"
                  },
                  {
                      id: "3509",
                      name: "Qacha's Nek",
                      abbreviation: "H",
                      country_id: "1121"
                  },
                  {
                      id: "3510",
                      name: "Quthing",
                      abbreviation: "G",
                      country_id: "1121"
                  },
                  {
                      id: "3511",
                      name: "Thaba-Tseka",
                      abbreviation: "K",
                      country_id: "1121"
                  },
                  {
                      id: "3512",
                      name: "Alytaus Apskritis",
                      abbreviation: "AL",
                      country_id: "1125"
                  },
                  {
                      id: "3513",
                      name: "Kauno Apskritis",
                      abbreviation: "KU",
                      country_id: "1125"
                  },
                  {
                      id: "3514",
                      name: "Klaipėdos Apskritis",
                      abbreviation: "KL",
                      country_id: "1125"
                  },
                  {
                      id: "3515",
                      name: "Marijampolės Apskritis",
                      abbreviation: "MR",
                      country_id: "1125"
                  },
                  {
                      id: "3516",
                      name: "Panevėžio Apskritis",
                      abbreviation: "PN",
                      country_id: "1125"
                  },
                  {
                      id: "3517",
                      name: "Šiaulių Apskritis",
                      abbreviation: "SA",
                      country_id: "1125"
                  },
                  {
                      id: "3518",
                      name: "Tauragės Apskritis",
                      abbreviation: "TA",
                      country_id: "1125"
                  },
                  {
                      id: "3519",
                      name: "Telšių Apskritis",
                      abbreviation: "TE",
                      country_id: "1125"
                  },
                  {
                      id: "3520",
                      name: "Utenos Apskritis",
                      abbreviation: "UT",
                      country_id: "1125"
                  },
                  {
                      id: "3521",
                      name: "Vilniaus Apskritis",
                      abbreviation: "VL",
                      country_id: "1125"
                  },
                  {
                      id: "3522",
                      name: "Diekirch",
                      abbreviation: "D",
                      country_id: "1126"
                  },
                  {
                      id: "3523",
                      name: "GreveNmacher",
                      abbreviation: "G",
                      country_id: "1126"
                  },
                  {
                      id: "3550",
                      name: "Daugavpils",
                      abbreviation: "DGV",
                      country_id: "1119"
                  },
                  {
                      id: "3551",
                      name: "Jelgava",
                      abbreviation: "JEL",
                      country_id: "1119"
                  },
                  {
                      id: "3552",
                      name: "Jūrmala",
                      abbreviation: "JUR",
                      country_id: "1119"
                  },
                  {
                      id: "3553",
                      name: "Liepāja",
                      abbreviation: "LPX",
                      country_id: "1119"
                  },
                  {
                      id: "3554",
                      name: "Rēzekne",
                      abbreviation: "REZ",
                      country_id: "1119"
                  },
                  {
                      id: "3555",
                      name: "Rīga",
                      abbreviation: "RIX",
                      country_id: "1119"
                  },
                  {
                      id: "3556",
                      name: "Ventspils",
                      abbreviation: "VEN",
                      country_id: "1119"
                  },
                  {
                      id: "3557",
                      name: "Ajdābiyā",
                      abbreviation: "AJ",
                      country_id: "1123"
                  },
                  {
                      id: "3558",
                      name: "Al Buţnān",
                      abbreviation: "BU",
                      country_id: "1123"
                  },
                  {
                      id: "3559",
                      name: "Al Hizām al Akhdar",
                      abbreviation: "HZ",
                      country_id: "1123"
                  },
                  {
                      id: "3560",
                      name: "Al Jabal al Akhdar",
                      abbreviation: "JA",
                      country_id: "1123"
                  },
                  {
                      id: "3561",
                      name: "Al Jifārah",
                      abbreviation: "JI",
                      country_id: "1123"
                  },
                  {
                      id: "3562",
                      name: "Al Jufrah",
                      abbreviation: "JU",
                      country_id: "1123"
                  },
                  {
                      id: "3563",
                      name: "Al Kufrah",
                      abbreviation: "KF",
                      country_id: "1123"
                  },
                  {
                      id: "3564",
                      name: "Al Marj",
                      abbreviation: "MJ",
                      country_id: "1123"
                  },
                  {
                      id: "3565",
                      name: "Al Marqab",
                      abbreviation: "MB",
                      country_id: "1123"
                  },
                  {
                      id: "3566",
                      name: "Al Qaţrūn",
                      abbreviation: "QT",
                      country_id: "1123"
                  },
                  {
                      id: "3567",
                      name: "Al Qubbah",
                      abbreviation: "QB",
                      country_id: "1123"
                  },
                  {
                      id: "3568",
                      name: "Al Wāhah",
                      abbreviation: "WA",
                      country_id: "1123"
                  },
                  {
                      id: "3569",
                      name: "An Nuqaţ al Khams",
                      abbreviation: "NQ",
                      country_id: "1123"
                  },
                  {
                      id: "3570",
                      name: "Ash Shāţi'",
                      abbreviation: "SH",
                      country_id: "1123"
                  },
                  {
                      id: "3571",
                      name: "Az Zāwiyah",
                      abbreviation: "ZA",
                      country_id: "1123"
                  },
                  {
                      id: "3572",
                      name: "Banghāzī",
                      abbreviation: "BA",
                      country_id: "1123"
                  },
                  {
                      id: "3573",
                      name: "Banī Walīd",
                      abbreviation: "BW",
                      country_id: "1123"
                  },
                  {
                      id: "3574",
                      name: "Darnah",
                      abbreviation: "DR",
                      country_id: "1123"
                  },
                  {
                      id: "3575",
                      name: "Ghadāmis",
                      abbreviation: "GD",
                      country_id: "1123"
                  },
                  {
                      id: "3576",
                      name: "Gharyān",
                      abbreviation: "GR",
                      country_id: "1123"
                  },
                  {
                      id: "3577",
                      name: "Ghāt",
                      abbreviation: "GT",
                      country_id: "1123"
                  },
                  {
                      id: "3578",
                      name: "Jaghbūb",
                      abbreviation: "JB",
                      country_id: "1123"
                  },
                  {
                      id: "3579",
                      name: "Mişrātah",
                      abbreviation: "MI",
                      country_id: "1123"
                  },
                  {
                      id: "3580",
                      name: "Mizdah",
                      abbreviation: "MZ",
                      country_id: "1123"
                  },
                  {
                      id: "3581",
                      name: "Murzuq",
                      abbreviation: "MQ",
                      country_id: "1123"
                  },
                  {
                      id: "3582",
                      name: "Nālūt",
                      abbreviation: "NL",
                      country_id: "1123"
                  },
                  {
                      id: "3583",
                      name: "Sabhā",
                      abbreviation: "SB",
                      country_id: "1123"
                  },
                  {
                      id: "3584",
                      name: "Şabrātah Şurmān",
                      abbreviation: "SS",
                      country_id: "1123"
                  },
                  {
                      id: "3585",
                      name: "Surt",
                      abbreviation: "SR",
                      country_id: "1123"
                  },
                  {
                      id: "3586",
                      name: "Tājūrā' wa an Nawāhī al Arbāh",
                      abbreviation: "TN",
                      country_id: "1123"
                  },
                  {
                      id: "3587",
                      name: "Ţarābulus",
                      abbreviation: "TB",
                      country_id: "1123"
                  },
                  {
                      id: "3588",
                      name: "Tarhūnah-Masallātah",
                      abbreviation: "TM",
                      country_id: "1123"
                  },
                  {
                      id: "3589",
                      name: "Wādī al hayāt",
                      abbreviation: "WD",
                      country_id: "1123"
                  },
                  {
                      id: "3590",
                      name: "Yafran-Jādū",
                      abbreviation: "YJ",
                      country_id: "1123"
                  },
                  {
                      id: "3591",
                      name: "Agadir",
                      abbreviation: "AGD",
                      country_id: "1146"
                  },
                  {
                      id: "3592",
                      name: "Aït Baha",
                      abbreviation: "BAH",
                      country_id: "1146"
                  },
                  {
                      id: "3593",
                      name: "Aït Melloul",
                      abbreviation: "MEL",
                      country_id: "1146"
                  },
                  {
                      id: "3594",
                      name: "Al Haouz",
                      abbreviation: "HAO",
                      country_id: "1146"
                  },
                  {
                      id: "3595",
                      name: "Al Hoceïma",
                      abbreviation: "HOC",
                      country_id: "1146"
                  },
                  {
                      id: "3596",
                      name: "Assa-Zag",
                      abbreviation: "ASZ",
                      country_id: "1146"
                  },
                  {
                      id: "3597",
                      name: "Azilal",
                      abbreviation: "AZI",
                      country_id: "1146"
                  },
                  {
                      id: "3598",
                      name: "Beni Mellal",
                      abbreviation: "BEM",
                      country_id: "1146"
                  },
                  {
                      id: "3599",
                      name: "Ben Sllmane",
                      abbreviation: "BES",
                      country_id: "1146"
                  },
                  {
                      id: "3600",
                      name: "Berkane",
                      abbreviation: "BER",
                      country_id: "1146"
                  },
                  {
                      id: "3601",
                      name: "Boujdour",
                      abbreviation: "BOD",
                      country_id: "1146"
                  },
                  {
                      id: "3602",
                      name: "Boulemane",
                      abbreviation: "BOM",
                      country_id: "1146"
                  },
                  {
                      id: "3603",
                      name: "Casablanca  [Dar el Beïda]",
                      abbreviation: "CAS",
                      country_id: "1146"
                  },
                  {
                      id: "3604",
                      name: "Chefchaouene",
                      abbreviation: "CHE",
                      country_id: "1146"
                  },
                  {
                      id: "3605",
                      name: "Chichaoua",
                      abbreviation: "CHI",
                      country_id: "1146"
                  },
                  {
                      id: "3606",
                      name: "El Hajeb",
                      abbreviation: "HAJ",
                      country_id: "1146"
                  },
                  {
                      id: "3607",
                      name: "El Jadida",
                      abbreviation: "JDI",
                      country_id: "1146"
                  },
                  {
                      id: "3608",
                      name: "Errachidia",
                      abbreviation: "ERR",
                      country_id: "1146"
                  },
                  {
                      id: "3609",
                      name: "Essaouira",
                      abbreviation: "ESI",
                      country_id: "1146"
                  },
                  {
                      id: "3610",
                      name: "Es Smara",
                      abbreviation: "ESM",
                      country_id: "1146"
                  },
                  {
                      id: "3611",
                      name: "Fès",
                      abbreviation: "FES",
                      country_id: "1146"
                  },
                  {
                      id: "3612",
                      name: "Figuig",
                      abbreviation: "FIG",
                      country_id: "1146"
                  },
                  {
                      id: "3613",
                      name: "Guelmim",
                      abbreviation: "GUE",
                      country_id: "1146"
                  },
                  {
                      id: "3614",
                      name: "Ifrane",
                      abbreviation: "IFR",
                      country_id: "1146"
                  },
                  {
                      id: "3615",
                      name: "Jerada",
                      abbreviation: "JRA",
                      country_id: "1146"
                  },
                  {
                      id: "3616",
                      name: "Kelaat Sraghna",
                      abbreviation: "KES",
                      country_id: "1146"
                  },
                  {
                      id: "3617",
                      name: "Kénitra",
                      abbreviation: "KEN",
                      country_id: "1146"
                  },
                  {
                      id: "3618",
                      name: "Khemisaet",
                      abbreviation: "KHE",
                      country_id: "1146"
                  },
                  {
                      id: "3619",
                      name: "Khenifra",
                      abbreviation: "KHN",
                      country_id: "1146"
                  },
                  {
                      id: "3620",
                      name: "Khouribga",
                      abbreviation: "KHO",
                      country_id: "1146"
                  },
                  {
                      id: "3621",
                      name: "Laâyoune (EH)",
                      abbreviation: "LAA",
                      country_id: "1146"
                  },
                  {
                      id: "3622",
                      name: "Larache",
                      abbreviation: "LAP",
                      country_id: "1146"
                  },
                  {
                      id: "3623",
                      name: "Marrakech",
                      abbreviation: "MAR",
                      country_id: "1146"
                  },
                  {
                      id: "3624",
                      name: "Meknsès",
                      abbreviation: "MEK",
                      country_id: "1146"
                  },
                  {
                      id: "3625",
                      name: "Nador",
                      abbreviation: "NAD",
                      country_id: "1146"
                  },
                  {
                      id: "3626",
                      name: "Ouarzazate",
                      abbreviation: "OUA",
                      country_id: "1146"
                  },
                  {
                      id: "3627",
                      name: "Oued ed Dahab (EH)",
                      abbreviation: "OUD",
                      country_id: "1146"
                  },
                  {
                      id: "3628",
                      name: "Oujda",
                      abbreviation: "OUJ",
                      country_id: "1146"
                  },
                  {
                      id: "3629",
                      name: "Rabat-Salé",
                      abbreviation: "RBA",
                      country_id: "1146"
                  },
                  {
                      id: "3630",
                      name: "Safi",
                      abbreviation: "SAF",
                      country_id: "1146"
                  },
                  {
                      id: "3631",
                      name: "Sefrou",
                      abbreviation: "SEF",
                      country_id: "1146"
                  },
                  {
                      id: "3632",
                      name: "Settat",
                      abbreviation: "SET",
                      country_id: "1146"
                  },
                  {
                      id: "3633",
                      name: "Sidl Kacem",
                      abbreviation: "SIK",
                      country_id: "1146"
                  },
                  {
                      id: "3634",
                      name: "Tanger",
                      abbreviation: "TNG",
                      country_id: "1146"
                  },
                  {
                      id: "3635",
                      name: "Tan-Tan",
                      abbreviation: "TNT",
                      country_id: "1146"
                  },
                  {
                      id: "3636",
                      name: "Taounate",
                      abbreviation: "TAO",
                      country_id: "1146"
                  },
                  {
                      id: "3637",
                      name: "Taroudannt",
                      abbreviation: "TAR",
                      country_id: "1146"
                  },
                  {
                      id: "3638",
                      name: "Tata",
                      abbreviation: "TAT",
                      country_id: "1146"
                  },
                  {
                      id: "3639",
                      name: "Taza",
                      abbreviation: "TAZ",
                      country_id: "1146"
                  },
                  {
                      id: "3640",
                      name: "Tétouan",
                      abbreviation: "TET",
                      country_id: "1146"
                  },
                  {
                      id: "3641",
                      name: "Tiznit",
                      abbreviation: "TIZ",
                      country_id: "1146"
                  },
                  {
                      id: "3642",
                      name: "Gagauzia, Unitate Teritoriala Autonoma",
                      abbreviation: "GA",
                      country_id: "1142"
                  },
                  {
                      id: "3643",
                      name: "Chisinau",
                      abbreviation: "CU",
                      country_id: "1142"
                  },
                  {
                      id: "3644",
                      name: "Stinga Nistrului, unitatea teritoriala din",
                      abbreviation: "SN",
                      country_id: "1142"
                  },
                  {
                      id: "3645",
                      name: "Balti",
                      abbreviation: "BA",
                      country_id: "1142"
                  },
                  {
                      id: "3646",
                      name: "Cahul",
                      abbreviation: "CA",
                      country_id: "1142"
                  },
                  {
                      id: "3647",
                      name: "Edinet",
                      abbreviation: "ED",
                      country_id: "1142"
                  },
                  {
                      id: "3648",
                      name: "Lapusna",
                      abbreviation: "LA",
                      country_id: "1142"
                  },
                  {
                      id: "3649",
                      name: "Orhei",
                      abbreviation: "OR",
                      country_id: "1142"
                  },
                  {
                      id: "3650",
                      name: "Soroca",
                      abbreviation: "SO",
                      country_id: "1142"
                  },
                  {
                      id: "3651",
                      name: "Taraclia",
                      abbreviation: "TA",
                      country_id: "1142"
                  },
                  {
                      id: "3652",
                      name: "Tighina [Bender]",
                      abbreviation: "TI",
                      country_id: "1142"
                  },
                  {
                      id: "3653",
                      name: "Ungheni",
                      abbreviation: "UN",
                      country_id: "1142"
                  },
                  {
                      id: "3654",
                      name: "Antananarivo",
                      abbreviation: "T",
                      country_id: "1129"
                  },
                  {
                      id: "3655",
                      name: "Antsiranana",
                      abbreviation: "D",
                      country_id: "1129"
                  },
                  {
                      id: "3656",
                      name: "Fianarantsoa",
                      abbreviation: "F",
                      country_id: "1129"
                  },
                  {
                      id: "3657",
                      name: "Mahajanga",
                      abbreviation: "M",
                      country_id: "1129"
                  },
                  {
                      id: "3658",
                      name: "Toamasina",
                      abbreviation: "A",
                      country_id: "1129"
                  },
                  {
                      id: "3659",
                      name: "Toliara",
                      abbreviation: "U",
                      country_id: "1129"
                  },
                  {
                      id: "3660",
                      name: "Ailinglapalap",
                      abbreviation: "ALL",
                      country_id: "1135"
                  },
                  {
                      id: "3661",
                      name: "Ailuk",
                      abbreviation: "ALK",
                      country_id: "1135"
                  },
                  {
                      id: "3662",
                      name: "Arno",
                      abbreviation: "ARN",
                      country_id: "1135"
                  },
                  {
                      id: "3663",
                      name: "Aur",
                      abbreviation: "AUR",
                      country_id: "1135"
                  },
                  {
                      id: "3664",
                      name: "Ebon",
                      abbreviation: "EBO",
                      country_id: "1135"
                  },
                  {
                      id: "3665",
                      name: "Eniwetok",
                      abbreviation: "ENI",
                      country_id: "1135"
                  },
                  {
                      id: "3666",
                      name: "Jaluit",
                      abbreviation: "JAL",
                      country_id: "1135"
                  },
                  {
                      id: "3667",
                      name: "Kili",
                      abbreviation: "KIL",
                      country_id: "1135"
                  },
                  {
                      id: "3668",
                      name: "Kwajalein",
                      abbreviation: "KWA",
                      country_id: "1135"
                  },
                  {
                      id: "3669",
                      name: "Lae",
                      abbreviation: "LAE",
                      country_id: "1135"
                  },
                  {
                      id: "3670",
                      name: "Lib",
                      abbreviation: "LIB",
                      country_id: "1135"
                  },
                  {
                      id: "3671",
                      name: "Likiep",
                      abbreviation: "LIK",
                      country_id: "1135"
                  },
                  {
                      id: "3672",
                      name: "Majuro",
                      abbreviation: "MAJ",
                      country_id: "1135"
                  },
                  {
                      id: "3673",
                      name: "Maloelap",
                      abbreviation: "MAL",
                      country_id: "1135"
                  },
                  {
                      id: "3674",
                      name: "Mejit",
                      abbreviation: "MEJ",
                      country_id: "1135"
                  },
                  {
                      id: "3675",
                      name: "Mili",
                      abbreviation: "MIL",
                      country_id: "1135"
                  },
                  {
                      id: "3676",
                      name: "Namorik",
                      abbreviation: "NMK",
                      country_id: "1135"
                  },
                  {
                      id: "3677",
                      name: "Namu",
                      abbreviation: "NMU",
                      country_id: "1135"
                  },
                  {
                      id: "3678",
                      name: "Rongelap",
                      abbreviation: "RON",
                      country_id: "1135"
                  },
                  {
                      id: "3679",
                      name: "Ujae",
                      abbreviation: "UJA",
                      country_id: "1135"
                  },
                  {
                      id: "3680",
                      name: "Ujelang",
                      abbreviation: "UJL",
                      country_id: "1135"
                  },
                  {
                      id: "3681",
                      name: "Utirik",
                      abbreviation: "UTI",
                      country_id: "1135"
                  },
                  {
                      id: "3682",
                      name: "Wotho",
                      abbreviation: "WTN",
                      country_id: "1135"
                  },
                  {
                      id: "3683",
                      name: "Wotje",
                      abbreviation: "WTJ",
                      country_id: "1135"
                  },
                  {
                      id: "3684",
                      name: "Bamako",
                      abbreviation: "BK0",
                      country_id: "1133"
                  },
                  {
                      id: "3685",
                      name: "Gao",
                      abbreviation: "7",
                      country_id: "1133"
                  },
                  {
                      id: "3686",
                      name: "Kayes",
                      abbreviation: "1",
                      country_id: "1133"
                  },
                  {
                      id: "3687",
                      name: "Kidal",
                      abbreviation: "8",
                      country_id: "1133"
                  },
                  {
                      id: "3688",
                      name: "Xoulikoro",
                      abbreviation: "2",
                      country_id: "1133"
                  },
                  {
                      id: "3689",
                      name: "Mopti",
                      abbreviation: "5",
                      country_id: "1133"
                  },
                  {
                      id: "3690",
                      name: "S69ou",
                      abbreviation: "4",
                      country_id: "1133"
                  },
                  {
                      id: "3691",
                      name: "Sikasso",
                      abbreviation: "3",
                      country_id: "1133"
                  },
                  {
                      id: "3692",
                      name: "Tombouctou",
                      abbreviation: "6",
                      country_id: "1133"
                  },
                  {
                      id: "3693",
                      name: "Ayeyarwady",
                      abbreviation: "07",
                      country_id: "1035"
                  },
                  {
                      id: "3694",
                      name: "Bago",
                      abbreviation: "02",
                      country_id: "1035"
                  },
                  {
                      id: "3695",
                      name: "Magway",
                      abbreviation: "03",
                      country_id: "1035"
                  },
                  {
                      id: "3696",
                      name: "Mandalay",
                      abbreviation: "04",
                      country_id: "1035"
                  },
                  {
                      id: "3697",
                      name: "Sagaing",
                      abbreviation: "01",
                      country_id: "1035"
                  },
                  {
                      id: "3698",
                      name: "Tanintharyi",
                      abbreviation: "05",
                      country_id: "1035"
                  },
                  {
                      id: "3699",
                      name: "Yangon",
                      abbreviation: "06",
                      country_id: "1035"
                  },
                  {
                      id: "3700",
                      name: "Chin",
                      abbreviation: "14",
                      country_id: "1035"
                  },
                  {
                      id: "3701",
                      name: "Kachin",
                      abbreviation: "11",
                      country_id: "1035"
                  },
                  {
                      id: "3702",
                      name: "Kayah",
                      abbreviation: "12",
                      country_id: "1035"
                  },
                  {
                      id: "3703",
                      name: "Kayin",
                      abbreviation: "13",
                      country_id: "1035"
                  },
                  {
                      id: "3704",
                      name: "Mon",
                      abbreviation: "15",
                      country_id: "1035"
                  },
                  {
                      id: "3705",
                      name: "Rakhine",
                      abbreviation: "16",
                      country_id: "1035"
                  },
                  {
                      id: "3706",
                      name: "Shan",
                      abbreviation: "17",
                      country_id: "1035"
                  },
                  {
                      id: "3707",
                      name: "Ulaanbaatar",
                      abbreviation: "1",
                      country_id: "1144"
                  },
                  {
                      id: "3708",
                      name: "Arhangay",
                      abbreviation: "073",
                      country_id: "1144"
                  },
                  {
                      id: "3709",
                      name: "Bayanhongor",
                      abbreviation: "069",
                      country_id: "1144"
                  },
                  {
                      id: "3710",
                      name: "Bayan-Olgiy",
                      abbreviation: "071",
                      country_id: "1144"
                  },
                  {
                      id: "3711",
                      name: "Bulgan",
                      abbreviation: "067",
                      country_id: "1144"
                  },
                  {
                      id: "3712",
                      name: "Darhan uul",
                      abbreviation: "037",
                      country_id: "1144"
                  },
                  {
                      id: "3713",
                      name: "Dornod",
                      abbreviation: "061",
                      country_id: "1144"
                  },
                  {
                      id: "3714",
                      name: "Dornogov,",
                      abbreviation: "063",
                      country_id: "1144"
                  },
                  {
                      id: "3715",
                      name: "DundgovL",
                      abbreviation: "059",
                      country_id: "1144"
                  },
                  {
                      id: "3716",
                      name: "Dzavhan",
                      abbreviation: "057",
                      country_id: "1144"
                  },
                  {
                      id: "3717",
                      name: "Govi-Altay",
                      abbreviation: "065",
                      country_id: "1144"
                  },
                  {
                      id: "3718",
                      name: "Govi-Smber",
                      abbreviation: "064",
                      country_id: "1144"
                  },
                  {
                      id: "3719",
                      name: "Hentiy",
                      abbreviation: "039",
                      country_id: "1144"
                  },
                  {
                      id: "3720",
                      name: "Hovd",
                      abbreviation: "043",
                      country_id: "1144"
                  },
                  {
                      id: "3721",
                      name: "Hovsgol",
                      abbreviation: "041",
                      country_id: "1144"
                  },
                  {
                      id: "3722",
                      name: "Omnogovi",
                      abbreviation: "053",
                      country_id: "1144"
                  },
                  {
                      id: "3723",
                      name: "Orhon",
                      abbreviation: "035",
                      country_id: "1144"
                  },
                  {
                      id: "3724",
                      name: "Ovorhangay",
                      abbreviation: "055",
                      country_id: "1144"
                  },
                  {
                      id: "3725",
                      name: "Selenge",
                      abbreviation: "049",
                      country_id: "1144"
                  },
                  {
                      id: "3726",
                      name: "Shbaatar",
                      abbreviation: "051",
                      country_id: "1144"
                  },
                  {
                      id: "3727",
                      name: "Tov",
                      abbreviation: "047",
                      country_id: "1144"
                  },
                  {
                      id: "3728",
                      name: "Uvs",
                      abbreviation: "046",
                      country_id: "1144"
                  },
                  {
                      id: "3729",
                      name: "Nouakchott",
                      abbreviation: "NKC",
                      country_id: "1137"
                  },
                  {
                      id: "3730",
                      name: "Assaba",
                      abbreviation: "03",
                      country_id: "1137"
                  },
                  {
                      id: "3731",
                      name: "Brakna",
                      abbreviation: "05",
                      country_id: "1137"
                  },
                  {
                      id: "3732",
                      name: "Dakhlet Nouadhibou",
                      abbreviation: "08",
                      country_id: "1137"
                  },
                  {
                      id: "3733",
                      name: "Gorgol",
                      abbreviation: "04",
                      country_id: "1137"
                  },
                  {
                      id: "3734",
                      name: "Guidimaka",
                      abbreviation: "10",
                      country_id: "1137"
                  },
                  {
                      id: "3735",
                      name: "Hodh ech Chargui",
                      abbreviation: "01",
                      country_id: "1137"
                  },
                  {
                      id: "3736",
                      name: "Hodh el Charbi",
                      abbreviation: "02",
                      country_id: "1137"
                  },
                  {
                      id: "3737",
                      name: "Inchiri",
                      abbreviation: "12",
                      country_id: "1137"
                  },
                  {
                      id: "3738",
                      name: "Tagant",
                      abbreviation: "09",
                      country_id: "1137"
                  },
                  {
                      id: "3739",
                      name: "Tiris Zemmour",
                      abbreviation: "11",
                      country_id: "1137"
                  },
                  {
                      id: "3740",
                      name: "Trarza",
                      abbreviation: "06",
                      country_id: "1137"
                  },
                  {
                      id: "3741",
                      name: "Beau Bassin-Rose Hill",
                      abbreviation: "BR",
                      country_id: "1138"
                  },
                  {
                      id: "3742",
                      name: "Curepipe",
                      abbreviation: "CU",
                      country_id: "1138"
                  },
                  {
                      id: "3743",
                      name: "Port Louis",
                      abbreviation: "PU",
                      country_id: "1138"
                  },
                  {
                      id: "3744",
                      name: "Quatre Bornes",
                      abbreviation: "QB",
                      country_id: "1138"
                  },
                  {
                      id: "3745",
                      name: "Vacosa-Phoenix",
                      abbreviation: "VP",
                      country_id: "1138"
                  },
                  {
                      id: "3746",
                      name: "Black River",
                      abbreviation: "BL",
                      country_id: "1138"
                  },
                  {
                      id: "3747",
                      name: "Flacq",
                      abbreviation: "FL",
                      country_id: "1138"
                  },
                  {
                      id: "3748",
                      name: "Grand Port",
                      abbreviation: "GP",
                      country_id: "1138"
                  },
                  {
                      id: "3749",
                      name: "Moka",
                      abbreviation: "MO",
                      country_id: "1138"
                  },
                  {
                      id: "3750",
                      name: "Pamplemousses",
                      abbreviation: "PA",
                      country_id: "1138"
                  },
                  {
                      id: "3751",
                      name: "Plaines Wilhems",
                      abbreviation: "PW",
                      country_id: "1138"
                  },
                  {
                      id: "3752",
                      name: "Riviere du Rempart",
                      abbreviation: "RP",
                      country_id: "1138"
                  },
                  {
                      id: "3753",
                      name: "Savanne",
                      abbreviation: "SA",
                      country_id: "1138"
                  },
                  {
                      id: "3754",
                      name: "Agalega Islands",
                      abbreviation: "AG",
                      country_id: "1138"
                  },
                  {
                      id: "3755",
                      name: "Cargados Carajos Shoals",
                      abbreviation: "CC",
                      country_id: "1138"
                  },
                  {
                      id: "3756",
                      name: "Rodrigues Island",
                      abbreviation: "RO",
                      country_id: "1138"
                  },
                  {
                      id: "3757",
                      name: "Male",
                      abbreviation: "MLE",
                      country_id: "1132"
                  },
                  {
                      id: "3758",
                      name: "Alif",
                      abbreviation: "02",
                      country_id: "1132"
                  },
                  {
                      id: "3759",
                      name: "Baa",
                      abbreviation: "20",
                      country_id: "1132"
                  },
                  {
                      id: "3760",
                      name: "Dhaalu",
                      abbreviation: "17",
                      country_id: "1132"
                  },
                  {
                      id: "3761",
                      name: "Faafu",
                      abbreviation: "14",
                      country_id: "1132"
                  },
                  {
                      id: "3762",
                      name: "Gaaf Alif",
                      abbreviation: "27",
                      country_id: "1132"
                  },
                  {
                      id: "3763",
                      name: "Gaefu Dhaalu",
                      abbreviation: "28",
                      country_id: "1132"
                  },
                  {
                      id: "3764",
                      name: "Gnaviyani",
                      abbreviation: "29",
                      country_id: "1132"
                  },
                  {
                      id: "3765",
                      name: "Haa Alif",
                      abbreviation: "07",
                      country_id: "1132"
                  },
                  {
                      id: "3766",
                      name: "Haa Dhaalu",
                      abbreviation: "23",
                      country_id: "1132"
                  },
                  {
                      id: "3767",
                      name: "Kaafu",
                      abbreviation: "26",
                      country_id: "1132"
                  },
                  {
                      id: "3768",
                      name: "Laamu",
                      abbreviation: "05",
                      country_id: "1132"
                  },
                  {
                      id: "3769",
                      name: "Lhaviyani",
                      abbreviation: "03",
                      country_id: "1132"
                  },
                  {
                      id: "3770",
                      name: "Meemu",
                      abbreviation: "12",
                      country_id: "1132"
                  },
                  {
                      id: "3771",
                      name: "Noonu",
                      abbreviation: "25",
                      country_id: "1132"
                  },
                  {
                      id: "3772",
                      name: "Raa",
                      abbreviation: "13",
                      country_id: "1132"
                  },
                  {
                      id: "3773",
                      name: "Seenu",
                      abbreviation: "01",
                      country_id: "1132"
                  },
                  {
                      id: "3774",
                      name: "Shaviyani",
                      abbreviation: "24",
                      country_id: "1132"
                  },
                  {
                      id: "3775",
                      name: "Thaa",
                      abbreviation: "08",
                      country_id: "1132"
                  },
                  {
                      id: "3776",
                      name: "Vaavu",
                      abbreviation: "04",
                      country_id: "1132"
                  },
                  {
                      id: "3777",
                      name: "Balaka",
                      abbreviation: "BA",
                      country_id: "1130"
                  },
                  {
                      id: "3778",
                      name: "Blantyre",
                      abbreviation: "BL",
                      country_id: "1130"
                  },
                  {
                      id: "3779",
                      name: "Chikwawa",
                      abbreviation: "CK",
                      country_id: "1130"
                  },
                  {
                      id: "3780",
                      name: "Chiradzulu",
                      abbreviation: "CR",
                      country_id: "1130"
                  },
                  {
                      id: "3781",
                      name: "Chitipa",
                      abbreviation: "CT",
                      country_id: "1130"
                  },
                  {
                      id: "3782",
                      name: "Dedza",
                      abbreviation: "DE",
                      country_id: "1130"
                  },
                  {
                      id: "3783",
                      name: "Dowa",
                      abbreviation: "DO",
                      country_id: "1130"
                  },
                  {
                      id: "3784",
                      name: "Karonga",
                      abbreviation: "KR",
                      country_id: "1130"
                  },
                  {
                      id: "3785",
                      name: "Kasungu",
                      abbreviation: "KS",
                      country_id: "1130"
                  },
                  {
                      id: "3786",
                      name: "Likoma Island",
                      abbreviation: "LK",
                      country_id: "1130"
                  },
                  {
                      id: "3787",
                      name: "Lilongwe",
                      abbreviation: "LI",
                      country_id: "1130"
                  },
                  {
                      id: "3788",
                      name: "Machinga",
                      abbreviation: "MH",
                      country_id: "1130"
                  },
                  {
                      id: "3789",
                      name: "Mangochi",
                      abbreviation: "MG",
                      country_id: "1130"
                  },
                  {
                      id: "3790",
                      name: "Mchinji",
                      abbreviation: "MC",
                      country_id: "1130"
                  },
                  {
                      id: "3791",
                      name: "Mulanje",
                      abbreviation: "MU",
                      country_id: "1130"
                  },
                  {
                      id: "3792",
                      name: "Mwanza",
                      abbreviation: "MW",
                      country_id: "1130"
                  },
                  {
                      id: "3793",
                      name: "Mzimba",
                      abbreviation: "MZ",
                      country_id: "1130"
                  },
                  {
                      id: "3794",
                      name: "Nkhata Bay",
                      abbreviation: "NB",
                      country_id: "1130"
                  },
                  {
                      id: "3795",
                      name: "Nkhotakota",
                      abbreviation: "NK",
                      country_id: "1130"
                  },
                  {
                      id: "3796",
                      name: "Nsanje",
                      abbreviation: "NS",
                      country_id: "1130"
                  },
                  {
                      id: "3797",
                      name: "Ntcheu",
                      abbreviation: "NU",
                      country_id: "1130"
                  },
                  {
                      id: "3798",
                      name: "Ntchisi",
                      abbreviation: "NI",
                      country_id: "1130"
                  },
                  {
                      id: "3799",
                      name: "Phalomba",
                      abbreviation: "PH",
                      country_id: "1130"
                  },
                  {
                      id: "3800",
                      name: "Rumphi",
                      abbreviation: "RU",
                      country_id: "1130"
                  },
                  {
                      id: "3801",
                      name: "Salima",
                      abbreviation: "SA",
                      country_id: "1130"
                  },
                  {
                      id: "3802",
                      name: "Thyolo",
                      abbreviation: "TH",
                      country_id: "1130"
                  },
                  {
                      id: "3803",
                      name: "Zomba",
                      abbreviation: "ZO",
                      country_id: "1130"
                  },
                  {
                      id: "3804",
                      name: "Aguascalientes",
                      abbreviation: "AGU",
                      country_id: "1140"
                  },
                  {
                      id: "3805",
                      name: "Baja California",
                      abbreviation: "BCN",
                      country_id: "1140"
                  },
                  {
                      id: "3806",
                      name: "Baja California Sur",
                      abbreviation: "BCS",
                      country_id: "1140"
                  },
                  {
                      id: "3807",
                      name: "Campeche",
                      abbreviation: "CAM",
                      country_id: "1140"
                  },
                  {
                      id: "3808",
                      name: "Coahuila",
                      abbreviation: "COA",
                      country_id: "1140"
                  },
                  {
                      id: "3809",
                      name: "Colima",
                      abbreviation: "COL",
                      country_id: "1140"
                  },
                  {
                      id: "3810",
                      name: "Chiapas",
                      abbreviation: "CHP",
                      country_id: "1140"
                  },
                  {
                      id: "3811",
                      name: "Chihuahua",
                      abbreviation: "CHH",
                      country_id: "1140"
                  },
                  {
                      id: "3812",
                      name: "Durango",
                      abbreviation: "DUR",
                      country_id: "1140"
                  },
                  {
                      id: "3813",
                      name: "Guanajuato",
                      abbreviation: "GUA",
                      country_id: "1140"
                  },
                  {
                      id: "3814",
                      name: "Guerrero",
                      abbreviation: "GRO",
                      country_id: "1140"
                  },
                  {
                      id: "3815",
                      name: "Hidalgo",
                      abbreviation: "HID",
                      country_id: "1140"
                  },
                  {
                      id: "3816",
                      name: "Jalisco",
                      abbreviation: "JAL",
                      country_id: "1140"
                  },
                  {
                      id: "3817",
                      name: "Mexico",
                      abbreviation: "MEX",
                      country_id: "1140"
                  },
                  {
                      id: "3818",
                      name: "Michoacin",
                      abbreviation: "MIC",
                      country_id: "1140"
                  },
                  {
                      id: "3819",
                      name: "Morelos",
                      abbreviation: "MOR",
                      country_id: "1140"
                  },
                  {
                      id: "3820",
                      name: "Nayarit",
                      abbreviation: "NAY",
                      country_id: "1140"
                  },
                  {
                      id: "3821",
                      name: "Nuevo Leon",
                      abbreviation: "NLE",
                      country_id: "1140"
                  },
                  {
                      id: "3822",
                      name: "Oaxaca",
                      abbreviation: "OAX",
                      country_id: "1140"
                  },
                  {
                      id: "3823",
                      name: "Puebla",
                      abbreviation: "PUE",
                      country_id: "1140"
                  },
                  {
                      id: "3824",
                      name: "Queretaro",
                      abbreviation: "QUE",
                      country_id: "1140"
                  },
                  {
                      id: "3825",
                      name: "Quintana Roo",
                      abbreviation: "ROO",
                      country_id: "1140"
                  },
                  {
                      id: "3826",
                      name: "San Luis Potosi",
                      abbreviation: "SLP",
                      country_id: "1140"
                  },
                  {
                      id: "3827",
                      name: "Sinaloa",
                      abbreviation: "SIN",
                      country_id: "1140"
                  },
                  {
                      id: "3828",
                      name: "Sonora",
                      abbreviation: "SON",
                      country_id: "1140"
                  },
                  {
                      id: "3829",
                      name: "Tabasco",
                      abbreviation: "TAB",
                      country_id: "1140"
                  },
                  {
                      id: "3830",
                      name: "Tamaulipas",
                      abbreviation: "TAM",
                      country_id: "1140"
                  },
                  {
                      id: "3831",
                      name: "Tlaxcala",
                      abbreviation: "TLA",
                      country_id: "1140"
                  },
                  {
                      id: "3832",
                      name: "Veracruz",
                      abbreviation: "VER",
                      country_id: "1140"
                  },
                  {
                      id: "3833",
                      name: "Yucatan",
                      abbreviation: "YUC",
                      country_id: "1140"
                  },
                  {
                      id: "3834",
                      name: "Zacatecas",
                      abbreviation: "ZAC",
                      country_id: "1140"
                  },
                  {
                      id: "3835",
                      name: "Wilayah Persekutuan Kuala Lumpur",
                      abbreviation: "14",
                      country_id: "1131"
                  },
                  {
                      id: "3836",
                      name: "Wilayah Persekutuan Labuan",
                      abbreviation: "15",
                      country_id: "1131"
                  },
                  {
                      id: "3837",
                      name: "Wilayah Persekutuan Putrajaya",
                      abbreviation: "16",
                      country_id: "1131"
                  },
                  {
                      id: "3838",
                      name: "Johor",
                      abbreviation: "01",
                      country_id: "1131"
                  },
                  {
                      id: "3839",
                      name: "Kedah",
                      abbreviation: "02",
                      country_id: "1131"
                  },
                  {
                      id: "3840",
                      name: "Kelantan",
                      abbreviation: "03",
                      country_id: "1131"
                  },
                  {
                      id: "3841",
                      name: "Melaka",
                      abbreviation: "04",
                      country_id: "1131"
                  },
                  {
                      id: "3842",
                      name: "Negeri Sembilan",
                      abbreviation: "05",
                      country_id: "1131"
                  },
                  {
                      id: "3843",
                      name: "Pahang",
                      abbreviation: "06",
                      country_id: "1131"
                  },
                  {
                      id: "3844",
                      name: "Perak",
                      abbreviation: "08",
                      country_id: "1131"
                  },
                  {
                      id: "3845",
                      name: "Perlis",
                      abbreviation: "09",
                      country_id: "1131"
                  },
                  {
                      id: "3846",
                      name: "Pulau Pinang",
                      abbreviation: "07",
                      country_id: "1131"
                  },
                  {
                      id: "3847",
                      name: "Sabah",
                      abbreviation: "12",
                      country_id: "1131"
                  },
                  {
                      id: "3848",
                      name: "Sarawak",
                      abbreviation: "13",
                      country_id: "1131"
                  },
                  {
                      id: "3849",
                      name: "Selangor",
                      abbreviation: "10",
                      country_id: "1131"
                  },
                  {
                      id: "3850",
                      name: "Terengganu",
                      abbreviation: "11",
                      country_id: "1131"
                  },
                  {
                      id: "3851",
                      name: "Maputo",
                      abbreviation: "MPM",
                      country_id: "1147"
                  },
                  {
                      id: "3852",
                      name: "Cabo Delgado",
                      abbreviation: "P",
                      country_id: "1147"
                  },
                  {
                      id: "3853",
                      name: "Gaza",
                      abbreviation: "G",
                      country_id: "1147"
                  },
                  {
                      id: "3854",
                      name: "Inhambane",
                      abbreviation: "I",
                      country_id: "1147"
                  },
                  {
                      id: "3855",
                      name: "Manica",
                      abbreviation: "B",
                      country_id: "1147"
                  },
                  {
                      id: "3856",
                      name: "Numpula",
                      abbreviation: "N",
                      country_id: "1147"
                  },
                  {
                      id: "3857",
                      name: "Niaaea",
                      abbreviation: "A",
                      country_id: "1147"
                  },
                  {
                      id: "3858",
                      name: "Sofala",
                      abbreviation: "S",
                      country_id: "1147"
                  },
                  {
                      id: "3859",
                      name: "Tete",
                      abbreviation: "T",
                      country_id: "1147"
                  },
                  {
                      id: "3860",
                      name: "Zambezia",
                      abbreviation: "Q",
                      country_id: "1147"
                  },
                  {
                      id: "3861",
                      name: "Caprivi",
                      abbreviation: "CA",
                      country_id: "1148"
                  },
                  {
                      id: "3862",
                      name: "Erongo",
                      abbreviation: "ER",
                      country_id: "1148"
                  },
                  {
                      id: "3863",
                      name: "Hardap",
                      abbreviation: "HA",
                      country_id: "1148"
                  },
                  {
                      id: "3864",
                      name: "Karas",
                      abbreviation: "KA",
                      country_id: "1148"
                  },
                  {
                      id: "3865",
                      name: "Khomas",
                      abbreviation: "KH",
                      country_id: "1148"
                  },
                  {
                      id: "3866",
                      name: "Kunene",
                      abbreviation: "KU",
                      country_id: "1148"
                  },
                  {
                      id: "3867",
                      name: "Ohangwena",
                      abbreviation: "OW",
                      country_id: "1148"
                  },
                  {
                      id: "3868",
                      name: "Okavango",
                      abbreviation: "OK",
                      country_id: "1148"
                  },
                  {
                      id: "3869",
                      name: "Omaheke",
                      abbreviation: "OH",
                      country_id: "1148"
                  },
                  {
                      id: "3870",
                      name: "Omusati",
                      abbreviation: "OS",
                      country_id: "1148"
                  },
                  {
                      id: "3871",
                      name: "Oshana",
                      abbreviation: "ON",
                      country_id: "1148"
                  },
                  {
                      id: "3872",
                      name: "Oshikoto",
                      abbreviation: "OT",
                      country_id: "1148"
                  },
                  {
                      id: "3873",
                      name: "Otjozondjupa",
                      abbreviation: "OD",
                      country_id: "1148"
                  },
                  {
                      id: "3874",
                      name: "Niamey",
                      abbreviation: "8",
                      country_id: "1156"
                  },
                  {
                      id: "3875",
                      name: "Agadez",
                      abbreviation: "1",
                      country_id: "1156"
                  },
                  {
                      id: "3876",
                      name: "Diffa",
                      abbreviation: "2",
                      country_id: "1156"
                  },
                  {
                      id: "3877",
                      name: "Dosso",
                      abbreviation: "3",
                      country_id: "1156"
                  },
                  {
                      id: "3878",
                      name: "Maradi",
                      abbreviation: "4",
                      country_id: "1156"
                  },
                  {
                      id: "3879",
                      name: "Tahoua",
                      abbreviation: "S",
                      country_id: "1156"
                  },
                  {
                      id: "3880",
                      name: "Tillaberi",
                      abbreviation: "6",
                      country_id: "1156"
                  },
                  {
                      id: "3881",
                      name: "Zinder",
                      abbreviation: "7",
                      country_id: "1156"
                  },
                  {
                      id: "3882",
                      name: "Abuja Federal Capital Territory",
                      abbreviation: "FC",
                      country_id: "1157"
                  },
                  {
                      id: "3883",
                      name: "Abia",
                      abbreviation: "AB",
                      country_id: "1157"
                  },
                  {
                      id: "3884",
                      name: "Adamawa",
                      abbreviation: "AD",
                      country_id: "1157"
                  },
                  {
                      id: "3885",
                      name: "Akwa Ibom",
                      abbreviation: "AK",
                      country_id: "1157"
                  },
                  {
                      id: "3886",
                      name: "Anambra",
                      abbreviation: "AN",
                      country_id: "1157"
                  },
                  {
                      id: "3887",
                      name: "Bauchi",
                      abbreviation: "BA",
                      country_id: "1157"
                  },
                  {
                      id: "3888",
                      name: "Bayelsa",
                      abbreviation: "BY",
                      country_id: "1157"
                  },
                  {
                      id: "3889",
                      name: "Benue",
                      abbreviation: "BE",
                      country_id: "1157"
                  },
                  {
                      id: "3890",
                      name: "Borno",
                      abbreviation: "BO",
                      country_id: "1157"
                  },
                  {
                      id: "3891",
                      name: "Cross River",
                      abbreviation: "CR",
                      country_id: "1157"
                  },
                  {
                      id: "3892",
                      name: "Delta",
                      abbreviation: "DE",
                      country_id: "1157"
                  },
                  {
                      id: "3893",
                      name: "Ebonyi",
                      abbreviation: "EB",
                      country_id: "1157"
                  },
                  {
                      id: "3894",
                      name: "Edo",
                      abbreviation: "ED",
                      country_id: "1157"
                  },
                  {
                      id: "3895",
                      name: "Ekiti",
                      abbreviation: "EK",
                      country_id: "1157"
                  },
                  {
                      id: "3896",
                      name: "Enugu",
                      abbreviation: "EN",
                      country_id: "1157"
                  },
                  {
                      id: "3897",
                      name: "Gombe",
                      abbreviation: "GO",
                      country_id: "1157"
                  },
                  {
                      id: "3898",
                      name: "Imo",
                      abbreviation: "IM",
                      country_id: "1157"
                  },
                  {
                      id: "3899",
                      name: "Jigawa",
                      abbreviation: "JI",
                      country_id: "1157"
                  },
                  {
                      id: "3900",
                      name: "Kaduna",
                      abbreviation: "KD",
                      country_id: "1157"
                  },
                  {
                      id: "3901",
                      name: "Kano",
                      abbreviation: "KN",
                      country_id: "1157"
                  },
                  {
                      id: "3902",
                      name: "Katsina",
                      abbreviation: "KT",
                      country_id: "1157"
                  },
                  {
                      id: "3903",
                      name: "Kebbi",
                      abbreviation: "KE",
                      country_id: "1157"
                  },
                  {
                      id: "3904",
                      name: "Kogi",
                      abbreviation: "KO",
                      country_id: "1157"
                  },
                  {
                      id: "3905",
                      name: "Kwara",
                      abbreviation: "KW",
                      country_id: "1157"
                  },
                  {
                      id: "3906",
                      name: "Lagos",
                      abbreviation: "LA",
                      country_id: "1157"
                  },
                  {
                      id: "3907",
                      name: "Nassarawa",
                      abbreviation: "NA",
                      country_id: "1157"
                  },
                  {
                      id: "3908",
                      name: "Niger",
                      abbreviation: "NI",
                      country_id: "1157"
                  },
                  {
                      id: "3909",
                      name: "Ogun",
                      abbreviation: "OG",
                      country_id: "1157"
                  },
                  {
                      id: "3910",
                      name: "Ondo",
                      abbreviation: "ON",
                      country_id: "1157"
                  },
                  {
                      id: "3911",
                      name: "Osun",
                      abbreviation: "OS",
                      country_id: "1157"
                  },
                  {
                      id: "3912",
                      name: "Oyo",
                      abbreviation: "OY",
                      country_id: "1157"
                  },
                  {
                      id: "3913",
                      name: "Rivers",
                      abbreviation: "RI",
                      country_id: "1157"
                  },
                  {
                      id: "3914",
                      name: "Sokoto",
                      abbreviation: "SO",
                      country_id: "1157"
                  },
                  {
                      id: "3915",
                      name: "Taraba",
                      abbreviation: "TA",
                      country_id: "1157"
                  },
                  {
                      id: "3916",
                      name: "Yobe",
                      abbreviation: "YO",
                      country_id: "1157"
                  },
                  {
                      id: "3917",
                      name: "Zamfara",
                      abbreviation: "ZA",
                      country_id: "1157"
                  },
                  {
                      id: "3918",
                      name: "Boaco",
                      abbreviation: "BO",
                      country_id: "1155"
                  },
                  {
                      id: "3919",
                      name: "Carazo",
                      abbreviation: "CA",
                      country_id: "1155"
                  },
                  {
                      id: "3920",
                      name: "Chinandega",
                      abbreviation: "CI",
                      country_id: "1155"
                  },
                  {
                      id: "3921",
                      name: "Chontales",
                      abbreviation: "CO",
                      country_id: "1155"
                  },
                  {
                      id: "3922",
                      name: "Esteli",
                      abbreviation: "ES",
                      country_id: "1155"
                  },
                  {
                      id: "3923",
                      name: "Jinotega",
                      abbreviation: "JI",
                      country_id: "1155"
                  },
                  {
                      id: "3924",
                      name: "Leon",
                      abbreviation: "LE",
                      country_id: "1155"
                  },
                  {
                      id: "3925",
                      name: "Madriz",
                      abbreviation: "MD",
                      country_id: "1155"
                  },
                  {
                      id: "3926",
                      name: "Managua",
                      abbreviation: "MN",
                      country_id: "1155"
                  },
                  {
                      id: "3927",
                      name: "Masaya",
                      abbreviation: "MS",
                      country_id: "1155"
                  },
                  {
                      id: "3928",
                      name: "Matagalpa",
                      abbreviation: "MT",
                      country_id: "1155"
                  },
                  {
                      id: "3929",
                      name: "Nueva Segovia",
                      abbreviation: "NS",
                      country_id: "1155"
                  },
                  {
                      id: "3930",
                      name: "Rio San Juan",
                      abbreviation: "SJ",
                      country_id: "1155"
                  },
                  {
                      id: "3931",
                      name: "Rivas",
                      abbreviation: "RI",
                      country_id: "1155"
                  },
                  {
                      id: "3932",
                      name: "Atlantico Norte",
                      abbreviation: "AN",
                      country_id: "1155"
                  },
                  {
                      id: "3933",
                      name: "Atlantico Sur",
                      abbreviation: "AS",
                      country_id: "1155"
                  },
                  {
                      id: "3934",
                      name: "Drente",
                      abbreviation: "DR",
                      country_id: "1152"
                  },
                  {
                      id: "3935",
                      name: "Flevoland",
                      abbreviation: "FL",
                      country_id: "1152"
                  },
                  {
                      id: "3936",
                      name: "Friesland",
                      abbreviation: "FR",
                      country_id: "1152"
                  },
                  {
                      id: "3937",
                      name: "Gelderland",
                      abbreviation: "GL",
                      country_id: "1152"
                  },
                  {
                      id: "3938",
                      name: "Groningen",
                      abbreviation: "GR",
                      country_id: "1152"
                  },
                  {
                      id: "3939",
                      name: "Noord-Brabant",
                      abbreviation: "NB",
                      country_id: "1152"
                  },
                  {
                      id: "3940",
                      name: "Noord-Holland",
                      abbreviation: "NH",
                      country_id: "1152"
                  },
                  {
                      id: "3941",
                      name: "Overijssel",
                      abbreviation: "OV",
                      country_id: "1152"
                  },
                  {
                      id: "3942",
                      name: "Utrecht",
                      abbreviation: "UT",
                      country_id: "1152"
                  },
                  {
                      id: "3943",
                      name: "Zuid-Holland",
                      abbreviation: "ZH",
                      country_id: "1152"
                  },
                  {
                      id: "3944",
                      name: "Zeeland",
                      abbreviation: "ZL",
                      country_id: "1152"
                  },
                  {
                      id: "3945",
                      name: "Akershus",
                      abbreviation: "02",
                      country_id: "1161"
                  },
                  {
                      id: "3946",
                      name: "Aust-Agder",
                      abbreviation: "09",
                      country_id: "1161"
                  },
                  {
                      id: "3947",
                      name: "Buskerud",
                      abbreviation: "06",
                      country_id: "1161"
                  },
                  {
                      id: "3948",
                      name: "Finnmark",
                      abbreviation: "20",
                      country_id: "1161"
                  },
                  {
                      id: "3949",
                      name: "Hedmark",
                      abbreviation: "04",
                      country_id: "1161"
                  },
                  {
                      id: "3950",
                      name: "Hordaland",
                      abbreviation: "12",
                      country_id: "1161"
                  },
                  {
                      id: "3951",
                      name: "Møre og Romsdal",
                      abbreviation: "15",
                      country_id: "1161"
                  },
                  {
                      id: "3952",
                      name: "Nordland",
                      abbreviation: "18",
                      country_id: "1161"
                  },
                  {
                      id: "3953",
                      name: "Nord-Trøndelag",
                      abbreviation: "17",
                      country_id: "1161"
                  },
                  {
                      id: "3954",
                      name: "Oppland",
                      abbreviation: "05",
                      country_id: "1161"
                  },
                  {
                      id: "3955",
                      name: "Oslo",
                      abbreviation: "03",
                      country_id: "1161"
                  },
                  {
                      id: "3956",
                      name: "Rogaland",
                      abbreviation: "11",
                      country_id: "1161"
                  },
                  {
                      id: "3957",
                      name: "Sogn og Fjordane",
                      abbreviation: "14",
                      country_id: "1161"
                  },
                  {
                      id: "3958",
                      name: "Sør-Trøndelag",
                      abbreviation: "16",
                      country_id: "1161"
                  },
                  {
                      id: "3959",
                      name: "Telemark",
                      abbreviation: "06",
                      country_id: "1161"
                  },
                  {
                      id: "3960",
                      name: "Troms",
                      abbreviation: "19",
                      country_id: "1161"
                  },
                  {
                      id: "3961",
                      name: "Vest-Agder",
                      abbreviation: "10",
                      country_id: "1161"
                  },
                  {
                      id: "3962",
                      name: "Vestfold",
                      abbreviation: "07",
                      country_id: "1161"
                  },
                  {
                      id: "3963",
                      name: "Østfold",
                      abbreviation: "01",
                      country_id: "1161"
                  },
                  {
                      id: "3964",
                      name: "Jan Mayen",
                      abbreviation: "22",
                      country_id: "1161"
                  },
                  {
                      id: "3965",
                      name: "Svalbard",
                      abbreviation: "21",
                      country_id: "1161"
                  },
                  {
                      id: "3966",
                      name: "Auckland",
                      abbreviation: "AUK",
                      country_id: "1154"
                  },
                  {
                      id: "3967",
                      name: "Bay of Plenty",
                      abbreviation: "BOP",
                      country_id: "1154"
                  },
                  {
                      id: "3968",
                      name: "Canterbury",
                      abbreviation: "CAN",
                      country_id: "1154"
                  },
                  {
                      id: "3969",
                      name: "Gisborne",
                      abbreviation: "GIS",
                      country_id: "1154"
                  },
                  {
                      id: "3970",
                      name: "Hawkes Bay",
                      abbreviation: "HKB",
                      country_id: "1154"
                  },
                  {
                      id: "3971",
                      name: "Manawatu-Wanganui",
                      abbreviation: "MWT",
                      country_id: "1154"
                  },
                  {
                      id: "3972",
                      name: "Marlborough",
                      abbreviation: "MBH",
                      country_id: "1154"
                  },
                  {
                      id: "3973",
                      name: "Nelson",
                      abbreviation: "NSN",
                      country_id: "1154"
                  },
                  {
                      id: "3974",
                      name: "Northland",
                      abbreviation: "NTL",
                      country_id: "1154"
                  },
                  {
                      id: "3975",
                      name: "Otago",
                      abbreviation: "OTA",
                      country_id: "1154"
                  },
                  {
                      id: "3976",
                      name: "Southland",
                      abbreviation: "STL",
                      country_id: "1154"
                  },
                  {
                      id: "3977",
                      name: "Taranaki",
                      abbreviation: "TKI",
                      country_id: "1154"
                  },
                  {
                      id: "3978",
                      name: "Tasman",
                      abbreviation: "TAS",
                      country_id: "1154"
                  },
                  {
                      id: "3979",
                      name: "Waikato",
                      abbreviation: "WKO",
                      country_id: "1154"
                  },
                  {
                      id: "3980",
                      name: "Wellington",
                      abbreviation: "WGN",
                      country_id: "1154"
                  },
                  {
                      id: "3981",
                      name: "West Coast",
                      abbreviation: "WTC",
                      country_id: "1154"
                  },
                  {
                      id: "3982",
                      name: "Ad Dakhillyah",
                      abbreviation: "DA",
                      country_id: "1162"
                  },
                  {
                      id: "3983",
                      name: "Al Batinah",
                      abbreviation: "BA",
                      country_id: "1162"
                  },
                  {
                      id: "3984",
                      name: "Al Janblyah",
                      abbreviation: "JA",
                      country_id: "1162"
                  },
                  {
                      id: "3985",
                      name: "Al Wusta",
                      abbreviation: "WU",
                      country_id: "1162"
                  },
                  {
                      id: "3986",
                      name: "Ash Sharqlyah",
                      abbreviation: "SH",
                      country_id: "1162"
                  },
                  {
                      id: "3987",
                      name: "Az Zahirah",
                      abbreviation: "ZA",
                      country_id: "1162"
                  },
                  {
                      id: "3988",
                      name: "Masqat",
                      abbreviation: "MA",
                      country_id: "1162"
                  },
                  {
                      id: "3989",
                      name: "Musandam",
                      abbreviation: "MU",
                      country_id: "1162"
                  },
                  {
                      id: "3990",
                      name: "Bocas del Toro",
                      abbreviation: "1",
                      country_id: "1166"
                  },
                  {
                      id: "3991",
                      name: "Cocle",
                      abbreviation: "2",
                      country_id: "1166"
                  },
                  {
                      id: "3992",
                      name: "Chiriqui",
                      abbreviation: "4",
                      country_id: "1166"
                  },
                  {
                      id: "3993",
                      name: "Darien",
                      abbreviation: "5",
                      country_id: "1166"
                  },
                  {
                      id: "3994",
                      name: "Herrera",
                      abbreviation: "6",
                      country_id: "1166"
                  },
                  {
                      id: "3995",
                      name: "Loa Santoa",
                      abbreviation: "7",
                      country_id: "1166"
                  },
                  {
                      id: "3996",
                      name: "Panama",
                      abbreviation: "8",
                      country_id: "1166"
                  },
                  {
                      id: "3997",
                      name: "Veraguas",
                      abbreviation: "9",
                      country_id: "1166"
                  },
                  {
                      id: "3998",
                      name: "Comarca de San Blas",
                      abbreviation: "Q",
                      country_id: "1166"
                  },
                  {
                      id: "3999",
                      name: "El Callao",
                      abbreviation: "CAL",
                      country_id: "1169"
                  },
                  {
                      id: "4000",
                      name: "Ancash",
                      abbreviation: "ANC",
                      country_id: "1169"
                  },
                  {
                      id: "4001",
                      name: "Apurimac",
                      abbreviation: "APU",
                      country_id: "1169"
                  },
                  {
                      id: "4002",
                      name: "Arequipa",
                      abbreviation: "ARE",
                      country_id: "1169"
                  },
                  {
                      id: "4003",
                      name: "Ayacucho",
                      abbreviation: "AYA",
                      country_id: "1169"
                  },
                  {
                      id: "4004",
                      name: "Cajamarca",
                      abbreviation: "CAJ",
                      country_id: "1169"
                  },
                  {
                      id: "4005",
                      name: "Cuzco",
                      abbreviation: "CUS",
                      country_id: "1169"
                  },
                  {
                      id: "4006",
                      name: "Huancavelica",
                      abbreviation: "HUV",
                      country_id: "1169"
                  },
                  {
                      id: "4007",
                      name: "Huanuco",
                      abbreviation: "HUC",
                      country_id: "1169"
                  },
                  {
                      id: "4008",
                      name: "Ica",
                      abbreviation: "ICA",
                      country_id: "1169"
                  },
                  {
                      id: "4009",
                      name: "Junin",
                      abbreviation: "JUN",
                      country_id: "1169"
                  },
                  {
                      id: "4010",
                      name: "La Libertad",
                      abbreviation: "LAL",
                      country_id: "1169"
                  },
                  {
                      id: "4011",
                      name: "Lambayeque",
                      abbreviation: "LAM",
                      country_id: "1169"
                  },
                  {
                      id: "4012",
                      name: "Lima",
                      abbreviation: "LIM",
                      country_id: "1169"
                  },
                  {
                      id: "4013",
                      name: "Loreto",
                      abbreviation: "LOR",
                      country_id: "1169"
                  },
                  {
                      id: "4014",
                      name: "Madre de Dios",
                      abbreviation: "MDD",
                      country_id: "1169"
                  },
                  {
                      id: "4015",
                      name: "Moquegua",
                      abbreviation: "MOQ",
                      country_id: "1169"
                  },
                  {
                      id: "4016",
                      name: "Pasco",
                      abbreviation: "PAS",
                      country_id: "1169"
                  },
                  {
                      id: "4017",
                      name: "Piura",
                      abbreviation: "PIU",
                      country_id: "1169"
                  },
                  {
                      id: "4018",
                      name: "Puno",
                      abbreviation: "PUN",
                      country_id: "1169"
                  },
                  {
                      id: "4019",
                      name: "San Martin",
                      abbreviation: "SAM",
                      country_id: "1169"
                  },
                  {
                      id: "4020",
                      name: "Tacna",
                      abbreviation: "TAC",
                      country_id: "1169"
                  },
                  {
                      id: "4021",
                      name: "Tumbes",
                      abbreviation: "TUM",
                      country_id: "1169"
                  },
                  {
                      id: "4022",
                      name: "Ucayali",
                      abbreviation: "UCA",
                      country_id: "1169"
                  },
                  {
                      id: "4023",
                      name: "National Capital District (Port Moresby)",
                      abbreviation: "NCD",
                      country_id: "1167"
                  },
                  {
                      id: "4024",
                      name: "Chimbu",
                      abbreviation: "CPK",
                      country_id: "1167"
                  },
                  {
                      id: "4025",
                      name: "Eastern Highlands",
                      abbreviation: "EHG",
                      country_id: "1167"
                  },
                  {
                      id: "4026",
                      name: "East New Britain",
                      abbreviation: "EBR",
                      country_id: "1167"
                  },
                  {
                      id: "4027",
                      name: "East Sepik",
                      abbreviation: "ESW",
                      country_id: "1167"
                  },
                  {
                      id: "4028",
                      name: "Enga",
                      abbreviation: "EPW",
                      country_id: "1167"
                  },
                  {
                      id: "4029",
                      name: "Gulf",
                      abbreviation: "GPK",
                      country_id: "1167"
                  },
                  {
                      id: "4030",
                      name: "Madang",
                      abbreviation: "MPM",
                      country_id: "1167"
                  },
                  {
                      id: "4031",
                      name: "Manus",
                      abbreviation: "MRL",
                      country_id: "1167"
                  },
                  {
                      id: "4032",
                      name: "Milne Bay",
                      abbreviation: "MBA",
                      country_id: "1167"
                  },
                  {
                      id: "4033",
                      name: "Morobe",
                      abbreviation: "MPL",
                      country_id: "1167"
                  },
                  {
                      id: "4034",
                      name: "New Ireland",
                      abbreviation: "NIK",
                      country_id: "1167"
                  },
                  {
                      id: "4035",
                      name: "North Solomons",
                      abbreviation: "NSA",
                      country_id: "1167"
                  },
                  {
                      id: "4036",
                      name: "Santaun",
                      abbreviation: "SAN",
                      country_id: "1167"
                  },
                  {
                      id: "4037",
                      name: "Southern Highlands",
                      abbreviation: "SHM",
                      country_id: "1167"
                  },
                  {
                      id: "4038",
                      name: "Western Highlands",
                      abbreviation: "WHM",
                      country_id: "1167"
                  },
                  {
                      id: "4039",
                      name: "West New Britain",
                      abbreviation: "WBK",
                      country_id: "1167"
                  },
                  {
                      id: "4040",
                      name: "Abra",
                      abbreviation: "ABR",
                      country_id: "1170"
                  },
                  {
                      id: "4041",
                      name: "Agusan del Norte",
                      abbreviation: "AGN",
                      country_id: "1170"
                  },
                  {
                      id: "4042",
                      name: "Agusan del Sur",
                      abbreviation: "AGS",
                      country_id: "1170"
                  },
                  {
                      id: "4043",
                      name: "Aklan",
                      abbreviation: "AKL",
                      country_id: "1170"
                  },
                  {
                      id: "4044",
                      name: "Albay",
                      abbreviation: "ALB",
                      country_id: "1170"
                  },
                  {
                      id: "4045",
                      name: "Antique",
                      abbreviation: "ANT",
                      country_id: "1170"
                  },
                  {
                      id: "4046",
                      name: "Apayao",
                      abbreviation: "APA",
                      country_id: "1170"
                  },
                  {
                      id: "4047",
                      name: "Aurora",
                      abbreviation: "AUR",
                      country_id: "1170"
                  },
                  {
                      id: "4048",
                      name: "Basilan",
                      abbreviation: "BAS",
                      country_id: "1170"
                  },
                  {
                      id: "4049",
                      name: "Bataan",
                      abbreviation: "BAN",
                      country_id: "1170"
                  },
                  {
                      id: "4050",
                      name: "Batanes",
                      abbreviation: "BTN",
                      country_id: "1170"
                  },
                  {
                      id: "4051",
                      name: "Batangas",
                      abbreviation: "BTG",
                      country_id: "1170"
                  },
                  {
                      id: "4052",
                      name: "Benguet",
                      abbreviation: "BEN",
                      country_id: "1170"
                  },
                  {
                      id: "4053",
                      name: "Biliran",
                      abbreviation: "BIL",
                      country_id: "1170"
                  },
                  {
                      id: "4054",
                      name: "Bohol",
                      abbreviation: "BOH",
                      country_id: "1170"
                  },
                  {
                      id: "4055",
                      name: "Bukidnon",
                      abbreviation: "BUK",
                      country_id: "1170"
                  },
                  {
                      id: "4056",
                      name: "Bulacan",
                      abbreviation: "BUL",
                      country_id: "1170"
                  },
                  {
                      id: "4057",
                      name: "Cagayan",
                      abbreviation: "CAG",
                      country_id: "1170"
                  },
                  {
                      id: "4058",
                      name: "Camarines Norte",
                      abbreviation: "CAN",
                      country_id: "1170"
                  },
                  {
                      id: "4059",
                      name: "Camarines Sur",
                      abbreviation: "CAS",
                      country_id: "1170"
                  },
                  {
                      id: "4060",
                      name: "Camiguin",
                      abbreviation: "CAM",
                      country_id: "1170"
                  },
                  {
                      id: "4061",
                      name: "Capiz",
                      abbreviation: "CAP",
                      country_id: "1170"
                  },
                  {
                      id: "4062",
                      name: "Catanduanes",
                      abbreviation: "CAT",
                      country_id: "1170"
                  },
                  {
                      id: "4063",
                      name: "Cavite",
                      abbreviation: "CAV",
                      country_id: "1170"
                  },
                  {
                      id: "4064",
                      name: "Cebu",
                      abbreviation: "CEB",
                      country_id: "1170"
                  },
                  {
                      id: "4065",
                      name: "Compostela Valley",
                      abbreviation: "COM",
                      country_id: "1170"
                  },
                  {
                      id: "4066",
                      name: "Davao",
                      abbreviation: "DAV",
                      country_id: "1170"
                  },
                  {
                      id: "4067",
                      name: "Davao del Sur",
                      abbreviation: "DAS",
                      country_id: "1170"
                  },
                  {
                      id: "4068",
                      name: "Davao Oriental",
                      abbreviation: "DAO",
                      country_id: "1170"
                  },
                  {
                      id: "4069",
                      name: "Eastern Samar",
                      abbreviation: "EAS",
                      country_id: "1170"
                  },
                  {
                      id: "4070",
                      name: "Guimaras",
                      abbreviation: "GUI",
                      country_id: "1170"
                  },
                  {
                      id: "4071",
                      name: "Ifugao",
                      abbreviation: "IFU",
                      country_id: "1170"
                  },
                  {
                      id: "4072",
                      name: "Ilocos Norte",
                      abbreviation: "ILN",
                      country_id: "1170"
                  },
                  {
                      id: "4073",
                      name: "Ilocos Sur",
                      abbreviation: "ILS",
                      country_id: "1170"
                  },
                  {
                      id: "4074",
                      name: "Iloilo",
                      abbreviation: "ILI",
                      country_id: "1170"
                  },
                  {
                      id: "4075",
                      name: "Isabela",
                      abbreviation: "ISA",
                      country_id: "1170"
                  },
                  {
                      id: "4076",
                      name: "Kalinga-Apayso",
                      abbreviation: "KAL",
                      country_id: "1170"
                  },
                  {
                      id: "4077",
                      name: "Laguna",
                      abbreviation: "LAG",
                      country_id: "1170"
                  },
                  {
                      id: "4078",
                      name: "Lanao del Norte",
                      abbreviation: "LAN",
                      country_id: "1170"
                  },
                  {
                      id: "4079",
                      name: "Lanao del Sur",
                      abbreviation: "LAS",
                      country_id: "1170"
                  },
                  {
                      id: "4080",
                      name: "La Union",
                      abbreviation: "LUN",
                      country_id: "1170"
                  },
                  {
                      id: "4081",
                      name: "Leyte",
                      abbreviation: "LEY",
                      country_id: "1170"
                  },
                  {
                      id: "4082",
                      name: "Maguindanao",
                      abbreviation: "MAG",
                      country_id: "1170"
                  },
                  {
                      id: "4083",
                      name: "Marinduque",
                      abbreviation: "MAD",
                      country_id: "1170"
                  },
                  {
                      id: "4084",
                      name: "Masbate",
                      abbreviation: "MAS",
                      country_id: "1170"
                  },
                  {
                      id: "4085",
                      name: "Mindoro Occidental",
                      abbreviation: "MDC",
                      country_id: "1170"
                  },
                  {
                      id: "4086",
                      name: "Mindoro Oriental",
                      abbreviation: "MDR",
                      country_id: "1170"
                  },
                  {
                      id: "4087",
                      name: "Misamis Occidental",
                      abbreviation: "MSC",
                      country_id: "1170"
                  },
                  {
                      id: "4088",
                      name: "Misamis Oriental",
                      abbreviation: "MSR",
                      country_id: "1170"
                  },
                  {
                      id: "4089",
                      name: "Mountain Province",
                      abbreviation: "MOU",
                      country_id: "1170"
                  },
                  {
                      id: "4090",
                      name: "Negroe Occidental",
                      abbreviation: "NEC",
                      country_id: "1170"
                  },
                  {
                      id: "4091",
                      name: "Negros Oriental",
                      abbreviation: "NER",
                      country_id: "1170"
                  },
                  {
                      id: "4092",
                      name: "North Cotabato",
                      abbreviation: "NCO",
                      country_id: "1170"
                  },
                  {
                      id: "4093",
                      name: "Northern Samar",
                      abbreviation: "NSA",
                      country_id: "1170"
                  },
                  {
                      id: "4094",
                      name: "Nueva Ecija",
                      abbreviation: "NUE",
                      country_id: "1170"
                  },
                  {
                      id: "4095",
                      name: "Nueva Vizcaya",
                      abbreviation: "NUV",
                      country_id: "1170"
                  },
                  {
                      id: "4096",
                      name: "Palawan",
                      abbreviation: "PLW",
                      country_id: "1170"
                  },
                  {
                      id: "4097",
                      name: "Pampanga",
                      abbreviation: "PAM",
                      country_id: "1170"
                  },
                  {
                      id: "4098",
                      name: "Pangasinan",
                      abbreviation: "PAN",
                      country_id: "1170"
                  },
                  {
                      id: "4099",
                      name: "Quezon",
                      abbreviation: "QUE",
                      country_id: "1170"
                  },
                  {
                      id: "4100",
                      name: "Quirino",
                      abbreviation: "QUI",
                      country_id: "1170"
                  },
                  {
                      id: "4101",
                      name: "Rizal",
                      abbreviation: "RIZ",
                      country_id: "1170"
                  },
                  {
                      id: "4102",
                      name: "Romblon",
                      abbreviation: "ROM",
                      country_id: "1170"
                  },
                  {
                      id: "4103",
                      name: "Sarangani",
                      abbreviation: "SAR",
                      country_id: "1170"
                  },
                  {
                      id: "4104",
                      name: "Siquijor",
                      abbreviation: "SIG",
                      country_id: "1170"
                  },
                  {
                      id: "4105",
                      name: "Sorsogon",
                      abbreviation: "SOR",
                      country_id: "1170"
                  },
                  {
                      id: "4106",
                      name: "South Cotabato",
                      abbreviation: "SCO",
                      country_id: "1170"
                  },
                  {
                      id: "4107",
                      name: "Southern Leyte",
                      abbreviation: "SLE",
                      country_id: "1170"
                  },
                  {
                      id: "4108",
                      name: "Sultan Kudarat",
                      abbreviation: "SUK",
                      country_id: "1170"
                  },
                  {
                      id: "4109",
                      name: "Sulu",
                      abbreviation: "SLU",
                      country_id: "1170"
                  },
                  {
                      id: "4110",
                      name: "Surigao del Norte",
                      abbreviation: "SUN",
                      country_id: "1170"
                  },
                  {
                      id: "4111",
                      name: "Surigao del Sur",
                      abbreviation: "SUR",
                      country_id: "1170"
                  },
                  {
                      id: "4112",
                      name: "Tarlac",
                      abbreviation: "TAR",
                      country_id: "1170"
                  },
                  {
                      id: "4113",
                      name: "Tawi-Tawi",
                      abbreviation: "TAW",
                      country_id: "1170"
                  },
                  {
                      id: "4114",
                      name: "Western Samar",
                      abbreviation: "WSA",
                      country_id: "1170"
                  },
                  {
                      id: "4115",
                      name: "Zambales",
                      abbreviation: "ZMB",
                      country_id: "1170"
                  },
                  {
                      id: "4116",
                      name: "Zamboanga del Norte",
                      abbreviation: "ZAN",
                      country_id: "1170"
                  },
                  {
                      id: "4117",
                      name: "Zamboanga del Sur",
                      abbreviation: "ZAS",
                      country_id: "1170"
                  },
                  {
                      id: "4118",
                      name: "Zamboanga Sibiguey",
                      abbreviation: "ZSI",
                      country_id: "1170"
                  },
                  {
                      id: "4119",
                      name: "Islamabad Federal Capital Area",
                      abbreviation: "IS",
                      country_id: "1163"
                  },
                  {
                      id: "4120",
                      name: "Baluchistan",
                      abbreviation: "BA",
                      country_id: "1163"
                  },
                  {
                      id: "4121",
                      name: "Khyber Pakhtun Khawa",
                      abbreviation: "NW",
                      country_id: "1163"
                  },
                  {
                      id: "4122",
                      name: "Sindh",
                      abbreviation: "SD",
                      country_id: "1163"
                  },
                  {
                      id: "4123",
                      name: "Federally Administered Tribal Areas",
                      abbreviation: "TA",
                      country_id: "1163"
                  },
                  {
                      id: "4124",
                      name: "Azad Kashmir",
                      abbreviation: "JK",
                      country_id: "1163"
                  },
                  {
                      id: "4125",
                      name: "Gilgit-Baltistan",
                      abbreviation: "NA",
                      country_id: "1163"
                  },
                  {
                      id: "4126",
                      name: "Aveiro",
                      abbreviation: "01",
                      country_id: "1173"
                  },
                  {
                      id: "4127",
                      name: "Beja",
                      abbreviation: "02",
                      country_id: "1173"
                  },
                  {
                      id: "4128",
                      name: "Braga",
                      abbreviation: "03",
                      country_id: "1173"
                  },
                  {
                      id: "4129",
                      name: "Braganca",
                      abbreviation: "04",
                      country_id: "1173"
                  },
                  {
                      id: "4130",
                      name: "Castelo Branco",
                      abbreviation: "05",
                      country_id: "1173"
                  },
                  {
                      id: "4131",
                      name: "Colmbra",
                      abbreviation: "06",
                      country_id: "1173"
                  },
                  {
                      id: "4132",
                      name: "Ovora",
                      abbreviation: "07",
                      country_id: "1173"
                  },
                  {
                      id: "4133",
                      name: "Faro",
                      abbreviation: "08",
                      country_id: "1173"
                  },
                  {
                      id: "4134",
                      name: "Guarda",
                      abbreviation: "09",
                      country_id: "1173"
                  },
                  {
                      id: "4135",
                      name: "Leiria",
                      abbreviation: "10",
                      country_id: "1173"
                  },
                  {
                      id: "4136",
                      name: "Lisboa",
                      abbreviation: "11",
                      country_id: "1173"
                  },
                  {
                      id: "4137",
                      name: "Portalegre",
                      abbreviation: "12",
                      country_id: "1173"
                  },
                  {
                      id: "4138",
                      name: "Porto",
                      abbreviation: "13",
                      country_id: "1173"
                  },
                  {
                      id: "4139",
                      name: "Santarem",
                      abbreviation: "14",
                      country_id: "1173"
                  },
                  {
                      id: "4140",
                      name: "Setubal",
                      abbreviation: "15",
                      country_id: "1173"
                  },
                  {
                      id: "4141",
                      name: "Viana do Castelo",
                      abbreviation: "16",
                      country_id: "1173"
                  },
                  {
                      id: "4142",
                      name: "Vila Real",
                      abbreviation: "17",
                      country_id: "1173"
                  },
                  {
                      id: "4143",
                      name: "Viseu",
                      abbreviation: "18",
                      country_id: "1173"
                  },
                  {
                      id: "4144",
                      name: "Regiao Autonoma dos Acores",
                      abbreviation: "20",
                      country_id: "1173"
                  },
                  {
                      id: "4145",
                      name: "Regiao Autonoma da Madeira",
                      abbreviation: "30",
                      country_id: "1173"
                  },
                  {
                      id: "4146",
                      name: "Asuncion",
                      abbreviation: "ASU",
                      country_id: "1168"
                  },
                  {
                      id: "4147",
                      name: "Alto Paraguay",
                      abbreviation: "16",
                      country_id: "1168"
                  },
                  {
                      id: "4148",
                      name: "Alto Parana",
                      abbreviation: "10",
                      country_id: "1168"
                  },
                  {
                      id: "4149",
                      name: "Amambay",
                      abbreviation: "13",
                      country_id: "1168"
                  },
                  {
                      id: "4150",
                      name: "Boqueron",
                      abbreviation: "19",
                      country_id: "1168"
                  },
                  {
                      id: "4151",
                      name: "Caeguazu",
                      abbreviation: "5",
                      country_id: "1168"
                  },
                  {
                      id: "4152",
                      name: "Caazapl",
                      abbreviation: "6",
                      country_id: "1168"
                  },
                  {
                      id: "4153",
                      name: "Canindeyu",
                      abbreviation: "14",
                      country_id: "1168"
                  },
                  {
                      id: "4154",
                      name: "Concepcion",
                      abbreviation: "1",
                      country_id: "1168"
                  },
                  {
                      id: "4155",
                      name: "Cordillera",
                      abbreviation: "3",
                      country_id: "1168"
                  },
                  {
                      id: "4156",
                      name: "Guaira",
                      abbreviation: "4",
                      country_id: "1168"
                  },
                  {
                      id: "4157",
                      name: "Itapua",
                      abbreviation: "7",
                      country_id: "1168"
                  },
                  {
                      id: "4158",
                      name: "Miaiones",
                      abbreviation: "8",
                      country_id: "1168"
                  },
                  {
                      id: "4159",
                      name: "Neembucu",
                      abbreviation: "12",
                      country_id: "1168"
                  },
                  {
                      id: "4160",
                      name: "Paraguari",
                      abbreviation: "9",
                      country_id: "1168"
                  },
                  {
                      id: "4161",
                      name: "Presidente Hayes",
                      abbreviation: "15",
                      country_id: "1168"
                  },
                  {
                      id: "4162",
                      name: "San Pedro",
                      abbreviation: "2",
                      country_id: "1168"
                  },
                  {
                      id: "4163",
                      name: "Ad Dawhah",
                      abbreviation: "DA",
                      country_id: "1175"
                  },
                  {
                      id: "4164",
                      name: "Al Ghuwayriyah",
                      abbreviation: "GH",
                      country_id: "1175"
                  },
                  {
                      id: "4165",
                      name: "Al Jumayliyah",
                      abbreviation: "JU",
                      country_id: "1175"
                  },
                  {
                      id: "4166",
                      name: "Al Khawr",
                      abbreviation: "KH",
                      country_id: "1175"
                  },
                  {
                      id: "4167",
                      name: "Al Wakrah",
                      abbreviation: "WA",
                      country_id: "1175"
                  },
                  {
                      id: "4168",
                      name: "Ar Rayyan",
                      abbreviation: "RA",
                      country_id: "1175"
                  },
                  {
                      id: "4169",
                      name: "Jariyan al Batnah",
                      abbreviation: "JB",
                      country_id: "1175"
                  },
                  {
                      id: "4170",
                      name: "Madinat ash Shamal",
                      abbreviation: "MS",
                      country_id: "1175"
                  },
                  {
                      id: "4171",
                      name: "Umm Salal",
                      abbreviation: "US",
                      country_id: "1175"
                  },
                  {
                      id: "4172",
                      name: "Bucuresti",
                      abbreviation: "B",
                      country_id: "1176"
                  },
                  {
                      id: "4173",
                      name: "Alba",
                      abbreviation: "AB",
                      country_id: "1176"
                  },
                  {
                      id: "4174",
                      name: "Arad",
                      abbreviation: "AR",
                      country_id: "1176"
                  },
                  {
                      id: "4175",
                      name: "Argeș",
                      abbreviation: "AG",
                      country_id: "1176"
                  },
                  {
                      id: "4176",
                      name: "Bacău",
                      abbreviation: "BC",
                      country_id: "1176"
                  },
                  {
                      id: "4177",
                      name: "Bihor",
                      abbreviation: "BH",
                      country_id: "1176"
                  },
                  {
                      id: "4178",
                      name: "Bistrița-Năsăud",
                      abbreviation: "BN",
                      country_id: "1176"
                  },
                  {
                      id: "4179",
                      name: "Botoșani",
                      abbreviation: "BT",
                      country_id: "1176"
                  },
                  {
                      id: "4180",
                      name: "Brașov",
                      abbreviation: "BV",
                      country_id: "1176"
                  },
                  {
                      id: "4181",
                      name: "Brăila",
                      abbreviation: "BR",
                      country_id: "1176"
                  },
                  {
                      id: "4182",
                      name: "Buzău",
                      abbreviation: "BZ",
                      country_id: "1176"
                  },
                  {
                      id: "4183",
                      name: "Caraș-Severin",
                      abbreviation: "CS",
                      country_id: "1176"
                  },
                  {
                      id: "4184",
                      name: "Călărași",
                      abbreviation: "CL",
                      country_id: "1176"
                  },
                  {
                      id: "4185",
                      name: "Cluj",
                      abbreviation: "CJ",
                      country_id: "1176"
                  },
                  {
                      id: "4186",
                      name: "Constanța",
                      abbreviation: "CT",
                      country_id: "1176"
                  },
                  {
                      id: "4187",
                      name: "Covasna",
                      abbreviation: "CV",
                      country_id: "1176"
                  },
                  {
                      id: "4188",
                      name: "Dâmbovița",
                      abbreviation: "DB",
                      country_id: "1176"
                  },
                  {
                      id: "4189",
                      name: "Dolj",
                      abbreviation: "DJ",
                      country_id: "1176"
                  },
                  {
                      id: "4190",
                      name: "Galați",
                      abbreviation: "GL",
                      country_id: "1176"
                  },
                  {
                      id: "4191",
                      name: "Giurgiu",
                      abbreviation: "GR",
                      country_id: "1176"
                  },
                  {
                      id: "4192",
                      name: "Gorj",
                      abbreviation: "GJ",
                      country_id: "1176"
                  },
                  {
                      id: "4193",
                      name: "Harghita",
                      abbreviation: "HR",
                      country_id: "1176"
                  },
                  {
                      id: "4194",
                      name: "Hunedoara",
                      abbreviation: "HD",
                      country_id: "1176"
                  },
                  {
                      id: "4195",
                      name: "Ialomița",
                      abbreviation: "IL",
                      country_id: "1176"
                  },
                  {
                      id: "4196",
                      name: "Iași",
                      abbreviation: "IS",
                      country_id: "1176"
                  },
                  {
                      id: "4197",
                      name: "Ilfov",
                      abbreviation: "IF",
                      country_id: "1176"
                  },
                  {
                      id: "4198",
                      name: "Maramureș",
                      abbreviation: "MM",
                      country_id: "1176"
                  },
                  {
                      id: "4199",
                      name: "Mehedinți",
                      abbreviation: "MH",
                      country_id: "1176"
                  },
                  {
                      id: "4200",
                      name: "Mureș",
                      abbreviation: "MS",
                      country_id: "1176"
                  },
                  {
                      id: "4201",
                      name: "Neamț",
                      abbreviation: "NT",
                      country_id: "1176"
                  },
                  {
                      id: "4202",
                      name: "Olt",
                      abbreviation: "OT",
                      country_id: "1176"
                  },
                  {
                      id: "4203",
                      name: "Prahova",
                      abbreviation: "PH",
                      country_id: "1176"
                  },
                  {
                      id: "4204",
                      name: "Satu Mare",
                      abbreviation: "SM",
                      country_id: "1176"
                  },
                  {
                      id: "4205",
                      name: "Sălaj",
                      abbreviation: "SJ",
                      country_id: "1176"
                  },
                  {
                      id: "4206",
                      name: "Sibiu",
                      abbreviation: "SB",
                      country_id: "1176"
                  },
                  {
                      id: "4207",
                      name: "Suceava",
                      abbreviation: "SV",
                      country_id: "1176"
                  },
                  {
                      id: "4208",
                      name: "Teleorman",
                      abbreviation: "TR",
                      country_id: "1176"
                  },
                  {
                      id: "4209",
                      name: "Timiș",
                      abbreviation: "TM",
                      country_id: "1176"
                  },
                  {
                      id: "4210",
                      name: "Tulcea",
                      abbreviation: "TL",
                      country_id: "1176"
                  },
                  {
                      id: "4211",
                      name: "Vaslui",
                      abbreviation: "VS",
                      country_id: "1176"
                  },
                  {
                      id: "4212",
                      name: "Vâlcea",
                      abbreviation: "VL",
                      country_id: "1176"
                  },
                  {
                      id: "4213",
                      name: "Vrancea",
                      abbreviation: "VN",
                      country_id: "1176"
                  },
                  {
                      id: "4214",
                      name: "Adygeya, Respublika",
                      abbreviation: "AD",
                      country_id: "1177"
                  },
                  {
                      id: "4215",
                      name: "Altay, Respublika",
                      abbreviation: "AL",
                      country_id: "1177"
                  },
                  {
                      id: "4216",
                      name: "Bashkortostan, Respublika",
                      abbreviation: "BA",
                      country_id: "1177"
                  },
                  {
                      id: "4217",
                      name: "Buryatiya, Respublika",
                      abbreviation: "BU",
                      country_id: "1177"
                  },
                  {
                      id: "4218",
                      name: "Chechenskaya Respublika",
                      abbreviation: "CE",
                      country_id: "1177"
                  },
                  {
                      id: "4219",
                      name: "Chuvashskaya Respublika",
                      abbreviation: "CU",
                      country_id: "1177"
                  },
                  {
                      id: "4220",
                      name: "Dagestan, Respublika",
                      abbreviation: "DA",
                      country_id: "1177"
                  },
                  {
                      id: "4221",
                      name: "Ingushskaya Respublika",
                      abbreviation: "IN",
                      country_id: "1177"
                  },
                  {
                      id: "4222",
                      name: "Kabardino-Balkarskaya",
                      abbreviation: "KB",
                      country_id: "1177"
                  },
                  {
                      id: "4223",
                      name: "Kalmykiya, Respublika",
                      abbreviation: "KL",
                      country_id: "1177"
                  },
                  {
                      id: "4224",
                      name: "Karachayevo-Cherkesskaya Respublika",
                      abbreviation: "KC",
                      country_id: "1177"
                  },
                  {
                      id: "4225",
                      name: "Kareliya, Respublika",
                      abbreviation: "KR",
                      country_id: "1177"
                  },
                  {
                      id: "4226",
                      name: "Khakasiya, Respublika",
                      abbreviation: "KK",
                      country_id: "1177"
                  },
                  {
                      id: "4227",
                      name: "Komi, Respublika",
                      abbreviation: "KO",
                      country_id: "1177"
                  },
                  {
                      id: "4228",
                      name: "Mariy El, Respublika",
                      abbreviation: "ME",
                      country_id: "1177"
                  },
                  {
                      id: "4229",
                      name: "Mordoviya, Respublika",
                      abbreviation: "MO",
                      country_id: "1177"
                  },
                  {
                      id: "4230",
                      name: "Sakha, Respublika [Yakutiya]",
                      abbreviation: "SA",
                      country_id: "1177"
                  },
                  {
                      id: "4231",
                      name: "Severnaya Osetiya, Respublika",
                      abbreviation: "SE",
                      country_id: "1177"
                  },
                  {
                      id: "4232",
                      name: "Tatarstan, Respublika",
                      abbreviation: "TA",
                      country_id: "1177"
                  },
                  {
                      id: "4233",
                      name: "Tyva, Respublika [Tuva]",
                      abbreviation: "TY",
                      country_id: "1177"
                  },
                  {
                      id: "4234",
                      name: "Udmurtskaya Respublika",
                      abbreviation: "UD",
                      country_id: "1177"
                  },
                  {
                      id: "4235",
                      name: "Altayskiy kray",
                      abbreviation: "ALT",
                      country_id: "1177"
                  },
                  {
                      id: "4236",
                      name: "Khabarovskiy kray",
                      abbreviation: "KHA",
                      country_id: "1177"
                  },
                  {
                      id: "4237",
                      name: "Krasnodarskiy kray",
                      abbreviation: "KDA",
                      country_id: "1177"
                  },
                  {
                      id: "4238",
                      name: "Krasnoyarskiy kray",
                      abbreviation: "KYA",
                      country_id: "1177"
                  },
                  {
                      id: "4239",
                      name: "Primorskiy kray",
                      abbreviation: "PRI",
                      country_id: "1177"
                  },
                  {
                      id: "4240",
                      name: "Stavropol'skiy kray",
                      abbreviation: "STA",
                      country_id: "1177"
                  },
                  {
                      id: "4241",
                      name: "Amurskaya oblast'",
                      abbreviation: "AMU",
                      country_id: "1177"
                  },
                  {
                      id: "4242",
                      name: "Arkhangel'skaya oblast'",
                      abbreviation: "ARK",
                      country_id: "1177"
                  },
                  {
                      id: "4243",
                      name: "Astrakhanskaya oblast'",
                      abbreviation: "AST",
                      country_id: "1177"
                  },
                  {
                      id: "4244",
                      name: "Belgorodskaya oblast'",
                      abbreviation: "BEL",
                      country_id: "1177"
                  },
                  {
                      id: "4245",
                      name: "Bryanskaya oblast'",
                      abbreviation: "BRY",
                      country_id: "1177"
                  },
                  {
                      id: "4246",
                      name: "Chelyabinskaya oblast'",
                      abbreviation: "CHE",
                      country_id: "1177"
                  },
                  {
                      id: "4247",
                      name: "Zabaykalsky Krai'",
                      abbreviation: "ZSK",
                      country_id: "1177"
                  },
                  {
                      id: "4248",
                      name: "Irkutskaya oblast'",
                      abbreviation: "IRK",
                      country_id: "1177"
                  },
                  {
                      id: "4249",
                      name: "Ivanovskaya oblast'",
                      abbreviation: "IVA",
                      country_id: "1177"
                  },
                  {
                      id: "4250",
                      name: "Kaliningradskaya oblast'",
                      abbreviation: "KGD",
                      country_id: "1177"
                  },
                  {
                      id: "4251",
                      name: "Kaluzhskaya oblast'",
                      abbreviation: "KLU",
                      country_id: "1177"
                  },
                  {
                      id: "4252",
                      name: "Kamchatka Krai'",
                      abbreviation: "KAM",
                      country_id: "1177"
                  },
                  {
                      id: "4253",
                      name: "Kemerovskaya oblast'",
                      abbreviation: "KEM",
                      country_id: "1177"
                  },
                  {
                      id: "4254",
                      name: "Kirovskaya oblast'",
                      abbreviation: "KIR",
                      country_id: "1177"
                  },
                  {
                      id: "4255",
                      name: "Kostromskaya oblast'",
                      abbreviation: "KOS",
                      country_id: "1177"
                  },
                  {
                      id: "4256",
                      name: "Kurganskaya oblast'",
                      abbreviation: "KGN",
                      country_id: "1177"
                  },
                  {
                      id: "4257",
                      name: "Kurskaya oblast'",
                      abbreviation: "KRS",
                      country_id: "1177"
                  },
                  {
                      id: "4258",
                      name: "Leningradskaya oblast'",
                      abbreviation: "LEN",
                      country_id: "1177"
                  },
                  {
                      id: "4259",
                      name: "Lipetskaya oblast'",
                      abbreviation: "LIP",
                      country_id: "1177"
                  },
                  {
                      id: "4260",
                      name: "Magadanskaya oblast'",
                      abbreviation: "MAG",
                      country_id: "1177"
                  },
                  {
                      id: "4261",
                      name: "Moskovskaya oblast'",
                      abbreviation: "MOS",
                      country_id: "1177"
                  },
                  {
                      id: "4262",
                      name: "Murmanskaya oblast'",
                      abbreviation: "MUR",
                      country_id: "1177"
                  },
                  {
                      id: "4263",
                      name: "Nizhegorodskaya oblast'",
                      abbreviation: "NIZ",
                      country_id: "1177"
                  },
                  {
                      id: "4264",
                      name: "Novgorodskaya oblast'",
                      abbreviation: "NGR",
                      country_id: "1177"
                  },
                  {
                      id: "4265",
                      name: "Novosibirskaya oblast'",
                      abbreviation: "NVS",
                      country_id: "1177"
                  },
                  {
                      id: "4266",
                      name: "Omskaya oblast'",
                      abbreviation: "OMS",
                      country_id: "1177"
                  },
                  {
                      id: "4267",
                      name: "Orenburgskaya oblast'",
                      abbreviation: "ORE",
                      country_id: "1177"
                  },
                  {
                      id: "4268",
                      name: "Orlovskaya oblast'",
                      abbreviation: "ORL",
                      country_id: "1177"
                  },
                  {
                      id: "4269",
                      name: "Penzenskaya oblast'",
                      abbreviation: "PNZ",
                      country_id: "1177"
                  },
                  {
                      id: "4270",
                      name: "Perm krai'",
                      abbreviation: "PEK",
                      country_id: "1177"
                  },
                  {
                      id: "4271",
                      name: "Pskovskaya oblast'",
                      abbreviation: "PSK",
                      country_id: "1177"
                  },
                  {
                      id: "4272",
                      name: "Rostovskaya oblast'",
                      abbreviation: "ROS",
                      country_id: "1177"
                  },
                  {
                      id: "4273",
                      name: "Ryazanskaya oblast'",
                      abbreviation: "RYA",
                      country_id: "1177"
                  },
                  {
                      id: "4274",
                      name: "Sakhalinskaya oblast'",
                      abbreviation: "SAK",
                      country_id: "1177"
                  },
                  {
                      id: "4275",
                      name: "Samarskaya oblast'",
                      abbreviation: "SAM",
                      country_id: "1177"
                  },
                  {
                      id: "4276",
                      name: "Saratovskaya oblast'",
                      abbreviation: "SAR",
                      country_id: "1177"
                  },
                  {
                      id: "4277",
                      name: "Smolenskaya oblast'",
                      abbreviation: "SMO",
                      country_id: "1177"
                  },
                  {
                      id: "4278",
                      name: "Sverdlovskaya oblast'",
                      abbreviation: "SVE",
                      country_id: "1177"
                  },
                  {
                      id: "4279",
                      name: "Tambovskaya oblast'",
                      abbreviation: "TAM",
                      country_id: "1177"
                  },
                  {
                      id: "4280",
                      name: "Tomskaya oblast'",
                      abbreviation: "TOM",
                      country_id: "1177"
                  },
                  {
                      id: "4281",
                      name: "Tul'skaya oblast'",
                      abbreviation: "TUL",
                      country_id: "1177"
                  },
                  {
                      id: "4282",
                      name: "Tverskaya oblast'",
                      abbreviation: "TVE",
                      country_id: "1177"
                  },
                  {
                      id: "4283",
                      name: "Tyumenskaya oblast'",
                      abbreviation: "TYU",
                      country_id: "1177"
                  },
                  {
                      id: "4284",
                      name: "Ul'yanovskaya oblast'",
                      abbreviation: "ULY",
                      country_id: "1177"
                  },
                  {
                      id: "4285",
                      name: "Vladimirskaya oblast'",
                      abbreviation: "VLA",
                      country_id: "1177"
                  },
                  {
                      id: "4286",
                      name: "Volgogradskaya oblast'",
                      abbreviation: "VGG",
                      country_id: "1177"
                  },
                  {
                      id: "4287",
                      name: "Vologodskaya oblast'",
                      abbreviation: "VLG",
                      country_id: "1177"
                  },
                  {
                      id: "4288",
                      name: "Voronezhskaya oblast'",
                      abbreviation: "VOR",
                      country_id: "1177"
                  },
                  {
                      id: "4289",
                      name: "Yaroslavskaya oblast'",
                      abbreviation: "YAR",
                      country_id: "1177"
                  },
                  {
                      id: "4290",
                      name: "Moskva",
                      abbreviation: "MOW",
                      country_id: "1177"
                  },
                  {
                      id: "4291",
                      name: "Sankt-Peterburg",
                      abbreviation: "SPE",
                      country_id: "1177"
                  },
                  {
                      id: "4292",
                      name: "Yevreyskaya avtonomnaya oblast'",
                      abbreviation: "YEV",
                      country_id: "1177"
                  },
                  {
                      id: "4294",
                      name: "Chukotskiy avtonomnyy okrug",
                      abbreviation: "CHU",
                      country_id: "1177"
                  },
                  {
                      id: "4296",
                      name: "Khanty-Mansiyskiy avtonomnyy okrug",
                      abbreviation: "KHM",
                      country_id: "1177"
                  },
                  {
                      id: "4299",
                      name: "Nenetskiy avtonomnyy okrug",
                      abbreviation: "NEN",
                      country_id: "1177"
                  },
                  {
                      id: "4302",
                      name: "Yamalo-Nenetskiy avtonomnyy okrug",
                      abbreviation: "YAN",
                      country_id: "1177"
                  },
                  {
                      id: "4303",
                      name: "Butare",
                      abbreviation: "C",
                      country_id: "1178"
                  },
                  {
                      id: "4304",
                      name: "Byumba",
                      abbreviation: "I",
                      country_id: "1178"
                  },
                  {
                      id: "4305",
                      name: "Cyangugu",
                      abbreviation: "E",
                      country_id: "1178"
                  },
                  {
                      id: "4306",
                      name: "Gikongoro",
                      abbreviation: "D",
                      country_id: "1178"
                  },
                  {
                      id: "4307",
                      name: "Gisenyi",
                      abbreviation: "G",
                      country_id: "1178"
                  },
                  {
                      id: "4308",
                      name: "Gitarama",
                      abbreviation: "B",
                      country_id: "1178"
                  },
                  {
                      id: "4309",
                      name: "Kibungo",
                      abbreviation: "J",
                      country_id: "1178"
                  },
                  {
                      id: "4310",
                      name: "Kibuye",
                      abbreviation: "F",
                      country_id: "1178"
                  },
                  {
                      id: "4311",
                      name: "Kigali-Rural Kigali y' Icyaro",
                      abbreviation: "K",
                      country_id: "1178"
                  },
                  {
                      id: "4312",
                      name: "Kigali-Ville Kigali Ngari",
                      abbreviation: "L",
                      country_id: "1178"
                  },
                  {
                      id: "4313",
                      name: "Mutara",
                      abbreviation: "M",
                      country_id: "1178"
                  },
                  {
                      id: "4314",
                      name: "Ruhengeri",
                      abbreviation: "H",
                      country_id: "1178"
                  },
                  {
                      id: "4315",
                      name: "Al Bahah",
                      abbreviation: "11",
                      country_id: "1187"
                  },
                  {
                      id: "4316",
                      name: "Al Hudud Ash Shamaliyah",
                      abbreviation: "08",
                      country_id: "1187"
                  },
                  {
                      id: "4317",
                      name: "Al Jawf",
                      abbreviation: "12",
                      country_id: "1187"
                  },
                  {
                      id: "4318",
                      name: "Al Madinah",
                      abbreviation: "03",
                      country_id: "1187"
                  },
                  {
                      id: "4319",
                      name: "Al Qasim",
                      abbreviation: "05",
                      country_id: "1187"
                  },
                  {
                      id: "4320",
                      name: "Ar Riyad",
                      abbreviation: "01",
                      country_id: "1187"
                  },
                  {
                      id: "4321",
                      name: "Asir",
                      abbreviation: "14",
                      country_id: "1187"
                  },
                  {
                      id: "4322",
                      name: "Ha'il",
                      abbreviation: "06",
                      country_id: "1187"
                  },
                  {
                      id: "4323",
                      name: "Jlzan",
                      abbreviation: "09",
                      country_id: "1187"
                  },
                  {
                      id: "4324",
                      name: "Makkah",
                      abbreviation: "02",
                      country_id: "1187"
                  },
                  {
                      id: "4325",
                      name: "Najran",
                      abbreviation: "10",
                      country_id: "1187"
                  },
                  {
                      id: "4326",
                      name: "Tabuk",
                      abbreviation: "07",
                      country_id: "1187"
                  },
                  {
                      id: "4327",
                      name: "Capital Territory (Honiara)",
                      abbreviation: "CT",
                      country_id: "1194"
                  },
                  {
                      id: "4328",
                      name: "Guadalcanal",
                      abbreviation: "GU",
                      country_id: "1194"
                  },
                  {
                      id: "4329",
                      name: "Isabel",
                      abbreviation: "IS",
                      country_id: "1194"
                  },
                  {
                      id: "4330",
                      name: "Makira",
                      abbreviation: "MK",
                      country_id: "1194"
                  },
                  {
                      id: "4331",
                      name: "Malaita",
                      abbreviation: "ML",
                      country_id: "1194"
                  },
                  {
                      id: "4332",
                      name: "Temotu",
                      abbreviation: "TE",
                      country_id: "1194"
                  },
                  {
                      id: "4333",
                      name: "A'ali an Nil",
                      abbreviation: "23",
                      country_id: "1200"
                  },
                  {
                      id: "4334",
                      name: "Al Bah al Ahmar",
                      abbreviation: "26",
                      country_id: "1200"
                  },
                  {
                      id: "4335",
                      name: "Al Buhayrat",
                      abbreviation: "18",
                      country_id: "1200"
                  },
                  {
                      id: "4336",
                      name: "Al Jazirah",
                      abbreviation: "07",
                      country_id: "1200"
                  },
                  {
                      id: "4337",
                      name: "Al Khartum",
                      abbreviation: "03",
                      country_id: "1200"
                  },
                  {
                      id: "4338",
                      name: "Al Qadarif",
                      abbreviation: "06",
                      country_id: "1200"
                  },
                  {
                      id: "4339",
                      name: "Al Wahdah",
                      abbreviation: "22",
                      country_id: "1200"
                  },
                  {
                      id: "4340",
                      name: "An Nil",
                      abbreviation: "04",
                      country_id: "1200"
                  },
                  {
                      id: "4341",
                      name: "An Nil al Abyaq",
                      abbreviation: "08",
                      country_id: "1200"
                  },
                  {
                      id: "4342",
                      name: "An Nil al Azraq",
                      abbreviation: "24",
                      country_id: "1200"
                  },
                  {
                      id: "4343",
                      name: "Ash Shamallyah",
                      abbreviation: "01",
                      country_id: "1200"
                  },
                  {
                      id: "4344",
                      name: "Bahr al Jabal",
                      abbreviation: "17",
                      country_id: "1200"
                  },
                  {
                      id: "4345",
                      name: "Gharb al Istiwa'iyah",
                      abbreviation: "16",
                      country_id: "1200"
                  },
                  {
                      id: "4346",
                      name: "Gharb Ba~r al Ghazal",
                      abbreviation: "14",
                      country_id: "1200"
                  },
                  {
                      id: "4347",
                      name: "Gharb Darfur",
                      abbreviation: "12",
                      country_id: "1200"
                  },
                  {
                      id: "4348",
                      name: "Gharb Kurdufan",
                      abbreviation: "10",
                      country_id: "1200"
                  },
                  {
                      id: "4349",
                      name: "Janub Darfur",
                      abbreviation: "11",
                      country_id: "1200"
                  },
                  {
                      id: "4350",
                      name: "Janub Rurdufan",
                      abbreviation: "13",
                      country_id: "1200"
                  },
                  {
                      id: "4351",
                      name: "Jnqall",
                      abbreviation: "20",
                      country_id: "1200"
                  },
                  {
                      id: "4352",
                      name: "Kassala",
                      abbreviation: "05",
                      country_id: "1200"
                  },
                  {
                      id: "4353",
                      name: "Shamal Batr al Ghazal",
                      abbreviation: "15",
                      country_id: "1200"
                  },
                  {
                      id: "4354",
                      name: "Shamal Darfur",
                      abbreviation: "02",
                      country_id: "1200"
                  },
                  {
                      id: "4355",
                      name: "Shamal Kurdufan",
                      abbreviation: "09",
                      country_id: "1200"
                  },
                  {
                      id: "4356",
                      name: "Sharq al Istiwa'iyah",
                      abbreviation: "19",
                      country_id: "1200"
                  },
                  {
                      id: "4357",
                      name: "Sinnar",
                      abbreviation: "25",
                      country_id: "1200"
                  },
                  {
                      id: "4358",
                      name: "Warab",
                      abbreviation: "21",
                      country_id: "1200"
                  },
                  {
                      id: "4359",
                      name: "Blekinge län",
                      abbreviation: "K",
                      country_id: "1204"
                  },
                  {
                      id: "4360",
                      name: "Dalarnas län",
                      abbreviation: "W",
                      country_id: "1204"
                  },
                  {
                      id: "4361",
                      name: "Gotlands län",
                      abbreviation: "I",
                      country_id: "1204"
                  },
                  {
                      id: "4362",
                      name: "Gävleborgs län",
                      abbreviation: "X",
                      country_id: "1204"
                  },
                  {
                      id: "4363",
                      name: "Hallands län",
                      abbreviation: "N",
                      country_id: "1204"
                  },
                  {
                      id: "4364",
                      name: "Jämtlands län",
                      abbreviation: "Z",
                      country_id: "1204"
                  },
                  {
                      id: "4365",
                      name: "Jönkopings län",
                      abbreviation: "F",
                      country_id: "1204"
                  },
                  {
                      id: "4366",
                      name: "Kalmar län",
                      abbreviation: "H",
                      country_id: "1204"
                  },
                  {
                      id: "4367",
                      name: "Kronobergs län",
                      abbreviation: "G",
                      country_id: "1204"
                  },
                  {
                      id: "4368",
                      name: "Norrbottens län",
                      abbreviation: "BD",
                      country_id: "1204"
                  },
                  {
                      id: "4369",
                      name: "Skåne län",
                      abbreviation: "M",
                      country_id: "1204"
                  },
                  {
                      id: "4370",
                      name: "Stockholms län",
                      abbreviation: "AB",
                      country_id: "1204"
                  },
                  {
                      id: "4371",
                      name: "Södermanlands län",
                      abbreviation: "D",
                      country_id: "1204"
                  },
                  {
                      id: "4372",
                      name: "Uppsala län",
                      abbreviation: "C",
                      country_id: "1204"
                  },
                  {
                      id: "4373",
                      name: "Värmlands län",
                      abbreviation: "S",
                      country_id: "1204"
                  },
                  {
                      id: "4374",
                      name: "Västerbottens län",
                      abbreviation: "AC",
                      country_id: "1204"
                  },
                  {
                      id: "4375",
                      name: "Västernorrlands län",
                      abbreviation: "Y",
                      country_id: "1204"
                  },
                  {
                      id: "4376",
                      name: "Västmanlands län",
                      abbreviation: "U",
                      country_id: "1204"
                  },
                  {
                      id: "4377",
                      name: "Västra Götalands län",
                      abbreviation: "Q",
                      country_id: "1204"
                  },
                  {
                      id: "4378",
                      name: "Örebro län",
                      abbreviation: "T",
                      country_id: "1204"
                  },
                  {
                      id: "4379",
                      name: "Östergötlands län",
                      abbreviation: "E",
                      country_id: "1204"
                  },
                  {
                      id: "4380",
                      name: "Saint Helena",
                      abbreviation: "SH",
                      country_id: "1180"
                  },
                  {
                      id: "4381",
                      name: "Ascension",
                      abbreviation: "AC",
                      country_id: "1180"
                  },
                  {
                      id: "4382",
                      name: "Tristan da Cunha",
                      abbreviation: "TA",
                      country_id: "1180"
                  },
                  {
                      id: "4383",
                      name: "Ajdovščina",
                      abbreviation: "001",
                      country_id: "1193"
                  },
                  {
                      id: "4384",
                      name: "Beltinci",
                      abbreviation: "002",
                      country_id: "1193"
                  },
                  {
                      id: "4385",
                      name: "Benedikt",
                      abbreviation: "148",
                      country_id: "1193"
                  },
                  {
                      id: "4386",
                      name: "Bistrica ob Sotli",
                      abbreviation: "149",
                      country_id: "1193"
                  },
                  {
                      id: "4387",
                      name: "Bled",
                      abbreviation: "003",
                      country_id: "1193"
                  },
                  {
                      id: "4388",
                      name: "Bloke",
                      abbreviation: "150",
                      country_id: "1193"
                  },
                  {
                      id: "4389",
                      name: "Bohinj",
                      abbreviation: "004",
                      country_id: "1193"
                  },
                  {
                      id: "4390",
                      name: "Borovnica",
                      abbreviation: "005",
                      country_id: "1193"
                  },
                  {
                      id: "4391",
                      name: "Bovec",
                      abbreviation: "006",
                      country_id: "1193"
                  },
                  {
                      id: "4392",
                      name: "Braslovče",
                      abbreviation: "151",
                      country_id: "1193"
                  },
                  {
                      id: "4393",
                      name: "Brda",
                      abbreviation: "007",
                      country_id: "1193"
                  },
                  {
                      id: "4394",
                      name: "Brezovica",
                      abbreviation: "008",
                      country_id: "1193"
                  },
                  {
                      id: "4395",
                      name: "Brežice",
                      abbreviation: "009",
                      country_id: "1193"
                  },
                  {
                      id: "4396",
                      name: "Cankova",
                      abbreviation: "152",
                      country_id: "1193"
                  },
                  {
                      id: "4397",
                      name: "Celje",
                      abbreviation: "011",
                      country_id: "1193"
                  },
                  {
                      id: "4398",
                      name: "Cerklje na Gorenjskem",
                      abbreviation: "012",
                      country_id: "1193"
                  },
                  {
                      id: "4399",
                      name: "Cerknica",
                      abbreviation: "013",
                      country_id: "1193"
                  },
                  {
                      id: "4400",
                      name: "Cerkno",
                      abbreviation: "014",
                      country_id: "1193"
                  },
                  {
                      id: "4401",
                      name: "Cerkvenjak",
                      abbreviation: "153",
                      country_id: "1193"
                  },
                  {
                      id: "4402",
                      name: "Črenšovci",
                      abbreviation: "015",
                      country_id: "1193"
                  },
                  {
                      id: "4403",
                      name: "Črna na Koroškem",
                      abbreviation: "016",
                      country_id: "1193"
                  },
                  {
                      id: "4404",
                      name: "Črnomelj",
                      abbreviation: "017",
                      country_id: "1193"
                  },
                  {
                      id: "4405",
                      name: "Destrnik",
                      abbreviation: "018",
                      country_id: "1193"
                  },
                  {
                      id: "4406",
                      name: "Divača",
                      abbreviation: "019",
                      country_id: "1193"
                  },
                  {
                      id: "4407",
                      name: "Dobje",
                      abbreviation: "154",
                      country_id: "1193"
                  },
                  {
                      id: "4408",
                      name: "Dobrepolje",
                      abbreviation: "020",
                      country_id: "1193"
                  },
                  {
                      id: "4409",
                      name: "Dobrna",
                      abbreviation: "155",
                      country_id: "1193"
                  },
                  {
                      id: "4410",
                      name: "Dobrova-Polhov Gradec",
                      abbreviation: "021",
                      country_id: "1193"
                  },
                  {
                      id: "4411",
                      name: "Dobrovnik",
                      abbreviation: "156",
                      country_id: "1193"
                  },
                  {
                      id: "4412",
                      name: "Dol pri Ljubljani",
                      abbreviation: "022",
                      country_id: "1193"
                  },
                  {
                      id: "4413",
                      name: "Dolenjske Toplice",
                      abbreviation: "157",
                      country_id: "1193"
                  },
                  {
                      id: "4414",
                      name: "Domžale",
                      abbreviation: "023",
                      country_id: "1193"
                  },
                  {
                      id: "4415",
                      name: "Dornava",
                      abbreviation: "024",
                      country_id: "1193"
                  },
                  {
                      id: "4416",
                      name: "Dravograd",
                      abbreviation: "025",
                      country_id: "1193"
                  },
                  {
                      id: "4417",
                      name: "Duplek",
                      abbreviation: "026",
                      country_id: "1193"
                  },
                  {
                      id: "4418",
                      name: "Gorenja vas-Poljane",
                      abbreviation: "027",
                      country_id: "1193"
                  },
                  {
                      id: "4419",
                      name: "Gorišnica",
                      abbreviation: "028",
                      country_id: "1193"
                  },
                  {
                      id: "4420",
                      name: "Gornja Radgona",
                      abbreviation: "029",
                      country_id: "1193"
                  },
                  {
                      id: "4421",
                      name: "Gornji Grad",
                      abbreviation: "030",
                      country_id: "1193"
                  },
                  {
                      id: "4422",
                      name: "Gornji Petrovci",
                      abbreviation: "031",
                      country_id: "1193"
                  },
                  {
                      id: "4423",
                      name: "Grad",
                      abbreviation: "158",
                      country_id: "1193"
                  },
                  {
                      id: "4424",
                      name: "Grosuplje",
                      abbreviation: "032",
                      country_id: "1193"
                  },
                  {
                      id: "4425",
                      name: "Hajdina",
                      abbreviation: "159",
                      country_id: "1193"
                  },
                  {
                      id: "4426",
                      name: "Hoče-Slivnica",
                      abbreviation: "160",
                      country_id: "1193"
                  },
                  {
                      id: "4427",
                      name: "Hodoš",
                      abbreviation: "161",
                      country_id: "1193"
                  },
                  {
                      id: "4428",
                      name: "Horjul",
                      abbreviation: "162",
                      country_id: "1193"
                  },
                  {
                      id: "4429",
                      name: "Hrastnik",
                      abbreviation: "034",
                      country_id: "1193"
                  },
                  {
                      id: "4430",
                      name: "Hrpelje-Kozina",
                      abbreviation: "035",
                      country_id: "1193"
                  },
                  {
                      id: "4431",
                      name: "Idrija",
                      abbreviation: "036",
                      country_id: "1193"
                  },
                  {
                      id: "4432",
                      name: "Ig",
                      abbreviation: "037",
                      country_id: "1193"
                  },
                  {
                      id: "4433",
                      name: "Ilirska Bistrica",
                      abbreviation: "038",
                      country_id: "1193"
                  },
                  {
                      id: "4434",
                      name: "Ivančna Gorica",
                      abbreviation: "039",
                      country_id: "1193"
                  },
                  {
                      id: "4435",
                      name: "Izola",
                      abbreviation: "040",
                      country_id: "1193"
                  },
                  {
                      id: "4436",
                      name: "Jesenice",
                      abbreviation: "041",
                      country_id: "1193"
                  },
                  {
                      id: "4437",
                      name: "Jezersko",
                      abbreviation: "163",
                      country_id: "1193"
                  },
                  {
                      id: "4438",
                      name: "Juršinci",
                      abbreviation: "042",
                      country_id: "1193"
                  },
                  {
                      id: "4439",
                      name: "Kamnik",
                      abbreviation: "043",
                      country_id: "1193"
                  },
                  {
                      id: "4440",
                      name: "Kanal",
                      abbreviation: "044",
                      country_id: "1193"
                  },
                  {
                      id: "4441",
                      name: "Kidričevo",
                      abbreviation: "045",
                      country_id: "1193"
                  },
                  {
                      id: "4442",
                      name: "Kobarid",
                      abbreviation: "046",
                      country_id: "1193"
                  },
                  {
                      id: "4443",
                      name: "Kobilje",
                      abbreviation: "047",
                      country_id: "1193"
                  },
                  {
                      id: "4444",
                      name: "Kočevje",
                      abbreviation: "048",
                      country_id: "1193"
                  },
                  {
                      id: "4445",
                      name: "Komen",
                      abbreviation: "049",
                      country_id: "1193"
                  },
                  {
                      id: "4446",
                      name: "Komenda",
                      abbreviation: "164",
                      country_id: "1193"
                  },
                  {
                      id: "4447",
                      name: "Koper",
                      abbreviation: "050",
                      country_id: "1193"
                  },
                  {
                      id: "4448",
                      name: "Kostel",
                      abbreviation: "165",
                      country_id: "1193"
                  },
                  {
                      id: "4449",
                      name: "Kozje",
                      abbreviation: "051",
                      country_id: "1193"
                  },
                  {
                      id: "4450",
                      name: "Kranj",
                      abbreviation: "052",
                      country_id: "1193"
                  },
                  {
                      id: "4451",
                      name: "Kranjska Gora",
                      abbreviation: "053",
                      country_id: "1193"
                  },
                  {
                      id: "4452",
                      name: "Križevci",
                      abbreviation: "166",
                      country_id: "1193"
                  },
                  {
                      id: "4453",
                      name: "Krško",
                      abbreviation: "054",
                      country_id: "1193"
                  },
                  {
                      id: "4454",
                      name: "Kungota",
                      abbreviation: "055",
                      country_id: "1193"
                  },
                  {
                      id: "4455",
                      name: "Kuzma",
                      abbreviation: "056",
                      country_id: "1193"
                  },
                  {
                      id: "4456",
                      name: "Laško",
                      abbreviation: "057",
                      country_id: "1193"
                  },
                  {
                      id: "4457",
                      name: "Lenart",
                      abbreviation: "058",
                      country_id: "1193"
                  },
                  {
                      id: "4458",
                      name: "Lendava",
                      abbreviation: "059",
                      country_id: "1193"
                  },
                  {
                      id: "4459",
                      name: "Litija",
                      abbreviation: "060",
                      country_id: "1193"
                  },
                  {
                      id: "4460",
                      name: "Ljubljana",
                      abbreviation: "061",
                      country_id: "1193"
                  },
                  {
                      id: "4461",
                      name: "Ljubno",
                      abbreviation: "062",
                      country_id: "1193"
                  },
                  {
                      id: "4462",
                      name: "Ljutomer",
                      abbreviation: "063",
                      country_id: "1193"
                  },
                  {
                      id: "4463",
                      name: "Logatec",
                      abbreviation: "064",
                      country_id: "1193"
                  },
                  {
                      id: "4464",
                      name: "Loška dolina",
                      abbreviation: "065",
                      country_id: "1193"
                  },
                  {
                      id: "4465",
                      name: "Loški Potok",
                      abbreviation: "066",
                      country_id: "1193"
                  },
                  {
                      id: "4466",
                      name: "Lovrenc na Pohorju",
                      abbreviation: "167",
                      country_id: "1193"
                  },
                  {
                      id: "4467",
                      name: "Luče",
                      abbreviation: "067",
                      country_id: "1193"
                  },
                  {
                      id: "4468",
                      name: "Lukovica",
                      abbreviation: "068",
                      country_id: "1193"
                  },
                  {
                      id: "4469",
                      name: "Majšperk",
                      abbreviation: "069",
                      country_id: "1193"
                  },
                  {
                      id: "4470",
                      name: "Maribor",
                      abbreviation: "070",
                      country_id: "1193"
                  },
                  {
                      id: "4471",
                      name: "Markovci",
                      abbreviation: "168",
                      country_id: "1193"
                  },
                  {
                      id: "4472",
                      name: "Medvode",
                      abbreviation: "071",
                      country_id: "1193"
                  },
                  {
                      id: "4473",
                      name: "Mengeš",
                      abbreviation: "072",
                      country_id: "1193"
                  },
                  {
                      id: "4474",
                      name: "Metlika",
                      abbreviation: "073",
                      country_id: "1193"
                  },
                  {
                      id: "4475",
                      name: "Mežica",
                      abbreviation: "074",
                      country_id: "1193"
                  },
                  {
                      id: "4476",
                      name: "Miklavž na Dravskem polju",
                      abbreviation: "169",
                      country_id: "1193"
                  },
                  {
                      id: "4477",
                      name: "Miren-Kostanjevica",
                      abbreviation: "075",
                      country_id: "1193"
                  },
                  {
                      id: "4478",
                      name: "Mirna Peč",
                      abbreviation: "170",
                      country_id: "1193"
                  },
                  {
                      id: "4479",
                      name: "Mislinja",
                      abbreviation: "076",
                      country_id: "1193"
                  },
                  {
                      id: "4480",
                      name: "Moravče",
                      abbreviation: "077",
                      country_id: "1193"
                  },
                  {
                      id: "4481",
                      name: "Moravske Toplice",
                      abbreviation: "078",
                      country_id: "1193"
                  },
                  {
                      id: "4482",
                      name: "Mozirje",
                      abbreviation: "079",
                      country_id: "1193"
                  },
                  {
                      id: "4483",
                      name: "Murska Sobota",
                      abbreviation: "080",
                      country_id: "1193"
                  },
                  {
                      id: "4484",
                      name: "Muta",
                      abbreviation: "081",
                      country_id: "1193"
                  },
                  {
                      id: "4485",
                      name: "Naklo",
                      abbreviation: "082",
                      country_id: "1193"
                  },
                  {
                      id: "4486",
                      name: "Nazarje",
                      abbreviation: "083",
                      country_id: "1193"
                  },
                  {
                      id: "4487",
                      name: "Nova Gorica",
                      abbreviation: "084",
                      country_id: "1193"
                  },
                  {
                      id: "4488",
                      name: "Novo mesto",
                      abbreviation: "085",
                      country_id: "1193"
                  },
                  {
                      id: "4489",
                      name: "Sveta Ana",
                      abbreviation: "181",
                      country_id: "1193"
                  },
                  {
                      id: "4490",
                      name: "Sveti Andraž v Slovenskih goricah",
                      abbreviation: "182",
                      country_id: "1193"
                  },
                  {
                      id: "4491",
                      name: "Sveti Jurij",
                      abbreviation: "116",
                      country_id: "1193"
                  },
                  {
                      id: "4492",
                      name: "Šalovci",
                      abbreviation: "033",
                      country_id: "1193"
                  },
                  {
                      id: "4493",
                      name: "Šempeter-Vrtojba",
                      abbreviation: "183",
                      country_id: "1193"
                  },
                  {
                      id: "4494",
                      name: "Šenčur",
                      abbreviation: "117",
                      country_id: "1193"
                  },
                  {
                      id: "4495",
                      name: "Šentilj",
                      abbreviation: "118",
                      country_id: "1193"
                  },
                  {
                      id: "4496",
                      name: "Šentjernej",
                      abbreviation: "119",
                      country_id: "1193"
                  },
                  {
                      id: "4497",
                      name: "Šentjur",
                      abbreviation: "120",
                      country_id: "1193"
                  },
                  {
                      id: "4498",
                      name: "Škocjan",
                      abbreviation: "121",
                      country_id: "1193"
                  },
                  {
                      id: "4499",
                      name: "Škofja Loka",
                      abbreviation: "122",
                      country_id: "1193"
                  },
                  {
                      id: "4500",
                      name: "Škofljica",
                      abbreviation: "123",
                      country_id: "1193"
                  },
                  {
                      id: "4501",
                      name: "Šmarje pri Jelšah",
                      abbreviation: "124",
                      country_id: "1193"
                  },
                  {
                      id: "4502",
                      name: "Šmartno ob Paki",
                      abbreviation: "125",
                      country_id: "1193"
                  },
                  {
                      id: "4503",
                      name: "Šmartno pri Litiji",
                      abbreviation: "194",
                      country_id: "1193"
                  },
                  {
                      id: "4504",
                      name: "Šoštanj",
                      abbreviation: "126",
                      country_id: "1193"
                  },
                  {
                      id: "4505",
                      name: "Štore",
                      abbreviation: "127",
                      country_id: "1193"
                  },
                  {
                      id: "4506",
                      name: "Tabor",
                      abbreviation: "184",
                      country_id: "1193"
                  },
                  {
                      id: "4507",
                      name: "Tišina",
                      abbreviation: "010",
                      country_id: "1193"
                  },
                  {
                      id: "4508",
                      name: "Tolmin",
                      abbreviation: "128",
                      country_id: "1193"
                  },
                  {
                      id: "4509",
                      name: "Trbovlje",
                      abbreviation: "129",
                      country_id: "1193"
                  },
                  {
                      id: "4510",
                      name: "Trebnje",
                      abbreviation: "130",
                      country_id: "1193"
                  },
                  {
                      id: "4511",
                      name: "Trnovska vas",
                      abbreviation: "185",
                      country_id: "1193"
                  },
                  {
                      id: "4512",
                      name: "Tržič",
                      abbreviation: "131",
                      country_id: "1193"
                  },
                  {
                      id: "4513",
                      name: "Trzin",
                      abbreviation: "186",
                      country_id: "1193"
                  },
                  {
                      id: "4514",
                      name: "Turnišče",
                      abbreviation: "132",
                      country_id: "1193"
                  },
                  {
                      id: "4515",
                      name: "Velenje",
                      abbreviation: "133",
                      country_id: "1193"
                  },
                  {
                      id: "4516",
                      name: "Velika Polana",
                      abbreviation: "187",
                      country_id: "1193"
                  },
                  {
                      id: "4517",
                      name: "Velike Lašče",
                      abbreviation: "134",
                      country_id: "1193"
                  },
                  {
                      id: "4518",
                      name: "Veržej",
                      abbreviation: "188",
                      country_id: "1193"
                  },
                  {
                      id: "4519",
                      name: "Videm",
                      abbreviation: "135",
                      country_id: "1193"
                  },
                  {
                      id: "4520",
                      name: "Vipava",
                      abbreviation: "136",
                      country_id: "1193"
                  },
                  {
                      id: "4521",
                      name: "Vitanje",
                      abbreviation: "137",
                      country_id: "1193"
                  },
                  {
                      id: "4522",
                      name: "Vojnik",
                      abbreviation: "138",
                      country_id: "1193"
                  },
                  {
                      id: "4523",
                      name: "Vransko",
                      abbreviation: "189",
                      country_id: "1193"
                  },
                  {
                      id: "4524",
                      name: "Vrhnika",
                      abbreviation: "140",
                      country_id: "1193"
                  },
                  {
                      id: "4525",
                      name: "Vuzenica",
                      abbreviation: "141",
                      country_id: "1193"
                  },
                  {
                      id: "4526",
                      name: "Zagorje ob Savi",
                      abbreviation: "142",
                      country_id: "1193"
                  },
                  {
                      id: "4527",
                      name: "Zavrč",
                      abbreviation: "143",
                      country_id: "1193"
                  },
                  {
                      id: "4528",
                      name: "Zreče",
                      abbreviation: "144",
                      country_id: "1193"
                  },
                  {
                      id: "4529",
                      name: "Žalec",
                      abbreviation: "190",
                      country_id: "1193"
                  },
                  {
                      id: "4530",
                      name: "Železniki",
                      abbreviation: "146",
                      country_id: "1193"
                  },
                  {
                      id: "4531",
                      name: "Žetale",
                      abbreviation: "191",
                      country_id: "1193"
                  },
                  {
                      id: "4532",
                      name: "Žiri",
                      abbreviation: "147",
                      country_id: "1193"
                  },
                  {
                      id: "4533",
                      name: "Žirovnica",
                      abbreviation: "192",
                      country_id: "1193"
                  },
                  {
                      id: "4534",
                      name: "Žužemberk",
                      abbreviation: "193",
                      country_id: "1193"
                  },
                  {
                      id: "4535",
                      name: "Banskobystrický kraj",
                      abbreviation: "BC",
                      country_id: "1192"
                  },
                  {
                      id: "4536",
                      name: "Bratislavský kraj",
                      abbreviation: "BL",
                      country_id: "1192"
                  },
                  {
                      id: "4537",
                      name: "Košický kraj",
                      abbreviation: "KI",
                      country_id: "1192"
                  },
                  {
                      id: "4538",
                      name: "Nitriansky kraj",
                      abbreviation: "NJ",
                      country_id: "1192"
                  },
                  {
                      id: "4539",
                      name: "Prešovský kraj",
                      abbreviation: "PV",
                      country_id: "1192"
                  },
                  {
                      id: "4540",
                      name: "Trenčiansky kraj",
                      abbreviation: "TC",
                      country_id: "1192"
                  },
                  {
                      id: "4541",
                      name: "Trnavský kraj",
                      abbreviation: "TA",
                      country_id: "1192"
                  },
                  {
                      id: "4542",
                      name: "Žilinský kraj",
                      abbreviation: "ZI",
                      country_id: "1192"
                  },
                  {
                      id: "4543",
                      name: "Western Area (Freetown)",
                      abbreviation: "W",
                      country_id: "1190"
                  },
                  {
                      id: "4544",
                      name: "Dakar",
                      abbreviation: "DK",
                      country_id: "1188"
                  },
                  {
                      id: "4545",
                      name: "Diourbel",
                      abbreviation: "DB",
                      country_id: "1188"
                  },
                  {
                      id: "4546",
                      name: "Fatick",
                      abbreviation: "FK",
                      country_id: "1188"
                  },
                  {
                      id: "4547",
                      name: "Kaolack",
                      abbreviation: "KL",
                      country_id: "1188"
                  },
                  {
                      id: "4548",
                      name: "Kolda",
                      abbreviation: "KD",
                      country_id: "1188"
                  },
                  {
                      id: "4549",
                      name: "Louga",
                      abbreviation: "LG",
                      country_id: "1188"
                  },
                  {
                      id: "4550",
                      name: "Matam",
                      abbreviation: "MT",
                      country_id: "1188"
                  },
                  {
                      id: "4551",
                      name: "Saint-Louis",
                      abbreviation: "SL",
                      country_id: "1188"
                  },
                  {
                      id: "4552",
                      name: "Tambacounda",
                      abbreviation: "TC",
                      country_id: "1188"
                  },
                  {
                      id: "4553",
                      name: "Thies",
                      abbreviation: "TH",
                      country_id: "1188"
                  },
                  {
                      id: "4554",
                      name: "Ziguinchor",
                      abbreviation: "ZG",
                      country_id: "1188"
                  },
                  {
                      id: "4555",
                      name: "Awdal",
                      abbreviation: "AW",
                      country_id: "1195"
                  },
                  {
                      id: "4556",
                      name: "Bakool",
                      abbreviation: "BK",
                      country_id: "1195"
                  },
                  {
                      id: "4557",
                      name: "Banaadir",
                      abbreviation: "BN",
                      country_id: "1195"
                  },
                  {
                      id: "4558",
                      name: "Bay",
                      abbreviation: "BY",
                      country_id: "1195"
                  },
                  {
                      id: "4559",
                      name: "Galguduud",
                      abbreviation: "GA",
                      country_id: "1195"
                  },
                  {
                      id: "4560",
                      name: "Gedo",
                      abbreviation: "GE",
                      country_id: "1195"
                  },
                  {
                      id: "4561",
                      name: "Hiirsan",
                      abbreviation: "HI",
                      country_id: "1195"
                  },
                  {
                      id: "4562",
                      name: "Jubbada Dhexe",
                      abbreviation: "JD",
                      country_id: "1195"
                  },
                  {
                      id: "4563",
                      name: "Jubbada Hoose",
                      abbreviation: "JH",
                      country_id: "1195"
                  },
                  {
                      id: "4564",
                      name: "Mudug",
                      abbreviation: "MU",
                      country_id: "1195"
                  },
                  {
                      id: "4565",
                      name: "Nugaal",
                      abbreviation: "NU",
                      country_id: "1195"
                  },
                  {
                      id: "4566",
                      name: "Saneag",
                      abbreviation: "SA",
                      country_id: "1195"
                  },
                  {
                      id: "4567",
                      name: "Shabeellaha Dhexe",
                      abbreviation: "SD",
                      country_id: "1195"
                  },
                  {
                      id: "4568",
                      name: "Shabeellaha Hoose",
                      abbreviation: "SH",
                      country_id: "1195"
                  },
                  {
                      id: "4569",
                      name: "Sool",
                      abbreviation: "SO",
                      country_id: "1195"
                  },
                  {
                      id: "4570",
                      name: "Togdheer",
                      abbreviation: "TO",
                      country_id: "1195"
                  },
                  {
                      id: "4571",
                      name: "Woqooyi Galbeed",
                      abbreviation: "WO",
                      country_id: "1195"
                  },
                  {
                      id: "4572",
                      name: "Brokopondo",
                      abbreviation: "BR",
                      country_id: "1201"
                  },
                  {
                      id: "4573",
                      name: "Commewijne",
                      abbreviation: "CM",
                      country_id: "1201"
                  },
                  {
                      id: "4574",
                      name: "Coronie",
                      abbreviation: "CR",
                      country_id: "1201"
                  },
                  {
                      id: "4575",
                      name: "Marowijne",
                      abbreviation: "MA",
                      country_id: "1201"
                  },
                  {
                      id: "4576",
                      name: "Nickerie",
                      abbreviation: "NI",
                      country_id: "1201"
                  },
                  {
                      id: "4577",
                      name: "Paramaribo",
                      abbreviation: "PM",
                      country_id: "1201"
                  },
                  {
                      id: "4578",
                      name: "Saramacca",
                      abbreviation: "SA",
                      country_id: "1201"
                  },
                  {
                      id: "4579",
                      name: "Sipaliwini",
                      abbreviation: "SI",
                      country_id: "1201"
                  },
                  {
                      id: "4580",
                      name: "Wanica",
                      abbreviation: "WA",
                      country_id: "1201"
                  },
                  {
                      id: "4581",
                      name: "Principe",
                      abbreviation: "P",
                      country_id: "1207"
                  },
                  {
                      id: "4582",
                      name: "Sao Tome",
                      abbreviation: "S",
                      country_id: "1207"
                  },
                  {
                      id: "4583",
                      name: "Ahuachapan",
                      abbreviation: "AH",
                      country_id: "1066"
                  },
                  {
                      id: "4584",
                      name: "Cabanas",
                      abbreviation: "CA",
                      country_id: "1066"
                  },
                  {
                      id: "4585",
                      name: "Cuscatlan",
                      abbreviation: "CU",
                      country_id: "1066"
                  },
                  {
                      id: "4586",
                      name: "Chalatenango",
                      abbreviation: "CH",
                      country_id: "1066"
                  },
                  {
                      id: "4587",
                      name: "Morazan",
                      abbreviation: "MO",
                      country_id: "1066"
                  },
                  {
                      id: "4588",
                      name: "San Miguel",
                      abbreviation: "SM",
                      country_id: "1066"
                  },
                  {
                      id: "4589",
                      name: "San Salvador",
                      abbreviation: "SS",
                      country_id: "1066"
                  },
                  {
                      id: "4590",
                      name: "Santa Ana",
                      abbreviation: "SA",
                      country_id: "1066"
                  },
                  {
                      id: "4591",
                      name: "San Vicente",
                      abbreviation: "SV",
                      country_id: "1066"
                  },
                  {
                      id: "4592",
                      name: "Sonsonate",
                      abbreviation: "SO",
                      country_id: "1066"
                  },
                  {
                      id: "4593",
                      name: "Usulutan",
                      abbreviation: "US",
                      country_id: "1066"
                  },
                  {
                      id: "4594",
                      name: "Al Hasakah",
                      abbreviation: "HA",
                      country_id: "1206"
                  },
                  {
                      id: "4595",
                      name: "Al Ladhiqiyah",
                      abbreviation: "LA",
                      country_id: "1206"
                  },
                  {
                      id: "4596",
                      name: "Al Qunaytirah",
                      abbreviation: "QU",
                      country_id: "1206"
                  },
                  {
                      id: "4597",
                      name: "Ar Raqqah",
                      abbreviation: "RA",
                      country_id: "1206"
                  },
                  {
                      id: "4598",
                      name: "As Suwayda'",
                      abbreviation: "SU",
                      country_id: "1206"
                  },
                  {
                      id: "4599",
                      name: "Dar'a",
                      abbreviation: "DR",
                      country_id: "1206"
                  },
                  {
                      id: "4600",
                      name: "Dayr az Zawr",
                      abbreviation: "DY",
                      country_id: "1206"
                  },
                  {
                      id: "4601",
                      name: "Dimashq",
                      abbreviation: "DI",
                      country_id: "1206"
                  },
                  {
                      id: "4602",
                      name: "Halab",
                      abbreviation: "HL",
                      country_id: "1206"
                  },
                  {
                      id: "4603",
                      name: "Hamah",
                      abbreviation: "HM",
                      country_id: "1206"
                  },
                  {
                      id: "4604",
                      name: "Jim'",
                      abbreviation: "HI",
                      country_id: "1206"
                  },
                  {
                      id: "4605",
                      name: "Idlib",
                      abbreviation: "Id",
                      country_id: "1206"
                  },
                  {
                      id: "4606",
                      name: "Rif Dimashq",
                      abbreviation: "RD",
                      country_id: "1206"
                  },
                  {
                      id: "4607",
                      name: "Tarts",
                      abbreviation: "TA",
                      country_id: "1206"
                  },
                  {
                      id: "4608",
                      name: "Hhohho",
                      abbreviation: "HH",
                      country_id: "1203"
                  },
                  {
                      id: "4609",
                      name: "Lubombo",
                      abbreviation: "LU",
                      country_id: "1203"
                  },
                  {
                      id: "4610",
                      name: "Manzini",
                      abbreviation: "MA",
                      country_id: "1203"
                  },
                  {
                      id: "4611",
                      name: "Shiselweni",
                      abbreviation: "SH",
                      country_id: "1203"
                  },
                  {
                      id: "4612",
                      name: "Batha",
                      abbreviation: "BA",
                      country_id: "1043"
                  },
                  {
                      id: "4613",
                      name: "Biltine",
                      abbreviation: "BI",
                      country_id: "1043"
                  },
                  {
                      id: "4614",
                      name: "Borkou-Ennedi-Tibesti",
                      abbreviation: "BET",
                      country_id: "1043"
                  },
                  {
                      id: "4615",
                      name: "Chari-Baguirmi",
                      abbreviation: "CB",
                      country_id: "1043"
                  },
                  {
                      id: "4616",
                      name: "Guera",
                      abbreviation: "GR",
                      country_id: "1043"
                  },
                  {
                      id: "4617",
                      name: "Kanem",
                      abbreviation: "KA",
                      country_id: "1043"
                  },
                  {
                      id: "4618",
                      name: "Lac",
                      abbreviation: "LC",
                      country_id: "1043"
                  },
                  {
                      id: "4619",
                      name: "Logone-Occidental",
                      abbreviation: "LO",
                      country_id: "1043"
                  },
                  {
                      id: "4620",
                      name: "Logone-Oriental",
                      abbreviation: "LR",
                      country_id: "1043"
                  },
                  {
                      id: "4621",
                      name: "Mayo-Kebbi",
                      abbreviation: "MK",
                      country_id: "1043"
                  },
                  {
                      id: "4622",
                      name: "Moyen-Chari",
                      abbreviation: "MC",
                      country_id: "1043"
                  },
                  {
                      id: "4623",
                      name: "Ouaddai",
                      abbreviation: "OD",
                      country_id: "1043"
                  },
                  {
                      id: "4624",
                      name: "Salamat",
                      abbreviation: "SA",
                      country_id: "1043"
                  },
                  {
                      id: "4625",
                      name: "Tandjile",
                      abbreviation: "TA",
                      country_id: "1043"
                  },
                  {
                      id: "4626",
                      name: "Kara",
                      abbreviation: "K",
                      country_id: "1214"
                  },
                  {
                      id: "4627",
                      name: "Maritime (Region)",
                      abbreviation: "M",
                      country_id: "1214"
                  },
                  {
                      id: "4628",
                      name: "Savannes",
                      abbreviation: "S",
                      country_id: "1214"
                  },
                  {
                      id: "4629",
                      name: "Krung Thep Maha Nakhon Bangkok",
                      abbreviation: "10",
                      country_id: "1211"
                  },
                  {
                      id: "4630",
                      name: "Phatthaya",
                      abbreviation: "S",
                      country_id: "1211"
                  },
                  {
                      id: "4631",
                      name: "Amnat Charoen",
                      abbreviation: "37",
                      country_id: "1211"
                  },
                  {
                      id: "4632",
                      name: "Ang Thong",
                      abbreviation: "15",
                      country_id: "1211"
                  },
                  {
                      id: "4633",
                      name: "Buri Ram",
                      abbreviation: "31",
                      country_id: "1211"
                  },
                  {
                      id: "4634",
                      name: "Chachoengsao",
                      abbreviation: "24",
                      country_id: "1211"
                  },
                  {
                      id: "4635",
                      name: "Chai Nat",
                      abbreviation: "18",
                      country_id: "1211"
                  },
                  {
                      id: "4636",
                      name: "Chaiyaphum",
                      abbreviation: "36",
                      country_id: "1211"
                  },
                  {
                      id: "4637",
                      name: "Chanthaburi",
                      abbreviation: "22",
                      country_id: "1211"
                  },
                  {
                      id: "4638",
                      name: "Chiang Mai",
                      abbreviation: "50",
                      country_id: "1211"
                  },
                  {
                      id: "4639",
                      name: "Chiang Rai",
                      abbreviation: "57",
                      country_id: "1211"
                  },
                  {
                      id: "4640",
                      name: "Chon Buri",
                      abbreviation: "20",
                      country_id: "1211"
                  },
                  {
                      id: "4641",
                      name: "Chumphon",
                      abbreviation: "86",
                      country_id: "1211"
                  },
                  {
                      id: "4642",
                      name: "Kalasin",
                      abbreviation: "46",
                      country_id: "1211"
                  },
                  {
                      id: "4643",
                      name: "Kamphasng Phet",
                      abbreviation: "62",
                      country_id: "1211"
                  },
                  {
                      id: "4644",
                      name: "Kanchanaburi",
                      abbreviation: "71",
                      country_id: "1211"
                  },
                  {
                      id: "4645",
                      name: "Khon Kaen",
                      abbreviation: "40",
                      country_id: "1211"
                  },
                  {
                      id: "4646",
                      name: "Krabi",
                      abbreviation: "81",
                      country_id: "1211"
                  },
                  {
                      id: "4647",
                      name: "Lampang",
                      abbreviation: "52",
                      country_id: "1211"
                  },
                  {
                      id: "4648",
                      name: "Lamphun",
                      abbreviation: "51",
                      country_id: "1211"
                  },
                  {
                      id: "4649",
                      name: "Loei",
                      abbreviation: "42",
                      country_id: "1211"
                  },
                  {
                      id: "4650",
                      name: "Lop Buri",
                      abbreviation: "16",
                      country_id: "1211"
                  },
                  {
                      id: "4651",
                      name: "Mae Hong Son",
                      abbreviation: "58",
                      country_id: "1211"
                  },
                  {
                      id: "4652",
                      name: "Maha Sarakham",
                      abbreviation: "44",
                      country_id: "1211"
                  },
                  {
                      id: "4653",
                      name: "Mukdahan",
                      abbreviation: "49",
                      country_id: "1211"
                  },
                  {
                      id: "4654",
                      name: "Nakhon Nayok",
                      abbreviation: "26",
                      country_id: "1211"
                  },
                  {
                      id: "4655",
                      name: "Nakhon Pathom",
                      abbreviation: "73",
                      country_id: "1211"
                  },
                  {
                      id: "4656",
                      name: "Nakhon Phanom",
                      abbreviation: "48",
                      country_id: "1211"
                  },
                  {
                      id: "4657",
                      name: "Nakhon Ratchasima",
                      abbreviation: "30",
                      country_id: "1211"
                  },
                  {
                      id: "4658",
                      name: "Nakhon Sawan",
                      abbreviation: "60",
                      country_id: "1211"
                  },
                  {
                      id: "4659",
                      name: "Nakhon Si Thammarat",
                      abbreviation: "80",
                      country_id: "1211"
                  },
                  {
                      id: "4660",
                      name: "Nan",
                      abbreviation: "55",
                      country_id: "1211"
                  },
                  {
                      id: "4661",
                      name: "Narathiwat",
                      abbreviation: "96",
                      country_id: "1211"
                  },
                  {
                      id: "4662",
                      name: "Nong Bua Lam Phu",
                      abbreviation: "39",
                      country_id: "1211"
                  },
                  {
                      id: "4663",
                      name: "Nong Khai",
                      abbreviation: "43",
                      country_id: "1211"
                  },
                  {
                      id: "4664",
                      name: "Nonthaburi",
                      abbreviation: "12",
                      country_id: "1211"
                  },
                  {
                      id: "4665",
                      name: "Pathum Thani",
                      abbreviation: "13",
                      country_id: "1211"
                  },
                  {
                      id: "4666",
                      name: "Pattani",
                      abbreviation: "94",
                      country_id: "1211"
                  },
                  {
                      id: "4667",
                      name: "Phangnga",
                      abbreviation: "82",
                      country_id: "1211"
                  },
                  {
                      id: "4668",
                      name: "Phatthalung",
                      abbreviation: "93",
                      country_id: "1211"
                  },
                  {
                      id: "4669",
                      name: "Phayao",
                      abbreviation: "56",
                      country_id: "1211"
                  },
                  {
                      id: "4670",
                      name: "Phetchabun",
                      abbreviation: "67",
                      country_id: "1211"
                  },
                  {
                      id: "4671",
                      name: "Phetchaburi",
                      abbreviation: "76",
                      country_id: "1211"
                  },
                  {
                      id: "4672",
                      name: "Phichit",
                      abbreviation: "66",
                      country_id: "1211"
                  },
                  {
                      id: "4673",
                      name: "Phitsanulok",
                      abbreviation: "65",
                      country_id: "1211"
                  },
                  {
                      id: "4674",
                      name: "Phrae",
                      abbreviation: "54",
                      country_id: "1211"
                  },
                  {
                      id: "4675",
                      name: "Phra Nakhon Si Ayutthaya",
                      abbreviation: "14",
                      country_id: "1211"
                  },
                  {
                      id: "4676",
                      name: "Phuket",
                      abbreviation: "83",
                      country_id: "1211"
                  },
                  {
                      id: "4677",
                      name: "Prachin Buri",
                      abbreviation: "25",
                      country_id: "1211"
                  },
                  {
                      id: "4678",
                      name: "Prachuap Khiri Khan",
                      abbreviation: "77",
                      country_id: "1211"
                  },
                  {
                      id: "4679",
                      name: "Ranong",
                      abbreviation: "85",
                      country_id: "1211"
                  },
                  {
                      id: "4680",
                      name: "Ratchaburi",
                      abbreviation: "70",
                      country_id: "1211"
                  },
                  {
                      id: "4681",
                      name: "Rayong",
                      abbreviation: "21",
                      country_id: "1211"
                  },
                  {
                      id: "4682",
                      name: "Roi Et",
                      abbreviation: "45",
                      country_id: "1211"
                  },
                  {
                      id: "4683",
                      name: "Sa Kaeo",
                      abbreviation: "27",
                      country_id: "1211"
                  },
                  {
                      id: "4684",
                      name: "Sakon Nakhon",
                      abbreviation: "47",
                      country_id: "1211"
                  },
                  {
                      id: "4685",
                      name: "Samut Prakan",
                      abbreviation: "11",
                      country_id: "1211"
                  },
                  {
                      id: "4686",
                      name: "Samut Sakhon",
                      abbreviation: "74",
                      country_id: "1211"
                  },
                  {
                      id: "4687",
                      name: "Samut Songkhram",
                      abbreviation: "75",
                      country_id: "1211"
                  },
                  {
                      id: "4688",
                      name: "Saraburi",
                      abbreviation: "19",
                      country_id: "1211"
                  },
                  {
                      id: "4689",
                      name: "Satun",
                      abbreviation: "91",
                      country_id: "1211"
                  },
                  {
                      id: "4690",
                      name: "Sing Buri",
                      abbreviation: "17",
                      country_id: "1211"
                  },
                  {
                      id: "4691",
                      name: "Si Sa Ket",
                      abbreviation: "33",
                      country_id: "1211"
                  },
                  {
                      id: "4692",
                      name: "Songkhla",
                      abbreviation: "90",
                      country_id: "1211"
                  },
                  {
                      id: "4693",
                      name: "Sukhothai",
                      abbreviation: "64",
                      country_id: "1211"
                  },
                  {
                      id: "4694",
                      name: "Suphan Buri",
                      abbreviation: "72",
                      country_id: "1211"
                  },
                  {
                      id: "4695",
                      name: "Surat Thani",
                      abbreviation: "84",
                      country_id: "1211"
                  },
                  {
                      id: "4696",
                      name: "Surin",
                      abbreviation: "32",
                      country_id: "1211"
                  },
                  {
                      id: "4697",
                      name: "Tak",
                      abbreviation: "63",
                      country_id: "1211"
                  },
                  {
                      id: "4698",
                      name: "Trang",
                      abbreviation: "92",
                      country_id: "1211"
                  },
                  {
                      id: "4699",
                      name: "Trat",
                      abbreviation: "23",
                      country_id: "1211"
                  },
                  {
                      id: "4700",
                      name: "Ubon Ratchathani",
                      abbreviation: "34",
                      country_id: "1211"
                  },
                  {
                      id: "4701",
                      name: "Udon Thani",
                      abbreviation: "41",
                      country_id: "1211"
                  },
                  {
                      id: "4702",
                      name: "Uthai Thani",
                      abbreviation: "61",
                      country_id: "1211"
                  },
                  {
                      id: "4703",
                      name: "Uttaradit",
                      abbreviation: "53",
                      country_id: "1211"
                  },
                  {
                      id: "4704",
                      name: "Yala",
                      abbreviation: "95",
                      country_id: "1211"
                  },
                  {
                      id: "4705",
                      name: "Yasothon",
                      abbreviation: "35",
                      country_id: "1211"
                  },
                  {
                      id: "4706",
                      name: "Sughd",
                      abbreviation: "SU",
                      country_id: "1209"
                  },
                  {
                      id: "4707",
                      name: "Khatlon",
                      abbreviation: "KT",
                      country_id: "1209"
                  },
                  {
                      id: "4708",
                      name: "Gorno-Badakhshan",
                      abbreviation: "GB",
                      country_id: "1209"
                  },
                  {
                      id: "4709",
                      name: "Ahal",
                      abbreviation: "A",
                      country_id: "1220"
                  },
                  {
                      id: "4710",
                      name: "Balkan",
                      abbreviation: "B",
                      country_id: "1220"
                  },
                  {
                      id: "4711",
                      name: "Dasoguz",
                      abbreviation: "D",
                      country_id: "1220"
                  },
                  {
                      id: "4712",
                      name: "Lebap",
                      abbreviation: "L",
                      country_id: "1220"
                  },
                  {
                      id: "4713",
                      name: "Mary",
                      abbreviation: "M",
                      country_id: "1220"
                  },
                  {
                      id: "4714",
                      name: "Béja",
                      abbreviation: "31",
                      country_id: "1218"
                  },
                  {
                      id: "4715",
                      name: "Ben Arous",
                      abbreviation: "13",
                      country_id: "1218"
                  },
                  {
                      id: "4716",
                      name: "Bizerte",
                      abbreviation: "23",
                      country_id: "1218"
                  },
                  {
                      id: "4717",
                      name: "Gabès",
                      abbreviation: "81",
                      country_id: "1218"
                  },
                  {
                      id: "4718",
                      name: "Gafsa",
                      abbreviation: "71",
                      country_id: "1218"
                  },
                  {
                      id: "4719",
                      name: "Jendouba",
                      abbreviation: "32",
                      country_id: "1218"
                  },
                  {
                      id: "4720",
                      name: "Kairouan",
                      abbreviation: "41",
                      country_id: "1218"
                  },
                  {
                      id: "4721",
                      name: "Rasserine",
                      abbreviation: "42",
                      country_id: "1218"
                  },
                  {
                      id: "4722",
                      name: "Kebili",
                      abbreviation: "73",
                      country_id: "1218"
                  },
                  {
                      id: "4723",
                      name: "L'Ariana",
                      abbreviation: "12",
                      country_id: "1218"
                  },
                  {
                      id: "4724",
                      name: "Le Ref",
                      abbreviation: "33",
                      country_id: "1218"
                  },
                  {
                      id: "4725",
                      name: "Mahdia",
                      abbreviation: "53",
                      country_id: "1218"
                  },
                  {
                      id: "4726",
                      name: "La Manouba",
                      abbreviation: "14",
                      country_id: "1218"
                  },
                  {
                      id: "4727",
                      name: "Medenine",
                      abbreviation: "82",
                      country_id: "1218"
                  },
                  {
                      id: "4728",
                      name: "Moneatir",
                      abbreviation: "52",
                      country_id: "1218"
                  },
                  {
                      id: "4729",
                      name: "Naboul",
                      abbreviation: "21",
                      country_id: "1218"
                  },
                  {
                      id: "4730",
                      name: "Sfax",
                      abbreviation: "61",
                      country_id: "1218"
                  },
                  {
                      id: "4731",
                      name: "Sidi Bouxid",
                      abbreviation: "43",
                      country_id: "1218"
                  },
                  {
                      id: "4732",
                      name: "Siliana",
                      abbreviation: "34",
                      country_id: "1218"
                  },
                  {
                      id: "4733",
                      name: "Sousse",
                      abbreviation: "51",
                      country_id: "1218"
                  },
                  {
                      id: "4734",
                      name: "Tataouine",
                      abbreviation: "83",
                      country_id: "1218"
                  },
                  {
                      id: "4735",
                      name: "Tozeur",
                      abbreviation: "72",
                      country_id: "1218"
                  },
                  {
                      id: "4736",
                      name: "Tunis",
                      abbreviation: "11",
                      country_id: "1218"
                  },
                  {
                      id: "4737",
                      name: "Zaghouan",
                      abbreviation: "22",
                      country_id: "1218"
                  },
                  {
                      id: "4738",
                      name: "Adana",
                      abbreviation: "01",
                      country_id: "1219"
                  },
                  {
                      id: "4739",
                      name: "Ad yaman",
                      abbreviation: "02",
                      country_id: "1219"
                  },
                  {
                      id: "4740",
                      name: "Afyon",
                      abbreviation: "03",
                      country_id: "1219"
                  },
                  {
                      id: "4741",
                      name: "Ag r",
                      abbreviation: "04",
                      country_id: "1219"
                  },
                  {
                      id: "4742",
                      name: "Aksaray",
                      abbreviation: "68",
                      country_id: "1219"
                  },
                  {
                      id: "4743",
                      name: "Amasya",
                      abbreviation: "05",
                      country_id: "1219"
                  },
                  {
                      id: "4744",
                      name: "Ankara",
                      abbreviation: "06",
                      country_id: "1219"
                  },
                  {
                      id: "4745",
                      name: "Antalya",
                      abbreviation: "07",
                      country_id: "1219"
                  },
                  {
                      id: "4746",
                      name: "Ardahan",
                      abbreviation: "75",
                      country_id: "1219"
                  },
                  {
                      id: "4747",
                      name: "Artvin",
                      abbreviation: "08",
                      country_id: "1219"
                  },
                  {
                      id: "4748",
                      name: "Aydin",
                      abbreviation: "09",
                      country_id: "1219"
                  },
                  {
                      id: "4749",
                      name: "Bal kesir",
                      abbreviation: "10",
                      country_id: "1219"
                  },
                  {
                      id: "4750",
                      name: "Bartin",
                      abbreviation: "74",
                      country_id: "1219"
                  },
                  {
                      id: "4751",
                      name: "Batman",
                      abbreviation: "72",
                      country_id: "1219"
                  },
                  {
                      id: "4752",
                      name: "Bayburt",
                      abbreviation: "69",
                      country_id: "1219"
                  },
                  {
                      id: "4753",
                      name: "Bilecik",
                      abbreviation: "11",
                      country_id: "1219"
                  },
                  {
                      id: "4754",
                      name: "Bingol",
                      abbreviation: "12",
                      country_id: "1219"
                  },
                  {
                      id: "4755",
                      name: "Bitlis",
                      abbreviation: "13",
                      country_id: "1219"
                  },
                  {
                      id: "4756",
                      name: "Bolu",
                      abbreviation: "14",
                      country_id: "1219"
                  },
                  {
                      id: "4757",
                      name: "Burdur",
                      abbreviation: "15",
                      country_id: "1219"
                  },
                  {
                      id: "4758",
                      name: "Bursa",
                      abbreviation: "16",
                      country_id: "1219"
                  },
                  {
                      id: "4759",
                      name: "Canakkale",
                      abbreviation: "17",
                      country_id: "1219"
                  },
                  {
                      id: "4760",
                      name: "Cankir",
                      abbreviation: "18",
                      country_id: "1219"
                  },
                  {
                      id: "4761",
                      name: "Corum",
                      abbreviation: "19",
                      country_id: "1219"
                  },
                  {
                      id: "4762",
                      name: "Denizli",
                      abbreviation: "20",
                      country_id: "1219"
                  },
                  {
                      id: "4763",
                      name: "Diyarbakir",
                      abbreviation: "21",
                      country_id: "1219"
                  },
                  {
                      id: "4764",
                      name: "Duzce",
                      abbreviation: "81",
                      country_id: "1219"
                  },
                  {
                      id: "4765",
                      name: "Edirne",
                      abbreviation: "22",
                      country_id: "1219"
                  },
                  {
                      id: "4766",
                      name: "Elazig",
                      abbreviation: "23",
                      country_id: "1219"
                  },
                  {
                      id: "4767",
                      name: "Erzincan",
                      abbreviation: "24",
                      country_id: "1219"
                  },
                  {
                      id: "4768",
                      name: "Erzurum",
                      abbreviation: "25",
                      country_id: "1219"
                  },
                  {
                      id: "4769",
                      name: "Eskis'ehir",
                      abbreviation: "26",
                      country_id: "1219"
                  },
                  {
                      id: "4770",
                      name: "Gaziantep",
                      abbreviation: "27",
                      country_id: "1219"
                  },
                  {
                      id: "4771",
                      name: "Giresun",
                      abbreviation: "28",
                      country_id: "1219"
                  },
                  {
                      id: "4772",
                      name: "Gms'hane",
                      abbreviation: "29",
                      country_id: "1219"
                  },
                  {
                      id: "4773",
                      name: "Hakkari",
                      abbreviation: "30",
                      country_id: "1219"
                  },
                  {
                      id: "4774",
                      name: "Hatay",
                      abbreviation: "31",
                      country_id: "1219"
                  },
                  {
                      id: "4775",
                      name: "Igidir",
                      abbreviation: "76",
                      country_id: "1219"
                  },
                  {
                      id: "4776",
                      name: "Isparta",
                      abbreviation: "32",
                      country_id: "1219"
                  },
                  {
                      id: "4777",
                      name: "Icel",
                      abbreviation: "33",
                      country_id: "1219"
                  },
                  {
                      id: "4778",
                      name: "Istanbul",
                      abbreviation: "34",
                      country_id: "1219"
                  },
                  {
                      id: "4779",
                      name: "Izmir",
                      abbreviation: "35",
                      country_id: "1219"
                  },
                  {
                      id: "4780",
                      name: "Kahramanmaras",
                      abbreviation: "46",
                      country_id: "1219"
                  },
                  {
                      id: "4781",
                      name: "Karabk",
                      abbreviation: "78",
                      country_id: "1219"
                  },
                  {
                      id: "4782",
                      name: "Karaman",
                      abbreviation: "70",
                      country_id: "1219"
                  },
                  {
                      id: "4783",
                      name: "Kars",
                      abbreviation: "36",
                      country_id: "1219"
                  },
                  {
                      id: "4784",
                      name: "Kastamonu",
                      abbreviation: "37",
                      country_id: "1219"
                  },
                  {
                      id: "4785",
                      name: "Kayseri",
                      abbreviation: "38",
                      country_id: "1219"
                  },
                  {
                      id: "4786",
                      name: "Kirikkale",
                      abbreviation: "71",
                      country_id: "1219"
                  },
                  {
                      id: "4787",
                      name: "Kirklareli",
                      abbreviation: "39",
                      country_id: "1219"
                  },
                  {
                      id: "4788",
                      name: "Kirs'ehir",
                      abbreviation: "40",
                      country_id: "1219"
                  },
                  {
                      id: "4789",
                      name: "Kilis",
                      abbreviation: "79",
                      country_id: "1219"
                  },
                  {
                      id: "4790",
                      name: "Kocaeli",
                      abbreviation: "41",
                      country_id: "1219"
                  },
                  {
                      id: "4791",
                      name: "Konya",
                      abbreviation: "42",
                      country_id: "1219"
                  },
                  {
                      id: "4792",
                      name: "Ktahya",
                      abbreviation: "43",
                      country_id: "1219"
                  },
                  {
                      id: "4793",
                      name: "Malatya",
                      abbreviation: "44",
                      country_id: "1219"
                  },
                  {
                      id: "4794",
                      name: "Manisa",
                      abbreviation: "45",
                      country_id: "1219"
                  },
                  {
                      id: "4795",
                      name: "Mardin",
                      abbreviation: "47",
                      country_id: "1219"
                  },
                  {
                      id: "4796",
                      name: "Mugila",
                      abbreviation: "48",
                      country_id: "1219"
                  },
                  {
                      id: "4797",
                      name: "Mus",
                      abbreviation: "49",
                      country_id: "1219"
                  },
                  {
                      id: "4798",
                      name: "Nevs'ehir",
                      abbreviation: "50",
                      country_id: "1219"
                  },
                  {
                      id: "4799",
                      name: "Nigide",
                      abbreviation: "51",
                      country_id: "1219"
                  },
                  {
                      id: "4800",
                      name: "Ordu",
                      abbreviation: "52",
                      country_id: "1219"
                  },
                  {
                      id: "4801",
                      name: "Osmaniye",
                      abbreviation: "80",
                      country_id: "1219"
                  },
                  {
                      id: "4802",
                      name: "Rize",
                      abbreviation: "53",
                      country_id: "1219"
                  },
                  {
                      id: "4803",
                      name: "Sakarya",
                      abbreviation: "54",
                      country_id: "1219"
                  },
                  {
                      id: "4804",
                      name: "Samsun",
                      abbreviation: "55",
                      country_id: "1219"
                  },
                  {
                      id: "4805",
                      name: "Siirt",
                      abbreviation: "56",
                      country_id: "1219"
                  },
                  {
                      id: "4806",
                      name: "Sinop",
                      abbreviation: "57",
                      country_id: "1219"
                  },
                  {
                      id: "4807",
                      name: "Sivas",
                      abbreviation: "58",
                      country_id: "1219"
                  },
                  {
                      id: "4808",
                      name: "S'anliurfa",
                      abbreviation: "63",
                      country_id: "1219"
                  },
                  {
                      id: "4809",
                      name: "S'rnak",
                      abbreviation: "73",
                      country_id: "1219"
                  },
                  {
                      id: "4810",
                      name: "Tekirdag",
                      abbreviation: "59",
                      country_id: "1219"
                  },
                  {
                      id: "4811",
                      name: "Tokat",
                      abbreviation: "60",
                      country_id: "1219"
                  },
                  {
                      id: "4812",
                      name: "Trabzon",
                      abbreviation: "61",
                      country_id: "1219"
                  },
                  {
                      id: "4813",
                      name: "Tunceli",
                      abbreviation: "62",
                      country_id: "1219"
                  },
                  {
                      id: "4814",
                      name: "Us'ak",
                      abbreviation: "64",
                      country_id: "1219"
                  },
                  {
                      id: "4815",
                      name: "Van",
                      abbreviation: "65",
                      country_id: "1219"
                  },
                  {
                      id: "4816",
                      name: "Yalova",
                      abbreviation: "77",
                      country_id: "1219"
                  },
                  {
                      id: "4817",
                      name: "Yozgat",
                      abbreviation: "66",
                      country_id: "1219"
                  },
                  {
                      id: "4818",
                      name: "Zonguldak",
                      abbreviation: "67",
                      country_id: "1219"
                  },
                  {
                      id: "4819",
                      name: "Couva-Tabaquite-Talparo",
                      abbreviation: "CTT",
                      country_id: "1217"
                  },
                  {
                      id: "4820",
                      name: "Diego Martin",
                      abbreviation: "DMN",
                      country_id: "1217"
                  },
                  {
                      id: "4821",
                      name: "Eastern Tobago",
                      abbreviation: "ETO",
                      country_id: "1217"
                  },
                  {
                      id: "4822",
                      name: "Penal-Debe",
                      abbreviation: "PED",
                      country_id: "1217"
                  },
                  {
                      id: "4823",
                      name: "Princes Town",
                      abbreviation: "PRT",
                      country_id: "1217"
                  },
                  {
                      id: "4824",
                      name: "Rio Claro-Mayaro",
                      abbreviation: "RCM",
                      country_id: "1217"
                  },
                  {
                      id: "4825",
                      name: "Sangre Grande",
                      abbreviation: "SGE",
                      country_id: "1217"
                  },
                  {
                      id: "4826",
                      name: "San Juan-Laventille",
                      abbreviation: "SJL",
                      country_id: "1217"
                  },
                  {
                      id: "4827",
                      name: "Siparia",
                      abbreviation: "SIP",
                      country_id: "1217"
                  },
                  {
                      id: "4828",
                      name: "Tunapuna-Piarco",
                      abbreviation: "TUP",
                      country_id: "1217"
                  },
                  {
                      id: "4829",
                      name: "Western Tobago",
                      abbreviation: "WTO",
                      country_id: "1217"
                  },
                  {
                      id: "4830",
                      name: "Arima",
                      abbreviation: "ARI",
                      country_id: "1217"
                  },
                  {
                      id: "4831",
                      name: "Chaguanas",
                      abbreviation: "CHA",
                      country_id: "1217"
                  },
                  {
                      id: "4832",
                      name: "Point Fortin",
                      abbreviation: "PTF",
                      country_id: "1217"
                  },
                  {
                      id: "4833",
                      name: "Port of Spain",
                      abbreviation: "POS",
                      country_id: "1217"
                  },
                  {
                      id: "4834",
                      name: "San Fernando",
                      abbreviation: "SFO",
                      country_id: "1217"
                  },
                  {
                      id: "4835",
                      name: "Aileu",
                      abbreviation: "AL",
                      country_id: "1063"
                  },
                  {
                      id: "4836",
                      name: "Ainaro",
                      abbreviation: "AN",
                      country_id: "1063"
                  },
                  {
                      id: "4837",
                      name: "Bacucau",
                      abbreviation: "BA",
                      country_id: "1063"
                  },
                  {
                      id: "4838",
                      name: "Bobonaro",
                      abbreviation: "BO",
                      country_id: "1063"
                  },
                  {
                      id: "4839",
                      name: "Cova Lima",
                      abbreviation: "CO",
                      country_id: "1063"
                  },
                  {
                      id: "4840",
                      name: "Dili",
                      abbreviation: "DI",
                      country_id: "1063"
                  },
                  {
                      id: "4841",
                      name: "Ermera",
                      abbreviation: "ER",
                      country_id: "1063"
                  },
                  {
                      id: "4842",
                      name: "Laulem",
                      abbreviation: "LA",
                      country_id: "1063"
                  },
                  {
                      id: "4843",
                      name: "Liquica",
                      abbreviation: "LI",
                      country_id: "1063"
                  },
                  {
                      id: "4844",
                      name: "Manatuto",
                      abbreviation: "MT",
                      country_id: "1063"
                  },
                  {
                      id: "4845",
                      name: "Manafahi",
                      abbreviation: "MF",
                      country_id: "1063"
                  },
                  {
                      id: "4846",
                      name: "Oecussi",
                      abbreviation: "OE",
                      country_id: "1063"
                  },
                  {
                      id: "4847",
                      name: "Viqueque",
                      abbreviation: "VI",
                      country_id: "1063"
                  },
                  {
                      id: "4848",
                      name: "Changhua County",
                      abbreviation: "CHA",
                      country_id: "1208"
                  },
                  {
                      id: "4849",
                      name: "Chiayi County",
                      abbreviation: "CYQ",
                      country_id: "1208"
                  },
                  {
                      id: "4850",
                      name: "Hsinchu County",
                      abbreviation: "HSQ",
                      country_id: "1208"
                  },
                  {
                      id: "4851",
                      name: "Hualien County",
                      abbreviation: "HUA",
                      country_id: "1208"
                  },
                  {
                      id: "4852",
                      name: "Ilan County",
                      abbreviation: "ILA",
                      country_id: "1208"
                  },
                  {
                      id: "4853",
                      name: "Kaohsiung County",
                      abbreviation: "KHQ",
                      country_id: "1208"
                  },
                  {
                      id: "4854",
                      name: "Miaoli County",
                      abbreviation: "MIA",
                      country_id: "1208"
                  },
                  {
                      id: "4855",
                      name: "Nantou County",
                      abbreviation: "NAN",
                      country_id: "1208"
                  },
                  {
                      id: "4856",
                      name: "Penghu County",
                      abbreviation: "PEN",
                      country_id: "1208"
                  },
                  {
                      id: "4857",
                      name: "Pingtung County",
                      abbreviation: "PIF",
                      country_id: "1208"
                  },
                  {
                      id: "4858",
                      name: "Taichung County",
                      abbreviation: "TXQ",
                      country_id: "1208"
                  },
                  {
                      id: "4859",
                      name: "Tainan County",
                      abbreviation: "TNQ",
                      country_id: "1208"
                  },
                  {
                      id: "4860",
                      name: "Taipei County",
                      abbreviation: "TPQ",
                      country_id: "1208"
                  },
                  {
                      id: "4861",
                      name: "Taitung County",
                      abbreviation: "TTT",
                      country_id: "1208"
                  },
                  {
                      id: "4862",
                      name: "Taoyuan County",
                      abbreviation: "TAO",
                      country_id: "1208"
                  },
                  {
                      id: "4863",
                      name: "Yunlin County",
                      abbreviation: "YUN",
                      country_id: "1208"
                  },
                  {
                      id: "4864",
                      name: "Keelung City",
                      abbreviation: "KEE",
                      country_id: "1208"
                  },
                  {
                      id: "4865",
                      name: "Arusha",
                      abbreviation: "01",
                      country_id: "1210"
                  },
                  {
                      id: "4866",
                      name: "Dar-es-Salaam",
                      abbreviation: "02",
                      country_id: "1210"
                  },
                  {
                      id: "4867",
                      name: "Dodoma",
                      abbreviation: "03",
                      country_id: "1210"
                  },
                  {
                      id: "4868",
                      name: "Iringa",
                      abbreviation: "04",
                      country_id: "1210"
                  },
                  {
                      id: "4869",
                      name: "Kagera",
                      abbreviation: "05",
                      country_id: "1210"
                  },
                  {
                      id: "4870",
                      name: "Kaskazini Pemba",
                      abbreviation: "06",
                      country_id: "1210"
                  },
                  {
                      id: "4871",
                      name: "Kaskazini Unguja",
                      abbreviation: "07",
                      country_id: "1210"
                  },
                  {
                      id: "4872",
                      name: "Xigoma",
                      abbreviation: "08",
                      country_id: "1210"
                  },
                  {
                      id: "4873",
                      name: "Kilimanjaro",
                      abbreviation: "09",
                      country_id: "1210"
                  },
                  {
                      id: "4874",
                      name: "Rusini Pemba",
                      abbreviation: "10",
                      country_id: "1210"
                  },
                  {
                      id: "4875",
                      name: "Kusini Unguja",
                      abbreviation: "11",
                      country_id: "1210"
                  },
                  {
                      id: "4876",
                      name: "Lindi",
                      abbreviation: "12",
                      country_id: "1210"
                  },
                  {
                      id: "4877",
                      name: "Manyara",
                      abbreviation: "26",
                      country_id: "1210"
                  },
                  {
                      id: "4878",
                      name: "Mara",
                      abbreviation: "13",
                      country_id: "1210"
                  },
                  {
                      id: "4879",
                      name: "Mbeya",
                      abbreviation: "14",
                      country_id: "1210"
                  },
                  {
                      id: "4880",
                      name: "Mjini Magharibi",
                      abbreviation: "15",
                      country_id: "1210"
                  },
                  {
                      id: "4881",
                      name: "Morogoro",
                      abbreviation: "16",
                      country_id: "1210"
                  },
                  {
                      id: "4882",
                      name: "Mtwara",
                      abbreviation: "17",
                      country_id: "1210"
                  },
                  {
                      id: "4883",
                      name: "Pwani",
                      abbreviation: "19",
                      country_id: "1210"
                  },
                  {
                      id: "4884",
                      name: "Rukwa",
                      abbreviation: "20",
                      country_id: "1210"
                  },
                  {
                      id: "4885",
                      name: "Ruvuma",
                      abbreviation: "21",
                      country_id: "1210"
                  },
                  {
                      id: "4886",
                      name: "Shinyanga",
                      abbreviation: "22",
                      country_id: "1210"
                  },
                  {
                      id: "4887",
                      name: "Singida",
                      abbreviation: "23",
                      country_id: "1210"
                  },
                  {
                      id: "4888",
                      name: "Tabora",
                      abbreviation: "24",
                      country_id: "1210"
                  },
                  {
                      id: "4889",
                      name: "Tanga",
                      abbreviation: "25",
                      country_id: "1210"
                  },
                  {
                      id: "4890",
                      name: "Cherkas'ka Oblast'",
                      abbreviation: "71",
                      country_id: "1224"
                  },
                  {
                      id: "4891",
                      name: "Chernihivs'ka Oblast'",
                      abbreviation: "74",
                      country_id: "1224"
                  },
                  {
                      id: "4892",
                      name: "Chernivets'ka Oblast'",
                      abbreviation: "77",
                      country_id: "1224"
                  },
                  {
                      id: "4893",
                      name: "Dnipropetrovs'ka Oblast'",
                      abbreviation: "12",
                      country_id: "1224"
                  },
                  {
                      id: "4894",
                      name: "Donets'ka Oblast'",
                      abbreviation: "14",
                      country_id: "1224"
                  },
                  {
                      id: "4895",
                      name: "Ivano-Frankivs'ka Oblast'",
                      abbreviation: "26",
                      country_id: "1224"
                  },
                  {
                      id: "4896",
                      name: "Kharkivs'ka Oblast'",
                      abbreviation: "63",
                      country_id: "1224"
                  },
                  {
                      id: "4897",
                      name: "Khersons'ka Oblast'",
                      abbreviation: "65",
                      country_id: "1224"
                  },
                  {
                      id: "4898",
                      name: "Khmel'nyts'ka Oblast'",
                      abbreviation: "68",
                      country_id: "1224"
                  },
                  {
                      id: "4899",
                      name: "Kirovohrads'ka Oblast'",
                      abbreviation: "35",
                      country_id: "1224"
                  },
                  {
                      id: "4900",
                      name: "Kyivs'ka Oblast'",
                      abbreviation: "32",
                      country_id: "1224"
                  },
                  {
                      id: "4901",
                      name: "Luhans'ka Oblast'",
                      abbreviation: "09",
                      country_id: "1224"
                  },
                  {
                      id: "4902",
                      name: "L'vivs'ka Oblast'",
                      abbreviation: "46",
                      country_id: "1224"
                  },
                  {
                      id: "4903",
                      name: "Mykolaivs'ka Oblast'",
                      abbreviation: "48",
                      country_id: "1224"
                  },
                  {
                      id: "4904",
                      name: "Odes 'ka Oblast'",
                      abbreviation: "51",
                      country_id: "1224"
                  },
                  {
                      id: "4905",
                      name: "Poltavs'ka Oblast'",
                      abbreviation: "53",
                      country_id: "1224"
                  },
                  {
                      id: "4906",
                      name: "Rivnens'ka Oblast'",
                      abbreviation: "56",
                      country_id: "1224"
                  },
                  {
                      id: "4907",
                      name: "Sums 'ka Oblast'",
                      abbreviation: "59",
                      country_id: "1224"
                  },
                  {
                      id: "4908",
                      name: "Ternopil's'ka Oblast'",
                      abbreviation: "61",
                      country_id: "1224"
                  },
                  {
                      id: "4909",
                      name: "Vinnyts'ka Oblast'",
                      abbreviation: "05",
                      country_id: "1224"
                  },
                  {
                      id: "4910",
                      name: "Volyos'ka Oblast'",
                      abbreviation: "07",
                      country_id: "1224"
                  },
                  {
                      id: "4911",
                      name: "Zakarpats'ka Oblast'",
                      abbreviation: "21",
                      country_id: "1224"
                  },
                  {
                      id: "4912",
                      name: "Zaporiz'ka Oblast'",
                      abbreviation: "23",
                      country_id: "1224"
                  },
                  {
                      id: "4913",
                      name: "Zhytomyrs'ka Oblast'",
                      abbreviation: "18",
                      country_id: "1224"
                  },
                  {
                      id: "4914",
                      name: "Respublika Krym",
                      abbreviation: "43",
                      country_id: "1224"
                  },
                  {
                      id: "4915",
                      name: "Kyiv",
                      abbreviation: "30",
                      country_id: "1224"
                  },
                  {
                      id: "4916",
                      name: "Sevastopol",
                      abbreviation: "40",
                      country_id: "1224"
                  },
                  {
                      id: "4917",
                      name: "Adjumani",
                      abbreviation: "301",
                      country_id: "1223"
                  },
                  {
                      id: "4918",
                      name: "Apac",
                      abbreviation: "302",
                      country_id: "1223"
                  },
                  {
                      id: "4919",
                      name: "Arua",
                      abbreviation: "303",
                      country_id: "1223"
                  },
                  {
                      id: "4920",
                      name: "Bugiri",
                      abbreviation: "201",
                      country_id: "1223"
                  },
                  {
                      id: "4921",
                      name: "Bundibugyo",
                      abbreviation: "401",
                      country_id: "1223"
                  },
                  {
                      id: "4922",
                      name: "Bushenyi",
                      abbreviation: "402",
                      country_id: "1223"
                  },
                  {
                      id: "4923",
                      name: "Busia",
                      abbreviation: "202",
                      country_id: "1223"
                  },
                  {
                      id: "4924",
                      name: "Gulu",
                      abbreviation: "304",
                      country_id: "1223"
                  },
                  {
                      id: "4925",
                      name: "Hoima",
                      abbreviation: "403",
                      country_id: "1223"
                  },
                  {
                      id: "4926",
                      name: "Iganga",
                      abbreviation: "203",
                      country_id: "1223"
                  },
                  {
                      id: "4927",
                      name: "Jinja",
                      abbreviation: "204",
                      country_id: "1223"
                  },
                  {
                      id: "4928",
                      name: "Kabale",
                      abbreviation: "404",
                      country_id: "1223"
                  },
                  {
                      id: "4929",
                      name: "Kabarole",
                      abbreviation: "405",
                      country_id: "1223"
                  },
                  {
                      id: "4930",
                      name: "Kaberamaido",
                      abbreviation: "213",
                      country_id: "1223"
                  },
                  {
                      id: "4931",
                      name: "Kalangala",
                      abbreviation: "101",
                      country_id: "1223"
                  },
                  {
                      id: "4932",
                      name: "Kampala",
                      abbreviation: "102",
                      country_id: "1223"
                  },
                  {
                      id: "4933",
                      name: "Kamuli",
                      abbreviation: "205",
                      country_id: "1223"
                  },
                  {
                      id: "4934",
                      name: "Kamwenge",
                      abbreviation: "413",
                      country_id: "1223"
                  },
                  {
                      id: "4935",
                      name: "Kanungu",
                      abbreviation: "414",
                      country_id: "1223"
                  },
                  {
                      id: "4936",
                      name: "Kapchorwa",
                      abbreviation: "206",
                      country_id: "1223"
                  },
                  {
                      id: "4937",
                      name: "Kasese",
                      abbreviation: "406",
                      country_id: "1223"
                  },
                  {
                      id: "4938",
                      name: "Katakwi",
                      abbreviation: "207",
                      country_id: "1223"
                  },
                  {
                      id: "4939",
                      name: "Kayunga",
                      abbreviation: "112",
                      country_id: "1223"
                  },
                  {
                      id: "4940",
                      name: "Kibaale",
                      abbreviation: "407",
                      country_id: "1223"
                  },
                  {
                      id: "4941",
                      name: "Kiboga",
                      abbreviation: "103",
                      country_id: "1223"
                  },
                  {
                      id: "4942",
                      name: "Kisoro",
                      abbreviation: "408",
                      country_id: "1223"
                  },
                  {
                      id: "4943",
                      name: "Kitgum",
                      abbreviation: "305",
                      country_id: "1223"
                  },
                  {
                      id: "4944",
                      name: "Kotido",
                      abbreviation: "306",
                      country_id: "1223"
                  },
                  {
                      id: "4945",
                      name: "Kumi",
                      abbreviation: "208",
                      country_id: "1223"
                  },
                  {
                      id: "4946",
                      name: "Kyenjojo",
                      abbreviation: "415",
                      country_id: "1223"
                  },
                  {
                      id: "4947",
                      name: "Lira",
                      abbreviation: "307",
                      country_id: "1223"
                  },
                  {
                      id: "4948",
                      name: "Luwero",
                      abbreviation: "104",
                      country_id: "1223"
                  },
                  {
                      id: "4949",
                      name: "Masaka",
                      abbreviation: "105",
                      country_id: "1223"
                  },
                  {
                      id: "4950",
                      name: "Masindi",
                      abbreviation: "409",
                      country_id: "1223"
                  },
                  {
                      id: "4951",
                      name: "Mayuge",
                      abbreviation: "214",
                      country_id: "1223"
                  },
                  {
                      id: "4952",
                      name: "Mbale",
                      abbreviation: "209",
                      country_id: "1223"
                  },
                  {
                      id: "4953",
                      name: "Mbarara",
                      abbreviation: "410",
                      country_id: "1223"
                  },
                  {
                      id: "4954",
                      name: "Moroto",
                      abbreviation: "308",
                      country_id: "1223"
                  },
                  {
                      id: "4955",
                      name: "Moyo",
                      abbreviation: "309",
                      country_id: "1223"
                  },
                  {
                      id: "4956",
                      name: "Mpigi",
                      abbreviation: "106",
                      country_id: "1223"
                  },
                  {
                      id: "4957",
                      name: "Mubende",
                      abbreviation: "107",
                      country_id: "1223"
                  },
                  {
                      id: "4958",
                      name: "Mukono",
                      abbreviation: "108",
                      country_id: "1223"
                  },
                  {
                      id: "4959",
                      name: "Nakapiripirit",
                      abbreviation: "311",
                      country_id: "1223"
                  },
                  {
                      id: "4960",
                      name: "Nakasongola",
                      abbreviation: "109",
                      country_id: "1223"
                  },
                  {
                      id: "4961",
                      name: "Nebbi",
                      abbreviation: "310",
                      country_id: "1223"
                  },
                  {
                      id: "4962",
                      name: "Ntungamo",
                      abbreviation: "411",
                      country_id: "1223"
                  },
                  {
                      id: "4963",
                      name: "Pader",
                      abbreviation: "312",
                      country_id: "1223"
                  },
                  {
                      id: "4964",
                      name: "Pallisa",
                      abbreviation: "210",
                      country_id: "1223"
                  },
                  {
                      id: "4965",
                      name: "Rakai",
                      abbreviation: "110",
                      country_id: "1223"
                  },
                  {
                      id: "4966",
                      name: "Rukungiri",
                      abbreviation: "412",
                      country_id: "1223"
                  },
                  {
                      id: "4967",
                      name: "Sembabule",
                      abbreviation: "111",
                      country_id: "1223"
                  },
                  {
                      id: "4968",
                      name: "Sironko",
                      abbreviation: "215",
                      country_id: "1223"
                  },
                  {
                      id: "4969",
                      name: "Soroti",
                      abbreviation: "211",
                      country_id: "1223"
                  },
                  {
                      id: "4970",
                      name: "Tororo",
                      abbreviation: "212",
                      country_id: "1223"
                  },
                  {
                      id: "4971",
                      name: "Wakiso",
                      abbreviation: "113",
                      country_id: "1223"
                  },
                  {
                      id: "4972",
                      name: "Yumbe",
                      abbreviation: "313",
                      country_id: "1223"
                  },
                  {
                      id: "4973",
                      name: "Baker Island",
                      abbreviation: "81",
                      country_id: "1227"
                  },
                  {
                      id: "4974",
                      name: "Howland Island",
                      abbreviation: "84",
                      country_id: "1227"
                  },
                  {
                      id: "4975",
                      name: "Jarvis Island",
                      abbreviation: "86",
                      country_id: "1227"
                  },
                  {
                      id: "4976",
                      name: "Johnston Atoll",
                      abbreviation: "67",
                      country_id: "1227"
                  },
                  {
                      id: "4977",
                      name: "Kingman Reef",
                      abbreviation: "89",
                      country_id: "1227"
                  },
                  {
                      id: "4978",
                      name: "Midway Islands",
                      abbreviation: "71",
                      country_id: "1227"
                  },
                  {
                      id: "4979",
                      name: "Navassa Island",
                      abbreviation: "76",
                      country_id: "1227"
                  },
                  {
                      id: "4980",
                      name: "Palmyra Atoll",
                      abbreviation: "95",
                      country_id: "1227"
                  },
                  {
                      id: "4981",
                      name: "Wake Island",
                      abbreviation: "79",
                      country_id: "1227"
                  },
                  {
                      id: "4982",
                      name: "Artigsa",
                      abbreviation: "AR",
                      country_id: "1229"
                  },
                  {
                      id: "4983",
                      name: "Canelones",
                      abbreviation: "CA",
                      country_id: "1229"
                  },
                  {
                      id: "4984",
                      name: "Cerro Largo",
                      abbreviation: "CL",
                      country_id: "1229"
                  },
                  {
                      id: "4985",
                      name: "Colonia",
                      abbreviation: "CO",
                      country_id: "1229"
                  },
                  {
                      id: "4986",
                      name: "Durazno",
                      abbreviation: "DU",
                      country_id: "1229"
                  },
                  {
                      id: "4987",
                      name: "Flores",
                      abbreviation: "FS",
                      country_id: "1229"
                  },
                  {
                      id: "4988",
                      name: "Lavalleja",
                      abbreviation: "LA",
                      country_id: "1229"
                  },
                  {
                      id: "4989",
                      name: "Maldonado",
                      abbreviation: "MA",
                      country_id: "1229"
                  },
                  {
                      id: "4990",
                      name: "Montevideo",
                      abbreviation: "MO",
                      country_id: "1229"
                  },
                  {
                      id: "4991",
                      name: "Paysandu",
                      abbreviation: "PA",
                      country_id: "1229"
                  },
                  {
                      id: "4992",
                      name: "Rivera",
                      abbreviation: "RV",
                      country_id: "1229"
                  },
                  {
                      id: "4993",
                      name: "Rocha",
                      abbreviation: "RO",
                      country_id: "1229"
                  },
                  {
                      id: "4994",
                      name: "Salto",
                      abbreviation: "SA",
                      country_id: "1229"
                  },
                  {
                      id: "4995",
                      name: "Soriano",
                      abbreviation: "SO",
                      country_id: "1229"
                  },
                  {
                      id: "4996",
                      name: "Tacuarembo",
                      abbreviation: "TA",
                      country_id: "1229"
                  },
                  {
                      id: "4997",
                      name: "Treinta y Tres",
                      abbreviation: "TT",
                      country_id: "1229"
                  },
                  {
                      id: "4998",
                      name: "Toshkent (city)",
                      abbreviation: "TK",
                      country_id: "1230"
                  },
                  {
                      id: "4999",
                      name: "Qoraqalpogiston Respublikasi",
                      abbreviation: "QR",
                      country_id: "1230"
                  },
                  {
                      id: "5000",
                      name: "Andijon",
                      abbreviation: "AN",
                      country_id: "1230"
                  },
                  {
                      id: "5001",
                      name: "Buxoro",
                      abbreviation: "BU",
                      country_id: "1230"
                  },
                  {
                      id: "5002",
                      name: "Farg'ona",
                      abbreviation: "FA",
                      country_id: "1230"
                  },
                  {
                      id: "5003",
                      name: "Jizzax",
                      abbreviation: "JI",
                      country_id: "1230"
                  },
                  {
                      id: "5004",
                      name: "Khorazm",
                      abbreviation: "KH",
                      country_id: "1230"
                  },
                  {
                      id: "5005",
                      name: "Namangan",
                      abbreviation: "NG",
                      country_id: "1230"
                  },
                  {
                      id: "5006",
                      name: "Navoiy",
                      abbreviation: "NW",
                      country_id: "1230"
                  },
                  {
                      id: "5007",
                      name: "Qashqadaryo",
                      abbreviation: "QA",
                      country_id: "1230"
                  },
                  {
                      id: "5008",
                      name: "Samarqand",
                      abbreviation: "SA",
                      country_id: "1230"
                  },
                  {
                      id: "5009",
                      name: "Sirdaryo",
                      abbreviation: "SI",
                      country_id: "1230"
                  },
                  {
                      id: "5010",
                      name: "Surxondaryo",
                      abbreviation: "SU",
                      country_id: "1230"
                  },
                  {
                      id: "5011",
                      name: "Toshkent",
                      abbreviation: "TO",
                      country_id: "1230"
                  },
                  {
                      id: "5012",
                      name: "Xorazm",
                      abbreviation: "XO",
                      country_id: "1230"
                  },
                  {
                      id: "5013",
                      name: "Distrito Federal",
                      abbreviation: "A",
                      country_id: "1232"
                  },
                  {
                      id: "5014",
                      name: "Anzoategui",
                      abbreviation: "B",
                      country_id: "1232"
                  },
                  {
                      id: "5015",
                      name: "Apure",
                      abbreviation: "C",
                      country_id: "1232"
                  },
                  {
                      id: "5016",
                      name: "Aragua",
                      abbreviation: "D",
                      country_id: "1232"
                  },
                  {
                      id: "5017",
                      name: "Barinas",
                      abbreviation: "E",
                      country_id: "1232"
                  },
                  {
                      id: "5018",
                      name: "Carabobo",
                      abbreviation: "G",
                      country_id: "1232"
                  },
                  {
                      id: "5019",
                      name: "Cojedes",
                      abbreviation: "H",
                      country_id: "1232"
                  },
                  {
                      id: "5020",
                      name: "Falcon",
                      abbreviation: "I",
                      country_id: "1232"
                  },
                  {
                      id: "5021",
                      name: "Guarico",
                      abbreviation: "J",
                      country_id: "1232"
                  },
                  {
                      id: "5022",
                      name: "Lara",
                      abbreviation: "K",
                      country_id: "1232"
                  },
                  {
                      id: "5023",
                      name: "Merida",
                      abbreviation: "L",
                      country_id: "1232"
                  },
                  {
                      id: "5024",
                      name: "Miranda",
                      abbreviation: "M",
                      country_id: "1232"
                  },
                  {
                      id: "5025",
                      name: "Monagas",
                      abbreviation: "N",
                      country_id: "1232"
                  },
                  {
                      id: "5026",
                      name: "Nueva Esparta",
                      abbreviation: "O",
                      country_id: "1232"
                  },
                  {
                      id: "5027",
                      name: "Portuguesa",
                      abbreviation: "P",
                      country_id: "1232"
                  },
                  {
                      id: "5028",
                      name: "Tachira",
                      abbreviation: "S",
                      country_id: "1232"
                  },
                  {
                      id: "5029",
                      name: "Trujillo",
                      abbreviation: "T",
                      country_id: "1232"
                  },
                  {
                      id: "5030",
                      name: "Vargas",
                      abbreviation: "X",
                      country_id: "1232"
                  },
                  {
                      id: "5031",
                      name: "Yaracuy",
                      abbreviation: "U",
                      country_id: "1232"
                  },
                  {
                      id: "5032",
                      name: "Zulia",
                      abbreviation: "V",
                      country_id: "1232"
                  },
                  {
                      id: "5033",
                      name: "Delta Amacuro",
                      abbreviation: "Y",
                      country_id: "1232"
                  },
                  {
                      id: "5034",
                      name: "Dependencias Federales",
                      abbreviation: "W",
                      country_id: "1232"
                  },
                  {
                      id: "5035",
                      name: "An Giang",
                      abbreviation: "44",
                      country_id: "1233"
                  },
                  {
                      id: "5036",
                      name: "Ba Ria - Vung Tau",
                      abbreviation: "43",
                      country_id: "1233"
                  },
                  {
                      id: "5037",
                      name: "Bac Can",
                      abbreviation: "53",
                      country_id: "1233"
                  },
                  {
                      id: "5038",
                      name: "Bac Giang",
                      abbreviation: "54",
                      country_id: "1233"
                  },
                  {
                      id: "5039",
                      name: "Bac Lieu",
                      abbreviation: "55",
                      country_id: "1233"
                  },
                  {
                      id: "5040",
                      name: "Bac Ninh",
                      abbreviation: "56",
                      country_id: "1233"
                  },
                  {
                      id: "5041",
                      name: "Ben Tre",
                      abbreviation: "50",
                      country_id: "1233"
                  },
                  {
                      id: "5042",
                      name: "Binh Dinh",
                      abbreviation: "31",
                      country_id: "1233"
                  },
                  {
                      id: "5043",
                      name: "Binh Duong",
                      abbreviation: "57",
                      country_id: "1233"
                  },
                  {
                      id: "5044",
                      name: "Binh Phuoc",
                      abbreviation: "58",
                      country_id: "1233"
                  },
                  {
                      id: "5045",
                      name: "Binh Thuan",
                      abbreviation: "40",
                      country_id: "1233"
                  },
                  {
                      id: "5046",
                      name: "Ca Mau",
                      abbreviation: "59",
                      country_id: "1233"
                  },
                  {
                      id: "5047",
                      name: "Can Tho",
                      abbreviation: "48",
                      country_id: "1233"
                  },
                  {
                      id: "5048",
                      name: "Cao Bang",
                      abbreviation: "04",
                      country_id: "1233"
                  },
                  {
                      id: "5049",
                      name: "Da Nang, thanh pho",
                      abbreviation: "60",
                      country_id: "1233"
                  },
                  {
                      id: "5050",
                      name: "Dong Nai",
                      abbreviation: "39",
                      country_id: "1233"
                  },
                  {
                      id: "5051",
                      name: "Dong Thap",
                      abbreviation: "45",
                      country_id: "1233"
                  },
                  {
                      id: "5052",
                      name: "Gia Lai",
                      abbreviation: "30",
                      country_id: "1233"
                  },
                  {
                      id: "5053",
                      name: "Ha Giang",
                      abbreviation: "03",
                      country_id: "1233"
                  },
                  {
                      id: "5054",
                      name: "Ha Nam",
                      abbreviation: "63",
                      country_id: "1233"
                  },
                  {
                      id: "5055",
                      name: "Ha Noi, thu do",
                      abbreviation: "64",
                      country_id: "1233"
                  },
                  {
                      id: "5056",
                      name: "Ha Tay",
                      abbreviation: "15",
                      country_id: "1233"
                  },
                  {
                      id: "5057",
                      name: "Ha Tinh",
                      abbreviation: "23",
                      country_id: "1233"
                  },
                  {
                      id: "5058",
                      name: "Hai Duong",
                      abbreviation: "61",
                      country_id: "1233"
                  },
                  {
                      id: "5059",
                      name: "Hai Phong, thanh pho",
                      abbreviation: "62",
                      country_id: "1233"
                  },
                  {
                      id: "5060",
                      name: "Hoa Binh",
                      abbreviation: "14",
                      country_id: "1233"
                  },
                  {
                      id: "5061",
                      name: "Ho Chi Minh, thanh pho [Sai Gon]",
                      abbreviation: "65",
                      country_id: "1233"
                  },
                  {
                      id: "5062",
                      name: "Hung Yen",
                      abbreviation: "66",
                      country_id: "1233"
                  },
                  {
                      id: "5063",
                      name: "Khanh Hoa",
                      abbreviation: "34",
                      country_id: "1233"
                  },
                  {
                      id: "5064",
                      name: "Kien Giang",
                      abbreviation: "47",
                      country_id: "1233"
                  },
                  {
                      id: "5065",
                      name: "Kon Tum",
                      abbreviation: "28",
                      country_id: "1233"
                  },
                  {
                      id: "5066",
                      name: "Lai Chau",
                      abbreviation: "01",
                      country_id: "1233"
                  },
                  {
                      id: "5067",
                      name: "Lam Dong",
                      abbreviation: "35",
                      country_id: "1233"
                  },
                  {
                      id: "5068",
                      name: "Lang Son",
                      abbreviation: "09",
                      country_id: "1233"
                  },
                  {
                      id: "5069",
                      name: "Lao Cai",
                      abbreviation: "02",
                      country_id: "1233"
                  },
                  {
                      id: "5070",
                      name: "Long An",
                      abbreviation: "41",
                      country_id: "1233"
                  },
                  {
                      id: "5071",
                      name: "Nam Dinh",
                      abbreviation: "67",
                      country_id: "1233"
                  },
                  {
                      id: "5072",
                      name: "Nghe An",
                      abbreviation: "22",
                      country_id: "1233"
                  },
                  {
                      id: "5073",
                      name: "Ninh Binh",
                      abbreviation: "18",
                      country_id: "1233"
                  },
                  {
                      id: "5074",
                      name: "Ninh Thuan",
                      abbreviation: "36",
                      country_id: "1233"
                  },
                  {
                      id: "5075",
                      name: "Phu Tho",
                      abbreviation: "68",
                      country_id: "1233"
                  },
                  {
                      id: "5076",
                      name: "Phu Yen",
                      abbreviation: "32",
                      country_id: "1233"
                  },
                  {
                      id: "5077",
                      name: "Quang Binh",
                      abbreviation: "24",
                      country_id: "1233"
                  },
                  {
                      id: "5078",
                      name: "Quang Nam",
                      abbreviation: "27",
                      country_id: "1233"
                  },
                  {
                      id: "5079",
                      name: "Quang Ngai",
                      abbreviation: "29",
                      country_id: "1233"
                  },
                  {
                      id: "5080",
                      name: "Quang Ninh",
                      abbreviation: "13",
                      country_id: "1233"
                  },
                  {
                      id: "5081",
                      name: "Quang Tri",
                      abbreviation: "25",
                      country_id: "1233"
                  },
                  {
                      id: "5082",
                      name: "Soc Trang",
                      abbreviation: "52",
                      country_id: "1233"
                  },
                  {
                      id: "5083",
                      name: "Son La",
                      abbreviation: "05",
                      country_id: "1233"
                  },
                  {
                      id: "5084",
                      name: "Tay Ninh",
                      abbreviation: "37",
                      country_id: "1233"
                  },
                  {
                      id: "5085",
                      name: "Thai Binh",
                      abbreviation: "20",
                      country_id: "1233"
                  },
                  {
                      id: "5086",
                      name: "Thai Nguyen",
                      abbreviation: "69",
                      country_id: "1233"
                  },
                  {
                      id: "5087",
                      name: "Thanh Hoa",
                      abbreviation: "21",
                      country_id: "1233"
                  },
                  {
                      id: "5088",
                      name: "Thua Thien-Hue",
                      abbreviation: "26",
                      country_id: "1233"
                  },
                  {
                      id: "5089",
                      name: "Tien Giang",
                      abbreviation: "46",
                      country_id: "1233"
                  },
                  {
                      id: "5090",
                      name: "Tra Vinh",
                      abbreviation: "51",
                      country_id: "1233"
                  },
                  {
                      id: "5091",
                      name: "Tuyen Quang",
                      abbreviation: "07",
                      country_id: "1233"
                  },
                  {
                      id: "5092",
                      name: "Vinh Long",
                      abbreviation: "49",
                      country_id: "1233"
                  },
                  {
                      id: "5093",
                      name: "Vinh Phuc",
                      abbreviation: "70",
                      country_id: "1233"
                  },
                  {
                      id: "5094",
                      name: "Yen Bai",
                      abbreviation: "06",
                      country_id: "1233"
                  },
                  {
                      id: "5095",
                      name: "Malampa",
                      abbreviation: "MAP",
                      country_id: "1231"
                  },
                  {
                      id: "5096",
                      name: "Penama",
                      abbreviation: "PAM",
                      country_id: "1231"
                  },
                  {
                      id: "5097",
                      name: "Sanma",
                      abbreviation: "SAM",
                      country_id: "1231"
                  },
                  {
                      id: "5098",
                      name: "Shefa",
                      abbreviation: "SEE",
                      country_id: "1231"
                  },
                  {
                      id: "5099",
                      name: "Tafea",
                      abbreviation: "TAE",
                      country_id: "1231"
                  },
                  {
                      id: "5100",
                      name: "Torba",
                      abbreviation: "TOB",
                      country_id: "1231"
                  },
                  {
                      id: "5101",
                      name: "A'ana",
                      abbreviation: "AA",
                      country_id: "1185"
                  },
                  {
                      id: "5102",
                      name: "Aiga-i-le-Tai",
                      abbreviation: "AL",
                      country_id: "1185"
                  },
                  {
                      id: "5103",
                      name: "Atua",
                      abbreviation: "AT",
                      country_id: "1185"
                  },
                  {
                      id: "5104",
                      name: "Fa'aaaleleaga",
                      abbreviation: "FA",
                      country_id: "1185"
                  },
                  {
                      id: "5105",
                      name: "Gaga'emauga",
                      abbreviation: "GE",
                      country_id: "1185"
                  },
                  {
                      id: "5106",
                      name: "Gagaifomauga",
                      abbreviation: "GI",
                      country_id: "1185"
                  },
                  {
                      id: "5107",
                      name: "Palauli",
                      abbreviation: "PA",
                      country_id: "1185"
                  },
                  {
                      id: "5108",
                      name: "Satupa'itea",
                      abbreviation: "SA",
                      country_id: "1185"
                  },
                  {
                      id: "5109",
                      name: "Tuamasaga",
                      abbreviation: "TU",
                      country_id: "1185"
                  },
                  {
                      id: "5110",
                      name: "Va'a-o-Fonoti",
                      abbreviation: "VF",
                      country_id: "1185"
                  },
                  {
                      id: "5111",
                      name: "Vaisigano",
                      abbreviation: "VS",
                      country_id: "1185"
                  },
                  {
                      id: "5112",
                      name: "Crna Gora",
                      abbreviation: "CG",
                      country_id: "1243"
                  },
                  {
                      id: "5113",
                      name: "Srbija",
                      abbreviation: "SR",
                      country_id: "1242"
                  },
                  {
                      id: "5114",
                      name: "Kosovo-Metohija",
                      abbreviation: "KM",
                      country_id: "1242"
                  },
                  {
                      id: "5115",
                      name: "Vojvodina",
                      abbreviation: "VO",
                      country_id: "1242"
                  },
                  {
                      id: "5116",
                      name: "Abyan",
                      abbreviation: "AB",
                      country_id: "1237"
                  },
                  {
                      id: "5117",
                      name: "Adan",
                      abbreviation: "AD",
                      country_id: "1237"
                  },
                  {
                      id: "5118",
                      name: "Ad Dali",
                      abbreviation: "DA",
                      country_id: "1237"
                  },
                  {
                      id: "5119",
                      name: "Al Bayda'",
                      abbreviation: "BA",
                      country_id: "1237"
                  },
                  {
                      id: "5120",
                      name: "Al Hudaydah",
                      abbreviation: "MU",
                      country_id: "1237"
                  },
                  {
                      id: "5121",
                      name: "Al Mahrah",
                      abbreviation: "MR",
                      country_id: "1237"
                  },
                  {
                      id: "5122",
                      name: "Al Mahwit",
                      abbreviation: "MW",
                      country_id: "1237"
                  },
                  {
                      id: "5123",
                      name: "Amran",
                      abbreviation: "AM",
                      country_id: "1237"
                  },
                  {
                      id: "5124",
                      name: "Dhamar",
                      abbreviation: "DH",
                      country_id: "1237"
                  },
                  {
                      id: "5125",
                      name: "Hadramawt",
                      abbreviation: "HD",
                      country_id: "1237"
                  },
                  {
                      id: "5126",
                      name: "Hajjah",
                      abbreviation: "HJ",
                      country_id: "1237"
                  },
                  {
                      id: "5127",
                      name: "Ibb",
                      abbreviation: "IB",
                      country_id: "1237"
                  },
                  {
                      id: "5128",
                      name: "Lahij",
                      abbreviation: "LA",
                      country_id: "1237"
                  },
                  {
                      id: "5129",
                      name: "Ma'rib",
                      abbreviation: "MA",
                      country_id: "1237"
                  },
                  {
                      id: "5130",
                      name: "Sa'dah",
                      abbreviation: "SD",
                      country_id: "1237"
                  },
                  {
                      id: "5131",
                      name: "San'a'",
                      abbreviation: "SN",
                      country_id: "1237"
                  },
                  {
                      id: "5132",
                      name: "Shabwah",
                      abbreviation: "SH",
                      country_id: "1237"
                  },
                  {
                      id: "5133",
                      name: "Ta'izz",
                      abbreviation: "TA",
                      country_id: "1237"
                  },
                  {
                      id: "5134",
                      name: "Eastern Cape",
                      abbreviation: "EC",
                      country_id: "1196"
                  },
                  {
                      id: "5135",
                      name: "Free State",
                      abbreviation: "FS",
                      country_id: "1196"
                  },
                  {
                      id: "5136",
                      name: "Gauteng",
                      abbreviation: "GT",
                      country_id: "1196"
                  },
                  {
                      id: "5137",
                      name: "Kwazulu-Natal",
                      abbreviation: "NL",
                      country_id: "1196"
                  },
                  {
                      id: "5138",
                      name: "Mpumalanga",
                      abbreviation: "MP",
                      country_id: "1196"
                  },
                  {
                      id: "5139",
                      name: "Northern Cape",
                      abbreviation: "NC",
                      country_id: "1196"
                  },
                  {
                      id: "5140",
                      name: "Limpopo",
                      abbreviation: "NP",
                      country_id: "1196"
                  },
                  {
                      id: "5141",
                      name: "Western Cape",
                      abbreviation: "WC",
                      country_id: "1196"
                  },
                  {
                      id: "5142",
                      name: "Copperbelt",
                      abbreviation: "08",
                      country_id: "1239"
                  },
                  {
                      id: "5143",
                      name: "Luapula",
                      abbreviation: "04",
                      country_id: "1239"
                  },
                  {
                      id: "5144",
                      name: "Lusaka",
                      abbreviation: "09",
                      country_id: "1239"
                  },
                  {
                      id: "5145",
                      name: "North-Western",
                      abbreviation: "06",
                      country_id: "1239"
                  },
                  {
                      id: "5146",
                      name: "Bulawayo",
                      abbreviation: "BU",
                      country_id: "1240"
                  },
                  {
                      id: "5147",
                      name: "Harare",
                      abbreviation: "HA",
                      country_id: "1240"
                  },
                  {
                      id: "5148",
                      name: "Manicaland",
                      abbreviation: "MA",
                      country_id: "1240"
                  },
                  {
                      id: "5149",
                      name: "Mashonaland Central",
                      abbreviation: "MC",
                      country_id: "1240"
                  },
                  {
                      id: "5150",
                      name: "Mashonaland East",
                      abbreviation: "ME",
                      country_id: "1240"
                  },
                  {
                      id: "5151",
                      name: "Mashonaland West",
                      abbreviation: "MW",
                      country_id: "1240"
                  },
                  {
                      id: "5152",
                      name: "Masvingo",
                      abbreviation: "MV",
                      country_id: "1240"
                  },
                  {
                      id: "5153",
                      name: "Matabeleland North",
                      abbreviation: "MN",
                      country_id: "1240"
                  },
                  {
                      id: "5154",
                      name: "Matabeleland South",
                      abbreviation: "MS",
                      country_id: "1240"
                  },
                  {
                      id: "5155",
                      name: "Midlands",
                      abbreviation: "MI",
                      country_id: "1240"
                  },
                  {
                      id: "5156",
                      name: "South Karelia",
                      abbreviation: "SK",
                      country_id: "1075"
                  },
                  {
                      id: "5157",
                      name: "South Ostrobothnia",
                      abbreviation: "SO",
                      country_id: "1075"
                  },
                  {
                      id: "5158",
                      name: "Etelä-Savo",
                      abbreviation: "ES",
                      country_id: "1075"
                  },
                  {
                      id: "5159",
                      name: "Häme",
                      abbreviation: "HH",
                      country_id: "1075"
                  },
                  {
                      id: "5160",
                      name: "Itä-Uusimaa",
                      abbreviation: "IU",
                      country_id: "1075"
                  },
                  {
                      id: "5161",
                      name: "Kainuu",
                      abbreviation: "KA",
                      country_id: "1075"
                  },
                  {
                      id: "5162",
                      name: "Central Ostrobothnia",
                      abbreviation: "CO",
                      country_id: "1075"
                  },
                  {
                      id: "5163",
                      name: "Central Finland",
                      abbreviation: "CF",
                      country_id: "1075"
                  },
                  {
                      id: "5164",
                      name: "Kymenlaakso",
                      abbreviation: "KY",
                      country_id: "1075"
                  },
                  {
                      id: "5165",
                      name: "Lapland",
                      abbreviation: "LA",
                      country_id: "1075"
                  },
                  {
                      id: "5166",
                      name: "Tampere Region",
                      abbreviation: "TR",
                      country_id: "1075"
                  },
                  {
                      id: "5167",
                      name: "Ostrobothnia",
                      abbreviation: "OB",
                      country_id: "1075"
                  },
                  {
                      id: "5168",
                      name: "North Karelia",
                      abbreviation: "NK",
                      country_id: "1075"
                  },
                  {
                      id: "5169",
                      name: "Northern Ostrobothnia",
                      abbreviation: "NO",
                      country_id: "1075"
                  },
                  {
                      id: "5170",
                      name: "Northern Savo",
                      abbreviation: "NS",
                      country_id: "1075"
                  },
                  {
                      id: "5171",
                      name: "Päijät-Häme",
                      abbreviation: "PH",
                      country_id: "1075"
                  },
                  {
                      id: "5172",
                      name: "Satakunta",
                      abbreviation: "SK",
                      country_id: "1075"
                  },
                  {
                      id: "5173",
                      name: "Uusimaa",
                      abbreviation: "UM",
                      country_id: "1075"
                  },
                  {
                      id: "5174",
                      name: "South-West Finland",
                      abbreviation: "SW",
                      country_id: "1075"
                  },
                  {
                      id: "5175",
                      name: "Åland",
                      abbreviation: "AL",
                      country_id: "1075"
                  },
                  {
                      id: "5176",
                      name: "Limburg",
                      abbreviation: "LI",
                      country_id: "1152"
                  },
                  {
                      id: "5177",
                      name: "Central and Western",
                      abbreviation: "CW",
                      country_id: "1098"
                  },
                  {
                      id: "5178",
                      name: "Eastern",
                      abbreviation: "EA",
                      country_id: "1098"
                  },
                  {
                      id: "5179",
                      name: "Southern",
                      abbreviation: "SO",
                      country_id: "1098"
                  },
                  {
                      id: "5180",
                      name: "Wan Chai",
                      abbreviation: "WC",
                      country_id: "1098"
                  },
                  {
                      id: "5181",
                      name: "Kowloon City",
                      abbreviation: "KC",
                      country_id: "1098"
                  },
                  {
                      id: "5182",
                      name: "Kwun Tong",
                      abbreviation: "KU",
                      country_id: "1098"
                  },
                  {
                      id: "5183",
                      name: "Sham Shui Po",
                      abbreviation: "SS",
                      country_id: "1098"
                  },
                  {
                      id: "5184",
                      name: "Wong Tai Sin",
                      abbreviation: "WT",
                      country_id: "1098"
                  },
                  {
                      id: "5185",
                      name: "Yau Tsim Mong",
                      abbreviation: "YT",
                      country_id: "1098"
                  },
                  {
                      id: "5186",
                      name: "Islands",
                      abbreviation: "IS",
                      country_id: "1098"
                  },
                  {
                      id: "5187",
                      name: "Kwai Tsing",
                      abbreviation: "KI",
                      country_id: "1098"
                  },
                  {
                      id: "5188",
                      name: "North",
                      abbreviation: "NO",
                      country_id: "1098"
                  },
                  {
                      id: "5189",
                      name: "Sai Kung",
                      abbreviation: "SK",
                      country_id: "1098"
                  },
                  {
                      id: "5190",
                      name: "Sha Tin",
                      abbreviation: "ST",
                      country_id: "1098"
                  },
                  {
                      id: "5191",
                      name: "Tai Po",
                      abbreviation: "TP",
                      country_id: "1098"
                  },
                  {
                      id: "5192",
                      name: "Tsuen Wan",
                      abbreviation: "TW",
                      country_id: "1098"
                  },
                  {
                      id: "5193",
                      name: "Tuen Mun",
                      abbreviation: "TM",
                      country_id: "1098"
                  },
                  {
                      id: "5194",
                      name: "Yuen Long",
                      abbreviation: "YL",
                      country_id: "1098"
                  },
                  {
                      id: "5195",
                      name: "Manchester",
                      abbreviation: "MR",
                      country_id: "1108"
                  },
                  {
                      id: "5196",
                      name: "Al Manāmah (Al ‘Āşimah)",
                      abbreviation: "13",
                      country_id: "1016"
                  },
                  {
                      id: "5197",
                      name: "Al Janūbīyah",
                      abbreviation: "14",
                      country_id: "1016"
                  },
                  {
                      id: "5199",
                      name: "Al Wusţá",
                      abbreviation: "16",
                      country_id: "1016"
                  },
                  {
                      id: "5200",
                      name: "Ash Shamālīyah",
                      abbreviation: "17",
                      country_id: "1016"
                  },
                  {
                      id: "5201",
                      name: "Jenin",
                      abbreviation: "_A",
                      country_id: "1165"
                  },
                  {
                      id: "5202",
                      name: "Tubas",
                      abbreviation: "_B",
                      country_id: "1165"
                  },
                  {
                      id: "5203",
                      name: "Tulkarm",
                      abbreviation: "_C",
                      country_id: "1165"
                  },
                  {
                      id: "5204",
                      name: "Nablus",
                      abbreviation: "_D",
                      country_id: "1165"
                  },
                  {
                      id: "5205",
                      name: "Qalqilya",
                      abbreviation: "_E",
                      country_id: "1165"
                  },
                  {
                      id: "5206",
                      name: "Salfit",
                      abbreviation: "_F",
                      country_id: "1165"
                  },
                  {
                      id: "5207",
                      name: "Ramallah and Al-Bireh",
                      abbreviation: "_G",
                      country_id: "1165"
                  },
                  {
                      id: "5208",
                      name: "Jericho",
                      abbreviation: "_H",
                      country_id: "1165"
                  },
                  {
                      id: "5209",
                      name: "Jerusalem",
                      abbreviation: "_I",
                      country_id: "1165"
                  },
                  {
                      id: "5210",
                      name: "Bethlehem",
                      abbreviation: "_J",
                      country_id: "1165"
                  },
                  {
                      id: "5211",
                      name: "Hebron",
                      abbreviation: "_K",
                      country_id: "1165"
                  },
                  {
                      id: "5212",
                      name: "North Gaza",
                      abbreviation: "_L",
                      country_id: "1165"
                  },
                  {
                      id: "5213",
                      name: "Gaza",
                      abbreviation: "_M",
                      country_id: "1165"
                  },
                  {
                      id: "5214",
                      name: "Deir el-Balah",
                      abbreviation: "_N",
                      country_id: "1165"
                  },
                  {
                      id: "5215",
                      name: "Khan Yunis",
                      abbreviation: "_O",
                      country_id: "1165"
                  },
                  {
                      id: "5216",
                      name: "Rafah",
                      abbreviation: "_P",
                      country_id: "1165"
                  },
                  {
                      id: "5217",
                      name: "Brussels",
                      abbreviation: "BRU",
                      country_id: "1020"
                  },
                  {
                      id: "5218",
                      name: "Distrito Federal",
                      abbreviation: "DIF",
                      country_id: "1140"
                  },
                  {
                      id: "5219",
                      name: "Taichung City",
                      abbreviation: "TXG",
                      country_id: "1208"
                  },
                  {
                      id: "5220",
                      name: "Kaohsiung City",
                      abbreviation: "KHH",
                      country_id: "1208"
                  },
                  {
                      id: "5221",
                      name: "Taipei City",
                      abbreviation: "TPE",
                      country_id: "1208"
                  },
                  {
                      id: "5222",
                      name: "Chiayi City",
                      abbreviation: "CYI",
                      country_id: "1208"
                  },
                  {
                      id: "5223",
                      name: "Hsinchu City",
                      abbreviation: "HSZ",
                      country_id: "1208"
                  },
                  {
                      id: "5224",
                      name: "Tainan City",
                      abbreviation: "TNN",
                      country_id: "1208"
                  },
                  {
                      id: "9000",
                      name: "North West",
                      abbreviation: "NW",
                      country_id: "1196"
                  },
                  {
                      id: "9986",
                      name: "Tyne and Wear",
                      abbreviation: "TWR",
                      country_id: "1226"
                  },
                  {
                      id: "9988",
                      name: "Greater Manchester",
                      abbreviation: "GTM",
                      country_id: "1226"
                  },
                  {
                      id: "9989",
                      name: "Co Tyrone",
                      abbreviation: "TYR",
                      country_id: "1226"
                  },
                  {
                      id: "9990",
                      name: "West Yorkshire",
                      abbreviation: "WYK",
                      country_id: "1226"
                  },
                  {
                      id: "9991",
                      name: "South Yorkshire",
                      abbreviation: "SYK",
                      country_id: "1226"
                  },
                  {
                      id: "9992",
                      name: "Merseyside",
                      abbreviation: "MSY",
                      country_id: "1226"
                  },
                  {
                      id: "9993",
                      name: "Berkshire",
                      abbreviation: "BRK",
                      country_id: "1226"
                  },
                  {
                      id: "9994",
                      name: "West Midlands",
                      abbreviation: "WMD",
                      country_id: "1226"
                  },
                  {
                      id: "9998",
                      name: "West Glamorgan",
                      abbreviation: "WGM",
                      country_id: "1226"
                  },
                  {
                      id: "9999",
                      name: "London",
                      abbreviation: "LON",
                      country_id: "1226"
                  },
                  {
                      id: "10000",
                      name: "Carbonia-Iglesias",
                      abbreviation: "CI",
                      country_id: "1107"
                  },
                  {
                      id: "10001",
                      name: "Olbia-Tempio",
                      abbreviation: "OT",
                      country_id: "1107"
                  },
                  {
                      id: "10002",
                      name: "Medio Campidano",
                      abbreviation: "VS",
                      country_id: "1107"
                  },
                  {
                      id: "10003",
                      name: "Ogliastra",
                      abbreviation: "OG",
                      country_id: "1107"
                  },
                  {
                      id: "10009",
                      name: "Jura",
                      abbreviation: "39",
                      country_id: "1076"
                  },
                  {
                      id: "10010",
                      name: "Barletta-Andria-Trani",
                      abbreviation: "Bar",
                      country_id: "1107"
                  },
                  {
                      id: "10011",
                      name: "Fermo",
                      abbreviation: "Fer",
                      country_id: "1107"
                  },
                  {
                      id: "10012",
                      name: "Monza e Brianza",
                      abbreviation: "Mon",
                      country_id: "1107"
                  },
                  {
                      id: "10013",
                      name: "Clwyd",
                      abbreviation: "CWD",
                      country_id: "1226"
                  },
                  {
                      id: "10014",
                      name: "Dyfed",
                      abbreviation: "DFD",
                      country_id: "1226"
                  },
                  {
                      id: "10015",
                      name: "South Glamorgan",
                      abbreviation: "SGM",
                      country_id: "1226"
                  },
                  {
                      id: "10016",
                      name: "Artibonite",
                      abbreviation: "AR",
                      country_id: "1094"
                  },
                  {
                      id: "10017",
                      name: "Centre",
                      abbreviation: "CE",
                      country_id: "1094"
                  },
                  {
                      id: "10018",
                      name: "Nippes",
                      abbreviation: "NI",
                      country_id: "1094"
                  },
                  {
                      id: "10019",
                      name: "Nord",
                      abbreviation: "ND",
                      country_id: "1094"
                  },
                  {
                      id: "10020",
                      name: "La Rioja",
                      abbreviation: "F",
                      country_id: "1010"
                  },
                  {
                      id: "10021",
                      name: "Andorra la Vella",
                      abbreviation: "07",
                      country_id: "1005"
                  },
                  {
                      id: "10022",
                      name: "Canillo",
                      abbreviation: "02",
                      country_id: "1005"
                  },
                  {
                      id: "10023",
                      name: "Encamp",
                      abbreviation: "03",
                      country_id: "1005"
                  },
                  {
                      id: "10024",
                      name: "Escaldes-Engordany",
                      abbreviation: "08",
                      country_id: "1005"
                  },
                  {
                      id: "10025",
                      name: "La Massana",
                      abbreviation: "04",
                      country_id: "1005"
                  },
                  {
                      id: "10026",
                      name: "Ordino",
                      abbreviation: "05",
                      country_id: "1005"
                  },
                  {
                      id: "10027",
                      name: "Sant Julia de Loria",
                      abbreviation: "06",
                      country_id: "1005"
                  },
                  {
                      id: "10028",
                      name: "Abaco Islands",
                      abbreviation: "AB",
                      country_id: "1212"
                  },
                  {
                      id: "10029",
                      name: "Andros Island",
                      abbreviation: "AN",
                      country_id: "1212"
                  },
                  {
                      id: "10030",
                      name: "Berry Islands",
                      abbreviation: "BR",
                      country_id: "1212"
                  },
                  {
                      id: "10031",
                      name: "Eleuthera",
                      abbreviation: "EL",
                      country_id: "1212"
                  },
                  {
                      id: "10032",
                      name: "Grand Bahama",
                      abbreviation: "GB",
                      country_id: "1212"
                  },
                  {
                      id: "10033",
                      name: "Rum Cay",
                      abbreviation: "RC",
                      country_id: "1212"
                  },
                  {
                      id: "10034",
                      name: "San Salvador Island",
                      abbreviation: "SS",
                      country_id: "1212"
                  },
                  {
                      id: "10035",
                      name: "Kongo central",
                      abbreviation: "01",
                      country_id: "1050"
                  },
                  {
                      id: "10036",
                      name: "Kwango",
                      abbreviation: "02",
                      country_id: "1050"
                  },
                  {
                      id: "10037",
                      name: "Kwilu",
                      abbreviation: "03",
                      country_id: "1050"
                  },
                  {
                      id: "10038",
                      name: "Mai-Ndombe",
                      abbreviation: "04",
                      country_id: "1050"
                  },
                  {
                      id: "10039",
                      name: "Kasai",
                      abbreviation: "05",
                      country_id: "1050"
                  },
                  {
                      id: "10040",
                      name: "Lulua",
                      abbreviation: "06",
                      country_id: "1050"
                  },
                  {
                      id: "10041",
                      name: "Lomami",
                      abbreviation: "07",
                      country_id: "1050"
                  },
                  {
                      id: "10042",
                      name: "Sankuru",
                      abbreviation: "08",
                      country_id: "1050"
                  },
                  {
                      id: "10043",
                      name: "Ituri",
                      abbreviation: "09",
                      country_id: "1050"
                  },
                  {
                      id: "10044",
                      name: "Haut-Uele",
                      abbreviation: "10",
                      country_id: "1050"
                  },
                  {
                      id: "10045",
                      name: "Tshopo",
                      abbreviation: "11",
                      country_id: "1050"
                  },
                  {
                      id: "10046",
                      name: "Bas-Uele",
                      abbreviation: "12",
                      country_id: "1050"
                  },
                  {
                      id: "10047",
                      name: "Nord-Ubangi",
                      abbreviation: "13",
                      country_id: "1050"
                  },
                  {
                      id: "10048",
                      name: "Mongala",
                      abbreviation: "14",
                      country_id: "1050"
                  },
                  {
                      id: "10049",
                      name: "Sud-Ubangi",
                      abbreviation: "15",
                      country_id: "1050"
                  },
                  {
                      id: "10050",
                      name: "Tshuapa",
                      abbreviation: "16",
                      country_id: "1050"
                  },
                  {
                      id: "10051",
                      name: "Haut-Lomami",
                      abbreviation: "17",
                      country_id: "1050"
                  },
                  {
                      id: "10052",
                      name: "Lualaba",
                      abbreviation: "18",
                      country_id: "1050"
                  },
                  {
                      id: "10053",
                      name: "Haut-Katanga",
                      abbreviation: "19",
                      country_id: "1050"
                  },
                  {
                      id: "10054",
                      name: "Tanganyika",
                      abbreviation: "20",
                      country_id: "1050"
                  },
                  {
                      id: "10055",
                      name: "Toledo",
                      abbreviation: "TO",
                      country_id: "1198"
                  },
                  {
                      id: "10056",
                      name: "Córdoba",
                      abbreviation: "CO",
                      country_id: "1198"
                  },
                  {
                      id: "10057",
                      name: "Metropolitan Manila",
                      abbreviation: "MNL",
                      country_id: "1170"
                  },
                  {
                      id: "10058",
                      name: "La Paz",
                      abbreviation: "LP",
                      country_id: "1097"
                  },
                  {
                      id: "10059",
                      name: "Yinchuan",
                      abbreviation: "YN",
                      country_id: "1045"
                  },
                  {
                      id: "10060",
                      name: "Shizuishan",
                      abbreviation: "SZ",
                      country_id: "1045"
                  },
                  {
                      id: "10061",
                      name: "Wuzhong",
                      abbreviation: "WZ",
                      country_id: "1045"
                  },
                  {
                      id: "10062",
                      name: "Guyuan",
                      abbreviation: "GY",
                      country_id: "1045"
                  },
                  {
                      id: "10063",
                      name: "Zhongwei",
                      abbreviation: "ZW",
                      country_id: "1045"
                  },
                  {
                      id: "10064",
                      name: "Luxembourg",
                      abbreviation: "L",
                      country_id: "1126"
                  },
                  {
                      id: "10065",
                      name: "Aizkraukles novads",
                      abbreviation: "002",
                      country_id: "1119"
                  },
                  {
                      id: "10066",
                      name: "Jaunjelgavas novads",
                      abbreviation: "038",
                      country_id: "1119"
                  },
                  {
                      id: "10067",
                      name: "Pļaviņu novads",
                      abbreviation: "072",
                      country_id: "1119"
                  },
                  {
                      id: "10068",
                      name: "Kokneses novads",
                      abbreviation: "046",
                      country_id: "1119"
                  },
                  {
                      id: "10069",
                      name: "Neretas novads",
                      abbreviation: "065",
                      country_id: "1119"
                  },
                  {
                      id: "10070",
                      name: "Skrīveru novads",
                      abbreviation: "092",
                      country_id: "1119"
                  },
                  {
                      id: "10071",
                      name: "Alūksnes novads",
                      abbreviation: "007",
                      country_id: "1119"
                  },
                  {
                      id: "10072",
                      name: "Apes novads",
                      abbreviation: "009",
                      country_id: "1119"
                  },
                  {
                      id: "10073",
                      name: "Balvu novads",
                      abbreviation: "015",
                      country_id: "1119"
                  },
                  {
                      id: "10074",
                      name: "Viļakas novads",
                      abbreviation: "108",
                      country_id: "1119"
                  },
                  {
                      id: "10075",
                      name: "Baltinavas novads",
                      abbreviation: "014",
                      country_id: "1119"
                  },
                  {
                      id: "10076",
                      name: "Rugāju novads",
                      abbreviation: "082",
                      country_id: "1119"
                  },
                  {
                      id: "10077",
                      name: "Bauskas novads",
                      abbreviation: "016",
                      country_id: "1119"
                  },
                  {
                      id: "10078",
                      name: "Iecavas novads",
                      abbreviation: "034",
                      country_id: "1119"
                  },
                  {
                      id: "10079",
                      name: "Rundāles novads",
                      abbreviation: "083",
                      country_id: "1119"
                  },
                  {
                      id: "10080",
                      name: "Vecumnieku novads",
                      abbreviation: "105",
                      country_id: "1119"
                  },
                  {
                      id: "10081",
                      name: "Cēsu novads",
                      abbreviation: "022",
                      country_id: "1119"
                  },
                  {
                      id: "10082",
                      name: "Līgatnes novads",
                      abbreviation: "055",
                      country_id: "1119"
                  },
                  {
                      id: "10083",
                      name: "Amatas novads",
                      abbreviation: "008",
                      country_id: "1119"
                  },
                  {
                      id: "10084",
                      name: "Jaunpiebalgas novads",
                      abbreviation: "039",
                      country_id: "1119"
                  },
                  {
                      id: "10085",
                      name: "Priekuļu novads",
                      abbreviation: "075",
                      country_id: "1119"
                  },
                  {
                      id: "10086",
                      name: "Pārgaujas novads",
                      abbreviation: "070",
                      country_id: "1119"
                  },
                  {
                      id: "10087",
                      name: "Raunas novads",
                      abbreviation: "076",
                      country_id: "1119"
                  },
                  {
                      id: "10088",
                      name: "Vecpiebalgas novads",
                      abbreviation: "104",
                      country_id: "1119"
                  },
                  {
                      id: "10089",
                      name: "Daugavpils novads",
                      abbreviation: "025",
                      country_id: "1119"
                  },
                  {
                      id: "10090",
                      name: "Ilūkstes novads",
                      abbreviation: "036",
                      country_id: "1119"
                  },
                  {
                      id: "10091",
                      name: "Dobeles novads",
                      abbreviation: "026",
                      country_id: "1119"
                  },
                  {
                      id: "10092",
                      name: "Auces novads",
                      abbreviation: "010",
                      country_id: "1119"
                  },
                  {
                      id: "10093",
                      name: "Tērvetes novads",
                      abbreviation: "098",
                      country_id: "1119"
                  },
                  {
                      id: "10094",
                      name: "Gulbenes novads",
                      abbreviation: "033",
                      country_id: "1119"
                  },
                  {
                      id: "10095",
                      name: "Jelgavas novads",
                      abbreviation: "041",
                      country_id: "1119"
                  },
                  {
                      id: "10096",
                      name: "Ozolnieku novads",
                      abbreviation: "069",
                      country_id: "1119"
                  },
                  {
                      id: "10097",
                      name: "Jēkabpils novads",
                      abbreviation: "042",
                      country_id: "1119"
                  },
                  {
                      id: "10098",
                      name: "Aknīstes novads",
                      abbreviation: "004",
                      country_id: "1119"
                  },
                  {
                      id: "10099",
                      name: "Viesītes novads",
                      abbreviation: "107",
                      country_id: "1119"
                  },
                  {
                      id: "10100",
                      name: "Krustpils novads",
                      abbreviation: "049",
                      country_id: "1119"
                  },
                  {
                      id: "10101",
                      name: "Salas novads",
                      abbreviation: "085",
                      country_id: "1119"
                  },
                  {
                      id: "10102",
                      name: "Krāslavas novads",
                      abbreviation: "047",
                      country_id: "1119"
                  },
                  {
                      id: "10103",
                      name: "Dagdas novads",
                      abbreviation: "024",
                      country_id: "1119"
                  },
                  {
                      id: "10104",
                      name: "Aglonas novads",
                      abbreviation: "001",
                      country_id: "1119"
                  },
                  {
                      id: "10105",
                      name: "Kuldīgas novads",
                      abbreviation: "050",
                      country_id: "1119"
                  },
                  {
                      id: "10106",
                      name: "Skrundas novads",
                      abbreviation: "093",
                      country_id: "1119"
                  },
                  {
                      id: "10107",
                      name: "Alsungas novads",
                      abbreviation: "006",
                      country_id: "1119"
                  },
                  {
                      id: "10108",
                      name: "Aizputes novads",
                      abbreviation: "003",
                      country_id: "1119"
                  },
                  {
                      id: "10109",
                      name: "Durbes novads",
                      abbreviation: "028",
                      country_id: "1119"
                  },
                  {
                      id: "10110",
                      name: "Grobiņas novads",
                      abbreviation: "032",
                      country_id: "1119"
                  },
                  {
                      id: "10111",
                      name: "Pāvilostas novads",
                      abbreviation: "071",
                      country_id: "1119"
                  },
                  {
                      id: "10112",
                      name: "Priekules novads",
                      abbreviation: "074",
                      country_id: "1119"
                  },
                  {
                      id: "10113",
                      name: "Nīcas novads",
                      abbreviation: "066",
                      country_id: "1119"
                  },
                  {
                      id: "10114",
                      name: "Rucavas novads",
                      abbreviation: "081",
                      country_id: "1119"
                  },
                  {
                      id: "10115",
                      name: "Vaiņodes novads",
                      abbreviation: "100",
                      country_id: "1119"
                  },
                  {
                      id: "10116",
                      name: "Limbažu novads",
                      abbreviation: "054",
                      country_id: "1119"
                  },
                  {
                      id: "10117",
                      name: "Alojas novads",
                      abbreviation: "005",
                      country_id: "1119"
                  },
                  {
                      id: "10118",
                      name: "Salacgrīvas novads",
                      abbreviation: "086",
                      country_id: "1119"
                  },
                  {
                      id: "10119",
                      name: "Ludzas novads",
                      abbreviation: "058",
                      country_id: "1119"
                  },
                  {
                      id: "10120",
                      name: "Kārsavas novads",
                      abbreviation: "044",
                      country_id: "1119"
                  },
                  {
                      id: "10121",
                      name: "Zilupes novads",
                      abbreviation: "110",
                      country_id: "1119"
                  },
                  {
                      id: "10122",
                      name: "Ciblas novads",
                      abbreviation: "023",
                      country_id: "1119"
                  },
                  {
                      id: "10123",
                      name: "Madonas novads",
                      abbreviation: "059",
                      country_id: "1119"
                  },
                  {
                      id: "10124",
                      name: "Cesvaines novads",
                      abbreviation: "021",
                      country_id: "1119"
                  },
                  {
                      id: "10125",
                      name: "Lubānas novads",
                      abbreviation: "057",
                      country_id: "1119"
                  },
                  {
                      id: "10126",
                      name: "Varakļānu novads",
                      abbreviation: "102",
                      country_id: "1119"
                  },
                  {
                      id: "10127",
                      name: "Ērgļu novads",
                      abbreviation: "030",
                      country_id: "1119"
                  },
                  {
                      id: "10128",
                      name: "Ogres novads",
                      abbreviation: "067",
                      country_id: "1119"
                  },
                  {
                      id: "10129",
                      name: "Ikšķiles novads",
                      abbreviation: "035",
                      country_id: "1119"
                  },
                  {
                      id: "10130",
                      name: "Ķeguma novads",
                      abbreviation: "051",
                      country_id: "1119"
                  },
                  {
                      id: "10131",
                      name: "Lielvārdes novads",
                      abbreviation: "053",
                      country_id: "1119"
                  },
                  {
                      id: "10132",
                      name: "Preiļu novads",
                      abbreviation: "073",
                      country_id: "1119"
                  },
                  {
                      id: "10133",
                      name: "Līvānu novads",
                      abbreviation: "056",
                      country_id: "1119"
                  },
                  {
                      id: "10134",
                      name: "Riebiņu novads",
                      abbreviation: "078",
                      country_id: "1119"
                  },
                  {
                      id: "10135",
                      name: "Vārkavas novads",
                      abbreviation: "103",
                      country_id: "1119"
                  },
                  {
                      id: "10136",
                      name: "Rēzeknes novads",
                      abbreviation: "077",
                      country_id: "1119"
                  },
                  {
                      id: "10137",
                      name: "Viļānu novads",
                      abbreviation: "109",
                      country_id: "1119"
                  },
                  {
                      id: "10138",
                      name: "Baldones novads",
                      abbreviation: "013",
                      country_id: "1119"
                  },
                  {
                      id: "10139",
                      name: "Ķekavas novads",
                      abbreviation: "052",
                      country_id: "1119"
                  },
                  {
                      id: "10140",
                      name: "Olaines novads",
                      abbreviation: "068",
                      country_id: "1119"
                  },
                  {
                      id: "10141",
                      name: "Salaspils novads",
                      abbreviation: "087",
                      country_id: "1119"
                  },
                  {
                      id: "10142",
                      name: "Saulkrastu novads",
                      abbreviation: "089",
                      country_id: "1119"
                  },
                  {
                      id: "10143",
                      name: "Siguldas novads",
                      abbreviation: "091",
                      country_id: "1119"
                  },
                  {
                      id: "10144",
                      name: "Inčukalna novads",
                      abbreviation: "037",
                      country_id: "1119"
                  },
                  {
                      id: "10145",
                      name: "Ādažu novads",
                      abbreviation: "011",
                      country_id: "1119"
                  },
                  {
                      id: "10146",
                      name: "Babītes novads",
                      abbreviation: "012",
                      country_id: "1119"
                  },
                  {
                      id: "10147",
                      name: "Carnikavas novads",
                      abbreviation: "020",
                      country_id: "1119"
                  },
                  {
                      id: "10148",
                      name: "Garkalnes novads",
                      abbreviation: "031",
                      country_id: "1119"
                  },
                  {
                      id: "10149",
                      name: "Krimuldas novads",
                      abbreviation: "048",
                      country_id: "1119"
                  },
                  {
                      id: "10150",
                      name: "Mālpils novads",
                      abbreviation: "061",
                      country_id: "1119"
                  },
                  {
                      id: "10151",
                      name: "Mārupes novads",
                      abbreviation: "062",
                      country_id: "1119"
                  },
                  {
                      id: "10152",
                      name: "Ropažu novads",
                      abbreviation: "080",
                      country_id: "1119"
                  },
                  {
                      id: "10153",
                      name: "Sējas novads",
                      abbreviation: "090",
                      country_id: "1119"
                  },
                  {
                      id: "10154",
                      name: "Stopiņu novads",
                      abbreviation: "095",
                      country_id: "1119"
                  },
                  {
                      id: "10155",
                      name: "Saldus novads",
                      abbreviation: "088",
                      country_id: "1119"
                  },
                  {
                      id: "10156",
                      name: "Brocēnu novads",
                      abbreviation: "018",
                      country_id: "1119"
                  },
                  {
                      id: "10157",
                      name: "Talsu novads",
                      abbreviation: "097",
                      country_id: "1119"
                  },
                  {
                      id: "10158",
                      name: "Dundagas novads",
                      abbreviation: "027",
                      country_id: "1119"
                  },
                  {
                      id: "10159",
                      name: "Mērsraga novads",
                      abbreviation: "063",
                      country_id: "1119"
                  },
                  {
                      id: "10160",
                      name: "Rojas novads",
                      abbreviation: "079",
                      country_id: "1119"
                  },
                  {
                      id: "10161",
                      name: "Tukuma novads",
                      abbreviation: "099",
                      country_id: "1119"
                  },
                  {
                      id: "10162",
                      name: "Kandavas novads",
                      abbreviation: "043",
                      country_id: "1119"
                  },
                  {
                      id: "10163",
                      name: "Engures novads",
                      abbreviation: "029",
                      country_id: "1119"
                  },
                  {
                      id: "10164",
                      name: "Jaunpils novads",
                      abbreviation: "040",
                      country_id: "1119"
                  },
                  {
                      id: "10165",
                      name: "Valkas novads",
                      abbreviation: "101",
                      country_id: "1119"
                  },
                  {
                      id: "10166",
                      name: "Smiltenes novads",
                      abbreviation: "094",
                      country_id: "1119"
                  },
                  {
                      id: "10167",
                      name: "Strenču novads",
                      abbreviation: "096",
                      country_id: "1119"
                  },
                  {
                      id: "10168",
                      name: "Kocēnu novads",
                      abbreviation: "045",
                      country_id: "1119"
                  },
                  {
                      id: "10169",
                      name: "Mazsalacas novads",
                      abbreviation: "060",
                      country_id: "1119"
                  },
                  {
                      id: "10170",
                      name: "Rūjienas novads",
                      abbreviation: "084",
                      country_id: "1119"
                  },
                  {
                      id: "10171",
                      name: "Beverīnas novads",
                      abbreviation: "017",
                      country_id: "1119"
                  },
                  {
                      id: "10172",
                      name: "Burtnieku novads",
                      abbreviation: "019",
                      country_id: "1119"
                  },
                  {
                      id: "10173",
                      name: "Naukšēnu novads",
                      abbreviation: "064",
                      country_id: "1119"
                  },
                  {
                      id: "10174",
                      name: "Ventspils novads",
                      abbreviation: "106",
                      country_id: "1119"
                  },
                  {
                      id: "10175",
                      name: "Jēkabpils",
                      abbreviation: "JKB",
                      country_id: "1119"
                  },
                  {
                      id: "10176",
                      name: "Valmiera",
                      abbreviation: "VMR",
                      country_id: "1119"
                  },
                  {
                      id: "10177",
                      name: "Florida",
                      abbreviation: "FL",
                      country_id: "1229"
                  },
                  {
                      id: "10178",
                      name: "Rio Negro",
                      abbreviation: "RN",
                      country_id: "1229"
                  },
                  {
                      id: "10179",
                      name: "San Jose",
                      abbreviation: "SJ",
                      country_id: "1229"
                  },
                  {
                      id: "10180",
                      name: "Plateau",
                      abbreviation: "PL",
                      country_id: "1157"
                  },
                  {
                      id: "10181",
                      name: "Pieria",
                      abbreviation: "61",
                      country_id: "1085"
                  },
                  {
                      id: "10182",
                      name: "Los Rios",
                      abbreviation: "LR",
                      country_id: "1044"
                  },
                  {
                      id: "10183",
                      name: "Arica y Parinacota",
                      abbreviation: "AP",
                      country_id: "1044"
                  },
                  {
                      id: "10184",
                      name: "Amazonas",
                      abbreviation: "AMA",
                      country_id: "1169"
                  },
                  {
                      id: "10185",
                      name: "Kalimantan Tengah",
                      abbreviation: "KT",
                      country_id: "1102"
                  },
                  {
                      id: "10186",
                      name: "Sulawesi Barat",
                      abbreviation: "SR",
                      country_id: "1102"
                  },
                  {
                      id: "10187",
                      name: "Kalimantan Utara",
                      abbreviation: "KU",
                      country_id: "1102"
                  },
                  {
                      id: "10188",
                      name: "Ankaran",
                      abbreviation: "86",
                      country_id: "1193"
                  },
                  {
                      id: "10189",
                      name: "Apače",
                      abbreviation: "87",
                      country_id: "1193"
                  },
                  {
                      id: "10190",
                      name: "Cirkulane",
                      abbreviation: "88",
                      country_id: "1193"
                  },
                  {
                      id: "10191",
                      name: "Gorje",
                      abbreviation: "89",
                      country_id: "1193"
                  },
                  {
                      id: "10192",
                      name: "Kostanjevica na Krki",
                      abbreviation: "90",
                      country_id: "1193"
                  },
                  {
                      id: "10193",
                      name: "Log-Dragomer",
                      abbreviation: "91",
                      country_id: "1193"
                  },
                  {
                      id: "10194",
                      name: "Makole",
                      abbreviation: "92",
                      country_id: "1193"
                  },
                  {
                      id: "10195",
                      name: "Mirna",
                      abbreviation: "93",
                      country_id: "1193"
                  },
                  {
                      id: "10196",
                      name: "Mokronog-Trebelno",
                      abbreviation: "94",
                      country_id: "1193"
                  },
                  {
                      id: "10197",
                      name: "Odranci",
                      abbreviation: "95",
                      country_id: "1193"
                  },
                  {
                      id: "10198",
                      name: "Oplotnica",
                      abbreviation: "96",
                      country_id: "1193"
                  },
                  {
                      id: "10199",
                      name: "Ormož",
                      abbreviation: "97",
                      country_id: "1193"
                  },
                  {
                      id: "10200",
                      name: "Osilnica",
                      abbreviation: "98",
                      country_id: "1193"
                  },
                  {
                      id: "10201",
                      name: "Pesnica",
                      abbreviation: "99",
                      country_id: "1193"
                  },
                  {
                      id: "10202",
                      name: "Piran",
                      abbreviation: "100",
                      country_id: "1193"
                  },
                  {
                      id: "10203",
                      name: "Pivka",
                      abbreviation: "101",
                      country_id: "1193"
                  },
                  {
                      id: "10204",
                      name: "Podčetrtek",
                      abbreviation: "102",
                      country_id: "1193"
                  },
                  {
                      id: "10205",
                      name: "Podlehnik",
                      abbreviation: "103",
                      country_id: "1193"
                  },
                  {
                      id: "10206",
                      name: "Podvelka",
                      abbreviation: "104",
                      country_id: "1193"
                  },
                  {
                      id: "10207",
                      name: "Poljčane",
                      abbreviation: "105",
                      country_id: "1193"
                  },
                  {
                      id: "10208",
                      name: "Polzela",
                      abbreviation: "106",
                      country_id: "1193"
                  },
                  {
                      id: "10209",
                      name: "Postojna",
                      abbreviation: "107",
                      country_id: "1193"
                  },
                  {
                      id: "10210",
                      name: "Prebold",
                      abbreviation: "108",
                      country_id: "1193"
                  },
                  {
                      id: "10211",
                      name: "Preddvor",
                      abbreviation: "109",
                      country_id: "1193"
                  },
                  {
                      id: "10212",
                      name: "Prevalje",
                      abbreviation: "110",
                      country_id: "1193"
                  },
                  {
                      id: "10213",
                      name: "Ptuj",
                      abbreviation: "111",
                      country_id: "1193"
                  },
                  {
                      id: "10214",
                      name: "Puconci",
                      abbreviation: "112",
                      country_id: "1193"
                  },
                  {
                      id: "10215",
                      name: "Rače-Fram",
                      abbreviation: "113",
                      country_id: "1193"
                  },
                  {
                      id: "10216",
                      name: "Radeče",
                      abbreviation: "114",
                      country_id: "1193"
                  },
                  {
                      id: "10217",
                      name: "Radenci",
                      abbreviation: "115",
                      country_id: "1193"
                  },
                  {
                      id: "10218",
                      name: "Radlje ob Dravi",
                      abbreviation: "139",
                      country_id: "1193"
                  },
                  {
                      id: "10219",
                      name: "Radovljica",
                      abbreviation: "145",
                      country_id: "1193"
                  },
                  {
                      id: "10220",
                      name: "Ravne na Koroškem",
                      abbreviation: "171",
                      country_id: "1193"
                  },
                  {
                      id: "10221",
                      name: "Razkrižje",
                      abbreviation: "172",
                      country_id: "1193"
                  },
                  {
                      id: "10222",
                      name: "Rečica ob Savinji",
                      abbreviation: "173",
                      country_id: "1193"
                  },
                  {
                      id: "10223",
                      name: "Renče-Vogrsko",
                      abbreviation: "174",
                      country_id: "1193"
                  },
                  {
                      id: "10224",
                      name: "Ribnica",
                      abbreviation: "175",
                      country_id: "1193"
                  },
                  {
                      id: "10225",
                      name: "Ribnica na Pohorju",
                      abbreviation: "176",
                      country_id: "1193"
                  },
                  {
                      id: "10226",
                      name: "Rogaška Slatina",
                      abbreviation: "177",
                      country_id: "1193"
                  },
                  {
                      id: "10227",
                      name: "Rogašovci",
                      abbreviation: "178",
                      country_id: "1193"
                  },
                  {
                      id: "10228",
                      name: "Rogatec",
                      abbreviation: "179",
                      country_id: "1193"
                  },
                  {
                      id: "10229",
                      name: "Ruše",
                      abbreviation: "180",
                      country_id: "1193"
                  },
                  {
                      id: "10230",
                      name: "Selnica ob Dravi",
                      abbreviation: "195",
                      country_id: "1193"
                  },
                  {
                      id: "10231",
                      name: "Semič",
                      abbreviation: "196",
                      country_id: "1193"
                  },
                  {
                      id: "10232",
                      name: "Šentrupert",
                      abbreviation: "197",
                      country_id: "1193"
                  },
                  {
                      id: "10233",
                      name: "Sevnica",
                      abbreviation: "198",
                      country_id: "1193"
                  },
                  {
                      id: "10234",
                      name: "Sežana",
                      abbreviation: "199",
                      country_id: "1193"
                  },
                  {
                      id: "10235",
                      name: "Slovenj Gradec",
                      abbreviation: "200",
                      country_id: "1193"
                  },
                  {
                      id: "10236",
                      name: "Slovenska Bistrica",
                      abbreviation: "201",
                      country_id: "1193"
                  },
                  {
                      id: "10237",
                      name: "Slovenske Konjice",
                      abbreviation: "202",
                      country_id: "1193"
                  },
                  {
                      id: "10238",
                      name: "Šmarješke Toplice",
                      abbreviation: "203",
                      country_id: "1193"
                  },
                  {
                      id: "10239",
                      name: "Sodražica",
                      abbreviation: "204",
                      country_id: "1193"
                  },
                  {
                      id: "10240",
                      name: "Solčava",
                      abbreviation: "205",
                      country_id: "1193"
                  },
                  {
                      id: "10241",
                      name: "Središče ob Dravi",
                      abbreviation: "206",
                      country_id: "1193"
                  },
                  {
                      id: "10242",
                      name: "Starše",
                      abbreviation: "207",
                      country_id: "1193"
                  },
                  {
                      id: "10243",
                      name: "Straža",
                      abbreviation: "208",
                      country_id: "1193"
                  },
                  {
                      id: "10244",
                      name: "Sveta Trojica v Slovenskih goricah",
                      abbreviation: "209",
                      country_id: "1193"
                  },
                  {
                      id: "10245",
                      name: "Sveti Jurij v Slovenskih goricah",
                      abbreviation: "210",
                      country_id: "1193"
                  },
                  {
                      id: "10246",
                      name: "Sveti Tomaž",
                      abbreviation: "211",
                      country_id: "1193"
                  },
                  {
                      id: "10247",
                      name: "Vodice",
                      abbreviation: "212",
                      country_id: "1193"
                  },
                  {
                      id: "10248",
                      name: "Abkhazia",
                      abbreviation: "AB",
                      country_id: "1081"
                  },
                  {
                      id: "10249",
                      name: "Adjara",
                      abbreviation: "AJ",
                      country_id: "1081"
                  },
                  {
                      id: "10250",
                      name: "Tbilisi",
                      abbreviation: "TB",
                      country_id: "1081"
                  },
                  {
                      id: "10251",
                      name: "Guria",
                      abbreviation: "GU",
                      country_id: "1081"
                  },
                  {
                      id: "10252",
                      name: "Imereti",
                      abbreviation: "IM",
                      country_id: "1081"
                  },
                  {
                      id: "10253",
                      name: "Kakheti",
                      abbreviation: "KA",
                      country_id: "1081"
                  },
                  {
                      id: "10254",
                      name: "Kvemo Kartli",
                      abbreviation: "KK",
                      country_id: "1081"
                  },
                  {
                      id: "10255",
                      name: "Mtskheta-Mtianeti",
                      abbreviation: "MM",
                      country_id: "1081"
                  },
                  {
                      id: "10256",
                      name: "Racha-Lechkhumi and Kvemo Svaneti",
                      abbreviation: "RL",
                      country_id: "1081"
                  },
                  {
                      id: "10257",
                      name: "Samegrelo-Zemo Svaneti",
                      abbreviation: "SZ",
                      country_id: "1081"
                  },
                  {
                      id: "10258",
                      name: "Samtskhe-Javakheti",
                      abbreviation: "SJ",
                      country_id: "1081"
                  },
                  {
                      id: "10259",
                      name: "Shida Kartli",
                      abbreviation: "SK",
                      country_id: "1081"
                  },
                  {
                      id: "10260",
                      name: "Central",
                      abbreviation: "C",
                      country_id: "1074"
                  },
                  {
                      id: "10261",
                      name: "Punjab",
                      abbreviation: "PB",
                      country_id: "1163"
                  },
                  {
                      id: "10262",
                      name: "La Libertad",
                      abbreviation: "LI",
                      country_id: "1066"
                  },
                  {
                      id: "10263",
                      name: "La Paz",
                      abbreviation: "PA",
                      country_id: "1066"
                  },
                  {
                      id: "10264",
                      name: "La Union",
                      abbreviation: "UN",
                      country_id: "1066"
                  },
                  {
                      id: "10265",
                      name: "Littoral",
                      abbreviation: "LT",
                      country_id: "1038"
                  },
                  {
                      id: "10266",
                      name: "Nord-Ouest",
                      abbreviation: "NW",
                      country_id: "1038"
                  },
                  {
                      id: "10267",
                      name: "Telangana",
                      abbreviation: "TG",
                      country_id: "1101"
                  },
                  {
                      id: "10268",
                      name: "Ash Sharqiyah",
                      abbreviation: "04",
                      country_id: "1187"
                  },
                  {
                      id: "10269",
                      name: "Guadeloupe",
                      abbreviation: "GP",
                      country_id: "1076"
                  },
                  {
                      id: "10270",
                      name: "Martinique",
                      abbreviation: "MQ",
                      country_id: "1076"
                  },
                  {
                      id: "10271",
                      name: "Guyane",
                      abbreviation: "GF",
                      country_id: "1076"
                  },
                  {
                      id: "10272",
                      name: "La Réunion",
                      abbreviation: "RE",
                      country_id: "1076"
                  },
                  {
                      id: "10273",
                      name: "Mayotte",
                      abbreviation: "YT",
                      country_id: "1076"
                  },
                  {
                      id: "10274",
                      name: "Baringo",
                      abbreviation: "01",
                      country_id: "1112"
                  },
                  {
                      id: "10275",
                      name: "Bomet",
                      abbreviation: "02",
                      country_id: "1112"
                  },
                  {
                      id: "10276",
                      name: "Bungoma",
                      abbreviation: "03",
                      country_id: "1112"
                  },
                  {
                      id: "10277",
                      name: "Busia",
                      abbreviation: "04",
                      country_id: "1112"
                  },
                  {
                      id: "10278",
                      name: "Elgeyo/Marakwet",
                      abbreviation: "05",
                      country_id: "1112"
                  },
                  {
                      id: "10279",
                      name: "Embu",
                      abbreviation: "06",
                      country_id: "1112"
                  },
                  {
                      id: "10280",
                      name: "Garissa",
                      abbreviation: "07",
                      country_id: "1112"
                  },
                  {
                      id: "10281",
                      name: "Homa Bay",
                      abbreviation: "08",
                      country_id: "1112"
                  },
                  {
                      id: "10282",
                      name: "Isiolo",
                      abbreviation: "09",
                      country_id: "1112"
                  },
                  {
                      id: "10283",
                      name: "Kajiado",
                      abbreviation: "10",
                      country_id: "1112"
                  },
                  {
                      id: "10284",
                      name: "Kakamega",
                      abbreviation: "11",
                      country_id: "1112"
                  },
                  {
                      id: "10285",
                      name: "Kericho",
                      abbreviation: "12",
                      country_id: "1112"
                  },
                  {
                      id: "10286",
                      name: "Kiambu",
                      abbreviation: "13",
                      country_id: "1112"
                  },
                  {
                      id: "10287",
                      name: "Kilifi",
                      abbreviation: "14",
                      country_id: "1112"
                  },
                  {
                      id: "10288",
                      name: "Kirinyaga",
                      abbreviation: "15",
                      country_id: "1112"
                  },
                  {
                      id: "10289",
                      name: "Kisii",
                      abbreviation: "16",
                      country_id: "1112"
                  },
                  {
                      id: "10290",
                      name: "Kisumu",
                      abbreviation: "17",
                      country_id: "1112"
                  },
                  {
                      id: "10291",
                      name: "Kitui",
                      abbreviation: "18",
                      country_id: "1112"
                  },
                  {
                      id: "10292",
                      name: "Kwale",
                      abbreviation: "19",
                      country_id: "1112"
                  },
                  {
                      id: "10293",
                      name: "Laikipia",
                      abbreviation: "20",
                      country_id: "1112"
                  },
                  {
                      id: "10294",
                      name: "Lamu",
                      abbreviation: "21",
                      country_id: "1112"
                  },
                  {
                      id: "10295",
                      name: "Machakos",
                      abbreviation: "22",
                      country_id: "1112"
                  },
                  {
                      id: "10296",
                      name: "Makueni",
                      abbreviation: "23",
                      country_id: "1112"
                  },
                  {
                      id: "10297",
                      name: "Mandera",
                      abbreviation: "24",
                      country_id: "1112"
                  },
                  {
                      id: "10298",
                      name: "Marsabit",
                      abbreviation: "25",
                      country_id: "1112"
                  },
                  {
                      id: "10299",
                      name: "Meru",
                      abbreviation: "26",
                      country_id: "1112"
                  },
                  {
                      id: "10300",
                      name: "Migori",
                      abbreviation: "27",
                      country_id: "1112"
                  },
                  {
                      id: "10301",
                      name: "Mombasa",
                      abbreviation: "28",
                      country_id: "1112"
                  },
                  {
                      id: "10302",
                      name: "Murang'a",
                      abbreviation: "29",
                      country_id: "1112"
                  },
                  {
                      id: "10303",
                      name: "Nairobi City",
                      abbreviation: "30",
                      country_id: "1112"
                  },
                  {
                      id: "10304",
                      name: "Nakuru",
                      abbreviation: "31",
                      country_id: "1112"
                  },
                  {
                      id: "10305",
                      name: "Nandi",
                      abbreviation: "32",
                      country_id: "1112"
                  },
                  {
                      id: "10306",
                      name: "Narok",
                      abbreviation: "33",
                      country_id: "1112"
                  },
                  {
                      id: "10307",
                      name: "Nyamira",
                      abbreviation: "34",
                      country_id: "1112"
                  },
                  {
                      id: "10308",
                      name: "Nyandarua",
                      abbreviation: "35",
                      country_id: "1112"
                  },
                  {
                      id: "10309",
                      name: "Nyeri",
                      abbreviation: "36",
                      country_id: "1112"
                  },
                  {
                      id: "10310",
                      name: "Samburu",
                      abbreviation: "37",
                      country_id: "1112"
                  },
                  {
                      id: "10311",
                      name: "Siaya",
                      abbreviation: "38",
                      country_id: "1112"
                  },
                  {
                      id: "10312",
                      name: "Taita/Taveta",
                      abbreviation: "39",
                      country_id: "1112"
                  },
                  {
                      id: "10313",
                      name: "Tana River",
                      abbreviation: "40",
                      country_id: "1112"
                  },
                  {
                      id: "10314",
                      name: "Tharaka-Nithi",
                      abbreviation: "41",
                      country_id: "1112"
                  },
                  {
                      id: "10315",
                      name: "Trans Nzoia",
                      abbreviation: "42",
                      country_id: "1112"
                  },
                  {
                      id: "10316",
                      name: "Turkana",
                      abbreviation: "43",
                      country_id: "1112"
                  },
                  {
                      id: "10317",
                      name: "Uasin Gishu",
                      abbreviation: "44",
                      country_id: "1112"
                  },
                  {
                      id: "10318",
                      name: "Vihiga",
                      abbreviation: "45",
                      country_id: "1112"
                  },
                  {
                      id: "10319",
                      name: "Wajir",
                      abbreviation: "46",
                      country_id: "1112"
                  },
                  {
                      id: "10320",
                      name: "West Pokot",
                      abbreviation: "47",
                      country_id: "1112"
                  },
                  {
                      id: "10321",
                      name: "Chandigarh",
                      abbreviation: "CH",
                      country_id: "1101"
                  },
                  {
                      id: "10322",
                      name: "Central",
                      abbreviation: "CP",
                      country_id: "1083"
                  },
                  {
                      id: "10323",
                      name: "Eastern",
                      abbreviation: "EP",
                      country_id: "1083"
                  },
                  {
                      id: "10324",
                      name: "Northern",
                      abbreviation: "NP",
                      country_id: "1083"
                  },
                  {
                      id: "10325",
                      name: "Western",
                      abbreviation: "WP",
                      country_id: "1083"
                  },
                  {
                      id: "10326",
                      name: "Saint Kitts",
                      abbreviation: "K",
                      country_id: "1181"
                  },
                  {
                      id: "10327",
                      name: "Nevis",
                      abbreviation: "N",
                      country_id: "1181"
                  },
                  {
                      id: "10328",
                      name: "Eastern",
                      abbreviation: "E",
                      country_id: "1190"
                  },
                  {
                      id: "10329",
                      name: "Northern",
                      abbreviation: "N",
                      country_id: "1190"
                  },
                  {
                      id: "10330",
                      name: "Southern",
                      abbreviation: "S",
                      country_id: "1190"
                  },
                  {
                      id: "10331",
                      name: "Dushanbe",
                      abbreviation: "DU",
                      country_id: "1209"
                  },
                  {
                      id: "10332",
                      name: "Nohiyahoi Tobei Jumhurí",
                      abbreviation: "RA",
                      country_id: "1209"
                  },
                  {
                      id: "10333",
                      name: "Wallis-et-Futuna",
                      abbreviation: "WF",
                      country_id: "1076"
                  },
                  {
                      id: "10334",
                      name: "Nouvelle-Calédonie",
                      abbreviation: "NC",
                      country_id: "1076"
                  },
                  {
                      id: "10335",
                      name: "Haute-Marne",
                      abbreviation: "52",
                      country_id: "1076"
                  },
                  {
                      id: "10336",
                      name: "Saint George",
                      abbreviation: "03",
                      country_id: "1009"
                  },
                  {
                      id: "10337",
                      name: "Saint John",
                      abbreviation: "04",
                      country_id: "1009"
                  },
                  {
                      id: "10338",
                      name: "Saint Mary",
                      abbreviation: "05",
                      country_id: "1009"
                  },
                  {
                      id: "10339",
                      name: "Saint Paul",
                      abbreviation: "06",
                      country_id: "1009"
                  },
                  {
                      id: "10340",
                      name: "Saint Peter",
                      abbreviation: "07",
                      country_id: "1009"
                  },
                  {
                      id: "10341",
                      name: "Saint Philip",
                      abbreviation: "08",
                      country_id: "1009"
                  },
                  {
                      id: "10342",
                      name: "Barbuda",
                      abbreviation: "10",
                      country_id: "1009"
                  },
                  {
                      id: "10343",
                      name: "Redonda",
                      abbreviation: "11",
                      country_id: "1009"
                  },
                  {
                      id: "10344",
                      name: "Christ Church",
                      abbreviation: "01",
                      country_id: "1018"
                  },
                  {
                      id: "10345",
                      name: "Saint Andrew",
                      abbreviation: "02",
                      country_id: "1018"
                  },
                  {
                      id: "10346",
                      name: "Saint George",
                      abbreviation: "03",
                      country_id: "1018"
                  },
                  {
                      id: "10347",
                      name: "Saint James",
                      abbreviation: "04",
                      country_id: "1018"
                  },
                  {
                      id: "10348",
                      name: "Saint John",
                      abbreviation: "05",
                      country_id: "1018"
                  },
                  {
                      id: "10349",
                      name: "Saint Joseph",
                      abbreviation: "06",
                      country_id: "1018"
                  },
                  {
                      id: "10350",
                      name: "Saint Lucy",
                      abbreviation: "07",
                      country_id: "1018"
                  },
                  {
                      id: "10351",
                      name: "Saint Michael",
                      abbreviation: "08",
                      country_id: "1018"
                  },
                  {
                      id: "10352",
                      name: "Saint Peter",
                      abbreviation: "09",
                      country_id: "1018"
                  },
                  {
                      id: "10353",
                      name: "Saint Philip",
                      abbreviation: "10",
                      country_id: "1018"
                  },
                  {
                      id: "10354",
                      name: "Saint Thomas",
                      abbreviation: "11",
                      country_id: "1018"
                  },
                  {
                      id: "10355",
                      name: "Estuaire",
                      abbreviation: "01",
                      country_id: "1080"
                  },
                  {
                      id: "10356",
                      name: "Haut-Ogooué",
                      abbreviation: "02",
                      country_id: "1080"
                  },
                  {
                      id: "10357",
                      name: "Moyen-Ogooué",
                      abbreviation: "03",
                      country_id: "1080"
                  },
                  {
                      id: "10358",
                      name: "Ngounié",
                      abbreviation: "04",
                      country_id: "1080"
                  },
                  {
                      id: "10359",
                      name: "Nyanga",
                      abbreviation: "05",
                      country_id: "1080"
                  },
                  {
                      id: "10360",
                      name: "Ogooué-Ivindo",
                      abbreviation: "06",
                      country_id: "1080"
                  },
                  {
                      id: "10361",
                      name: "Ogooué-Lolo",
                      abbreviation: "07",
                      country_id: "1080"
                  },
                  {
                      id: "10362",
                      name: "Ogooué-Maritime",
                      abbreviation: "08",
                      country_id: "1080"
                  },
                  {
                      id: "10363",
                      name: "Woleu-Ntem",
                      abbreviation: "09",
                      country_id: "1080"
                  },
                  {
                      id: "10364",
                      name: "Monmouthshire",
                      abbreviation: "MON",
                      country_id: "1226"
                  }
              ]
              })
          }
      }
    });

    p.then(
      function (result) {
        if (result.is_error) {
          deferred.reject(result);
        } else {
          deferred.resolve(result);
        }
      },
      function (error) {
        deferred.reject(error);
      }
    );

    return deferred.promise;
  };
});