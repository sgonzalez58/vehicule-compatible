import { useState, useEffect } from "react";
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
  TextField,
  BlockStack,
  PageActions,
  InlineStack,
  Select,
  Button,
  EmptyState,
  IndexTable,
  Thumbnail,
} from "@shopify/polaris";

import db from "../db.server";

import { getMarques } from "../models/marque.server";

import { getModele, updateModele, validateModele } from "../models/modele.server";

import { getProduits } from "../models/produit.server";
import { authenticate } from "../shopify.server";

export async function loader({ params, request }) {
  await authenticate.admin(request);
  if (params.id === "new") {
    return json({
      modele: { destination : "modele", name: "", marqueId: null },
      marques: await getMarques(),
      produits: await getProduits(),
    });
  }

  const marques = await getMarques();
  const produits = await getProduits();
  const modele = await getModele(Number(params.id));

  return json({
    modele,
    marques,
    produits
  });
}

export async function action({ request, params }) {

  /** @type {any} */
  const data = {
    ...Object.fromEntries(await request.formData())
  };

  if (data.action === "delete") {
    await db.modele.delete({ where: { id: Number(params.id) } });
    return redirect("/app/vehicule");
  }

  data.marqueId = Number(data.marqueId);

  const errors = validateModele(data);


  if (errors) {
    return json({ errors }, { status: 422 });
  }

  const modele =
    params.id === "new"
      ? await db.modele.create({ data })
      : await updateModele(Number(params.id), data);

  return redirect(`/app/modeles/${modele.id}`);
}

export default function modeleForm() {
  const errors = useActionData()?.errors || {};

  const { modele = {}, marques = [], produits = []} = useLoaderData();
  const [formState, setFormState] = useState(modele || {});
  const [cleanFormState, setCleanFormState] = useState(modele || {});
  const isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState);

  const nav = useNavigation();
  const isSaving =
    nav.state === "submitting" && nav.formData?.get("action") !== "delete";
  const isDeleting =
    nav.state === "submitting" && nav.formData?.get("action") === "delete";

  const navigate = useNavigate();
  const submit = useSubmit();

  useEffect(() => {
    if (!formState.marqueId && marques.length > 0) {
      setFormState((prevState) => ({
        ...prevState,
        marqueId: marques[0].id,
        marqueName: marques[0].name,
      }));
    }
  }, [marques, formState.marqueId]);

  function handleMarqueChange(selectedMarqueId) {
    const selectedMarque = marques.find((marque) => marque.id === Number(selectedMarqueId));

    setFormState({
      ...formState,
      marqueId: selectedMarque.id,
      marqueName: selectedMarque.name,
    });
  }

  function handleProduitAdd(produitId) {
    let data = {
      name: formState.name,
      marqueId: formState.marqueId,
      produitId: Number(produitId)
    };
    
    setCleanFormState({ ...formState });
    submit(data, { method: "post" });
  }

  function supprimerProduct(modeleId) {
    let data = {
      name: formState.name,
      marqueId: formState.marqueId,
      deleteProduitId: Number(modeleId)
    };
    
    setCleanFormState({ ...formState });
    submit(data, { method: "post" });

  }
  
  const AucunProduit = ({ onAction }) => (
    <EmptyState
      heading="Ajouter les produits auxquels lier vos véhicules"
      action={{
        content: "Je ne trouve pas mon produit",
        onAction,
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    >
      <p>Permets à vos clients de trouver les produits compatibles avec leur véhicule.</p>
      
      <Select
        label="Sélectionner un produit"
        options={produits.map((produit) => ({
          label: produit.productName,
          value: produit.id,
        }))}
        value={formState.productId || ""}
        onChange={handleProduitAdd}
        placeholder="Choisir un produit"
      />
    </EmptyState>
  );

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

  function truncate(str, { length = 25 } = {}) {
    if (!str) return "";
    if (str.length <= length) return str;
    return str.slice(0, length) + "…";
  }
  
  const TableProduits = ({ modeleProduits }) => (
    <Card>
      <Select
        label="Sélectionner un produit"
        options={arrayDiff(produits, modeleProduits).map((produit) => ({
          label: produit.productName,
          value: produit.id,
        }))}
        value={formState.produitId || ""}
        onChange={handleProduitAdd}
        placeholder="Choisir un produit"
      />
      <Button variant="tertiary" onClick={()=> navigate("/app/produits/new")} >Je ne trouve pas le produit.</Button>
      <IndexTable
        resourceName={{
          singular: "Modèle",
          plural: "Modèles",
        }}
        itemCount={modeleProduits.length}
        headings={[
          { title: "Thumbnail"},
          { title: "Nom" },
          { title: "Supprimer" },
        ]}
      >
        {modeleProduits.map((produit) => (
          <TableProduitLigne key={produit.id} produit={produit}/>
        ))}
      </IndexTable>
    </Card>
  );
  
  const TableProduitLigne = ({ produit }) => (
    <IndexTable.Row id={produit.id} position={produit.id}>
      <IndexTable.Cell>
        <Thumbnail
          source={produit.productImage || ImageIcon}
          alt={produit.productName}
          size="small"
        />
      </IndexTable.Cell>
      <IndexTable.Cell>
        {truncate(produit.productName)}
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Button tone="critical" variant="primary" onClick={() => supprimerProduct(produit.id)}>
          Supprimer
        </Button>
      </IndexTable.Cell>
    </IndexTable.Row>
  );

  function handleSave() {
    const data = {
      name: formState.name,
      marqueId: formState.marqueId
    };

    setCleanFormState({ ...formState });
    submit(data, { method: "post" });
  }

  return (
    <Page>
      <ui-title-bar title={modele.id ? "Modifier un modèle" : "Ajouter un modèle"}>
        <button variant="breadcrumb" onClick={() => navigate("/app/vehicule")}>
          Véhicules
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Card>
              <BlockStack gap="500">
                <Text as={"h2"} variant="headingLg">
                  Nom
                </Text>
                <TextField
                  id="name"
                  helpText="Le modèle du véhicule"
                  label="name"
                  labelHidden
                  autoComplete="off"
                  value={formState.name}
                  onChange={(name) => setFormState({ ...formState, name })}
                  error={errors.name}
                />
              </BlockStack>
            </Card>
            <Card>
              <BlockStack gap="500">
                <InlineStack align="space-between">
                  <Text as={"h2"} variant="headingLg">
                    Marques
                  </Text>
                </InlineStack>
                <Select
                  label="Sélectionner une marque"
                  options={marques.map((marque) => ({
                    label: marque.name,
                    value: String(marque.id),
                  }))}
                  onChange={handleMarqueChange}
                  value={String(formState.marqueId || "")}
                  error={errors.marqueId}
                />
                <Button variant="tertiary" onClick={()=> navigate("/app/marques/new")} >Je ne trouve pas la marque.</Button>
              </BlockStack>
            </Card>
            {modele.id ? (
              <Card padding="0">
              {modele.produits.length === 0 ? (
                <AucunProduit onAction={() => navigate( "/app/produits/new" )}/>
              ) : (
                <TableProduits modeleProduits={modele.produits} />
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
                disabled: !modele.id || !modele || isSaving || isDeleting,
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
