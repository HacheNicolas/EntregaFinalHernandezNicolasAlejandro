import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Button
        variant="Text"
        startIcon={<ShoppingCartIcon style={{ color: "black" }} />}
        style={{ color: "black" }}
      >
        0
      </Button>
    </Link>
  );
};

export default CartWidget;
