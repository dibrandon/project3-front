import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

import AddWorldPage from './pages/AddWorldPage';

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute'; 
import AnonRoute from './components/AnonRoute'; 
import ToolsPage from './pages/ToolsPage';
//comentario para test de rama pre-dev-front
function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route exact path="/" component={HomePage} />
				<Route
					exact
					path="/projects"
					element={
						<PrivateRoute>
							<ProjectListPage />
						</PrivateRoute>
					}
				/>
								<Route
					exact
					path="/addWorld"
					element={
						<PrivateRoute>
							<AddWorldPage />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/tools"
					element={
						<PrivateRoute>
							<ToolsPage />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/projects/:id"
					element={
						<PrivateRoute>
							<ProjectDetailsPage />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/signup"
					element={
						<AnonRoute>
							<SignupPage />
						</AnonRoute>
					}
				/>
				<Route
					exact
					path="/login"
					element={
						<AnonRoute>
							<LoginPage />
						</AnonRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
