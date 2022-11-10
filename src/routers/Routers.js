import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import UserProfile from "../pages/UserProfile";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home isLogin={true}/>} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='cart' element={<Cart />} />
      <Route path='login' element={<Home isLogin={true} />} />
      <Route path='signup' element={<Home isLogin={false} />} />
      <Route path='UserProfile' element={<UserProfile />} />
    </Routes>
  );
};

export default Routers;
