import React from "react";

const User = (props) => {
  let { name, email, id } = props.user;
  let { handleAddToCart, handleRemoveFromCart } = props;
  return (
    <div style={{ border: "2px solid black", padding: "9px", margin: "9px", maxWidth: "600px" }}>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>ID: {id}</h2>
      <button style={{ margin: "6px", padding: "9px" }} onClick={() => handleAddToCart(id)}>
        Add to Cart
      </button>
      <button style={{ margin: "6px", padding: "9px" }} onClick={() => handleRemoveFromCart(id)}>
        Remove From Cart
      </button>
    </div>
  );
};

export default User;
