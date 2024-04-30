import { USER_MAIN_DATA } from '../mock/mockData';

const Lipides = () => {
	return (
		<div>
			{USER_MAIN_DATA.map((item, index) => {
				return (
					<div>
						<p>lipidCount {item.keyData.lipidCount}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Lipides;
