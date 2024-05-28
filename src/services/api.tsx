import axios from 'axios';
const API_URL = 'http://localhost:3000';
export const getUserById = userId => {
	return axios.get(`${API_URL}/user/${userId}`);
};
export const getUserActivityByuserId = userId => {
	return axios.get(`${API_URL}/user/${userId}/activity`);
};
export const getUserAverageSession = userId => {
	return axios.get(`${API_URL}/user/${userId}/average-sessions`);
};
export const getUserPerformance = userId => {
	return axios.get(`${API_URL}/user/${userId}/performance`);
};
