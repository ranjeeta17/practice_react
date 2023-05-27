import React from 'react'
import HighrOder from './HighrOder'

function Counter(props) {

  return (
    <div>
            <h1>
                Count{props.count}
            </h1>

            <button onClick={props.Increment}>
                CLICK ME
            </button>

    </div>
  )
}


function Callme(props){
    return (
        <div>
                <h1>
                   this id from call me Count{props.count}
                </h1>
    
                <button onClick={props.Increment}>
                    CLICK ME
                </button>
    
        </div>
      )

}

export default HighrOder(Callme)