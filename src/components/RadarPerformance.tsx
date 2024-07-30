import { useState, useEffect } from 'react';
import { getUserPerformance } from '../services/api';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { useParams } from 'react-router-dom';
// import { USER_PERFORMANCE } from '../mock/mockData';
import '../style/RadarPerformance.css';
const RadarPerformance = () => {
	const { id } = useParams();
	const [performanceData, setPerformanceData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUserPerformance = async () => {
			try {
				const userData = await getUserPerformance(id);

				const radarData = userData
					? userData.data.data.map(item => ({
							subject: userData.data.kind[item.kind],
							value: item.value,
							// eslint-disable-next-line
					  }))
					: [];

				// console.log('radarData', radarData);
				setPerformanceData(radarData);
			} catch (error) {
				// setError('Erreur lors de la récupération des performances utilisateur');
				console.error('Error fetching user performance data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchUserPerformance();
	}, [id]);

	if (loading) {
		return <div>Chargement...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}
	return (
		<div className="radar-container">
			{/* <h1>RadarID {id}</h1> */}

			<RadarChart
				innerRadius="10"
				outerRadius="60%"
				width={280}
				height={250}
				data={performanceData}
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

// En dessous de const radarPerf..
// const { id } = useParams();
// const userData = USER_PERFORMANCE.find(user => user.userId.toString() === id);
// // Transformer les données de userData pour les adapter au format attendu par RadarChart
// const data = userData
// 	? userData.data.map(item => ({
// 			subject: userData.kind[item.kind],
// 			value: item.value,
// 	  }))
// 	: [];
