import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBarList = ({ categoryList }) => {
  return (
    <Stack spacing={2} direction="row">
      {categoryList?.map((category) => {
        if (category.path === "/") {
          return (
            <Link
              key={category.id}
              to={category.path}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button variant="Text">{category.title}</Button>
            </Link>
          );
        }
        return (
          <Link
            key={category.id}
            to={`category/${category.path}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button variant="Text">{category.title}</Button>
          </Link>
        );
      })}
    </Stack>
  );
};

export default NavBarList;
