import db from "../db.server";

export async function getFamille(id) {
  const famille = await db.famille.findFirst({ where: { id } });

  if (!famille) {
    return null;
  }

  return famille;
}

export async function getFamilles() {
  const familles = await db.famille.findMany({
    orderBy: { name: "asc" }
  });

  if (familles.length === 0) return [];

  return familles;
}

export function validateFamille(data) {
  const errors = {};

  if (!data.name) {
    errors.name = "Une famille à besoin d'un nom";
  }

  if (Object.keys(errors).length) {
    return errors;
  }
}