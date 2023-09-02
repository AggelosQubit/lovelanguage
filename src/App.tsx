import './App.css';
import LoveForm from './components/LoveformComponent/Loveform';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
	return (
		<Router>
			<div className="App">
				<div className="NavBarComponent">
					<NavBarComponent />
				</div>
				<div className="ChargedComponent">
					<Routes>
						<Route path='/KnowYourLL' element={<LoveForm />} />
						<Route path='/' element={<HomeComponent />} />
					</Routes>
				</div>
				<div className="FooterComponent">
					<FooterComponent />
				</div>

			</div>
		</Router>
	);
}

export default App
