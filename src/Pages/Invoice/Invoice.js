import React from 'react'
import { useParams } from 'react-router-dom'

function Invoice() {

  const {id} = useParams()

  console.log(id)

  return (
    <div className='invoice'>
        <h1>This your invoice bruh</h1>
    </div>
  )
}

export default Invoice