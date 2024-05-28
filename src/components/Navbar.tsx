import '../style/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Navbar = () => {
	return (
		<div className="navbar">
			<ul className="navbar-items">
				<img src={logo} alt="logo SportSee" className="logo" />
				<Link to={'/'} className="link">
					Accueil
				</Link>
				<Link to={'/profil'} className="link">
					Profil
				</Link>
				<Link to={'/'} className="link">
					Réglage
				</Link>
				<Link to={'/'} className="link">
					Communauté
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
