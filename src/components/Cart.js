import React, { useEffect, useState } from "react";

export const Cart = (props) => {
  return (
    <div>
      <div>
        {props.cart &&
          props.cart.map((prod) => {
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
                    props.onRemoveFromCart(prod);
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
