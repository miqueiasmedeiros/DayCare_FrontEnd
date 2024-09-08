import React from "react";
import NavBar from "./NavBar";
import logo from "../assets/img/logo.png";
import banner1 from "../assets/img/banner-1.png";
import cart from "../assets/img/carrinho.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="contanier">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="DayCare" width="125px" />
          </div>
          <NavBar />
          <a href="/cart" title="">
            <img src={cart} alt="" width="30px" height="30px" />
          </a>
        </div>
        <div className="linha">
          <div className="col-2">
            <h1>Escolha um novo estilo de vida!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a href="/store" className="btn">
              Mais Informações &#8594;
            </a>
          </div>
          <div className="col-2">
            <img src={banner1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
