import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Contact from './pages/Contact';

function App() {
    return (
            <>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Forecast" element={<Forecast />} />
                <Route path="/Contact" element={<Contact />} /> 
            </Routes>
            </>
    );
}

export default App;
