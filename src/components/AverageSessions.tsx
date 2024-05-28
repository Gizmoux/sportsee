import '../style/AverageSessions.css';
import { USER_AVERAGE_SESSIONS } from '../mock/mockData';
import { useParams } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const AverageSessions = () => {
	const { id } = useParams();

	const userData = USER_AVERAGE_SESSIONS.find(
		user => user.userId.toString() === id
	);

	const data = userData
		? userData.sessions.map(session => ({
				name: userData.days[session.day],
				average: session.sessionLength,
		  }))
		: [];
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

			<LineChart width={260} height={250} data={data}>
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
