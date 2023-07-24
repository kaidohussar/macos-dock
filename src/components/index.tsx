import styles from "./Dock.module.scss";
import React from "react";
import DockItem from "./Item";

type DockComponents = {
  Item: typeof DockItem;
};

type DockProps = {
  children: React.ReactNode;
};

type DockComponent = DockComponents & React.FC<DockProps>;

const Dock: DockComponent = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

Dock.Item = DockItem;

export default Dock;
