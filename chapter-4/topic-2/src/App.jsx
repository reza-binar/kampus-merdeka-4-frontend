import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import AddPost from "./pages/AddPost";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/add" element={<AddPost />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
