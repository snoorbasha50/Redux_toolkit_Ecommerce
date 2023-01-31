import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Product from "./Product";
import SinglePage from "./SinglePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="single/:id" element={<SinglePage/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
