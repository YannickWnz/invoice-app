import {Navigate} from 'react-router-dom'

function PrivateRoute({children}) {

    const value = localStorage.getItem('token');
    return value ? children : <Navigate to='/login' />

}

export default PrivateRoute