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

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export const action = async ({ request }) => {
  await authenticate.admin(request);
};

export default function Index() {
  return (
    <Page>
      <TitleBar title="Compatibilité véhicule">
      </TitleBar>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="500">
                <BlockStack gap="200">
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
                </BlockStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
