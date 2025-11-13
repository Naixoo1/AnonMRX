import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import UMKMDetailPage from './components/UMKMDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/umkm/:id" element={<UMKMDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
