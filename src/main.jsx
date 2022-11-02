
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import App from './App';
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

import './index.css';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<Movie/>}/>
      <Route path="search" element={<Search/>}/>
      

      
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)
