import { useEffect, useState } from 'react';
export const Positions = () => {
	const [positions, setPosition] = useState({})
	const [setErrors, alertMessage] = useState()

	useEffect(() => {
		const geo = navigator.geolocation;
		if (!geo) {
			alertMessage('Geolocation is not supported');
			return;
		}

		const getPosition = ({ coords }) => {
			setPosition({
				latitude: coords.latitude,
				longitude: coords.longitude
			})
		};

		const onError = (error) => {
				alertMessage(error.message)
		}
		const position = geo.getCurrentPosition(getPosition, onError)
			return position
	}, [])
	return {...positions, setErrors}
}
