import React, { useState } from 'react'

function PracHOOK(props) {
    const [count, setCount]= useState(0)


    let handleChange = (e)=>{
      setCount(e.target.value);
     }

  return (
    <>
       <h1>count {count}</h1>
       
       <button onClick={()=>setCount(count+1)}>+</button>
       <input type="text" value={count} onChange={handleChange}></input>
      <button onClick={()=>setCount(count-1)}>-</button>
       
    </>
    
  )
}

export default PracHOOK