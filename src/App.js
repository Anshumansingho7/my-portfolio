import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import Project from './screen/Project';
import Contact from './screen/Contact';
import Resume from './screen/Resume';
import PathPrerak from './screen/project/PathPrerak';
import ProStream from './screen/project/ProStream';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path='/projects/path_prerak' element={<PathPrerak />} />
        <Route path='/projects/pro_stream' element={<ProStream />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
