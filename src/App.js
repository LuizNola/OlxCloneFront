import react from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

import { Tamplate }from './components/MainComponents'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'


function App() {
  return (
    <BrowserRouter>
      <Tamplate>
        <Header/>
        
          <Router/>
          
        <Footer/>
      </Tamplate>
    </BrowserRouter>
  );
}

export default App;
