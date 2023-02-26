import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";

const CartWidget = () => {
  return (
    <div>
      <Button variant="Text" startIcon={<ShoppingCartIcon />}>
        0
      </Button>
    </div>
  );
};

export default CartWidget;
