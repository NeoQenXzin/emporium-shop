import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem } from "../../store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 5;

  const dispatch = useDispatch();

  const addOneItem = (item) => {
    dispatch(addItem(item));
    toast.success("Votre produit a été ajouté");
  };

  const removeOneItem = (item) => {
    dispatch(removeItem({ id: item.id }));
    toast.warn("Votre produit a été retiré");
  };

  const completelyRemoveItem = (item) => {
    dispatch(deleteItem({ id: item.id }));
    toast.error("Votre produit a été supprimé du panier");
  };
  return (
    <div>
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
      <div className="min-h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {items.length > 0 ? (
              <>
                {items.map((item) => (
                  <div key={item.id}>
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start container-card">
                      <img
                        src={item.image}
                        alt="product-image"
                        className="w-full rounded-lg sm:w-20"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900 px-1">
                            {item.title}
                          </h2>
                          <p className="mt-1 text-xs text-gray-700">
                            {item.category}
                          </p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <span
                              onClick={() => removeOneItem(item)}
                              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              {" "}
                              -{" "}
                            </span>
                            <input
                              className="h-8 w-8 border bg-white text-center text-xs outline-none"
                              type="number"
                              value={item.quantity}
                              min="1"
                              onChange={(e) =>
                                updateQuantity(item, e.target.value)
                              }
                            />
                            <span
                              onClick={() => addOneItem(item)}
                              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              {" "}
                              +{" "}
                            </span>
                          </div>

                          <div className="flex items-center space-x-4">
                            <p className="text-sm">
                              {(item.price * item.quantity).toFixed(2) + "€"}
                            </p>

                            <div onClick={() => completelyRemoveItem(item)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div>Your cart is empty</div>
            )}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal :</p>
              <p className="text-gray-700">{totalAmount.toFixed(2)} €</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">ShippingCost : </p>
              <p className="text-gray-700">{shippingCost} €</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total :</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  {(totalAmount + shippingCost).toFixed(2)} €
                </p>
                <p className="text-sm text-gray-700">including tva</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
