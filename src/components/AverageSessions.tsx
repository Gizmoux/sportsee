import '../style/AverageSessions.css';
// import { USER_AVERAGE_SESSIONS } from '../mock/mockData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { getUserAverageSession } from '../services/api';

const AverageSessions = () => {
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
	const { id } = useParams();
	const [averageSessionData, setAverageSessionData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUserAverageSession = async () => {
			try {
				const userData = await getUserAverageSession(id);
				console.log('userData.data', userData.data);
				console.log('userData.data.sessions', userData.data.sessions);
				console.log('userData.data.days', userData.data.days);

				// Formatage des données
				const formattedData = userData
					? userData.data.sessions.map(session => ({
							name: userData.data.days[session.day],
							average: session.sessionLength,
					  }))
					: [];
				console.log('formattedData');

				setAverageSessionData(formattedData);
			} catch (error) {
				setError(
					'Erreur lors de la récupération des sessions moyennes utilisateur'
				);
				console.error('Error fetching user average session data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchUserAverageSession();
	}, [id]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;
	const CustomizedTooltip: React.FC<CustomizedTooltipProps> = ({ payload }) => {
		if (!payload) return null;
		return (
			<div className="average-tooltip">
				{payload.map((category: any, idx: React.Key | null | undefined) => (
					<div key={idx}>
						<p>{category.value} min</p>
					</div>
				))}
				{/* <p>{payload.value} min</p> */}
			</div>
		);
	};
	return (
		<div className="average">
			<h4>Durée moyenne des sessions</h4>

			<LineChart width={260} height={250} data={averageSessionData}>
				{/* <CartesianGrid /> */}
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
					content={<CustomizedTooltip />}
				/>
				<Line
					type="monotone"
					dataKey="average"
					stroke="white"
					strokeWidth={2}
					dot={false}
				/>
			</LineChart>
		</div>
	);
};

export default AverageSessions;
