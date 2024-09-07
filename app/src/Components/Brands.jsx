import React from "react";
import brand1 from "../assets/img/marca-1.png";
import brand2 from "../assets/img/marca-2.png";
import brand3 from "../assets/img/marca-3.png";
import brand4 from "../assets/img/marca-4.png";
import brand5 from "../assets/img/marca-5.png";

export default function Brands() {
  return (
    <div className="marcas">
      <div className="corpo-categorias">
        <div className="linha">
          <div className="col-5">
            <img src={brand1} alt="" />
          </div>
          <div className="col-5">
            <img src={brand2} alt="" />
          </div>
          <div className="col-5">
            <img src={brand3} alt="" />
          </div>
          <div className="col-5">
            <img src={brand4} alt="" />
          </div>
          <div className="col-5">
            <img src={brand5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
