import React from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import MainProducts from "../Components/MainProducts";
import Sales from "../Components/Sales";

export default function Home() {
  return (
    <>
      <Header />;
      <Categories />;
      <MainProducts />;
      <Sales />
    </>
  );
}
