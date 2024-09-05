import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
import Navbar from './components/Navbar';
import LeftNavbar from '../src/components/LeftNavbar';
import DailyActivity from './components/DailyActivity';
import './style/App.css';
import AverageSessions from './components/AverageSessions';
import RadarPerformance from './components/RadarPerformance';
import KPI from './components/KPI';
import Nutrient from './components/Nutrient';
import User from './components/User';
import Home from './components/Home';

function App() {
	return (
		<Router>
			<div className="app-container">
				<Navbar />

				<div className="content">
					<LeftNavbar />
					<div className="main-content">
						<Routes>
							<Route path="/profil" element={<Home />} />
						</Routes>

						<Routes>
							<Route path="/user/:id" element={<User />} />
						</Routes>
						<div className="main-container">
							<div>
								<Routes>
									<Route
										path="/user/:id/activity"
										element={<DailyActivity />}
									/>
								</Routes>

								<div className="infos-container">
									<Routes>
										<Route
											path="/user/:id/activity"
											element={<AverageSessions />}
										/>
										<Route
											path="/user/:id/average-sessions"
											element={<AverageSessions />}
										/>
									</Routes>
									<Routes>
										<Route
											path="/user/:id/activity"
											element={<RadarPerformance />}
										/>
										<Route
											path="/user/:id/performance"
											element={<RadarPerformance />}
										/>
									</Routes>
									<Routes>
										<Route path="/user/:id/activity" element={<KPI />} />
									</Routes>
								</div>
							</div>
							<div className="nutrients">
								<Routes>
									<Route path="/user/:id/activity" element={<Nutrient />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
