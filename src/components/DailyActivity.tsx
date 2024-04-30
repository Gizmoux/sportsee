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
			<BarChart width={800} height={400} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="kilograms" fill="#282D30" name="Kilograms" />
				<Bar dataKey="calories" fill="#E60001" name="Calories" />
			</BarChart>
		</div>
	);
};

export default DailyActivity;
