import React from 'react';
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DoctorsPage from "./pages/doctors/DoctorsPage";
import ServicesPage from "./pages/services/ServicesPage";
import ContactPage from "./pages/contact/ContactPage";
import Footer from './components/carousel/Footer';


function App() {
  return (
    <> 
      <Header />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />



      
    </>
  );
}

export default App;
