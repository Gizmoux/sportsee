import { USER_MAIN_DATA } from '../mock/mockData';

const Calories = () => {
	return (
		<div>
			{USER_MAIN_DATA.map((item, index) => {
				return (
					<div>
						<p>calorieCount {item.keyData.calorieCount}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Calories;
