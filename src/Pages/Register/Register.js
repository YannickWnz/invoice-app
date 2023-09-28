import './Register.scss'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { saveToLocalStorage } from '../../Components/Utilities/Utilities';



function Register() {

    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "a","b","c","d","e","f","g","h", "i","j","k","l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    axios.defaults.withCredentials = true

    // setting empty input names
    const [userData, setUserData] = useState({
        username:'',
        email:'',
        password:''
    })

    const [textType, setTextType] = useState(false)
    const [error, setError] = useState('')
    const [userToken, setUserToken] = useState('')
    const navigate = useNavigate()

    // functio handling hide/show password
    const handlePasswordType = () => {
        setTextType(!textType)
    }

    // function handling user data 
    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })

    }


    const registerUser = async () => {

        try {
            
            const res = await axios.post('http://localhost:1556/signup', userData)
            
            if(res.status === 200) {
                console.log(res.data)
                saveToLocalStorage('userDetails', JSON.stringify(res.data.newUserDetails))
                navigate('/')
            }

        } catch (error) {
            console.log(error)
        }

    }

    // functions handling form submission START
    const handleRegisterUser = (e) => {
        e.preventDefault();

        if(userData.username.length === 0) {
            setError('Username is required')
            return
        }
        if(userData.email.length === 0) {
            setError('Email is required')
            return
        }
        if(userData.password.length === 0) {
            setError('Password is required')
            return
        }
        if(userData.password.length < 2) {
            console.log('cant be empty')
            setError('Password should be at least 6 characters')
            return
        }

        registerUser()

        // console.log('submitted', userData)
        resetForm()
    }
    // functions handling form submission END

    // function handling form reset START
    const resetForm = () => {
        setUserData({
            username:'',
            email:'',
            password:''
        })
        setError('')
    }
    // function handling form reset END

    // function generating user token START
    function generateUniqueToken(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789012345678901234567890123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    // function generating user token START

    return (
        <div className="register">
            <div className='register-container'>
                <div className='logo-wrapper'>
                    <img src='/starter-code/assets/logo.svg' />
                </div>
                <h1>Sign Up</h1>
                <p>You're just a few seconds away to start creating your invoice for FREE!</p>
                <form className='form' onSubmit={handleRegisterUser}>
                    <div className='name-input'>
                        <label>
                            Username 
                            <br />
                            <input 
                            type='text' 
                            name='username' 
                            placeholder='Username' 
                            value={userData.username}
                            onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className='email-input'>
                        <label>
                            Email
                            <br />
                            <input 
                            type='email' 
                            name='email' 
                            placeholder='Email' 
                            value={userData.email}
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
                            value={userData.password}
                            onChange={e => {
                                handleInputChange(e)
                                // setPassword(e.target.value)
                            }}
                            />
                        </label>
                        <i 
                        className={`fa-regular ${userData.password.length == 0 ? '' : 'display-block'} ${textType ? 'fa-eye-slash' : 'fa-eye'}`}
                        onClick={handlePasswordType}
                        ></i>
                    </div>
                    <div className='register-btn'>
                        <input type='submit' value='Sign up' />
                    </div>
                    <div className={`error-wrapper ${error ? 'show' : '' } `}>
                        {/* <p>Invalid email format</p> */}
                        {error && <p>{error}</p>}
                    </div>
                </form>
                <div className='login-redirect'>
                    <p>Already have an account ?</p>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register