import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import {
  BlockStack,
  Card,
  ChoiceList,
  EmptyState,
  IndexFilters,
  IndexFiltersMode,
  IndexTable,
  Layout,
  Link,
  Page,
  Text,
  useSetIndexFiltersMode,
} from "@shopify/polaris";
import { getModeles } from "../models/modele.server";
import { authenticate } from "../shopify.server";
import { getMarques } from "../models/marque.server";
import { useCallback, useState } from "react";


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

const TableModeles = ({ modeles, nextPage, previousPage, onNext, onPrevious, currentPage, totalModele }) => (
  <IndexTable
    resourceName={{
      singular: "Modèle",
      plural: "Modèles",
    }}
    itemCount={modeles.length}
    headings={[
      { title: "Nom" },
      { title: "Total produits VP" },
      { title: "Total produits VU" },
      { title: "Modifier" },
    ]}
    pagination={{
      hasNext: nextPage,
      onNext: onNext,
      hasPrevious: previousPage,
      onPrevious: onPrevious,
      label:(currentPage-1)*10+1 + "-" + Number((currentPage-1) * 10 + (modeles.length)) + ' sur ' + totalModele + " marques"
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
      {modele.modeleTypes.filter((modeleType)=>modeleType.type.name == "VP").length > 0 ? modele.modeleTypes.filter((modeleType) => modeleType.type.name == "VP")[0].produits.length : "Na"}
    </IndexTable.Cell>
    <IndexTable.Cell>
      {modele.modeleTypes.filter((modeleType)=>modeleType.type.name == "VU").length > 0 ? modele.modeleTypes.filter((modeleType) => modeleType.type.name == "VU")[0].produits.length : "Na"}
    </IndexTable.Cell>
    <IndexTable.Cell>
      <Link url={`/app/modeles/${modele.id}`}>Modifier</Link>
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

const TableMarques = ({ marques, nextPage, previousPage, onNext, onPrevious, currentPage, totalMarque }) => (
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
      hasNext: nextPage,
      onNext: onNext,
      hasPrevious: previousPage,
      onPrevious: onPrevious,
      label:(currentPage-1)*10+1 + "-" + Number((currentPage-1) * 10 + (marques.length)) + ' sur ' + totalMarque + " marques"
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
      <Link url={`/app/marques/${marque.id}`}>Modifier</Link>
    </IndexTable.Cell>
  </IndexTable.Row>
);

export default function Index() {
  const { modeles, marques } = useLoaderData();
  const navigate = useNavigate();

  const [pageMarques, setPageMarques] = useState(1);
  const [marquesTableau, setMarquesTableau] = useState(marques.slice(0, 9));
  const [marquesTableauComplet, setMarquesTableauComplet] = useState(marques);
  const [nombreMarquesTableau, setNombreMarquesTableau] = useState(marques.length);
  const [nextPageMarques, setNextPageMarques] = useState(marquesTableau.length < nombreMarquesTableau);
  const [previousPageMarques, setPreviousPageMarques] = useState(pageMarques != 1);

  const [pageModeles, setPageModeles] = useState(1);
  const [modelesTableau, setModelesTableau] = useState(modeles.slice(0, 9));
  const [modelesTableauComplet, setModelesTableauComplet] = useState(modeles);
  const [nombreModelesTableau, setNombreModelesTableau] = useState(modeles.length);
  const [nextPageModeles, setNextPageModeles] = useState(modelesTableau.length < nombreModelesTableau);
  const [previousPageModeles, setPreviousPageModeles] = useState(pageModeles != 1);

  const [itemStrings, setItemsStrings] = useState([
    'All'
  ]);


  const tabsModeles = itemStrings.map((item, index) => ({
    content: item,
    index,
    id: `${item}-modele-${index}`,
    isLocked: index === 0,
  }));

  const [selectedModeles, setSelectedModeles] = useState(0);
  const {mode, setMode} = useSetIndexFiltersMode(IndexFiltersMode.Filtering);
  const [filtreMarque, setFiltreMarque] = useState([]);

  const [queryValueModeles, setQueryValueModeles] = useState("");

  const [itemStringsMarques, setItemStringsMarques] = useState([
    'All'
  ]);

  const tabsMarques = itemStringsMarques.map((item, index) => ({
    content: item,
    index,
    id: `${item}-marque-${index}`,
    isLocked: index === 0,
  }));

  const [selectedMarques, setSelectedMarques] = useState(0);
  const marqueMode = useSetIndexFiltersMode(IndexFiltersMode.Filtering);
  const [modeMarque, setModeMarque] = Object.values(marqueMode);

  const [queryValueMarques, setQueryValueMarques] = useState("");

  const handleQueryValueMarquesChange = useCallback(
    (value) => {
      setQueryValueMarques(value);
      let newMarquesArray = handleMarquesTableauUpdate(value);
      setMarquesTableauComplet(newMarquesArray);
      setMarquesTableau(newMarquesArray.slice(0,9))
      setPageMarques(1);
      setNombreMarquesTableau(newMarquesArray.length);
      setPreviousPageMarques(false);
      setNextPageMarques(newMarquesArray.slice(0,9).length < newMarquesArray.length);
    }
  );
  const handleQueryValueMarquesRemove = useCallback(
    () => {
      setQueryValueMarques("");
      setMarquesTableauComplet(marques)
      setMarquesTableau(marques.slice(0,9))
      setPageMarques(1);
      setNombreMarquesTableau(marques.length)
      setPreviousPageMarques(false)
      setNextPageMarques(marques.slice(0,9).length < marques.length)
    }
  );

  const handleMarquesTableauUpdate = (query) =>{
    return (
      query != "" ?
        marques.filter((marque) => ((new RegExp(query, 'i')).test(marque.name)))
        : marques
    )
  }

  const handleNewPageMarques = useCallback(
    (value) => {
      setPageMarques(value);
      setMarquesTableau(marquesTableauComplet.slice(10 * (value - 1), 9 + 10 * (value - 1)))
      setPreviousPageMarques(value != 1);
      setNextPageMarques(marquesTableauComplet.slice(10 * (value - 1), 9 + 10 * (value - 1)).length + 10 * (value - 1) < nombreMarquesTableau)
    },
    [marquesTableauComplet, nombreMarquesTableau]
  )

  const handleFiltreMarqueChange = useCallback(
    (value) => {
      setFiltreMarque(value);
      let newModelesArray = handleModelesTableauUpdate(value, queryValueModeles);
      setModelesTableauComplet(newModelesArray)
      setModelesTableau(newModelesArray.slice(0,9))
      setPageModeles(1);
      setNombreModelesTableau(newModelesArray.length);
      setPreviousPageModeles(false);
      setNextPageModeles(newModelesArray.slice(0,9).length < newModelesArray.length);
      },
      [queryValueModeles]
  );
  const handleQueryValueModelesChange = useCallback(
    (value) => {
      setQueryValueModeles(value);
      let newModelesArray = handleModelesTableauUpdate(filtreMarque, value);
      setModelesTableauComplet(newModelesArray);
      setModelesTableau(newModelesArray.slice(0,9))
      setPageModeles(1);
      setNombreModelesTableau(newModelesArray.length);
      setPreviousPageModeles(false);
      setNextPageModeles(newModelesArray.slice(0,9).length < newModelesArray.length);
    },
    [filtreMarque]
  );
  const handleFiltreMarqueRemove = useCallback(
    () => {
      setFiltreMarque([]);
      let newModelesArray = handleModelesTableauUpdate([], queryValueModeles);
      setModelesTableauComplet(newModelesArray);
      setModelesTableau(newModelesArray.slice(0,9))
      setPageModeles(1);
      setNombreModelesTableau(newModelesArray.length)
      setPreviousPageModeles(false)
      setNextPageModeles(newModelesArray.slice(0,9).length < newModelesArray.length)
    },
    [queryValueModeles]
  );
  const handleQueryValueModelesRemove = useCallback(
    () => {
      setQueryValueModeles("");
      let newModelesArray = handleModelesTableauUpdate(filtreMarque, "");
      setModelesTableauComplet(newModelesArray)
      setModelesTableau(newModelesArray.slice(0,9))
      setPageModeles(1);
      setNombreModelesTableau(newModelesArray.length)
      setPreviousPageModeles(false)
      setNextPageModeles(newModelesArray.slice(0,9).length < newModelesArray.length)
    },
    [filtreMarque]
  );
  const handleFiltersClearAll = useCallback(() => {
    handleFiltreMarqueRemove();
    handleQueryValueModelesRemove();
  }, [
    handleQueryValueModelesRemove,
    handleFiltreMarqueRemove,
  ]);

  const handleModelesTableauUpdate = (filtreMarque, query) =>{
    return (
      filtreMarque.length > 0 ? 
      (
        query != "" ?
        modeles.filter((modele) => filtreMarque.includes(modele.marque.name) && ((new RegExp(query, 'i')).test(modele.marque.name + ' ' + modele.name)))
        : modeles.filter((modele) => filtreMarque.includes(modele.marque.name))
      )
      : (
        query != "" ?
          modeles.filter((modele) => ((new RegExp(query, 'i')).test(modele.marque.name + ' ' + modele.name)))
          : modeles
        )
    )
  }

  const renderChoiceList = (marques) =>{
      let choicelist = [];
      Object.values(marques).forEach(marque => {
        choicelist.push({"label": marque.name, "value": marque.name});
      })
      return choicelist;
    }

  const choiceList = renderChoiceList(marques);

  const filters = [
    {
      key: 'marques',
      label: 'Marques',
      filter: (
        <ChoiceList
          title="Marques"
          titleHidden
          choices={choiceList}
          selected={filtreMarque || []}
          onChange={handleFiltreMarqueChange}
          allowMultiple
        />
      ),
      shortcut: true,
    }
  ];

  const appliedFilters = [];
  if (filtreMarque && !isEmpty(filtreMarque)) {
    const key = 'marques';
    appliedFilters.push({
      key,
      label: separerMarques(filtreMarque),
      onRemove: handleFiltreMarqueRemove,
    });
  }

  function separerMarques(marques){
    return Array.from(marques).join(', ')
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === '' || value == null;
    }
  }

  const handleNewPageModeles = useCallback(
    (value) => {
      setPageModeles(value);
      setModelesTableau(modelesTableauComplet.slice(10 * (value - 1), 9 + 10 * (value - 1)))
      setPreviousPageModeles(value != 1);
      setNextPageModeles(modelesTableauComplet.slice(10 * (value - 1), 9 + 10 * (value - 1)).length + 10 * (value - 1) < nombreModelesTableau)
    },
    [modelesTableauComplet, nombreModelesTableau]
  )

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
                <Card padding={0}>
                  <IndexFilters                    
                    queryValue={queryValueMarques}
                    queryPlaceholder="Rechercher dans le nom"
                    onQueryChange={handleQueryValueMarquesChange}
                    onQueryClear={handleQueryValueMarquesRemove}
                    tabs={tabsMarques}
                    selected={selectedMarques}
                    onSelect={setSelectedMarques}
                    filters={[]}
                    mode={modeMarque}
                    setMode={setModeMarque}
                  />
                  <TableMarques
                    marques={marquesTableau}
                    onNext={() => handleNewPageMarques(pageMarques + 1)}
                    onPrevious={() => handleNewPageMarques(pageMarques - 1)}
                    nextPage={nextPageMarques}
                    previousPage={previousPageMarques}
                    currentPage={pageMarques}
                    totalMarque={nombreMarquesTableau}
                  />
                </Card>
              )}
            </Card>
            <Text as={"h2"} variant="headingLg">
              Modèles
            </Text>
            
              {modeles.length === 0 ? (
                <Card padding={0}>
                  <AucunModele onAction={() => navigate("/app/modeles/new")} />
                </Card>
              ) : (
                <Card padding={0}>
                  <IndexFilters
                    queryValue={queryValueModeles}
                    queryPlaceholder="Rechercher dans le nom"
                    onQueryChange={handleQueryValueModelesChange}
                    onQueryClear={handleQueryValueModelesRemove}
                    tabs={tabsModeles}
                    selected={selectedModeles}
                    onSelect={setSelectedModeles}
                    filters={filters}
                    appliedFilters={appliedFilters}
                    onClearAll={handleFiltersClearAll}
                    mode={mode}
                    setMode={setMode}
                  />
                  <TableModeles
                    modeles={modelesTableau}
                    onNext={() => handleNewPageModeles(pageModeles + 1)}
                    onPrevious={() => handleNewPageModeles(pageModeles - 1)}
                    nextPage={nextPageModeles}
                    previousPage={previousPageModeles}
                    currentPage={pageModeles}
                    totalModele={nombreModelesTableau}
                  />
                </Card> 
              )}
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}