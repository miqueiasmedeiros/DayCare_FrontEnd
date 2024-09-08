import React from "react";
import google from "../assets/img/google.png";
import apple from "../assets/img/apple.png";
import logo2 from "../assets/img/logo-2.png";

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="linha">
          <div className="rodape-col-1">
            <h3>Baixe o nosso App</h3>
            <p>Baixe nosso aplicativo nas melhores plataformas.</p>
            <div className="app-logo">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
          <div className="rodape-col-2">
            <img src={logo2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
              quis debitis.
            </p>
          </div>
          <div className="rodape-col-3">
            <h3>Mais Informações</h3>
            <ul>
              <li>Cumpons</li>
              <li>Blog</li>
              <li>Política de Privacidade</li>
              <li>Contatos</li>
            </ul>
          </div>
          <div className="rodape-col-4">
            <h3>Redes Sociais</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <p className="direitos">
          &#169; Todos os direitos reservados a DayCare
        </p>
      </div>
    </footer>
  );
}
