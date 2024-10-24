import { json } from "@remix-run/node";
import { useLoaderData, Link, useNavigate } from "@remix-run/react";
import {
  Card,
  Layout,
  Page,
  Text,
  EmptyState,
  IndexTable,
  BlockStack,
  Divider,
  Bleed,
} from "@shopify/polaris";
import { getModeles } from "../models/modele.server";
import { authenticate } from "../shopify.server";
import { getMarques } from "../models/marque.server";


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
    pagination={{
      hasNext: true,
      hasPrevious: true,
      onNext: () =>{},
      onPrevious: () =>{}
    }}
  >
    {modeles.map((modele) => (
      <TableModelesLigne key={modele.id} modele={modele}/>
    ))}
  </IndexTable>
);

const TableModelesLigne = ({ modele }) => (
  <IndexTable.Row id={"modele" + modele.id} position={modele.id}>
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

const AucuneMarque = ({ onAction }) => (
  <EmptyState
    heading="Ajouter les marques des véhicules"
    action={{
      content: "Ajouter une marque de véhicule",
      onAction,
    }}
    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
  >
    <p>Permets à vos clients de trouver plus rapidement les produits compatibles avec leur véhicule.</p>
  </EmptyState>
);

const TableMarques = ({ marques }) => (
  <IndexTable
    resourceName={{
      singular: "Marque",
      plural: "Marques",
    }}
    itemCount={marques.length}
    headings={[
      { title: "Nom" },
      { title: "Total modèles" },
      { title: "Modifier" },
    ]}
    pagination={{
      hasNext: true,
      onNext: () => {},
    }}
  >
    {marques.map((marque) => (
      <TableMarquesLigne key={marque.id} marque={marque}/>
    ))}
  </IndexTable>
);

const TableMarquesLigne = ({ marque }) => (
  <IndexTable.Row id={"marque" + marque.id} position={marque.id}>
    <IndexTable.Cell>
       {marque.name}
    </IndexTable.Cell>
    <IndexTable.Cell>
      {marque.modeles ? marque.modeles.length : 0}
    </IndexTable.Cell>
    <IndexTable.Cell>
      <Link to={`/app/marques/${marque.id}`}>Modifier</Link>
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
          <BlockStack gap="500">
            <Text as={"h2"} variant="headingLg">
              Marques
            </Text>
            <Card padding={0}>
              {marques.length === 0 ? (
                <AucuneMarque onAction={() => navigate("/app/marques/new")} />
              ) : (
                <TableMarques marques={marques} />
              )}
            </Card>
            <Text as={"h2"} variant="headingLg">
              Modèles
            </Text>
            <Card>
              {modeles.length === 0 ? (
                <AucunModele onAction={() => navigate("/app/modeles/new")} />
              ) : (
                <TableModeles modeles={modeles} page={1} />
              )}
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}