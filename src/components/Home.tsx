import '../style/Home.css';
import { NavLink } from 'react-router-dom';
const Home = () => {
	return (
		<div>
			<button className="navlink-button">
				<NavLink to="http://localhost:5173/user/12/activity">Karl</NavLink>
			</button>
			<button className="navlink-button">
				<NavLink to="http://localhost:5173/user/18/activity">Cecilia</NavLink>
			</button>
		</div>
	);
};

export default Home;
