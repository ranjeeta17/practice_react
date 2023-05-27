import React from 'react'
import HighrOder from './HighrOder'

function ClickCounter(props) {

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

export default HighrOder(ClickCounter)