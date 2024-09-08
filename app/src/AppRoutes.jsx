import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/Auth";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

export default function AppRoutes() {
  return (
    <Routers>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/admin" element={<Private><Account /></Private>} /> */}
        </Routes>
      </AuthProvider>
    </Routers>
  );
}
