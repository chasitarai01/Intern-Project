import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import SelectPaymentType from "./pages/selectPyamentType";
import PaymentSuccess from "./pages/paymentSuccess";
import store from "./store/store";
import KhaltiPayment from "./pages/Khalti";
import React from "react";
import ProductList from "./pages/product.jsx";
import Navbar from "./pages/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/khalti" element={<KhaltiPayment />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


