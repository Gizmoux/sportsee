import { USER_MAIN_DATA } from '../mock/mockData';
import calories from '../assets/calories.png';
import proteins from '../assets/protein.png';
import glucides from '../assets/carbs.png';
import lipides from '../assets/fat.png';
import { useParams } from 'react-router-dom';
const Nutrient = () => {
	const { id } = useParams();
	const userData = USER_MAIN_DATA.find(user => user.id.toString() === id);

	const calorieCount = userData ? userData.keyData.calorieCount : 0;
	const proteinCount = userData ? userData.keyData.proteinCount : 0;
	const carbohydrateCount = userData ? userData.keyData.carbohydrateCount : 0;
	const lipidCount = userData ? userData.keyData.lipidCount : 0;

	return (
		<div>
			<h1>ID user{id}</h1>
			<img src={calories} alt="Calories" />
			<div>Calories: {calorieCount}</div>
			<img src={proteins} alt="Protéines" />
			<div>Protéines Count: {proteinCount}</div>
			<img src={glucides} alt="Glucides" />
			<div>Glucides: {carbohydrateCount}</div>
			<img src={lipides} alt="Lipides" />
			<div>Lipides: {lipidCount}</div>
		</div>
	);
};

export default Nutrient;
