import { USER_MAIN_DATA } from '../mock/mockData';
import calories from '../assets/calories.png';
import proteins from '../assets/protein.png';
import glucides from '../assets/carbs.png';
import lipides from '../assets/fat.png';
import { useParams } from 'react-router-dom';
import '../style/Nutrient.css';
const Nutrient = () => {
	const { id } = useParams();
	const userData = USER_MAIN_DATA.find(user => user.id.toString() === id);

	const calorieCount = userData ? userData.keyData.calorieCount : 0;
	const proteinCount = userData ? userData.keyData.proteinCount : 0;
	const carbohydrateCount = userData ? userData.keyData.carbohydrateCount : 0;
	const lipidCount = userData ? userData.keyData.lipidCount : 0;

	return (
		<div className="nutrient-container">
			{/* <h1>ID user{id}</h1> */}
			<div className="nutrient">
				<img src={calories} alt="Calories" />
				<div className="nutrient-para">
					<p>{calorieCount / 1000}kCal</p>
					<span>Calories</span>
				</div>
			</div>
			<div className="nutrient">
				<img src={proteins} alt="Protéines" />
				<div className="nutrient-para">
					<p>{proteinCount}g</p>
					<span>Protéines</span>
				</div>
			</div>
			<div className="nutrient">
				<img src={glucides} alt="Glucides" />
				<div className="nutrient-para">
					<p>{carbohydrateCount}g</p>
					<span>Glucides</span>
				</div>
			</div>
			<div className="nutrient">
				<img src={lipides} alt="Lipides" />
				<div className="nutrient-para">
					<p>{lipidCount}g</p>
					<span>Lipides</span>
				</div>
			</div>
		</div>
	);
};

export default Nutrient;
