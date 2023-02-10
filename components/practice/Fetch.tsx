import React, { useEffect, useState } from "react";

const Fetchapi = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const Data = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    Data();
  }, []);
  console.log(products);

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Fetchapi;
