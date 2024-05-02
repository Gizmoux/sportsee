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
