import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addItem(product));
    toast.success("Votre produit a été ajouté");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.image}
            alt="card-image"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <RatingStars rating={product.rating.rate} />
                <span className="text-gray-600 ml-3">
                  {product.rating.count} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{product.description}</p>

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="relative"></div>
            </div>

            <div className="flex mt-10">
              <span className="title-font font-bold text-4xl text-gray-900">
                {product.price} €
              </span>
              <Button
                onClick={() => addCart()}
                ripple={false}
                fullWidth={false}
                className="bg-indigo-300/50 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 flex ml-auto  border-0 py-2 px-6 font-bold "
              >
                <span className=""> Add to Cart </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
