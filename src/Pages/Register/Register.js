import './Register.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'



function Register() {


    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [textType, setTextType] = useState(false)

    const handlePasswordType = () => {
        setTextType(!textType)
    }


    return (
        <div className="register">
            <div className='register-container'>
                <div className='logo-wrapper'>
                    <img src='/starter-code/assets/logo.svg' />
                </div>
                <h1>Sign Up</h1>
                <p>You're just a few seconds away to start creating your invoice for FREE!</p>
                <form className='form'>
                    <div className='name-input'>
                        <label>
                            Username 
                            <br />
                            <input type='text' name='username' placeholder='Username' />
                        </label>
                    </div>
                    <div className='email-input'>
                        <label>
                            Email
                            <br />
                            <input type='email' name='email' placeholder='Email' />
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
                            onChange={e => {
                                setPassword(e.target.value)
                            }}
                            />
                        </label>
                        <i 
                        className={`fa-regular ${password.length == 0 ? '' : 'display-block'} ${textType ? 'fa-eye-slash' : 'fa-eye'}`}
                        onClick={handlePasswordType}
                        ></i>
                    </div>
                    <div className='register-btn'>
                        <input type='submit' value='Sign up' />
                    </div>
                    <div className='error-wrapper'>
                        <p>Invalid email format</p>
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