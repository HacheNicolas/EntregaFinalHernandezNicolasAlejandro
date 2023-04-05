import Cart from "./Cart";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const CartContainer = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "¿Quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se modificó el carrito", "", "info");
      }
    });
  };

  if (orderId) {
    return (
      <div className={styles.backgroundContainer}>
        <div className={styles.cartContainer}>
          <div
            className={styles.cardContainer}
            style={{ flexDirection: "column" }}
          >
            <h2>Gracias por su compra.</h2>
            <h4>el comprobante es : {orderId}</h4>
            <Link to="/">Seguir comprando</Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={styles.backgroundContainer}>
        <div className={styles.cartContainer}>
          <div
            className={styles.cardContainer}
            style={{ flexDirection: "column" }}
          >
            <h1>El carrito se encuentra vacío.</h1>
            <Link to="/">Seguir comprando</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Cart
      cart={cart}
      clear={clear}
      clearCart={clearCart}
      getTotalPrice={getTotalPrice}
      deleteProductById={deleteProductById}
      showForm={showForm}
      setShowForm={setShowForm}
      setOrderId={setOrderId}
    />
  );
};

export default CartContainer;
