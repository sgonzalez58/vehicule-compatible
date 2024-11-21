import {
  Page,
  Layout,
  Text,
  Card,
  BlockStack,
  Link,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import { getPage } from "../models/page.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  let page = await getPage();
  if(!page){
    page = { id: null, name: "", idShopify: "", url: ""}
  }
  return json({
    page: page
  });
};

export const action = async ({ request }) => {
  await authenticate.admin(request);
};

export default function Index() {
  const { page } = useLoaderData();
  return (
    <Page>
      <TitleBar title="Compatibilité véhicule">
      </TitleBar>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="500">
                  <Text as="h2" variant="headingMd">
                    Bonjour et bienvenu dans l'application de compatibilité de véhicule.
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Cette application permet de{" "}
                    <Link url="app/produit" removeUnderline>
                      lier des produits
                    </Link>{" "}
                    à des véhicules préalablement ajoutés à{" "}
                    <Link url="/app/vehicule" removeUnderline>
                      la liste des véhicules existant
                    </Link>
                    .
                  </Text>
                {page.id ? (
                    <Text>
                      La page principale de l'application se trouve aujourd'hui sur la page <a href={"https://admin.shopify.com/store/" + session.shop.split('.').shift() + "/pages/" + page.idShopify.split('/').pop()} target="_blank">{page.name}</a>
                      <br/>Vous pouvez modifier le nom de la page ci-dessous.
                    </Text>
                  ) : (
                    <Text>
                      La page principale de l'application n'est pas défini. Vous pouvez la définir sur ce <Link url="/app/settings">lien</Link>.
                    </Text>
                  )
                }
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
