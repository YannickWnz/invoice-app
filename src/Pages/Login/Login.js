import './Login.scss'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function Login() {
    
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [textType, setTextType] = useState(false)

    const handlePasswordType = () => {
        setTextType(!textType)
    }


    return (
        <div className="login">
            <div className='login-container'>
                <div className='logo-wrapper'>
                    <img src='/starter-code/assets/logo.svg' />
                </div>
                <h1>Login to your account</h1>
                <p>Welcome back!</p>
                <form className='form'>
                    <div className='name-input'>
                        <label>
                            Username 
                            <br />
                            <input type='text' name='username' placeholder='Username' />
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
                        <input type='submit' value='Login' />
                    </div>
                    <div className='error-wrapper'>
                        <p>Invalid email format</p>
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