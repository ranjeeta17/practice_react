import React from 'react'

function HOCCenter(WrappedComponent) {

    function Newcomponent(props){
    return(
        <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:600}}>
           < WrappedComponent {...props}/>
        </div>
    )
        

    }

 return Newcomponent
}

export default HOCCenter