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
	Legend,
} from 'recharts';

const AverageSessions = () => {
	const { id } = useParams();

	const userData = USER_AVERAGE_SESSIONS.find(
		user => user.userId.toString() === id
	);

	const data = userData
		? userData.sessions.map(session => ({
				name: session.day,
				average: session.sessionLength,
		  }))
		: [];

	return (
		<div className="average">
			<h1>Le user ID est {id}</h1>
			<LineChart width={258} height={263} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />

				<Line type="monotone" dataKey="average" stroke="#82ca9d" />
			</LineChart>
		</div>
	);
};

export default AverageSessions;
