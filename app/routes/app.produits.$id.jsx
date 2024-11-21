import { useState } from "react";
import { json, redirect } from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useNavigation,
  useSubmit,
  useNavigate,
} from "@remix-run/react";
import {
  Card,
  Layout,
  Page,
  Text,
  BlockStack,
  PageActions,
  InlineStack,
  Select,
  Button,
  Thumbnail,
  EmptyState,
  IndexTable,
} from "@shopify/polaris";

import db from "../db.server";

import { getMarques } from "../models/marque.server";
import { getModeles } from "../models/modele.server";
import { getProduit, updateProduit, validateProduit } from "../models/produit.server";
import { authenticate } from "../shopify.server";
import { getTypes } from "../models/type.server";

export async function loader({ params, request }) {
  const { session } = await authenticate.admin(request);
  if (params.id === "new") {
    return json({
      produit: { destination : "produit", productId: null, productName: "", productImage: "", productUrl: "", productPrice: 0, modeles: []},
      modeles: await getModeles(),
      session,
      marques : await getMarques(),
      types: await getTypes()
    });
  }
  const marques = await getMarques();
  const modeles = await getModeles();
  const produit = await getProduit(Number(params.id))
  const types = await getTypes();

  const produitModeles = [];

  for (const modeleType of produit.modeleTypes){
    if(!produitModeles.includes(modeleType.modele)){
      produitModeles.push(modeleType.modele);
    }
  }

  return json({
    produit,
    modeles,
    session,
    marques,
    types,
    produitModeles
  });
}

export async function action({ request, params }) {

  const { admin } = await authenticate.admin(request);

  /** @type {any} */
  const data = {
    ...Object.fromEntries(await request.formData())
  };

  if (data.action === "delete") {
    await db.produit.delete({ where: { id: Number(params.id) } });
    return redirect("/app/produit");
  }
  
  const errors = validateProduit(data);

  if (errors) {
    return json({ errors }, { status: 422 });
  }

  const produit =
    params.id === "new"
      ? await db.produit.create({ data })
      : await updateProduit(Number(params.id), data);

  return redirect(`/app/produits/${produit.id}`);
}

export default function modeleForm() {
  const errors = useActionData()?.errors || {};

  const { produit = {}, modeles = [], session, marques = [], types = [], produitModeles = [] } = useLoaderData();
  const [formState, setFormState] = useState(produit || {});
  const [cleanFormState, setCleanFormState] = useState(produit || {});
  const isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState);

  const shop = session.shop;

  const nav = useNavigation();
  const isSaving =
    nav.state === "submitting" && nav.formData?.get("action") !== "delete";
  const isDeleting =
    nav.state === "submitting" && nav.formData?.get("action") === "delete";

  const navigate = useNavigate();

  async function selectProduct() {
    const products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
    });

    if (products) {
      const { images, id, title, handle, variants } = products[0];

      let minimum_price = variants[0].price;

      for (const variant in variants){
        if (variant.price < minimum_price){
          minimum_price = variant.price;
        }
      }
      
      setFormState({
        ...formState,
        productId: id,
        productName: title,
        productImage: images[0]?.originalSrc,
        productUrl: "/products/" + handle,
        productPrice: minimum_price
      })
    }
  }

  function handleModeleAdd(selectedModeleId) {
    let data = {
      productId: formState.productId,
      productName: formState.productName,
      productImage: formState.productImage,
      productUrl: formState.productUrl,
      productPrice: formState.productPrice,
      modeleId: Number(selectedModeleId)
    };
    
    setCleanFormState({ ...formState });
    submit(data, { method: "post" });
  }

  function supprimerProduct(modeleTypeId) {
    let data = {
      productId: formState.productId,
      productName: formState.productName,
      productImage: formState.productImage,
      productUrl: formState.productUrl,
      productPrice: formState.productPrice,
      deleteModeleTypeId: Number(modeleTypeId)
    };
    
    setCleanFormState({ ...formState });
    submit(data, { method: "post" });

  }
  
  const AucunModele = ({ onAction }) => (
    <EmptyState
      heading="Ajouter les véhicules auxquels lier vos produits"
      action={{
        content: "Je ne trouve pas mon modèle",
        onAction,
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    >
      <p>Permets à vos clients de trouver les produits compatibles avec leur véhicule.</p>
      
      <Select
        label="Sélectionner un véhicule"
        options={modeles.map((modele) => ({
          label: modele.marque.name + ' ' + modele.name,
          value: modele.id,
        }))}
        value={formState.modeleId || ""}
        onChange={handleModeleAdd}
        placeholder="Choisir un véhicule"
      />
    </EmptyState>
  );

  const AucuneMarque = ({ onAction}) => (
    <EmptyState
      heading="Vous devez créer des véhicules avant de pouvoir les liers à vos produits."
      action={{
        content: "Ajouter un véhicule",
        onAction,
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    ></EmptyState>
  )

  function arrayDiff(array1, array2){
    const isSameModele = (a, b) => a.id === b.id;
    const onlyInLeft = (left, right, compareFunction) => 
      left.filter(leftValue =>
        !right.some(rightValue => 
          compareFunction(leftValue, rightValue)));
    
    const onlyInA = onlyInLeft(array1, array2, isSameModele);
    const onlyInB = onlyInLeft(array2, array1, isSameModele);
    return [...onlyInA, ...onlyInB];
  }
  
  const TableModeles = ({ produitModeles }) => (
    <Card>
      <Select
        label="Sélectionner un véhicule"
        options={arrayDiff(modeles, produitModeles).map((modele) => ({
          label: modele.marque.name + ' ' + modele.name,
          value: modele.id,
        }))}
        value={formState.modeleId || ""}
        onChange={handleModeleAdd}
        placeholder="Choisir un véhicule"
      />
      <Button variant="tertiary" onClick={()=> navigate("/app/modeles/new")} >Je ne trouve pas le modèle.</Button>
      <IndexTable
        resourceName={{
          singular: "Modèle",
          plural: "Modèles",
        }}
        itemCount={produitModeles.length}
        headings={[
          { title: "Nom" },
          { title: "VP"},
          { title: "VU"},
          { title: "Supprimer" },
        ]}
      >
        {produitModeles.map((modele) => (
          <TableModelesLigne key={modele.id} modele={modele}/>
        ))}
      </IndexTable>
    </Card>
  );
  
  const TableModelesLigne = ({ modele }) => (
    <IndexTable.Row id={modele.id} position={modele.id}>
      <IndexTable.Cell>
        {modele.marqueDeleted ? (
          <InlineStack align="start" gap="200">
            <span style={{ width: "20px" }}>
              <Icon source={AlertDiamondIcon} tone="critical" />
            </span>
            <Text tone="critical" as="span">
              Sa marque de véhicule a été supprimée
            </Text>
          </InlineStack>
        ) : (
          modeles.find((selectModele) => selectModele.id === Number(modele.id)).marque.name + ' ' + modele.name
        )}
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Button tone="critical" variant="primary" onClick={() => supprimerProduct(modeleTypeId)}>
          Supprimer
        </Button>
      </IndexTable.Cell>
    </IndexTable.Row>
  );

  
  const submit = useSubmit();

  function handleSave() {
    let data = {
      productId: formState.productId,
      productName: formState.productName,
      productImage: formState.productImage,
      productUrl: formState.productUrl,
      productPrice: formState.productPrice,
    };
    
    setCleanFormState({ ...formState });
    submit(data, { method: "post" });
  }

  return (
    <Page>
      <ui-title-bar title={produit.id ? "Modifier un produit" : "Choisir un produit à lier"}>
        <button variant="breadcrumb" onClick={() => navigate("/app/produit")}>
          Produits
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Card>
              <BlockStack gap="500">
                <InlineStack align="space-between">
                  <Text as={"h2"} variant="headingLg">
                    Produit
                  </Text>
                  {formState.productId ? (
                    <Button variant="plain" onClick={selectProduct}>
                      Changer le produit
                    </Button>
                  ) : null}
                </InlineStack>
                {formState.productId ? (
                  <InlineStack blockAlign="center" gap="500">
                    <Thumbnail
                      source={formState.productImage || ImageIcon}
                      alt={formState.productName}
                    />
                    <Text as="span" variant="headingMd" fontWeight="semibold">
                      {formState.productName}
                    </Text>
                  </InlineStack>
                ) : (
                  <BlockStack gap="200">
                    <Button onClick={selectProduct} id="select-product">
                      Choisir le produit
                    </Button>
                    {errors.produit ? (
                      <InlineError
                        message={errors.produit}
                        fieldID="myFieldID"
                      />
                    ) : null}
                  </BlockStack>
                )}
              </BlockStack>
            </Card>
            {produit.id ? (
              <Card padding="0">
              {produitModeles.length === 0 ?
                modeles.length === 0 ?
                  marques.length === 0 ? 
                  ( <AucuneMarque onAction={() => navigate( "/app/marques/new" )} />)
                :
                ( <AucuneMarque onAction={() => navigate( "/app/modeles/new" )} />)
              :
              (
                <AucunModele onAction={() => navigate( "/app/modeles/new" )}/>
              ) : (
                <TableModeles produitModeles={produitModeles} />
              )}
            </Card>
            ) : ""
            }            
          </BlockStack>
        </Layout.Section>
        <Layout.Section>
          <PageActions
            secondaryActions={[
              {
                content: "Delete",
                loading: isDeleting,
                disabled: !produit.id || !produit || isSaving || isDeleting,
                destructive: true,
                outline: true,
                onAction: () =>
                  submit({ action: "delete" }, { method: "post" }),
              },
            ]}
            primaryAction={{
              content: "Save",
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
