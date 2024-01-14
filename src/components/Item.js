import * as React from "react";
import { useMemo } from "react";
import * as styles from "./Item.module.css";

const Item = ({
  menuItemText,
  showItem,
  itemTop,
  itemLeft,
  itemWidth,
  itemHeight,
  itemBorderRadius,
  itemBorder,
  itemBoxSizing,
  itemCursor,
  itemBackgroundColor,
  propAlignItems,
  propJustifyContent,
  propColor,
  propFontSize,
  propTextAlign,
  onItemContainerClick,
}) => {
  const itemStyle = useMemo(() => {
    return {
      top: itemTop,
      left: itemLeft,
      width: itemWidth,
      height: itemHeight,
      borderRadius: itemBorderRadius,
      border: itemBorder,
      boxSizing: itemBoxSizing,
      cursor: itemCursor,
      backgroundColor: itemBackgroundColor,
    };
  }, [
    itemTop,
    itemLeft,
    itemWidth,
    itemHeight,
    itemBorderRadius,
    itemBorder,
    itemBoxSizing,
    itemCursor,
    itemBackgroundColor,
  ]);

  const item1Style = useMemo(() => {
    return {
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
      color: propColor,
      fontSize: propFontSize,
      textAlign: propTextAlign,
    };
  }, [
    propAlignItems,
    propJustifyContent,
    propColor,
    propFontSize,
    propTextAlign,
  ]);

  return (
    <div
      className={styles.item}
      style={itemStyle}
      onClick={onItemContainerClick}
    >
      {showItem && (
        <div className={styles.item1} style={item1Style}>
          {menuItemText}
        </div>
      )}
    </div>
  );
};

export default Item;
