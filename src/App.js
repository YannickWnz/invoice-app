import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import Home from './Pages/Home/Home'
import Invoice from './Pages/Invoice/Invoice'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1>whats poppin homeboy</h1> */}
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/invoice' element={<Invoice />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
