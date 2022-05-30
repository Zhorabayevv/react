import * as axios from "axios";


const instance = axios.create({
	withCredentials: true ,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": "5bbede82-8c13-4497-885d-c1f641f2e82b"
	}
})

export const userApi = {
	getUsers(currentPage, pageSize) {
		return instance.get( `users?page=${currentPage}&count=${pageSize}`
		).then(response => {
					return response.data;
				});
	}
	
}

export const getUsers2 = (u) => {
	return instance.get(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`).then(response => {
				return response.data;
			});
}