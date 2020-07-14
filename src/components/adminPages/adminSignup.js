import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import {createUser } from '../../actions/authentication';


const SignupPage = () => {             
	const history = useHistory()
  const user = JSON.parse(localStorage.getItem('adminOrwarden'));
  if (user) {
    history.push('/sponsorDashboard');
	}
	const phoneRegex = RegExp(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  );

	const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  const formik =  useFormik({
    initialValues: {                    
      fullName: '',
      email: '',
			phone: '',
			city: '',
			country: '',
			Gender: '',
			password: '',
			ConfirmPassword:''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('fullName can not be empty'),
      email: Yup.string()
        .email('Invalid email address format')
        .required('Email is required'),
      phone: Yup.string()
        .required('Phone is required')
				.max(15, 'phone number is too long')
        .matches(phoneRegex, 'Invalid phone'),
    	city: Yup.string().required('City can not be empty'),
			country: Yup.string().required('City can not be empty'),
			Gender: Yup.string().required('Gender can not be empty'),
			password: Yup.string()
			.required('password is required')
			.min(6, 'password must be minimum of 6 characters')
			.matches(/(?=.*[0-9])/, 'Password must contain a number.'),
		ConfirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Passwords must match')
				.required('confirm the password'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
			const user = await createUser(values);
			const { status, message, data } = user;
			// console.log('>>>>>>>>>>user', data);

      if (status === 201) {
        localStorage.setItem('adminOrWarden', JSON.stringify(data));
        return history.push('/');
      }
      setTimeout(() => {
        setError(true);
        setAlertMessage(message);
        setSubmitting(false);
      }, 401);
    }
  });

	return (
		<div className="main-wrapper">
		<div className="container"> 
		
		<div className="row justify-content-center">
		<div >
		<form onSubmit={formik.handleSubmit}>
			{ error ? <div className="error">{alertMessage} </div> : '' }
				<div className="col form-group">
				{formik.touched.fullName && formik.errors.fullName
					? (<div className='input-error mt-1 pl-3'>{formik.errors.fullName}</div>) : null}
								<input type="text"
									className="form-control"
									placeholder="Full Name"
								name="fullName"
									{...formik.getFieldProps('fullName')}

								></input>
		</div>
			<div className="col form-group">
			{formik.touched.phone && formik.errors.phone
				? (<div className='input-error mt-1 pl-3'>{formik.errors.phone}</div>) : null}
								<input type="text"
									className="form-control"
									placeholder="Phone #"
								name="phone"
									{...formik.getFieldProps('phone')}
								></input>
				</div> 
		<div className="form-group">
		{formik.touched.email && formik.errors.email
			? (<div className='input-error mt-1 pl-3'>{formik.errors.email}</div>):null}
								<input type="email"
									className="form-control"
								placeholder="Email"
							name="email"
									{...formik.getFieldProps('email')}
									>
								</input>
			</div>
			<div className="form-group">
			{formik.touched.Gender && formik.errors.Gender
				?(<div className='input-error mt-1 pl-3'>{formik.errors.Gender}</div>) : null}
					<label className="form-check form-check-inline">
								Gender
								</label>
								<select id="inputGender" className="form-control"
								{...formik.getFieldProps('Gender')}
								>
						<option defaultValue>Male</option>
							<option >Female</option>
					</select>
						
			</div>
		<div className="form-group col-md-6">
		{formik.touched.city && formik.errors.city
			? (<div className='input-error mt-1 pl-3'>{formik.errors.city}</div>) : null}			
								<input type="text" className="form-control"
									placeholder="City"
								name="city"
								{...formik.getFieldProps('city')}
								></input>
				</div>
			<div className="form-group col-md-6">
			{formik.touched.country && formik.errors.country
				? (<div className='input-error mt-1 pl-3'>{formik.errors.country}</div>) : null}			
								<select id="inputState" className="form-control"
								{...formik.getFieldProps('country')}
								>
						<option defaultValue>Country</option>
							<option >Uzbekistan</option>
					</select>
				</div> 
				<label>Create password</label>
				<div className="form-group">
				{formik.touched.password && formik.errors.password
					? (<div className='input-error mt-1 pl-3'>{formik.errors.password}</div>):null}
								<input type="Password" className="form-control" placeholder="password"
								{...formik.getFieldProps('password')}
								></input>
								</div>
								<div className="form-group">
								{formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
									? (<div className='input-error mt-1 pl-3'>{formik.errors.ConfirmPassword}</div>):null}
								<input type="password" className="form-control" placeholder="confirm your password"
								{...formik.getFieldProps('ConfirmPassword')}
								></input>
									</div>
									<div className="form-group">
				<button
				className="btn btn-success btn-login mb-2"
				id ="btn-donate"
				type="submit"
			
		>Sign Up
		</button>
							</div> 
						</form>
		</div> 
		</div> 
		
		</div> 
		</div> 		
				
	)
}

export default SignupPage;