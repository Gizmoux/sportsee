import '../style/DailyActivity.css';
import { useEffect, useState } from 'react';
import { getUserActivityById } from '../services/api';
// import { USER_ACTIVITY } from '../mock/mockData';
import { useParams } from 'react-router-dom';
import User from './User';
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
	// const { id } = useParams();

	// Trouver les données de l'utilisateur correspondant à l'ID
	// const userData = USER_ACTIVITY.find(user => user.userId.toString() === id);

	// Formatage des données pour Recharts
	// const data = userData
	// 	? userData.sessions.map(session => ({
	// 			name: session.day,
	// 			kilograms: session.kilogram,
	// 			calories: session.calories,
	// 	  }))
	// 	: [];

	const { id } = useParams();
	const [activityData, setActivityData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUserActivity = async () => {
			try {
				const userData = await getUserActivityById(id);
				// console.log('userData dans DailyActivity', userData.data.sessions);

				// Formatage des données pour Recharts
				const formattedData = userData
					? userData.data.sessions.map(session => ({
							name: session.day,
							kilograms: session.kilogram,
							calories: session.calories,
					  }))
					: [];

				setActivityData(formattedData);
			} catch (error) {
				setError('Erreur lors de la récupération des activités utilisateur');
				console.error('Error fetching user activity data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchUserActivity();
	}, [id]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	/**
	 * Custom tooltip component to display weight and calories on hover.
	 * @param {CustomizedTooltipProps} props - The tooltip props object.
	 * @returns {JSX.Element} - The JSX element representing the custom tooltip.
	 */
	const CustomizedTooltip: React.FC<CustomizedTooltipProps> = ({ payload }) => {
		if (payload && payload.length) {
			return (
				<div className="daily-tooltip">
					<p>{payload[0].value}kg</p>
					<p>{payload[1].value}Kcal</p>
				</div>
			);
		}
		return null;
	};
	return (
		<div className="daily">
			<User />
			<div className="title-legend">
				<h2>Activité quotidienne</h2>
				<div className="legend">
					<div className="black-point"></div>
					<span>Poids(kg)</span>
					<div className="red-point"></div>
					<span>Calories brûlées(kCal)</span>
				</div>
			</div>
			{/* <h1>Le user id est {id}</h1> */}
			<BarChart
				width={770}
				height={200}
				barCategoryGap={40}
				data={activityData}
			>
				<CartesianGrid strokeDasharray="2 2" vertical={false} />
				<XAxis dataKey="name" axisLine={false} tickSize={19} tickLine={false} />
				<YAxis
					orientation="right"
					axisLine={false}
					tickSize={30}
					tickLine={false}
				/>
				{/* <Legend /> */}
				<Tooltip
					cursor={{ stroke: '#dfdfdf', strokeWidth: 2 }}
					allowEscapeViewBox={{ x: true, y: true }}
					content={<CustomizedTooltip />}
				/>
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
