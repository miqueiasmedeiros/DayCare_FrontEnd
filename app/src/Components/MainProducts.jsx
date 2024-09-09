import React from "react";
import { useLocation, useParams } from "react-router-dom";
import products from "./ProductsObject";
import MainProductsCard from "./MainProductsCard";

export default function MainProducts() {
  const location = useLocation();
  const { productName } = useParams();

  function renderProductsCard(index1, index2) {
    const mainProducts = products.slice(index1, index2);
    return mainProducts.map((product) => {
      return (
        <div key={product.key} className="col-4">
          <MainProductsCard
            id={product.id}
            nome={product.nome}
            preco={product.preco}
            descricao={product.descricao}
            imagem={product.imagem}
          />
        </div>
      );
    });
  }
  return (
    <div className="corpo-categorias">
      {location.pathname === "/" ? (
        <>
          <h2 className="titulo">Produtos em Destaque</h2>
          <div className="linha">{renderProductsCard(0, 4)}</div>
        </>
      ) : null}

      {useLocation().pathname === "/" ? (
        <>
          <h2 className="titulo"> Novos Produtos </h2>
          <div className="linha">{renderProductsCard(4, 12)}</div>
        </>
      ) : null}
      {location.pathname.startsWith("/productview/") && productName ? (
        <>
          <h2 className="titulo"> Produtos Relacionados </h2>
          <div className="linha">{renderProductsCard(4, 8)}</div>
        </>
      ) : null}
      {location.pathname === "/products" ? (
        <div className="linha">{renderProductsCard(0, 12)}</div>
      ) : null}
    </div>
  );
}
