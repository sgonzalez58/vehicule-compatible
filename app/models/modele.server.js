import db from "../db.server";

export async function getModele(id) {
  const modele = await db.modele.findFirst({ where: { id } });

  if (!modele) {
    return null;
  }

  return modele;
}

export async function getModeles() {
  const modeles = await db.modele.findMany({
    orderBy: { id: "desc" },
  });

  if (modeles.length === 0) return [];

  return modeles;
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