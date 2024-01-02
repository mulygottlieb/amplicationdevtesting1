import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PazList } from "./paz/PazList";
import { PazCreate } from "./paz/PazCreate";
import { PazEdit } from "./paz/PazEdit";
import { PazShow } from "./paz/PazShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DfdfdsfList } from "./dfdfdsf/DfdfdsfList";
import { DfdfdsfCreate } from "./dfdfdsf/DfdfdsfCreate";
import { DfdfdsfEdit } from "./dfdfdsf/DfdfdsfEdit";
import { DfdfdsfShow } from "./dfdfdsf/DfdfdsfShow";
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
        title={"t1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Paz"
          list={PazList}
          edit={PazEdit}
          create={PazCreate}
          show={PazShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Dfdfdsf"
          list={DfdfdsfList}
          edit={DfdfdsfEdit}
          create={DfdfdsfCreate}
          show={DfdfdsfShow}
        />
      </Admin>
    </div>
  );
};

export default App;
