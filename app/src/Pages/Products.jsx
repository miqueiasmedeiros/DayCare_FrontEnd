import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainProducts from "../Components/MainProducts";

export default function Products() {
  return (
    <>
      <Header />
      <div className="corpo-categorias">
        <div className="linha linha2">
          <h2>Todos</h2>
          <select name="" id="">
            <option value="">Mais comprados</option>
            <option value="">Mais classicados</option>
            <option value="">Menor preço</option>
            <option value="">Maior preço</option>
          </select>
        </div>
        <MainProducts />
      </div>
      <Footer />
    </>
  );
}
