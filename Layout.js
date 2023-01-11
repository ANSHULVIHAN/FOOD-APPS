import React from "react";

import Header from "./Header";
import Footer from './Footer'
import Routers from '../routes/Routers';

import Carts from "../components/UI/cart/Carts.js";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
