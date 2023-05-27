import React from 'react'
import { useReducer } from 'react'

function Reduce() {
    const initialvalue=0

    const [count,dispatch]=useReducer(Reduce,initialvalue)

    const Reduce=(state,action)=>{
        switch(action){
            case 'increment':
                return state+1
            case 'decrement':
                return state-1
            case 'reset':
                return initialvalue
            default:
                return state
        }
            
        

    }


  return (

    <>
    <h1> Coutn:{count}</h1>
    <button onClick={()=>dispatch('increment')}>INCREMENT</button>
    <button onClick={()=>dispatch('decrement')}>DECREMENT</button>
    <button onClick={()=>dispatch('reset')}>RESET</button>

    </>
  )
}

export default Reduce