import React, { useState, useEffect } from "react";

const Product = ({ name, price, onAddToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

const Cart = ({ cart }) => {
  return (
    <ul>
      {cart.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Products</h2>
      <Product
        name="Product 1"
        price={10}
        onAddToCart={() => addToCart("Product 1")}
      />
      <Product
        name="Product 2"
        price={20}
        onAddToCart={() => addToCart("Product 2")}
      />
      <h2>Cart</h2>
      <Cart cart={cart} />
    </div>
  );
};

export default App;
