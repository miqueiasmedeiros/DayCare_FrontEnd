import React from 'react';
import {
  BrowserRouter as Routers,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './Pages/Home';

export default function AppRoutes() {
  return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
      </Routes>
    </Routers>
  );
}