import React from 'react'
import {Image} from 'react-bootstrap'
import logo from './images/1.jpg'
import HOCgreyscale from './tasks/HOCgreyscale'

function HocImaghe() {
    const GrayScaleImage = grayScale(Image)
  return (
    <div>HocImaghe</div>
  )
}

export default HOCgreyscale(HocImaghe)