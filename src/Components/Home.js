import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import OrderDetails from "../Order/OrderDetails";
import DeleteOrder from "./DeleteOrder";
import AddOrder from "./AddOrder";
import { toast } from "react-toastify";
import "../App.css";

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Home = () => {
  const [orders, setOrders] = useState(OrderDetails);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [tooltipVisibility, setTooltipVisibility] = useState({
    edit: null,
    delete: null,
  });

  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };
  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const openEditModal = (order) => {
    setCurrentOrder(order);
    setEditModalIsOpen(true);
  };
  const closeEditModal = () => {
    setCurrentOrder(null);
    setEditModalIsOpen(false);
  };

  const updateOrder = (updatedOrder) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
    toast.success("Order updated successfully!");
  };

  const addOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    toast.success("Order added successfully!");
  };

  const deleteOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
    toast.success("Order deleted successfully!");
    closeDeleteModal();
  };

  const handleEditTooltipOpen = (orderId) => {
    setTooltipVisibility((prevVisibility) => ({
      ...prevVisibility,
      edit: orderId,
    }));
  };

  const handleEditTooltipClose = () => {
    setTooltipVisibility((prevVisibility) => ({
      ...prevVisibility,
      edit: null,
    }));
  };

  const handleDeleteTooltipOpen = (orderId) => {
    setTooltipVisibility((prevVisibility) => ({
      ...prevVisibility,
      delete: orderId,
    }));
  };

  const handleDeleteTooltipClose = () => {
    setTooltipVisibility((prevVisibility) => ({
      ...prevVisibility,
      delete: null,
    }));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="h-[100%] w-[100%] sm:h-[90%] sm:w-[90%] md:w-[80%] bg-gray-100 shadow-lg rounded-lg flex flex-col">
        <Header />
        <div className=" overflow-y-auto overflow-hidden custom-scrollbar">
          <div className="w-full md:w-[60%] container mx-auto p-4 mb-10 md:mb-0">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-md shadow flex flex-col bg-white px-2 pt-2 my-2"
              >
                <div>
                  <div className="flex justify-between">
                    <span className="font-bold">{order.name}</span>
                    {order.price && (
                      <span className="text-right font-bold text-blue-900">
                        {formatNumberWithCommas(order.price)}$
                      </span>
                    )}
                  </div>
                  <p className="text-sm mt-1 flex">
                    {order.notes && (
                      <>
                        <span className="text-gray-400 mr-1">Note</span>
                        {"   "}
                        <span>{order.notes}</span>
                      </>
                    )}
                  </p>
                </div>
                <div className="flex justify-end mt-2 pl-2 py-2 -mx-2 sm:mx-0 border-t border-gray-200">
                  <div
                    onClick={() => openEditModal(order)}
                    className="pl-1 cursor-pointer hover:bg-gray-100 relative"
                    onMouseEnter={() => handleEditTooltipOpen(order.id)}
                    onMouseLeave={handleEditTooltipClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 28 28"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                      title="Edit Order"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                    {tooltipVisibility.edit === order.id && (
                      <span className="w-16 tooltip-text absolute bg-gray-200 text-black text-xs px-1 py-0.5 rounded-md opacity-100 pointer-events-auto bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-200">
                        Edit Order
                      </span>
                    )}
                  </div>
                  <div
                    className={`mr-1 sm:-mr-1 cursor-pointer hover:bg-gray-100 relative ${
                      window.innerWidth < 768 ? "px-1" : "pl-1"
                    }`}
                    onClick={() => {
                      setCurrentOrder(order);
                      openDeleteModal();
                    }}
                    onMouseEnter={() => handleDeleteTooltipOpen(order.id)}
                    onMouseLeave={handleDeleteTooltipClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 28 28"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-400"
                      title="Delete Order"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                    {tooltipVisibility.delete === order.id && (
                      <span className="w-20 tooltip-text absolute bg-gray-200 text-black text-xs px-1 py-0.5 rounded-md opacity-100 pointer-events-auto bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-200">
                        Delete Order
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer addOrder={addOrder} />
      </div>
      <DeleteOrder
        isOpen={deleteModalIsOpen}
        closeModal={closeDeleteModal}
        deleteOrder={() => deleteOrder(currentOrder.id)}
      />
      <AddOrder
        isOpen={editModalIsOpen}
        closeModal={closeEditModal}
        order={currentOrder}
        updateOrder={updateOrder}
      />
    </div>
  );
};

export default Home;
