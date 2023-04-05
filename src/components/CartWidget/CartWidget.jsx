import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <Button
        variant="Text"
        startIcon={<ShoppingCartIcon style={{ color: "black" }} />}
        style={{ color: "black" }}
      >
        {total}
      </Button>
    </Link>
  );
};

export default CartWidget;
