import db from "../db.server";

export async function getMarque(id) {
  const marque = await db.marque.findFirst({ where: { id } });

  if (!marque) {
    return null;
  }

  return marque;
}

export async function getMarques() {
  const marques = await db.marque.findMany({
    orderBy: { id: "desc" },
    include: { modeles : true }
  });

  if (marques.length === 0) return [];

  return marques;
}

export function validateMarque(data) {
  const errors = {};

  if (!data.name) {
    errors.name = "Une marque à besoin d'un nom";
  }

  if (Object.keys(errors).length) {
    return errors;
  }
}