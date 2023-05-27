
import React from 'react'
import { Children } from 'react'
import About from '../components/About'

function Greet(props) {

    // const[Children]=props

  return (
    <>
    {/* <About {...props}/> */}
      <h1>{props.name}</h1>
    
    </>
     
  )
}

Greet.defaultProps={
  name:'ranjeeta',
  lastname:'kour'
}

// Greet.propTypes={
//   name:propTypes.string

// }

export default Greet