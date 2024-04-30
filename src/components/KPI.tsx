import '../style/Kpi.css';
import {
	RadialBarChart,
	RadialBar,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { useParams } from 'react-router-dom';
import { USER_MAIN_DATA } from '../mock/mockData';
const KPI = () => {
	const { id } = useParams();

	const userData = USER_MAIN_DATA.find(user => user.id.toString() === id);
	let data = [];
	let scoreKey = 'todayScore';
	if (userData) {
		data = [{ todayScore: userData.todayScore }];
		scoreKey = 'todayScore' in userData ? 'todayScore' : 'score';
	}
	return (
		<div className="kpi">
			<h1>SCORE{id}</h1>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					innerRadius="90%"
					outerRadius="100%"
					startAngle={180}
					endAngle={90}
					barSize={10}
					data={data}
				>
					<RadialBar
						label={{ position: 'insideStart', fill: '#fff' }}
						dataKey={scoreKey}
						cornerRadius={10}
					/>
					<Legend iconSize={10} layout="vertical" verticalAlign="middle" />
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default KPI;
