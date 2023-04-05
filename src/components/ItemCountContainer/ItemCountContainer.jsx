import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemCountContainer = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const substract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <ItemCount
      onAdd={onAdd}
      add={add}
      substract={substract}
      counter={counter}
    />
  );
};

export default ItemCountContainer;
