//!MOCK DES DONNEES
// import '../style/User.css';
// import { useParams } from 'react-router-dom';
// import { USER_MAIN_DATA } from '../mock/mockData';
// const User = () => {
// 	const { id } = useParams();
// 	const user = USER_MAIN_DATA.find(user => user.id.toString() === id);
// 	return (
// 		<div className="user-container">
// 			<div>
// 				<h1>
// 					Bonjour{' '}
// 					<span className="user-name-span">
// 						{user ? user.userInfos.firstName : 'Utilisateur inconnu'}
// 					</span>
// 				</h1>

// 				<h2>Félicitations ! Vous avez explosé vos objectifs hier </h2>
// 			</div>
// 		</div>
// 	);
// };

// export default User;
import '../style/User.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserById } from '../services/api';

const User = () => {
	const { id } = useParams();
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await getUserById(id);
				setUser(userData.data);
				console.log('userData', userData.data);
			} catch (error) {
				setError('Utilisateur inconnu');
				console.error('Error fetching user data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, [id]);

	if (loading) {
		return <div>Chargement...</div>;
	}

	return (
		<div className="user-container">
			<div>
				<h1>
					Bonjour{' '}
					<span className="user-name-span">
						{user ? user.userInfos.firstName : error}
					</span>
				</h1>
				<h2>
					Félicitations ! Vous avez explosé vos objectifs hier DONNEES API
				</h2>
			</div>
		</div>
	);
};

export default User;
