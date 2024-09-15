import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "./Banner";
import ProductsBanner from "./ProductsBanner";

export default function Header() {
  return useLocation().pathname === "/" ? <Banner /> : <ProductsBanner />;
}
