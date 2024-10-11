import { json } from "@remix-run/node";
import { useLoaderData, Link, useNavigate } from "@remix-run/react";
import {
  Card,
  Layout,
  Page,
  EmptyState,
  IndexTable,
  Thumbnail,
} from "@shopify/polaris";
import { ImageIcon } from "@shopify/polaris-icons"

import { getProduits } from "../models/produit.server";
import { authenticate } from "../shopify.server";


export async function loader({ request }) {
  await authenticate.admin(request);
  const produits = await getProduits();
  return json({
    produits
  });
}

const AucunProduit = ({ onAction }) => (
  <EmptyState
    heading="Ajouter les produits compatibles avec les véhicules"
    action={{
      content: "Lier un produit",
      onAction,
    }}
    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
  >
    <p>Permets à vos clients de trouver les produits compatibles avec leur véhicule.</p>
  </EmptyState>
);

function truncate(str, { length = 25 } = {}) {
  if (!str) return "";
  if (str.length <= length) return str;
  return str.slice(0, length) + "…";
}

const TableProduit = ({ produits }) => (
  <IndexTable
    resourceName={{
      singular: "Produit",
      plural: "Produits",
    }}
    itemCount={produits.length}
    headings={[
      { title : "Photo", hidden: "true"},
      { title: "Nom" },
      { title: "Total véhicules" },
      { title: "Modifier" }
    ]}
  >
    {produits.map((produit) => (
      <TableProduitsLigne key={produit.id} produit={produit}/>
    ))}
  </IndexTable>
);

const TableProduitsLigne = ({ produit }) => (
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
      {produit.modeles ? count(produit.modeles) : 0}
    </IndexTable.Cell>
    <IndexTable.Cell>
      <Link to={`/app/produits/${produit.id}`}>Modifier</Link>
    </IndexTable.Cell>
  </IndexTable.Row>
);

export default function Index() {
  const { produits } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Page>
      <ui-title-bar title="Produits">
        <button variant="primary" onClick={() => navigate("/app/produits/new")}>
          Lier un nouveau produit
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          <Card padding="0">
            {produits.length === 0 ? (
              <AucunProduit onAction={() => navigate("/app/produits/new")} />
            ) : (
              <TableProduit produits={produits} />
            )}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}