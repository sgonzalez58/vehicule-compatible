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
            document.getElementsByTagName("main")[0].insertAdjacentHTML("afterbegin", obj.body);
            let form = document.getElementById("vehicule-compatible-form");
            let select_marque = document.getElementById('vehicule-compatible-marque');
            let select_modele = document.getElementById('vehicule-compatible-modele');
            let checkbox_type = document.getElementsByClassName('vehicule-compatible-form-checkbox-type');
            let marques = [];
            let modeles = [];
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
              modeles[modele.id] = {name : modele.name, marque: modele.marque, modeleTypes: modele.modeleTypes, famille: modele.famille};
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
                modeles.forEach((modele, modeleId) => {
                  if(modele.marque.id == marqueId){
                    let option = document.createElement("option");
                    option.innerText = modele.name;
                    if(vehicule){
                      if(obj.modele.id == modeleId){
                        option.toggleAttribute('selected')
                      }
                    }
                    option.setAttribute("value", modeleId);
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
                modeles.forEach((modele, modeleId) => {
                  if(modele.marque.id == obj.modele.marque.id){
                    let option = document.createElement("option");
                    option.innerText = modele.name;
                    if(obj.modele.id == modeleId){
                      option.toggleAttribute('selected')
                    }
                    option.setAttribute("value", modeleId);
                    select_modele.appendChild(option);
                  }
                })
              }
            }
            if (checkbox_type.length > 0){
              Array.from(checkbox_type).forEach(type => {
                type.addEventListener('change', ()=>{etape_famille(modeles.filter((modele) => modele.modeleTypes.map((modeleType) => modeleType.typeId).includes(Number(type.value))))})
              })
            }
          }
          function etape_famille(modeles){
            let form = document.getElementById("vehicule-compatible-form");
            form.innerHTML = "";
            let familles = [];
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
                choix_value.setAttribute('type', 'checkbox')
                form.appendChild(choix);
                form.appendChild(choix_value);
              }
            }
            const checkbox_famille = document.getElementsByClassName("vehicule-compatible-form-checkbox-famille")
            Array.from(checkbox_famille).forEach(famille => {
              famille.addEventListener('change', ()=>{etape_marque(modeles.filter((modele) => modele.famille.id == famille.value))})
            })
          }
          function etape_marque(modeles){
            let form = document.getElementById("vehicule-compatible-form");
            form.innerHTML = "";
            let marques = [];
            for (const modele of modeles){
              if(!marques.includes(modele.marque.id)){
                marques.push(modele.marque.id)
                const choix = document.createElement("label");
                choix.innerText = modele.marque.name;
                const choix_value = document.createElement("input");
                choix_value.value = modele.marque.id;
                choix.setAttribute('for', 'vehicule-compatible-form-checkbox-marque-'+modele.marque.id);
                choix.setAttribute('class', 'vehicule-compatible-form-checkbox-marque-label')
                choix_value.setAttribute('id', 'vehicule-compatible-form-checkbox-marque-'+modele.marque.id);
                choix_value.setAttribute('class', 'vehicule-compatible-form-checkbox-marque')
                choix_value.setAttribute('type', 'checkbox')
                form.appendChild(choix);
                form.appendChild(choix_value);
              }
            }
            const checkbox_marque = document.getElementsByClassName("vehicule-compatible-form-checkbox-marque")
            Array.from(checkbox_marque).forEach(marque => {
              marque.addEventListener('change', ()=>{etape_modele(modeles.filter((modele) => modele.marque.id == marque.value))})
            })
          }   
          function etape_modele(modeles){
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
              choix_value.setAttribute('type', 'checkbox')
              form.appendChild(choix);
              form.appendChild(choix_value); 
            }
            const checkbox_modele = document.getElementsByClassName("vehicule-compatible-form-checkbox-modele")
            Array.from(checkbox_modele).forEach(modele => {
              modele.addEventListener('change', ()=>{get_produit_modele(modele.value)})
            })
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
          .compatibilite-vehicule-wrapper form{
            display:flex;
            justify-content:center;;
            padding:20px;
            gap: 10px 20px;
            flex-wrap:wrap;
          }
          .vehicule-compatible-form-checkbox-type, .vehicule-compatible-form-checkbox-famille, .vehicule-compatible-form-checkbox-marque, .vehicule-compatible-form-checkbox-modele{
            display : none!important;
          }
          .vehicule-compatible-form-checkbox-type-label, .vehicule-compatible-form-checkbox-famille-label, .vehicule-compatible-form-checkbox-marque-label, .vehicule-compatible-form-checkbox-modele-label{
            display:flex;
            align-items:center;
            justify-content: center;
            background-color: #E8E8E8;
            border: 1px solid #242424;
            width: clamp(200px, 100%, 330px);
            border-radius: 3px;
            padding: 20px;
            text-align:center;
            cursor:pointer;
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
            flex-direction:column;
            gap:10px;
          }
          .compatibilite-vehicule-produit{
            display:flex;
            gap:20px;
            padding:20px;
            border:1px solid #242424;
            border-radius: 20px;
            background-color:#f4f4f4;
            text-decoration: none;
            color:black;
          }
          .compatibilite-vehicule-produit-info{
            display:flex;
            flex-direction: column;
            padding: 30px 0;
            justify-content:space-between;
            width:100%;
          }
          .compatibilite-vehicule-produit-info h3{
            font-size:2em;
          }
          .compatibilite-vehicule-produit-info p {
            font-size:1.6em;
          }
          .compatibilite-vehicule-produit-info span{
            color:#ff7d24;
            font-weight:500;
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
            align-self:end;
            margin-right:30px;
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