import { Stack, Button } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = new useState(initial);

  const add = () => {
    console.log("suma");
    console.log(counter);
    console.log(stock);
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const substract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      console.log("resta");
    }
  };

  return (
    <div>
      <Stack spacing={0} direction="row">
        <Button
          variant="Text"
          onClick={() => {
            substract();
          }}
        >
          -
        </Button>
        <Button variant="Text">{counter}</Button>
        <Button
          variant="Text"
          onClick={() => {
            add();
          }}
        >
          +
        </Button>
      </Stack>
      <Button
        variant="contained"
        style={{ backgroundColor: "#52a318a4" }}
        onClick={() => {
          onAdd(counter);
        }}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default ItemCount;
