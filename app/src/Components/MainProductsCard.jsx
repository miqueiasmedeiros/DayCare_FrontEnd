import React from "react";
import PropTypes from "prop-types";
import { IonIcon } from "@ionic/react";
import { starOutline } from "ionicons/icons";

export default function MainProductsCard(props) {
  const { nome, preco, descricao, imagem } = props;
  const img = Object.values(imagem);
  // console.log(imagem);
  return (
    <>
      <a href={`/productview/${nome}`} title="">
        <img src={img} alt={nome} />
      </a>
      <h4>{nome}</h4>
      <h5>{descricao}</h5>
      <div className="Classificacao">
        <IonIcon icon={starOutline} />
        <IonIcon icon={starOutline} />
        <IonIcon icon={starOutline} />
        <IonIcon icon={starOutline} />
        <IonIcon icon={starOutline} />
      </div>
      <p>{preco}</p>
    </>
  );
}

MainProductsCard.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
};
