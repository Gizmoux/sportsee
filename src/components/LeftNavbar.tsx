import '../style/LeftNavbar.css';
import icon from '../assets/icon.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
const LeftNavbar = () => {
	return (
		<div className="leftNavbar-container">
			<div className="left-menu">
				<img src={icon} alt="Icone" />
				<img src={icon1} alt="Icone 1" />
				<img src={icon2} alt="Icone 2" />
				<img src={icon3} alt="Icone 3" />
			</div>
			<div className="copyright">Copyright, SportSee 2024</div>
		</div>
	);
};

export default LeftNavbar;
