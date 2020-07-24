import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { FetchOneWarden } from '../../../actions/authentication';


export const WardenDetails = () => {
	const match  = useParams();
	// console.log('>>>>match', match.wardenId)
	const { wardenId } = match
	console.log('>>>>>>>>',wardenId )
	const [warden, findOneWarden] = useState({});
	const [error, setError] = useState(false);
	const [alertMessage, setMessage] = useState('');


	useEffect(() => {
		const findUser = async () => {
			try {
				const result = await FetchOneWarden(wardenId);
				const {message} = result
				// console.log('>>>>its show here', data.location )
				findOneWarden(result);
				setMessage(message)
			} catch (err) {
				setError(err)
			}
		}
		findUser();
	}, [wardenId]);
	const { data } = warden
	return (
		<div>
			{error ? <div>{alertMessage}</div>: ''}
			<h3 className="text-center">Warden Details</h3>
			<ul>
			<li className="list" style={{listStyle: 'none'}}><strong>Full Name</strong> : {data && data.fullName}</li>
				<li className="list" style={{listStyle: 'none'}}><strong>Phone Number</strong> : {data && data.phone}</li>
				<li className="list" style={{listStyle: 'none'}}><strong>Email</strong> : {data && data.email}</li>
			<li className="list" style={{ listStyle: 'none' }}><strong>Country</strong> : {data && data.country}</li>
			<li className="list" style={{listStyle: 'none'}}><strong>City</strong> : {data && data.city}</li>
				<li className="list" style={{listStyle: 'none'}}><strong>Gender</strong> : {data && data.Gender}</li>

			</ul>
			</div>
	)
}
