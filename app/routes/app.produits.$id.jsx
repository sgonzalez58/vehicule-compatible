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
  Bleed,
  Divider,
  Thumbnail,
  EmptyState,
  IndexTable,
} from "@shopify/polaris";

import db from "../db.server";

import { getMarques } from "../models/marque.server";

import { getModeles } from "../models/modele.server";
import { getProduit, validateProduit } from "../models/produit.server";
export async function loader({ params }) {

  if (params.id === "new") {
    return json({
      produit: { destination : "produit", productId: null, productName: "", productImage: "", modeles: []},
      marques: await getMarques(),
      modeles: await getModeles()
    });
  }

  const marques = await getMarques();
  const modeles = await getModeles();
  const produit = await getProduit(Number(params.id))

  return json({
    produit,
    modeles,
    marques
  });
}

export async function action({ request, params }) {

  /** @type {any} */
  const data = {
    ...Object.fromEntries(await request.formData())
  };

  if (data.action === "delete") {
    await db.produit.delete({ where: { id: Number(params.id) } });
    return redirect("/app/vehicule");
  }
  
  const errors = validateProduit(data);

  if (errors) {
    return json({ errors }, { status: 422 });
  }

  const produit =
    params.id === "new"
      ? await db.produit.create({ data })
      : await db.produit.update({ where: { id: Number(params.id) }, data });

  return redirect(`/app/produit`);
}

export default function modeleForm() {
  const errors = useActionData()?.errors || {};

  const { produit = {}, modeles = [], marques = []} = useLoaderData();
  const [formState, setFormState] = useState(produit || {});
  const [cleanFormState, setCleanFormState] = useState(produit || {});
  const isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState);

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
      const { images, id, title } = products[0];
      
      setFormState({
        ...formState,
        productId: id,
        productName: title,
        productImage: images[0]?.originalSrc,
      })
    }
  }

  useEffect(() => {
    if (!formState.modeles && modeles.length > 0) {
      setFormState((prevState) => ({
        ...prevState,
        modeles: {
          Connect: {
            where: {
              id: modeles[0].id
            }
          }
        }
      }));
    }
  }, [marques, formState.marqueId]);

  function handleModeleAdd(selectedModeleId) {
    setFormState({
      ...formState,
      modeles: {
        Connect: {
          where: {
            id: selectedModeleId
          }
        }
      }
    });
  }
  
  const AucunModele = ({ onAction }) => (
    <EmptyState
      heading="Ajouter les véhicules auxquels lier vos produits"
      action={{
        content: "Ajouter un véhicule",
        onAction,
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    >
      <p>Permets à vos clients de trouver les produits compatibles avec leur véhicule.</p>
      <Select
        label="Sélectionner un véhicule"
        options={modeles.map((modele) => ({
          label: marques.find((marque) => marque.id === modele.id).name + ' ' + modele.name,
          value: modele.id,
        }))}
        onChange={handleModeleAdd}
        value={String(formState.marqueId || "")}
        error={errors.marqueId}
      />
    </EmptyState>
  );
  
  const TableModeles = ({ modeles, marques }) => (
    <IndexTable
      resourceName={{
        singular: "Modèle",
        plural: "Modèles",
      }}
      itemCount={modeles.length}
      headings={[
        { title: "Nom" },
        { title: "Modifier" },
      ]}
    >
      {modeles.map((modele) => (
        <TableModelesLigne key={modele.id} modele={modele} marque={marques.find((marque) => marque.id === modele.marqueId)}/>
      ))}
    </IndexTable>
  );
  
  const TableModelesLigne = ({ modele, marque }) => (
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
          marque.name + ' ' + modele.name
        )}
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Link to={`/app/modeles/${modele.id}`}>Modifier</Link>
      </IndexTable.Cell>
    </IndexTable.Row>
  );

  
  const submit = useSubmit();

  function handleSave() {
    const data = {
      productId: formState.productId,
      productName: formState.productName,
      productImage: formState.productImage,
      modeles: formState.modeles
    };

    setCleanFormState({ ...formState });
    submit(data, { method: "post" });
  }

  return (
    <Page>
      <ui-title-bar title={produit.id ? "Modifier un produit" : "Choisir un produit à lier"}>
        <button variant="breadcrumb" onClick={() => navigate("/app")}>
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
            <Card padding="0">
              {produit.modeles.length === 0 ? (
                <AucunModele onAction={() => handleSave} />
              ) : (
                <TableModeles modeles={produit.modeles} marques={marques} />
              )}
            </Card>
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
