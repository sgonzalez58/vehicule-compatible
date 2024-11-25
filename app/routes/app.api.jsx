import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";

import { getModele, getVehicules } from "../models/modele.server";
import { getPage } from "../models/page.server";

import db from "../db.server";

export const loader = async ({request}) => {
  await authenticate.public.appProxy(request);
  const {searchParams} = new URL(request.url);

  const typeVU = await db.type.findFirst({select: { id : true }, where: { name : "VU" }})
  const typeVP = await db.type.findFirst({select: { id : true }, where: { name : "VP" }})

  let appPage = await getPage();
  if(!appPage){
    return json({message : "Merci de configurer votre page principale avant de continuer."})
  }
  
  if(searchParams.get("vehicule")){
    let modele = await getModele(Number(searchParams.get("vehicule")))
    let page = `<h1 class="compatibilite-vehicule-main-title">Compatibilité du véhicule</h1>
                  <div class="compatibilite-vehicule-wrapper">
                  <h2>Vérifiez la compatibilité de votre véhicule</h2>
                  <form id="vehicule-compatible-form" method="GET">
                    <select id="vehicule-compatible-marque"></select>
                    <select id="vehicule-compatible-modele" name="vehicule" required disabled></select>
                    <input type="submit" value="recherche">
                  </form>
                </div>`
    let nbModeleType = 0;
    for(const [index, modeleType] of modele.modeleTypes.entries()){
      console.log(index, modeleType)
      nbModeleType ++;
      if(index == 0){
        page += `   <div class="compatibilite-vehicule-produits-wrapper">
        <h2>Voici la liste de produits compatibles avec votre véhicule</h2>`;
      }
      if (modeleType.type.name == 'VU'){
        page += `<h3>Véhicule Utilitaire</h3>
          <div class="compatibilite-vehicule-produits-flex">`
      }else{
        page += `<h3>Véhicule Particulier</h3>
          <div class="compatibilite-vehicule-produits-flex">`
      }
      if (modeleType.produits.length == 0){
        page += `<p class="compatibilite-vehicule-message">Nous sommes désolés, aucun de nos produits n'est compatible avec votre véhicule.</p>`
      }
      for( const produit of modeleType.produits){
        page += `     <a href="` + produit.productUrl + `" class="compatibilite-vehicule-produit">
                        <img src="` + produit.productImage + `" width=400>
                        <div class="compatibilite-vehicule-produit-info">
                          <h3>` + produit.productName + `</h3>
                          <p>A partir de <span>` + String(produit.productPrice).replace('.', ',') + `€</span></p>
                          <div>Voir le produit</div>
                        </div>
                      </a>
                    </div>`
      }
    }    
    if(nbModeleType == 0){
      page += `<p class="compatibilite-vehicule-message">Nous sommes désolés, aucun de nos produits n'est compatible avec votre véhicule.</p>`
    }else{
      page += ` </div>
                `;
      
    }
    return json({
      modele: modele,
      appPage : appPage.url,
      modeles: await getVehicules(),
      body: page
    })
  }

  let page = `<h1 class="compatibilite-vehicule-main-title">Compatibilité du véhicule</h1>
                <div class="compatibilite-vehicule-wrapper">
                <h2>Vérifiez la compatibilité de votre véhicule</h2>
                <form id="vehicule-compatible-form" method="GET">
                  <label for="vehicule-compatible-form-checkbox-vu" class='vehicule-compatible-form-checkbox-type-label'>
                      <p>Mon véhicule ne possède pas de sièges arrières</p>
                  </label>
                  <label for="vehicule-compatible-form-checkbox-vp" class="vehicule-compatible-form-checkbox-type-label">
                      <p>Mon véhicule possède des sièges arrières</p>
                  </label>
                  <input type='checkbox' value="${typeVP.id}" id="vehicule-compatible-form-checkbox-vp" class="vehicule-compatible-form-checkbox-type">
                  <input type='checkbox' value="${typeVU.id}" id="vehicule-compatible-form-checkbox-vu" class="vehicule-compatible-form-checkbox-type">
                </form>
              </div>
            `

  return json({
    modeles: await getVehicules(),
    body: page,
    appPage: appPage.url
  })
};