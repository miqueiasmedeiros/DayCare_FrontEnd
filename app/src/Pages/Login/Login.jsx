import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";
import Header from "../../Components/Header";
import "./Login.css";

export default function Login() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const { authenticated, login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const formValidation = () => {
    // const isEmailValid = /\S+@\S+\.\S+/.test(form.email);

    // if (isEmailValid && form.password.length >= 6) {
    //   return setButtonDisabled(false);
    // }

    if (form.password.length >= 6) {
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

    login(form);
  };

  useEffect(() => {
    formValidation();
  }, [form]);

  const skipLogin = () =>
    authenticated ? navigate("/account") : navigate("/login");

  useEffect(() => skipLogin(), [user]);

  return (
    <>
      <Header />
      <div className="form">
        <form className="login-form">
          <div className="form-login-input">
            <label htmlFor="login">
              Login
              <div>
                <input
                  id="Login"
                  name="login"
                  type="text"
                  placeholder="Login"
                  required
                  onChange={onInputChange}
                />
              </div>
            </label>
          </div>
          <div className="form-login-input">
            <label htmlFor="password">
              Senha
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Senha"
                  required
                  onChange={onInputChange}
                />
              </div>
            </label>
          </div>
          <button
            className="submit-button"
            type="submit"
            disabled={buttonDisabled}
            onClick={onButtonClick}
          >
            Login
          </button>
          <a className="cadastro" href="/register">
            Crie sua conta
          </a>
        </form>
      </div>
    </>
  );
}
