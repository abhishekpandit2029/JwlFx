// This data we got from https://restcountries.com/v3.1/all?fields=idd,cca2 API

const callingCodes = [
  {
    cca2: "JM",
    idd: {
      root: "+1",
      suffixes: ["876", "658"],
    },
  },
  {
    cca2: "KM",
    idd: {
      root: "+2",
      suffixes: ["69"],
    },
  },
  {
    cca2: "ZW",
    idd: {
      root: "+2",
      suffixes: ["63"],
    },
  },
  {
    cca2: "SX",
    idd: {
      root: "+1",
      suffixes: ["721"],
    },
  },
  {
    cca2: "LA",
    idd: {
      root: "+8",
      suffixes: ["56"],
    },
  },
  {
    cca2: "LV",
    idd: {
      root: "+3",
      suffixes: ["71"],
    },
  },
  {
    cca2: "TJ",
    idd: {
      root: "+9",
      suffixes: ["92"],
    },
  },
  {
    cca2: "GB",
    idd: {
      root: "+4",
      suffixes: ["4"],
    },
  },
  {
    cca2: "NI",
    idd: {
      root: "+5",
      suffixes: ["05"],
    },
  },
  {
    cca2: "SD",
    idd: {
      root: "+2",
      suffixes: ["49"],
    },
  },
  {
    cca2: "GR",
    idd: {
      root: "+3",
      suffixes: ["0"],
    },
  },
  {
    cca2: "LT",
    idd: {
      root: "+3",
      suffixes: ["70"],
    },
  },
  {
    cca2: "RW",
    idd: {
      root: "+2",
      suffixes: ["50"],
    },
  },
  {
    cca2: "SN",
    idd: {
      root: "+2",
      suffixes: ["21"],
    },
  },
  {
    cca2: "MC",
    idd: {
      root: "+3",
      suffixes: ["77"],
    },
  },
  {
    cca2: "LS",
    idd: {
      root: "+2",
      suffixes: ["66"],
    },
  },
  {
    cca2: "TN",
    idd: {
      root: "+2",
      suffixes: ["16"],
    },
  },
  {
    cca2: "VU",
    idd: {
      root: "+6",
      suffixes: ["78"],
    },
  },
  {
    cca2: "EC",
    idd: {
      root: "+5",
      suffixes: ["93"],
    },
  },
  {
    cca2: "KW",
    idd: {
      root: "+9",
      suffixes: ["65"],
    },
  },
  {
    cca2: "PH",
    idd: {
      root: "+6",
      suffixes: ["3"],
    },
  },
  {
    cca2: "CL",
    idd: {
      root: "+5",
      suffixes: ["6"],
    },
  },
  {
    cca2: "BS",
    idd: {
      root: "+1",
      suffixes: ["242"],
    },
  },
  {
    cca2: "TZ",
    idd: {
      root: "+2",
      suffixes: ["55"],
    },
  },
  {
    cca2: "CR",
    idd: {
      root: "+5",
      suffixes: ["06"],
    },
  },
  {
    cca2: "MA",
    idd: {
      root: "+2",
      suffixes: ["12"],
    },
  },
  {
    cca2: "ME",
    idd: {
      root: "+3",
      suffixes: ["82"],
    },
  },
  {
    cca2: "FM",
    idd: {
      root: "+6",
      suffixes: ["91"],
    },
  },
  {
    cca2: "PT",
    idd: {
      root: "+3",
      suffixes: ["51"],
    },
  },
  {
    cca2: "AE",
    idd: {
      root: "+9",
      suffixes: ["71"],
    },
  },
  {
    cca2: "LY",
    idd: {
      root: "+2",
      suffixes: ["18"],
    },
  },
  {
    cca2: "LU",
    idd: {
      root: "+3",
      suffixes: ["52"],
    },
  },
  {
    cca2: "JE",
    idd: {
      root: "+4",
      suffixes: ["4"],
    },
  },
  {
    cca2: "SB",
    idd: {
      root: "+6",
      suffixes: ["77"],
    },
  },
  {
    cca2: "DZ",
    idd: {
      root: "+2",
      suffixes: ["13"],
    },
  },
  {
    cca2: "AG",
    idd: {
      root: "+1",
      suffixes: ["268"],
    },
  },
  {
    cca2: "SH",
    idd: {
      root: "+2",
      suffixes: ["90", "47"],
    },
  },
  {
    cca2: "BR",
    idd: {
      root: "+5",
      suffixes: ["5"],
    },
  },
  {
    cca2: "GS",
    idd: {
      root: "+5",
      suffixes: ["00"],
    },
  },
  {
    cca2: "ML",
    idd: {
      root: "+2",
      suffixes: ["23"],
    },
  },
  {
    cca2: "PK",
    idd: {
      root: "+9",
      suffixes: ["2"],
    },
  },
  {
    cca2: "TT",
    idd: {
      root: "+1",
      suffixes: ["868"],
    },
  },
  {
    cca2: "AM",
    idd: {
      root: "+3",
      suffixes: ["74"],
    },
  },
  {
    cca2: "BD",
    idd: {
      root: "+8",
      suffixes: ["80"],
    },
  },
  {
    cca2: "TC",
    idd: {
      root: "+1",
      suffixes: ["649"],
    },
  },
  {
    cca2: "TM",
    idd: {
      root: "+9",
      suffixes: ["93"],
    },
  },
  {
    cca2: "FO",
    idd: {
      root: "+2",
      suffixes: ["98"],
    },
  },
  {
    cca2: "PW",
    idd: {
      root: "+6",
      suffixes: ["80"],
    },
  },
  {
    cca2: "CU",
    idd: {
      root: "+5",
      suffixes: ["3"],
    },
  },
  {
    cca2: "TD",
    idd: {
      root: "+2",
      suffixes: ["35"],
    },
  },
  {
    cca2: "BA",
    idd: {
      root: "+3",
      suffixes: ["87"],
    },
  },
  {
    cca2: "BW",
    idd: {
      root: "+2",
      suffixes: ["67"],
    },
  },
  {
    cca2: "EE",
    idd: {
      root: "+3",
      suffixes: ["72"],
    },
  },
  {
    cca2: "IO",
    idd: {
      root: "+2",
      suffixes: ["46"],
    },
  },
  {
    cca2: "TF",
    idd: {
      root: "+2",
      suffixes: ["62"],
    },
  },
  {
    cca2: "GL",
    idd: {
      root: "+2",
      suffixes: ["99"],
    },
  },
  {
    cca2: "CX",
    idd: {
      root: "+6",
      suffixes: ["1"],
    },
  },
  {
    cca2: "PN",
    idd: {
      root: "+6",
      suffixes: ["4"],
    },
  },
  {
    cca2: "EH",
    idd: {
      root: "+2",
      suffixes: ["125288", "125289"],
    },
  },
  {
    cca2: "MS",
    idd: {
      root: "+1",
      suffixes: ["664"],
    },
  },
  {
    cca2: "BH",
    idd: {
      root: "+9",
      suffixes: ["73"],
    },
  },
  {
    cca2: "DO",
    idd: {
      root: "+1",
      suffixes: ["809", "829", "849"],
    },
  },
  {
    cca2: "US",
    idd: {
      root: "+1",
      suffixes: [
        "201",
        "202",
        "203",
        "205",
        "206",
        "207",
        "208",
        "209",
        "210",
        "212",
        "213",
        "214",
        "215",
        "216",
        "217",
        "218",
        "219",
        "220",
        "224",
        "225",
        "227",
        "228",
        "229",
        "231",
        "234",
        "239",
        "240",
        "248",
        "251",
        "252",
        "253",
        "254",
        "256",
        "260",
        "262",
        "267",
        "269",
        "270",
        "272",
        "274",
        "276",
        "281",
        "283",
        "301",
        "302",
        "303",
        "304",
        "305",
        "307",
        "308",
        "309",
        "310",
        "312",
        "313",
        "314",
        "315",
        "316",
        "317",
        "318",
        "319",
        "320",
        "321",
        "323",
        "325",
        "327",
        "330",
        "331",
        "334",
        "336",
        "337",
        "339",
        "346",
        "347",
        "351",
        "352",
        "360",
        "361",
        "364",
        "380",
        "385",
        "386",
        "401",
        "402",
        "404",
        "405",
        "406",
        "407",
        "408",
        "409",
        "410",
        "412",
        "413",
        "414",
        "415",
        "417",
        "419",
        "423",
        "424",
        "425",
        "430",
        "432",
        "434",
        "435",
        "440",
        "442",
        "443",
        "447",
        "458",
        "463",
        "464",
        "469",
        "470",
        "475",
        "478",
        "479",
        "480",
        "484",
        "501",
        "502",
        "503",
        "504",
        "505",
        "507",
        "508",
        "509",
        "510",
        "512",
        "513",
        "515",
        "516",
        "517",
        "518",
        "520",
        "530",
        "531",
        "534",
        "539",
        "540",
        "541",
        "551",
        "559",
        "561",
        "562",
        "563",
        "564",
        "567",
        "570",
        "571",
        "573",
        "574",
        "575",
        "580",
        "585",
        "586",
        "601",
        "602",
        "603",
        "605",
        "606",
        "607",
        "608",
        "609",
        "610",
        "612",
        "614",
        "615",
        "616",
        "617",
        "618",
        "619",
        "620",
        "623",
        "626",
        "628",
        "629",
        "630",
        "631",
        "636",
        "641",
        "646",
        "650",
        "651",
        "657",
        "660",
        "661",
        "662",
        "667",
        "669",
        "678",
        "681",
        "682",
        "701",
        "702",
        "703",
        "704",
        "706",
        "707",
        "708",
        "712",
        "713",
        "714",
        "715",
        "716",
        "717",
        "718",
        "719",
        "720",
        "724",
        "725",
        "727",
        "730",
        "731",
        "732",
        "734",
        "737",
        "740",
        "743",
        "747",
        "754",
        "757",
        "760",
        "762",
        "763",
        "765",
        "769",
        "770",
        "772",
        "773",
        "774",
        "775",
        "779",
        "781",
        "785",
        "786",
        "801",
        "802",
        "803",
        "804",
        "805",
        "806",
        "808",
        "810",
        "812",
        "813",
        "814",
        "815",
        "816",
        "817",
        "818",
        "828",
        "830",
        "831",
        "832",
        "843",
        "845",
        "847",
        "848",
        "850",
        "854",
        "856",
        "857",
        "858",
        "859",
        "860",
        "862",
        "863",
        "864",
        "865",
        "870",
        "872",
        "878",
        "901",
        "903",
        "904",
        "906",
        "907",
        "908",
        "909",
        "910",
        "912",
        "913",
        "914",
        "915",
        "916",
        "917",
        "918",
        "919",
        "920",
        "925",
        "928",
        "929",
        "930",
        "931",
        "934",
        "936",
        "937",
        "938",
        "940",
        "941",
        "947",
        "949",
        "951",
        "952",
        "954",
        "956",
        "959",
        "970",
        "971",
        "972",
        "973",
        "975",
        "978",
        "979",
        "980",
        "984",
        "985",
        "989",
      ],
    },
  },
  {
    cca2: "CK",
    idd: {
      root: "+6",
      suffixes: ["82"],
    },
  },
  {
    cca2: "CO",
    idd: {
      root: "+5",
      suffixes: ["7"],
    },
  },
  {
    cca2: "GN",
    idd: {
      root: "+2",
      suffixes: ["24"],
    },
  },
  {
    cca2: "IE",
    idd: {
      root: "+3",
      suffixes: ["53"],
    },
  },
  {
    cca2: "MV",
    idd: {
      root: "+9",
      suffixes: ["60"],
    },
  },
  {
    cca2: "PA",
    idd: {
      root: "+5",
      suffixes: ["07"],
    },
  },
  {
    cca2: "MZ",
    idd: {
      root: "+2",
      suffixes: ["58"],
    },
  },
  {
    cca2: "OM",
    idd: {
      root: "+9",
      suffixes: ["68"],
    },
  },
  {
    cca2: "CZ",
    idd: {
      root: "+4",
      suffixes: ["20"],
    },
  },
  {
    cca2: "HM",
    idd: {
      root: "",
      suffixes: [],
    },
  },
  {
    cca2: "VC",
    idd: {
      root: "+1",
      suffixes: ["784"],
    },
  },
  {
    cca2: "HT",
    idd: {
      root: "+5",
      suffixes: ["09"],
    },
  },
  {
    cca2: "NG",
    idd: {
      root: "+2",
      suffixes: ["34"],
    },
  },
  {
    cca2: "VG",
    idd: {
      root: "+1",
      suffixes: ["284"],
    },
  },
  {
    cca2: "NA",
    idd: {
      root: "+2",
      suffixes: ["64"],
    },
  },
  {
    cca2: "DM",
    idd: {
      root: "+1",
      suffixes: ["767"],
    },
  },
  {
    cca2: "CA",
    idd: {
      root: "+1",
      suffixes: [""],
    },
  },
  {
    cca2: "GG",
    idd: {
      root: "+4",
      suffixes: ["4"],
    },
  },
  {
    cca2: "NE",
    idd: {
      root: "+2",
      suffixes: ["27"],
    },
  },
  {
    cca2: "ID",
    idd: {
      root: "+6",
      suffixes: ["2"],
    },
  },
  {
    cca2: "YE",
    idd: {
      root: "+9",
      suffixes: ["67"],
    },
  },
  {
    cca2: "PS",
    idd: {
      root: "+9",
      suffixes: ["70"],
    },
  },
  {
    cca2: "GA",
    idd: {
      root: "+2",
      suffixes: ["41"],
    },
  },
  {
    cca2: "ER",
    idd: {
      root: "+2",
      suffixes: ["91"],
    },
  },
  {
    cca2: "CY",
    idd: {
      root: "+3",
      suffixes: ["57"],
    },
  },
  {
    cca2: "HK",
    idd: {
      root: "+8",
      suffixes: ["52"],
    },
  },
  {
    cca2: "BV",
    idd: {
      root: "+4",
      suffixes: ["7"],
    },
  },
  {
    cca2: "SK",
    idd: {
      root: "+4",
      suffixes: ["21"],
    },
  },
  {
    cca2: "SI",
    idd: {
      root: "+3",
      suffixes: ["86"],
    },
  },
  {
    cca2: "NU",
    idd: {
      root: "+6",
      suffixes: ["83"],
    },
  },
  {
    cca2: "KI",
    idd: {
      root: "+6",
      suffixes: ["86"],
    },
  },
  {
    cca2: "DE",
    idd: {
      root: "+4",
      suffixes: ["9"],
    },
  },
  {
    cca2: "XK",
    idd: {
      root: "+3",
      suffixes: ["83"],
    },
  },
  {
    cca2: "CI",
    idd: {
      root: "+2",
      suffixes: ["25"],
    },
  },
  {
    cca2: "LK",
    idd: {
      root: "+9",
      suffixes: ["4"],
    },
  },
  {
    cca2: "MF",
    idd: {
      root: "+5",
      suffixes: ["90"],
    },
  },
  {
    cca2: "BE",
    idd: {
      root: "+3",
      suffixes: ["2"],
    },
  },
  {
    cca2: "IL",
    idd: {
      root: "+9",
      suffixes: ["72"],
    },
  },
  {
    cca2: "AX",
    idd: {
      root: "+3",
      suffixes: ["5818"],
    },
  },
  {
    cca2: "MP",
    idd: {
      root: "+1",
      suffixes: ["670"],
    },
  },
  {
    cca2: "DK",
    idd: {
      root: "+4",
      suffixes: ["5"],
    },
  },
  {
    cca2: "BM",
    idd: {
      root: "+1",
      suffixes: ["441"],
    },
  },
  {
    cca2: "GI",
    idd: {
      root: "+3",
      suffixes: ["50"],
    },
  },
  {
    cca2: "SY",
    idd: {
      root: "+9",
      suffixes: ["63"],
    },
  },
  {
    cca2: "TL",
    idd: {
      root: "+6",
      suffixes: ["70"],
    },
  },
  {
    cca2: "SM",
    idd: {
      root: "+3",
      suffixes: ["78"],
    },
  },
  {
    cca2: "GM",
    idd: {
      root: "+2",
      suffixes: ["20"],
    },
  },
  {
    cca2: "PE",
    idd: {
      root: "+5",
      suffixes: ["1"],
    },
  },
  {
    cca2: "GW",
    idd: {
      root: "+2",
      suffixes: ["45"],
    },
  },
  {
    cca2: "SL",
    idd: {
      root: "+2",
      suffixes: ["32"],
    },
  },
  {
    cca2: "TR",
    idd: {
      root: "+9",
      suffixes: ["0"],
    },
  },
  {
    cca2: "BO",
    idd: {
      root: "+5",
      suffixes: ["91"],
    },
  },
  {
    cca2: "NO",
    idd: {
      root: "+4",
      suffixes: ["7"],
    },
  },
  {
    cca2: "CG",
    idd: {
      root: "+2",
      suffixes: ["42"],
    },
  },
  {
    cca2: "SZ",
    idd: {
      root: "+2",
      suffixes: ["68"],
    },
  },
  {
    cca2: "PY",
    idd: {
      root: "+5",
      suffixes: ["95"],
    },
  },
  {
    cca2: "UA",
    idd: {
      root: "+3",
      suffixes: ["80"],
    },
  },
  {
    cca2: "MY",
    idd: {
      root: "+6",
      suffixes: ["0"],
    },
  },
  {
    cca2: "TO",
    idd: {
      root: "+6",
      suffixes: ["76"],
    },
  },
  {
    cca2: "BJ",
    idd: {
      root: "+2",
      suffixes: ["29"],
    },
  },
  {
    cca2: "SE",
    idd: {
      root: "+4",
      suffixes: ["6"],
    },
  },
  {
    cca2: "TV",
    idd: {
      root: "+6",
      suffixes: ["88"],
    },
  },
  {
    cca2: "MN",
    idd: {
      root: "+9",
      suffixes: ["76"],
    },
  },
  {
    cca2: "ZA",
    idd: {
      root: "+2",
      suffixes: ["7"],
    },
  },
  {
    cca2: "CW",
    idd: {
      root: "+5",
      suffixes: ["99"],
    },
  },
  {
    cca2: "AU",
    idd: {
      root: "+6",
      suffixes: ["1"],
    },
  },
  {
    cca2: "KN",
    idd: {
      root: "+1",
      suffixes: ["869"],
    },
  },
  {
    cca2: "GH",
    idd: {
      root: "+2",
      suffixes: ["33"],
    },
  },
  {
    cca2: "IQ",
    idd: {
      root: "+9",
      suffixes: ["64"],
    },
  },
  {
    cca2: "VN",
    idd: {
      root: "+8",
      suffixes: ["4"],
    },
  },
  {
    cca2: "GY",
    idd: {
      root: "+5",
      suffixes: ["92"],
    },
  },
  {
    cca2: "AZ",
    idd: {
      root: "+9",
      suffixes: ["94"],
    },
  },
  {
    cca2: "CM",
    idd: {
      root: "+2",
      suffixes: ["37"],
    },
  },
  {
    cca2: "EG",
    idd: {
      root: "+2",
      suffixes: ["0"],
    },
  },
  {
    cca2: "IS",
    idd: {
      root: "+3",
      suffixes: ["54"],
    },
  },
  {
    cca2: "VE",
    idd: {
      root: "+5",
      suffixes: ["8"],
    },
  },
  {
    cca2: "BB",
    idd: {
      root: "+1",
      suffixes: ["246"],
    },
  },
  {
    cca2: "FK",
    idd: {
      root: "+5",
      suffixes: ["00"],
    },
  },
  {
    cca2: "MW",
    idd: {
      root: "+2",
      suffixes: ["65"],
    },
  },
  {
    cca2: "KG",
    idd: {
      root: "+9",
      suffixes: ["96"],
    },
  },
  {
    cca2: "TW",
    idd: {
      root: "+8",
      suffixes: ["86"],
    },
  },
  {
    cca2: "BG",
    idd: {
      root: "+3",
      suffixes: ["59"],
    },
  },
  {
    cca2: "KP",
    idd: {
      root: "+8",
      suffixes: ["50"],
    },
  },
  {
    cca2: "AD",
    idd: {
      root: "+3",
      suffixes: ["76"],
    },
  },
  {
    cca2: "AO",
    idd: {
      root: "+2",
      suffixes: ["44"],
    },
  },
  {
    cca2: "BL",
    idd: {
      root: "+5",
      suffixes: ["90"],
    },
  },
  {
    cca2: "RU",
    idd: {
      root: "+7",
      suffixes: ["3", "4", "5", "8", "9"],
    },
  },
  {
    cca2: "BF",
    idd: {
      root: "+2",
      suffixes: ["26"],
    },
  },
  {
    cca2: "VA",
    idd: {
      root: "+3",
      suffixes: ["906698", "79"],
    },
  },
  {
    cca2: "IM",
    idd: {
      root: "+4",
      suffixes: ["4"],
    },
  },
  {
    cca2: "AF",
    idd: {
      root: "+9",
      suffixes: ["3"],
    },
  },
  {
    cca2: "HR",
    idd: {
      root: "+3",
      suffixes: ["85"],
    },
  },
  {
    cca2: "BT",
    idd: {
      root: "+9",
      suffixes: ["75"],
    },
  },
  {
    cca2: "BY",
    idd: {
      root: "+3",
      suffixes: ["75"],
    },
  },
  {
    cca2: "CC",
    idd: {
      root: "+6",
      suffixes: ["1"],
    },
  },
  {
    cca2: "NZ",
    idd: {
      root: "+6",
      suffixes: ["4"],
    },
  },
  {
    cca2: "MG",
    idd: {
      root: "+2",
      suffixes: ["61"],
    },
  },
  {
    cca2: "TH",
    idd: {
      root: "+6",
      suffixes: ["6"],
    },
  },
  {
    cca2: "GE",
    idd: {
      root: "+9",
      suffixes: ["95"],
    },
  },
  {
    cca2: "IN",
    idd: {
      root: "+9",
      suffixes: ["1"],
    },
  },
  {
    cca2: "CN",
    idd: {
      root: "+8",
      suffixes: ["6"],
    },
  },
  {
    cca2: "PM",
    idd: {
      root: "+5",
      suffixes: ["08"],
    },
  },
  {
    cca2: "PR",
    idd: {
      root: "+1",
      suffixes: ["787", "939"],
    },
  },
  {
    cca2: "DJ",
    idd: {
      root: "+2",
      suffixes: ["53"],
    },
  },
  {
    cca2: "SA",
    idd: {
      root: "+9",
      suffixes: ["66"],
    },
  },
  {
    cca2: "IR",
    idd: {
      root: "+9",
      suffixes: ["8"],
    },
  },
  {
    cca2: "ZM",
    idd: {
      root: "+2",
      suffixes: ["60"],
    },
  },
  {
    cca2: "ET",
    idd: {
      root: "+2",
      suffixes: ["51"],
    },
  },
  {
    cca2: "MO",
    idd: {
      root: "+8",
      suffixes: ["53"],
    },
  },
  {
    cca2: "GT",
    idd: {
      root: "+5",
      suffixes: ["02"],
    },
  },
  {
    cca2: "MQ",
    idd: {
      root: "+5",
      suffixes: ["96"],
    },
  },
  {
    cca2: "SR",
    idd: {
      root: "+5",
      suffixes: ["97"],
    },
  },
  {
    cca2: "UY",
    idd: {
      root: "+5",
      suffixes: ["98"],
    },
  },
  {
    cca2: "IT",
    idd: {
      root: "+3",
      suffixes: ["9"],
    },
  },
  {
    cca2: "NC",
    idd: {
      root: "+6",
      suffixes: ["87"],
    },
  },
  {
    cca2: "FJ",
    idd: {
      root: "+6",
      suffixes: ["79"],
    },
  },
  {
    cca2: "AW",
    idd: {
      root: "+2",
      suffixes: ["97"],
    },
  },
  {
    cca2: "ST",
    idd: {
      root: "+2",
      suffixes: ["39"],
    },
  },
  {
    cca2: "CH",
    idd: {
      root: "+4",
      suffixes: ["1"],
    },
  },
  {
    cca2: "CD",
    idd: {
      root: "+2",
      suffixes: ["43"],
    },
  },
  {
    cca2: "FI",
    idd: {
      root: "+3",
      suffixes: ["58"],
    },
  },
  {
    cca2: "MT",
    idd: {
      root: "+3",
      suffixes: ["56"],
    },
  },
  {
    cca2: "SV",
    idd: {
      root: "+5",
      suffixes: ["03"],
    },
  },
  {
    cca2: "JO",
    idd: {
      root: "+9",
      suffixes: ["62"],
    },
  },
  {
    cca2: "TK",
    idd: {
      root: "+6",
      suffixes: ["90"],
    },
  },
  {
    cca2: "NR",
    idd: {
      root: "+6",
      suffixes: ["74"],
    },
  },
  {
    cca2: "PL",
    idd: {
      root: "+4",
      suffixes: ["8"],
    },
  },
  {
    cca2: "MR",
    idd: {
      root: "+2",
      suffixes: ["22"],
    },
  },
  {
    cca2: "WF",
    idd: {
      root: "+6",
      suffixes: ["81"],
    },
  },
  {
    cca2: "AQ",
    idd: {
      root: "",
      suffixes: [],
    },
  },
  {
    cca2: "GU",
    idd: {
      root: "+1",
      suffixes: ["671"],
    },
  },
  {
    cca2: "MK",
    idd: {
      root: "+3",
      suffixes: ["89"],
    },
  },
  {
    cca2: "TG",
    idd: {
      root: "+2",
      suffixes: ["28"],
    },
  },
  {
    cca2: "MM",
    idd: {
      root: "+9",
      suffixes: ["5"],
    },
  },
  {
    cca2: "QA",
    idd: {
      root: "+9",
      suffixes: ["74"],
    },
  },
  {
    cca2: "FR",
    idd: {
      root: "+3",
      suffixes: ["3"],
    },
  },
  {
    cca2: "YT",
    idd: {
      root: "+2",
      suffixes: ["62"],
    },
  },
  {
    cca2: "NF",
    idd: {
      root: "+6",
      suffixes: ["72"],
    },
  },
  {
    cca2: "SC",
    idd: {
      root: "+2",
      suffixes: ["48"],
    },
  },
  {
    cca2: "MD",
    idd: {
      root: "+3",
      suffixes: ["73"],
    },
  },
  {
    cca2: "SS",
    idd: {
      root: "+2",
      suffixes: ["11"],
    },
  },
  {
    cca2: "BN",
    idd: {
      root: "+6",
      suffixes: ["73"],
    },
  },
  {
    cca2: "JP",
    idd: {
      root: "+8",
      suffixes: ["1"],
    },
  },
  {
    cca2: "GD",
    idd: {
      root: "+1",
      suffixes: ["473"],
    },
  },
  {
    cca2: "ES",
    idd: {
      root: "+3",
      suffixes: ["4"],
    },
  },
  {
    cca2: "BQ",
    idd: {
      root: "+5",
      suffixes: ["99"],
    },
  },
  {
    cca2: "PG",
    idd: {
      root: "+6",
      suffixes: ["75"],
    },
  },
  {
    cca2: "UZ",
    idd: {
      root: "+9",
      suffixes: ["98"],
    },
  },
  {
    cca2: "AR",
    idd: {
      root: "+5",
      suffixes: ["4"],
    },
  },
  {
    cca2: "KR",
    idd: {
      root: "+8",
      suffixes: ["2"],
    },
  },
  {
    cca2: "BZ",
    idd: {
      root: "+5",
      suffixes: ["01"],
    },
  },
  {
    cca2: "RE",
    idd: {
      root: "+2",
      suffixes: ["62"],
    },
  },
  {
    cca2: "MX",
    idd: {
      root: "+5",
      suffixes: ["2"],
    },
  },
  {
    cca2: "VI",
    idd: {
      root: "+1",
      suffixes: ["340"],
    },
  },
  {
    cca2: "RS",
    idd: {
      root: "+3",
      suffixes: ["81"],
    },
  },
  {
    cca2: "UM",
    idd: {
      root: "+2",
      suffixes: ["68"],
    },
  },
  {
    cca2: "CV",
    idd: {
      root: "+2",
      suffixes: ["38"],
    },
  },
  {
    cca2: "KH",
    idd: {
      root: "+8",
      suffixes: ["55"],
    },
  },
  {
    cca2: "RO",
    idd: {
      root: "+4",
      suffixes: ["0"],
    },
  },
  {
    cca2: "HU",
    idd: {
      root: "+3",
      suffixes: ["6"],
    },
  },
  {
    cca2: "MH",
    idd: {
      root: "+6",
      suffixes: ["92"],
    },
  },
  {
    cca2: "SO",
    idd: {
      root: "+2",
      suffixes: ["52"],
    },
  },
  {
    cca2: "AL",
    idd: {
      root: "+3",
      suffixes: ["55"],
    },
  },
  {
    cca2: "PF",
    idd: {
      root: "+6",
      suffixes: ["89"],
    },
  },
  {
    cca2: "BI",
    idd: {
      root: "+2",
      suffixes: ["57"],
    },
  },
  {
    cca2: "CF",
    idd: {
      root: "+2",
      suffixes: ["36"],
    },
  },
  {
    cca2: "GF",
    idd: {
      root: "+5",
      suffixes: ["94"],
    },
  },
  {
    cca2: "AS",
    idd: {
      root: "+1",
      suffixes: ["684"],
    },
  },
  {
    cca2: "LC",
    idd: {
      root: "+1",
      suffixes: ["758"],
    },
  },
  {
    cca2: "UG",
    idd: {
      root: "+2",
      suffixes: ["56"],
    },
  },
  {
    cca2: "HN",
    idd: {
      root: "+5",
      suffixes: ["04"],
    },
  },
  {
    cca2: "KZ",
    idd: {
      root: "+7",
      suffixes: ["6", "7"],
    },
  },
  {
    cca2: "KE",
    idd: {
      root: "+2",
      suffixes: ["54"],
    },
  },
  {
    cca2: "WS",
    idd: {
      root: "+6",
      suffixes: ["85"],
    },
  },
  {
    cca2: "NP",
    idd: {
      root: "+9",
      suffixes: ["77"],
    },
  },
  {
    cca2: "GQ",
    idd: {
      root: "+2",
      suffixes: ["40"],
    },
  },
  {
    cca2: "LB",
    idd: {
      root: "+9",
      suffixes: ["61"],
    },
  },
  {
    cca2: "MU",
    idd: {
      root: "+2",
      suffixes: ["30"],
    },
  },
  {
    cca2: "LI",
    idd: {
      root: "+4",
      suffixes: ["23"],
    },
  },
  {
    cca2: "KY",
    idd: {
      root: "+1",
      suffixes: ["345"],
    },
  },
  {
    cca2: "AI",
    idd: {
      root: "+1",
      suffixes: ["264"],
    },
  },
  {
    cca2: "GP",
    idd: {
      root: "+5",
      suffixes: ["90"],
    },
  },
  {
    cca2: "AT",
    idd: {
      root: "+4",
      suffixes: ["3"],
    },
  },
  {
    cca2: "NL",
    idd: {
      root: "+3",
      suffixes: ["1"],
    },
  },
  {
    cca2: "SJ",
    idd: {
      root: "+4",
      suffixes: ["779"],
    },
  },
  {
    cca2: "SG",
    idd: {
      root: "+6",
      suffixes: ["5"],
    },
  },
  {
    cca2: "LR",
    idd: {
      root: "+2",
      suffixes: ["31"],
    },
  },
];

export const callingCodeData = callingCodes.flatMap((item) => {
  const root = item?.idd?.root || "";
  const suffixes = item?.idd?.suffixes || [];

  return suffixes.map((suffix) => root + suffix);
});
