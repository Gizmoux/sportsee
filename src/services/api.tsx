import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getUserById = async (id: number) => {
	try {
		const response = await axios.get(`${API_URL}/user/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error to fetch userID', error);
		throw error;
	}
};

export const getUserActivityById = async (id: number) => {
	try {
		const response = await axios.get(`${API_URL}/user/${id}/activity`);
		return response.data;
	} catch (error) {
		console.error('Error to fetch ActivityID', error);
		throw error;
	}
};

export const getUserAverageSession = async (id: number) => {
	try {
		const response = await axios.get(`${API_URL}/user/${id}/average-sessions`);
		return response.data;
	} catch (error) {
		console.error('Error to fetch SessionID', error);
		throw error;
	}
};

export const getUserPerformance = async (id: number) => {
	try {
		const response = await axios.get(`${API_URL}/user/${id}/performance`);
		// console.log('response.data dans API', response.data);

		return response.data;
	} catch (error) {
		console.error('Error to fetch PerformanceID', error);
		throw error;
	}
};
