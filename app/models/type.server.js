import db from "../db.server";

export async function getType(id) {
  const type = await db.type.findFirst({ where: { id } });

  if (!type) {
    return null;
  }

  return type;
}

export async function getTypes() {
  const types = await db.type.findMany({
    orderBy: { name: "asc" }
  });

  if (types.length === 0) return [];

  return types;
}

export function validateType(data) {
  const errors = {};

  if (!data.name) {
    errors.name = "Une type de véhicule à besoin d'un nom";
  }

  if (Object.keys(errors).length) {
    return errors;
  }
}