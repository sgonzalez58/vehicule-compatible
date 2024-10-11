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
} from "@shopify/polaris";

import db from "../db.server";

import { getMarques } from "../models/marque.server";

import { getModele, validateModele } from "../models/modele.server";

export async function loader({ params }) {

  if (params.id === "new") {
    return json({
      modele: { destination : "modele", name: "", marqueId: null },
      marques: await getMarques(),
    });
  }

  const marques = await getMarques();
  const modele = await getModele(Number(params.id));

  return json({
    modele,
    marques
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
      : await db.modele.update({ where: { id: Number(params.id) }, data });

  return redirect(`/app/vehicule`);
}

export default function modeleForm() {
  const errors = useActionData()?.errors || {};

  const { modele = {}, marques = []} = useLoaderData();
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
        <button variant="breadcrumb" onClick={() => navigate("/app")}>
          Modèle
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
              </BlockStack>
            </Card>
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
