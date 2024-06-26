import React, { useState } from "react";
import AddOrder from "./AddOrder";

const Footer = ({ addOrder }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="bg-white p-2 shadow w-full flex flex-col md:flex-row justify-end border-t-2 border-gray-200 md:static fixed bottom-0">
      <button
        onClick={openModal}
        className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-1 px-12 md:mr-28 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Add Order
      </button>
      <AddOrder
        isOpen={modalIsOpen}
        closeModal={closeModal}
        addOrder={addOrder}
      />
    </div>
  );
};

export default Footer;
