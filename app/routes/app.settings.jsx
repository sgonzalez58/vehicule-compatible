import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";

import { getPage } from "../models/page.server";
import { useActionData, useLoaderData, useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import { useState } from "react";
import { BlockStack, Card, Layout, Page, PageActions, Text, TextField } from "@shopify/polaris";

export const loader = async ({request}) => {
  await authenticate.admin(request);
  let page = getPage();
  return json({
    page: page
  });
};

export const action = async ({request}) => {
  const {admin} = await authenticate.admin(request)
   /** @type {any} */
   const data = {
    ...Object.fromEntries(await request.formData())
  };

  if(data.name){
    const response = await admin.graphql(
      `mutation pageCreate($input: PageInput!) {
        pageCreate(input: $input) {
          page {
            body
            handle
            title
          }
          userErrors {
            field
            message
          }
        }
      }`,
      {
        "input": {
          title: "<"+data.name+">",
          body: "[compatibilite_vehicule]",
          published: true
      }}
    );
    let responseJson = await response.json();
    console.log(responseJson.data);
    return redirect(`/app/settings`);
  }

  const errors = validatePage(data);

  if (errors) {
    return json({ errors }, { status: 422 });
  }

  const page =
    params.id === "new"
      ? await db.page.create({ data })
      : await db.page.update({ where: { id: Number(params.id) }, data });

  return redirect(`/app/settings`);
}

export default function settings(){
  const errors = useActionData()?.errors || {};

  const page = useLoaderData();
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
      pageId: formState.pageId
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
                      La page principale de l'application se trouve aujourd'hui sur la page <a href={page.url} target="_blank">{page.name}</a>
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