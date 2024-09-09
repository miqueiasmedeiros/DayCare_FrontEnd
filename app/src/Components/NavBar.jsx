import React from "react";

export default function NavBar() {
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
      </ul>
    </nav>
  );
}
