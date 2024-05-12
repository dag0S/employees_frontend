import { Layout as AntLayout } from "antd";
import { FC } from "react";
import { LayoutProps } from "./LayoutProps";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles["main"]}>
      <Header />
      <AntLayout.Content style={{ height: "100%" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};

export default Layout;
