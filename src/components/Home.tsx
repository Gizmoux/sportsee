import '../style/Home.css';
import { NavLink } from 'react-router-dom';
const Home = () => {
	return (
		<div>
			<h1>User</h1>
			<NavLink to="user/12">User 12 </NavLink>
			<NavLink to="user/12/activity">Activity 12 </NavLink>
			<NavLink to="user/18">User 18 </NavLink>
			<NavLink to="user/18/activity">Activity 18</NavLink>
		</div>
	);
};

export default Home;
