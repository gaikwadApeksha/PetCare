import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCrud = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const API_URL = "http://localhost:8080/api/products";

  // READ
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    setProducts(response.data);
  };

  // CREATE
  const addProduct = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, product);
    fetchProducts();
    setProduct({ name: "", price: "" });
  };

  // DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchProducts();
  };

  return (
    <div>
      <h2>Product CRUD</h2>

      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <button type="submit">Add Product</button>
      </form>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price}
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCrud;
