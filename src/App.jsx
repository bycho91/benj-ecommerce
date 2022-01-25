import React from "react";
import {
  HomePage,
  ProductListPage,
  ProductPage,
  RegisterPage,
  LoginPage,
  CartPage,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/productlist" element={<ProductListPage />} />

          <Route path="/product" element={<ProductPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
