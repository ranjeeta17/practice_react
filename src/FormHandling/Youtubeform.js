import React from 'react'
import { useFormik } from 'formik'


const initialValues={
  name:'ranjeeta',
  email:'',
  chanel:''

}

const  onSubmit =values=>{
  console.log('form data', values)
}

const validate=values=>{


  let errors={}

  if(!values.name){
    errors.name='Required'
  }

  if(!values.email){
    errors.name='Required'
  }

  if(!values.chanel){
    errors.name='Required'
  }

  return errors

}

function Youtubeform() {

 const formik=  useFormik({
  initialValues,
  onSubmit,
  validate 

 })


  return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name' >Name</label>
        <input type='text' id='name' name='name'value={formik.values.name} onChange={formik.handleChange}/>

        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' value={formik.values.email} onChange={formik.handleChange}/>

        <label htmlFor='chanel'>chanel</label>
        <input type='text' id='chanel' name='chanel' value={formik.values.chanel} onChange={formik.handleChange}/>
      

        <button type='submit'>Submit</button>
    </form>
  )
}

export default Youtubeform