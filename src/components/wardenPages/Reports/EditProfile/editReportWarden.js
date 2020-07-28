import React, {useState,} from 'react'
import {  useHistory } from 'react-router-dom';
import { editWardenReport } from '../../../../actions/report';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import './editReportWarden.css';


export const EditReport = () => {
	const history = useHistory()
	const user = JSON.parse(localStorage.getItem('adminOrWarden'));
	if ( user.userType!== 'traffic-warden') {
		history.push('/wardenLogin');
	}
	const [error, setError] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');


	const formik = useFormik({
		initialValues: {
			congestionTime: '',
			trafficType: '',
			congestionDetails: '',
		},
		validationSchema: Yup.object({
			trafficType: Yup.string(),
			congestionTime: Yup.string()
				.required('congestionTime is required'),
				location:  Yup.string(),
			congestionDetails: Yup.string()
		}),
		onSubmit: async (values, { setSubmitting }) => {
			const report = await editWardenReport(values);
			const { status, message } = report;
			if (status === 200) {
				return history.push('/wardenDashboard');

			}
			setTimeout(() => {
				setError(true);
				setAlertMessage(message);
				setSubmitting(false);
			}, 401);
		}
		})

	return (
			<div >
			<h2 className="login-heading mb-4 text-center">Update Traffic Reports</h2>
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
									
															<button className="btn btn-success btn-block btn-login mb-2" type="submit"
															>Send Reports</button>
															<div className="form-group col-lg-12 mx-auto d-flex align-items-center my-3">
															<div className="border-bottom w-100 ml-5"></div>
															</div>
													</form>
											</div>
										
	);	
	}
