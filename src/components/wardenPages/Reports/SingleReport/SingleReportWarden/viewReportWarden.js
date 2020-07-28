import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getOneWardenReport } from '../../../../../actions/report';
import* as moment from 'moment';
import './viewReportWarden.css';

export const ViewReportWarden = () => {
	const match  = useParams();
	// console.log('>>>>match', match.reportId)
	const {reportId} =  match
	const [report, fetOneReport] = useState({});
	const [error, setError] = useState(false);
	const [alertMessage, setMessage] = useState('');


	useEffect(() => {
		const findUser = async () => {
			try {
				const result = await getOneWardenReport(reportId);
				const {message} = result
				// console.log('>>>>its show here', data.location )
				fetOneReport(result);
				setMessage(message)
			} catch (err) {
				setError(err)
			}
		}
		findUser();
	}, [reportId]);
	const { data } = report

	return (
		<div>
			{error ? <div>{alertMessage}</div>: ''}
			<h3 className="text-center">Report Details</h3>
			<ul><li className="list" style={{listStyle: 'none'}}><strong>location</strong> : {data && data.location}</li>
			<li className="list" style={{listStyle: 'none'}}><strong>Congestion Time</strong> : {data && data.congestionTime}</li>
				<li className="list" style={{listStyle: 'none'}}><strong>Traffic Type</strong> : {data && data.trafficType}</li>
				<li className="list" style={{listStyle: 'none'}}><strong>Longitude</strong> : {data && data.longitude}</li>
				<li className="list" style={{listStyle: 'none'}}><strong>Latitude</strong> : {data && data.latitude}</li>
				<li className="list" style={{listStyle: 'none'}}><strong>congestion Details</strong> : {data && data.congestionDetails}</li>
				<li className="list" style={{ listStyle: 'none' }}><strong>Reported By</strong> : {data && data.reportedBy}</li>
				<li className="list" style={{listStyle: 'none'}}><strong>Reported At</strong> : {moment(data && data.createdAt).fromNow()}</li>

			</ul>
			</div>
	)
}
