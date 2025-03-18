import './index.css';
import NavBar from './components/header/NavBar.jsx';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/components item/DetailsItem';
import { createContext, useState } from 'react';
import ProviderContextoListCart from './components/components item/providerContextoListCart';
import Checkout from "./components/components item/Checkout.jsx";


function App() {

  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
    
    
  );
}

export default App;
