import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Homepage from './Homepage.jsx';
import Signup from './Signup.jsx';
import Contact from './Contact.jsx';
import Pricing from './Pricing.jsx';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/pricing" element={<Pricing />}></Route>
      </Routes>
    </Router>
  );
};

export default Main;