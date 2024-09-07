import React from "react";
import categoria1 from "../assets/img/categoria-1.jpg";
import categoria2 from "../assets/img/categoria-2.jpg";
import categoria3 from "../assets/img/categoria-3.jpg";

export default function Categories() {
  return (
    // <!-- INICIO CATEGORIAS EM DESTAQUE -->
    <div className="categorias">
      <h2 className="titulo">Categorias em Destaque</h2>
      {/* <!-- INICIO CORPO CATEGORIAS EM DESTAQUE --> */}
      <div className="corpo-categorias">
        {/* <!-- INICIO LINHA DO CORPO CATEGORIAS --> */}
        <div className="linha">
          <div className="col-3">
            <img src={categoria1} alt="Categoria 1" />
          </div>
          <div className="col-3">
            <img src={categoria2} alt="Categoria 2" />
          </div>
          <div className="col-3">
            <img src={categoria3} alt="Categoria 3" />
          </div>
        </div>
        {/* <!-- FIM LINHA DO CORPO CATEGORIAS --> */}
      </div>
      {/* <!-- FIM CORPO CATEGORIAS EM DESTAQUE --> */}
    </div>
  );
}
