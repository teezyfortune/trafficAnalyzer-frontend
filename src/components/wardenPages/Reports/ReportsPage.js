import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { sendReports } from '../../../actions/report';

export const ReportsPage = () => {
	const history = useHistory()
	const user = JSON.parse(localStorage.getItem('adminOrWarden'));
	if ( user.userType!== 'traffic-warden') {
		history.push('/wardenLogin');
	}
	const [error, setError] = useState(false);
	const [alertMessage, setAlertMessage] = useState('')
	const formik = useFormik({
		initialValues: {
			congestionTime: '',
			trafficType: '',
			congestionDetails: '',
			location: ''
		},
		validationSchema: Yup.object({
			trafficType: Yup.string().required('Traffic type can not be empty'),
			congestionTime: Yup.string()
				.required('congestionTime is required'),
				location:  Yup.string()
				.required('Location can not be empty'),
			congestionDetails: Yup.string()
				.required('congestionDetails is required')
				.max(150, 'congestion details should not be more than 150 words'),
		}),
		onSubmit: async (values, { setSubmitting }) => {
			const report = await sendReports(values);
			const { status, message, data } = report;

			if (status === 201) {
				localStorage.setItem('adminOrWarden', JSON.stringify(data));
				setTimeout(() => alert('report sent successfully'), 2000);
				return history.push('/warden/reports');
			}
			setTimeout(() => {
				setError(true);
				setAlertMessage(message);
				setSubmitting(false);
			}, 401);
		}
		})

	return (

			<div>
				<div className="container wrapper">
					<div className="row no-gutter wrapper">
						<div className="d-none d-md-flex col-md-6 bg-image">
						</div>
						<div className="col-md-6">
							<div className="login d-flex align-items-center py-5">
								<div className="container">
									<div className="row">
										 <div className="col-md-9 col-lg-8 mx-auto">
											 <h2 className="login-heading mb-4 text-center">Send Traffic Reports</h2>
											 { error ? <div className="error">{alertMessage} </div> : '' }
										<form onSubmit={formik.handleSubmit}>
										<label htmlFor="CongestionTime">CongestionTime</label>
															<div className="form-label-group">
												<input
																 type="text"
																	id="inputCongestionTime"
																	className="form-control"
																	placeholder="WHat time did the congestion started, eg few minutes ago, like 2hrs ago"
																	{...formik.getFieldProps('congestionTime')}
															/>
															{formik.touched.congestionTime && formik.errors.congestionTime
																? (<div className ='input-error mt-1 pl-3'>{formik.errors.congestionTime}</div>) : null
															}
															</div>
														  <div className="form-row">
												<div className="col-md-12">
												<label htmlFor="CongestionTime">TrafficTypes</label>
                       <div className="form-label-group">
                         <select
                          id="confirmationType"
                          className="form-control"
                          {...formik.getFieldProps('trafficType')}
                         >
                            <option>Select cause of traffic</option>
                            <option value="road block">road block</option>
															<option value="road accident">road accident</option>
															<option value="road maintenance">road maintenance</option>
															<option value="vip movement">vip movement</option>
														</select>
														{formik.touched.traffic && formik.errors.trafficType ? (
															<div className ='input-error mt-1 pl-3' >{formik.errors.trafficType}</div>
														) : null}	 
													</div>
													
                      </div>
											</div>
											<div className="form-label-group">
											<label htmlFor="CongestionTime">CongestionDetails</label>
											<textarea
										 type="text"
											id="inputCongestionTime"
													className="form-control"
													placeholder="Explain for better understanding"
													{...formik.getFieldProps('congestionDetails')}
															/>
															{formik.touched.congestionDetails && formik.errors.congestionDetails
																? (<div className ='input-error mt-1 pl-3'>{formik.errors.congestionDetails}</div>) : null
															}
											</div>
											<div className="form-label-group">
											<label htmlFor="Location">Location</label>
												<input
												 type="text"
													id="location"
													className="form-control"
													placeholder="example, express Road, Lahore, Punjab 54000"
													{...formik.getFieldProps('location')}

													/>
															{formik.touched.location && formik.errors.location
																? (<div className ='input-error mt-1 pl-3'>{formik.errors.location}</div>) : null
															}
															</div>
															<button className="btn btn-success btn-block btn-login mb-2" type="submit"
															>Send Reports</button>
															<div className="form-group col-lg-12 mx-auto d-flex align-items-center my-3">
															<div className="border-bottom w-100 ml-5"></div>
															</div>
													</form>
											</div>
										</div>
								 </div>
							</div>
						</div>
					</div>
			 </div>
		</div>
	);	
	}
