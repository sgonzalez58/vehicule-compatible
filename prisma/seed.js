import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
	let marques = [
        "Alfa Romeo", 
        "Audi",
        "BMW",
        "Citroen",
        "Courb",
        "Cupra",
        "Dacia",
        "Fiat",
        "Ford",
        "Honda",
        "Hyundai",
        "Infiniti",
        "Isuzu",
        "Iveco",
        "Jeep",
        "Kia",
        "Lancia",
        "Land Rover",
        "Lexus",
        "Mazda",
        "Mercedes",
        "Mini",
        "Mitsubishi",
        "Nissan",
        "Opel",
        "Peugeot",
        "Piaggio",
        "Renault",
        "Rover",
        "Saab",
        "Seat",
        "Skoda",
        "Subaru",
        "Suzuki",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo"
    ];
    let modeles = [
        "Alfa Romeo Giulietta",
        "Alfa Romeo Giulia",
        "Alfa Romeo Stelvio",
        "Alfa Romeo Mito",
        "Alfa Romeo Sportwagon",
        "Audi A1",
        "Audi A1 II",
        "Audi A2",
        "Audi A3",
        "Audi A3 IV",
        "Audi A3 Sportback",
        "Audi A4",
        "Audi A4 III - IV",
        "Audi A4 V",
        "Audi A5",
        "Audi A5 Sportback",
        "Audi A6",
        "Audi A6 III",
        "Audi A6 IV",
        "Audi A6 V",
        "Audi A7",
        "Audi A8",
        "Audi Allroad",
        "Audi Cabriolet",
        "Audi Coupe",
        "Audi E-Tron",
        "Audi E-Tron GT",
        "Audi GT",
        "Audi Q2",
        "Audi Q3",
        "Audi Q3 II",
        "Audi Q4 E-Tron",
        "Audi Q5",
        "Audi Q7",
        "Audi Q8",
        "Audi Quattro",
        "Audi R8",
        "Audi RS3",
        "Audi RS4",
        "Audi RS5",
        "Audi RS6",
        "Audi RS7",
        "Audi S1",
        "Audi S3",
        "Audi S3 IV",
        "Audi S3 Sportback",
        "Audi TT",
        "BMW I3",
        "BMW I8",
        "BMW IX",
        "BMW Serie 1",
        "BMW Serie 1 II",
        "BMW Serie 1 III",
        "BMW Serie 2",
        "BMW Serie 2 Active Tourer",
        "BMW Serie 2 II",
        "BMW Serie 3",
        "BMW Serie 3 (Suite)",
        "BMW Serie 3 VI",
        "BMW Serie 3 VII",
        "BMW Serie 4",
        "BMW Serie 4 II",
        "BMW Serie 5",
        "BMW Serie 6",
        "BMW Serie 7",
        "BMW Serie 8",
        "BMW X1",
        "BMW X2",
        "BMW X3",
        "BMW X4",
        "BMW X4 II",
        "BMW X5",
        "BMW X5 IV",
        "BMW X6",
        "BMW X6 ii",
        "BMW X7",
        "BMW Z1",
        "BMW Z3",
        "BMW Z4",
        "BMW Z8",
        "Citroen 2 CV",
        "Citroen Acadiane",
        "Citroen AK",
        "Citroen AMI",
        "Citroen AX",
        "Citroen Axel",
        "Citroen Azu",
        "Citroen Berlingo",
        "Citroen Berlingo II",
        "Citroen Berlingo III",
        "Citroen BX",
        "Citroen C-Crosser",
        "Citroen C-Elysee",
        "Citroen C-Zero",
        "Citroen C1",
        "Citroen C15",
        "Citroen C2",
        "Citroen C25",
        "Citroen C25 Combi",
        "Citroen C3",
        "Citroen C3 Aircross",
        "Citroen C3 II",
        "Citroen C3 III",
        "Citroen C3 Picasso",
        "Citroen C3 Pluriel",
        "Citroen C35",
        "Citroen C4",
        "Citroen C4 Aircross",
        "Citroen C4 Cactus",
        "Citroen C4 II",
        "Citroen C4 III",
        "Citroen C4 Picasso",
        "Citroen C4 Picasso II",
        "Citroen C4 Spacetourer",
        "Citroen C5",
        "Citroen C5 Aircross",
        "Citroen C5 II",
        "Citroen C5 II Tourer",
        "Citroen C5 X",
        "Citroen C6",
        "Citroen C8",
        "Citroen CX",
        "Citroen CX Serie 2",
        "Citroen D",
        "Citroen Dangel C15",
        "Citroen Dangel C25",
        "Citroen DS",
        "Citroen DS3",
        "Citroen DS4",
        "Citroen DS5",
        "Citroen Dyane",
        "Citroen Evasion",
        "Citroen Jumper",
        "Citroen Jumpy",
        "Citroen Katar",
        "Citroen LN",
        "Citroen LNA",
        "Citroen Mehari",
        "Citroen Nemo",
        "Citroen Saxo",
        "Citroen SM",
        "Citroen Spacetourer",
        "Citroen Tangara",
        "Citroen Traction",
        "Citroen Visa",
        "Citroen Xantia",
        "Citroen XM",
        "Citroen Xsara",
        "Citroen Xsara Picasso",
        "Citroen ZX",
        "Courb C-Zen",
        "Cupra Ateca",
        "Cupra Formentor",
        "Cupra Leon",
        "Dacia Dokker",
        "Dacia Duster",
        "Dacia Jogger",
        "Dacia Lodgy",
        "Dacia Logan",
        "Dacia Sandero",
        "Dacia Sandero III",
        "Dacia Spring",
        "Fiat 500",
        "Fiat 500 III",
        "Fiat 500L",
        "Fiat 500X",
        "Fiat Doblo",
        "Fiat Ducato",
        "Fiat Fiorino",
        "Fiat Fiorino Qubo",
        "Fiat Freemont",
        "Fiat Fullback",
        "Fiat Grande Punto",
        "Fiat Idea",
        "Fiat Multipla",
        "Fiat Panda",
        "Fiat Punto",
        "Fiat Punto Evo",
        "Fiat Scudo",
        "Fiat Sedici",
        "Fiat Seicento",
        "Fiat Stilo",
        "Fiat Strada",
        "Fiat Talento",
        "Fiat Tipo",
        "Fiat Ulysse",
        "Fiat Uno",
        "Ford Aerostar",
        "Ford Courrier",
        "Ford Ecosport",
        "Ford Edge",
        "Ford Explorer",
        "Ford Fiesta",
        "Ford Focus",
        "Ford Focus C-Max",
        "Ford Focus IV",
        "Ford Fusion",
        "Ford Galaxy",
        "Ford KA",
        "Ford KA+",
        "Ford Kuga",
        "Ford Kuga III",
        "Ford Maverick",
        "Ford Mondeo",
        "Ford Mustang",
        "Ford Mustang Mach-E",
        "Ford Puma",
        "Ford Puma II",
        "Ford Ranger",
        "Ford S-Max",
        "Ford Tourneo",
        "Ford Tourneo Connect",
        "Ford Tourneo Courier",
        "Ford Tourneo Custom",
        "Ford Transit",
        "Ford Transit Connect",
        "Ford Transit Courier",
        "Ford Transit Custom",
        "Ford Transit VI",
        "Honda Accord",
        "Honda Civic",
        "Honda CR-V",
        "Honda CR-V 5",
        "Honda E",
        "Honda FR-V",
        "Honda HR-V",
        "Honda Insight",
        "Honda Jazz",
        "Honda Jazz IV",
        "Honda Shuttle",
        "Honda Stream",
        "Hyundai Accent",
        "Hyundai Atos",
        "Hyundai Coupe",
        "Hyundai Galloper",
        "Hyundai Genesis",
        "Hyundai Getz",
        "Hyundai H-1",
        "Hyundai H100",
        "Hyundai I10",
        "Hyundai I10 III",
        "Hyundai I20",
        "Hyundai I20 III",
        "Hyundai I30",
        "Hyundai I40",
        "Hyundai Ioniq",
        "Hyundai Ioniq 5",
        "Hyundai IX20",
        "Hyundai IX35",
        "Hyundai IX55",
        "Hyundai Kona",
        "Hyundai Lantra",
        "Hyundai Matrix",
        "Hyundai Sante Fe",
        "Hyundai Satellite",
        "Hyundai Sonata",
        "Hyundai Terracan",
        "Hyundai Traget",
        "Hyundai Tucson",
        "Hyundai Tucson IV",
        "Hyundai Veloster",
        "Hyundai XG",
        "Infiniti EX",
        "Infiniti FX",
        "Infiniti G",
        "Infiniti M",
        "Infiniti Q30",
        "Infiniti Q50",
        "Infiniti Q60",
        "Infiniti Q70",
        "Infiniti QX50",
        "Infiniti QX70",
        "Isuzu D-Max",
        "Isuzu Serie N",
        "Isuzu Trooper",
        "Iveco Daily",
        "Iveco Massif",
        "Jeep Cherokee",
        "Jeep Commander",
        "Jeep Compass",
        "Jeep Grand Cherokee",
        "Jeep Patriot",
        "Jeep Renegade",
        "Jeep Wrangler",
        "Jeep Wrangler IV",
        "Kia Besta",
        "Kia Carens",
        "Kia Carnival",
        "Kia Ceed",
        "Kia Ceed III",
        "Kia Cerato",
        "Kia E-Soul",
        "Kia Magentis",
        "Kia Niro",
        "Kia Opirus",
        "Kia Optima",
        "Kia Picanto",
        "Kia Pregio",
        "Kia Pride",
        "Kia Rio",
        "Kia Sorento",
        "Kia Sorento IV",
        "Kia Soul",
        "Kia Sportage",
        "Kia Stinger",
        "Kia Stonic",
        "Kia Venga",
        "Lancia Musa",
        "Lancia Phedra",
        "Lancia Thema",
        "Lancia Thesis",
        "Lancia Trevi",
        "Lancia Voyager",
        "Lancia Y",
        "Lancia Y10",
        "Lancia Ypsilon",
        "Lancia Zeta",
        "Land Rover 110",
        "Land Rover 88",
        "Land Rover 90",
        "Land Rover Defender",
        "Land Rover Defender II",
        "Land Rover Discovery",
        "Land Rover Discovery Sport",
        "Land Rover Evoque",
        "Land Rover Evoque II",
        "Land Rover Freelander",
        "Land Rover Range 4x4",
        "Land Rover Range Rover Sport",
        "Land Rover Velar",
        "Lexus CT",
        "Lexus ES",
        "Lexus GS",
        "Lexus IS",
        "Lexus IS Sportcross",
        "Lexus LC",
        "Lexus LS",
        "Lexus LS II",
        "Lexus NX",
        "Lexus RC",
        "Lexus RX",
        "Lexus SC",
        "Lexus UX",
        "Mazda 1000",
        "Mazda 1200",
        "Mazda 121",
        "Mazda 1800",
        "Mazda 323",
        "Mazda 616",
        "Mazda 626",
        "Mazda 818",
        "Mazda 929",
        "Mazda Bongo",
        "Mazda BT50",
        "Mazda CX-3",
        "Mazda CX-30",
        "Mazda CX-5",
        "Mazda CX-7",
        "Mazda Demio",
        "Mazda E2200",
        "Mazda 2",
        "Mazda 3",
        "Mazda 3 IV",
        "Mazda 5",
        "Mazda 6",
        "Mazda Minibus",
        "Mazda MPV",
        "Mazda MX-30",
        "Mazda MX3",
        "Mazda MX5",
        "Mazda MX6",
        "Mazda Pick-Up",
        "Mazda Premacy",
        "Mazda Tribute",
        "Mazda Xedos 6",
        "Mazda Xedos 9",
        "Mercedes Citan",
        "Mercedes Classe A",
        "Mercedes Classe A IV",
        "Mercedes Classe B",
        "Mercedes Classe B III",
        "Mercedes Classe C",
        "Mercedes Classe C III",
        "Mercedes Classe C IV",
        "Mercedes Classe C V",
        "Mercedes Classe CL",
        "Mercedes Classe CLA",
        "Mercedes Classe CLA II",
        "Mercedes Classe CLC",
        "Mercedes Classe CLK",
        "Mercedes Classe CLS",
        "Mercedes Classe E",
        "Mercedes Classe E IV",
        "Mercedes Classe E V",
        "Mercedes Classe EQA",
        "Mercedes Classe EQC",
        "Mercedes Classe EQV",
        "Mercedes Classe G",
        "Mercedes Classe G II",
        "Mercedes Classe GL",
        "Mercedes Classe GLA",
        "Mercedes Classe GLA II",
        "Mercedes Classe GLB",
        "Mercedes Classe GLC",
        "Mercedes Classe GLE",
        "Mercedes Classe GLE II",
        "Mercedes Classe GLK",
        "Mercedes Classe GLS",
        "Mercedes Classe GLS II",
        "Mercedes Classe M",
        "Mercedes Classe R",
        "Mercedes Classe S",
        "Mercedes Classe S V",
        "Mercedes Classe SL",
        "Mercedes Classe SLC",
        "Mercedes Classe SLK",
        "Mercedes Classe T",
        "Mercedes Classe V",
        "Mercedes Classe X",
        "Mercedes MB100",
        "Mercedes SPrinter",
        "Mercedes Vaneo",
        "Mercedes Vario Plus",
        "Mercedes Viano",
        "Mercedes Vito",
        "Mini Countryman",
        "Mini Mini",
        "Mini Mini Clubman",
        "Mini Paceman",
        "Mitsubishi ASX",
        "Mitsubishi Carisma",
        "Mitsubishi Colt",
        "Mitsubishi Eclipse Cross",
        "Mitsubishi Estate",
        "Mitsubishi Galant",
        "Mitsubishi Grandis",
        "Mitsubishi L200",
        "Mitsubishi Montero",
        "Mitsubishi Outlander",
        "Mitsubishi Pajero",
        "Mitsubishi Space Runner",
        "Mitsubishi Space Star",
        "Mitsubishi Space Star II",
        "Mitsubishi Space Wagon",
        "Nissan 100 NX",
        "Nissan Almera",
        "Nissan Almera Tino",
        "Nissan Cube",
        "Nissan Interstar",
        "Nissan Juke",
        "Nissan Juke II",
        "Nissan King-Cab",
        "Nissan Kubistar",
        "Nissan Leaf",
        "Nissan Maxima",
        "Nissan Maxima QX",
        "Nissan Micra",
        "Nissan Murano",
        "Nissan Navara",
        "Nissan Note",
        "Nissan NP300",
        "Nissan NV200",
        "Nissan NV250",
        "Nissan NV300",
        "Nissan NV400",
        "Nissan Pathfinder",
        "Nissan Patrol",
        "Nissan Pick-Up",
        "Nissan Pixo",
        "Nissan Primastar",
        "Nissan Primera",
        "Nissan Pulsar",
        "Nissan Qashqai",
        "Nissan Qashqai III",
        "Nissan Serena",
        "Nissan Sunny",
        "Nissan Terrano",
        "Nissan Terrano II",
        "Nissan Tino",
        "Nissan Urvan",
        "Nissan Vanette",
        "Nissan X-Trail",
        "Opel Adam",
        "Opel Agila",
        "Opel Ampera",
        "Opel Antara",
        "Opel Astra",
        "Opel Campo",
        "Opel Combo",
        "Opel Combo III",
        "Opel Combo Life",
        "Opel Corsa",
        "Opel Corsa VI",
        "Opel Corsa Van",
        "Opel Crossland X",
        "Opel Frontera",
        "Opel Grandland X",
        "Opel Insignia",
        "Opel Karl",
        "Opel Meriva",
        "Opel Mokka",
        "Opel Mokka II",
        "Opel Monterey",
        "Opel Movano",
        "Opel Omega",
        "Opel Signum",
        "Opel Sintra",
        "Opel Vectra",
        "Opel Vivaro",
        "Opel Vivaro III",
        "Opel Zafira",
        "Opel Zafira Life",
        "Peugeot 1007",
        "Peugeot 106",
        "Peugeot 107",
        "Peugeot 108",
        "Peugeot 2008",
        "Peugeot 2008 II",
        "Peugeot 205",
        "Peugeot 206",
        "Peugeot 207",
        "Peugeot 208",
        "Peugeot 208 II",
        "Peugeot 3008",
        "Peugeot 306",
        "Peugeot 307",
        "Peugeot 308",
        "Peugeot 308 III",
        "Peugeot 309",
        "Peugeot 4007",
        "Peugeot 4008",
        "Peugeot 406",
        "Peugeot 407",
        "Peugeot 5008",
        "Peugeot 508",
        "Peugeot 508 II",
        "Peugeot 607",
        "Peugeot 806",
        "Peugeot 807",
        "Peugeot Bipper",
        "Peugeot Boxer",
        "Peugeot Dangel 504",
        "Peugeot Dangel 505",
        "Peugeot Dangel J5",
        "Peugeot Expert",
        "Peugeot J5",
        "Peugeot J5 Combi",
        "Peugeot J7",
        "Peugeot J9",
        "Peugeot P4",
        "Peugeot Partner",
        "Peugeot Partner II",
        "Peugeot Partner III",
        "Peugeot Rifter",
        "Peugeot Traveller",
        "Piaggio Porter",
        "Renault Alaskan",
        "Renault Arkana",
        "Renault Avantime",
        "Renault B110",
        "Renault B120",
        "Renault B70",
        "Renault B80",
        "Renault B90",
        "Renault Captur",
        "Renault Captur II",
        "Renault Cherokee",
        "Renault Clio",
        "Renault Clio III",
        "Renault Clio III Estate",
        "Renault Clio IV",
        "Renault Clio IV Estate",
        "Renault Clio V",
        "Renault Dauphinois",
        "Renault Espace",
        "Renault Espace IV",
        "Renault Espace V",
        "Renault Estafette",
        "Renault Express",
        "Renault Fluence",
        "Renault Grand Espace",
        "Renault Grand Espace IV",
        "Renault Grand Scenic",
        "Renault Jeep CJ7",
        "Renault Juvaquatre",
        "Renault Kadjar",
        "Renault Kangoo",
        "Renault Kangoo Express",
        "Renault Kangoo Express II",
        "Renault Kangoo II",
        "Renault Kangoo III",
        "Renault Koleos",
        "Renault Laguna",
        "Renault Laguna II",
        "Renault Laguna II Estate",
        "Renault Laguna III",
        "Renault Laguana III Estate",
        "Renault Laguna Nevada",
        "Renault Latitude",
        "Renault Mascott",
        "Renault Master",
        "Renault Master III",
        "Renault Megane",
        "Renault Megane II",
        "Renault Megane II Estate",
        "Renault Megane III",
        "Renault Megane III Estate",
        "Renault Megane IV",
        "Renault Messenger",
        "Renault Modus",
        "Renault Prairie",
        "Renault R21 Nevada",
        "Renault R25",
        "Renault R30",
        "Renault R4",
        "Renault R5",
        "Renault R6",
        "Renault Redeo",
        "Renault Savane",
        "Renault Saviem",
        "Renault Scenic",
        "Renault Scenic II",
        "Renault Scenic III",
        "Renault Scenic IV",
        "Renault Supercinq",
        "Renault Talisman",
        "Renault Trafic",
        "Renault Trafic III",
        "Renault Twingo",
        "Renault Twingo II",
        "Renault Twingo III",
        "Renault Vel Satis",
        "Renault Wrangler",
        "Renault Zoe",
        "Rover 111",
        "Rover 114",
        "Rover 115",
        "Rover 200",
        "Rover 25",
        "Rover Estate",
        "Rover Freight",
        "Rover Streewise",
        "Saab 9-3",
        "Seat Alhambra",
        "Seat Altea",
        "Seat Altea XL",
        "Seat Arona",
        "Seat Arosa",
        "Seat Ateca",
        "Seat Cordoba",
        "Seat Exeo",
        "Seat Ibiza",
        "Seat Inca",
        "Seat Leon",
        "Seat Leon IV",
        "Seat Mii",
        "Seat Terraco",
        "Seat Terra",
        "Seat Toledo",
        "Skoda Citigo",
        "Skoda Enyaq",
        "Skoda Fabia",
        "Skoda Fabia IV",
        "Skoda Kamiq",
        "Skoda Karoq",
        "Skoda Kodiaq",
        "Skoda Octavia",
        "Skoda Octavia IV",
        "Skoda Rapid",
        "Skoda Roomster",
        "Skoda Scala",
        "Skoda Superb",
        "Skoda Yeti",
        "Subaru B9 Tribeca",
        "Subaru Forester",
        "Subaru Forester V",
        "Subaru G3x Justy",
        "Subaru Justy",
        "Subaru Legacy",
        "Subaru Levorg",
        "Subaru Outback",
        "Subaru Outback VI",
        "Subaru Trezia",
        "Subaru XV",
        "Subaru XV II",
        "Suzuki Across",
        "Suzuki Baleno",
        "Suzuki Celerio",
        "Suzuki Grand Vitara",
        "Suzuki Jimny",
        "Suzuki Jimny II",
        "Suzuki S-Cross",
        "Suzuki Samurai",
        "Suzuki Splash",
        "Suzuki Supercarry",
        "Suzuki Swace",
        "Suzuki Swift",
        "Suzuki SX4",
        "Suzuki Vitara",
        "Tesla Model 3",
        "Tesla Model S",
        "Tesla Model X",
        "Tesla Model Y",
        "Toyota Auris",
        "Toyota C-HR",
        "Toyota Corolla",
        "Toyota Corolla Verso",
        "Toyota Corolla X",
        "Toyota Funcruiser",
        "Toyota Hi-Ace",
        "Toyota HI-Lux",
        "Toyota Highlander",
        "Toyota Landcruiser",
        "Toyota Lite Ace",
        "Toyota Modele F",
        "Toyota Picnic",
        "Toyota Previa",
        "Toyota Proace",
        "Toyota Proace City",
        "Toyota RAV4",
        "Toyota RAV4 III",
        "Toyota RAV4 IV",
        "Toyota RAV4 V",
        "Toyota Runner",
        "Toyota Urban Cruiser",
        "Toyota Verso",
        "Toyota Verso-S",
        "Toyota Yaris",
        "Toyota Yaris Cross",
        "Toyota Yaris II",
        "Toyota Yaris III",
        "Toyota Yaris IV",
        "Volkswagen Amarok",
        "Volkswagen Arteon",
        "Volkswagen Bora",
        "Volkswagen Caddy",
        "Volkswagen Caddy V",
        "Volkswagen Coccinelle",
        "Volkswagen Crafter",
        "Volkswagen Fox",
        "Volkswagen Golf",
        "Volkswagen Golf III",
        "Volkswagen Golf IV",
        "Volkswagen Golf Plus",
        "Volkswagen Golf Sportsvan",
        "Volkswagen Golf V",
        "Volkswagen Golf VI",
        "Volkswagen Golf VII",
        "Volkswagen Golf VIII",
        "Volkswagen ID.3",
        "Volkswagen ID.4",
        "Volkswagen Jetta",
        "Volkswagen Jetta II",
        "Volkswagen Jetta III",
        "Volkswagen LT28",
        "Volkswagen LT31",
        "Volkswagen LT32",
        "Volkswagen LT35",
        "Volkswagen LT40A",
        "Volkswagen LT46A",
        "Volkswagen Lupo",
        "Volkswagen New Beetle",
        "Volkswagen Passat",
        "Volkswagen Passat CC",
        "Volkswagen Passat SW",
        "Volkswagen Phaeton",
        "Volkswagen Polo",
        "Volkswagen Polo V",
        "Volkswagen Polo VI",
        "Volkswagen Scirocco",
        "Volkswagen Sharan",
        "Volkswagen T-Cross",
        "Volkswagen T-Roc",
        "Volkswagen Taro",
        "Volkswagen Tiguan",
        "Volkswagen Touareg",
        "Volkswagen Touareg III",
        "Volkswagen Touran",
        "Volkswagen Transporter",
        "Volvo C30",
        "Volvo Cross Country",
        "Volvo V40",
        "Volvo V50",
        "Volvo V60",
        "Volvo V60 II",
        "Volvo V70",
        "Volvo V90",
        "Volvo XC40",
        "Volvo XC60",
        "Volvo XC70",
        "Volvo XC90"
    ];
    let marquesWithId = [];
    for (const marque of marques){
        let marquewithId = await prisma.marque.upsert({
            where: {
                name: marque
            },
            update: {},
            create: {
				name: marque
			}
		})
        marquesWithId[marque] = marquewithId.id;
    }
    for (const modele of modeles){
        let marqueId = null;
        let modeleWithoutMarque = modele;
        for (const marque of marques){
            if(modele.startsWith(marque)){
                marqueId = marquesWithId[marque];
                modeleWithoutMarque = modeleWithoutMarque.replace(marque + ' ', '');
            }
        }
        await prisma.modele.upsert({
            where: {
                name_marqueId : {
                    name: modeleWithoutMarque,
                    marqueId: marqueId
                }
            },
            update :{},
            create: {
                name: modeleWithoutMarque,
                marqueId: marqueId
            }
        })
    }
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})