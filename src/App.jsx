import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import Main from './components/Main';
import BlogPage from './components/Hero/Blog';
import Client from './components/Hero/Client';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/features" element={<Client />} />
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
       
        <Footer />
      </div>
    </Router>
  );
};

export default App;
