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
import { getMarques } from "../models/marque.server";
import { getModeles } from "../models/modele.server";
import { authenticate } from "../shopify.server";


export async function loader({ request }) {
  await authenticate.admin(request);
  const modeles = await getModeles();
  const marques = await getMarques();
  return json({
    modeles,
    marques
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

export default function Index() {
  const { modeles, marques } = useLoaderData();
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
              <TableModeles modeles={modeles} marques={marques} />
            )}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}