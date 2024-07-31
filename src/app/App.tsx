import type { FC } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Layout, LayoutHeader, LayoutMain, LayoutFooter } from "./layout";
import { store, persistor } from "./store/store";

import { fakeData } from "data/fakeData";
import { AccountPage } from "pages";
import { Header, Footer } from "widgets";

export const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <LayoutHeader as={Header} />
        <LayoutMain>
          <AccountPage />
          {...fakeData}
        </LayoutMain>
        <LayoutFooter as={Footer} />
      </Layout>
    </PersistGate>
  </Provider>
);
