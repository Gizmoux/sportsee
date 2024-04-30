import '../style/User.css';

import { useParams } from 'react-router-dom';
import { USER_MAIN_DATA } from '../mock/mockData';
const User = () => {
	const { id } = useParams();
	const user = USER_MAIN_DATA.find(user => user.id.toString() === id);
	return (
		<div className="user-container">
			<div>
				<h1>
					The user name is :
					{user ? user.userInfos.firstName : 'Utilisateur inconnu'}
				</h1>

				<h2>Félicitations ! Vous avez explosé vos objectifs hier </h2>
			</div>
		</div>
	);
};

export default User;
