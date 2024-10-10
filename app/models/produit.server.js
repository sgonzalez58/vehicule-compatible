import db from "../db.server";

export async function getProduit(id) {
  const produit = await db.produit.findFirst({ where: { id } });

  if (!produit) {
    return null;
  }

  return produit;
}

export async function getProduits() {
  const produits = await db.produit.findMany({
    orderBy: { id: "desc" },
  });

  if (produits.length === 0) return [];

  return produits;
}

export function validateProduit(data) {
  const errors = {};

  if (!data.produitId) {
    errors.produit = "Vous devez indiquer le produit de votre boutique.";
  }

  if (!data.productName) {
    errors.nom = "Aucun nom n'est lié à ce produit.";
  }

  if (Object.keys(errors).length) {
    return errors;
  }
}