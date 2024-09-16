import '../style/User.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserById } from '../services/api';
interface User {
	userInfos: {
		firstName: string;
	};
}
const User = () => {
	const { id } = useParams();
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await getUserById(Number(id));
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
				<h2>Félicitations ! Vous avez explosé vos objectifs hier</h2>
			</div>
		</div>
	);
};

export default User;
