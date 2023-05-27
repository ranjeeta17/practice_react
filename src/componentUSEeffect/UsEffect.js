import React, { useEffect, useState } from 'react'

function UsEffect() {

    const [people, setPeople]=useState('')

    

    useEffect(()=>{
    const fetchpromise= fetch("https://jsonplaceholder.typicode.com/todos/1")
   fetchpromise.then(response=>response.json()).then(people=> setPeople(JSON.stringify(people)))  
    })

    function handleChange(){
        setPeople("aniket here ")
    }


  return (
    <div>
        {people}
        <button onClick={handleChange}>
        change value
        </button>
    </div>
  )

}

export default UsEffect