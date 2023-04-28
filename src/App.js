import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import Home from './Pages/Home/Home'
import Invoice from './Pages/Invoice/Invoice'
import Login from './Pages/Login/Login'
import Navbar from './Components/Navbar/Navbar';
import CreateInvoice from './Components/CreateInvoice/CreateInvoice';
import NewInvoice from './Components/CreateInvoice/NewInvoice';
import { ThemeProvider } from './context/Context';
import NotFound from './Pages/404/NotFound';
import Register from './Pages/Register/Register';

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
            <Route path='/login' element={ <Login /> } ></Route>
            <Route path='/register' element={ <Register /> } ></Route>
            <Route path='*' element={ <NotFound /> } ></Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider> 

  );
}

export default App;
