import React, { useState, useEffect } from "react";

export default function Jewellery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Jewellery</h1>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} width="120" />
          <p>₹ {item.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
