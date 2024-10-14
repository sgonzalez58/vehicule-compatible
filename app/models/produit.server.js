import db from "../db.server";

export async function getProduit(id) {
  const produit = await db.produit.findUnique({ 
    where: {
      id: id
    },
    include: {
      modeles: true
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
    include: { modeles: true }
  });

  if (produits.length === 0) return [];

  return produits;
}

export async function updateProduit(id, data){
  if(data.modeleId){
    return await db.produit.update(({
      where: {
        id: id,
      },
      data : {
        modeles: {
          connect: { id: Number(data.modeleId) }
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
        modeles: {
          disconnect: { id: Number(data.deleteModeleId) }
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
      productImage: data.productImage
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