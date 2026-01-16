import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Electronic() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Electronics</h1>

      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <select onChange={(e) => setSort(e.target.value)} style={styles.select}>
          <option value="">Sort by price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      <div style={styles.grid}>
        {products
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (sort === "low") return a.price - b.price;
            if (sort === "high") return b.price - a.price;
            return 0;
          })
          .map((item) => (
            <div key={item.id} style={styles.card}>
              <img
                src={item.image}
                alt={item.title}
                style={styles.image}
              />

              <div style={styles.cardBody}>
                <h3 style={styles.title}>{item.title}</h3>

                <p style={styles.desc}>
                  {item.description.slice(0, 90)}...
                </p>

                <div style={styles.footer}>
                  <span style={styles.price}>₹ {item.price}</span>

                  <Link
                    to={`/productDetail/${item.id}`}
                    style={styles.button}
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "25px",
    background: "#f5f7fa",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  input: {
    padding: "10px",
    width: "220px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },
  image: {
    height: "180px",
    width: "100%",
    objectFit: "contain",
    padding: "15px",
    background: "#fafafa",
  },
  cardBody: {
    padding: "15px",
  },
  title: {
    fontSize: "15px",
    marginBottom: "8px",
    height: "40px",
    overflow: "hidden",
  },
  desc: {
    fontSize: "13px",
    color: "#555",
    marginBottom: "12px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    color: "#2b7cff",
  },
  button: {
    textDecoration: "none",
    padding: "6px 12px",
    background: "#2b7cff",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "13px",
  },
};
