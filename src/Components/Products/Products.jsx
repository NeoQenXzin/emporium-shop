import React from "react";
import { useState, useEffect } from "react";
import "./Products.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="main">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-600 via-slate-500 to-gray-400 inline-block text-transparent bg-clip-text py-7 ">
        Emporium : 'Your Dream Product ! (maybe)'
      </h1>
      <div className="px-7 text-gray-500 mt-7">
        <div
          className="product-list
        mt-7"
        >
          <h2 className="font-bold text-xl mt-3">Our Products :</h2>
          <div className="products flex flex-wrap gap-7 justify-center p-5 mt-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
