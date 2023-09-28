import React, { useEffect, useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios'

function PrivateRoute({children}) {

    const [userAuth, setUserAuth] = React.useState(false)
    const [test, setTest] = React.useState(0)


    axios.defaults.withCredentials = true

    const navigate = useNavigate()

    const checkToken = async () => {

        try {

            const res = await axios.get('http://localhost:1556/checkToken')

            if (!res.data || res.data.error) {
                navigate('/login')
            }

        } catch (error) {
            console.log(error)
            navigate('/login')
        }

    }

    React.useEffect(() => {

        checkToken()
    }, [])


    return <>{children}</>


}

export default PrivateRoute