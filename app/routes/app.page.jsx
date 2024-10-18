import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";

import { getModele, getVehicules } from "../models/modele.server";

export const loader = async ({request}) => {
  await authenticate.admin(request);
  if(params.id){
    let modele = await getModele(params.id)
    return json({modele: modele})
  }

  let modeles = await getVehicules()

  return json({
    modeles: modeles
  })
};