import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './home';
import Aboutus from './aboutus';
import Login from './login';
import Signup from './signup';
import Navbar from './components/navbar';
import Volunteer from './volunteer';
import Charities from './charities';
import Createcharity from './createcharity';
import Donations from './donations';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/charities' element={<Charities />} />
          <Route path='/create-charity' element={<Createcharity />} />
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/donations' element={<Donations />} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
