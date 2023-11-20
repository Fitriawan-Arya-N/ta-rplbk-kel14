// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import Navigation from './components/Navigation/Navigation';
import { useAuth } from './auth/AuthContext'; // Menggunakan file terpisah untuk fungsi-fungsi terkait autentikasi
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import AboutPage from './pages/About/AboutPage';


import './App.css';

const App = () => {
  const { isLoggedIn, handleLogin, handleLogout } = useAuth();

  return (
    <Router>
      <div className="full-screen-container">
        {isLoggedIn && <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
        <ToastContainer />
        <Routes>
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/login" replace /> : <LoginPage onLogin={handleLogin} />}
          />
          {isLoggedIn ? (
            <>
            <Route path="/" element={<HomePage />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/about" element={<AboutPage />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
