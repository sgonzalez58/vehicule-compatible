import { json } from "@remix-run/node";
import { useLoaderData, Link, useNavigate } from "@remix-run/react";
import {
  Card,
  Layout,
  Page,
  Text,
  EmptyState,
  IndexTable,
} from "@shopify/polaris";
import { getModeles } from "../models/modele.server";
import { authenticate } from "../shopify.server";


export async function loader({ request }) {
  await authenticate.admin(request);
  const modeles = await getModeles();
  console.log(modeles)
  return json({
    modeles
  });
}

const AucunModele = ({ onAction }) => (
  <EmptyState
    heading="Ajouter les véhicules auxquels lier vos produits"
    action={{
      content: "Ajouter un modèle de véhicule",
      onAction,
    }}
    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
  >
    <p>Permets à vos clients de trouver les produits compatibles avec leur véhicule.</p>
  </EmptyState>
);

const TableModeles = ({ modeles }) => (
  <IndexTable
    resourceName={{
      singular: "Modèle",
      plural: "Modèles",
    }}
    itemCount={modeles.length}
    headings={[
      { title: "Nom" },
      { title: "Total produits" },
      { title: "Modifier" },
    ]}
  >
    {modeles.map((modele) => (
      <TableModelesLigne key={modele.id} modele={modele}/>
    ))}
  </IndexTable>
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
        modele.marque.name + ' ' + modele.name
      )}
    </IndexTable.Cell>
    <IndexTable.Cell>
      {modele.produits ? modele.produits.length : 0}
    </IndexTable.Cell>
    <IndexTable.Cell>
      <Link to={`/app/modeles/${modele.id}`}>Modifier</Link>
    </IndexTable.Cell>
  </IndexTable.Row>
);

export default function Index() {
  const { modeles } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Page>
      <ui-title-bar title="Véhicules">
        <button onClick={() => navigate("/app/marques/new")}>
          Ajouter une marque de véhicule
        </button>
        <button variant="primary" onClick={() => navigate("/app/modeles/new")}>
          Ajouter un modèle de véhicule
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          <Card padding="0">
            {modeles.length === 0 ? (
              <AucunModele onAction={() => navigate("/app/modeles/new")} />
            ) : (
              <TableModeles modeles={modeles} />
            )}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}