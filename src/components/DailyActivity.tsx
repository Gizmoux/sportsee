import '../style/DailyActivity.css';
import { USER_ACTIVITY } from '../mock/mockData';
import { useParams } from 'react-router-dom';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

const DailyActivity = () => {
	const { id } = useParams();

	// Trouver les données de l'utilisateur correspondant à l'ID
	const userData = USER_ACTIVITY.find(user => user.userId.toString() === id);

	// Formatage des données pour Recharts
	const data = userData
		? userData.sessions.map(session => ({
				name: session.day,
				kilograms: session.kilogram,
				calories: session.calories,
		  }))
		: [];

	return (
		<div className="daily">
			<h1>DAILY ACTIVITY</h1>
			<h1>Le user id est {id}</h1>
			<BarChart width={770} height={200} barCategoryGap={40} data={data}>
				<CartesianGrid strokeDasharray="2 2" vertical={false} />
				<XAxis dataKey="name" axisLine={false} tickSize={19} tickLine={false} />
				<YAxis
					orientation="right"
					axisLine={false}
					tickSize={30}
					tickLine={false}
				/>
				{/* <Legend /> */}
				<Tooltip offset={30} />
				<Bar
					dataKey="kilograms"
					fill="#282D30"
					name="Poids (kg)"
					minPointSize={3}
					maxBarSize={7}
					radius={[3, 3, 0, 0]}
				/>
				<Bar
					dataKey="calories"
					fill="#E60001"
					name="Calories brûlées (kCal)"
					radius={[3, 3, 0, 0]}
					maxBarSize={7}
				/>
			</BarChart>
		</div>
	);
};

export default DailyActivity;
