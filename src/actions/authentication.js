import { BACKEND_URL } from '../utils/links';
import { authHeader } from '../helper/security';

export const createUser = async (items) => {
	try {
		const url = BACKEND_URL
		const{ConfirmPassword, ...userData} = items
		const requestOption = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json',  },
			body: JSON.stringify(userData),
		}
				console.log('>>>>', requestOption.body)

		const result = await fetch(`${url}/auth/signup`, requestOption)
		const data = await result.json();
		// console.log('>>>>', data)
		return data;
	} catch (err) {
		return err;
	}
}
const data = localStorage.getItem('adminOrWarden');
const {jwtToken: token } = data

const headers = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${token}`

 }
export const addWarden = async (items) => {
	try {
		const url = BACKEND_URL
		const{ConfirmPassword, ...userData} = items
		const requestOption = {
			method: 'POST',
			headers,
			body: JSON.stringify(userData),
		}
				console.log('>>>>', requestOption.body)

		const result = await fetch(`${url}/admin/add-TrafficWarden`, requestOption)
		const data = await result.json();
		// console.log('>>>>', data)
		return data;
	} catch (err) {
		return err;
	}
}

export const loginUser = async (items) => {
	try {
		const { email, password } = items;
		const body = {username: email, password}
		const url = BACKEND_URL
		const requestOption = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		}
		const result = await fetch(`${url}/auth/login`, requestOption)
		const data = await result.json();
		// console.log('>>>>', data)
		return data;
	} catch (err) {
		return err;
	}
}