import {BACKEND_URL} from '../utils/links'
import 'dotenv/config';

export const sendReports = async (items) => {
	try {
		const url = BACKEND_URL
		const token = localStorage.getItem('token')
		const reqOption = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				Authorization: token.split('"').join('')
			},
			body: JSON.stringify(items)
		}

		const result = await fetch(`${url}/report/report-traffic`, reqOption)
		return await result.json()
	} catch (err) {
		return err
	}
}

export const getAllReports = async () => {
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
		const result = await fetch(`${url}/admin/findAll`, reqOption)
		return await result.json()
	} catch (err) {
		return err
	}
}


export const getOneReport = async (id) => {
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
		const result = await fetch(`${url}/admin/${id}/find-report`, reqOption)
		const report = await result.json();
		return report
	} catch (err) {
		return err
	}
}

