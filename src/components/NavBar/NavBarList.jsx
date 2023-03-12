import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBarList = () => {
  return (
    <Stack spacing={2} direction="row">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Button variant="Text">Todo</Button>
      </Link>
      <Link
        to="/category/cafe"
        style={{ textDecoration: "none", color: "black" }}
      >
        <Button variant="Text">Café</Button>
      </Link>
      <Link
        to="/category/cafeFrio"
        style={{ textDecoration: "none", color: "black" }}
      >
        <Button variant="Text">Café Frio</Button>
      </Link>
      <Link
        to="/category/bebidas"
        style={{ textDecoration: "none", color: "black" }}
      >
        <Button variant="Text">Bebidas</Button>
      </Link>
    </Stack>
  );
};

export default NavBarList;
