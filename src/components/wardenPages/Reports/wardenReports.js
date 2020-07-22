import React, { useState, useEffect } from 'react';
import { getAllWardenReport } from '../../../actions/report';
import { useHistory, Link } from 'react-router-dom';

export const WardenReports = () => {
	const history = useHistory()
	const user = JSON.parse(localStorage.getItem('adminOrWarden'));
	console.log('>>>>>', user)
	if ( user.userType!== 'traffic-warden') {
		history.push('/wardenLogin');
	}
	const [reports, fetchReports] = useState([]);
	const [messageAlert, setMessageAlert] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetAllReports = async () => {
			try {
				const report = await getAllWardenReport();
				const { message, data } = report;
				fetchReports(data);
				setMessageAlert(message)
			} catch (err) {
				console.log('>>>>>err', err)
				setError(true)
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
				<div className="new" style={{ margin: "4rem" }} >
					<div key={locate.userId}>{locate.location}</div>	
					<div >{locate.congestionTime}</div>
					<Link className="btn btn-info" to={`/reports/${locate._id}`}>view Details</Link>
</div>
				</div>
			))}
			</div>
			</div>
	)
}
