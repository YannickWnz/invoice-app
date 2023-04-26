import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import Home from './Pages/Home/Home'
import Invoice from './Pages/Invoice/Invoice'
import Navbar from './Components/Navbar/Navbar';
import CreateInvoice from './Components/CreateInvoice/CreateInvoice';
import NewInvoice from './Components/CreateInvoice/NewInvoice';
import { ThemeProvider } from './context/Context';

function App() {
  return (
    <ThemeProvider> 
      <div className="App">
        {/* <h1>whats poppin homeboy</h1> */}
        <Navbar />
        {/* <CreateInvoice /> */}
        {/* <NewInvoice /> */}
        <Router>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/invoice/:id' element={<Invoice />} ></Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider> 

  );
}

export default App;
