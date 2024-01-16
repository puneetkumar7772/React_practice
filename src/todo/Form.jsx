import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './form.css'
import { useFormik } from 'formik';
import signUpScheema  from './scheema/validation';


const Form = () => {
    const  onSubmit=(values)=>{
        console.log(values);
        formik.resetForm()
    }
    const formik=useFormik({
        initialValues:{Firstname:'',Lastname:'',Email:'',Password:'',Confirmpassword:''},
        validationSchema:signUpScheema,
        onSubmit:onSubmit
    })
  return (
<div className="main">
<form className="form" onSubmit={formik.handleSubmit}>
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input className="input" type="text" name="Firstname" placeholder=""  onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.Firstname} required=""/>
            <span>Firstname</span>
        <p>{formik.errors.Firstname}</p>

        </label>
        <label>
            <input className="input" type="text" name="Lastname" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Lastname}  required=""/>
            <span>Lastname</span>
        <p>{formik.errors.Lastname}</p>

        </label>
    </div>  
            
    <label>
        <input className="input" type="email" name="Email" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Email}  required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" name="Password" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Password}  required=""/>
        <span>Password</span>
    </label>
    <label>
        <input className="input" type="password" name="Confirmpassword" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Confirmpassword}  required=""/>
        <span>Confirm password</span>
    </label>
    <button className="submit" type='submit'>Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
</div>
  )
}

export default Form
