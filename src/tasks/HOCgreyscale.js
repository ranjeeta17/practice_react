import React from 'react'

function HOCgreyscale(WrappedComponent) {

    function Newcomponent(props){

        return(
            <div style={{filter:"grayscale(100%)"}}>
            <WrappedComponent {...props}/>
            </div>
        )

    }
  return Newcomponent
    
  
}

export default HOCgreyscale