import styles from "./DockItem.module.scss";
import React from "react";

type DockItemProps = {
  icon: React.ReactNode;
};

const DockItem: React.FC<DockItemProps> = ({ icon }) => {
  return <button className={styles.root}>{icon}</button>;
};

export default DockItem;
