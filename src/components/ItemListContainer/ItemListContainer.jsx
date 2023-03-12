import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../ProductsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const filteredProducts = products.filter(
    (element) => element.category === categoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryName ? filteredProducts : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
