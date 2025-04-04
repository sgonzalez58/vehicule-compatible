import { json, redirect } from "@remix-run/node";
import { authenticate } from "../shopify.server";

import { getPage, pageUpdate, validatePage } from "../models/page.server";
import { useActionData, useLoaderData, useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import { useState } from "react";
import { BlockStack, Card, Layout, Page, PageActions, Text, TextField } from "@shopify/polaris";

import db from "../db.server";

export const loader = async ({request}) => {
  const {session} = await authenticate.admin(request);
  let page = await getPage();
  if(!page){
    page = { id: null, name: "", idShopify: "", url: ""}
  }
  return json({
    page: page,
    session
  });
};

function mainPage(){
  return `<script defer>
          let params = new URLSearchParams(document.location.search);
          let vehicule = params.get("vehicule");
          const modeles = [];
          let modeles_type = []; 
          let modeles_famille = [];
          let modeles_marques = [];
          let modele = undefined;
          let url = "/apps/vehicule-compatible";
          if(vehicule){
            url += "?vehicule=" + vehicule
          }
          const controller = new AbortController();
          const response = fetch(url, {
            method: "GET",
            headers: {
              'Content-Type': "application/json",
              "ngrok-skip-browser-warning": true
            },
            redirect: "follow",
            signal: controller.signal
          }).then((response) => response.json())
              .then((json) => recupererModeles(json))
              .catch((error) => {
                if (error.response) {
                  console.log("Response status:", error.response.status);
                  console.log("Response data:", error.response.data);
                } else {
                  console.log("Error message:", error.message);
                }
              })
          function recupererModeles(obj){
            console.log( obj )
            document.getElementsByTagName("main")[0].insertAdjacentHTML("afterbegin", obj.body);
            let form = document.getElementById("vehicule-compatible-form");
            let select_marque = document.getElementById('vehicule-compatible-marque');
            let select_modele = document.getElementById('vehicule-compatible-modele');
            let checkbox_type = document.getElementsByClassName('vehicule-compatible-form-checkbox-type');
            let marques = [];
            let modeles_recup = obj.modeles;
            if(obj.message){
              form.innerText = obj.message;
              form.setAttribute('style', 'color:red');
              return;
            }
            form.setAttribute('action', obj.appPage)
            if(select_marque?.children.length == 0){
              let option = document.createElement("option");
              option.innerText = "Marque";
              if(!vehicule){
                option.toggleAttribute("selected");
              }
              select_marque.appendChild(option);
            }
            if(select_modele?.children.length == 0){
              option = document.createElement("option");
              option.innerText = "Modèle";
              if(!vehicule){
                option.toggleAttribute("selected");
              }else{
                select_modele.removeAttribute("disabled");
              }
              select_modele.appendChild(option);
            }
            Array.from(modeles_recup).forEach(modele =>{
              if(marques.map((marque) => marque.id).filter((marqueId) => marqueId == modele.marque.id).length == 0)
                marques.push({ name: modele.marque.name, id: modele.marque.id});
              modeles.push({name : modele.name, marque: modele.marque, modeleTypes: modele.modeleTypes, famille: modele.famille, id: modele.id});
            })
            select_marque?.addEventListener('change', (e)=>{
              let marqueId = e.target.value;
              select_modele.innerHTML = "";
              option = document.createElement("option");
              option.innerText = "Modèle";
              option.toggleAttribute("selected");
              select_modele.appendChild(option);
              if(marqueId == "Marque"){
                select_modele.setAttribute("disabled", "");
              }
              else{
                select_modele.removeAttribute("disabled");
                modeles.forEach((modele) => {
                  if(modele.marque.id == marqueId){
                    let option = document.createElement("option");
                    option.innerText = modele.name;
                    if(vehicule){
                      if(obj.modele.id == modele.id){
                        option.toggleAttribute('selected')
                      }
                    }
                    option.setAttribute("value", modele.id);
                    select_modele.appendChild(option);
                  }
                })
              }
            })
            if(select_marque){
              for (const marque of marques){
                let option = document.createElement("option");
                option.innerText = marque.name;
                if(vehicule){
                  if(obj.modele.marque.id == marque.id){
                    option.toggleAttribute('selected')
                  }
                }
                option.setAttribute("value", marque.id);
                select_marque.appendChild(option);
              }
              if(vehicule){
                modeles.forEach((modele) => {
                  if(modele.marque.id == obj.modele.marque.id){
                    let option = document.createElement("option");
                    option.innerText = modele.name;
                    if(obj.modele.id == modele.id){
                      option.toggleAttribute('selected')
                    }
                    option.setAttribute("value", modele.id);
                    select_modele.appendChild(option);
                  }
                })
              }
            }
            if (checkbox_type.length > 0){
              Array.from(checkbox_type).forEach(type => {
                type.addEventListener('change', ()=>{
                  modeles_type = modeles.filter((modele) => modele.modeleTypes.map((modeleType) => modeleType.typeId).includes(Number(type.value)));
                  const filtre_type = document.getElementById('compatibilite-vehicule-filtre-type');
                  const button_modifier_filtre = document.createElement('button');
                  button_modifier_filtre.innerText = "modifier";
                  filtre_type.innerHTML = "Type - " + type.getAttribute("value_name");
                  filtre_type.append(button_modifier_filtre);
                  button_modifier_filtre.addEventListener('click', ()=> etape_type(modeles))
                  etape_famille(modeles_type, type.getAttribute('value'))
                })
              })
            }
          }
          function etape_type(modeles){
            const filtre_type = document.getElementById('compatibilite-vehicule-filtre-type');
            const filtre_famille = document.getElementById('compatibilite-vehicule-filtre-famille');
            const filtre_marque = document.getElementById('compatibilite-vehicule-filtre-marque');
            const filtre_modele = document.getElementById('compatibilite-vehicule-filtre-modele');
            const produits_wrapper = document.getElementsByClassName('compatibilite-vehicule-produits-wrapper')[0];
            if(produits_wrapper){
              produits_wrapper.remove();
            }
            filtre_type.innerHTML = "Type - ";
            filtre_type.setAttribute('is_current_selection', true)
            filtre_famille.innerHTML = "Famille - ";
            filtre_famille.setAttribute('is_current_selection', false)
            filtre_marque.innerHTML = "Marque - ";
            filtre_marque.setAttribute('is_current_selection', false)
            filtre_modele.innerHTML = "Modèle - ";
            filtre_modele.setAttribute('is_current_selection', false)
            const form = document.getElementById("vehicule-compatible-form");
            form.innerHTML = "";
            const types = [];
            for (const modele of modeles){
              for (const modeleType of modele.modeleTypes){
                if(!types.includes(modeleType.typeId)){
                  types.push(modeleType.typeId);
                  const choix = document.createElement("label");
                  choix.innerText = modeleType.type.help;
                  const choix_value = document.createElement("input");
                  choix_value.value = modeleType.type.id;
                  choix.setAttribute('for', 'vehicule-compatible-form-checkbox-type-'+modeleType.type.id);
                  choix.setAttribute('class', 'vehicule-compatible-form-checkbox-type-label')
                  choix_value.setAttribute('id', 'vehicule-compatible-form-checkbox-type-'+modeleType.type.id);
                  choix_value.setAttribute('class', 'vehicule-compatible-form-checkbox-type');
                  choix_value.setAttribute('value_name', modeleType.type.name);
                  choix_value.setAttribute('type', 'checkbox');
                  form.appendChild(choix);
                  form.appendChild(choix_value);
                }
              }
              const checkbox_type = document.getElementsByClassName("vehicule-compatible-form-checkbox-type")
              Array.from(checkbox_type).forEach(type => {
                type.addEventListener('change', ()=>{
                  modeles_type = modeles.filter((modele) => modele.modeleTypes.map((modeleType) => modeleType.typeId).includes(Number(type.value)));
                  const filtre_type = document.getElementById('compatibilite-vehicule-filtre-type');
                  const button_modifier_filtre = document.createElement('button');
                  button_modifier_filtre.innerText = "modifier";
                  filtre_type.innerHTML = "Type - " + type.getAttribute('value_name');
                  filtre_type.append(button_modifier_filtre);
                  button_modifier_filtre.addEventListener('click', ()=> etape_type(modeles))
                  etape_famille(modeles_type, type.value)
                })
              })
            }
          }
          function etape_famille(modeles, type_id){
            const filtre_type = document.getElementById('compatibilite-vehicule-filtre-type');
            const filtre_famille = document.getElementById('compatibilite-vehicule-filtre-famille');
            const filtre_marque = document.getElementById('compatibilite-vehicule-filtre-marque');
            const filtre_modele = document.getElementById('compatibilite-vehicule-filtre-modele');
            const produits_wrapper = document.getElementsByClassName('compatibilite-vehicule-produits-wrapper')[0];
            if(produits_wrapper){
              produits_wrapper.remove();
            }
            filtre_type.setAttribute('is_current_selection', false)
            filtre_famille.innerHTML = "Famille - ";
            filtre_famille.setAttribute('is_current_selection', true)
            filtre_marque.innerHTML = "Marque - ";
            filtre_marque.setAttribute('is_current_selection', false)
            filtre_modele.innerHTML = "Modèle - ";
            filtre_modele.setAttribute('is_current_selection', false)
            const form = document.getElementById("vehicule-compatible-form");
            form.innerHTML = "";
            const familles = [];
            for (const modele of modeles){
              if(!familles.includes(modele.famille.id)){
                familles.push(modele.famille.id)
                const choix = document.createElement("label");
                choix.innerText = modele.famille.name;
                const choix_value = document.createElement("input");
                choix_value.value = modele.famille.id;
                choix.setAttribute('for', 'vehicule-compatible-form-checkbox-famille-'+modele.famille.id);
                choix.setAttribute('class', 'vehicule-compatible-form-checkbox-famille-label')
                choix_value.setAttribute('id', 'vehicule-compatible-form-checkbox-famille-'+modele.famille.id);
                choix_value.setAttribute('class', 'vehicule-compatible-form-checkbox-famille')
                choix_value.setAttribute('value_name', modele.famille.name);
                choix_value.setAttribute('type', 'checkbox')
                form.appendChild(choix);
                form.appendChild(choix_value);
              }
            }
            const checkbox_famille = document.getElementsByClassName("vehicule-compatible-form-checkbox-famille")
            Array.from(checkbox_famille).forEach(famille => {
              famille.addEventListener('change', ()=>{
                modeles_famille = modeles.filter((modele) => modele.famille.id == famille.value);
                const button_modifier_famille = document.createElement('button');
                button_modifier_famille.innerText = "modifier";
                filtre_famille.innerText = "Famille - " + famille.getAttribute('value_name');
                filtre_famille.append(button_modifier_famille);
                button_modifier_famille.addEventListener('click', ()=> etape_famille(modeles_type, type_id))
                etape_marque(modeles_famille, type_id)
              })
            })
          }
          function etape_marque(modeles, type_id){
            const filtre_type = document.getElementById('compatibilite-vehicule-filtre-type');
            const filtre_famille = document.getElementById('compatibilite-vehicule-filtre-famille');
            const filtre_marque = document.getElementById('compatibilite-vehicule-filtre-marque');
            const filtre_modele = document.getElementById('compatibilite-vehicule-filtre-modele');
            const produits_wrapper = document.getElementsByClassName('compatibilite-vehicule-produits-wrapper')[0];
            if(produits_wrapper){
              produits_wrapper.remove();
            }
            filtre_type.setAttribute('is_current_selection', false)
            filtre_famille.setAttribute('is_current_selection', false)
            filtre_marque.innerHTML = "Marque - ";
            filtre_marque.setAttribute('is_current_selection', true)
            filtre_modele.innerHTML = "Modèle - ";
            filtre_modele.setAttribute('is_current_selection', false)
            let form = document.getElementById("vehicule-compatible-form");
            form.innerHTML = "";
            let marques = [];
            for (const modele of modeles){
              if(!marques.includes(modele.marque.id)){
                marques.push(modele.marque.id)
                const choix = document.createElement("label");
                const image_choix = document.createElement("img");
                image_choix.setAttribute('src', modele.marque.logo);
                image_choix.setAttribute('alt', "logo " + modele.marque.name);
                image_choix.setAttribute('height', "75");
                choix.innerText = modele.marque.name;
                choix.appendChild(image_choix);
                choix.setAttribute('class', 'vehicule-compatible-form-label-marque');
                const choix_value = document.createElement("input");
                choix_value.value = modele.marque.id;
                choix.setAttribute('for', 'vehicule-compatible-form-checkbox-marque-'+modele.marque.id);
                choix.setAttribute('class', 'vehicule-compatible-form-checkbox-marque-label')
                choix_value.setAttribute('id', 'vehicule-compatible-form-checkbox-marque-'+modele.marque.id);
                choix_value.setAttribute('class', 'vehicule-compatible-form-checkbox-marque')
                choix_value.setAttribute('value_name', modele.marque.name)
                choix_value.setAttribute('type', 'checkbox')
                form.appendChild(choix);
                form.appendChild(choix_value);
              }
            }
            const checkbox_marque = document.getElementsByClassName("vehicule-compatible-form-checkbox-marque")
            Array.from(checkbox_marque).forEach(marque => {
              marque.addEventListener('change', ()=>{
                modeles_marque = modeles.filter((modele) => modele.marque.id == marque.value);
                const filtre_marque = document.getElementById('compatibilite-vehicule-filtre-marque');
                const button_modifier_marque = document.createElement('button');
                button_modifier_marque.innerText = "modifier";
                filtre_marque.innerHTML = "Marque - " + marque.getAttribute('value_name');
                filtre_marque.append(button_modifier_marque);
                button_modifier_marque.addEventListener('click', ()=> etape_marque(modeles_famille, type_id))
                etape_modele(modeles_marque, type_id)
              })
            })
          }   
          function etape_modele(modeles, type_id){
            const filtre_type = document.getElementById('compatibilite-vehicule-filtre-type');
            const filtre_famille = document.getElementById('compatibilite-vehicule-filtre-famille');
            const filtre_marque = document.getElementById('compatibilite-vehicule-filtre-marque');
            const filtre_modele = document.getElementById('compatibilite-vehicule-filtre-modele');
            const produits_wrapper = document.getElementsByClassName('compatibilite-vehicule-produits-wrapper')[0];
            if(produits_wrapper){
              produits_wrapper.remove();
            }
            filtre_type.setAttribute('is_current_selection', false)
            filtre_famille.setAttribute('is_current_selection', false)
            filtre_marque.setAttribute('is_current_selection', false)
            filtre_modele.innerHTML = "Modèle - ";
            filtre_modele.setAttribute('is_current_selection', true)
            let form = document.getElementById("vehicule-compatible-form");
            form.innerHTML = "";
            for (const modele of modeles){
              const choix = document.createElement("label");
              choix.innerText = modele.name;
              const choix_value = document.createElement("input");
              choix_value.value = modele.id;
              choix.setAttribute('for', 'vehicule-compatible-form-checkbox-modele-'+modele.id);
              choix.setAttribute('class', 'vehicule-compatible-form-checkbox-modele-label')
              choix_value.setAttribute('id', 'vehicule-compatible-form-checkbox-modele-'+modele.id);
              choix_value.setAttribute('class', 'vehicule-compatible-form-checkbox-modele')
              choix_value.setAttribute('value_name', modele.name)
              choix_value.setAttribute('type', 'checkbox')
              form.appendChild(choix);
              form.appendChild(choix_value); 
            }
            const checkbox_modele = document.getElementsByClassName("vehicule-compatible-form-checkbox-modele")
            Array.from(checkbox_modele).forEach(modeleCheckbox => {
              modeleCheckbox.addEventListener('change', ()=>{
                modele = modeles.filter((modeleInArray) => modeleInArray.id == modeleCheckbox.value)[0];
                const filtre_modele = document.getElementById('compatibilite-vehicule-filtre-modele');
                const button_modifier_modele = document.createElement('button');
                button_modifier_modele.innerText = "modifier";
                filtre_modele.innerHTML = "Modèle - " + modeleCheckbox.getAttribute('value_name');
                filtre_modele.append(button_modifier_modele);
                button_modifier_modele.addEventListener('click', ()=> etape_modele(modeles_marque, type_id))
                get_produit_modele(modele, type_id)
              })
            })
          }
          function get_produit_modele(modele, type_id){
            const filtre_type = document.getElementById('compatibilite-vehicule-filtre-type');
            const filtre_famille = document.getElementById('compatibilite-vehicule-filtre-famille');
            const filtre_marque = document.getElementById('compatibilite-vehicule-filtre-marque');
            const filtre_modele = document.getElementById('compatibilite-vehicule-filtre-modele');
            filtre_type.setAttribute('is_current_selection', false)
            filtre_famille.setAttribute('is_current_selection', false)
            filtre_marque.setAttribute('is_current_selection', false)
            filtre_modele.setAttribute('is_current_selection', false)
            let form = document.getElementById("vehicule-compatible-form");
            form.innerHTML = "";
            let wrapper_compatibilite = document.getElementsByClassName("compatibilite-vehicule-wrapper")[0];
            let wrapper_produits = document.createElement('div');
            wrapper_produits.setAttribute('class', "compatibilite-vehicule-produits-wrapper");
            let title_wrapper_produits = document.createElement('h2');
            title_wrapper_produits.innerText = "Voici la liste de produits compatibles avec votre véhicule";
            wrapper_produits.appendChild(title_wrapper_produits);
            wrapper_compatibilite.insertAdjacentElement("afterend", wrapper_produits)
            for (const modeleType of modele.modeleTypes){
              if(modeleType.typeId == type_id){
                let produits_flex = document.createElement('div');
                produits_flex.setAttribute('class', "compatibilite-vehicule-produits-flex");
                if(modeleType.produits.length == 0){
                  let produits_flex_pas_de_produits = document.createElement('p');
                  produits_flex_pas_de_produits.setAttribute('class', 'compatibilite-vehicule-message');
                  produits_flex_pas_de_produits.innerText = "Nous sommes désolés, aucun de nos produits n'est compatible avec votre véhicule.";
                  wrapper_produits.appendChild(produits_flex_pas_de_produits);
                }
                for (const produit of modeleType.produits){
                  let produit_wrapper = document.createElement('a');
                  produit_wrapper.setAttribute('href', produit.productUrl);
                  produit_wrapper.setAttribute('class', "compatibilite-vehicule-produit");

                  let produit_info_principal = document.createElement('div');
                  produit_info_principal.setAttribute('class', 'compatibilite-vehicule-produit-info-principal')

                  let produit_image = document.createElement('img');
                  produit_image.setAttribute('src', produit.productImage);
                  produit_image.setAttribute('width', 150);
                  produit_info_principal.appendChild(produit_image);

                  let produit_infos_principales_inner_text_container = document.createElement('div');
                  produit_infos_principales_inner_text_container.setAttribute('class', 'compatibilite-vehicule-produit-info-principal-text-container')

                  let produit_title = document.createElement('h3');
                  produit_title.innerText = produit.productName;
                  produit_infos_principales_inner_text_container.appendChild(produit_title);

                  let produit_prix = document.createElement('p');
                  produit_prix.setAttribute('class', 'compatibilite-vehicule-produit-prix')
                  produit_prix.innerHTML = "A partir de <span>" + String(produit.productPrice).replace('.', ',') + "€</span>";
                  produit_infos_principales_inner_text_container.appendChild(produit_prix);

                  produit_info_principal.appendChild(produit_infos_principales_inner_text_container);

                  produit_wrapper.appendChild(produit_info_principal)

                  let produit_infos = document.createElement('div');
                  produit_infos.setAttribute('class', "compatibilite-vehicule-produit-info");
                  produit_wrapper.appendChild(produit_infos);

                  if(produit.infosComplementaires != ""){
                    let produit_infos_complementaires = document.createElement('p');
                    produit_infos_complementaires.setAttribute('class', "compatibilite-vehicule-produit-infos-complementaires");
                    produit_infos_complementaires.innerText = produit.infosComplementaires;
                    produit_infos.appendChild(produit_infos_complementaires);
                  }

                  let produit_bouton = document.createElement('div');
                  produit_bouton.innerText = "Voir le produit";
                  produit_infos.appendChild(produit_bouton);

                  produits_flex.appendChild(produit_wrapper);
                }
                wrapper_produits.appendChild(produits_flex);
              }
            }
          }
        </script>
        <style>
          .main-page-title {
              display: none;
          }
          .compatibilite-vehicule-main-title{
            text-align:center;
            color:#ff7d24;
          }
          .compatibilite-vehicule-wrapper{
            max-width:800px;
            background-color: #f4f4f4;
            margin:auto;
            padding: 30px;
            border-radius:20px;
            border:1px solid #242424;
          }
          .compatibilite-vehicule-wrapper h2{
            text-align:center;
          }
          .compatibilite-vehicule-filtres{
            display: flex;
            flex-wrap:wrap;
            padding: 10px;
            align-items:center;
            justify-content: center;
            gap: 10px 30px;
          }
          .compatibilite-vehicule-filtre{
            display:flex;
            flex-wrap:nowrap;
            gap:10px;
          }
          .compatibilite-vehicule-filtre[is_current_selection=true]{
            font-weight:700;
            font-size: 1.2em;
          }
          .compatibilite-vehicule-wrapper form{
            display:flex;
            justify-content:center;
            gap: 0 20px;
            flex-wrap:wrap;
          }
          .vehicule-compatible-form-checkbox-type, .vehicule-compatible-form-checkbox-famille, .vehicule-compatible-form-checkbox-marque, .vehicule-compatible-form-checkbox-modele{
            display : none!important;
          }
          .vehicule-compatible-form-checkbox-type-label, .vehicule-compatible-form-checkbox-famille-label, .vehicule-compatible-form-checkbox-marque-label, .vehicule-compatible-form-checkbox-modele-label{
            display:flex;
            flex-direction:column-reverse;
            align-items:center;
            justify-content: center;
            background-color: #E8E8E8;
            border: 1px solid #242424;
            width: clamp(200px, 100%, 330px);
            border-radius: 3px;
            padding: 20px;
            text-align:center;
            cursor:pointer;
            margin: 10px 0;
          }

          .vehicule-compatible-form-checkbox-marque-label img{
            max-width:150px;
          }
          .vehicule-compatible-form-checkbox-type-label:active, .vehicule-compatible-form-checkbox-famille-label:active, .vehicule-compatible-form-checkbox-marque-label:active, .vehicule-compatible-form-checkbox-modele-label:active{
            background-color: #D0D0D0;
          }
          .compatibilite-vehicule-wrapper form select{
            font-size:18px;
            padding: 18px 4px;
            border-radius: 5px;
            border: 1px solid #242424;
            width: 30%;
          }
          .compatibilite-vehicule-wrapper form input[type=submit]{
            font-size:18px;
            padding: 18px 4px;
            border-radius: 5px;
            border: 1px solid #242424;
            width: 35%;
          }
          .compatibilite-vehicule-message{
            margin:30px auto;
            max-width:1200px;
            font-size:1.4em;
            text-align:center;
          }
          .compatibilite-vehicule-produits-wrapper{
            display:flex;
            flex-direction:column;
            max-width:1200px;
            padding;30px;
            gap:20px;
            margin: 30px auto;
          }
          .compatibilite-vehicule-produits-wrapper h2{
            text-align:center;
          }
          .compatibilite-vehicule-produits-flex{
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            gap:10px;
            align-items:center;
          }

          .compatibilite-vehicule-produit{
            display:flex;
            width:390px;
            flex-direction: column;
            align-items:center;
            gap:20px;
            padding:20px;
            border:1px solid #242424;
            border-radius: 20px;
            background-color:#f4f4f4;
            text-decoration: none;
            color:black;
          }

          .compatibilite-vehicule-produit-info-principal{
            display:flex;
            align-items:center;
            gap:20px;
          }

          .compatibilite-vehicule-produit-info-principal-text-container{
            display: flex;
            flex-direction: column;
          }

          .compatibilite-vehicule-produit-prix{
            font-size:1.2em;
          }

          .compatibilite-vehicule-produit-prix span{
            color:#ff7d24;
            font-weight:500;
          }
            
          .compatibilite-vehicule-produit-info{
            display:flex;
            flex-direction: column;
            justify-content:space-between;
            width:100%;
            align-items:center;
            gap: 16px;
          }

          .compatibilite-vehicule-produit-info p {
            font-size:1.1em;
            text-align:center;
            margin:0;
          }

          .compatibilite-vehicule-produit-info div{
            padding: 6px 14px;
            border-radius: 5px;
            background-color: #ff7d24;
            font-weight:500;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:1.1em;
          }
        </style>`
}

export const action = async ({request}) => {
  const {admin} = await authenticate.admin(request)
   /** @type {any} */
   const data = {
    ...Object.fromEntries(await request.formData())
  };

  let page = await getPage();

  if(data.name){
    const response = await admin.graphql(
      `#graphql
      mutation CreatePage($page: PageCreateInput!) {
        pageCreate(page: $page) {
          page {
            id
            title
            handle
          }
          userErrors {
            field
            message
          }
        }
      }`,
      {
        variables : {
          "page": {
            "title": data.name,
            "body": mainPage()
          }
        }
      }
    );
    let responseJson = await response.json();
    if(responseJson.data.pageCreate.userErrors.length > 0){
      console.log("Une erreur est survenue : " + responseJson.userErrors[0].message)
      return redirect(`/app/settings`)
    }
    let page = responseJson.data.pageCreate.page;
    data.idShopify = page.id;
    data.name = page.title;
    data.url = "/pages/" + page.handle
  }

  const errors = validatePage(data);

  if (errors) {
    return json({ errors }, { status: 422 });
  }
  page =
    page && page.id
      ? await pageUpdate(page, data, admin)
      : await db.page.create({ data });

  return redirect(`/app/settings`);
}

export default function settings(){
  const errors = useActionData()?.errors || {};

  const { page, session } = useLoaderData();
  const [formState, setFormState] = useState(page);
  const [cleanFormState, setCleanFormState] = useState(page);
  const isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState);

  const nav = useNavigation();
  const isSaving =
    nav.state === "submitting" && nav.formData?.get("action") !== "delete";
  const isDeleting =
    nav.state === "submitting" && nav.formData?.get("action") === "delete";

  const navigate = useNavigate();

  const submit = useSubmit();
  function handleSave() {
    const data = {
      name: formState.name,
      idShopify: formState.idShopify
    };

    setCleanFormState({ ...formState });
    submit(data, { method: "post" });
  }

  return (
    <Page>
      <ui-title-bar title="Options"></ui-title-bar>
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Card>
              <BlockStack gap="500">
                <Text as={"h2"} variant="headingLg">
                  Page
                </Text>
                {page.id ? (
                    <Text>
                      La page principale de l'application se trouve aujourd'hui sur la page <a href={"https://admin.shopify.com/store/" + session.shop.split('.').shift() + "/pages/" + page.idShopify.split('/').pop()} target="_blank">{page.name}</a>
                      <br/>Vous pouvez modifier le nom de la page ci-dessous.
                    </Text>
                  ) : (
                    <Text>
                      La page principale de l'application n'est pas défini. Merci de la choisir.
                    </Text>
                  )
                }
                <TextField
                  id="name"
                  helpText="Le nom de la page"
                  label="name"
                  labelHidden
                  autoComplete="off"
                  value={formState.name}
                  onChange={(name) => setFormState({ ...formState, name })}
                  error={errors.name}
                />
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
        <Layout.Section>
          <PageActions
            primaryAction={{
              content: "Enregistrer",
              loading: isSaving,
              disabled: !isDirty || isSaving || isDeleting,
              onAction: handleSave,
            }}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}