import db from "../db.server";

export async function getProduit(id) {
  const produit = await db.produit.findUnique({ 
    where: {
      id: id
    },
    include: {
      modeleTypes: {
        include: {
          modele: true
        }
      }
    }
  });

  if (!produit) {
    return null;
  }

  return produit;
}

export async function getProduits() {
  const produits = await db.produit.findMany({
    orderBy: { id: "desc" },
    include: { modeleTypes: true }
  });

  if (produits.length === 0) return [];

  return produits;
}

export async function updateProduit(id, data){
  if(data.addModeleId){
    return await db.produit.update(({
      where: {
        id: id,
      },
      data : {
        modeleTypes: {
          connect: await db.modeleType.findMany({select: { id: true}, where: {modeleId : Number(data.addModeleId)}})
        },
      }
    }))
  }
  if(data.deleteModeleId){
    return await db.produit.update(({
      where: {
        id: id,
      },
      data : {
        modeleTypes: {
          disconnect: await db.modeleType.findMany({select: { id: true}, where: {modeleId : Number(data.deleteModeleId)}})
        },
      }
    }))
  }
  if(data.deleteModeleTypeId){
    return await db.produit.update(({
      where: {
        id: id,
      },
      data : {
        modeleTypes: {
          disconnect: { id: Number(data.deleteModeleTypeId) }
        },
      }
    }))
  }
  if(data.addModeleTypeId){
    return await db.produit.update(({
      where: {
        id: id,
      },
      data : {
        modeleTypes: {
          connect: { id: Number(data.addModeleTypeId) }
        },
      }
    }))
  }
  return await db.produit.update(({
    where: {
      id: id,
    },
    data: {
      productId: data.productId,
      productName: data.productName,
      productImage: data.productImage,
      productUrl: data.productUrl,
      productPrice: data.productPrice,
      infosComplementaires: data.infosComplementaires
    },
  }))
}

export function validateProduit(data) {
  const errors = {};

  if (!data.productId) {
    errors.produit = "Vous devez indiquer le produit de votre boutique.";
  }

  if (!data.productName) {
    errors.nom = "Aucun nom n'est lié à ce produit.";
  }

  if (Object.keys(errors).length) {
    return errors;
  }
}