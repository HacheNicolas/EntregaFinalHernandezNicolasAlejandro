import { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import FormCheckout from "../FormCheckout/FormCheckout";

const FormCheckoutContainer = ({
  cart,
  getTotalPrice,
  setOrderId,
  clearCart,
  setShowForm,
}) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product;
    });
  };

  return (
    <FormCheckout
      handleSubmit={handleSubmit}
      setUserData={setUserData}
      userData={userData}
      setShowForm={setShowForm}
    />
  );
};

export default FormCheckoutContainer;
