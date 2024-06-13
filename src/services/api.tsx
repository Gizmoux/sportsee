import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getUserById = async (id: number) => {
	try {
		const response = await axios.get(`${API_URL}/user/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching user by ID:', error);
		throw error;
	}
};

export const getUserActivityById = async (id: number) => {
	try {
		const response = await axios.get(`${API_URL}/user/${id}/activity`);
		return response.data;
	} catch (error) {
		console.error('Error fetching user activity by ID:', error);
		throw error;
	}
};

export const getUserAverageSession = async (id: number) => {
	try {
		const response = await axios.get(`${API_URL}/user/${id}/average-sessions`);
		return response.data;
	} catch (error) {
		console.error('Error fetching user average session by ID:', error);
		throw error;
	}
};

export const getUserPerformance = async (id: number) => {
	try {
		const response = await axios.get(`${API_URL}/user/${id}/performance`);
		// console.log('response.data dans API', response.data);

		return response.data;
	} catch (error) {
		console.error('Error fetching user performance by ID:', error);
		throw error;
	}
};
