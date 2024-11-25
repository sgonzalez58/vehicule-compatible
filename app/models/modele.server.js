import db from "../db.server";

export async function getModele(id) {
  const modele = await db.modele.findUnique({ 
    where: {
      id: id
    },
    include: {
      marque: true,
      famille: true,
      modeleTypes: {
        include: {
          produits: true,
          type: true,
        }
      },
    }
});

  if (!modele) {
    return null;
  }

  return modele;
}

export async function getModeles() {
  const modeles = await db.modele.findMany({
    orderBy: [{ marque : { name : "asc"}}, { name : "asc" }],
    include: { marque: true, modeleTypes: {include : { type : true, produits : true}}}
  });

  if (modeles.length === 0) return [];

  return modeles;
}

export async function getVehicules() {
  const modeles = await db.modele.findMany({
    orderBy: { id: "desc" },
    include: { marque: true, famille: true, modeleTypes: true }
  });

  if (modeles.length === 0) return [];

  return modeles;
}

export async function createModele(data){
  data = data.data;
  return await db.modele.create({
    data: {
      name: data.name,
      marque: {
        connect: {
          id: Number(data.marqueId)
        }
      },
      famille: {
        connect: {
          id: Number(data.familleId)
        }
      },
      modeleTypes: {
        createMany: {
            data: data.typeIds.split(',').map(function(typeId) { return { typeId : Number(typeId) }})
        }
      }
    }
  })
}

function arrayDiff(array1, array2){
  const isSameModele = (a, b) => a === b;
  const onlyInLeft = (left, right, compareFunction) => 
    left.filter(leftValue =>
      !right.some(rightValue => 
        compareFunction(leftValue, rightValue)));
  
  const onlyInA = onlyInLeft(array1, array2, isSameModele);
  const onlyInB = onlyInLeft(array2, array1, isSameModele);
  
  return [...onlyInA, ...onlyInB];
}

export async function updateModele(id, data){
  if(data.addProduitId){
    await db.produit.update(({
      where: {
        id: Number(data.addProduitId),
      },
      data : {
        modeleTypes: {
          connect: await db.modeleType.findMany({select: { id : true}, where: {modeleId: id}})
        }
      }
    }))
    return await db.modele.findFirst({where: { id : id}});
  }
  if(data.deleteProduitId){
    await db.produit.update(({
      where: {
        id: Number(data.deleteProduitId)
      },
      data : {
        modeleTypes: {
          disconnect: await db.modeleType.findMany({select: {id: true}, where: {modeleId: id}})
        },
      }
    }))
    return await db.modele.findFirst({where: { id : id}});
  }
  if(data.addModeleTypeId){
    return await db.modele.update(({
      where: {
        id: id,
      },
      data : {
        modeleTypes: {
          update: {
            data: {
              produits: {
                connect: {
                  id : Number(data.addModeleTypeProduitId)
                }
              }
            },
            where: {
              id: Number(data.addModeleTypeId)
            }
          }
        }
      }
    }))
  }
  if(data.deleteModeleTypeId){
    return await db.modele.update(({
      where: {
        id: id,
      },
      data : {
        modeleTypes: {
          update: {
            data: {
              produits: {
                disconnect: {
                  id : Number(data.deleteModeleTypeProduitId)
                }
              }
            },
            where: {
              id: Number(data.deleteModeleTypeId)
            }
          }
        }
      }
    }))
  }

  return await db.modele.update(({
    where: {
      id: id,
    },
    data: {
      name: data.name,
      marque: {
        connect: {
          id : Number(data.marqueId)
        }
      },
      productImage: data.productImage,
      famille: {
        connect: {
          id: Number(data.familleId)
        }
      },
      modeleTypes: {
        connectOrCreate: data.typeIds.split(",").map(function(typeId) { return { where : { modeleId_typeId : { typeId : Number(typeId), modeleId : id } }, create : { typeId : Number(typeId)}}}),
        deleteMany: await db.modeleType.findMany({select: { id : true}, where: {typeId : { in: arrayDiff((await db.type.findMany()).map(function(type){ return String(type.id)}), data.typeIds.split(",")).map((typeId) => Number(typeId))}, modeleId : id}})
      }
    },
  }))
}

export function validateModele(data) {
  const errors = {};

  if (!data.name) {
    errors.name = "Une marque à besoin d'un nom";
  }

  if (!data.marqueId) {
    errors.marque = "Un modèle doit être relié à une marque";
  }

  if (!data.familleId) {
    errors.famille = "Un modèle doit appartenir à une famille de véhicule."
  }

  if(data.typeIds.length <= 0){
    errors.type = "Un modèle doit avoir au moins un type de véhicule lié."
  }

  if (Object.keys(errors).length) {
    return errors;
  }
}