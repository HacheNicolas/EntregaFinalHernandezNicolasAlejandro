import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product, onAdd }) => {
  return (
    <div className={styles.itemDetailBackground}>
      <div className={styles.itemDetail}>
        <Card
          sx={{
            maxWidth: 450,
            border: "1px solid white",
            borderRadius: "10px",
            margin: "10px",
            backgroundColor: "white",
          }}
        >
          <CardMedia
            className={styles.img}
            component="img"
            alt={product.title}
            image={product.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions className={styles.button}>
            <ItemCount stock={product.stock} onAdd={onAdd} />
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
