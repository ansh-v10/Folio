import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/portfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout() {
  const location = useLocation();

  return (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      width: '100%'
    }}>
      <Navbar />
      <main style={{ 
        flex: '1 0 auto', 
        position: 'relative', 
        zIndex: 1, 
        width: '100%',
        margin: '0 auto',
        boxSizing: 'border-box'
      }}>
        {/* Page level animation container key is location.pathname so Vite triggers refade on mount */}
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function AppRouter() {
  return <Layout />;
}
