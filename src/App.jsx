import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Products } from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import { Categorie } from "./Components/Categorie/Categorie";
import Product from "./Components/Product/Product";
// import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/HeaderX/HeaderX";

function App() {
  return (
    // <Router basename="/emporium-shopinline">
    <Router basename="/emporium-shop">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Categorie />} />
      </Routes>
    </Router>
  );
}
export default App;
