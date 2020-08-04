import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FetchAllWarden } from '../../../../actions/authentication';
import './viewAllWarden.css';

const ViewAllWarden = () => {
    const history = useHistory()
	const user = JSON.parse(localStorage.getItem('adminOrWarden'));
	// console.log('>>>>>', user.userType)
	if ( user.userType!== 'admin') {
		history.push('/');
	}
	const [warden, fetchWarden] = useState([]);

	useEffect(() => {
		const fetAllWardens = async () => {
			try {
				const wardens = await FetchAllWarden();
				fetchWarden(wardens);
			} catch (err) {
				return err
			}
		}
		fetAllWardens();
	},	[])
    return (
        <div className="main-container">
                    {warden && warden.status === 404 ? <div className="nnn" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{warden && warden.message} </div> :
                warden.data && warden.data.map((locate, index) => (
                    <Link to={`/singleWarden/${locate._id}`}>
                        <div className="cards">
                        <p key = {locate._id}>
                        <span>Name: {locate.fullName}</span>
                        <span>Location:{locate.city}</span>
                        <span>Email:{locate.email}</span>
                        </p>
                </div>

                    </Link>
                    ))}
        </div>
    )
}

export default ViewAllWarden;
