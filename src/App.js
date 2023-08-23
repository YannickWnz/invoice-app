import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserProfile from './Components/UserProfile/UserProfile';

function App() {

  const [test, setTest] = useState(false)

  function handlesettest() {
    setTest(!test)
  }

  return (
    <ThemeProvider> 
      <div className="App">
        {/* <h1>whats poppin homeboy</h1> */}
        <Navbar setTest={handlesettest} />
        <UserProfile test={test} handlesettest={handlesettest} />
        {/* <CreateInvoice /> */}
        {/* <NewInvoice /> */}
        <Router>
          <Routes>
            <Route path='/' element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } ></Route>
            <Route path='/invoice/:id' element={
              <PrivateRoute>
                <Invoice />
              </PrivateRoute>
            } ></Route>
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
