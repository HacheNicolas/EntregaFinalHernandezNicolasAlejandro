import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        border: "1px solid white",
        borderRadius: "10px",
        margin: "10px",
        backgroundColor: "white",
      }}
    >
      <CardMedia
        className={styles.img}
        component="img"
        alt={element.title}
        image={element.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
      </CardContent>
      <CardActions className={styles.button}>
        <Link to={`/item/${element.id}`} style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "#52a318a4" }}
          >
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
