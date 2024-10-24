import db from "../db.server";

export async function getPage() {
  const page = await db.page.findFirst();

  if (!page) {
    return null;
  }

  return page;
}

export async function pageUpdate(page, data, admin){
  await admin.graphql(
    `#graphql
    mutation pageDelete($id: ID!) {
    pageDelete(id: $id) {
      deletedPageId
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables : {
        "id": page.idShopify
      }
    }
  )
  const newPage = await db.page.update({where: { id: Number(page.id) }, data});

  if(!newPage){
    return null;
  }

  return newPage;
}

export function validatePage(data) {
  const errors = {};

  if (!data.name) {
    errors.nom = "Vous devez indiquer le nom de la page.";
  }

  if (!data.idShopify) {
    errors.pageId = "Erreur lors de la récupération de la page Shopify.";
  }

  if (Object.keys(errors).length) {
    return errors;
  }
}