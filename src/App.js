import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Background from './components/background';
import Chess from './components/chess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Background />} />
        <Route path="/Chess" element={<Chess />} />
      </Routes>
    </Router>
  );
}

export default App;
