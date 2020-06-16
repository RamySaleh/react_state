import * as cartActions from "../actions/cartActions";

import React from "react";
import { useDispatch } from "react-redux";

export const Cart = (props) => {
  const dispatch = useDispatch();

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
                    dispatch(cartActions.removeFromCart(prod));
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
