import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Scheduling from './pages/Scheduling';
import TawkToChat from './components/TawkToChat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Scheduling />} />
      </Routes>
      <TawkToChat />
    </Router>
  );
}

export default App;