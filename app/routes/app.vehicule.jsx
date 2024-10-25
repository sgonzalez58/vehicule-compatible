import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import {
  BlockStack,
  Card,
  EmptyState,
  IndexFilters,
  IndexTable,
  Layout,
  Link,
  Page,
  Text,
  TextField,
} from "@shopify/polaris";
import { getModeles, getModelesForPagination } from "../models/modele.server";
import { authenticate } from "../shopify.server";
import { getMarque, getMarques, getMarquesForPagination } from "../models/marque.server";


export async function loader({ request }) {
  await authenticate.admin(request);
  const url = new URL(request.url);
  const pageModele = url.searchParams.get("pageModele") ? Number(url.searchParams.get("pageModele")) : 1;
  const pageMarque = url.searchParams.get("pageMarque") ? Number(url.searchParams.get("pageMarque")) : 1;
  let marqueModele = url.searchParams.get("marqueModele") ? Number(url.searchParams.get("marqueModele")) : null;
  if(marqueModele){
    marqueModele = await getMarque(Number(marqueModele));
  }
  const modelesTotal = (await getModeles()).length;
  const marquesTotal = (await getMarques()).length;
  const modeles = await getModelesForPagination(pageModele);
  const marques = await getMarquesForPagination(pageMarque);
  return json({
    modeles,
    marques,
    pageMarque,
    pageModele,
    marquesTotal,
    modelesTotal,
    marqueModele
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
      { title: "Total produits" },
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
      <Link to={`/app/marques/${marque.id}`}>Modifier</Link>
    </IndexTable.Cell>
  </IndexTable.Row>
);

export default function Index() {
  const { modeles, marques, pageMarque, pageModele, marquesTotal, modelesTotal, marqueModele } = useLoaderData();
  const navigate = useNavigate();

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const [itemStrings, setItemStrings] = useState([
    'All',
    'Unpaid',
    'Open',
    'Closed',
    'Local delivery',
    'Local pickup',
  ]);
  const deleteView = (index) => {
    const newItemStrings = [...itemStrings];
    newItemStrings.splice(index, 1);
    setItemStrings(newItemStrings);
    setSelected(0);
  };

  const duplicateView = async (name) => {
    setItemStrings([...itemStrings, name]);
    setSelected(itemStrings.length);
    await sleep(1);
    return true;
  };

  const tabs = itemStrings.map((item, index) => ({
    content: item,
    index,
    onAction: () => {},
    id: `${item}-${index}`,
    isLocked: index === 0,
    actions:
      index === 0
        ? []
        : [
            {
              type: 'rename',
              onAction: () => {},
              onPrimaryAction: async (value) => {
                const newItemsStrings = tabs.map((item, idx) => {
                  if (idx === index) {
                    return value;
                  }
                  return item.content;
                });
                await sleep(1);
                setItemStrings(newItemsStrings);
                return true;
              },
            },
            {
              type: 'duplicate',
              onPrimaryAction: async (value) => {
                await sleep(1);
                duplicateView(value);
                return true;
              },
            },
            {
              type: 'edit',
            },
            {
              type: 'delete',
              onPrimaryAction: async () => {
                await sleep(1);
                deleteView(index);
                return true;
              },
            },
          ],
  }));
  const [selected, setSelected] = useState(0);
  const onCreateNewView = async (value: string) => {
    await sleep(500);
    setItemStrings([...itemStrings, value]);
    setSelected(itemStrings.length);
    return true;
  };
  const sortOptions: IndexFiltersProps['sortOptions'] = [
    {label: 'Order', value: 'order asc', directionLabel: 'Ascending'},
    {label: 'Order', value: 'order desc', directionLabel: 'Descending'},
    {label: 'Customer', value: 'customer asc', directionLabel: 'A-Z'},
    {label: 'Customer', value: 'customer desc', directionLabel: 'Z-A'},
    {label: 'Date', value: 'date asc', directionLabel: 'A-Z'},
    {label: 'Date', value: 'date desc', directionLabel: 'Z-A'},
    {label: 'Total', value: 'total asc', directionLabel: 'Ascending'},
    {label: 'Total', value: 'total desc', directionLabel: 'Descending'},
  ];
  const [sortSelected, setSortSelected] = useState(['order asc']);
  const {mode, setMode} = useSetIndexFiltersMode(IndexFiltersMode.Filtering);
  const onHandleCancel = () => {};

  const onHandleSave = async () => {
    await sleep(1);
    return true;
  };

  const primaryAction: IndexFiltersProps['primaryAction'] =
    selected === 0
      ? {
          type: 'save-as',
          onAction: onCreateNewView,
          disabled: false,
          loading: false,
        }
      : {
          type: 'save',
          onAction: onHandleSave,
          disabled: false,
          loading: false,
        };
  const [accountStatus, setAccountStatus] = useState<string[]>([]);
  const [moneySpent, setMoneySpent] = useState<[number, number] | undefined>(
    undefined,
  );
  const [taggedWith, setTaggedWith] = useState<string | undefined>('');
  const [queryValue, setQueryValue] = useState<string | undefined>(undefined);

  const handleAccountStatusChange = useCallback(
    (value: string[]) => setAccountStatus(value),
    [],
  );
  const handleMoneySpentChange = useCallback(
    (value: [number, number]) => setMoneySpent(value),
    [],
  );
  const handleTaggedWithChange = useCallback(
    (value: string) => setTaggedWith(value),
    [],
  );
  const handleQueryValueChange = useCallback(
    (value: string) => setQueryValue(value),
    [],
  );
  const handleAccountStatusRemove = useCallback(() => setAccountStatus([]), []);
  const handleMoneySpentRemove = useCallback(
    () => setMoneySpent(undefined),
    [],
  );
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(''), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = useCallback(() => {
    handleAccountStatusRemove();
    handleMoneySpentRemove();
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [
    handleQueryValueRemove,
    handleTaggedWithRemove,
    handleMoneySpentRemove,
    handleAccountStatusRemove,
  ]);

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
                <TableMarques marques={marques} onNext={ ()=> navigate("?pageMarque=".concat(pageMarque + 1, "&pageModele=", pageModele))} onPrevious={ () => navigate("?pageMarque=".concat(pageMarque - 1, "&pageModele=", pageModele))} nextPage={(marques.length + (pageMarque - 1) * 10) != marquesTotal} previousPage={pageMarque != 1} currentPage={pageMarque} totalMarque={marquesTotal}/>
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
                    sortOptions={sortOptions}
                    sortSelected={sortSelected}
                    queryValue={queryValue}
                    queryPlaceholder="Searching in all"
                    onQueryChange={handleQueryValueChange}
                    onQueryClear={() => setQueryValue('')}
                    onSort={setSortSelected}
                    primaryAction={primaryAction}
                    cancelAction={{
                      onAction: onHandleCancel,
                      disabled: false,
                      loading: false,
                    }}
                    tabs={tabs}
                    selected={selected}
                    onSelect={setSelected}
                    canCreateNewView
                    onCreateNewView={onCreateNewView}
                    filters={filters}
                    appliedFilters={appliedFilters}
                    onClearAll={handleFiltersClearAll}
                    mode={mode}
                    setMode={setMode}
                  />
                  <TableModeles
                    modeles={modeles}
                    onNext={ ()=> navigate("?pageModele=".concat(pageModele + 1, "&pageMarque=", pageMarque))}
                    onPrevious={ () => navigate("?pageModele=".concat(pageModele - 1, "&pageMarque=", pageMarque))}
                    nextPage={(modeles.length + (pageModele - 1) * 10) != modelesTotal}
                    previousPage={pageModele != 1}
                    currentPage={pageModele}
                    totalModele={modelesTotal}
                  />
                </Card> 
              )}
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}