import React from "react";
import NavBar from "./NavBar";
import logoEscura from "../assets/img/logoEscura.png";
import cart from "../assets/img/carrinho2.png";

export default function ProductsBanner() {
  return (
    <div className="novoMenu">
      <div className="contanier">
        <div className="navbar">
          <div className="logo">
            <img src={logoEscura} alt="DayCare" width="125px" />
          </div>
          <NavBar />
          <a href="carrinho.html" title="">
            <img src={cart} alt="" width="30px" height="30px" />
          </a>
        </div>
      </div>
    </div>
  );
}
