import './Navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar">
            {/* <div className='navbar-container'></div> */}
            <div className='logo-container'>
                <img src='/starter-code/assets/logo.svg' />
                <div className='log-bg-effect'></div>
            </div>
            <div className='navbar-bottom-section'>
                <div className='site-mode-btn-wrapper'>
                    <div className='light'>
                        <i className="fa-solid fa-moon"></i>
                    </div>
                    <div className='dark' style={{display: 'none'}}>
                        <i className="fa-solid fa-sun"></i>
                    </div>
                </div>
                <div className='user-setting-section'>
                    <div className='avatar'></div>
                </div>
            </div>
        </div>
    )
}