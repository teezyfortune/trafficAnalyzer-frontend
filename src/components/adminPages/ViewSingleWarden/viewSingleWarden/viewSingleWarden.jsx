import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { FetchOneWarden } from '../../../../actions/authentication';
import * as moment from 'moment';

import './viewSingleWarden.css';

const ViewSingleWarden = () => {
    const match = useParams();
    const {userId} = match
	const [warden, fetWarden] = useState({});
	useEffect(() => {
		const findUser = async () => {
			try {
				const result = await FetchOneWarden(userId);
				// console.log('>>>>its show here', data.location )
				fetWarden(result);
            } catch (err) {
                return err			}
		}
		findUser();
	}, [userId]);
    const { data } = warden
    return (
        <div className="single-container">
        
            <div className="single-cards">
                <div>        <h3 className="text-center">Warden Information</h3>
                </div>
                <p>
                    <span>FullName: {data && data.fullName}</span>
                    <span>Email: {data && data.email}</span>
                    <span>Phone: {data &&data.phone}</span>
                    <span>City: {data && data.city}</span>
                    <span>Country: {data && data.country}</span>
                    <span>Gender: {data && data.Gender}</span>
                    <span>createdAt: {moment(data && data.createdAt).fromNow()}</span>

                </p>
            </div>
        </div>
    )
}

export default ViewSingleWarden;
