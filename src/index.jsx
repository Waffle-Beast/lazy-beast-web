import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MainPage from './pages/mainPage/MainPage';
import { AboutMePage } from './pages/aboutMePage/AboutMePage';
import './style/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
        <Routes>
          <Route path='lazy-beast-web/' element={<MainPage />} />
          <Route path='lazy-beast-web/AboutMe' element={<AboutMePage />} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();