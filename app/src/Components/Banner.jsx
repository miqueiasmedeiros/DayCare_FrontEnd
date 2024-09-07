import React from "react";
import NavBar from "./NavBar";
import logo from "../assets/img/logo.png";
import banner1 from "../assets/img/banner-1.png";
import cart from "../assets/img/carrinho.png";

export default function Banner() {
  return (
    <div className="banner">
      {/* <!-- INCIO CONTAINER --> */}
      <div className="contanier">
        {/* <!-- INCIO NAVEGAÇÃO --> */}
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="DayCare" width="125px" />
            {/* <!-- INICIO MENU NAVEGAÇÃO --> */}
            <NavBar />
            <a href="carrinho.html" title="">
              <img src={cart} alt="" width="30px" height="30px" />
            </a>
            {/* <img src="../Assets/img/menu.png" alt="" className="menu-celular" onClick={()=>{}} /> */}
            {/* <!-- INICIO TEXTO DO BANNER --> */}
            <div className="linha">
              <div className="col-2">
                <h1>Escolha um novo estilo de vida!</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                {/* <a href="" className="btn">
                  Mais Informações &#8594;
                </a> */}
              </div>
              <div className="col-2">
                <img src={banner1} alt="" />
              </div>
            </div>
            {/* <!-- FIM TEXTO DO BANNER --> */}
          </div>
          {/* <!-- FIM CONTAINER --> */}
        </div>
        {/* <!-- FIM BANNER --> */}
      </div>
    </div>
  );
}
