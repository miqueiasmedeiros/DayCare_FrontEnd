import React from "react";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul id="MenuItens">
          <li>
            <a href="/" title="">
              Inicio
            </a>
          </li>
          <li>
            {" "}
            <a href="produtos.html" title="">
              Produtos
            </a>
          </li>
          <li>
            {" "}
            {/* <a href="" title="">
              Empresa
            </a> */}
          </li>
          <li>
            {" "}
            {/* <a href="" title="">
              Contatos
            </a> */}
          </li>
          <li>
            {" "}
            {/* <a href="" title="">
              Minha Conta
            </a> */}
          </li>
        </ul>
      </nav>
      {/* Trocar href carrinho */}
      {/* Trocar img carrinho */}
    </>
  );
}
