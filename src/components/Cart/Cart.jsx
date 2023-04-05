import { Button } from "@mui/material";
import styles from "./Cart.module.css";
import FormCheckoutContainer from "../FormCheckoutContainer/FormCheckoutContainer";

const Cart = ({
  cart,
  clear,
  clearCart,
  getTotalPrice,
  deleteProductById,
  showForm,
  setShowForm,
  setOrderId,
}) => {
  return (
    <div className={styles.backgroundContainer}>
      {!showForm ? (
        <div className={styles.cartContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.containerCtems}>
              {cart.map((item) => {
                return (
                  <div key={item.id} className={styles.cartItem}>
                    <img src={item.img} alt="" />
                    <div className={styles.cartItemInfo}>
                      <h3>{item.title}</h3>
                      <h3>${item.price}</h3>
                      <h3>Cantidad: {item.quantity}</h3>
                    </div>
                    <Button
                      color="error"
                      variant="contained"
                      style={{ width: "30%" }}
                      onClick={() => deleteProductById(item.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                );
              })}
            </div>

            <div className={styles.cartInfo}>
              <h3>Precio total: {getTotalPrice()}</h3>
              <h3>Descuento: - </h3>
              <h3>Precio final: -</h3>

              {cart.length > 0 && (
                <div className={styles.btnCart}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setShowForm(true)}
                  >
                    Terminar la compra
                  </Button>
                  <Button onClick={clear} color="error" variant="contained">
                    Vaciar carrito
                  </Button>
                </div>
              )}

              <h1>El total del carrito es: ${getTotalPrice()}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.backgroundContainer}>
          <div className={styles.cartContainer}>
            <div
              className={styles.cardContainer}
              style={{ flexDirection: "column" }}
            >
              <FormCheckoutContainer
                cart={cart}
                getTotalPrice={getTotalPrice}
                setOrderId={setOrderId}
                clearCart={clearCart}
                setShowForm={setShowForm}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
