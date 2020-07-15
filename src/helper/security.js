import jwtDecode from 'jwt-decode';


export const  decodeToken = async (token) => {
	try {
		const decoded = await jwtDecode(token);
		return decoded;
	} catch (err) {
		return err
}
}

export const authHeader = () => {
	// return authorization header with jwt token
	let user = JSON.parse(localStorage.getItem('user'));

	if (user && user.jwtToken) {
			return { 'Authorization': 'Bearer ' + user.jwtToken };
	} else {
			return {};
	}
}