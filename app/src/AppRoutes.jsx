import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/Auth";
import Home from "./Pages/Home";
import Subscribe from "./Pages/Subscribe";
import Login from "./Pages/Login/Login";
import ProductView from "./Pages/ProductView";
import Products from "./Pages/Products";
import Private from "./Components/Private";
import Account from "./Pages/Account";
import Company from "./Pages/Company";
import Contacts from "./Pages/Contacts";
import Register from "./Pages/Register/Register";

export default function AppRoutes() {
  return (
    <Routers>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/subscribe" element={<Subscribe />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/productview/:productName"
            element={<ProductView />}
          />
          <Route
            exact
            path="account"
            element={
              <Private>
                <Account />
              </Private>
            }
          />
          {/* <Route exact path="/admin" element={<Private><Account /></Private>} /> */}
        </Routes>
      </AuthProvider>
    </Routers>
  );
}
