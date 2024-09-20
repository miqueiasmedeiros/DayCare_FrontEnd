import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/Cart";
import Loading from "./Loading";
import CartProductsCard from "./CartProductsCard";
import { AuthContext } from "../Context/Auth";

export default function CartProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { calculateTotalTotalPrice, totalPrice } = useContext(CartContext);
  const { authenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const getProductsFromLocalStorage = () => {
    const productsFromCart = JSON.parse(localStorage.getItem("products"));
    setProducts(productsFromCart);
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
    return authenticated ? navigate("/checkout") : navigate("/login");
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
          <button type="button" className="ir-pagamento" onClick={purchase}>
            Ir para pagamento
          </button>
        </div>
      </div>
    </>
  );
}
