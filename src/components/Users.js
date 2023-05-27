import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParam, setSearchParams]= useSearchParams()
    const ShowActiveUsers= searchParam.get('filter')==='active'

  return (
  <div>
    
    <div>User1</div>
    <div>User2</div>
    <div>User3</div>

    <Outlet/>

    <div>
        <button onClick={()=>setSearchParams({filter:'active'})}> Active Users</button>
        <button onClick={()=>setSearchParams({})}> Reset Filter</button>

        
    </div>

    {
        ShowActiveUsers ? (
        <h2>Showing Active Users</h2>
        ) : (
      <h2>Showing all users</h2>
        )
    }

  </div>

    
  )
}

export default Users