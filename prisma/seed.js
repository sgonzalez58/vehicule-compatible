import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // Choisir entre véhicule de loisir ou VU
    let type_de_vehicule = [
        {
            type: "VU",
            famille: ["Ludospace", "Van", "Fourgon"],
            help: "Mon véhicule ne possède pas de sièges arrières"
        },
        {
            type: "VP",
            famille: ["Ludospace", "Van", "Fourgon", "Citadine, Break", "4x4, SUV"],
            help : "Mon véhicule possède des sièges arrières"
        }
    ]
    let famille_de_vehicule = [
        "Ludospace",
        "Van",
        "Fourgon",
        "Citadine, Break",
        "4x4, SUV"
    ]
	let marques = [
        "Citroen",
        "Dacia",
        "Fiat",
        "Ford",
        "Iveco",
        "Man",
        "Mercedes",
        "Nissan",
        "Opel",
        "Peugeot",
        "Renault",
        "Toyota",
        "Volkswagen"
    ];
    let modeles = [
        {
            nom : "Citroen Berlingo",
            type: ["VU", "VP"],
            famille: "Ludospace"
        },
        {
            nom : "Citroen Jumper",
            type: ["VU"],
            famille: "Fourgon"
        },
        {
            nom : "Citroen Jumpy",
            type: ["VU"],
            famille: "Van"
        },
        {
            nom : "Citroen Spacetourer",
            type: ["VP"],
            famille: "Van"
        },
        {
            nom : "Dacia Dokker",
            type: ["VU", "VP"],
            famille: "Ludospace"
        },
        {
            nom : "Dacia Dokker",
            type: ["VU", "VP"],
            famille: "Ludospace"
        },
        {
            nom : "Dacia Duster",
            type: ["VP"],
            famille: '4x4, SUV'
        },
        {
            nom : "Dacia Jogger",
            type: ["VP"],
            famille: "Citadine, Break"
        },
        {
            nom : "Fiat Doblo",
            type: ["VU", "VP"],
            famille: 'Ludospace'
        },
        {
            nom : "Fiat Ducato",
            type: ["VU"],
            famille: "Fourgon"
        },
        {
            nom : "Fiat Scudo",
            type: ["VU", "VP"],
            famille: "Van"
        },
        {
            nom : "Fiat Talento",
            type: ["VU", "VP"],
            famille: "Van"
        },
        {
            nom : "Ford Transit Courier",
            type: ["VU"],
            famille: "Ludospace"
        },
        {
            nom : "Ford Tourneo Courier",
            type: ["VP"],
            famille: "Ludospace"
        },
        {
            nom : "Ford Tourneo Connect",
            type: ["VP"],
            famille: "Ludospace"
        },
        {
            nom : "Ford Tourneo Custom",
            type: ["VP"],
            famille: "Van"
        },
        {
            nom : "Ford Transit Custom",
            type: ["VU"],
            famille: "Van"
        },
        {
            nom : "Ford Transit",
            type: ["VU"],
            famille: "Fourgon"
        },
        {
            nom : "Ford Transit Connect",
            type: ["VU"],
            famille: "Ludospace"
        },
        {
            nom : "Iveco Daily",
            type: ["VU"],
            famille: "Fourgon"
        },
        {
            nom: "Man TGE",
            type: ["VU"],
            famille: "Fourgon"
        },
        {
            nom : "Mercedes Classe T, Citan",
            type: ["VU", "VP"],
            famille: "Ludospace"
        },
        {
            nom : "Mercedes SPrinter",
            type: ["VU"],
            famille: "Fourgon"
        },
        {
            nom : "Mercedes Class V, Viano, Vito",
            type: ["VU", "VP"],
            famille: "Van"
        },
        {
            nom : "Nissan NV200",
            type: ["VU", "VP"],
            famille: "Ludospace"
        },
        {
            nom : "Nissan NV250",
            type: ["VU", "VP"],
            famille: "Ludospace"
        },
        {
            nom : "Nissan NV300",
            type: ["VU"],
            famille: "Van"
        },
        {
            nom : "Nissan NV400",
            type: ["VU", "VP"],
            famille: "Fourgon"
        },
        {
            nom : "Nissan Primastar",
            type: ["VP"],
            famille: "Van"
        },
        {
            nom : "Nissan Primastar",
            type: ["VP"],
            famille: "Van"
        },
        {
            nom : "Opel Combo",
            type: ["VU", "VP"],
            famille: "Ludospace"
        },
        {
            nom : "Opel Movano",
            type: ["VU"],
            famille: "Fourgon"
        },
        {
            nom : "Opel Vivaro, Zafira Life",
            type: ["VU", "VP"],
            famille: "Van"
        },
        {
            nom : "Peugeot Expert",
            type: ["VU"],
            famille: "Van"
        },
        {
            nom : "Peugeot Partner",
            type: ["VU"],
            famille: "Ludospace"
        },
        {
            nom : "Peugeot Rifter",
            type: ["VP"],
            famille: "Ludospace"
        },
        {
            nom : "Peugeot Traveller",
            type: ["VP"],
            famille: "Van"
        },
        {
            nom : "Renault Kangoo",
            type: ["VP"],
            famille: "Ludospace"
        },
        {
            nom : "Renault Kangoo Express",
            type: ["VU"],
            famille: "Ludospace"
        },
        {
            nom : "Renault Master",
            type: ["VU"],
            famille: "Fourgon"
        },
        {
            nom : "Renault Trafic",
            type: ["VU", "VP"],
            famille: "Van"
        },
        {
            nom : "Toyota ProAce",
            type: ["VU", "VP"],
            famille: "Van"
        },
        {
            nom : "Toyota ProAce City",
            type: ["VU", "VP"],
            famille: "Ludospace"
        },
        {
            nom : "Volkswagen Caddy",
            type: ["VU", "VP"],
            famille: "Ludospace"
        },
        {
            nom : "Volkswagen Crafter",
            type: ["VU"],
            famille: "Fourgon"
        },
        {
            nom : "Volkswagen Transporter",
            type: ["VU"],
            famille: "Van"
        },
        {
            nom : "Volkswagen Transporter Multivan",
            type: ["VP"],
            famille: "Van"
        },

    ];

    // récupération des numéros des marques pour les ajouter dans les modeles par la suite
    let marquesWithId = [];
    // ajout des marques dans la base de données
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
    // récupération des id des familles de véhicules
    let famillesWithId = [];
    // Ajout des familles de véhicules dans la base de données
    for (const famille of famille_de_vehicule){
        let familleWithId = await prisma.famille.upsert({
            where : {
                name: famille
            },
            update: {},
            create: {
                name: famille
            }
        })
        famillesWithId[famille] = familleWithId.id;
    }
    // récupération des id des types de véhicules
    let typesWithId = [];
    // ajout des types de véhicules dans la base de données
    for (const type of type_de_vehicule){
        let typeWithId = await prisma.type.upsert({
            where : {
                name: type.type
            },
            update: {},
            create : {
                name: type.type,
                familles : {
                    connect: type.famille.map((function(familleName) {return { id: this[familleName] }}), famillesWithId)
                },
                help : type.help
            }
        })
        typesWithId[type.type] = typeWithId.id;
    }

    for (const modele of modeles){
        let marqueId = null;
        let modeleWithoutMarque = modele.nom;
        for (const marque of marques){
            if(modeleWithoutMarque.startsWith(marque)){
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
                marque: {
                    connect : {
                        id : marqueId
                    }
                },
                famille: {
                    connect : {
                        id : famillesWithId[modele.famille],
                    }
                },
                modeleTypes: {
                    createMany: {
                        data: modele.type.map(function(type) { return { typeId : typesWithId[type] }})
                    }
                }
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