import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home(props) {

  
  const navigate= useNavigate()

  // const {name,sec,clas,flag} = props.bool
  //  function render (value){
  //   if(value == true){
  //     return <>
  //       <button>
  //         ranjeeta
  //       </button>
  //     </>
  //   }
  //   else{
  //     return <>
  //       <button>
  //         aneeket
  //       </button>
  //     </>
  //   }
  //  }

  return (
 <>
  {/* {render(flag)} */}

  {/* <div>
    Home
    <button onClick={()=>navigate('ordersummry',{replace:true})}>Place Order</button>
  </div> */}

  <h1>this is from home {props.name}</h1>
  
 
 
 </>
    
  )
}

export default Home