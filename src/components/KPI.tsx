/* eslint-disable react-refresh/only-export-components */
import '../style/Kpi.css';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router-dom';
import { USER_MAIN_DATA } from '../mock/mockData';
interface DataItem {
	value: number;
}

const KPI = () => {
	const { id } = useParams();

	const userData = USER_MAIN_DATA.find(user => user.id.toString() === id);
	let data: DataItem[] = [];

	if (userData) {
		data =
			'todayScore' in userData
				? [{ value: userData.todayScore as number }]
				: [{ value: userData.score as number }];
	}

	return (
		<div className="kpi">
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					innerRadius="65%"
					outerRadius="75%"
					startAngle={200}
					endAngle={90}
					barSize={10}
					data={data}
				>
					<text textAnchor="middle" style={{ fontFamily: 'Roboto' }}>
						<tspan x="50%" y="46%" fontSize={22}>
							{`${data[0].value * 100}%`}
						</tspan>
						<tspan x="50%" y="53%" fill={'#74798c'}>
							de votre
						</tspan>
						<tspan x="50%" y="60%" fill={'#74798c'}>
							objectif
						</tspan>
					</text>
					<RadialBar style={{ fill: 'red' }} dataKey="value" cornerRadius={5} />
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
};
export default KPI;
