import { Button } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, setUserData, userData, setShowForm }) => {
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder=" Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder=" Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder=" Telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        <Button variant="contained" color="success" type="submit">
          Comprar
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setShowForm(false)}
        >
          Volver al carrito
        </Button>
      </form>
    </div>
  );
};

export default FormCheckout;
