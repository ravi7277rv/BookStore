import React from "react";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Cart from "./Components/Cart/Cart";
import Order from './Components/Order/Order';
 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" Component={ Home }/>
        <Route path="/cart" Component={ Cart } />
        <Route path="/order" Component={ Order } />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        theme="colored"
      />
      <Footer />
    </Router>
  );
}

export default App;
