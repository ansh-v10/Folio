import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import AnimatedBackground from './utils/AnimatedBackground';
import './App.css';


function App() {
  return (
    <HashRouter>
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
        <AnimatedBackground />
        <AppRouter />
      </div>
    </HashRouter>
  );
}

export default App;