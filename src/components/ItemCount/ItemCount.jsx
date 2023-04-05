import { Stack, Button } from "@mui/material";

const ItemCount = ({ onAdd, add, substract, counter = 1 }) => {
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
