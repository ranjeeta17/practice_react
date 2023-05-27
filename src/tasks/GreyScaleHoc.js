import React from 'react'

function GreyScaleHoc(Component) {
  function NewComponent(props){
    return (
        <div style={{filter:"grayscale(100%)"}}>
            <Component {...props}/>
        </div>
    )
    }
    return NewComponent
}

export default GreyScaleHoc
