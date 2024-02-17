// FeedbackForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FeedbackForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      country: '',
      email: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      address: Yup.string().required('Address is required'),
      country: Yup.string().required('Country is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted:', values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='feedbackForm '>
      <div>
        <h2>Thank you so much for taking the time! </h2>
        <p>Please provie the below details!</p>
        <div className='form-group'>
        <label htmlFor="firstName">First Name:</label><br/>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        placeholder='John'
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <span className="error">{formik.errors.firstName}</span>
      ) : null}
        </div>

      <div className='form-group'>
      <label htmlFor="lastName">Last Name:</label><br/>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        placeholder='Doe'
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <span className="error">{formik.errors.lastName}</span>
      ) : null}
      </div>
      <div className='form-group'>
      <label htmlFor="address">Address:</label><br/>
      <textarea
        id="address"
        name="address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        placeholder='Enter your full Postal Address'
      />
      {formik.touched.address && formik.errors.address ? (
        <span className="error">{formik.errors.address}</span>
      ) : null}
</div>
<div className='form-group'>
<label htmlFor="country">Country:</label><br/>
      <input
        type="text"
        id="country"
        name="country"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.country}
        placeholder='India'
      />
      {formik.touched.country && formik.errors.country ? (
        <span className="error">{formik.errors.country}</span>
      ) : null}
</div>
<div className='form-group'>
<label htmlFor="email">Email:</label><br/>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder='example@sample.com'
      />
      {formik.touched.email && formik.errors.email ? (
        <span className="error">{formik.errors.email}</span>
      ) : null}
</div>
<div className='form-group'>
<label htmlFor="phoneNumber">Phone Number:</label><br/>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phoneNumber}
        placeholder='+91123456789'
      />
      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
        <span className="error">{formik.errors.phoneNumber}</span>
      ) : null}
</div>


      <button type="submit" className='formBtn'>Submit Feedback</button>
      </div>  
    </form>
  );
};

export default FeedbackForm;
