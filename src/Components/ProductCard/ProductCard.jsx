import React from "react";
import RatingStars from "../RatingStars/RatingStars";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductCard.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(addItem(product));
    toast.success("Votre produit a été ajouté");
  };
  return (
    <Card className="w-96" key={product.id}>
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
      <Link to={`/products/${product.id}`}>
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={product.image}
            alt="card-image"
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <RatingStars rating={product.rating.rate} />
            <Typography color="blue-gray" className="font-bold">
              {product.price} €
            </Typography>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-medium title-ellipsis"
            >
              {product.title}
            </Typography>
          </div>
          <div className="description-container">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 description-line-clamp"
            >
              {product.description}
            </Typography>
            <Typography
              variant="small"
              color="blue"
              className="font-normal opacity-75 see-more"
            >
              Voir plus
            </Typography>
          </div>
        </CardBody>
      </Link>
      <CardFooter className="pt-0">
        <Button
          onClick={() => addCart()}
          ripple={false}
          fullWidth={true}
          className="bg-indigo-300/50 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
