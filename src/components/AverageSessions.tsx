import '../style/AverageSessions.css';
import { USER_AVERAGE_SESSIONS } from '../mock/mockData';
import { useParams } from 'react-router-dom';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from 'recharts';

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

	return (
		<div className="average">
			<h1>Le user ID est {id}</h1>

			<LineChart width={258} height={200} data={data}>
				<CartesianGrid />
				<XAxis
					dataKey="name"
					axisLine={false}
					tick={{ fill: 'white' }}
					tickLine={false}
					hide={false}
				/>

				<YAxis domain={['dataMin - 20', 'dataMax + 45']} hide={true} />
				<Tooltip
					offset={30}
					cursor={{ stroke: '#dfdfdf', strokeWidth: 2 }}
					allowEscapeViewBox={{ x: true, y: true }}
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
