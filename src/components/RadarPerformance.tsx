import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
} from 'recharts';
import { useParams } from 'react-router-dom';
import { USER_PERFORMANCE } from '../mock/mockData';
import '../style/RadarPerformance.css';
const RadarPerformance = () => {
	const { id } = useParams();
	const userData = USER_PERFORMANCE.find(user => user.userId.toString() === id);
	// Transformer les données de userData pour les adapter au format attendu par RadarChart
	const data = userData
		? userData.data.map(item => ({
				subject: userData.kind[item.kind],
				value: item.value,
		  }))
		: [];
	// Add use Effect ici
	// useEffect(() => {
	// 	const fetchUser = async () => {
	// 		try {
	// 			const userData = await getUserById(id);
	// 			setUser(userData.data);
	// 			console.log('userData', userData.data);
	// 		} catch (error) {
	// 			setError('Utilisateur inconnu');
	// 			console.error('Error fetching user data:', error);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};

	// 	fetchUser();
	// }, [id]);
	return (
		<div className="radar-container">
			{/* <h1>RadarID {id}</h1> */}
			<RadarChart
				innerRadius="0"
				outerRadius="50%"
				width={260}
				height={250}
				data={data}
			>
				<PolarGrid gridType="polygon" radialLines={false} />
				<PolarAngleAxis
					dataKey="subject"
					stroke="white"
					tickLine={false}
					dy={4}
					tickSize={15}
				/>

				<Radar
					name={`ID ${id}`}
					dataKey="value"
					stroke="#FF0101B2"
					fill="#FF0101B2"
					fillOpacity={0.7}
				/>

				{/* <Legend /> */}
			</RadarChart>
		</div>
	);
};

export default RadarPerformance;
