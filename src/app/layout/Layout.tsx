import type { FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

type LayoutProps = PropsWithChildren;

type LayoutHeaderProps = { as?: FC<PropsWithChildren> | string };

type LayoutFooterProps = { as?: FC<PropsWithChildren> | string };

type LayoutMainProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children, ...rest }) => (
  <div className={styles.wrapper} {...rest}>
    {children}
  </div>
);

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  as: Component = "div",
  ...rest
}) => (
  <header className={styles.header}>
    <Component {...rest} />
  </header>
);

export const LayoutMain: FC<LayoutMainProps> = ({ children }) => (
  <main className={styles.main}>{children}</main>
);

export const LayoutFooter: FC<LayoutFooterProps> = ({
  as: Component = "div",
  ...rest
}) => (
  <footer className={styles.header}>
    <Component {...rest} />
  </footer>
);
