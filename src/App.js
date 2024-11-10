import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import JobDetails from './components/JobDetails';
import AssessmentCreation from './components/AssessmentCreation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
          <Route path="/assessment" element={<AssessmentCreation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
