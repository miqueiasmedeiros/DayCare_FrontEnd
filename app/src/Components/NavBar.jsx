import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth";

export default function NavBar() {
  const { authenticated, logout } = useContext(AuthContext);

  const logoutLink = () => {
    if (authenticated) {
      return (
        <li>
          <a href="/" onClick={logout}>
            Sair
          </a>
        </li>
      );
    }
    return null;
  };

  return (
    <nav>
      <ul id="MenuItens">
        <li>
          <a href="/" title="">
            Inicio
          </a>
        </li>
        <li>
          {" "}
          <a href="/products" title="">
            Produtos
          </a>
        </li>
        <li>
          {" "}
          <a href="/company" title="">
            Empresa
          </a>
        </li>
        <li>
          {" "}
          <a href="/contacts" title="">
            Contatos
          </a>
        </li>
        <li>
          {" "}
          <a href="/account" title="">
            Minha Conta
          </a>
        </li>
        {logoutLink()}
      </ul>
    </nav>
  );
}
