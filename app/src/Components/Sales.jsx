import React from "react";

export default function Sales() {
  return (
    // <!-- INICIO OFERTAS EM DESTAQUE -->
    <div className="ofertas">
      <div className="corpo-categorias">
        <div className="linha">
          <div className="col-2">
            <img src="assets/img/banner-2.png" alt="" className="oferta-img" />
          </div>
          <div className="col-2">
            <p>Produto exclusivo da Loja DayCare</p>
            <h1>Plataforma de Brinquedos</h1>
            <small>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              ever{" "}
            </small>
            {/* <a href="" className="btn"> */}
            Comprar Agora
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
