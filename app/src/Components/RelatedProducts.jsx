import React from "react";
import { IonIcon } from "@ionic/react";
import { starOutline } from "ionicons/icons";

export default function RelatedProducts() {
  return (
    <>
      <div className="linha linha2">
        <h2>Produtos Relacionados</h2>
        <p>Veja mais</p>
      </div>

      <div className="corpo-categorias">
        <div className="linha">
          <div className="col-4">
            <img src="assets/img/produto-9.jpg" alt="" />
            <h4>Cursos Cobranças</h4>
            <div className="Classificacao">
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
            </div>
            <p>R$ 997,90</p>
          </div>

          <div className="col-4">
            <img src="assets/img/produto-10.jpg" alt="" />
            <h4>Cursos Cobranças</h4>
            <div className="Classificacao">
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
            </div>
            <p>R$ 997,90</p>
          </div>

          <div className="col-4">
            <img src="assets/img/produto-11.jpg" alt="" />
            <h4>Cursos Cobranças</h4>
            <div className="Classificacao">
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
            </div>
            <p>R$ 997,90</p>
          </div>

          <div className="col-4">
            <img src="assets/img/produto-12.jpg" alt="" />
            <h4>Cursos Cobranças</h4>
            <div className="Classificacao">
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
              <IonIcon icon={starOutline} />
            </div>
            <p>R$ 997,90</p>
          </div>
        </div>
      </div>
    </>
  );
}
