import React from 'react'

function GrayScaleHoc(Component) {
  function NewComponent(props){
    return (
        <div style={{filter:"grayscale(100%)"}}>
            <Component {...props}/>
        </div>
    )
    }
    return NewComponent
}

export default GrayScaleHoc
