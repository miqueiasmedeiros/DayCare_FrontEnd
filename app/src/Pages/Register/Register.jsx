import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/Auth";
import Header from "../../Components/Header";
import "./Register.css";

export default function Register() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [form, setForm] = useState({
    login: "",
    password: "",
    email: "",
    nome: "",
    doublePassword: "",
  });

  const { createUser } = useContext(AuthContext);

  const formValidation = () => {
    const isNameValid = form.nome.length >= 3;

    const isEmailValid = /\S+@\S+\.\S+/.test(form.email);

    // const isTelephoneValid = form.login.length >= 11;

    if (
      isNameValid &&
      isEmailValid &&
      // isTelephoneValid &&
      form.password === form.doublePassword &&
      form.password.length >= 6
    ) {
      return setButtonDisabled(false);
    }
    return setButtonDisabled(true);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    const updateState = {
      ...form,
      [name]: value,
    };
    setForm(updateState);
    formValidation();
  };

  const onButtonClick = async (event) => {
    event.preventDefault();
    const { doublePassword, ...formRest } = form;

    createUser(formRest);
  };

  useEffect(() => {
    formValidation();
  }, [form]);
  return (
    <>
      <Header />
      <div className="form">
        <form className="signup-form">
          <div className="form-input">
            <label htmlFor="nameInput">
              Nome
              <div>
                <input
                  id="nameInput"
                  name="nome"
                  type="text"
                  placeholder="Nome Completo"
                  required
                  onChange={onInputChange}
                />
              </div>
            </label>
            {/* {!isValidName && <span className="warning">O seu nome deve estar completo</span>} */}
          </div>
          <div className="form-input">
            <label htmlFor="telephoneInput">
              Login
              <div>
                <input
                  id="loginInput"
                  name="login"
                  type="text"
                  placeholder="login"
                  required
                  onChange={onInputChange}
                />
              </div>
            </label>
            {/* {!isValidTelephone && <span className="warning">
        O seu número de telefone deve conter 2 dígitos de DDD + o seu número</span>} */}
          </div>
          <div className="form-input">
            <label htmlFor="emailInput">
              Email
              <div>
                <input
                  id="emailInput"
                  name="email"
                  type="text"
                  placeholder="Email"
                  required
                  onChange={onInputChange}
                />
              </div>
            </label>
            {/* {!isValidEmail &&
          <span className="warning">O seu email não tem um formato válido</span>} */}
          </div>
          <div className="form-input">
            <label htmlFor="passInput">
              Senha
              <div>
                <input
                  id="passInput"
                  name="password"
                  type="password"
                  placeholder="Senha"
                  required
                  onChange={onInputChange}
                />
              </div>
            </label>
            {/* {!isValidEmail &&
          <span className="warning">O seu email não tem um formato válido</span>} */}
          </div>
          <div className="form-input">
            <label htmlFor="doublePassInput">
              Repita a senha
              <div>
                <input
                  id="doublePassInput"
                  name="doublePassword"
                  type="password"
                  placeholder="Email"
                  required
                  onChange={onInputChange}
                />
              </div>
            </label>
            {/* {!isValidEmail &&
          <span className="warning">O seu email não tem um formato válido</span>} */}
          </div>
          <button
            className="submit-button"
            type="submit"
            disabled={buttonDisabled}
            onClick={onButtonClick}
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </>
  );
}
