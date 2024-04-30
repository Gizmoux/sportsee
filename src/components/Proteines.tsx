import { USER_MAIN_DATA } from '../mock/mockData';

const Proteines = () => {
	return (
		<div>
			{USER_MAIN_DATA.map((item, index) => {
				return (
					<div>
						<p>proteinCount {item.keyData.proteinCount}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Proteines;
