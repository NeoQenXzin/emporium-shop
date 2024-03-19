import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Test = () => {
  const [categories, setCategories] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 1024); // Gestion de l'état du menu collapsible
  const location = useLocation(); // Pour déterminer le chemin actuel

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    // Fonction pour ajuster l'affichage du menu en fonction de la largeur de l'écran
    function handleResize() {
      setIsMenuOpen(window.innerWidth >= 1024);
    }

    // Ajoutez un écouteur d'événement pour le redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoyez l'écouteur lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fonction pour basculer l'état du menu collapsible en vue mobile
  const toggleMenu = () => {
    // Ne basculez que si la largeur de l'écran est inférieure à 1024px
    if (window.innerWidth < 1024) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  // Fonction pour déterminer si le lien est actif
  const isActive = (path) => {
    // Décode l'URL pour s'assurer que les espaces encodés sont comparés correctement
    const currentPath = decodeURIComponent(location.pathname);
    return currentPath === path;
  };

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="flex items-center justify-center flex-col relative pb-3  border-gray-200 border-b min-h-[60px]">
        <Link
          to="/"
          className="w-full h-52 flex justify-center overflow-hidden lg:h-72"
        >
          <img
            src="public/emporium-logo.png"
            alt="logo"
            className="w-full h-58 center  "
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="ml-7 lg:hidden absolute top-4 right-4"
        >
          <svg
            className="w-7 h-7"
            fill="#FFF"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </section>
      <div className="flex flex-wrap py-3.5 px-10 overflow-x-auto justify-center align-middle w-full">
        <ul
          className={`flex flex-col lg:flex-row justify-center space-x-0 lg:space-x-10 space-y-3 lg:space-y-0 w-full   ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <li className="border-b py-2">
            <Link
              to="/"
              className={`hover:text-[#007bff] ${
                isActive("/products") ? "text-[#007bff]" : "text-gray-600"
              } font-bold text-[15px] flex items-center`}
            >
              Home
            </Link>
          </li>
          {categories.map((categorie) => (
            <li className="border-b py-2" key={categorie}>
              <Link
                className={`hover:text-[#007bff] ${
                  isActive(`/categories/${categorie}`)
                    ? "text-[#007bff]"
                    : "text-gray-600"
                } font-bold text-[15px]`}
                key={categorie}
                to={{
                  pathname: `/categories/${categorie}`,
                }}
                state={categorie}
              >
                {categorie}
              </Link>
            </li>
          ))}
          <li className="border-b py-2">
            <Link
              to="/cart"
              className={`hover:text-[#007bff] ${
                isActive("/cart") ? "text-[#007bff]" : "text-gray-600"
              } font-bold text-[15px] flex items-center`}
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Test;
