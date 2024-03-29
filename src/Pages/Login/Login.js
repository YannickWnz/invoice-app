import './Login.scss'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

function Login() {

    const [userData, setUserData] = useState({
        username:'',
        password:''
    })

     // function handling user data 
    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const [textType, setTextType] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handlePasswordType = () => {
        setTextType(!textType)
    }

    // function handling login form submission
    const handleLoginFormSubmit = e => {
        e.preventDefault()

        if(userData.username.length === 0) {
            setError('Please fill in all fields')
            return
        }

        if(userData.password.length === 0) {
            setError('Please fill in all fields')
            return
        }

        const userLoginData = {
            username: userData.username,
            password: userData.password
        }

        axios.post(`http://localhost:80/api/fetchUser.php`, userLoginData).then(function(response) {
        // axios.post(`https://api.invoice-app.xyz/api/fetchUser.php`, userLoginData).then(function(response) {

            if(response.data == 'error') {
                setError('Invalid username or password')
            } else {
                saveToLocalStorage('token', response.data)
                navigate('/')
            }

        })

        resetForm()
    }

     // function saving user token in local storage after registration is successful
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }

     // function handling form reset START
    const resetForm = () => {
        setUserData({
            username:'',
            password:''
        })
        setError('')
    }
    // function handling form reset END


    return (
        <div className="login">
            <div className='login-container'>
                <div className='logo-wrapper'>
                    <img src='/starter-code/assets/logo.svg' />
                </div>
                <h1>Login to your account</h1>
                <p>Welcome back!</p>
                <form className='form' onSubmit={handleLoginFormSubmit}>
                    <div className='name-input'>
                        <label>
                            Username 
                            <br />
                            <input 
                            type='text' 
                            name='username' 
                            placeholder='Username' 
                            onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className='password-input'>
                        <label>
                            Password
                            <br />
                            <input 
                            type={textType ? 'text' : 'password'} 
                            name='password' 
                            placeholder='Password' 
                            onChange={handleInputChange}
                            />
                        </label>
                        <i 
                        className={`fa-regular ${userData.password.length == 0 ? '' : 'display-block'} ${textType ? 'fa-eye-slash' : 'fa-eye'}`}
                        onClick={handlePasswordType}
                        ></i>
                    </div>
                    <div className='register-btn'>
                        <input type='submit' value='Login' />
                    </div>
                    <div className={`error-wrapper ${error ? 'show' : '' } `}>
                        {/* <p>Invalid email format</p> */}
                        {error && <p>{error}</p>}
                    </div>
                </form>
                <div className='login-redirect'>
                    <p>Don't have an account ?</p>
                    <Link to='/register'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login