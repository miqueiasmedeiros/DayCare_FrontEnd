import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Brands from "../Components/Brands";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { getProducts } from "../Services/Api";
import MainProductsCard from "../Components/MainProductsCard";
import Loading from "../Components/Loading";

export default function ProductView() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const location = useLocation();
  const path = location.pathname;

  const changeSize = (e) => {
    const { value } = e.target;
    setProduct({ ...product, size: value });
    setSize(value);
  };

  const changeQuantity = (e) => {
    if (e) {
      const { value } = e.target;
      const qty = Number(value);
      setQuantity(qty);
      setProduct({ ...product, quantity: qty });
    } else {
      setProduct({ ...product, quantity });
    }
  };

  const setProductsToLocalStorage = () => {
    const productsInCart = JSON.parse(localStorage.getItem("products")) || [];
    const existingProductIndex = productsInCart.findIndex(
      (element) =>
        product && element.id === product.id && element.size === product.size
    );

    if (existingProductIndex !== -1) {
      productsInCart[existingProductIndex].quantity += quantity;
    } else {
      const productWithQuantity = { ...product, quantity };
      productsInCart.push(productWithQuantity);
    }

    localStorage.setItem("products", JSON.stringify(productsInCart));

    alert("Produto adicionado ao carrinho!");
  };

  const findProduct = (data) => {
    const productId = parseInt(path.substring(path.lastIndexOf("/") + 1), 10);
    const foundProduct = data.find(({ id }) => {
      return id === productId;
    });
    const wholeProduct = { ...foundProduct, quantity, size };
    setProduct(wholeProduct);
    // return foundProduct;
  };

  const renderCategoriesProducts = () => {
    const productsCategories = allProducts.filter((element) => {
      return product && element.categoria_id === product.categoria_id;
    });
    return productsCategories.map((element) => {
      return (
        <div key={element.id + element.nome} className="col-4">
          <MainProductsCard
            id={element.id}
            nome={element.nome}
            preco={element.valor}
            descricao={element.descricao}
            imagem={element.foto}
          />
        </div>
      );
    });
  };

  const fetchProducts = async () => {
    const data = await getProducts();
    setAllProducts(data);
    findProduct(data);
    renderCategoriesProducts();
    setLoading(false);
  };

  const renderProduct = () => {
    const { nome, foto, descricao, valor } = product;
    return (
      <div className="corpo-categorias ver-produto">
        <div className="linha">
          <div className="col-2">
            <img src={foto} alt="" id="produtoImg" />

            <div className="img-linha">
              <div className="img-col">
                <img
                  src={foto}
                  alt=""
                  width="100%"
                  className="produtoMiniatura"
                />
              </div>

              <div className="img-col">
                <img
                  src={foto}
                  alt=""
                  width="100%"
                  className="produtoMiniatura"
                />
              </div>

              <div className="img-col">
                <img
                  src={foto}
                  alt=""
                  width="100%"
                  className="produtoMiniatura"
                />
              </div>

              <div className="img-col">
                <img
                  src={foto}
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
            <h4>{`R$ ${valor}`}</h4>
            <form>
              <select onChange={changeSize}>
                <option value="">Selecione o Tamanho</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="XG">XG</option>
                <option value="XXG">XXG</option>
              </select>

              <input
                type="number"
                name=""
                id=""
                onChange={changeQuantity}
                defaultValue="1"
                min="0"
              />
              <button
                type="button"
                className="btn"
                onClick={setProductsToLocalStorage}
                disabled={btnDisabled}
              >
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

  useEffect(() => {
    fetchProducts();
    changeQuantity();
  }, []);

  useEffect(() => {
    changeQuantity();
  }, [quantity]);

  useEffect(() => {
    if (size) {
      setBtnDisabled(false);
    }
  }, [size]);

  return (
    <>
      <Header />
      {!loading && product ? (
        <>
          {renderProduct()}
          <div className="corpo-categorias">
            <h2 className="titulo">Produtos Relacionados</h2>
            <div className="linha">{renderCategoriesProducts()}</div>
          </div>
          <Brands />
        </>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}
