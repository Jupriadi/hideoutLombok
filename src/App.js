import React from 'react';
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/bootstrap-grid.min.css'
import './bootstrap/css/bootstrap-reboot.min.css'
import './App.css';

import Navbar from './components/navbar.jsx';
import Banner from './components/banner';
import Package from './components/package';

function App() {
  return (
    <div className="hg-100 pb-5">
      <Navbar />
      <Banner />
      <Package />
    </div>
  );
}

export default App;
