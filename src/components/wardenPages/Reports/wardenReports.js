import React, { useState, useEffect } from 'react';
import { getAllWardenReport } from '../../../actions/report';
import { useHistory, Link } from 'react-router-dom';

export const WardenReports = () => {
	const history = useHistory()
	const user = JSON.parse(localStorage.getItem('adminOrWarden'));
	if ( user.userType !== 'traffic-warden') {
		history.push('/wardenLogin');
	}
	const [reports, fetchReports] = useState([])

	useEffect(() => {
		const fetAllReports = async () => {
			try {
				const report = await getAllWardenReport();
				const { data } = report;
				fetchReports(data);
			} catch (err) {
				return err			}
		}
		fetAllReports();
	},	[])
	// const { status, } = reports;
	return (
		<div>
		<h1 className="text-center">Reports</h1>
			<div>
			<div>
					{reports && reports.status === 404 ? <div className="nnn" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{reports && reports.message} </div> :
						reports.map((locate, index) => (
								<div className="new" style={{ margin: "4rem" }} >
									<div key={locate.userId}>{locate.location}</div>
									<div >{locate.congestionTime}</div>
									<Link className="btn btn-info" to={`/warden/report/${locate._id}`}>view Details</Link>
								</div>
								
	 	))}
				</div>
				</div>
			</div>
	)
}
				