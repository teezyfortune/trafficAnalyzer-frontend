import {BACKEND_URL} from '../utils/links';

export const createUser = async (items) => {
	try {
		const url = BACKEND_URL
		const{ConfirmPassword, ...userData} = items
		const requestOption = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userData),
		}
		const result = await fetch(`${url}/auth/signup`, requestOption)
		const data = await result.json();
		// console.log('>>>>', data)
		return data;
	} catch (err) {
		return err;
	}
}