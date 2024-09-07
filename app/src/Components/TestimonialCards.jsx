import React from "react";
import { IonIcon } from "@ionic/react";
import { starOutline } from "ionicons/icons";
import PropTypes from "prop-types";

export default function TestimonialCards(props) {
  const { name, testimonials, image } = props;
  return (
    <div className="col-3">
      <IonIcon name="ribbon-outline" className="depoimento-icone" />
      <IonIcon name="ribbon" className="depoimento-icone" />

      <p>{testimonials}</p>
      <div className="Classificacao">
        <IonIcon icon={starOutline} />
        <IonIcon icon={starOutline} />
        <IonIcon icon={starOutline} />
        <IonIcon icon={starOutline} />
        <IonIcon icon={starOutline} />
      </div>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
  );
}

TestimonialCards.propTypes = {
  name: PropTypes.string.isRequired,
  testimonials: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
