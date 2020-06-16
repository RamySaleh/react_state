import React, { useContext, useEffect, useState } from "react";

import { ProductsContext } from "./Store";

export const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, updateCart] = useContext(ProductsContext);

  const addToCart = (product) => {
    updateCart([...cart, product]);
  };

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
                addToCart(prod);
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
