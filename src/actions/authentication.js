import axios from 'axios';
import { BACKEND_URL } from '../utils/links';

export const createUser = async (items) => {
	try {
		const url = BACKEND_URL
		const{ConfirmPassword, ...userData} = items
		const requestOption = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json',  },
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
        

export const addWarden = async (items) => {
	try {
		const token = localStorage.getItem('token')
		const url = BACKEND_URL
		const{ConfirmPassword, ...userData} = items
	const requestOption = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			Authorization: token.split('"').join('')
		},
			body: JSON.stringify(userData),
		}
		const result = await fetch(`${url}/admin/add-TrafficWarden`, requestOption)
		const data = await result.json();
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
		return data;
	} catch (err) {
		// console.log('>>>>', err)
		return err;
	}
}


export const FetchAllWarden = async () => {
	try {
		const url = BACKEND_URL
		const token = localStorage.getItem('token')
		const reqOption = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token.split('"').join('')
			},
		}
		const result = await fetch(`${url}/admin/find-allWardens`, reqOption)
		const report = await result.json();
		return report
	} catch (err) {
		return err
	}
}


export const FetchOneWarden = async (id) => {
	try {
		const url = BACKEND_URL
		const token = localStorage.getItem('token')
		const reqOption = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token.split('"').join('')
			},
		}
		const result = await fetch(`${url}/admin/${id}/find-warden`, reqOption)
		const report = await result.json();
		return report
	} catch (err) {
		return err
	}
}
export const SignOut = () => {
	localStorage.removeItem('adminOrWarden');
	axios.get(`${BACKEND_URL}/auth/logout`);
};
