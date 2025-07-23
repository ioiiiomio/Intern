import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyProgress from './components/MyProgress';
import MonthProgress from './components/MonthProgress';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <MyProgress>

    </MyProgress> */}

    <MonthProgress>
      
    </MonthProgress>
  </React.StrictMode>
);
