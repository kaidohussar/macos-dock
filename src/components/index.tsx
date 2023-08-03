import React, { Children, MouseEvent, useRef } from "react";
import DockItem from "./Item";
import styles from "./Dock.module.scss";

type DockComponents = {
  Item: typeof DockItem;
};

type DockProps = {
  children: React.ReactNode;
};

type DockComponent = DockComponents & React.FC<DockProps>;

const Dock: DockComponent = ({ children }) => {
  const dockItemRefs = useRef<HTMLDivElement[]>([]);

  const handleDockHover = (event: MouseEvent<HTMLDivElement>) => {
    const { screenX } = event;

    dockItemRefs.current.forEach((dockItem) => {
      const { x: dockItemX, width: dockItemWidth } =
        dockItem.getBoundingClientRect();
      const posDiff = Math.abs(screenX - (dockItemX + dockItemWidth / 2));
      const pxRange = 200;
      const modifier = 0.3;
      const diff = posDiff / pxRange;
      const sizeValue = (1 - diff) * modifier;
      const scale = sizeValue + 1;

      if (posDiff < pxRange) {
        dockItem.style.transform = `scale(${scale})`;
        dockItem.style.transitionDuration = "0.1s";
      }
    });
  };

  const handleResetScales = () => {
    dockItemRefs.current.forEach((item) => {
      item.style.transitionDuration = "0.3s";
      item.style.transform = `scale(1)`;
    });
  };

  return (
    <div
      onMouseMove={handleDockHover}
      onMouseLeave={handleResetScales}
      className={styles.root}
    >
      {Children.map(children, (child, index) => (
        <div
          ref={(node) => {
            if (node) {
              dockItemRefs.current[index] = node;
            }
          }}
          className={styles.dockItemWrapper}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

Dock.Item = DockItem;

export default Dock;
