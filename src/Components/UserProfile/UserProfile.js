import { useEffect, useState } from 'react';
import './UserProfile.scss'
import axios from 'axios'

export default function UserProfile({test, handlesettest}) {

    // console.log(test)
    const [loginUserData, setLoginUserData] = useState([])
    
    
    async function fetchLoginUserData() {
        const token = localStorage.getItem("token");
        // console.log(token)

        await axios.get(`http://localhost:80/api/fetchUserData.php/${token}`).then(function(response) {
        // await axios.get(`https://api.invoice-app.xyz/api/fetchUserData.php/${token}`).then(function(response) {
            // console.log(response.data)
            // console.log(loginUserData)
            
            if(!Array.isArray(response.data)) {
                console.log(response.data)
            } else {
                setLoginUserData(response.data)
            }

        })
        


    }

    useEffect(() => {
        // fetchLoginUserData()
    }, [test])

    function logUserOut() {
        localStorage.removeItem("token")
        window.location.reload();
    }


    return (
        // <div className="user-profile">
        <div className={`user-profile ${test ? 'show-profile' : ''}`}>
            <div className='profile-details-wrapper'>
                <h1>Profile</h1>
                {loginUserData.length > 0 && loginUserData.map((data, index) => { 
                    return <div key={index} className='user-details'>
                    <p><span>Username:</span> {data.username}</p>
                    <p><span>Email:</span> {data.email}</p>
                </div>})}
                <div className='btn-wrapper'>
                    <button
                    onClick={handlesettest}
                    >CANCEL</button>
                    <button
                    onClick={logUserOut}
                    >
                        LOGOUT
                    </button>
                </div>
            </div>
        </div>
    )
}