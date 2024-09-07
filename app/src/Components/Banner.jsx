import React from "react";
import NavBar from "./NavBar";

export default function Banner() {
  return (
    <div className="banner">
      {/* <!-- INCIO CONTAINER --> */}
      <div className="contanier">
        {/* <!-- INCIO NAVEGAÇÃO --> */}
        <div className="navbar">
          <div className="logo">
            <img src="assets/img/logo.png" alt="DayCare" width="125px" />
            {/* <!-- INICIO MENU NAVEGAÇÃO --> */}
            <NavBar />
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
                <img src="assets/img/banner-1.png" alt="" />
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
