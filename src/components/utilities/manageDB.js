const getItem = () => {
  let getItem = localStorage.getItem("shopping-cart");
  if (getItem) {
    getItem = JSON.parse(getItem);
  } else {
    getItem = {};
  }
  return getItem;
};
const saveToDB = (data) => {
  localStorage.setItem("shopping-cart", JSON.stringify(data));
};
const saveItem = (id) => {
  let cartItem = getItem();
  let item = cartItem[id];
  if (item) {
    cartItem[id] += 1;
  } else {
    cartItem[id] = 1;
  }
  saveToDB(cartItem);
};
const removeItem = (id) => {
  let cartItem = getItem();
  let item = cartItem[id];
  if (item && cartItem[id] > 0) {
    cartItem[id] -= 1;
  }
  saveToDB(cartItem);
};

export { getItem, saveItem, removeItem };
