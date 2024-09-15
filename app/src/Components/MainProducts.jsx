import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainProductsCard from "./MainProductsCard";
import { getProducts } from "../Services/Api";
import Loading from "./Loading";

export default function MainProducts() {
  const location = useLocation();

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const data = await getProducts();
    setAllProducts(data);

    setLoading(false);

    setLoading(false);
  };

  function renderProductsCard(index1, index2) {
    const mainProducts = allProducts.slice(index1, index2);
    return mainProducts.map((product) => {
      return (
        <div key={product.id} className="col-4">
          <MainProductsCard
            id={product.id}
            nome={product.nome}
            preco={product.valor}
            descricao={product.descricao}
            imagem={product.foto}
          />
        </div>
      );
    });
  }

  const renderPage = () => {
    if (!loading && allProducts.length > 0) {
      return (
        <div className="corpo-categorias">
          {location.pathname === "/" ? (
            <>
              <h2 className="titulo">Produtos em Destaque</h2>
              <div className="linha">{renderProductsCard(0, 4)}</div>
            </>
          ) : null}

          {location.pathname === "/" ? (
            <>
              <h2 className="titulo">Novos Produtos</h2>
              <div className="linha">{renderProductsCard(4, 12)}</div>
            </>
          ) : (
            <div className="linha">
              {renderProductsCard(0, allProducts.length - 1)}
            </div>
          )}
        </div>
      );
    }
    return <p>Nenhum produto encontrado.</p>;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>{loading ? <Loading /> : renderPage()}</div>;
}
