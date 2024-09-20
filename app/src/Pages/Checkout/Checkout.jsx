import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Cart";
import { AuthContext } from "../../Context/Auth";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { getUser } from "../../Services/Api";
import "./Checkout.css";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [user, setUser] = useState({});

  const { totalPrice, calculateTotalTotalPrice } = useContext(CartContext);
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const getId = async () => {
    if (authenticated) {
      const id = JSON.parse(localStorage.getItem("user"));
      return id;
    }
    return null;
  };

  const userConfirmation = async () => {
    console.log(getId());
    const userInfo = await getUser(await getId());
    setUser(userInfo);
  };

  const refreshFormState = () => {
    setForm({
      name: user.nome,
      address: "",
      city: "",
      state: "",
      zip: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const finishPurchase = () => {
    console.log("Form submitted:", form);
    navigate("/confirmation");
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Adicione a lógica de checkout aqui
  //   console.log("Form submitted:", form);
  //   navigate("/confirmation");
  // };

  useEffect(() => {
    userConfirmation();
    calculateTotalTotalPrice();
  }, []);

  useEffect(() => {
    refreshFormState();
  }, [user]);

  return (
    <>
      <Header />
      <h2 className="titulo">Pagamento</h2>
      <div className="form">
        <form className="checkout-form">
          <div className="form-checkout-input">
            <label htmlFor="name">
              Nome
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  // required
                  // value={form.name}
                  onChange={onInputChange}
                />
              </div>
            </label>
          </div>
          <div className="form-checkout-input">
            <label htmlFor="address">
              Endereço
              <div>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  // required
                  onChange={onInputChange}
                />
              </div>
            </label>
          </div>
          <div className="form-checkout-input">
            <label htmlFor="city">
              Cidade
              <div>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="City"
                  // required
                  onChange={onInputChange}
                />
              </div>
            </label>
          </div>
          <div className="form-checkout-input">
            <label htmlFor="state">
              Estado
              <div>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="State"
                  // required
                  onChange={onInputChange}
                />
              </div>
            </label>
          </div>
          <div className="form-checkout-input">
            <label htmlFor="zip">
              CEP
              <div>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  placeholder="Zip Code"
                  // required
                  onChange={onInputChange}
                />
              </div>
            </label>
          </div>
          <div className="form-checkout-input">
            <label htmlFor="cardNumber">
              Cartão de crédito
              <div>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="Card Number"
                  // required
                  onChange={onInputChange}
                />
              </div>
            </label>
          </div>
          <div className="form-checkout-input">
            <label htmlFor="expirationDate">
              Data de validade
              <div>
                <input
                  id="expirationDate"
                  name="expirationDate"
                  type="text"
                  placeholder="MM/YY"
                  // required
                  onChange={onInputChange}
                />
              </div>
            </label>
          </div>
          <div className="form-checkout-input">
            <label htmlFor="cvv">
              CVV
              <div>
                <input
                  id="cvv"
                  name="cvv"
                  type="text"
                  placeholder="CVV"
                  // required
                  onChange={onInputChange}
                />
              </div>
            </label>
          </div>
          <div className="total-price">
            <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
          </div>
          <button
            onClick={finishPurchase}
            className="finalizar-compra"
            type="submit"
          >
            Finalizar Compra
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
