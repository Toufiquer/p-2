import React, { useEffect, useState } from "react";
import User from "../User/User";
import { removeItem, saveItem } from "../utilities/manageDB";

const AllUsers = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddToCart = (id) => {
    saveItem(id);
  };
  const handleRemoveFromCart = (id) => {
    removeItem(id);
  };
  return (
    <>
      <div style={{ border: "2px solid black", padding: "9px", margin: "9px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {users.map((user) => (
          <User user={user} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} key={user.id}></User>
        ))}
      </div>
    </>
  );
};

export default AllUsers;
