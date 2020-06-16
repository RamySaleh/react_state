import React, { useState } from "react";

export const ProductsContext = React.createContext();

export const Store = ({ children }) => {
  const [cart, updateCart] = useState([]);
  return (
    <ProductsContext.Provider value={[cart, updateCart]}>
      {children}
    </ProductsContext.Provider>
  );
};
