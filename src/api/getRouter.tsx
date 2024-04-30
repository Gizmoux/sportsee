import axios from 'axios';

async function fetchUserData(userId: number): Promise<any> {
	try {
		const response = await axios.get(`http://localhost:3000/user/${userId}`);
		return response.data;
	} catch (error) {
		// Gérer les erreurs ici
		console.error(
			"Une erreur s'est produite lors de la récupération des données utilisateur :",
			error
		);
		throw error; // Vous pouvez choisir de relancer l'erreur ou la gérer différemment
	}
}

// Utilisation de la fonction fetchUserData
const userId = 12;
fetchUserData(userId)
	.then(userData => {
		console.log('Données utilisateur:', userData);
	})
	.catch(err => {
		console.error('Erreur:', err);
	});
