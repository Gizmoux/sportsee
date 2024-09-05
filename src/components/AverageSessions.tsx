/* eslint-disable no-mixed-spaces-and-tabs */
import '../style/AverageSessions.css';
// import { USER_AVERAGE_SESSIONS } from '../mock/mockData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Scatter } from 'recharts';
import { getUserAverageSession } from '../services/api';
interface CustomizedTooltipProps {
	active?: boolean;
	payload: { value: number }[];
}
interface UserAverageSessionData {
	data: {
		sessions: { day: number; sessionLength: number }[];
		days: string[];
	};
}
interface FormattedSessionData {
	name: string;
	average: number;
}
const AverageSessions = () => {
	const { id } = useParams();
	const [averageSessionData, setAverageSessionData] = useState<
		FormattedSessionData[]
	>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchUserAverageSession = async () => {
			try {
				const userData: UserAverageSessionData = await getUserAverageSession(
					id
				);
				console.log('Received userData:', userData);
				// Formatage des données
				const formattedData = userData
					? userData?.data.sessions.map(session => ({
							name: userData.data.days[session.day],
							average: session.sessionLength,
					  }))
					: [];
				// console.log('formattedData');

				setAverageSessionData(formattedData);
			} catch (error) {
				setError('fetch error');
				console.error('fetch error', error);
			} finally {
				setLoading(false);
			}
		};

		fetchUserAverageSession();
	}, [id]);

	if (loading) return <div>Chargement...</div>;
	if (error) return <div>{error}</div>;

	const CustomizedTooltip = ({ active, payload }: CustomizedTooltipProps) => {
		if (!active || !payload || payload.length === 0) return null;

		return (
			<div className="average-tooltip">
				<p>{payload[0].value} min</p>
			</div>
		);
	};
	return (
		<div className="average">
			<h4>Durée moyenne des sessions</h4>

			<LineChart width={260} height={200} data={averageSessionData}>
				<XAxis
					dataKey="name"
					axisLine={false}
					tickLine={false}
					tick={{ fill: 'white' }}
				/>
				<YAxis domain={['dataMin - 20', 'dataMax + 45']} hide={true} />
				<Tooltip
					offset={30}
					cursor={{ stroke: '#dfdfdf', strokeWidth: 0 }}
					content={<CustomizedTooltip payload={[]} />}
				/>
				<Line
					type="monotone"
					dataKey="average"
					stroke="white"
					strokeWidth={2}
					dot={false}
				/>
				<Scatter dataKey="average" fill="black" />
			</LineChart>
		</div>
	);
};

export default AverageSessions;

// Juste en dessous de const Average
// const { id } = useParams();
// const userData = USER_AVERAGE_SESSIONS.find(
// 	user => user.userId.toString() === id
// );
// const data = userData
// 	? userData.sessions.map(session => ({
// 			name: userData.days[session.day],
// 			average: session.sessionLength,
// 	  }))
// 	: [];

// const CustomizedTooltip = ({ payload }: CustomizedTooltipProps) => {
// 	if (!payload) return null;
// 	// console.log(payload);
// 	return (
// 		<div className="average-tooltip">
// 			{payload.map((elem, idx) => (
// 				<div key={idx}>
// 					<p>{elem.value} min</p>
// 				</div>
// 			))}
// 		</div>
// 	);
// };
