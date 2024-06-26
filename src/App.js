// import "./App.css";
import React from "react";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
