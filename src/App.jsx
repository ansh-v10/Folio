import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import AnimatedBackground from './utils/AnimatedBackground';
import './App.css';


function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
        <AnimatedBackground />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;