import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.itemListBackground}>
      <div className={styles.itemList}>
        {items.map((element) => {
          return <Item key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
