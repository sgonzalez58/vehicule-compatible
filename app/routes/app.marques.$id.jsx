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
  TextField,
  BlockStack,
  PageActions,
} from "@shopify/polaris";

import db from "../db.server";
import { getMarque, validateMarque } from "../models/marque.server";

export async function loader({ request, params }) {

  if (params.id === "new") {
    return json({
      destination: "marque",
      name: "",
    });
  }

  return json(await getMarque(Number(params.id)));
}

export async function action({ request, params }) {

  /** @type {any} */
  const data = {
    ...Object.fromEntries(await request.formData())
  };

  if (data.action === "delete") {
    await db.marque.delete({ where: { id: Number(params.id) } });
    return redirect("/app");
  }

  const errors = validateMarque(data);

  if (errors) {
    return json({ errors }, { status: 422 });
  }

  const marque =
    params.id === "new"
      ? await db.marque.create({ data })
      : await db.marque.update({ where: { id: Number(params.id) }, data });

  return redirect(`/app/vehicule`);
}

export default function marqueForm() {
  const errors = useActionData()?.errors || {};

  const marque = useLoaderData();
  const [formState, setFormState] = useState(marque);
  const [cleanFormState, setCleanFormState] = useState(marque);
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
      name: formState.name
    };

    setCleanFormState({ ...formState });
    submit(data, { method: "post" });
  }

  return (
    <Page>
      <ui-title-bar title={marque.id ? "Modifier une marque" : "Ajouter une marque"}>
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
                  helpText="Le nom de la marque"
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
            secondaryActions={[
              {
                content: "Delete",
                loading: isDeleting,
                disabled: !marque.id || !marque || isSaving || isDeleting,
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
