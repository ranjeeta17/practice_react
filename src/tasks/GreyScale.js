import React from 'react'
import GrayScaleHoc from './GrayScaleHoc'
function GrayScale(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} height={props.height} width={props.width}/>
        {/* {props.name} */}
    </div>
  )
}

export default GrayScaleHoc(GrayScale)


