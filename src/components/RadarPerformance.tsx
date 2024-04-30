import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
} from 'recharts';
import { useParams } from 'react-router-dom';
import { USER_PERFORMANCE } from '../mock/mockData';

const RadarPerformance = () => {
	const { id } = useParams();
	const userData = USER_PERFORMANCE.find(user => user.userId.toString() === id);
	// Transformer les données de userData pour les adapter au format attendu par RadarChart
	const data = userData
		? userData.data.map(item => ({
				subject: userData.kind[item.kind],
				value: item.value,
		  }))
		: [];
	return (
		<div>
			<h1>RadarID {id}</h1>
			<RadarChart outerRadius={90} width={380} height={250} data={data}>
				<PolarGrid
					gridType="polygon"
					radialLines={false}
					polarRadius={[0, 10, 30, 50, 70, 90]}
				/>
				<PolarAngleAxis dataKey="subject" />

				<Radar
					name={`ID ${id}`}
					dataKey="value"
					stroke="#8884d8"
					fill="#8884d8"
					fillOpacity={0.7}
				/>

				<Legend />
			</RadarChart>
		</div>
	);
};

export default RadarPerformance;
