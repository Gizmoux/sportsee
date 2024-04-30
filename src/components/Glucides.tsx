import { USER_MAIN_DATA } from '../mock/mockData';

const Glucides = () => {
	return (
		<div>
			{USER_MAIN_DATA.map((item, index) => {
				return (
					<div>
						<p>carbohydrateCount {item.keyData.carbohydrateCount}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Glucides;
