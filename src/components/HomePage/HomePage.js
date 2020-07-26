import React, { useState, useEffect } from 'react';
import ReactMapGl,{Marker, Popup} from 'react-map-gl'
import 'dotenv/config';
import { fetchAllWardenReport } from '../../actions/report';
import './home.css';
import markerImage from './images/marker.png'
import * as moment from 'moment';

export const HomePage = () => {
	const [viewport, setViewPort] = useState({
		latitude: 6.465422,
		longitude:  3.406448,
		width: '100vw,',
		height:'100vh',
		zoom:10
	})
	const [coordinates, setPoint] = useState([]);
	const [selectedLocation, getSelectedLocation]=useState(null)
	useEffect(() => {
		const trafficReports = async () => {
			const point = await fetchAllWardenReport();
			setPoint(point);
		}
		trafficReports()
	}, [])
	return (
 		<div>
			<ReactMapGl
				{...viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
				mapStyle="mapbox://styles/teezyfortune/ckd06aq4k0q6z1inyyiv2pqkf"
				onViewportChange={viewport => {
					setViewPort(viewport)
				}}
			>
			{coordinates.status && coordinates.status === 404 ? <div className="nnn" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{coordinates.message && coordinates.message} </div> :
				coordinates.data && coordinates.data.map(coords => (
					<Marker key={coords._id} 
						longitude={coords.longitude}
						latitude={coords.latitude}
					> <button className="marker-btn" onClick={e => { e.preventDefault(); getSelectedLocation(coords) }}><img src={markerImage} alt="traffic-icon"></img></button>
					</Marker>
				))}
				{selectedLocation ? (<Popup longitude={selectedLocation.longitude} latitude={selectedLocation.latitude} onClose={() => getSelectedLocation(null)}><div className="report-popup"><h2>
					<div></div>{selectedLocation.location}</h2>
					<div className="display-text">
					<span>TrafficType: </span> {selectedLocation.trafficType} <br></br>
					<span>CongestionTime: </span>{selectedLocation.congestionTime}<br></br>
					<span>CongestionDetail: </span>{selectedLocation.congestionDetails}<br></br>
					<span>ReportedBy: </span>{selectedLocation.reportedBy}<br></br>
					<span>ReportedAt: </span>{moment(selectedLocation.createdAt).fromNow()}
					</div>
					</div>
				</Popup>) : null }
			</ReactMapGl>
		</div>
	)
}
