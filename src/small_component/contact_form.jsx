import React, { useRef } from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'

export default function ContactForm() {
    console.log("vc");
    const fromvalidate = useRef(false);

    const userSchema = Yup.object({
        name: Yup.string().min(6, 'Name must be at least 6 characters').required('Please Enter Your Name'),
        user_email: Yup.string().email('Please Enter Valid Email').required('Please Enter Your Email'),
        subject: Yup.string().required('Please Enter Subject'),
        message: Yup.string().min(50, 'Message must be at least 50 characters').required('Please Type Message'),
      });      

      const GoogleAuthentication = useGoogleLogin({
        scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/user.phonenumbers.read',
        onSuccess: (tokenResponse) => {
                  console.log("cll");
          fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
            const {name,email} = data;
            if(values.name.toLocaleLowerCase() === name.toLocaleLowerCase() && email === values.user_email){

                Swal.fire({
                    title: 'Thank You',
                    text: 'Your Message Send Successfuly',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            }else{
                Swal.fire({
                    title: 'Data Mismatch',
                    text: 'Please Check Your Name And Email After Submit',
                    icon: 'info',
                    confirmButtonText: 'Try Again'
                  });
            }
            })
            .catch((error) => {
                Swal.fire({
                    title: 'OOPs!',
                    text: 'Message Not Send',
                    icon: 'info',
                    confirmButtonText: 'Try Again'
                  });
            });
        },
        onError: () => {
            Swal.fire({
                title: 'ERROR!',
                text: 'Something Went Wrong',
                icon: 'error',
                confirmButtonText: 'Try After Some Time'
              });
        },
      });

      const initialValues = {
        name: '',
        user_email: '',
        subject: '',
        message: '',
      };
    
      const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: userSchema,
        onSubmit: async (values,action) => {
            try {
                fromvalidate.current = true;
              let response = await GoogleAuthentication();
              console.log(response);
            //   action.resetForm();
            } catch (error) {
              console.error('Error during Google Authentication:', error);
            }
          },
      });
  return (
<div className="col-lg-7">
    <form className="php-email-form" onSubmit={handleSubmit}>
    <div className="row gy-4">
        <div className="col-md-6">
            <label htmlFor="name-field" className="pb-2">Your Name</label>
            <input type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} name="name" placeholder='Enter Your Name' autoComplete='off' id="name-field" className="form-control"/>
            <div className="invalid-feedback d-block p-0 m-0">{errors.name && touched.name ? errors.name : ''}</div>
        </div>
        <div className="col-md-6">
            <label htmlFor="email-field" className="pb-2">Your Email</label>
            <input type="email" value={values.user_email} onChange={handleChange} onBlur={handleBlur} name="user_email" className="form-control" placeholder='Enter Your Email' autoComplete='off'  id="email-field"/>
            <div className="invalid-feedback d-block p-0 m-0">{errors.user_email && touched.user_email ? errors.user_email : ''}</div>
        </div>
        <div className="col-md-12">
            <label htmlFor="subject-field" autoComplete='off' className="pb-2">Subject</label>
            <input type="text" value={values.subject} onChange={handleChange} onBlur={handleBlur}name="subject" className="form-control" placeholder='Enter Your Subject' autoComplete='off' id="subject-field"/>
            <div className="invalid-feedback d-block p-0 m-0">{errors.subject && touched.subject ? errors.subject : ''}</div>
        </div>
        <div className="col-md-12">
            <label htmlFor="message-field" className="pb-2">Message</label>
            <textarea className="form-control" value={values.message} onChange={handleChange} onBlur={handleBlur} autoComplete='off' placeholder='Type hear message' name="message" rows="10" id="message-field"></textarea>
            <div className="invalid-feedback d-block p-0 m-0">{errors.message && touched.message ? errors.message : ''}</div>
        </div>
        <div className="col-md-12 text-center">
            <button type="submit">Verify email & Send Message</button>
        </div>
    </div>
    </form>
</div>
  )
}

