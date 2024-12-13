import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Challenges';
import Challenge1 from './Pages/Challenges1';
import Challenge2 from './Pages/Challenge2';
import Challenge3 from './Pages/Challenge3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Navbar />} />
        <Route path="/challenge-1" element={<Challenge1 />} />
        <Route path="/challenge-2" element={<Challenge2 />} />
        <Route path="/challenge-3" element={<Challenge3 />} />
      </Routes>
    </Router>
  );
}

export default App;