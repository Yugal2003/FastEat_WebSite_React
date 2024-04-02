import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Subcategory from "./component/Subcategory"
import App from './App';
import Product from './component/Products'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/subcategory/:subcategory" element={<Subcategory/>} />
      <Route path='/product/:productid' element={<Product/>} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
