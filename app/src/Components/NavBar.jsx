import React from "react";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul id="MenuItens">
            <li> <a href="/" title="">Inicio</a></li>
            <li> <a href="produtos.html" title="">Produtos</a></li>
            <li> <a href="" title="">Empresa</a></li>
            <li> <a href="" title="">Contatos</a></li>
            <li> <a href="" title="">Minha Conta</a></li>
        </ul>
      </nav>
      {/* Trocar href carrinho */}
      {/*Trocar img carrinho */}      
      <a href="carrinho.html" title="">
        <img src="../Assets/img/carrinho.png" alt="" width="30px" height="30px" />
      </a>
      {/* <img src="../Assets/img/menu.png" alt="" className="menu-celular" onClick={()=>{}} /> */}
    </>   
  );
}