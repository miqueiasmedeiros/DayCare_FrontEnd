import React from "react";
// import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import Banner from "./Banner";
import ProductsBanner from "./ProductsBanner";

export default function Header() {
  return useLocation().pathname === "/" ? <Banner /> : <ProductsBanner />;
}
