import { inject, observer } from "mobx-react";

import React from "react";

export const Cart = inject("store")(
  observer((props) => {
    return (
      <div>
        <div>
          {props.store.cart &&
            props.store.cart.map((prod) => {
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
                      props.store.removeFromCart(prod);
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
  })
);
