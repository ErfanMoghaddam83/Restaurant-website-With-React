import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import Header from './copmponents/header/Header';
import Section from './copmponents/section/Section';
import Footer from './copmponents/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './copmponents/section/component/Gallery';
import Menu from './copmponents/section/component/Menu';
import Specials from './copmponents/section/component/Specials';
import Contact from './copmponents/section/component/Contact';
import Chefs from './copmponents/section/component/Chefs';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Header />}>
            <Route index element={<Section/>} />
            <Route path="gallery" element={<Gallery/>} />
             <Route path="menu" element={<Menu/>} /> 
             <Route path="specials" element={<Specials/>} /> 
             <Route path="contact" element={<Contact/>} /> 
             <Route path="chefs" element={<Chefs/>} /> 
             {/*<Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    <Footer />
    </>
  )
}

export default App