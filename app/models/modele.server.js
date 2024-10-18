import db from "../db.server";

export async function getModele(id) {
  const modele = await db.modele.findUnique({ 
    where: {
      id: id
    },
    include: {
      marque: true,
      produits: true
    }
});

  if (!modele) {
    return null;
  }

  return modele;
}

export async function getModeles() {
  const modeles = await db.modele.findMany({
    orderBy: { id: "desc" },
    include: { marque: true, produits: true }
  });

  if (modeles.length === 0) return [];

  return modeles;
}

export async function getVehicules() {
  const modeles = await db.modele.findMany({
    orderBy: { id: "desc" },
    include: { marque: true }
  });

  if (modeles.length === 0) return [];

  return modeles;
}

export async function updateModele(id, data){
  if(data.produitId){
    return await db.modele.update(({
      where: {
        id: id,
      },
      data : {
        produits: {
          connect: { id: Number(data.produitId) }
        },
      }
    }))
  }
  if(data.deleteProduitId){
    return await db.modele.update(({
      where: {
        id: id,
      },
      data : {
        produits: {
          disconnect: { id: Number(data.deleteProduitId) }
        },
      }
    }))
  }
  return await db.modele.update(({
    where: {
      id: id,
    },
    data: {
      name: data.name,
      marqueId: data.marque,
      productImage: data.productImage
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

  if (Object.keys(errors).length) {
    return errors;
  }
}