import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketLinkage from './MarketLinkage'; 
import Form from './components/Form'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketLinkage />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="/product/:productid" element={<Form />} /> */}
      </Routes>
    </Router>
    );
}

export default App;
