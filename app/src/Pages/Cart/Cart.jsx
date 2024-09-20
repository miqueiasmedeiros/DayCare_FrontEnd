import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CartProducts from "../../Components/CartProducts";
import "./Cart.css";

export default function Cart() {
  return (
    <>
      <Header />
      <CartProducts />
      <Footer />
    </>
  );
}
