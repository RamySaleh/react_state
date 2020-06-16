import * as cartActions from "../actions/cartActions";

import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

export const Products = (props) => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let products = [
      { id: 1, name: "watch", price: 20 },
      { id: 2, name: "book", price: 10 },
      { id: 3, name: "phone", price: 50 },
    ];

    setProducts(products);
  }, []);

  return (
    <div>
      {products.map((prod) => {
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
                dispatch(cartActions.addToCart(prod));
              }}
            >
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
