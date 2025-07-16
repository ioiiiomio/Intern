import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from 'remoteApp/Header';

const root = document.getElementById('root')
if (!root) throw new Error('root not found')

  console.log('root')
ReactDOM.createRoot(root).render(
  <Header>
  </Header>

)
