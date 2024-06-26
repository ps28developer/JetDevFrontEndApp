import React, { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddOrder = ({ isOpen, closeModal, order, updateOrder, addOrder }) => {
  const initialFormData = {
    name: "",
    price: "",
    notes: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (order) {
      setFormData(order);
    }
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "price" && value.length > 10) {
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (order) {
      updateOrder({ ...formData, id: order.id });
    } else {
      const newOrder = { ...formData, id: Date.now() }; // Generate a unique ID
      addOrder(newOrder);
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setFormData(initialFormData);
    closeModal();
  };

  const isFormValid = formData.name && formData.price;

  const customStyles = {
    content: {
      width: "80%",
      maxWidth: "600px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: "1000",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Order Modal"
      style={customStyles}
      className="fixed inset-0 flex items-center justify-center outline-none"
      shouldCloseOnOverlayClick={true}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-6 w-full max-w-screen-sm">
        <div className="flex justify-end -mt-5 -mr-5">
          <span
            onClick={handleCloseModal}
            className="p-2 hover:bg-gray-100 hover:rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl mb-10 sm:mb-4 font-bold">
          {order ? "Edit Order" : "Add Order"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please fill in the name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
              className="mt-1 p-2 block w-full border rounded-md shadow sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Please fill in the price"
              value={formData.price}
              onChange={handleChange}
              required
              maxLength={10}
              className="shadow mt-1 p-2 block w-full border rounded sm:text-sm focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700"
            >
              Notes
            </label>
            <textarea
              type="text"
              name="notes"
              id="notes"
              placeholder="Please fill in the notes"
              value={formData.notes}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:shadow-outline"
            />
          </div>
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                isFormValid
                  ? "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {order ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddOrder;
