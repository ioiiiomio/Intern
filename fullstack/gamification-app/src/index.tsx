import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyProgress from './components/MyProgress';
import MonthProgress from './components/MonthProgress';
import HomePage from './pages/TablePage';
import EmployeeList from './pages/Test';
import { Home } from 'lucide-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

export{}