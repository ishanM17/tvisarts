import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx'
import ClassDetail from './ClassDetail.jsx';
import ContactForm from './ContactForm.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/classes/:classId" element={<ClassDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
