import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavBar } from './components/navbar/navbar';
import { ListAnime } from './components/ListAnime/ListAnime';
import { Footer } from './components/footer/footer';
import './index.scss';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <ListAnime />
    <Footer />
  </React.StrictMode>
)
