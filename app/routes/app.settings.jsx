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
            let marques = [];
            let modeles = [];
            let modeles_recup = obj.modeles;
            if(obj.message){
              form.innerText = obj.message;
              form.setAttribute('style', 'color:red');
              return;
            }
            form.setAttribute('action', obj.appPage)
            if(select_marque.children.length == 0){
              let option = document.createElement("option");
              option.innerText = "Marque";
              if(!vehicule){
                option.toggleAttribute("selected");
              }
              select_marque.appendChild(option);
            }
            if(select_modele.children.length == 0){
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
              if(!marques[modele.marqueId])
                marques[modele.marqueId] = modele.marque.name;
              modeles[modele.id] = {name : modele.name, marqueId : modele.marqueId};
            })
            select_marque.addEventListener('change', (e)=>{
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
                  if(modele.marqueId == marqueId){
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
            marques.forEach((marqueName, marqueId ) => {
              let option = document.createElement("option");
              option.innerText = marqueName;
              if(vehicule){
                if(obj.modele.marqueId == marqueId){
                  option.toggleAttribute('selected')
                }
              }
              option.setAttribute("value", marqueId);
              select_marque.appendChild(option);
            })
            if(vehicule){
              modeles.forEach((modele, modeleId) => {
                if(modele.marqueId == obj.modele.marqueId){
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
            justify-content:space-between;
            padding:20px;
          }
          .compatibilite-vehicule-wrapper form select{
            font-size:18px;
            padding: 18px 4px;
            border-radius: 5px;
            border: 1px solid #242424;
            width: 30%;
          }
          .compatibilite-vehicule-wrapper form input{
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