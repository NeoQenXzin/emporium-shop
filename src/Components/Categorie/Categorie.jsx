import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";

export const Categorie = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const categorie = location.state || "";

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categorie}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [location]);

  if (!categorie || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-100">
      <h2 className="text-2xl mt-14 pl-4">Category {categorie}</h2>
      <div className="products flex flex-wrap gap-7 justify-center p-5 mt-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
