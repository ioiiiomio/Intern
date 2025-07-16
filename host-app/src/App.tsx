import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = document.getElementById('root')
if (!root) throw new Error('root not found')

  console.log('root')
ReactDOM.createRoot(root).render(
  <div>Host app</div>
)
