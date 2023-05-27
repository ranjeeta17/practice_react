import React from 'react'
import HOCCenter from './HOCCenter'

function Text(props) {
  return (
    <div>hey {props.name} here</div>
    
  )
}

export default HOCCenter(Text) 