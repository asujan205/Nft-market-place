import React from "react";
import { useState } from "react";

const HandleCrud = () => {
  const [products, setProducts] = useState<any[]>([
    {
      id: 1,
      name: "Product 1",
      description: "Product 1 Description",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Product 2 Description",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Product 3 Description",
      price: 300,
    },
  ]);
  const handledelete = (id: number) => {
    const newdata = products.filter((item) => item.id !== id);
    console.log(newdata);
    setProducts(newdata);
  };
  const HandleAdd = () => {
    const newdata = [
      ...products, // spread operator
      {
        id: 4,
        name: "Product 4",
        description: "Product 4 Description",
        price: 400,
      },
    ];
    setProducts(newdata);
  };
  const HandleUpdate = (id: number) => {
    const newdata = products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: "Product 5",
          description: "Product 5 Description",
          price: 500,
        };
      }
      return item;
    });
    setProducts(newdata);
  };

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <>
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </li>
            <button onClick={() => handledelete(product.id)}>delete</button>
            <button onClick={() => HandleUpdate(product.id)}>update</button>
          </>
        ))}
      </ul>
      <button onClick={HandleAdd}>Add</button>
    </>
  );
};

export default HandleCrud;
