import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummry() {

  const navigate=useNavigate()
  return (

    <div>
      Order Confirmed
      <button onClick={()=>navigate(-1)}>Goback</button>
    </div>
    
  )
}

export default OrderSummry