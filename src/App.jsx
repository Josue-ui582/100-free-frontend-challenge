import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Challenges';
import Challenge1 from './Pages/Challenges1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Navbar />} />
        <Route path="/challenge-1" element={<Challenge1 />} />
      </Routes>
    </Router>
  );
}

export default App;