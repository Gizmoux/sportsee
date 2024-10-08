import axios from 'axios';
import {
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_PERFORMANCE,
} from '../mock/mockData';

const API_URL = 'http://localhost:3000';
const USE_MOCK_DATA = import.meta.env.VITE_MOCK_DATA === 'true';

// Récupérer l'id du User
export const getUserById = async (id: number) => {
	try {
		const response = await axios.get(`${API_URL}/user/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error to fetch userID', error);
		throw error;
	}
};

// Afficher des données mockées ou non de l'activité de l'utilisateur
export const getUserActivityById = async (id: number) => {
	console.log('USE_MOCK_DATA:', USE_MOCK_DATA);
	if (USE_MOCK_DATA) {
		console.log("Utilisation des données mockées pour l'activité");
		return getMockUserActivity(id);
	}

	try {
		const response = await axios.get(`${API_URL}/user/${id}/activity`);
		return response.data;
	} catch (error) {
		console.error('Error fetch api -> Mock datas', error);
		return getMockUserActivity(id);
	}
};

const getMockUserActivity = (id: number) => {
	const userData = USER_ACTIVITY.find(user => user.userId === Number(id));
	if (!userData) {
		throw new Error(`No mock data for this ID: ${id}`);
	}

	return { data: { sessions: userData.sessions } };
};

// Afficher les durées moyennes des sessions
export const getUserAverageSession = async (id: number) => {
	if (USE_MOCK_DATA) {
		console.log("Utilisation des données mockées pour l'average session");
		return getMockUserAverageSession(id);
	}

	try {
		const response = await axios.get(`${API_URL}/user/${id}/average-sessions`);
		return response.data;
	} catch (error) {
		console.error('Error fetch api -> Mock datas', error);
		return getMockUserAverageSession(id);
	}
};

const getMockUserAverageSession = (id: number) => {
	const userData = USER_AVERAGE_SESSIONS.find(
		user => user.userId === Number(id)
	);
	if (!userData) {
		throw new Error(`No mock data for user ID: ${id}`);
	}
	return {
		data: {
			userId: userData.userId,
			sessions: userData.sessions,
			days: userData.days,
		},
	};
};

// Afficher le radar Performance avec données mockées / API
export const getUserPerformance = async (id: number) => {
	if (USE_MOCK_DATA) {
		console.log('Utilisation des données mockées pour les performances');
		return getMockUserPerformance(id);
	}

	try {
		const response = await axios.get(`${API_URL}/user/${id}/performance`);
		return response.data;
	} catch (error) {
		console.error('Error fetch api -> Mock datas', error);
		return getMockUserPerformance(id);
	}
};

const getMockUserPerformance = (id: number) => {
	const userData = USER_PERFORMANCE.find(user => user.userId === Number(id));
	if (!userData) {
		throw new Error(`No mock data for user ID: ${id}`);
	}
	return {
		data: {
			userId: userData.userId,
			kind: userData.kind,
			data: userData.data,
		},
	};
};
