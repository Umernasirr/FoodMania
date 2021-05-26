import React, { useState, createContext } from "react";

export const CartContext = createContext(); // Consumer

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const state = {
    cart,
    setCart,
    orders,
    setOrders,
  };

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
