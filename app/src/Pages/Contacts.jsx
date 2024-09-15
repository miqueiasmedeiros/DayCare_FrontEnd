import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Contacts() {
  return (
    <>
      <Header />
      <h2 className="titulo compTitulo">Contacts</h2>
      <div className="col-2 comp">
        <div className="comp2">
          <h3>contact@daycare.com</h3>
          <h3>@daycarecompany</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}
