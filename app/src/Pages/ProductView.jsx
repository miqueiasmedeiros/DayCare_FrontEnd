import React from "react";
import { useLocation } from "react-router-dom";
import products from "../Components/ProductsObject";
import Brands from "../Components/Brands";
import Header from "../Components/Header";
import MainProducts from "../Components/MainProducts";
import Footer from "../Components/Footer";

export default function ProductView() {
  const location = useLocation();
  const path = location.pathname;
  const productIndex = path.substring(path.lastIndexOf("%") + 2);

  const product = () => {
    if (productIndex[0] === "0") {
      return products[productIndex[1] - 1];
    }
    return productIndex;
  };

  const renderProduct = () => {
    const { nome, imagem, descricao, preco, galeria } = product();
    const img = Object.values(imagem)[0];
    return (
      <div className="corpo-categorias ver-produto">
        <div className="linha">
          <div className="col-2">
            <img src={img} alt="" id="produtoImg" />

            <div className="img-linha">
              <div className="img-col">
                <img
                  src={galeria}
                  alt=""
                  width="100%"
                  className="produtoMiniatura"
                />
              </div>

              <div className="img-col">
                <img
                  src={galeria}
                  alt=""
                  width="100%"
                  className="produtoMiniatura"
                />
              </div>

              <div className="img-col">
                <img
                  src={galeria}
                  alt=""
                  width="100%"
                  className="produtoMiniatura"
                />
              </div>

              <div className="img-col">
                <img
                  src={galeria}
                  alt=""
                  width="100%"
                  className="produtoMiniatura"
                />
              </div>
            </div>
          </div>

          <div className="col-2">
            <p>{nome}</p>
            <h1>Compre com desconto</h1>
            <h4>{`R$ ${preco}`}</h4>
            <form action="" method="post">
              <select name="" id="">
                <option value="">Selecione o Tamanho</option>
                <option value="">P</option>
                <option value="">M</option>
                <option value="">G</option>
                <option value="">XG</option>
                <option value="">XXG</option>
              </select>

              <input type="number" name="" id="" value="1" />
              <button type="submit" className="btn">
                Adicionar ao Carrinho
              </button>
            </form>
            <h3>Descrição:</h3>
            <p>{descricao}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      {renderProduct()}
      <MainProducts />
      <Brands />
      <Footer />
    </>
  );
}
