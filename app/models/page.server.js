import db from "../db.server";

export async function getPage() {
  const page = await db.page.findFirst();

  if (!page) {
    return null;
  }

  return page;
}

export function validateProduit(data) {
  const errors = {};

  if (!data.name) {
    errors.nom = "Vous devez indiquer le nom de la page.";
  }

  if (!data.pageId) {
    errors.pageId = "Erreur lors de la récupération de la page Shopify.";
  }

  if (Object.keys(errors).length) {
    return errors;
  }
}