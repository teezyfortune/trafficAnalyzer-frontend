import  { useState, useEffect } from 'react';
import { Positions } from './Positions';

export const  TestingPage = () => {
	const [data, getCoordinates]  = useState(null)
	const apiKey = 'pk.eyJ1IjoidGVlenlmb3J0dW5lIiwiYSI6ImNrY2R6Z25wdDAzZ2IycXBjNnh0dnIxYzcifQ.kLvLgmxazeZ-NVOta4eGVQ';
	const { latitude, longitude } = Positions()
	useEffect(() => {
		const getPlaces = async () => {
			const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${apiKey}`;
			const points = await fetch(url);
			const result = await points.json();
			const address = result.features[0].place_name;				
			getCoordinates(address)
		}
		getPlaces();
	},[latitude, longitude])
	return data
}
