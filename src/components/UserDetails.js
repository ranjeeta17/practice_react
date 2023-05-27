import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const {userId} = useParams() // destructuring
    // const userId=params.userId
  return (
    <div>
    its user details of {userId}
    </div>
  )
}

export default UserDetails