import React, { useState, useEffect, useContext } from "react";
import Loading from "./Loading";
import CartProductsCard from "./CartProductsCard";
import { CartContext } from "../Context/Cart";

export default function CartProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { calculateTotalTotalPrice, totalPrice } = useContext(CartContext);

  const getProductsFromLocalStorage = () => {
    const productsFromCart = JSON.parse(localStorage.getItem("products"));
    setProducts(productsFromCart);
    console.log(totalPrice);
    setLoading(false);
  };

  const renderCartProducts = () => {
    return products.map((product) => {
      const { id, nome, valor, foto, quantity, size } = product;
      return (
        <div key={id + size} className="cart-div">
          <CartProductsCard
            id={id}
            nome={nome}
            valor={valor}
            foto={foto}
            quantity={quantity}
            size={size}
            calculateTotalTotalPrice={calculateTotalTotalPrice}
          />
        </div>
      );
    });
  };

  const purchase = () => {
    // eslint-disable-next-line no-alert
    alert("Compra finalizada!");
  };

  useEffect(() => {
    getProductsFromLocalStorage();
  }, []);

  return (
    <>
      <h2 className="titulo">Carrinho</h2>
      <div className="cart">
        {loading ? <Loading /> : renderCartProducts()}
        <div className="total-price-div">
          <p className="total-price-p">Total: R$ {totalPrice}</p>
          <button type="button" className="finalizar-compra" onClick={purchase}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
}
