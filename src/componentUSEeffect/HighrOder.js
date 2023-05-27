import React, { useState } from 'react'

function HighrOder(WrappedComponent) {

    function Newcomponent(props){
        const [count,setCount]=useState(0)

        function Increment(){
            setCount(prev =>prev+1)
        }
        return <WrappedComponent  count={count} Increment={Increment}/>

    }

    return Newcomponent
  
}

export default HighrOder