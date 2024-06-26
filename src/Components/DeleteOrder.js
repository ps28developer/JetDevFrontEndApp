import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DeleteOrder = ({ isOpen, closeModal, deleteOrder }) => {
  const customStyles = {
    content: {
      width: "250px",
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
      onRequestClose={closeModal}
      contentLabel="Delete Order"
      style={customStyles}
      className="fixed inset-0 flex items-center justify-center outline-none"
      shouldCloseOnOverlayClick={true}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-screen-md flex flex-col items-center">
        <div className="text-xl font-bold mb-4">Delete Order</div>
        <div className="text-md text-center">
          Confirm the deletion of the Order ?
        </div>
        <div className="w-full flex justify-between items-center pt-2 ">
          <button
            type="button"
            onClick={closeModal}
            className="w-1/2 inline-flex justify-center py-2 px-4 mr-1 text-md font-medium rounded-md text-black focus:outline-none hover:bg-gray-100"
          >
            Cancel
          </button>
          <span className="border-l border-gray-300 h-7"></span>
          <button
            type="button"
            onClick={deleteOrder}
            className="w-1/2 inline-flex justify-center py-2 px-4 ml-1 border border-transparent text-md font-medium rounded-md text-red-600 hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteOrder;
