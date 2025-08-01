import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyProgress from './components/MyProgress';
import MonthProgress from './components/MonthProgress';
import HomePage from './pages/Home';
import EmployeeList from './pages/Test';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <EmployeeList />
  </React.StrictMode>
);

export{}