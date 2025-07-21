import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from 'remoteApp/Header';

// Lazy load MusicPage from musicApp remote
const MusicPage = React.lazy(() => import('musicApp/MusicPage'));

const root = document.getElementById('root');
if (!root) throw new Error('root not found');

ReactDOM.createRoot(root).render(
  <>
    <Header />
    <React.Suspense fallback={<div>Loading Music Page...</div>}>
      <MusicPage />
    </React.Suspense>
  </>
);
