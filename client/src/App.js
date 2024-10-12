
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login';  // Adjust the path according to your folder structure

import Register from './pages/Register';
import PetCatalogue from './pages/PetCatalogue/PetCatalogue';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import Footer from './components/Footer';
import PetCard from './components/PetCard';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/petcatalogue" element={<PetCatalogue />} />
        <Route path="/petcard" element={<PetCard />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/userdashboard" element={<UserDashboard/>} />
        <Route path="/admindashboard" element={<AdminDashboard/>} />


      </Routes>
    </Router>
  );
}

export default App;





