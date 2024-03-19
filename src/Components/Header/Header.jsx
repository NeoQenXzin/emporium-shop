import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Header.css";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  //Affichage item dans panier
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-5 w-screen  h-36 bg-gradient-to-r from-slate-900 to-gray-500 flex flex-col justify-between  pt-8 items-center gap-4  font-bold  text-4xl">
      <h1 className="bg-gradient-to-r  from-yellow-600 via-yellow-500 to-yellow-400 inline-block text-transparent bg-clip-text text-4xl">
        Emporium
      </h1>

      <div className="">
        <nav className="">
          <ul className="flex justify-between w-screen h-10 bg-white border-b-2">
            <div
              className="text-gray-600 flex text-sm uppercase  justify-start pl-4 w-screen  items-center
            "
            >
              <Link to="/">
                {" "}
                <li className=" font-thin " key="accueil">
                  Accueil
                </li>{" "}
              </Link>
            </div>
            <div className=" text-gray-600 font-thin flex text-sm uppercase gap-7  justify-end w-screen pr-5  items-center">
              {categories.map((categorie, key) => {
                console.log(categorie);
                return (
                  <Link
                    key={categorie}
                    to={{
                      pathname: `/categories/${categorie}`,
                    }}
                    state={categorie}
                  >
                    <li key={categorie}>{categorie}</li>
                  </Link>
                );
              })}
              <Link to="/cart" className="p-2">
                {" "}
                <li class="text-white  bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center">
                  <svg
                    class="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  Panier
                  {itemCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                      {itemCount}
                    </span>
                  )}
                </li>
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
