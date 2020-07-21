import React, { useState, useEffect } from 'react';
import { getAllReports } from '../../../actions/report';
import { useHistory, Link } from 'react-router-dom';

export const GetReportPage = () => {
	const history = useHistory()
	const user = JSON.parse(localStorage.getItem('adminOrWarden'));
	console.log('>>>>>', user.data.userType)
	if ( user.data.userType!== 'admin') {
		history.push('/login');
	}
	const [reports, fetchReports] = useState([]);
	const [messageAlert, setMessageAlert] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetAllReports = async () => {
			try {
				const report = await getAllReports();
				const { message, data } = report;

				fetchReports(data);
				setMessageAlert(message)
			} catch (err) {
				setError(err)
			}
		}
		fetAllReports();
	},	[])
	const rep =  reports.map((value => value ))
	// console.log('>>>>>>rep', reports);
	return (
		<div>
		<h1 className="text-center">Reports</h1>
		<div>
		{rep.map( (locate, index) => (

		<div>
				{error ? <div className="nnn">{messageAlert} </div> : ''}
				<div className="new" style={{ margin: "4rem" }} key={locate.latitude}>
					<div key={locate._id.toString()}>{locate.location}</div>	
					<div  key= {locate._id.toString()}>{locate.congestionTime}</div>
					<Link className="btn btn-info" to={`/reports/${locate._id}`}>view Details</Link>
</div>
				</div>
			))}
			</div>
			</div>
	)
}
