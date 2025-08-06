import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SideBar from './components/SideBar';
import HomePage from './pages/HomePage';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <BrowserRouter>
      <HomePage />
  </BrowserRouter>
);
