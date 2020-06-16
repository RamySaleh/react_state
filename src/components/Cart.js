import React, { useContext } from "react";

import { ProductsContext } from "./Store";

export const Cart = (props) => {
  const [cart, updateCart] = useContext(ProductsContext);

  const removeFromCart = (product) => {
    updateCart(cart.filter((prod) => prod.id !== product.id));
  };

  return (
    <div>
      <div>
        {cart &&
          cart.map((prod) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: 300,
                  justifyContent: "space-between",
                }}
              >
                <p>{prod.name}</p>
                <p>{prod.price}</p>
                <button
                  onClick={() => {
                    removeFromCart(prod);
                  }}
                >
                  remove from cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
