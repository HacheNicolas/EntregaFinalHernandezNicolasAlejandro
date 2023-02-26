const ItemListContainer = ({ greeting }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
      }}
    >
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
