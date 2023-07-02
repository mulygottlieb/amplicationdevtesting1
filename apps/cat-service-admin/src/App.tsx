import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PluralNameTestList } from "./pluralNameTest/PluralNameTestList";
import { PluralNameTestCreate } from "./pluralNameTest/PluralNameTestCreate";
import { PluralNameTestEdit } from "./pluralNameTest/PluralNameTestEdit";
import { PluralNameTestShow } from "./pluralNameTest/PluralNameTestShow";
import { TestDatumList } from "./testDatum/TestDatumList";
import { TestDatumCreate } from "./testDatum/TestDatumCreate";
import { TestDatumEdit } from "./testDatum/TestDatumEdit";
import { TestDatumShow } from "./testDatum/TestDatumShow";
import { TransactionMetaDatumList } from "./transactionMetaDatum/TransactionMetaDatumList";
import { TransactionMetaDatumCreate } from "./transactionMetaDatum/TransactionMetaDatumCreate";
import { TransactionMetaDatumEdit } from "./transactionMetaDatum/TransactionMetaDatumEdit";
import { TransactionMetaDatumShow } from "./transactionMetaDatum/TransactionMetaDatumShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"cat service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="PluralNameTest"
          list={PluralNameTestList}
          edit={PluralNameTestEdit}
          create={PluralNameTestCreate}
          show={PluralNameTestShow}
        />
        <Resource
          name="TestDatum"
          list={TestDatumList}
          edit={TestDatumEdit}
          create={TestDatumCreate}
          show={TestDatumShow}
        />
        <Resource
          name="TransactionMetaDatum"
          list={TransactionMetaDatumList}
          edit={TransactionMetaDatumEdit}
          create={TransactionMetaDatumCreate}
          show={TransactionMetaDatumShow}
        />
      </Admin>
    </div>
  );
};

export default App;
