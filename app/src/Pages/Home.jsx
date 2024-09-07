import React from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import MainProducts from "../Components/MainProducts";
import Sales from "../Components/Sales";
import Testimonials from "../Components/Testimonials";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />;
      <Categories />;
      <MainProducts />;
      <Sales />
      <Testimonials />
      <Brands />
      <Footer />
    </>
  );
}
