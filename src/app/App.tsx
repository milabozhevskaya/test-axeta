import type { FC } from "react";

import { Layout, LayoutHeader, LayoutMain, LayoutFooter } from "./layout";

import { fakeData } from "data/fakeData";
import { Header, Footer } from "widgets";

export const App: FC = () => (
  <Layout>
    <LayoutHeader as={Header} />
    <LayoutMain>{...fakeData}</LayoutMain>
    <LayoutFooter as={Footer} />
  </Layout>
);
