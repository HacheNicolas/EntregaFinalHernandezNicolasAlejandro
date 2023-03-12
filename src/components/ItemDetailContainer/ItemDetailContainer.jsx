import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../ProductsMock";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const selectedProduct = products.find((element) => element.id === Number(id));

  const onAdd = (amount) => {
    if (amount === 1) {
      console.log(`Se agregó al carrito ${amount} producto`);
    } else {
      console.log(`Se agregaron al carrito ${amount} productos`);
    }
  };

  return (
    <div>
      <ItemDetail product={selectedProduct} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
